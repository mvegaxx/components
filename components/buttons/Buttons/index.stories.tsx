import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './index'

export default {
  title: 'ui/Button ',
  component: Button,
}


export const Normal = () => (
  <Button />
)
