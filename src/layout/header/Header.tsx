import React from 'react';
import {Container} from "../../components/Container";
import {S} from '../header/Header_Styles'

const menu = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts'];

const Header = () => {
    return (
        <S.Header>
            <Container>
                <S.MenuNav>
                    <S.NavItem>
                        {menu.map((item) => {
                            return <S.Item>
                                <a href="">{item}</a>
                            </S.Item>
                        })}

                    </S.NavItem>
                </S.MenuNav>
            </Container>
        </S.Header>
    );
};

export default Header;