import { css } from '@emotion/react'

import { State } from './index'

export const button = (params: State) => css`
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.3s ease-out;
  opacity: ${params.disabled ? .5 : 1};
  &:hover {
    background: ${params.disabled ? "transparent" : "#CBCEFA"};
  }
`

export default {
  button,
}
