/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import styles from './index.styles'
// import Icon from "../../../utils/src/icons/index"

export type Props = {
  disabled?: boolean,
  onClick: () => void,
  icon?: string,
}

export type State = {
  disabled?: boolean,
}

const IconButton: React.FC<Props> = ({ disabled = false, onClick, icon="enter" }) => {

  return (
    <button
      title={`${icon}-icon-button`}
      css={(theme: any) => styles.button({ disabled })}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {/* <Icon type={icon}/> */}
    </button>
  )
}

export default React.memo(IconButton)
