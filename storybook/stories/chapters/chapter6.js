import {storiesOf} from '@storybook/react-native';
import {Chapter, Title, ImageWithTitle} from '../../../src/components';
import {select, text} from '@storybook/addon-knobs';
import React from 'react';
import {images} from '../../../src/images';

storiesOf('CHAPTER 6. Open Source Storybook')
  .add('1. Intro', () => (
  <Chapter
    number={text('number', '06')}
    title={text('title', 'Open Source Storybook')}
  />
))
  .add('2. Welcome to contribute', () => (
    <ImageWithTitle
      title={text('description', 'Join us!')}
      image={images[select('Image', Object.keys(images), 'community')]}
    />
  ), {
    notes: `
 * Open open source
 * 800+ contributors
 * Only few in React Native
 * A great place to step into open source development
 * Roadmap meetings and friendly community
 * We have useful skills, (for instance Detox)
    `
  })
  .add('3. History', () => (
    <ImageWithTitle
      title={text('description', 'Old Storybook UI')}
      image={images[select('Image', Object.keys(images), 'oldUI')]}
    />
  ), {
    notes: `
# History
 * At first, separate packager with different entry point, no on device ui
 * Story list was added to ui
 * Making storybook a simple view that can be used anywhere
 * Trying out addons
 * New layout v1
 * Final layout
    `
  })

;
