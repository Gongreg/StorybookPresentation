import React from 'react';
interface Props {
    storySource: string;
}
export default class JSX extends React.PureComponent<Props> {
    onPressCopy: () => void;
    render(): JSX.Element;
}
export {};
