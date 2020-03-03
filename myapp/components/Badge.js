import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Block from './Block';
import { theme } from '../constants';

export default class Badge extends Component {
  render() {
    const { children, style, size, color, ...props } = this.props;

    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size,
      },
      style,
    ]);

    return (
      <Block flex={false} middle center color={color} style={badgeStyles} {...props}>
        {children}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 13,
    elevation: 2,
  },
})
