import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home/Home'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App
