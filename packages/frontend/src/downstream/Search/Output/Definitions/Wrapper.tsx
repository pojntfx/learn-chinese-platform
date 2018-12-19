import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Trigger } from "./Trigger";
import { Image } from "./Image";
import { Display } from "./Display";

interface IWrapper {
  text: string;
  images: string[];
}

const WrapperView = styled("div")``;

class Wrapper extends Component<IWrapper> {
  state = {
    open: false
  };

  toggleDefinitions = () =>
    this.setState({
      open: !this.state.open
    });

  render() {
    const { text, images } = this.props;

    return (
      <WrapperView {...this.props}>
        <Display title={text} />
        <Trigger onTrigger={this.toggleDefinitions} active={this.state.open} />
        {this.state.open &&
          images.map((image, index) => <Image src={image} key={index} />)}
      </WrapperView>
    );
  }
}

export { IWrapper, Wrapper };
