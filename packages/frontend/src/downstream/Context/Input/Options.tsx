import * as React from "react";
import { Checkbox as CheckboxTemplate, Popup } from "semantic-ui-react";
import styled from "styled-components";
import { Button, Help } from "@libresat/frontend-components";
import { common } from "../../../data/common";

interface IOptions {
  precise: boolean;
  onClick: any;
}

const Checkbox = styled(CheckboxTemplate)`
  margin-top: 1em;
`;

const Options = ({ precise, onClick, ...otherProps }: IOptions) => (
  <Popup
    header="Search options"
    position="top right"
    on="click"
    hideOnScroll
    trigger={<Button icon="options" />}
    content={
      <Help
        title="Precise search"
        text={`Show only closely related context (no reverse lookup, i.e. it won't show "hào" if you type "hǎo").`}
        docsLink={`${common.site}/docs/app/settings`}
      >
        <Checkbox
          label={"Precise"}
          checked={precise}
          onClick={onClick}
          toggle
        />
      </Help>
    }
    {...otherProps}
  />
);

export { IOptions, Options };
