import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const CInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.4rem;
  border: solid 1px #eee;
  background: #eee;
  padding: 0.8rem;
  font-size: 1rem;
  transition: 0.2s;

  &:focus,
  &:hover {
    border-color: #4f0222;
    background: #fff;
    box-shadow: 0 0 0 4px #ec9bbd, 0 0 0 4px #4f0222;
    outline: none;
  }
`;
