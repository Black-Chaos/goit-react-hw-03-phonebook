import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --border: 1px solid gray;
}
    .title {
        text-align: center;
    }
    
  
  .btn {
    width: max-content;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: lightblue;
    }
  }
`;

export const Container = styled.div`
  display: flex;

  .form-container {
    display: grid;
    width: 300px;
    height: max-content;
    padding: 20px;
  gap: 20px;
    border: var(--border);

    label {
      display: grid;
      gap: 8px;

      span {
        font-size: 20px;
      }
    }
  }

  .contacts-container {
    min-width: 190px;
    padding: 20px;
  }
`;