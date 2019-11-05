import React from 'react';
import {Image} from 'react-native-ui-lib';

export const WixImage = () => (
  <Image
    source={require('./images/wix.png')}
    style={{width: 400, resizeMode: 'contain'}}
  />
);

export const StorybookImage = () => (
  <Image
    source={require('./images/storybook.png')}
    style={{width: 760, resizeMode: 'contain'}}
  />
);

export const BackgroundLogoImage = () => (
  <Image
    source={require('./images/background-logo.png')}
    style={{resizeMode: 'contain', width: 1200}}
  />
);

export const DotsImage = () => (
  <Image
    source={require('./images/dots.png')}
    style={{resizeMode: 'contain', height: 140}}
  />
);

export const AddonsImage = () => (
  <Image
    source={require('./images/build-addons.png')}
    style={{resizeMode: 'contain', height: 340}}
  />
);

export const CanvasImage = () => (
  <Image
    source={require('./images/build-canvas.png')}
    style={{resizeMode: 'contain', height: 340}}
  />
);

export const CasesImage = () => (
  <Image
    source={require('./images/build-cases.png')}
    style={{resizeMode: 'contain', height: 340}}
  />
);

export const SidebarImage = () => (
  <Image
    source={require('./images/build-sidebar.png')}
    style={{resizeMode: 'contain', height: 340}}
  />
);

export const ThankYouImage = () => (
  <Image
    source={require('./images/thankyou.png')}
    style={{resizeMode: 'contain', height: 940, transform: [{ rotate: '20deg' }]}}
  />
);

export const VSCode = () => (
  <Image
    source={require('./images/vscode-addon.gif')}
  />
);

export const images = {
  sidebar: SidebarImage,
  cases: CasesImage,
  canvas: CanvasImage,
  addons: AddonsImage,
  dots: DotsImage,
  backgroundLogo: BackgroundLogoImage,
  storybook: StorybookImage,
  wix: WixImage,
  thankyou: ThankYouImage,
  vscode: VSCode
};
