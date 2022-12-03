import { WorldIDWidget } from '@worldcoin/id'
import './home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <section className='hero'>
                <div className='hero-left-area'>
                    <div className='hero-heading-section'>
                        <h1 className='hero-heading'>
                            Bridging
                            <br />
                            <span className='framed'> Reputation</span>
                            <br /> with zk
                        </h1>
                    </div>
                    <div className='hero-subheading'>
                        Tackling problems in freelancing through trustless zk
                        and reputation system
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
                            <div className='long-rectangle'></div>
                        </div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <br />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
