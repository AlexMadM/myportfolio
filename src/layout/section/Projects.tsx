

import styled from "styled-components";
import photo from '../../assets/1.png'
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import Cart, {InfoProjectPropsType} from "../../components/Cart";






const Projects = () => {

    const ProjectInfo = {
        img: photo,
        title: 'TITLE PROJECT',
        tecnologia: ['Javascript', 'PostgreSQL', 'React', 'redux'],
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    };


    return (
        <ProjectsStyled>
            <Container>
            <Title>Projects</Title>

              <FlexWrapper>
                  <Cart ProjectInfo={ProjectInfo}/>

              </FlexWrapper>
          </Container>
        </ProjectsStyled>
    );
};


const ProjectsStyled = styled.div`

`
const Title = styled.h3`

`

export default Projects;