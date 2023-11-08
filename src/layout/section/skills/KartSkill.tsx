import React from 'react';
import {S} from '../skills/Styles_Skills'
import sprite from '../../../assets/sprite_skills.svg'

type TypeCart ={
    iconId:string
    info:string
}

const cart:TypeCart[] = [
    {
        iconId:'react',
        info:'React'
    },
    {
        iconId:'redux',
        info:'Redux'
    },

    {
        iconId:'ts',
        info:'Type Script'
    },
    {
        iconId:'js',
        info:'Java Script'
    },

]




const KartSkill = () => {



    return (
        <S.KartSkill>
            <S.List>
            {cart.map((icon)=>{
                return <S.Item>
                        <svg >
                            <use xlinkHref={`${sprite}#${icon.iconId}`}/></svg>
                        <p>{icon.info}</p>
                    </S.Item>


            })}
                </S.List>
        </S.KartSkill>
    );
};

export default KartSkill;