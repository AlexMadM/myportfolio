import React from 'react';
import  sprite from '../assets/sprite.svg'


type IconPropsType={
    iconId:string
}


const Icons = (props:IconPropsType) =>

    {
        return (
            <svg>
                <use xlinkHref={`${sprite}#${props.iconId}`}/>

            </svg>

        );
    };


export default Icons;