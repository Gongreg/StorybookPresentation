import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import CenterView from './CenterView';
import {
  BoldTitle,
  ChapterTitle,
  Number,
  SmallDetails,
  SubTitle,
  Title,
} from '../../src/components';

storiesOf('Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Number', () => <Number>{text('number', '12')}</Number>)
  .add('Title', () => (
    <Title orange={boolean('Orange', false)}>{text('title', 'Title')}</Title>
  ))
  .add('Chapter Title', () => (
    <ChapterTitle>{text('title', 'Chapter Title')}</ChapterTitle>
  ))
  .add('Bold Title', () => <BoldTitle>{text('title', 'Bold Title')}</BoldTitle>)
  .add('Subtitle', () => <SubTitle>{text('subtitle', 'Subtitle')}</SubTitle>)
  .add('Small Details', () => (
    <SmallDetails>{text('small details', 'Small details')}</SmallDetails>
  ));
