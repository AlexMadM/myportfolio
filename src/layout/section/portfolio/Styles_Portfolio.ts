import styled from "styled-components";

const Portfolio =styled.div`
  padding-top: 100px;
  background: #F6F6F6;
    h2{
      color: var(--Black, #070707);
      margin-bottom: 45px;
      text-align: center;
      font-family: Gilroy-Bold;
      font-size: 34px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    `

const ListPortfolio = styled.ul`
  
  li{
   display: flex;
    flex-direction: column;
    a{
      margin-top: 40px;
      margin-bottom: 100px;
      display: inline-block;
      color:#070707;
      text-align: center;
      font-family: Gilroy-Medium;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
    }
  }
`

export  const S ={
    Portfolio,
ListPortfolio,
}