/** @jsx jsx */
import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import IconButton from './index'

export default {
  title: 'ui/EnterButton',
  component: IconButton,
}

const getProps = () => ({
  onClick: action('onClick '),
  disabled: boolean('disabled', false),
  icon: select("icon", ["enter", "delete", "edit"], "enter"),

})

export const normal = () => (
  <IconButton {...getProps()} />
)

export const Disabled = () => (
  <IconButton disabled onClick={action('onClick')} />
)
