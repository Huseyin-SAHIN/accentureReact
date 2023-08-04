import React, { useState } from 'react'
import { BiChevronDown, BiSearchAlt2 } from 'react-icons/bi'
import { TbWorld } from 'react-icons/tb'
import logo from '../assets/images/logo/logo.png'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {

    const [activeTab, setActiveTab] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState("USA");
    const [openCloseControl, setOpenCloseControl] = useState("");
    const [buttonControl, setButtonControl] = useState(<AiOutlineMenu />);

    const handleTabClick = (tabNumber) => {
        if (activeTab === tabNumber) {
            setActiveTab(null)
        }
        else {
            setActiveTab(tabNumber)
        }
    }

    const handleClick = (event) => {
        if (openCloseControl === "") {
            setOpenCloseControl("open")
            setButtonControl(<FaTimes />)
        } else {
            setOpenCloseControl("")
            setButtonControl(<AiOutlineMenu />)
        }
    }

    return (
        <div id='header'>
            <button className='headerOpenClose' onClick={handleClick}>
                {buttonControl}
            </button>
            <div className='headerControl'>
                <div className={`headerContent ${openCloseControl}`}>
                    <div className='logo'>
                        <img src={logo} />
                        <span>accenture</span>
                    </div>
                    <div className='menuBar'>
                        <ul>
                            <li
                                className={activeTab === 1 ? 'active' : ""}>
                                <button onClick={() => handleTabClick(1)}>Insights <BiChevronDown /></button>
                                <div className='menuBarContent'>
                                    <div className='menuBarContentLeftSide'>
                                        <div style={{}} >FEATURED CONTENT</div>
                                        <h2>Voices of Change</h2>
                                        <p>The path to 360° value starts here—featuring our most provocative thinking, extensive research and compelling stories of shared success.</p>
                                    </div>
                                    <div className='menuBarContentRightSide'>
                                        <ul>
                                            <li><a href="#">5G</a></li>
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Blockchain</a></li>
                                            <li><a href="#">Cloud</a></li>
                                            <li><a href="#">Customer Experience</a></li>
                                            <li><a href="#">Cybersecurity</a></li>
                                            <li><a href="#">Digital Engineering & Manufacturing</a></li>
                                            <li><a href="#">Digital Transformation</a></li>
                                            <li><a href="#">Edge Computing</a></li>
                                            <li><a href="#">Future of Work</a></li>
                                            <li><a href="#">Generative AI</a></li>
                                            <li><a href="#">Metaverse</a></li>
                                            <li><a href="#">Supply Chain</a></li>
                                            <li><a href="#">Sustainability</a></li>
                                            <li><a href="#">Podcasts</a></li>
                                            <li><a href="#">Blogs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={activeTab === 2 ? 'active' : ""}>
                                <button onClick={() => handleTabClick(2)}>Services <BiChevronDown /></button>
                                <div className='menuBarContent'>
                                    <div className='menuBarContentRightSide'>
                                        <ul>
                                            <li><a href="#">Application Services</a></li>
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Automation</a></li>
                                            <li><a href="#">Business Process Outsourcing</a></li>
                                            <li><a href="#">Business Strategy</a></li>
                                            <li><a href="#">Change Management</a></li>
                                            <li><a href="#">Cloud</a></li>
                                            <li><a href="#">Customer Experience</a></li>
                                            <li><a href="#">Data & Analytics</a></li>
                                            <li><a href="#">Digital Commerce</a></li>
                                            <li><a href="#">Digital Engineering & Manufacturing</a></li>
                                            <li><a href="#">Enterprise Platforms</a></li>
                                            <li><a href="#">Finance Consulting</a></li>
                                            <li><a href="#">Infrastructure</a></li>
                                            <li><a href="#">Marketing</a></li>
                                            <li><a href="#">Mergers & Acquisitions (M&A)</a></li>
                                            <li><a href="#">Metaverse</a></li>
                                            <li><a href="#">Operating Models</a></li>
                                            <li><a href="#">Security</a></li>
                                            <li><a href="#">Supply Chain Management</a></li>
                                            <li><a href="#">Sustainability</a></li>
                                            <li><a href="#">Technology Consulting</a></li>
                                            <li><a href="#">Technology Innovation
                                            </a></li>
                                            <li><a href="#">Zero-Based Transformation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={activeTab === 3 ? 'active' : ""}>
                                <button onClick={() => handleTabClick(3)}>Industries <BiChevronDown /></button>
                                <div className='menuBarContent'>
                                    <div className='menuBarContentRightSide'>
                                        <ul>
                                            <li><a href="#">Aerospace and Defense</a></li>
                                            <li><a href="#">Automotive</a></li>
                                            <li><a href="#">Banking</a></li>
                                            <li><a href="#">Capital Markets</a></li>
                                            <li><a href="#">Chemicals</a></li>
                                            <li><a href="#">Communications and Media</a></li>
                                            <li><a href="#">Consumer Goods and Services</a></li>
                                            <li><a href="#">Energy</a></li>
                                            <li><a href="#">Health</a></li>
                                            <li><a href="#">High Tech</a></li>
                                            <li><a href="#">Industrial</a></li>
                                            <li><a href="#">Insurance</a></li>
                                            <li><a href="#">Life Sciences</a></li>
                                            <li><a href="#">Natural Resources</a></li>
                                            <li><a href="#">Public Service</a></li>
                                            <li><a href="#">Retail</a></li>
                                            <li><a href="#">Software and Platforms</a></li>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">US Federal Government</a></li>
                                            <li><a href="#">Utilities</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={activeTab === 4 ? 'active' : ""}>
                                <button onClick={() => handleTabClick(4)}>Careers <BiChevronDown /></button>
                                <div className='menuBarContent'>
                                    <div className='menuBarContentLeftSide'>
                                        <div style={{}} >FEATURED CONTENT</div>
                                        <h2>Voices of Change</h2>
                                        <p>The path to 360° value starts here—featuring our most provocative thinking, extensive research and compelling stories of shared success.</p>
                                    </div>
                                    <div className='menuBarContentRightSide'>
                                        <ul>
                                            <li><a href="#">5G</a></li>
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Blockchain</a></li>
                                            <li><a href="#">Cloud</a></li>
                                            <li><a href="#">Customer Experience</a></li>
                                            <li><a href="#">Cybersecurity</a></li>
                                            <li><a href="#">Digital Engineering & Manufacturing</a></li>
                                            <li><a href="#">Digital Transformation</a></li>
                                            <li><a href="#">5G</a></li>
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Blockchain</a></li>
                                            <li><a href="#">Cloud</a></li>
                                            <li><a href="#">Customer Experience</a></li>
                                            <li><a href="#">Cybersecurity</a></li>
                                            <li><a href="#">Digital Engineering & Manufacturing</a></li>
                                            <li><a href="#">Digital Transformation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={activeTab === 5 ? 'active' : ""}>
                                <button onClick={() => handleTabClick(5)}>About <BiChevronDown /></button>
                                <div className='menuBarContent'>
                                    <div className='menuBarContentLeftSide'>
                                        <div style={{}} >FEATURED CONTENT</div>
                                        <h2>Voices of Change</h2>
                                        <p>The path to 360° value starts here—featuring our most provocative thinking, extensive research and compelling stories of shared success.</p>
                                    </div>
                                    <div className='menuBarContentRightSide'>
                                        <ul>
                                            <li><a href="#">5G</a></li>
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Blockchain</a></li>
                                            <li><a href="#">Cloud</a></li>
                                            <li><a href="#">Customer Experience</a></li>
                                            <li><a href="#">Cybersecurity</a></li>
                                            <li><a href="#">Digital Engineering & Manufacturing</a></li>
                                            <li><a href="#">Digital Transformation</a></li>
                                            <li><a href="#">5G</a></li>
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Blockchain</a></li>
                                            <li><a href="#">Cloud</a></li>
                                            <li><a href="#">Customer Experience</a></li>
                                            <li><a href="#">Cybersecurity</a></li>
                                            <li><a href="#">Digital Engineering & Manufacturing</a></li>
                                            <li><a href="#">Digital Transformation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='headerRight'>
                    <div className='search'>
                        <BiSearchAlt2 />
                    </div>
                    <div>
                        <button onClick={() => handleTabClick(6)} className='languageSelection'>
                            <TbWorld /><span>{selectedCountry}</span><BiChevronDown />
                        </button>
                        <div className={`selectedCountryMenu ${activeTab === 6 ? 'active' : ""}`}>
                            <ul>
                                <li><button value="USA"
                                    onClick={(e) => setSelectedCountry(e.target.value)}
                                >USA (USA)</button></li>
                                <li><button value="SPN"
                                    onClick={(e) => setSelectedCountry(e.target.value)}
                                >Spain (SPN)</button></li>
                                <li><button value="ENG"
                                    onClick={(e) => setSelectedCountry(e.target.value)}
                                >English (ENG)</button></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header