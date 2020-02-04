import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native-ui-lib';
import {Chapter, HalfSplit, Title, ImageWithTitle} from '../../../src/components';
import {select, array, text} from '@storybook/addon-knobs';
import React from 'react';
import {images} from '../../../src/images';

//Talk about storybook itself history

storiesOf('CHAPTER 7: Open Source ❤️ Storybook')
  .add('1. Intro', () => (
  <Chapter
    number={text('number', '07')}
    title={text('title', 'Open Source ❤️ Storybook')}
  />
  ))
  .add('2. Storybook before Open Source Community', () => (
    <ImageWithTitle
    title={text('description', 'Storybook back in the days')}
    image={images[select('Image', Object.keys(images), 'beforeContributions')]}
  />
  ))
  .add('3. Storybook now', () => (
    <ImageWithTitle
    title={text('description', 'Storybook Now')}
    image={images[select('Image', Object.keys(images), 'afterContributions')]}
  />
  ))
  .add('4. React Native History', () => (
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
  .add('5. Blog post', () => (
    <ImageWithTitle
      title={text('description', 'My first blog post')}
      image={images[select('Image', Object.keys(images), 'mediumPost')]}
    />
  ))
  .add('6. Welcome to contribute', () => (
    <ImageWithTitle
      title={text('description', 'Join us!')}
      image={images[select('Image', Object.keys(images), 'community')]}
    />
  ), {
    notes: `
 * Open open source
 * 900+ contributors
 * Only few in React Native
 * A great place to step into open source development
 * Roadmap meetings and friendly community
 * We have useful skills, (for instance Detox)
    `
  })
  .add('7. Issues list', () => (
    <ImageWithTitle
    title={text('description', 'Good First Issues')}
    image={images[select('Image', Object.keys(images), 'goodFirstIssues')]}
  />
  ))
  .add('8. React Native Roadmap', () => (
    <HalfSplit
    title={text('title', 'RN Storybook Roadmap')}
    data={[...array('items', [
      'Monorepo/Dev Experience',
      'E2E Tests with Detox',
      'CI',
      'React Native Web',
      'Storybook inside WebView',
      
    ]), '& more']}
  />
  ))
  .add('9. Contact me', () => (
    <View flex center>
      <Title orange>Email</Title>
      <Title>gytis.vinclovas@gmail.com</Title>
      <Title orange>Twitter</Title>
      <Title>@GytisVinclovas</Title>
    </View>
  ));
