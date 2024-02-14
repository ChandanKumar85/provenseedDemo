import React from 'react'
import { MainWrapper } from "./ContactAnExpertStyled";
import { Link } from 'react-router-dom'

const ContactAnExpert = () => {
    return (
        <MainWrapper>
            <h4>Contact an expert</h4>
            <p>Ready to take the next step? Contact your local crop advisor.</p>
            <Link className='cmp-button' to={'/content/provenseed/ca/en/home/contact-us.html'}>Contact Us</Link>
        </MainWrapper>
    )
}

export default ContactAnExpert
