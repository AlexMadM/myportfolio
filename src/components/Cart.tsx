

import styled from "styled-components";
import React, {FC} from "react";



export type InfoProjectPropsType  ={
    img: string,
    title: string,
    tecnologia: Array<string>,
    info: string,
}

const Cart : FC <{ ProjectInfo:InfoProjectPropsType }>= ({ProjectInfo}) => {
    return (
        <StyledCart>
            <ImgStyled src={ProjectInfo.img} alt=""/>
            <Title>{ProjectInfo.title}</Title>
            {ProjectInfo.tecnologia.map((i,index) => {
                return <List>
                    <ListItem key={index}>
                        <a href="">{i}</a>
                    </ListItem>
                </List>
            })}
            <TextCart>{ProjectInfo.info}</TextCart>
        </StyledCart>
    );
};

const StyledCart = styled.div`

`

const ImgStyled = styled.img`
  width: 522px;
  height: 388px;
  flex-shrink: 0;
`
const Title = styled.h3`

`
const TextCart = styled.p`

`

const List = styled.ul`

`

const ListItem = styled.li`

`
export default Cart;