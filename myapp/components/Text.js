import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      caption,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      justify,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      pagecolor,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      caption && styles.caption,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      justify && styles.justify,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      pagecolor && styles.pagecolor,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      style // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  // variations
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  semibold: {
    fontWeight: "500",
  },
  medium: {
    fontWeight: "900",
  },
  light: {
    fontWeight: "200",
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  justify:{textAlign:"justify"},
  // colors
  pagecolor: { color: theme.colors.pagecolor},
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  caption: theme.fonts.caption,
});
