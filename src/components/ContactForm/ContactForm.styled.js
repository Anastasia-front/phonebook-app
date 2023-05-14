import styled from 'styled-components';

export const Form = styled.form`
  box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);
  background-color: rgb(245, 255, 251);
  padding: 25px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex;
  gap: 25px;
  width: 200px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const BoxSection = styled.form`
  box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.33);
  background-color: rgb(245, 255, 251);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;
  min-width: 200px;
`;

export const TwoSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
  }
`;
