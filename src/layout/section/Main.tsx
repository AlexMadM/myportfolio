import styled from "styled-components";
import photo from '../../assets/support 1.png'
import {FlexWrapper} from "../../components/FlexWrapper";
import Button from "../../components/Button";


const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'start'} justify={'space-between'}>
                <div>
                    <span>Developer</span>
                    <Name>John Doe</Name>
                    <MainTitle>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt.</MainTitle>

                    <Button text={'Contact Me'}/>

                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  background-color: #F9FAFF;
  color: #828282;
`


const MainTitle = styled.h1`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
  margin-top: 10px;
  margin-bottom: 30px;
`

const Name = styled.h2`
  color: #5222D0;
  font-family: Montserrat;
  font-size: 72px;
  font-weight: 600;
  margin: 0;

`
const Photo = styled.img`

`
export default Main;