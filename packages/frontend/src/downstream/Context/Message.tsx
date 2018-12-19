import * as React from "react";
import styled from "styled-components";

interface IMessage {
  text: string;
}

const MessageView = styled("div")``;

const MessageTitleView = styled("b")``;

const Message = ({ text, ...otherProps }: IMessage) => (
  <MessageView {...otherProps}>
    <MessageTitleView>Info:</MessageTitleView>
    {text}
  </MessageView>
);

export { IMessage, Message };
