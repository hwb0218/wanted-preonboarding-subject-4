import React from "react";
import styled from "styled-components";
import MessageBox from "Components/common/MessageBox";

const Radio = ({ name, value, onChange, data, error, errorMessage }) => {
  return (
    <Wrapper>
      <RadioGroup error={error}>
        {data.map((item, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name={name}
              checked={value === item.value}
              onChange={() => onChange(item.value)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </RadioGroup>
      {error && errorMessage && <MessageBox textAlign="center">{errorMessage}</MessageBox>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet("center", "center", "column")}
`;

const RadioGroup = styled.div`
  label {
    color: ${({ theme }) => theme.color.fontGray};
    padding: 10px 10px 10px 0;

    input[type="radio"] {
      position: relative;
      width: 16px;
      height: 16px;
      margin-right: 6px;
      border: 1px solid ${({ theme, error }) => (error ? theme.color.red : theme.color.green)};
      border-radius: 50%;
      -webkit-appearance: none;
    }

    input[type="radio"]:checked {
      background-color: ${({ theme }) => theme.color.green};
    }
    input[type="radio"]:checked:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 8px;
      height: 8px;
      margin: auto;
      background-color: ${({ theme }) => theme.color.fontWhite};
      border-radius: 50%;
    }
  }
`;

//컴포넌트 props에 dafault parameter를 사용하는 것 보다 react에서 제공하는 defalutProps를 사용해 초깃값을 설정하고 유효성 검사까지 가능하도록 확장성을 고려했습니다.
Radio.defalutProps = {
  data: [],
  error: false,
  errorMessage: null,
};

export default Radio;
