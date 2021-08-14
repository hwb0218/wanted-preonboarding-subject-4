import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CATEGORY } from "Utils/constants";
import { userAuthority } from "Utils/Storage";
import { LOGGEDIN_USER } from "Utils/constants";

const NavBar = () => {
  const userAuth = userAuthority(LOGGEDIN_USER);

  return (
    <Wrapper>
      <ul>
        {checkAuthMenu(userAuth).map((item, i) => (
          <li key={i}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-top: 20px;
  padding: 10px 100px;

  > ul {
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.green};

    li {
      display: inline-block;
      color: ${({ theme }) => theme.color.fontWhite};
    }

    li + li {
      margin-left: 50px;
    }
  }
`;
//참조형 데이터는 함수가 실행됐을 경우 메모리에 재할당 되기 때문에 함수 바깥에서 선언했습니다.
const checkAuthMenu = (userAuth) => {
  switch (userAuth) {
    case 0:
      return CATEGORY.admin;
    case 1:
      return CATEGORY.teacher;
    case 2:
      return CATEGORY.parent;
    case null:
      return CATEGORY.allUser;
    default:
      return;
  }
};

export default NavBar;
