import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Media from './pages/Media'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

	const [mediaType, setMediaType] = useState('movie') 

	return (
		<div className="App">
			<BrowserRouter>
				<Header setMediaType={setMediaType}/>
				<Routes>
					<Route 
						path='/' 
						element={<Home mediaType={mediaType}/>} 
						exact
					/>
					<Route path='/media/:mediaType/:id' element={<Media/>}/>
					<Route path='*' element={<NotFound/>}/>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	)
}

export default App
