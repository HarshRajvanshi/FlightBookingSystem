import React from 'react'
import './HeroStyles.css'
import Video from './abc.mp4'
import {Link} from 'react-router-dom'
function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>

            <div className="content">


                <div className="container">
                    <form>
                    <div className="input-wrap">
                            <label>Source</label>
                            <select>
                            <option value="1"></option>  
                            <option value="1">Mumbai</option>  
                            <option value="1">New Delhi</option> 
                            <option value="1">Bangalore</option>
                            <option value="1">Hyderabad</option>
                            <option value="1">Goa</option>
                            <option value="1">Kerela</option>
                            
                           
                            </select>
                        </div>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                            <option value="1"></option> 
                            <option value="1">Mumbai</option>  
                            <option value="1">New Delhi</option> 
                            <option value="1">Bangalore</option>
                            <option value="1">Hyderabad</option>
                            <option value="1">Goa</option>
                            <option value="1">Kerela</option>
                           
                           
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                        </div>

                      

                       
                        <Link to='/searchflight'><button className="butt" >Search Flight</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
