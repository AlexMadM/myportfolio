
import styled from "styled-components";
import {Container} from "../../components/Container";


const AboutMe = () => {
    return (
        <ProjectsStyled>
            <Container>
                <Title>About me</Title>
                <Text>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</Text>
            </Container>
        </ProjectsStyled>
    );
};


const  ProjectsStyled =styled.div`
  margin:   265px 0px 140px 0px;
`

const Title = styled.h3`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.96px;
`
const Text = styled.p`
  max-width: 840px;
  font-family: Montserrat;
  font-size: 18px;
  position: relative;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.72px;

  &::before {
    content: '';
    display: inline-block;
    width: 116px;
    height: 5px;
    transform: rotate(-90deg);
    flex-shrink: 0;
    border-radius: 2px;
    background: #5222D0;
    position: absolute;
    left: -17px;
    top: 100%;
    transform-origin: top left;


  }
`

export default AboutMe;