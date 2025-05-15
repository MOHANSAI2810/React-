import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apple from './Apple'
import Sample from './components/Sample'
import './sample.css'

const a ='Mohan'

function App() {
 return (
  <div className='App'>
    <Apple />
    <h1 class='Mohan'>I'm {a}</h1>
    <Sample />
    <img className='profile' src="images/profile.jpg"/>
  </div>
 ) 
}

export default App
