import * as React from 'react'
import '../styles/global.css'


const Aboutme = () => {
    return (
        <div id="aboutme-container">
            <h2 className='Aboutme_header'>About Me</h2>
            <div className='Aboutme_text'>
            <p >
            My name's Chad. I'm an Air Force veteran turned developer with a strong interest in cybersecurity.
            After leaving active duty, I went on to graduate from FullStack Academy in early 2021.
            I consider myself a lifelong student; since my start at FullStack with Javascript, I've 
            branched out and touched on a handful of different languages(Python, C#, C++, x86 Assembly) 
            and recently published my first mobile game to the Google Play Store. 
            I'm currently double majoring in Cybersecurity, as well as Computer Information Systems,
            and open to positions in either field.
            Some of my hobbies include PC Gaming, Powerlifting, Jiu-Jitsu, and playing the piano(even though I'm awful at it). 

            </p>
            </div>
        </div>
    )
}

export default Aboutme