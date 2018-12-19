import * as React from "react";
import styled from "styled-components";

interface IStatistics {
  remaining: number;
  mistakesInQuiz: number;
  mistakesInStroke: number;
}

const StatisticsView = styled("div")``;
const StatisticView = styled("b")``;

const Statistics = ({
  remaining,
  mistakesInQuiz,
  mistakesInStroke,
  ...otherProps
}: IStatistics) => (
  <StatisticsView {...otherProps}>
    <StatisticView>{remaining}</StatisticView>
    <StatisticView>{mistakesInQuiz}</StatisticView>
    <StatisticView>{mistakesInStroke}</StatisticView>
  </StatisticsView>
);

export { IStatistics, Statistics };
