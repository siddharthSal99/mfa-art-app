import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import HomePage from './pages/HomePage';
import RandomPage from './pages/RandomPage';
import SearchPage from './pages/SearchPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/random' element={<RandomPage/>}/>
                <Route path='/search'element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;