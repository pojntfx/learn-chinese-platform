import * as React from "react";
import styled from "styled-components";

interface IMessage {
  text: string;
  positive?: boolean;
}

const MessageView = styled("div")``;
const MessageContentView = styled("div")``;

const Message = ({ text, positive, ...otherProps }: IMessage) => (
  <MessageView {...otherProps}>
    {positive ? "Positive" : "Negative"}
    <MessageContentView>{text}</MessageContentView>
  </MessageView>
);

export { IMessage, Message };
