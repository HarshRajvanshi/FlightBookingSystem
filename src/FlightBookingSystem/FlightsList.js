import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminDashboard from './AdminDashboard'
export default function FlightsList() {
    const [flightList, setFlightList] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:9095/flightslist').then(a => {
            console.log(a.data);
            setFlightList(a.data);
        })
    }, [])

    return (
        <>
            <AdminDashboard />
            <div><h3 style={{ color: 'Blue', marginTop: 40, marginLeft: 143, fontSize: 30 }}>List Of Flights</h3></div>
            <div className='dashboard'>
                <table border='2' className='flightTable'>
                    <thead>
                        <tr>
                            <th>Unique Id</th>
                            <th>Flight Name</th>
                            <th>Flight Source</th>
                            <th>Flight Destination</th>
                            <th>Flight Date</th>
                            <th>Flight Price</th>

                        </tr>
                    </thead>
                    <tbody>{
                        flightList.map(a =>
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.flightName}</td>
                                <td>{a.source}</td>
                                <td>{a.destination}</td>
                                <td>{a.date}</td>
                                <td>₹ {a.price}</td>

                            </tr>)
                    }
                    </tbody>

                </table>

            </div>
        </>

    )
}
