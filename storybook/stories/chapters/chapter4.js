import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native-ui-lib';
import {color, number, text} from '@storybook/addon-knobs';
import {
  Chapter,
  ChapterTitle,
  SyntaxHighlighter,
} from '../../../src/components';

storiesOf('CHAPTER 4: Writing stories')
  .add('1. Intro', () => (
    <Chapter
      number={text('number', '04')}
      title={text('title', 'Writing Stories')}
    />
  ))

  .add('2. Default', () => {
    const fontSize = number('fontSize', 24);
    const stringText = text('title', 'Default Title');
    const selectedColor = color('color', 'rgb(50, 50, 50)');

    return (
      <View center flex>
        <View style={{position: 'absolute'}}>
          <SyntaxHighlighter
            key={Math.random()}
            language={'javascript'}
            codeString={`import React from ‛react‛;
import {storiesOf} from ‛wix-react-native-storybook-template‛;

storiesOf(‛Chapter Title‛)
  .add(‛Default‛, () =❯ ❮ChapterTitle❯${stringText}❮/ChapterTitle❯)`}
            fontSize={fontSize}
          />
          <View
            style={{
              marginTop: 50,
              paddingTop: 40,
              backgroundColor: selectedColor,
            }}>
            <ChapterTitle>{stringText}</ChapterTitle>
          </View>
        </View>
      </View>
    );
  })
  .add('3. Bold', () => {
    const fontSize = number('fontSize', 24);
    const stringText = text('title', 'Bold Title');
    const selectedColor = color('color', 'rgb(50, 50, 50)');

    return (
      <View center flex>
        <View style={{position: 'absolute'}}>
          <SyntaxHighlighter
            key={Math.random()}
            language={'javascript'}
            codeString={`storiesOf(‛Chapter Title‛)
  .add(‛Default‛, () =❯ ❮ChapterTitle❯Default Title❮/ChapterTitle❯)
  .add(‛Bold‛, () =❯ ❮ChapterTitle h1B❯${stringText}❮/ChapterTitle❯);`}
            fontSize={fontSize}
          />
          <View
            style={{
              marginTop: 50,
              paddingTop: 40,
              backgroundColor: selectedColor,
            }}>
            <ChapterTitle h1B>{stringText}</ChapterTitle>
          </View>
        </View>
      </View>
    );
  });
