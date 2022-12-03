import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClientPage from './pages/ClientPage'
import FreelancerPage from './pages/FreelancerPage'
import GigPage from './pages/GigPage'
import NavBar from './components/NavBar/NavBar'
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/gigs' element={<GigPage />}></Route>
                <Route path='/freelancer' element={<FreelancerPage />}></Route>
                <Route path='/client' element={<ClientPage />}></Route>
                {/* <Route path='collect' element={<Collect />} /> */}
            </Routes>
        </Router>
    )
}

export default App
