import styled from "styled-components";
import Button from "./Button";
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";


const Menu = () => {
    return (
        <StyledMenu>

                <NavList>
                    <NavItem><a href="#">Home</a></NavItem>
                    <NavItem><a href="#">Projects</a></NavItem>
                </NavList>

                <Button text={'Contact'}/>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 140px;
`

const NavList = styled.ul`
  display: flex;
  gap: 750px;
  @media ${theme.media.mobile}{
   gap: 110px;
    }
  }
  
list-style: none;
   


`

const NavItem = styled.li`

  & a {
    color:  #1F2626;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
   
  }
`

export default Menu;