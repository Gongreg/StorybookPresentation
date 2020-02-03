import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native-ui-lib';
import {Chapter, Title} from '../../../src/components';
import {text} from '@storybook/addon-knobs';
import React from 'react';

storiesOf('CHAPTER 3: Example')
  .add('1. Intro', () => (
    <Chapter number={text('number', '03')} title={text('title', 'React Native Storybook')} />
  ))
  .add('2. Example', () => (
    <View flex center>
      <Title orange>{text('title', 'Example')}</Title>
    </View>
  ))
  .add('2. Wix One App', () => (
    <View flex center>
      <Title>Wix One App</Title>
    </View>
  ));
