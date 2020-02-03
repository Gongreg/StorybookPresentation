import React from 'react';
import {View, Colors} from 'react-native-ui-lib';
import {storiesOf} from '@storybook/react-native';
import {boolean, select, color, text} from '@storybook/addon-knobs';
import {
  SmallDetails,
  SplashSquare,
  ImageWithTitle,
  Title,
} from '../../../src/components';
import {images} from '../../../src/images';

storiesOf('CHAPTER 8: Finale')
  .add('1. Additional Example', () => (
    <View flex center>
      <Title>There is one more example...</Title>
    </View>
  ))
  .add(
    '2. This is an Example',
    () => (
      <View
        flex
        center
        style={{backgroundColor: color('backgroundColor', Colors.blue)}}>
        <Title
          style={{
            color: color('textColor', Colors.white),
            fontWeight: boolean('Bold', false) ? '600' : '400',
          }}>
          {text('title', 'This Presentation!')}
        </Title>
      </View>
    ),
    {
      notes: `
# My notes for slides are visible!

Something **silly** 😮  
  `,
    },
  )
  .add('3. Thank You', () => (
    <SplashSquare>
      <View style={{position: 'absolute'}} marginT-240 marginL-60>
        <Title>{text('Title', 'Thank you!')}</Title>
      </View>
      <View style={{position: 'absolute'}} marginT-880 marginL-80>
        <SmallDetails>
          {text('Email', 'gytisv@wix.com github.com/gongreg @GytisVinclovas')}
        </SmallDetails>
      </View>
    </SplashSquare>
  ))
  .add('Gist', () => (
    <ImageWithTitle
    title={text('description', 'https://bit.ly/3b2Xjrb')}
    image={images[select('Image', Object.keys(images), 'qr')]}
  />
  ));