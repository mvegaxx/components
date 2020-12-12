import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import IconButton from './index'
import { Animated } from '../../../shared/styles'

export default {
  title: 'ui/Animated ',
  component: Animated,
}


export const Normal = () => (
  <Animated />
)
