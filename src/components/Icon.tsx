import React from 'react';
import  sprite from '../assets/sprite.svg'
import styled from "styled-components";


type IconPropsType={
    iconId:string
}


const Icons = (props:IconPropsType) =>

    {
        return (
            <StylesSvg>
                <use xlinkHref={`${sprite}#${props.iconId}`}/>

            </StylesSvg>

        );
    };


const StylesSvg = styled.svg`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
`

export default Icons;