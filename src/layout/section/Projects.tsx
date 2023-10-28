

import styled from "styled-components";
import photo from '../../assets/1.png'
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import Cart from "../../components/Cart";







const Projects = () => {

    const ProjectInfo =[ {
        img: photo,
        title: 'TITLE PROJECT',
        technologies: ['Javascript', 'PostgreSQL', 'React', 'redux'],
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
        {
            img: photo,
            title: 'TITLE PROJECT',
            technologies: ['Javascript', 'PostgreSQL', 'React', 'redux'],
            info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }];


    return (
        <ProjectsStyled>
            <Container>
            <Title>Projects</Title>

              <FlexWrapper>
                  <Cart ProjectInfo={ProjectInfo[0]}/>
                  <Cart ProjectInfo={ProjectInfo[1]}/>
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