import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native-ui-lib';
import {number, text} from '@storybook/addon-knobs';
import {Chapter, SyntaxHighlighter, Title} from '../../../src/components';

storiesOf('CHAPTER 3: Setup')
  .add('1. Intro', () => (
    <Chapter number={text('number', '03')} title={text('title', 'Setup')} />
  ))

  .add('2. Installation', () => {
    const fontSize = number('fontSize', 24);

    return (
      <View center flex>
        <View style={{position: 'absolute'}}>
          <Title>1.</Title>
          <SyntaxHighlighter
            language={'bash'}
            codeString={text(
              'codeString1',
              'npm install --save-dev wix-react-native-storybook-template',
            )}
            fontSize={fontSize}
          />
          <View marginT-40>
            <Title>2.</Title>
            <SyntaxHighlighter
              language={'javascript'}
              codeString={text(
                'codeString2',
                `import {getStorybookTab} from ‛wix-react-native-storybook-template‛;

const storybookUI = getStorybookTab();
          `,
              )}
              fontSize={fontSize}
            />
          </View>
        </View>
      </View>
    );
  });
