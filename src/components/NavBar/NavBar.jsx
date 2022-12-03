import { WorldIDWidget } from '@worldcoin/id'
import './navbar.css'
const NavBar = () => {
    return (
        <>
            <header className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='logo'>Lancers</h1>
                </div>
                <div className='navbar-links'>
                    <a href='#'>Gigs</a>
                    <a href='#'>For Freelancers</a>
                    <a href='#'>For Clients</a>
                </div>
                <div className='world-id'>
                    <WorldIDWidget
                        actionId='wid_staging_1c829bf138a85d3b022f50708046befa' // obtain this from developer.worldcoin.org
                        signal='tru_signal'
                        enableTelemetry
                        onSuccess={() => console.log('success')} // you'll actually want to pass the proof to the API or your smart contract
                        onError={(error) => console.error(error)}
                    />
                </div>
            </header>
        </>
    )
}

export default NavBar
