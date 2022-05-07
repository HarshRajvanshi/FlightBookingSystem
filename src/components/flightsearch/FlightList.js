import React from 'react';
import './FormS.css';
import {Link} from 'react-router-dom';
import plane from './plane.png';
import FlightData from './FlightData';
import { render } from '@testing-library/react';
import BookFlight from './BookFlight';
import PopUp from './PopUp';

 
const DisplayFlight=(props)=>
{
  return(
    <ul className="Flight">
      <li key={props.data.id}>
        <div  className="list_item_div">
            <div className="content-div">
            <div className="name-no">
            <h3>{props.data.name}</h3>
                <h3>{props.data.fno}</h3>
            </div>
                <div className="inner_cont_div_fromto">
                    <h1 className="from_flt">{props.data.from}</h1>
                    <img className="flightlogo" src={plane}></img>
                    <h1 className="from_flt">{props.data.to}</h1>  
                </div>
                <div className="inner_cont_div_down">   
                    <p className="time_flt">{props.data.time}</p>
                    <a href=" " className="flight_details">Flight Details</a>
                    <h2 className="price_flt"><text> {"     av ",'\u20A8'}</text>{props.data.price}</h2>
                </div>
            </div>
            <div className="button-div">
                 <PopUp data={props.data} />
            </div> 
        </div>
      </li>
  </ul>
  );
} 

export default DisplayFlight