import React, {useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./book.css"

export default function Book(){
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: ""
      });
      
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
        });
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/passengers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        });
      }
     
    return (
      <>
        <Header />
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="fields">
            <label>Name</label>
            <br />
            <input
              className="inputs"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="fields">
            <label>Phone</label>
            <br />
            <input
              className="inputs"
              type="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="fields">
            <label>Password</label>
            <br />
            <input
              className="inputs"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>

        <Footer />
      </>
    ); 
}