import React from 'react';
import {S} from '../main/Main_Styles'
import photo from '../../../assets/88.png'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <S.Title>A.DORGO<br/>TOVSKYI</S.Title>
                    <S.Text>Web | Developer 35 years old,Donetsk</S.Text>
                    <span>RU | ENG</span>
                </FlexWrapper>
                <S.Image src={photo}/>

            </Container>


        </S.Main>
    );
};

export default Main;