import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import './SearchFlightStyles.css'
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Footer from './Footer';
export default function SearchFlight() {
    const[data,setData]=useState([]);
   
    useEffect(()=>{
       
        axios.get('http://localhost:9095/flightslist').then(a=>{
            
            setData(a.data);
        })
    })
  return (
      <>
     <br/>
    
    <Button   className='li'><Link to="/home" >Go Back To Home Page</Link></Button>
    <div>
     <table className='table'>
      <tbody>{
      data.map(a=>
      <tr key={a.id}>
                <td >{a.id}</td>
                <td>{a.flightName}</td>
                <td>{a.source}</td>
                <td>{a.destination}</td>
                <td>{a.price}</td>
                <td><Link to="/signup">Book Now</Link></td>
    </tr>)
      }
      </tbody>

  </table>
  
    </div>
    <Footer/>
    </>
  );
  }
 
  
 
