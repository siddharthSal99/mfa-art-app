import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import HomePage from './pages/HomePage';
import RandomPage from './pages/RandomPage';
import SearchPage from './pages/SearchPage';
import HistoryPage from './pages/HistoryPage';
import './App.css'

function App() {
    let [history, setHistory] = useState([])
    let addToHistory = (art) => {
        if(history.length >= 25){
            let newHistory = [art, ...history.slice(0,-1)]
            setHistory(newHistory)
        } else {
            setHistory([art, ...history])
        }
    }
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/random' element={<RandomPage addToHistory={addToHistory}/>}/>
                <Route path='/search'element={<SearchPage/>}/>
                <Route path='/history'element={<HistoryPage history={history}/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;