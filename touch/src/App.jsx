import { useState } from 'react'
import bgVideo from './assets/bg.mp4'
import medpix from './assets/med.jpg'
import ladypix from './assets/woman.jpg'
import Page from './pay'
import Questions from './quest'
import Form from './form'
import Footer from './footer'
import './App.css'

function App() {
  return (
    <>
      <div className="app">
        <video className="background-video" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content">
          <p className='beta'>Welcome to the beta world</p>
          <h2>A Touch of Class in</h2>
          <h2>Your Every Financial Decision</h2>

          <p className='lorem'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque perspiciatis, 
            repellendus non voluptatum enim quasi eveniet mollitia! Magni facilis aperiam 
            incidunt aut, architecto ipsam eius minus quidem nisi quibusdam sint?
          </p>

          <div className="join">
            <button>Get Started for free &rarr;</button>
            <p>
              <img src={medpix} alt="medpix" />
              <img src={ladypix} alt="ladypix" />
              Trusted by over 20k+ people in the world
            </p>
          </div>

          <div className="bills">
            <div className="manage">
              <h3>Bills Management</h3>
              <p>Easily manage, pay and reconcile business bills</p>
              <div className="list">
                <button>Show as list</button>
                <button>&darr; Download Zip</button>
              </div>
            </div>

            <div className="manage">
              <h3>Online money exchange</h3>
              <p>
                <span>$</span>230.00 
                <span>
                  <select>
                    <option value="euro">Euro</option>
                    <option value="pounds">Pounds</option>
                    <option value="currency">Currency</option>
                  </select>
                </span>
              </p>

              <p>
                <span>@#</span>600.00 
                <span>
                  <select>
                    <option value="euro">Euro</option>
                    <option value="pounds">Pounds</option>
                    <option value="currency">Currency</option>
                  </select>
                </span>
              </p>
            </div>

            <div className="manage">
              <h3>Show balance</h3>
              <p>My credit card</p>
              <h3>7342 8913 **** 6091</h3>
            </div>
          </div>
        </div>
      </div>
      <Page />
      <Questions/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
