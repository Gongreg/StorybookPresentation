import {storiesOf} from '@storybook/react-native';
import {number, text} from '@storybook/addon-knobs';
import React from 'react';
import {View} from 'react-native-ui-lib';
import CenterView from './CenterView';
import {SyntaxHighlighter} from '../../src/components';

storiesOf('Components')
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Syntax highlighter', () => (
    <View style={{position: 'absolute'}}>
      <SyntaxHighlighter
        language={text('language', 'javascript')}
        codeString={text('codeString', 'console.log(‛Test!‛);')}
        fontSize={number('fontSize', 24)}
      />
    </View>
  ));
