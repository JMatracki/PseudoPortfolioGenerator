import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex-direction: column;
`

export const MainPageText = styled.h1`
    font-size: 4vw;
    color: white;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 6vw;
      }

`

export const ClickButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  `
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #fff;
    outline: 0;
  };
`