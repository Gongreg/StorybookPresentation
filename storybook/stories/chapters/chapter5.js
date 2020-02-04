import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Text, View} from 'react-native-ui-lib';
import {color, number, text, object, boolean} from '@storybook/addon-knobs';
import {
  Chapter,
  ChapterTitle,
  Title,
  SyntaxHighlighter,
} from '../../../src/components';

storiesOf('CHAPTER 5: Writing stories')
  .add('1. Intro', () => (
    <Chapter
      number={text('number', '05')}
      title={text('title', 'Writing Stories')}
    />
  ))
  .add('2. ChapterTitle Component', () => (
    <View flex center>
      <View
        style={{
          marginTop: 50,
          paddingTop: 40,
          paddingHorizontal: 30,
          backgroundColor: 'rgb(50, 50, 50)',
        }}>
        <ChapterTitle>Chapter Title</ChapterTitle>
      </View>
    </View>
  ))
  .add('3. Default', () => {
    const fontSize = number('fontSize', 24);
    const stringText = text('title', 'Default Title');
    const selectedColor = color('color', 'rgb(50, 50, 50)');

    return (
      <View center flex>
        <View style={{position: 'absolute'}}>
          <SyntaxHighlighter
            key={Math.random()}
            language={'javascript'}
            codeString={`// storybook/index.js
import React from ‛react‛;
import {storiesOf} from ‛wix-react-native-storybook-template‛;

storiesOf(‛Chapter Title‛)
  .add(‛Default‛, () =❯ ❮ChapterTitle❯${stringText}❮/ChapterTitle❯)`}
            fontSize={fontSize}
          />
          <View>
            <Text white h2 style={{fontWeight: 'bold', marginTop: 20}}>
              Chapter Title
            </Text>

            <View marginL-20>
              <Text white h3 marginL-4 style={{fontWeight: 'bold'}}>
                • Default
              </Text>

              <View
                style={{
                  paddingTop: 40,
                  backgroundColor: selectedColor,
                }}>
                <ChapterTitle>{stringText}</ChapterTitle>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  })
  .add('4. Bold', () => {
    const fontSize = number('fontSize', 24);
    const stringText = text('title', 'Bold Title');
    const storyName = text('storyName', 'Bold');
    const selectedColor = color('color', 'rgb(50, 50, 50)');
    const centered = boolean('Centered', false);

    return (
      <View center flex>
        <View style={{position: 'absolute'}}>
          <SyntaxHighlighter
            key={Math.random()}
            language={'javascript'}
            codeString={`storiesOf(‛Chapter Title‛)
  .add(‛Default‛, () =❯ ❮ChapterTitle❯Default Title❮/ChapterTitle❯)
  .add(‛${storyName}‛, () =❯ ❮ChapterTitle h1B${
              centered ? ' center' : ''
            }❯${stringText}❮/ChapterTitle❯);`}
            fontSize={fontSize}
          />
          <View>
            <Text white h2 style={{fontWeight: 'bold', marginTop: 20}}>
              Chapter Title
            </Text>

            <View marginL-20>
              <Text white h3 marginL-4 style={{fontWeight: 'bold'}}>
                • Default
              </Text>

              <View
                style={{
                  paddingTop: 40,
                  backgroundColor: selectedColor,
                }}>
                <ChapterTitle>Default Title</ChapterTitle>
              </View>

              <Text white h3 marginL-4 style={{fontWeight: 'bold'}}>
                • {storyName}
              </Text>

              <View
                style={{
                  paddingTop: 40,
                  backgroundColor: selectedColor,
                }}>
                <ChapterTitle h1B center={centered}>
                  {stringText}
                </ChapterTitle>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  })
  .add('5. Thats it!', () => (
    <View flex center>
      <Title>That's it!</Title>
    </View>
  ));
