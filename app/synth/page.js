"use client"

import { useEffect, useRef } from 'react'

const context = new AudioContext();
const osc = context.createOscillator();
const amp = context.createGain();
 
osc.connect(amp);
amp.connect(context.destination);
 
osc.start();
 
const updateValues = (e) => {
  const freq = (e.clientX / window.innerWidth) * 1000;
  const gain = e.clientY / window.innerHeight;
 
  osc.frequency.value = freq;
  amp.gain.value = gain;
};


export default function Home() {




    return (
        <div>

            <div>
                <div
                    style={{ width: '100vw', height: '100vh' }}
                    onMouseMove={updateValues}
                />
            </div>
        </div>
    )
}
/*



*/
