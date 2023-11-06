

import styled from "styled-components";
import photo from '../../assets/1.png'
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import Cart from "../../components/Cart";
import Button, {StyledButton} from "../../components/Button";
import {theme} from "../../styles/Theme";



const ProjectInfo =[ {
    img: photo,
    title: 'TITLE PROJECT',
    technologies: ['Javascript', 'PostgreSQL', 'React', 'redux'],
    info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
    {
        img: photo,
        title: 'I N S I G H T G R A M',
        technologies: ['Javascript', 'REACT NATIVE', 'redux'],
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }];



const Projects = () => {




    return (
        <ProjectsStyled>
            <Container>
            <Title>Projects</Title>

              <FlexWrapper  gap={'27px'}>
                  <Cart ProjectInfo={ProjectInfo[0]}/>
                  <Cart ProjectInfo={ProjectInfo[1]}/>
              </FlexWrapper>
                <Button text={'SEE ALL PROJECTS'}/>
          </Container>
        </ProjectsStyled>
    );
};


const ProjectsStyled = styled.div`

  @media ${theme.media.mobile}{
    ${FlexWrapper}{
      flex-wrap: wrap;
    }
  }

  
  ${StyledButton}{
    margin: 30px  auto 0 auto;
    display: flex;
    width: 305px;
    height: 56px;
    padding: 12px 20px 13px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    
   
  }

  
`


const Title = styled.h3`

`



export default Projects;