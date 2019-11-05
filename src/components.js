import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types'
import {BackgroundLogoImage, DotsImage, ThankYouImage, WixImage} from './images';

export const Splash = ({children}) => {
  return (
    <View background-blue flex>
      <View style={{position: 'absolute'}} marginT-60 marginL-60>
        <WixImage />
      </View>
      <View style={{position: 'absolute'}} marginT-380 marginL-360>
        <BackgroundLogoImage/>
      </View>
      {children}
    </View>
  );
};

export const SplashSquare = ({children}) => {
  return (
    <View background-blue flex>
      <View style={{position: 'absolute'}} marginT-60 marginL-60>
        <WixImage />
      </View>
      <View marginL-680 style={{position: 'absolute', marginTop: -100}}>
        <ThankYouImage/>
      </View>
      {children}
    </View>
  );
}

export const Chapter = ({number, title}) => {
  return (
    <View background-blue flex>
      <View marginL-90 marginT-40>
        <Number>{number}</Number>
      </View>
      <View marginL-100 marginT-200 style={{width: '40%'}}>
        <ChapterTitle>{title}</ChapterTitle>
      </View>
      <View
        style={{
          position: 'absolute',
          width: 200,
          height: 10,
          bottom: 220,
          left: 110,
        }}
        background-white
      />
    </View>
  );
};

export const ImageWithTitle = ({image, title}) => (
  <View flex center>
    {image()}
    <SubTitle>{title}</SubTitle>
  </View>
)

export const LongQuote = ({title}) => (
  <View background-blue flex center>
    <View>
      <Title orange>{title}</Title>
    </View>
    <View style={{position: 'absolute', bottom: 100}}>
      <DotsImage/>
    </View>
  </View>
);

LongQuote.propTypes = {
  title: PropTypes.string,
};

export const ChapterTitle = ({children}) => (
  <Title orange h1L center={false}>
    {children}
  </Title>
);

export const BoldTitle = ({children}) => (
  <Title orange h1B>
    {(children || '').toUpperCase()}
  </Title>
);

export const HalfSplit = ({data, title}) => {
  return (
    <View background-blue flex row>
      <View background-white style={{width: '50%', height: '100%'}} center>
        <BoldTitle>{title}</BoldTitle>
      </View>
      <View flex center>
        <FlatList
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          data={data.map(x => ({key: x}))}
          renderItem={({item}) => <SubTitle>{item.key}</SubTitle>}
        />
      </View>
    </View>
  );
};


export const Number = ({children, ...props}) => {
  return (
    <Text orange hNumber {...props}>
      {children}
    </Text>
  );
};

export const Title = ({children, ...props}) => {
  return (
    <Text white h1 center marginB-20 {...props}>
      {children}
    </Text>
  );
};

export const SubTitle = ({children, ...props}) => {
  return (
    <Text white h2 center {...props}>
      {children}
    </Text>
  );
};
