import {storiesOf} from '@storybook/react-native';
import {Chapter, ImageWithTitle, LongQuote} from '../../../src/components';
import {select, text} from '@storybook/addon-knobs';
import {images} from '../../../src/images';
import React from 'react';

storiesOf('CHAPTER 1: What is Storybook')
  .add('1. Intro', () => (
    <Chapter
      number={text('number', '01')}
      title={text('title', 'What is Storybook?')}
    />
  ))
  .add('2. Storybook Description', () => (
    <LongQuote
      title={text('title', 'Storybook is a tool for developing UI components')}
    />
  ))
  .add('3. Isolation', () => (
    <ImageWithTitle
      title={text('description', 'Build components in isolation')}
      image={images[select('Image', Object.keys(images), 'canvas')]}
    />
  ))
  .add('4. Mocking cases', () => (
    <ImageWithTitle
      title={text('description', 'Mock hard to reach use cases')}
      image={images[select('Image', Object.keys(images), 'cases')]}
    />
  ))
  .add('5. Document cases', () => (
    <ImageWithTitle
      title={text('description', 'Document use cases as stories')}
      image={images[select('Image', Object.keys(images), 'sidebar')]}
    />
  ))
  .add('6. Addons', () => (
    <ImageWithTitle
      title={text('description', 'Experiment with addons')}
      image={images[select('Image', Object.keys(images), 'addons')]}
    />
  ));
