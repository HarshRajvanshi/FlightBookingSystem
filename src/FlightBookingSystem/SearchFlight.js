import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchFlightStyles.css'
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Footer from './Footer';
export default function SearchFlight(props) {
  const [data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);

  const getSearchParams = () => {
    const values = {}
    const search = unescape(window.location.search.replace("?", ""));
    search.split("&").forEach(pair => {
      const splited = pair.split("=");
      return values[splited[0]] = splited[1];
    })
    return values;
  };

  const getFilteredData = (data, filters) => {
    return (data ?? []).filter(data => data.source === filters.source && data.destination === filters.destination && data.date === filters.date);
  }

  useEffect(() => {
    const params = getSearchParams();

    console.log(params);
    axios.get('http://localhost:9095/flightslist').then(({ data }) => {
      const filteredData = getFilteredData(data, params);
      setData(filteredData);

    }).catch(err => console.log(err))
  }, []
  )


  useEffect(() => {

    //console.log(props.datevalue);
    for (let i = 0; i < data.length; i++) {
      if (data[i].date === "05/09/2022" && data[i].source === "Kerela" && data[i].destination === "New delhi") {
        setShowData([...showdata, data[i]])
      }
    }



  }, [])
  console.log(window.location.search);

  return (
    <div className='searchFlightContainer'>
      <br />

      <Button className='li'><Link to="/home" >Go Back To Home Page</Link></Button>
      {data.length === 0 ? <h3 className='textCenter'>No flight found</h3> : <div className='flightsGrid'>
        <table className='table'>
          <thead>
            <tr>
              <th>Flight Name</th>
              <th>Flight Source</th>
              <th>Flight Destination</th>
              <th>Flight Date</th>
              <th>Flight Price</th>
              <th>Ready to book</th>
            </tr>
          </thead>
          <tbody>{
            data.map(a =>
              <tr key={a.id}>
                <td>{a.flightName}</td>
                <td>{a.source}</td>
                <td>{a.destination}</td>
                <td>{a.date}</td>
                <td>₹ {a.price}</td>
                <td><Link to="/booked">Book Now</Link></td>
              </tr>)
          }
          </tbody>

        </table>

      </div>}
    </div>
  );
}


