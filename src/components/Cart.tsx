

import styled from "styled-components";
import React, {FC} from "react";
import {FlexWrapper} from "./FlexWrapper";



export type InfoProjectPropsType  ={
    img: string,
    title: string,
    technologies: Array<string>,
    info: string,
}

const Cart : FC <{ ProjectInfo:InfoProjectPropsType }>= ({ProjectInfo}) => {
    return (
        <StyledCart>
            <ImgStyled src={ProjectInfo.img} alt=""/>
            <Info> <Title>{ProjectInfo.title}</Title>
           < FlexWrapper gap={'12px'} >
               {ProjectInfo.technologies.map((i,index) => {
                return <List>
                    <ListItem key={index}>
                        <a  href="">{i}</a>
                    </ListItem>
                </List>
            })}</FlexWrapper>
            <TextCart>{ProjectInfo.info}</TextCart>
            </Info>
        </StyledCart>
    );
};

const Info = styled.div`
    margin-left: 25px;
`

const StyledCart = styled.div`
max-width: 520px;
  width: 100%;
padding: 0;
  border-radius: 6px;
  background: #F5F2FD;
  box-shadow: 2px 2px 32px 0px rgba(40, 38, 44, 0.15);
`

const ImgStyled = styled.img`
  width: 522px;
  height: 388px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 4px;
`
const Title = styled.h3`
  color:#151717;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 30px;
  margin-bottom: 0;
`
const TextCart = styled.p`
  color:#1F2626;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
margin-bottom: 30px;
  margin-top: 0;
`

const List = styled.ul`
  margin-top: 10px;
  margin-bottom: 20px;
list-style: none;
 padding: 0;

  
`

const ListItem = styled.li`

align-self: start;
text-transform: uppercase;
   & a{

     text-decoration: none;
     color:#DBFFFF;
     text-align: center;
     font-family: Montserrat;
     font-size: 10px;
     font-style: normal;
     font-weight: 400;
     line-height: 14px; /* 140% */
     letter-spacing: 1.2px;
     text-transform: uppercase;
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
     border-radius: 4px;
     background: #5222D0;
  }
  
`
export default Cart;