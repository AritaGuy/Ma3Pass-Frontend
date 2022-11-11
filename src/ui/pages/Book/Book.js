import React, {useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./book.css"
import {Link, Route, Routes} from "react-router-dom"

export default function Book(){
    const [formData, setFormData] = useState({
        passenger_id: "",
        ticket_no: "",
        matatu_id: ""
      });
    // const [passengerId, setPassengerId] = useState()
    // const [matatuId, setMatatuId] = useState()
    // const [ticketNo, setTicketNo] = useState()
      
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.id]: parseInt(event.target.value),
        });
      }
     
      function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        fetch("https://b371-105-162-20-60.eu.ngrok.io/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON"
          },
          body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data=>{
          
          console.log(data)
          if (data){
            alert("You have booked a ticket")
          }
        
        })
        
      }

      function GetToSelect(){
        <Routes>
          <Route path={`/selectbus`} />
        </Routes>;
     }
     
    return (
      <>
        <Header />
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="fields">
            <label>Passenger ID</label>
            <br />
            <input
              className="inputs"
              id = "passenger_id"
              type="number"
              value={formData.passenger_id}
              onChange={handleChange}
            />
          </div>

          <div className="fields">
            <label>ticket_no</label>
            <br />
            <input
              className="inputs"
              id = "ticket_no"
              type="number"
              value={formData.ticket_no}
              onChange={handleChange}
            />
          </div>

          <div className="fields">
            <label>Matatu Id</label>
            <br />
            <input
              className="inputs"
              id ="matatu_id"
              type="number"
              value={formData.matatu_id}
              onChange={handleChange}
            />
          </div>

          <br />
          
          <input name="submit" type="submit" value="Submit" />
            
          
          
        </form>

        <Footer />
      </>
    ); 
}