import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import { Route, Routes, Link } from 'react-router-dom'

export default function Home(){
    const getRoute = "http://localhost:8000/routes"
    const [route, setRoute] = useState([])

    useEffect(()=>{
        fetch(`${getRoute}`)
        .then(r => r.json()
        .then((data)=>setRoute(data))) 
    }, [])
    function GetToSelect(){
        <Routes>
          <Route path={`/selectbus`} />
        </Routes>;
     }

    return (
        <>
        
            <Header />

            <div className="hero">
                <div className="hero-background"></div>
                <div className="hero-foreground d-flex align-items-center">

                    <div className="container text-center">
                        <div className="hero-header mb-5">
                            Book a bus or matatu the easy way
                        </div>

                        <div className="hero-text mb-4">
                            Fully automated booking service
                        </div>
                       {route.map((trip)=>{ 
                          return <div className="row">
                           <div className="col-lg-3">
                           
                              <select className="input" placeholder="Destination">
                                   {/* <option value="">Departure</option> */}
                                   <option key={trip.id} value={trip.departure}>{trip.departure}</option>
                                   
                               </select>
                           </div>

                           <div className="col-lg-3">
                           
                               <select className="input" placeholder="Destination">
                                   {/* <option value="">Destination</option> */}
                                   <option key={trip.id} value={trip.destination}>{trip.destination}</option>
                               </select>
                           </div>
                           
                        

                           {/* <div className="col-lg-2">
                               <input className="input" type="date" placeholder="Select Date" />
                           </div>

                           <div className="col-lg-2">
                               <input className="input" placeholder="Time" />
                           </div> */}

                           <div className="col-lg-2">
                            <Link to={`/selectbus/${trip.id}`}>
                               <button className="btn-main btn-block" onClick={GetToSelect}>Search</button>
                             </Link>
                            </div>
                           
                       </div>
                       })} 
                        
                    </div>

                </div>
            </div>



            {/* Top Destinations */}
            <section className="py-5">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="top-destination">
                                <img className="img-fluid destination-img" src="/img/nakuru.png" />
                                <div className="destination-text">Nakuru</div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="top-destination">
                                <img className="img-fluid destination-img" src="/img/kisumu.png" />
                                <div className="destination-text">Kisumu</div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="top-destination">
                                <img className="img-fluid destination-img" src="/img/mombasa.png" />
                                <div className="destination-text">Mombasa</div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="top-destination">
                                <img className="img-fluid destination-img" src="/img/diani.png" />
                                <div className="destination-text">Diani</div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="top-destination">
                                <img className="img-fluid destination-img" src="/img/kitale.png" />
                                <div className="destination-text">Kitale</div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="top-destination">
                                <img className="img-fluid destination-img" src="/img/malindi.png" />
                                <div className="destination-text">Malindi</div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* CTA */}
            <section className="py-5 cta">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="cta-header mb-4">
                                Book from all the top SACCOs
                            </div>

                            <div className="cta-text mb-4">
                                We offer multiple buses and matatus plying various routes to give
                                you the choice of comfort, price and convenience that you are
                                looking for. Travel in style with Ma3Pass
                            </div>

                            
                        </div>

                        <div className="col-lg-6">
                            <img className="img-fluid cta-img" src="/img/bus.png" />
                        </div>

                    </div>

                </div>
            </section>
        
            <Footer />
        </>
    )
}
