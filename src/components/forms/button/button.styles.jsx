import styled from "styled-components";
import colors from "../../../styles/palette";

export const CButton = styled.button`
  min-width: 8rem;
  width: ${ props => props.w };
  border-radius: .4rem;
  border: none;
  background: ${({ type })  => colors(type) };
  padding: .8rem 1.2rem;
  font-size: 1rem;
  font-weight: ${ props => props.fontWeight };
  color: ${ props => props.color };
  transition: .1s;
  cursor: pointer;

  &:focus, &:hover {
    box-shadow:
      0 0 0 3px #ec9bbd,
      0 0 0 4px #4F0222
    ;

    outline: none;
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }
`