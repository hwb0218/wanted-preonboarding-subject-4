import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <div>This is Main Page🔧</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.absoluteCenter()};
`;

export default Main;
