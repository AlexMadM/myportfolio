import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import gmail from '../../assets/cib_gmail.svg';
import linkedin from '../../assets/Vector.svg';
import github from '../../assets/akar-icons_github-fill.svg';
const Footer = () => {
    return (
        <StyledFooter>
<Container>
    <List>
        <li>
            <a href='#'><img src={gmail} alt=""/></a>
            <p>gmail</p>
        </li>
        <li>
            <a href='#'><img src={linkedin} alt=""/></a>
            <p>linkedin</p>
        </li>
        <li>
            <a href='#'><img src={github} alt=""/></a>
            <p>GITHUB</p>
        </li>
    </List>
    <Contacts>
        <a href="">Projects</a>
        <a href="">Contact</a>
    </Contacts>
    <span>WEB DEVELOPER 2021</span>
</Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  span {
    color: var(--text, #1F2626);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 185.714% */
    letter-spacing: 0.56px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;


  }
`

const Contacts = styled.div`
    display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  & a{
    text-decoration: none;
    color: #1F2626;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

`
const List = styled.ul`
margin: 0 auto;
    display: flex;
  list-style: none;
  justify-content: center;
  gap: 100px;
  & li {
    align-self: center;
    display: flex;
    flex-direction: column;
    a{
      align-self: center;
    }
    p{
      color:#1F2626;
      text-align: center;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 11.105px; /* 92.544% */
      letter-spacing: 1.44px;
      text-transform: uppercase;
    }
  }
`

export default Footer;