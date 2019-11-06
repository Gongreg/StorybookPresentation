import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native-ui-lib';
import {Chapter, Title} from '../../../src/components';
import {text} from '@storybook/addon-knobs';
import React from 'react';

storiesOf('CHAPTER 2: Example')
  .add('1. Intro', () => (
    <Chapter number={text('number', '02')} title={text('title', 'Example')} />
  ))

  .add('2. Memberships Module Example', () => (
    <View flex center>
      <Title>Example 1: Wix One App Memberships</Title>
    </View>
  ));
