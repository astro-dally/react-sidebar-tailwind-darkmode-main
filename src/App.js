import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AllItems from './pages/AllItems'
import AddNewItems from './pages/AddNewItems'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import Login from './pages/Login'
import UserHistory from './pages/UserHistory'
import Documentation from './pages/Documentation'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/allitems' element={<AllItems />} />
                    <Route path='/Notification' element={<Notification />} />
                    <Route path='/addNewItems' element={<AddNewItems />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/userhistory' element={<UserHistory/>}/>
                    <Route path='/documentation' element={<Documentation />} />
                    <Route path='/login' element={<Login />} />

                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
