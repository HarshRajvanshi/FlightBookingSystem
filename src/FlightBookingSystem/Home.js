import React from 'react'

import Footer from './Footer';
import Hero from './Hero'
import Navbar from './Navbar'
import Search from './Search';
import Selects from './Selects';

import '../App.css';

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Search />
      <Selects />


    </div>
  )
}
