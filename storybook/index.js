import React from 'react';
import {Typography, Colors, View} from 'react-native-ui-lib';
import {getStorybookUI, configure} from '@storybook/react-native';
import './rn-addons';

configure(() => {
  require('./stories');
}, module);

Colors.loadColors({
  white: 'rgb(255, 255, 255)',
  blue: 'rgb(32, 48, 60)',
  orange: 'rgb(235, 87, 79)',
});

Typography.loadTypographies({
  hNumber: {
    fontSize: 220,
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
  h1: {
    fontSize: 100,
    fontWeight: '400',
    lineHeight: 100,
    fontFamily: 'Helvetica',
  },
  h1B: {
    fontSize: 100,
    fontWeight: '600',
    lineHeight: 100,
    fontFamily: 'Helvetica',
  },
  h1L: {
    fontSize: 100,
    fontWeight: '200',
    lineHeight: 100,
    fontFamily: 'Helvetica',
  },
  h2: {
    fontSize: 46,
    fontWeight: '300',
    lineHeight: 64,
    fontFamily: 'Helvetica',
  },
});

const lightTheme = {
  backgroundColor: Colors.white,
  headerTextColor: Colors.blue,
  labelColor: Colors.blue,
  borderColor: 'rgb(32, 48, 60)',
  previewBorderColor: 'gray',
  buttonTextColor: Colors.blue,
  buttonActiveTextColor: Colors.blue,
};

const darkTheme = {
  backgroundColor: Colors.blue,
  headerTextColor: Colors.white,
  labelColor: Colors.blue,
  borderColor: 'rgb(32, 48, 60)',
  previewBorderColor: 'gray',
  buttonTextColor: Colors.white,
  buttonActiveTextColor: Colors.white,
};

//const StorybookUIRoot = getStorybookUI({theme: lightTheme, isUIHidden: true});
const StorybookUIRoot = getStorybookUI({theme: darkTheme, isUIHidden: false});

//const StorybookUIRoot = getStorybookUI();
export default () => (
  <View flex style background-blue>
    <StorybookUIRoot />
  </View>
);
