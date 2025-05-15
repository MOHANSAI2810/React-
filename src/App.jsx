import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apple from './Apple'
import Sample from './components/Sample'
import './sample.css'
import Props1 from './props/Props1'
import Props2 from './props/Props2'

const a ='Mohan'
var user={
  name:'chinnu'
}

function App() {
 return (
  <div className='App'>
    <Props1 name='pandu'/>
    <Props2 name={user.name}/>
    <Apple />
    <h1 class='Mohan'>I'm {a}</h1>
    <Sample />
    <img className='profile' src="images/profile.jpg"/>
  </div>
 ) 
}

export default App
