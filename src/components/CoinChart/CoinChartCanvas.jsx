/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useMediaQuery from "@/hooks/useMediaQuery";
import { SDiv } from "@styles";
import colors from "@styles/colors";

import CoinChartCustomTooltip from "./CoinChartCustomTooltip";

const CoinChartCanvas = ({ coinCurrency, isGreen, chartData }) => {
  // 반응형에 따라 그래프의 축 데이터들의 css를 다루고자 사용했습니다.
  const { mediaQuery: mobileMediaQuery } = useMediaQuery(768);
  const { mediaQuery: tabletMediaQuery } = useMediaQuery(1200);
  const [isMobile, setIsMobile] = useState(mobileMediaQuery.matches);
  const [isTablet, setIsTablet] = useState(tabletMediaQuery.matches);

  /**
   *
   * @param {number} areaValue
   * @returns {string} y축에 보여줄 가격 데이터를 가공해주는 함수입니다.
   */
  const formTick = (value) => {
    switch (coinCurrency) {
      case "usd":
        return (value >> 0).toLocaleString();
      default:
        return `${((value / 100) >> 0).toLocaleString()}만`;
    }
  };

  useEffect(() => {
    setIsMobile(mobileMediaQuery.matches);
  }, [mobileMediaQuery.matches]);
  useEffect(() => {
    setIsTablet(tabletMediaQuery.matches);
  }, [tabletMediaQuery.matches]);

  return (
    <SDiv full>
      <ResponsiveContainer width="100%" height={isMobile ? 298 : 351}>
        <AreaChart
          data={chartData}
          margin={{
            top: 34.5,
            right: isMobile ? 0 : 20,
            left: isMobile ? 0 : 20,
            bottom: 20,
          }}
          onClick={() => {
            // TODOS: (추가 기능할 만한 것) event 객체에서 해당 tick의 날짜, 가격 데이터를 사용할 수 있다.
          }}
        >
          <defs>
            <linearGradient id="gradientId" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="25%"
                stopColor={isGreen ? `${colors.green}` : `${colors.red}`}
                stopOpacity={1}
              />
              <stop
                offset="85%"
                stopColor={isGreen ? `${colors.green}80` : `${colors.red}80`}
                stopOpacity={0.2}
              />
              <stop
                offset="90%"
                stopColor={isGreen ? `${colors.green}80` : `${colors.red}80`}
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E7E9F0" vertical={false} />
          <XAxis
            dx={isTablet ? 0 : 40}
            dataKey="xAxisDate"
            interval={(chartData.length / 3.35) >> 0}
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: isTablet ? "8px" : "14px",
              fontWeight: "400",
              display: "flex",
              color: `${colors.gray7}`,
            }}
          />
          <YAxis
            tickCount={6}
            tickFormatter={formTick}
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: isTablet ? "10px" : "14px",
              fontWeight: "400",
              display: "flex",
              color: `${colors.gray7}`,
            }}
          />
          <Tooltip
            cursor={{
              stroke: "#262A38",
              strokeWidth: 1,
              strokeDasharray: "3 3",
            }}
            content={<CoinChartCustomTooltip isMobile={isMobile} />}
          />
          <Area
            type="monotone"
            dataKey="areaValue"
            stroke={isGreen ? `${colors.green}80` : `${colors.red}80`}
            fill="url(#gradientId)"
            animationEasing="ease-in-out"
            animationDuration={1000}
            connectNulls
            // TODOS: 그래프가 그려질 때, 다 그렸을 때 등 이벤트를 통해 추가 동작을 구현할 수 있습니다.
          />
        </AreaChart>
      </ResponsiveContainer>
    </SDiv>
  );
};

CoinChartCanvas.propTypes = {
  isGreen: PropTypes.bool.isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      areaValue: PropTypes.number.isRequired,
      tickDate: PropTypes.string.isRequired,
      tickPrice: PropTypes.string.isRequired,
      xAxisDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CoinChartCanvas;
