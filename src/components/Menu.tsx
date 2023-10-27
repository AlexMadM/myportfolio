import styled from "styled-components";
import Button from "./Button";
import {FlexWrapper} from "./FlexWrapper";


const Menu = () => {
    return (
        <StyledMenu>
            <FlexWrapper justify={'space-between'}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </FlexWrapper>
                <Button text={'Contact'}/>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

  display: flex;
  align-items: center;
justify-content: space-between;


  ul {
    display: flex;
    flex-direction: row;
 
    list-style: none;

 
  

    a  {
      text-decoration: none;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
    }


  }
 

`

export default Menu;