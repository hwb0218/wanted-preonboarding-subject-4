import React from "react";
import styled from "styled-components";
import { AUTH_FILTERS } from "Utils/constants";

const AuthFilter = ({ searchConditions, setSearchConditions }) => {
  const { searchType, condition } = searchConditions;

  // 참조형 데이터는 함수가 실행됐을 경우 메모리에 재할당 되기 때문에 함수 바깥에서 선언했습니다.
  // const authFilters = [
  //   { type: "전체", key: "whole" },
  //   { type: "관리자", key: "admin" },
  //   { type: "선생님", key: "teacher" },
  //   { type: "부모님", key: "parents" },
  // ];

  const activeWholeFilter = () => ({
    searchType: searchType,
    condition: { whole: true, teacher: true, parents: true, admin: true },
  });

  const toggleAuthFilter = (filterType) => ({
    searchType: searchType,
    condition: {
      ...condition,
      whole: false,
      [filterType]: !condition[filterType],
    },
  });

  const activeAuthFilters = (filterType) => {
    const toggledCondition = toggleAuthFilter(filterType);
    const { teacher, parents, admin } = toggledCondition.condition;
    const isAllUnChecked = teacher === false && parents === false && admin === false;
    const isAllChecked = teacher && parents && admin;

    if (isAllUnChecked || isAllChecked) return activeWholeFilter();
    return toggledCondition;
  };

  const changeFilter = (filterType) =>
    filterType === "whole" ? activeWholeFilter() : activeAuthFilters(filterType);

  const handleAuthFilter = (e) => {
    const filterType = e.target.value;
    const updatedConditions = changeFilter(filterType);
    setSearchConditions(updatedConditions);
  };

  return (
    <Wrapper>
      {AUTH_FILTERS.map((filter, idx) => {
        return (
          <label key={idx}>
            <input
              type="checkbox"
              id={idx}
              onChange={handleAuthFilter}
              value={filter.key}
              checked={searchConditions.condition[filter.key]}
            />
            <span>{filter.type}</span>
          </label>
        );
      })}
    </Wrapper>
  );
};

export default AuthFilter;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px 0;

  label {
    margin-right: 10px;

    span {
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
  }
`;
