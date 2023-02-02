import React from 'react'
import { Navigation, NavigationLink, NavigationUl, PageHeader } from '../styledcomponents/navbarStyled'

const Navbar = () => {
    return (
        <PageHeader>
            <Navigation>
                <NavigationUl>
                    <li><NavigationLink to="/">Strona główna</NavigationLink></li>
                    <li><NavigationLink to="/generator/">Stwórz CV</NavigationLink></li>
                    <li><NavigationLink to="/contact/">Kontakt</NavigationLink></li>
                </NavigationUl>
            </Navigation>
        </PageHeader>
    )
}

export default Navbar