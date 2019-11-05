import React from 'react';
import {View} from 'react-native-ui-lib';
import {storiesOf, addDecorator, addParameters} from '@storybook/react-native';
import {withKnobs, boolean, select, text, array} from '@storybook/addon-knobs';
import {JSX} from '../../ondevice-jsx';
import CenterView from './CenterView';
import {
  WixImage,
  StorybookImage,
  images,
} from '../../src/images';
import {
  BoldTitle,
  Chapter,
  ChapterTitle,
  HalfSplit,
  ImageWithTitle,
  LongQuote,
  Number,
  Splash,
  SplashSquare,
  SubTitle,
  Title,
} from '../../src/components';

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
  .add('1. Intro', () => (
    <Splash>
      <View style={{position: 'absolute'}} marginT-160 marginL-60>
        <StorybookImage/>
        <View>
          <Title>{text('Title', 'for React Native')}</Title>
        </View>
      </View>
      <View style={{position: 'absolute'}} marginT-480 marginL-80>
        <SubTitle>{text('Author', 'Gytis Vinclovas')}</SubTitle>
      </View>
    </Splash>
  ))
  .add('2. Content', () => {
    return (
      <HalfSplit
        title={text('title', 'Agenda')}
        data={array('items', [
          'What is Storybook?',
          'History',
          'Navigator',
          'Addons',
          'Screenshot Testing',
        ])}
      />
    );
  })
  .add('3. What is Storybook', () => {
    return <Chapter number={'01'} title={'What is Storybook?'}/>;
  })
  .add('4. Storybook Description', () => (
    <LongQuote
      title={text('title', 'Storybook is a tool for developing UI components')}
    />
  ))
  .add('5. Isolation', () => (
    <ImageWithTitle
      title={text('description', 'Build components in isolation')}
      image={images[select('Image', Object.keys(images), 'canvas')]}
    />
  ))
  .add('6. Mocking cases', () => (
    <ImageWithTitle
      title={text('description', 'Mock hard to reach use cases')}
      image={images[select('Image', Object.keys(images), 'cases')]}
    />
  ))
  .add('7. Document cases', () => (
    <ImageWithTitle
      title={text('description', 'Document use cases as stories')}
      image={images[select('Image', Object.keys(images), 'sidebar')]}
    />
  ))
  .add('8. Addons', () => (
    <ImageWithTitle
      title={text('description', 'Experiment with addons')}
      image={images[select('Image', Object.keys(images), 'addons')]}
    />
  ))

  .add('???. VSCode addon', () => (
    <ImageWithTitle
      title={'Select stories in VSCode/Webstorm'}
      image={images[select('Image', Object.keys(images), 'vscode')]}
    />
  ))

  .add('998. Thank You', () => (
    <SplashSquare>
      <View style={{position: 'absolute'}} marginT-240 marginL-60>
        <Title>{text('Title', 'Thank you!')}</Title>
      </View>
    </SplashSquare>
  ))
  .add('999. Workshop', () => (
    <View center flex>
      <Title>{text('title', 'Part II')}</Title>
      <SubTitle>{text('subtitle', 'Workshop')}</SubTitle>
    </View>
  ));
;

storiesOf('Screens')
  .add('Splash', () => <Splash/>)
  .add('Splash Square', () => <SplashSquare/>)
  .add('HalfSplit', () => (
    <HalfSplit
      title={text('title', 'Title')}
      data={array('items', ['Example 1', 'Example 2'])}
    />
  ))
  .add('Chapter', () => (
    <Chapter
      number={text('number', '01')}
      title={text('title', 'Example Title')}
    />
  ))
  .add('Long Quote', () => (
    <LongQuote
      title={text('title', 'This is a screen where you can see long quotes')}
    />
  ))
  .add('Image With Description', () => (
    <ImageWithTitle
      title={text('title', 'Default description')}
      image={
        images[select('Image', Object.keys(images), Object.keys(images)[0])]
      }
    />
  ));

const imagesStories = storiesOf('Images').addDecorator(getStory => (
  <CenterView>{getStory()}</CenterView>
));

Object.keys(images).forEach(k => imagesStories.add(k, images[k]));

// Setting up storybook
// Writing stories (good place to start chaning the view)

// Wix one App memberships
// Example, developing components according to business needs

// Screenshot testing
// Automatic testing of created stories

// History
// At first, separate packager with different entry point, no on device ui
// Story list was added to ui
// Making storybook a simple view that can be used anywhere
// Trying out addons
// New layout v1
// Final layout

// Open source
// Amount of contributors, good place to step into open source, good for Wix


storiesOf('Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Number', () => <Number>{text('number', '12')}</Number>)
  .add('Title', () => (
    <Title orange={boolean('Orange', false)}>{text('title', 'Title')}</Title>
  ))
  .add('Chapter Title', () => (
    <ChapterTitle>{text('title', 'Chapter Title')}</ChapterTitle>
  ))
  .add('Bold Title', () => <BoldTitle>{text('title', 'Bold Title')}</BoldTitle>)
  .add('SubTitle', () => <SubTitle>{text('subtitle', 'Subtitle')}</SubTitle>);
