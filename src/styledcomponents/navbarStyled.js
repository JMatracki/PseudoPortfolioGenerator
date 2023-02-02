import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PageHeader = styled.header`
    background: #0d4a6d;
    margin-bottom: 30px;
    padding: 20px 0;
    border-radius: 0 0 10px 10px;
    position: sticky;
    top: 0;
`
export const Navigation = styled.nav`
    width: 90%;
    margin: 0 auto;
`

export const NavigationUl = styled.ul`
    display: flex;
    gap: 20px;
    @media(max-width: 480px){
        gap: 25px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
      }
`

export const NavigationLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
`