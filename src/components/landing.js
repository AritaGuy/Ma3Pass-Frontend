import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom"
// import { SelectBus } from "./selectbus";
import { Route, Routes } from "react-router-dom";

export const LandingPage = ({ ...props }) => {
  return (
    <div className="landing-page">

      {/* TOP MENU */}
      <div>
        <div className="logo">
          <div className="ma3pass2">
            <span>
              <span className="ma3pass2-span">ma3</span>
              <span className="ma3pass2-span2">Pass</span>
            </span>
          </div>
        </div>

        <div className="menu2">
          <div className="rectangle-121"></div>
          <div className="home2">Home</div>
          <div className="how-it-works2">How it Works</div>
          <div className="routes2">Routes</div>
          <div className="my-tickets2">My Tickets</div>
        </div>

        <div className="button4">
          <div className="rectangle-92"></div>
          <div className="my-account">My Account</div>
        </div>

      </div>
      {/* END TOP MENU */}



      <div className="image-2"></div>

      <div className="features-2">
        <div className="bg3"></div>
        <div className="group-175562">
          <div className="ellipse-7332"></div>
          <div className="ellipse-7342"></div>
        </div>
        <div className="texts2">
          <div className="button2">
            <div className="rectangle-9"></div>
            <div className="book-now">Book Now</div>
          </div>
          <div className="we-offer-multiple-buses-and-matatus-plying-various-routes-to-give-you-the-choice-of-comfort--price-and-convenience-that-you-are-looking-for--travel-in-style-with-ma3pass">
            We offer multiple buses and matatus plying various routes to give
            you the choice of comfort, price and convenience that you are
            looking for. Travel in style with Ma3Pass
          </div>
          <div className="book-from-all-the-top-saccos">
            Book from all the top SACCOs
          </div>
        </div>
      </div>

      <div className="bg4"></div>
      <div className="image-1"></div>
      <div className="group-175563">
        <div className="ellipse-7333"></div>
        <div className="ellipse-7343"></div>
      </div>

      <div className="texts3">
        <div className="book-a-bus-or-matatu-the-easy-way">
          Book a bus or matatu the easy way
        </div>

        <div className="group-6">
          <div className="group-4">
            <div className="group-2">
              <div className="ellipse-1"></div>
              <svg
                className="vector-1"
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3L2 5L7 0"
                  stroke="#9085D1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="fully-automated-booking-service">
              Fully automated booking service
            </div>
          </div>
          <div className="group-5">
            <div className="group-3">
              <div className="ellipse-12"></div>
              <svg
                className="vector-12"
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3L2 5L7 0"
                  stroke="#9085D1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="quality-and-security-assured">
              Quality and security assured
            </div>
          </div>
        </div>

        <div className="bar2">
          <div className="mail2">
            <div className="rectangle-42"></div>
            <div className="departure">Departure</div>
          </div>
          <div className="mail2">
            <div className="rectangle-43"></div>
            <div className="destination">Destination</div>
          </div>
          {/* <NavLink to="/selectbus"> */}
          <div className="button3">
            <div className="rectangle-52"></div>
            <Link to="/selectbus"><button className="search" onClick={()=>{
              <Routes>
              <Route path={`/selectbus`} />
              </Routes>
            }}>Search</button></Link> 
          </div>
          {/* </NavLink> */}
        </div>
        
        <div className="mail3">
          <div className="rectangle-44"></div>
          <div className="select-date">Select Date</div>
        </div>
        <div className="mail4">
          <div className="rectangle-45"></div>
          <div className="time">Time</div>
        </div>
      </div>
      
      
      <div className="image-5"></div>
      <div className="image-6"></div>
      <div className="image-7"></div>
      <div className="image-8"></div>
      <div className="image-9"></div>

      <div className="texts4">
        <div className="top-destinations">Top Destinations</div>
      </div>

      <div className="texts5">
        <div className="here-are-some-of-the-locations-you-can-book-transport-to">
          Here are some of the locations you can book transport to
        </div>
      </div>
      <div className="texts6">
        <div className="nakuru">Nakuru</div>
      </div>
      <div className="texts6">
        <div className="kisumu">Kisumu</div>
      </div>
      <div className="texts6">
        <div className="mombasa">Mombasa</div>
      </div>
      <div className="texts7">
        <div className="diani">Diani</div>
        <div className="texts6">
          <div className="kitale">Kitale</div>
        </div>
        <div className="texts6">
          <div className="malindi">Malindi</div>
        </div>
      </div>
      {/* DESTINATIONS */}
      
      <div className="image-removebg-preview-1"></div>


      {/* CTA */}
      <div className="cta">
        <div className="bg2"></div>

        <div className="group-66">
          <div className="ellipse-35"></div>
          <div className="ellipse-36"></div>
        </div>

        <div className="group-67">
          <div className="rectangle-176"></div>
          <div className="rectangle-177"></div>
        </div>

        <div className="group-457">
          <div className="bar">
            <div className="mail">
              <div className="rectangle-4"></div>
              <div className="input-your-email---">Input your email...</div>
            </div>
            <div className="button">
              <div className="rectangle-5"></div>
              <div className="try-for-free">Try for free</div>
            </div>
          </div>
          <div className="texts">
            <div className="get-notified-of-new-routes-and-discounts-on-the-go">
              Get notified of new routes and discounts on the go
            </div>
            <div className="subscribe-our-newsletter">
              Subscribe our newsletter
            </div>
          </div>
        </div>

      </div>
      {/* CTA */}



      {/* FOOTER */}
      <div className="footer">
        <div className="group-17558">
          <div className="bg"></div>
          <div className="group-17556">
            <div className="ellipse-733"></div>
            <div className="ellipse-734"></div>
          </div>
        </div>
        <div className="rectangle-179"></div>
        <div className="term---condition">Term &amp; Condition</div>
        <div className="privacy---policy">Privacy &amp; Policy</div>
        <div className="ma3pass-2022">MA3PASS 2022</div>
        <div className="menu-3">
          <div className="social">Social</div>
          <div className="instagram">Instagram</div>
          <div className="facebook">Facebook</div>
          <div className="twitter">Twitter</div>
          <div className="linkedin">Linkedin</div>
        </div>
        <div className="menu-1">
          <div className="menu">Menu</div>
          <div className="home">Home</div>
          <div className="how-it-works">How it works</div>
          <div className="routes">Routes</div>
          <div className="my-tickets">My Tickets</div>
        </div>
        <div className="group-458">
          <div className="search--book-and-pay-for-your-matatu-ticket-the-easy-way-with-ma3pass--travel-with-convenience">
            Search, book and pay for your matatu ticket the easy way with
            Ma3Pass. Travel with convenience
          </div>
          <div className="logo">
            <div className="ma3pass">
              <span>
                <span className="ma3pass-span">Ma3</span>
                <span className="ma3pass-span2">Pass</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}

    </div>
  );
};