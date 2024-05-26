// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { createChart, CandlestickData, CrosshairMode } from 'lightweight-charts';

// const CandleChart: React.FC = () => {
//   const chartContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (chartContainerRef.current) {
//       const chart = createChart(chartContainerRef.current, {
//         width: chartContainerRef.current.clientWidth,
//         height: chartContainerRef.current.clientHeight,
//         layout: {
//           background: '#131722',
//           textColor: 'rgba(255, 255, 255, 0.9)',
//         },
//         grid: {
//           vertLines: {
//             color: '#334158',
//           },
//           horzLines: {
//             color: '#334158',
//           },
//         },
//         crosshair: {
//           mode: CrosshairMode.Normal,
//         },
//         rightPriceScale: {
//           borderColor: '#485c7b',
//         },
//         timeScale: {
//           borderColor: '#485c7b',
//         },
//       });

//       const candlestickSeries = chart.addCandlestickSeries({
//         upColor: '#4caf50',
//         downColor: '#ff5252',
//         borderDownColor: '#ff5252',
//         borderUpColor: '#4caf50',
//         wickDownColor: '#ff5252',
//         wickUpColor: '#4caf50',
//       });

//       const data: CandlestickData[] = [
//         { time: '2023-05-01', open: 29000, high: 29500, low: 28500, close: 29200 },
//         { time: '2023-05-02', open: 29200, high: 29600, low: 29000, close: 29500 },
//         { time: '2023-05-03', open: 29500, high: 29700, low: 29200, close: 29400 },
//         { time: '2023-05-04', open: 29400, high: 29500, low: 28900, close: 29000 },
//         { time: '2023-05-05', open: 29000, high: 29200, low: 28500, close: 28800 },
//       ];

//       candlestickSeries.setData(data);

//       return () => {
//         chart.remove();
//       };
//     }
//   }, []);

//   return <div ref={chartContainerRef} className="w-full h-full" />;
// };

// export default CandleChart;
