import React from 'react';
import {View, Image} from 'react-native-ui-lib';

import {storiesOf, addDecorator, addParameters} from '@storybook/react-native';
import {withKnobs, text} from '@storybook/addon-knobs';
import {JSX} from '../../ondevice-jsx';
import CenterView from './CenterView';
import {SubTitle, Title} from '../../src/components';

console.disableYellowBox = true;

addDecorator(JSX);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    {name: 'dark', value: '#222222'},
    {name: 'white', value: '#ffffff', default: true},
  ],
});

storiesOf('Presentation', module)
  .add('Intro', () => (
    <View style={{backgroundColor: 'rgb(32, 48, 60)', flex: 1}}>
      <View style={{position: 'absolute'}} marginT-60 marginL-60>
        <Image
          source={require('../../src/images/wix.png')}
          style={{width: 400, resizeMode: 'contain'}}
        />
      </View>
      <View style={{position: 'absolute'}} marginT-380 marginL-360>
        <Image
          source={require('../../src/images/background-logo.png')}
          style={{resizeMode: 'contain', width: 1200}}
        />
      </View>
      <View style={{position: 'absolute'}} marginT-160 marginL-60>
        <Image
          source={require('../../src/images/storybook.png')}
          style={{width: 760, resizeMode: 'contain'}}
        />
        <View>
          <Title>for React Native</Title>
        </View>
      </View>
      <View style={{position: 'absolute'}} marginT-480 marginL-80>
        <SubTitle>Gytis Vinclovas</SubTitle>
      </View>
    </View>
  ))
  .add('Content', () => {
    return <View />;
  });

storiesOf('Components', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Title', () => <Title color-white>{text('title', 'Title')}</Title>);
