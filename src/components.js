import React from 'react';
import {Text} from 'react-native-ui-lib';

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
