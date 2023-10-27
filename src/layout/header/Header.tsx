import styled from "styled-components";
import Menu from "../../components/Menu";
import {Container} from "../../components/Container";


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
 

`

export default Header;