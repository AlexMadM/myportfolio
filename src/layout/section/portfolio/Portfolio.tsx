import React from 'react';
import {S} from '../portfolio/Styles_Portfolio'
import {Container} from "../../../components/Container";
import imgport from '../../../assets/slise8.png'
import imgport2 from '../../../assets/reebok_web.png'

const Portfolio = () => {
    return (
        <S.Portfolio>
            <Container>
                <h2>Portfolio</h2>
            <S.ListPortfolio>
               <li>
                   <img src={imgport} alt=""/>
                   <a href="">Online fashion store - Homepage</a>
               </li>

                <li>
                    <img src={imgport2} alt=""/>
                    <a href="">Braun Landing Page - Concept</a>
                </li>
            </S.ListPortfolio>
            </Container>

        </S.Portfolio>
    );
};

export default Portfolio;