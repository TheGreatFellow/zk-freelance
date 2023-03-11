import { Link } from 'react-router-dom'

const GigPage = () => {
    return (
        <div>
            <div className='client-container'>
                <h1 className='progress-heading'>Gigs Available</h1>
                <div className='progress-container'>
                    <Link className='home-card' to='/freelancers'>
                        <div className='progress-card'>
                            <div className='progress-card-header'>
                                <h2 className='progress-card-title'>
                                    Build an NFT project on Polygon
                                </h2>
                            </div>
                            <p className='progress-card-description'>
                                Build a 7777 NFT project with utility by 2023
                            </p>
                            <p className='progress'>0.72 Eth</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GigPage
