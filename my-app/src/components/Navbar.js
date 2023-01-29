import React from 'react'
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './NavbarElements'
import primde from './primde.jpg'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={primde} alt="priMDe logo with purple lettering and stethoscope" width={"50%"} />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Map
                    </NavLink>
                    <NavLink to="/Resources" activeStyle>
                        Resources
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/Login" activeStyle>
                            Login
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar