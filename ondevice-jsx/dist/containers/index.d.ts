import React from 'react';
interface State {
    storySource: string;
}
export default class JSX extends React.PureComponent<{}, State> {
    readonly state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onStorySourceReceived: ({ storySource }: {
        storySource: string;
    }) => void;
    render(): JSX.Element;
}
export {};
