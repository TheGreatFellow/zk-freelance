import { WorldIDWidget } from '@worldcoin/id'
import * as jose from 'jose'

// const jsonKeys = await (
//     await fetch('https://developer.worldcoin.org/api/v1/jwks')
// ).json()
// var token = response.headers.authorization
// const kid = jose.decodeProtectedHeader(token).kid
// const jsonKey = jsonKeys.keys.find((key) => key.kid === kid)
// const publicKey = await jose.importJWK(jsonKey, 'PS256')
// const { payload } = await jose.jwtVerify(token, publicKey, {
//     issuer: 'https://developer.worldcoin.org',
// })
// if (payload.verified) {
//     console.log('final step ig')
// }
const Home = () => {
    return (
        <div>
            <div className='App'>
                <WorldIDWidget
                    actionId='wid_staging_1c829bf138a85d3b022f50708046befa' // obtain this from developer.worldcoin.org
                    signal='this_my_signal'
                    enableTelemetry
                    onSuccess={() => console.log('success')} // you'll actually want to pass the proof to the API or your smart contract
                    onError={(error) => console.error(error)}
                />
                <a href='https://developer.worldcoin.org/hosted/wid_staging_1c829bf138a85d3b022f50708046befa#saveActionUserInterface?signal={this_my_signal}'></a>
            </div>
        </div>
    )
}

export default Home
