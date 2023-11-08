import styled from "styled-components";

const Skills = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
    p{
      color: var(--Black, #070707);
      text-align: center;
      font-family: Gilroy-Medium;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;margin-bottom: 80px;
      
    
    
    }
    `

const TitleSkills = styled.h2`
  color: var(--Black, #070707);
  text-align: center;
  font-family: Gilroy-Bold;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
margin-bottom: 70px`


const KartSkill = styled.div`
    
`

const List = styled.ul`

  display: flex;
align-items: center;
  justify-content: space-between;
gap: 10px;
 
`

const Item = styled.li`
  max-width: 100%;
  svg{
    width: 115px;
    height: 115px;
    margin-bottom: 20px;
  }
    p{
      color: #828282;
      text-align: center;
      font-family: Gilroy-Bold;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      
    }
`

export const S ={
    KartSkill,
    Skills,
    TitleSkills,
    List,
    Item
}