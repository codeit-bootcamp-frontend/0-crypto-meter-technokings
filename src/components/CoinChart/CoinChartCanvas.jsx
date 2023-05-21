/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";

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
  const { mediaQuery: mobileMediaQuery } = useMediaQuery(768);
  const { mediaQuery: tabletMediaQuery } = useMediaQuery(1200);
  const [isMobile, setIsMobile] = useState(mobileMediaQuery.matches);
  const [isTablet, setIsTablet] = useState(tabletMediaQuery.matches);

  /**
   *
   * @param {number} areaValue
   * @returns {string} y축에 보여줄 가격 데이터를 가공해주는 함수입니다.
   */
  const getFormTick = (value) => {
    switch (coinCurrency) {
      case "usd":
        return (value >> 0).toLocaleString();
      default:
        return `${((value / 100) >> 0).toLocaleString()}만`;
    }
  };

  const getXAxisDx = (isTab, isMob) => {
    if (!isMob && isTab) return 30;
    if (isMob && isTab) return 8;
    return 40;
  };
  const getXAxisTick = (isTab, isMob) => {
    if (!isMob && isTab) return "12px";
    if (isMob && isTab) return "8px";
    return "14px";
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
          <CartesianGrid stroke={colors.gray2} vertical={false} />
          <XAxis
            dx={getXAxisDx(isTablet, isMobile)}
            dataKey="xAxisDate"
            interval={(chartData.length / 3.35) >> 0}
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: `${getXAxisTick(isTablet, isMobile)}`,
              fontWeight: "400",
              display: "flex",
              color: `${colors.gray7}`,
            }}
          />
          <YAxis
            tickCount={6}
            tickFormatter={getFormTick}
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: isTablet ? "12px" : "14px",
              fontWeight: "400",
              display: "flex",
              color: `${colors.gray7}`,
            }}
          />
          <Tooltip
            cursor={{
              stroke: `${colors.gray8}`,
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
          />
        </AreaChart>
      </ResponsiveContainer>
    </SDiv>
  );
};

export default CoinChartCanvas;
