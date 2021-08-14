import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import MessageBox from "Components/common/MessageBox";

const Input = ({ ...props }, ref) => {
  const {
    type,
    name,
    value,
    onChange,
    placeholder,
    icon,
    error,
    errorMessage,
    successMessage,
    width,
    numberOnly,
    maxLength,
  } = props;
  //컴포넌트로 전달받는 props 객체 인수가 너무 많아 가독성을 해치기 때문에 rest parameter를 이용해 인수를 전달 받았습니다.
  return (
    <Wrapper width={width}>
      <InputWrapper error={error} numberOnly={numberOnly}>
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {icon}
      </InputWrapper>
      {error && errorMessage && <MessageBox>{errorMessage}</MessageBox>}
      {!error && successMessage && <MessageBox textColor="#87BF44">{successMessage}</MessageBox>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${({ width }) => width || "100%"};
  padding: 10px 0;
`;

const InputWrapper = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 40px;
    padding-left: 8px;
    border: 1px solid ${({ theme }) => theme.color.borderline};
    border-radius: 4px;
    font-size: 16px;
    text-align: ${({ numberOnly }) => (numberOnly ? "center" : "left")};

    &::placeholder {
      color: ${({ theme }) => theme.color.fontGray};
    }
    &:focus {
      border-color: ${({ theme }) => theme.color.green};
    }

    ${({ error }) =>
      error &&
      css`
        background-color: ${({ theme }) => theme.color.lightred};
        border-color: ${({ theme }) => theme.color.red};
        &:focus {
          border-color: ${({ theme }) => theme.color.red};
        }
      `}
  }

  svg {
    position: absolute;
    right: 16px;
    width: 18px;
    height: 40px;
  }
`;

Input.defalutProps = {
  type: "text",
  onChange: () => {},
  icon: null,
  error: false,
  errorMessage: null,
  successMessage: null,
  width: "100%",
  numberOnly: false,
  maxLength: null,
};

export default forwardRef(Input);
