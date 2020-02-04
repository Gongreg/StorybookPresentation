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
  .add('2. 45k stars, 1m+ npm installs per week', () => (
      <View flex center>
        <Title orange>45000+ Github stars</Title>
        <Title>1m+ npm installs/week</Title>
      </View>
  ))
  .add('3. Storybook is a team product', () => (
    <View flex center>
    <Title orange>{text('title', 'Storybook = Team Tool')}</Title>
  </View>
  ))
  .add('3. Usual feedback loop', () => (
    <View flex center>
       {images[select('Image', Object.keys(images), 'diagramBefore')]()}
    </View>
  ))
  .add('3. Feedback loop with Storybook', () => (
    <View flex center>
       {images[select('Image', Object.keys(images), 'diagramAfter')]()}
    </View>
  ));  