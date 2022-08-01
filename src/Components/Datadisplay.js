import React,{useState} from 'react';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import './Datadisplay.css';
export default function Datadisplay() {
    let [motorBoolean,setMotorBoolean]=useState(false);
    return (
        <>
            {/* <section className='data-display'> <div className="circular-progress-bar-box"> <img src={require('../Assets/thermometer-half.svg').default} alt="thermometer" /> <p>Temperature : 78K</p></div> <p><img src={require('../Assets/droplet-half.svg').default} alt="humidity" /> Humidity : 40%</p>
                <p><img src={require('../Assets/moisture.svg').default} alt="moisture" /> Moisture : 1024</p><p><img src={require('../Assets/toggle2-off.svg').default} alt="on/off" /> Motor : on</p>
            </section> */}
            <section className="data-display"><div className="motor-display-box"><p className="display-box-heading">System State</p>{motorBoolean===true && <button className='motor-button-on'>ON</button>} {motorBoolean===false && <button className='motor-button-off'>OFF</button>}<p className="display-box-sub-heading">Main Irrigation</p></div><div className="temperature-display-box"><p className="display-box-heading">Temperature(°C)</p><SemiCircleProgressBar percentage={33} showPercentValue /></div>
            <div className="humidity-display-box"><p className="display-box-heading">Humidity</p><p className="humidity-display">64%</p></div><div className="luminosity-display-box"><p className="display-box-sub-heading">Luminosity</p><p className="luminosity-display">5mV</p><p className="display-box-sub-heading">Light Source</p></div></section>

                    </>

    )
}
