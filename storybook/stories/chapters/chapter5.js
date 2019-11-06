import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Chapter, ImageWithTitle} from '../../../src/components';
import {select, text} from '@storybook/addon-knobs';
import {images} from '../../../src/images';

storiesOf('CHAPTER 5: Additional Benefits')
  .add('1. Intro', () => (
    <Chapter
      number={text('number', '05')}
      title={text('title', 'Additional Benefits')}
    />
  ))
  .add('2. Screenshot testing', () => (
    <ImageWithTitle
      title={text('description', 'Screenshot testing')}
      image={images[select('Image', Object.keys(images), 'applitools')]}
    />
  ))
  .add('3. Async storage', () => (
    <ImageWithTitle
      title={text('description', 'Async storage')}
      image={images[select('Image', Object.keys(images), 'asyncStorage')]}
    />
  ))
  .add('4. Component composition', () => (
    <ImageWithTitle
      title={text('description', 'Component separation')}
      image={
        images[select('Image', Object.keys(images), 'presentationalComponents')]
      }
    />
  ))
  .add('5. VSCode addon', () => (
    <ImageWithTitle
      title={text('description', 'Select stories in VSCode/Webstorm')}
      image={images[select('Image', Object.keys(images), 'vscode')]}
    />
  ))
  .add('6. Web view', () => (
    <ImageWithTitle
      title={text('description', 'Control from the browser')}
      image={images[select('Image', Object.keys(images), 'webView')]}
    />
  ));
