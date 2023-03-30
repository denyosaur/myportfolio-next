import { buildLegacyTheme } from "sanity";

const colors = {
  black: '#1C1C1C',
  blue: '#161B33',
  darkBlue: '#0D0C1D',
  error: '#D9534F',
  gray: '#666',
  lightBlue: '#474973',
  lightPeach: '#F1DAC4',
  peach: '#A69CAC',
  primaryBackground: '#0D0C1D',
  primaryFont: '#F1DAC4',
  red: '#DB4437',
  success: '#5CB85C',
  warning: '#F0AD4E',
  white: '#FFFFFF',
}

export const sanityTheme = buildLegacyTheme({
  "--black": colors.black,
  "--white": colors.lightPeach,

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": colors.primaryBackground,
  "--component-text-color": colors.primaryFont,

  //primary brand color
  "--brand-primary": colors.darkBlue,

  //button
  "--default-button-color": colors.gray,
  "--default-button-primary-color": colors.darkBlue,
  "--default-button-success-color": colors.success,
  "--default-button-warning-color": colors.warning,
  "--default-button-danger-color": colors.red,

  //state
  "--state-info-color": colors.darkBlue,
  "--state-success-color": colors.success,
  "--state-warning-color": colors.warning,
  "--state-danger-color": colors.red,

  //Navbar
  "--main-navigation-color": colors.black,
  "--main-navigation-color-inverted": colors.lightPeach,

  "--focus-color": colors.darkBlue,
});
