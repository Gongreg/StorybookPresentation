import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native-ui-lib';
import {Chapter, Title} from '../../../src/components';
import {select, text} from '@storybook/addon-knobs';
import {images} from '../../../src/images';
import React from 'react';

storiesOf('CHAPTER 2: Why Storybook?')
  .add('1. Intro', () => (
    <Chapter
      number={text('number', '02')}
      title={text('title', 'Why Storybook?')}
    />
  ))
  .add('2. Design systems', () => (
    <View flex center>
      <Title orange>{text('title', 'Design Systems')}</Title>
    </View>
  ))
  .add('3. Design systems workflow', () => (
    <View flex center>
      {images[select('Image', Object.keys(images), 'designSystemWorkflow')]()}
    </View>
  ));