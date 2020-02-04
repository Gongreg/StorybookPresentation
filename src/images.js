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
    style={{resizeMode: 'contain', height: 940, transform: [{rotate: '20deg'}]}}
  />
);

export const VSCode = () => (
  <Image source={require('./images/vscode-addon.gif')} />
);

export const PresentationalComponents = () => (
  <Image
    source={require('./images/presentational-components.png')}
    style={{resizeMode: 'contain', height: '50%'}}
  />
);

export const AsyncStorage = () => (
  <Image
    source={require('./images/async-storage.gif')}
    style={{resizeMode: 'contain', height: '60%'}}
  />
);

export const Applitools = () => (
  <Image
    source={require('./images/applitools.gif')}
    style={{resizeMode: 'contain', height: '60%'}}
  />
);

export const WebView = () => (
  <Image
    source={require('./images/web-view.png')}
    style={{resizeMode: 'contain', height: '60%'}}
  />
);

export const OldUI = () => (
  <Image
    source={require('./images/old-ui.gif')}
  />
);

export const Community = () => (
  <Image
    source={require('./images/community.jpg')}
    style={{resizeMode: 'contain', height: '60%'}}
  />
);

export const QR = () => (
  <Image
    source={require('./images/qr.png')}
    style={{marginBottom: 20, width: 300, height: 300}}
  />
);

export const DesignSystemWorkflow = () => (
  <Image
    source={require('./images/design-system-workflow.jpg')}
    style={{resizeMode: 'contain', height: '80%'}}
  />
);

export const BeforeContributions = () => (
  <Image
    source={require('./images/before-contributions.png')}
    style={{resizeMode: 'contain', height: '35%'}}
  />
);

export const AfterContributions = () => (
  <Image
  source={require('./images/after-contributions.png')}
  style={{resizeMode: 'contain', height: '30%'}}
/>
);

export const MediumPost = () => (
  <Image
    source={require('./images/medium-post.gif')}
  />
);

export const GoodFirstIssues = () => (
  <Image
    source={require('./images/good-first-issues.png')}
    style={{resizeMode: 'contain', height: '80%'}}
  />
);

export const DiagramBefore = () => (
  <Image
    source={require('./images/diagram-before.png')}
    style={{resizeMode: 'contain', height: '46%'}}
  />
);

export const DiagramAfter = () => (
  <Image
    source={require('./images/diagram-after.png')}
    style={{resizeMode: 'contain', height: '19%'}}
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
  vscode: VSCode,
  presentationalComponents: PresentationalComponents,
  asyncStorage: AsyncStorage,
  applitools: Applitools,
  webView: WebView,
  oldUI: OldUI,
  community: Community,
  qr: QR,
  designSystemWorkflow: DesignSystemWorkflow,
  beforeContributions: BeforeContributions,
  afterContributions: AfterContributions,
  mediumPost: MediumPost,
  goodFirstIssues: GoodFirstIssues,
  diagramBefore: DiagramBefore,
  diagramAfter: DiagramAfter
};
