import { css } from '@emotion/react'
import styled from '@emotion/styled'


export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
  width: 300px;
`

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow:
      -15px -15px 0 0 aqua,
      -30px -30px 0 0 cornflowerblue,
      5px 5px 0 0 lightgreen
      ;
  }
`

export const Basic = styled.div`
  ${basicStyles};
  ${hoverStyles};
`