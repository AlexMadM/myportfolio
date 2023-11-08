import styled from "styled-components";

const Header = styled.header`



`

const MenuNav = styled.nav`

  border-bottom: 1px solid #828282;
`

const NavItem = styled.ul`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

const Item = styled.li`
  a {
    color: #828282;
    font-family: Gilroy-Bold;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
  &:hover{
    color:#070707;
  }}
`


export const S = {
    Header,
    MenuNav,
    NavItem,
    Item

}