
import styled from "styled-components";

type ButtonPropsType = {
    text:string
}

const Button = (props:ButtonPropsType) => {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    );
};

const StyledButton = styled.button`
padding: 12px 20px;
  border-radius: 6px;
  background: #5222D0;
  color: #DBFFFF;
`

export default Button;