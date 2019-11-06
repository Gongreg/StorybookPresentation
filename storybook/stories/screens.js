import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {array, select, text} from '@storybook/addon-knobs';
import {
  Chapter,
  HalfSplit,
  ImageWithTitle,
  LongQuote,
  Splash,
  SplashSquare,
} from '../../src/components';
import {images} from '../../src/images';

storiesOf('Screens')
  .add('Splash', () => <Splash />)
  .add('Splash Square', () => <SplashSquare />)
  .add('HalfSplit', () => (
    <HalfSplit
      title={text('title', 'Title')}
      data={array('items', ['Example 1', 'Example 2'])}
    />
  ))
  .add('Chapter', () => (
    <Chapter
      number={text('number', '01')}
      title={text('title', 'Example Title')}
    />
  ))
  .add('Long Quote', () => (
    <LongQuote
      title={text('title', 'This is a screen where you can see long quotes')}
    />
  ))
  .add('Image With Description', () => (
    <ImageWithTitle
      title={text('title', 'Default description')}
      image={
        images[select('Image', Object.keys(images), Object.keys(images)[0])]
      }
    />
  ));
