import React, { useEffect, useState } from 'react';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { db } from '../Firebase';
import { ref, onValue } from "firebase/database";
import './Datadisplay.css';
export default function Datadisplay() {
    let [motorBoolean, setMotorBoolean] = useState(false);
    let [tempValue, setTempValue] = useState(20);
    let [luminousIntensity, setLuminousIntensity] = useState(0);
    let [humidityValue, setHumidityValue] = useState(0);
    const luminosity = ref(db, 'realtimedata/li/');
    const temperature = ref(db, 'tempdata/t/');
    const humidity = ref(db, 'humdata/h/');
    useEffect(() => {
        onValue(luminosity, (snapshot) => {
            const data = snapshot.val();
            setLuminousIntensity(data);
        });
    });
    useEffect(() => {
        onValue(temperature, (snapshot) => {
            const data = snapshot.val();
            setTempValue(data);
        });
    });
    useEffect(() => {
        onValue(humidity, (snapshot) => {
            const data = snapshot.val();
            setHumidityValue(data);
        });
    });
    return (
        <>
            {/* <section className='data-display'> <div className="circular-progress-bar-box"> <img src={require('../Assets/thermometer-half.svg').default} alt="thermometer" /> <p>Temperature : 78K</p></div> <p><img src={require('../Assets/droplet-half.svg').default} alt="humidity" /> Humidity : 40%</p>
                <p><img src={require('../Assets/moisture.svg').default} alt="moisture" /> Moisture : 1024</p><p><img src={require('../Assets/toggle2-off.svg').default} alt="on/off" /> Motor : on</p>
            </section> */}
            <section className="data-display"><div className="condition-display" style={luminousIntensity>=2800&&luminousIntensity<=4000&&tempValue>=23&&tempValue<=35&&humidityValue>=38?{backgroundColor:`green`}:{backgroundColor:`red`}}>{luminousIntensity>=2800&&luminousIntensity<=4000&&tempValue>=23&&tempValue<=35&&humidityValue>=38?`Conditions are ideal`:`Conditions are not ideal`}</div><div className="motor-display-box"><p className="display-box-heading">System State</p>{motorBoolean === true && <button className='motor-button-on'>ON</button>} {motorBoolean === false && <button className='motor-button-off'>OFF</button>}<p className="display-box-sub-heading">Main Irrigation</p></div><div className="temperature-display-box"><p className="display-box-heading">Temperature(°C)</p><SemiCircleProgressBar percentage={25} showPercentValue /></div>
                <div className="humidity-display-box"><p className="display-box-heading">Humidity</p><p className="humidity-display">{40}%</p></div><div className="luminosity-display-box"><p className="display-box-sub-heading">Luminosity</p><p className="luminosity-display">{luminousIntensity}mV</p><p className="display-box-sub-heading">Light Source <em>({luminousIntensity <= 40 ? `Dark` : luminousIntensity > 40 && luminousIntensity <= 800 ? `Dim` : luminousIntensity > 800 && luminousIntensity <= 2000 ? `Light` : luminousIntensity > 2000 && luminousIntensity <= 3200 ? `Bright` : `Very Bright`})</em></p></div></section>
        </>
    )
}
//<40-dark
//<800-dim
//<2000-light
// <3200-bright
//very bright
// 2800-4000(li),25-30(t),40%(h)