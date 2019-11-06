import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {images} from '../../src/images';
import CenterView from './CenterView';

const imagesStories = storiesOf('Images').addDecorator(getStory => (
  <CenterView>{getStory()}</CenterView>
));

Object.keys(images).forEach(k => imagesStories.add(k, images[k]));
