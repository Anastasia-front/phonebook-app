import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  list-style-type: circle;
  padding: 0 0 0 15px;
`;
export const Li = styled.li`
  display: list-item;
  font-size: 12px;
`;
export const Delete = styled.button`
  background-color: #ffcec8;
  border: 1px solid grey;
  border-radius: 3px;
  margin-left: 7px;
  padding: 3px;
  font-size: 12px;
  height: min-content;
  &:hover,
  &:active,
  &:focus {
    background-color: teal;
  }
`;
