import { WorldIDWidget } from '@worldcoin/id'
import './home.css'
import { useAccount, useConnect } from 'wagmi'
import { Chat } from '@pushprotocol/uiweb'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useEffect } from 'react'

const Home = () => {
    const { address } = useAccount()

    useEffect(() => {
        console.log(address)
    }, [address])
    console.log(address)
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    return (
        <>
            <div className='home-container'>
                <section className='hero'>
                    <div className='hero-left-area'>
                        <div className='hero-heading-section'>
                            <h1 className='hero-heading'>
                                Establishing
                                <br />
                                <span className='framed'> Reputation</span>
                                <br />
                                and trust with zk
                            </h1>
                        </div>
                        <div className='hero-subheading'>
                            A decentralised and distributed platform for
                            freelance community based on zero knowledge
                            transparency and authentication in cost effective
                            and resource friendly manner
                        </div>
                    </div>
                    <div className='hero-right-area'>
                        <div className='grid'>
                            <div className='box'></div>
                            <div className='box'></div>
                            <div className='box'>
                                {' '}
                                <img
                                    src='https://photodune.img.customer.envatousercontent.com/files%2F314560249%2F11.jpg?w=200&h=200&fit=crop&crop=faces%2Cedges&fm=pjpg&q=40&s=57260cc3939347bcb6ab928ff069d873'
                                    alt='flamingo'
                                    width='150px'
                                    height='150px'
                                    className='flamingo'
                                />
                            </div>
                            <div className='box'></div>
                            <div className='box'></div>
                            <div className='box'></div>
                            <div className='box'>
                                <div className='long-rectangle'>
                                    <span className='num'> 36% </span>of
                                    freelancers face the problem of late
                                    payments or no payments according to a
                                    survey by Freelancer Study 2021
                                </div>
                            </div>
                            <div className='box'></div>
                            <div className='box'></div>
                            <br />
                        </div>
                    </div>
                </section>
                <button onClick={() => connect()}>Connect Wallet</button>
                <Chat
                    account={address} //user address
                    supportAddress='0xd19a12bdE1B768957aab46F9eB1c6B9F498c32DC' //support address
                    apiKey='jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0'
                    env='staging'
                />
            </div>
        </>
    )
}

export default Home
