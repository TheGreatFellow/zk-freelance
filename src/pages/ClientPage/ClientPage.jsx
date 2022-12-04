import { useState } from 'react'
import Web3 from 'web3'
import zkFreelanceAbi from '../../abi/zkFreelanceAbi.json'
import './clientPage.css'

const ClientPage = () => {
    const [gigVisible, setGigVisible] = useState('')
    const [price, setPrice] = useState(0)
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(
        zkFreelanceAbi,
        '0xE4109736C51831Ce5daeCfcc5D94E8E57E57E843'
    )
    const stakeClientAmount = async (value) => {
        console.log(value)
        try {
            await contract.methods
                .stake()
                .send({ from: currentAccount, value: value })
        } catch (error) {
            console.log(error)
        }
    }
    const approve = async (lowResImageCID) => {
        try {
            const ogImageCID = await contract.methods
                .verifyProof(lowResImageCID)
                .send({ from: currentAccount })
            return ogImageCID
        } catch (error) {
            console.log(error)
        }
        return null
    }
    return (
        <div>
            <div className='client-container'>
                <h1 className='progress-heading'>Projects in progress</h1>
                <div className='progress-container'>
                    <div className='progress-card'>
                        <div className='progress-card-header'>
                            <h2 className='progress-card-title'>Build a DEX</h2>
                        </div>
                        <p className='progress-card-description'>
                            Build a DEX using Connext within 15 days
                        </p>
                        <p className='progress'>Status: In progress...</p>
                    </div>
                </div>
            </div>
            <button
                type='submit'
                className='gig'
                onClick={() => setGigVisible(true)}
            >
                Add new gig
            </button>
            {gigVisible && (
                <>
                    <div className='gig-container'>
                        <input type='text' placeholder='Title' />
                        <input type='text' placeholder='Description' />
                        <input
                            type='number'
                            placeholder='Price'
                            onChange={(e) => setPrice(e.value)}
                        />
                        <button
                            type='submit'
                            className='gig'
                            onClick={stakeClientAmount(price)}
                        ></button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ClientPage
