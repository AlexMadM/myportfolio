import styled from "styled-components";

const Main = styled.div`
 
margin-top: 40px;
 `

const Title = styled.h2`
  width: 123.510px;
  height: auto;

  color: #070707;
  font-family: Gilroy-Bold;
  font-size: 47.340px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;`

const Text = styled.p`
  color:#070707;
  font-family: Gilroy-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
align-self: center`

const Image = styled.img`
opacity: 0.9;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 100px;
  width: 943.612px;
  object-fit: cover;
  height: 387px;
  max-width: 100%;
 

`
const Lang = styled.button`
  align-self: center;
  transform: rotate(-90deg);
  color: #828282;

  font-family: Gilroy-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover{
    color:#070707;
  }
`
const Flex = styled.div`
  justify-content: center;
    display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

export const S = {
    Main,
    Title,
    Text,
    Image,
    Lang,
    Flex
}