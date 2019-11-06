import React from 'react';
import {addDecorator, addParameters} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {JSX} from '../../ondevice-jsx';

console.disableYellowBox = true;

addDecorator(JSX);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    {name: 'dark', value: '#222222'},
    {name: 'white', value: '#ffffff', default: true},
  ],
});

require('./chapters/intro');
require('./chapters/chapter1');
require('./chapters/chapter2');
require('./chapters/chapter3');
require('./chapters/chapter4');
require('./chapters/chapter5');
require('./chapters/chapter6');
require('./chapters/chapter7');

require('./screens');
require('./components');
require('./images');
require('./typography');
