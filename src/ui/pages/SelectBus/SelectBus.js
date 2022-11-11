import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Bus from '../../components/Bus/Bus'
import { useParams, Link, Routes, Route } from 'react-router-dom'

export default function SelectBus(){
    let params = useParams()
    const getRoute = "https://b371-105-162-20-60.eu.ngrok.io/matatu"
    const [matatu, setMatatu]=useState([])
    
    useEffect(()=>{
        fetch(`${getRoute}/${params.tripId}`)
        .then(r => r.json())
        .then((data)=>setMatatu(data)) 
    }, [params.tripId])
    console.log(matatu)
     const mat = [matatu]
    //  let sacco = mat.sacco
    //  let reg_no = mat.reg_no
    //  let departure = matatu.route.departure
    //  let destination = matatu.route.destination
    //  let time = matatu.route.destination
    //  let price = matatu.route.price
    function GetToSelect(){
        <Routes>
          <Route path={`/selectbus`} />
        </Routes>;
     }
    return (
        <>
        
            <Header />

            <div className="hero hero-mini">
                <div className="hero-background"></div>
                <div className="hero-foreground d-flex align-items-center">

                    <div className="container text-center">
                        <div className="hero-header">
                            Select one of the buses plying your route
                        </div>
                    </div>

                </div>
            </div>



            {/* Buses */}
            <section className="py-5">
                <div className="container">

                    {/* {mat.map((matatu)=>{<Bus sacco ={matatu.sacco} reg_no ={matatu.reg_no}/>})} */}
            {mat.map((matatu)=>{

            return <div className="bus d-fle">
            <div className="row">
                <div className="col-lg-4">
                    <img className="bus-logo" src="img/buses/easycoach.png"/>
                    <hr />
                    <div className="bus-name">
                        {matatu.sacco}
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
                        <Link to={'/Book'}><button className="btn-main" onClick={GetToSelect}>Book Now</button></Link>
                        
                    </div>
                </div>
            </div>
            
        </div>
        })}
                </div>
            
            </section>

            <Footer />
        </>
    )
}
