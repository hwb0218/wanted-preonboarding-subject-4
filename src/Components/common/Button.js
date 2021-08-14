import React from "react";
import styled, { css } from "styled-components";

//모든 컴포넌트가 함수형인데 Button 컴포넌트는 클래스형으로 되어있었다. 일관성을 해치기 때문에 함수형 컴포넌트로 리팩토링 했다.
export const Button = ({ value, width, marginTop, onClick, type = "button" }) => {
  return (
    <StyledButton type={type} width={width} marginTop={marginTop} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

// class Button extends Component {
//   render() {
//     const { value, width, marginTop, onClick, type = "button" } = this.props;
//     return (
//       <StyledButton type={type} width={width} marginTop={marginTop} onClick={onClick}>
//         {value}
//       </StyledButton>
//     );
//   }
//}

const StyledButton = styled.button`
  ${({ theme }) => theme.flexSet("center", "center")}
  width: ${({ width }) => width || "100%"};
  height: 40px;
  padding: 0 15px;
  margin-top: ${({ marginTop }) => marginTop || "0"};
  background: ${({ theme }) => theme.color.button};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.fontWhite};
  font-size: 1rem;
  font-weight: 600;

  ${({ theme }) =>
    css`
      &:hover {
        background: ${theme.color.buttonHover};
      }
    `}
`;

export default Button;
