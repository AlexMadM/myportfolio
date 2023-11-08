import styled from "styled-components";

const Info = styled.div`
  background: #F6F6F6;`

const AboutMe =styled.h2`
  margin-bottom: 20px;
  padding-top: 120px;
  color:#070707;
  text-align: center;
  font-family: Gilroy-Bold;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const TextAboutMe =styled.p`
  width: 485.344px;
  height: 218px;
  flex-shrink: 0;
  margin: 0 auto;
  padding-bottom: 110px;

  span{
    display: inline-block;
    margin-bottom: 30px;
  }
  
  color: var(--Black, #070707);
  text-align: center;
  font-family: Gilroy-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`



export const S ={
    Info,
    AboutMe,
    TextAboutMe,
}