import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer className="Footer">
            <div className="Footer__Text">Made by <a href="https://www.bradmeyn.com" target="_blank" rel="noreferrer" className="Footer__Link">Brad Meyn.</a> &#x24B8; {year}.</div>
            <div className="Footer__Github"><a className="Footer__Github-Link" href="https://github.com/bradmeyn/react-todo-list" target="_blank" rel="noreferrer"><FontAwesomeIcon className="Footer__Github--Icon" icon={faGithub} size="lg"/>Github</a></div>
        </footer>
    )
}
