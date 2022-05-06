import React from 'react'
import './HeroStyles.css'

//import Video from './maldivesVideo.mp4'
import Video from './abc.mp4'
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
                            <label>Destination</label>
                            <select>
                            <option value="1">Argentina</option>  
                            <option value="1">Australia</option> 
                            <option value="1">Algeria</option>
                            <option value="1">Bangladesh</option>
                            <option value="1">Bhutan</option>
                            <option value="1">Bolivia</option>
                            <option value="1">Bora Bora</option>
                            <option value="1">Cambodia</option>
                            <option value="1">Egypt</option>
                            <option value="1">Greece</option>
                            <option value="1">Hong Kong</option>
                            <option value="1">Japan</option>
                            <option value="1">Jordan</option>
                            <option value="1">Kashmir</option> 
                            <option value="1">Kenya</option>
                            <option value="1">Kerela</option>
                                <option value="1">Maldives</option>
                                <option value="1">Nepal</option>
                                <option value="1">Paris</option>
                                <option value="1">Philippines</option>
                                <option value="1">Qatar</option>
                                <option value="1">Russia</option>
                                <option value="1">Switzerland</option>
                                <option value="1">Turkey</option>
                                <option value="1">Taiwan</option>
                                <option value="1">Thailand</option>
                                <option value="1">Singapore</option>
                                <option value="1">South Korea</option>
                                <option value="1">United Arab Emirates</option>
                                <option value="1">Vietnam</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" for="exampleRadios1"> One way trip</label><br/>
                        </div>

                       
                        <button className="butt" > Process </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero