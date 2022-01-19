import React from 'react'
import './Footer.css'

export default function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer className="Footer">
            <div className="Footer__Text">Made by <a href="https://www.bradmeyn.com" target="_blank" rel="noreferrer" className="Footer__Link">Brad Meyn.</a> &#x24B8; {year}.</div>

        </footer>
    )
}
