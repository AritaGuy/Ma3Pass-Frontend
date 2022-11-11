import React from 'react'
import './Bus.css'

export default function Bus({sacco}){
    return (
        <div className="bus d-fle">
            
            <div className="row">
                <div className="col-lg-4">
                    <img className="bus-logo" src="img/buses/easycoach.png"/>
                    <hr />
                    <div className="bus-name">
                        {sacco}
                    </div>
                </div>

                <div className="col-lg-4 d-flex align-items-center">

                    <div>
                        <div className="departure-time-text mb-2">Departure Time</div>
                        <div className="from_time mb-2">7:30 PM</div>
                        <div className="from">from Nairobi Bus Station</div>
                    </div>

                </div>

                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <div>
                        <div className="booking-price mb-3">KSh 1,300</div>
                        <button className="btn-main">Book Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
