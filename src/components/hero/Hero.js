import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/maldivesVideo.mp4'
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
                                <option value="1">Grande Antigua</option>
                                <option value="1">Grenda</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>date</label>
                                <input type="date" />
                            </div>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" for="exampleRadios1">
                                One way trip
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" for="exampleRadios1">
                                Round way trip
                            </label>
                        </div>

                        <button className="butt"> Process </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
