import * as React from "react";
import styled from "styled-components";
import Fetch from "react-fetch-component";
import { Wrapper } from "./Wrapper";
import { Placeholder } from "./Output/Placeholder";

interface IList {
  endpoint: string;
  query: string;
}

const ListView = styled("div")``;

const List = ({ endpoint, query, ...otherProps }: IList) => (
  <ListView {...otherProps}>
    <Fetch url={`${endpoint}/v1/context/getContext?query=${query}`} cache>
      {({ data, loading }) => (
        <>
          {data &&
            Array.isArray(data) &&
            data.slice(0, 5).map((data, index) => (
              <Wrapper
                character={{
                  text: data.hanzi.simplified.text,
                  stroke: data.hanzi.stroke
                }}
                pinyin={{
                  text: data.pinyin.text,
                  audioSrc: data.pinyin.male.voice
                }}
                definitions={{
                  definitions: data.definitions
                }}
                endpoint={endpoint}
                key={index}
              />
            ))}
          {loading && [1, 2, 3].map((_, index) => <Placeholder key={index} />)}
        </>
      )}
    </Fetch>
  </ListView>
);

export { IList, List };
