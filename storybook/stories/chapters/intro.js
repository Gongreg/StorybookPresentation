import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native-ui-lib';
import {array, text} from '@storybook/addon-knobs';
import {StorybookImage} from '../../../src/images';
import {
  HalfSplit,
  SmallDetails,
  Splash,
  SubTitle,
  Title,
} from '../../../src/components';

storiesOf('Presentation', module)
  .add('1. Intro', () => (
    <Splash>
      <View style={{position: 'absolute'}} marginT-160 marginL-30>
      <View style={{marginLeft: 40}}>
        <StorybookImage />
        </View>
        <View>
          <Title>{text('Title', 'for React Native')}</Title>
        </View>
      </View>
      <View style={{position: 'absolute'}} marginT-480 marginL-70>
        <SubTitle>{text('Author', 'Gytis Vinclovas')}</SubTitle>
      </View>
      <View style={{position: 'absolute'}} marginT-880 marginL-80>
        <SmallDetails>
          {text('Email', 'gytisv@wix.com github.com/gongreg @GytisVinclovas')}
        </SmallDetails>
      </View>
    </Splash>
  ))
  .add('2. Content', () => {
    return (
      <HalfSplit
        title={text('title', 'Agenda')}
        data={array('items', [
          'What is Storybook?',
          'Why Storybook?',
          'React Native Storybook',
          'Setup',
          'Writing Stories',
          'Additional Benefits',
          'Open Source ❤️ Storybook',
        ])}
      />
    );
  });
