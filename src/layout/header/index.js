import React, { useState } from 'react'
import { HeaderWrapper } from "./HeaderStyled"
import Navigation from '../navigation'
import logo from '../../assets/provenseed-logo.png'
import { Link } from 'react-router-dom'
import { Button, IconButton, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [logoName, setLogoName] = useState("provenseed")
    return (
        <HeaderWrapper>
            <div className='container'>
                <header>
                    <Link to='/'><img src={logo} alt={logoName} /></Link>
                </header>
                <div className='top_search'>
                    <div className='input_search'>
                        <Input type="text" placeholder='Enter here to search' />
                        <IconButton aria-label="Click to Search"><SearchIcon /></IconButton>
                    </div>
                    {/* <IconButton aria-label="Click to Search"><SearchIcon /></IconButton> */}
                </div>
            </div>
            <Navigation />
        </HeaderWrapper>
    )
}

export default Header
