import styled from "styled-components";

const Contacts =styled.div`
  padding-top: 100px;
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  h3{
    color:#070707;
    text-align: center;
    font-family: Gilroy-Bold;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  p{
    margin-top: 20px;
    margin-bottom: 30px;
  }
`
const Footer =styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  span{
    color: #828282;
    text-align: center;
    font-family: Gilroy-Medium;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    display: inline-block;
    margin-top: 45px;
    margin-bottom: 100px;
   
  }
`


const Button = styled.button`
  color: #FFF;
  text-align: center;
  font-family: Gilroy-Bold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
padding: 10px 20px;
  border-radius: 20px;
  background-color: #070707;
  margin-bottom: 90px;
`

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 60px;
  svg{
    max-width: 40px;
    max-height: 40px;
    
  }

`


export const S = {
    Contacts,
    Button,
    Icons,
    Footer
}