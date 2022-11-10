import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Bus from '../../components/Bus/Bus'

export default function SelectBus(){
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

                    <Bus />
                    <Bus />
                    <Bus />

                </div>
            </section>

            <Footer />
        </>
    )
}
