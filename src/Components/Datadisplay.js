import React from 'react';
import './Datadisplay.css';
export default function Datadisplay() {
    return (
        <>
            <section className='data-display'><p><img src={require('../Assets/thermometer-half.svg').default} alt="thermometer" /> Temperature : 78K</p><p><img src={require('../Assets/droplet-half.svg').default} alt="humidity" /> Humidity : 40%</p>
                <p><img src={require('../Assets/moisture.svg').default} alt="moisture" /> Moisture : 1024</p><p><img src={require('../Assets/toggle2-off.svg').default} alt="on/off" /> Motor : on</p></section>
        </>
    )
}
