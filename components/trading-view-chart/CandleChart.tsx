// 'use client';

// import { FC, useEffect, useState } from 'react';
// import { Chart } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
// import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
// import 'chartjs-adapter-moment';


// ChartJS.register(CategoryScale, LinearScale, CandlestickController, CandlestickElement, Title, Tooltip, Legend);

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Candlestick Chart',
//       color: 'white',
//     },
//   },
//   scales: {
//     x: {
//       ticks: {
//         color: 'white',
//       },
//     },
//     y: {
//       ticks: {
//         color: 'white',
//       },
//     },
//   },
// };

// interface CandleChartProps {
//   timeframe: string;
// }

// const CandleChart: FC<CandleChartProps> = ({ timeframe }) => {
//   const [data, setData] = useState({
//     labels: [] as string[],
//     datasets: [
//       {
//         label: 'Candlestick Data',
//         data: [] as any[],
//       },
//     ],
//   });

//   useEffect(() => {
//     // Mock 데이터 생성
//     const generateMockData = (timeframe: string) => {
//       const labels = ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'];
//       const candlestickData = [
//         { t: '2023-01-01', o: 20, h: 32, l: 15, c: 25 },
//         { t: '2023-01-02', o: 25, h: 35, l: 20, c: 30 },
//         { t: '2023-01-03', o: 30, h: 40, l: 25, c: 35 },
//         { t: '2023-01-04', o: 35, h: 45, l: 30, c: 40 },
//         { t: '2023-01-05', o: 40, h: 50, l: 35, c: 45 },
//       ];

//       return { labels, candlestickData };
//     };

//     const chartData = generateMockData(timeframe);

//     setData({
//       labels: chartData.labels,
//       datasets: [
//         {
//           label: `Candlestick Data (${timeframe})`,
//           data: chartData.candlestickData,
//         },
//       ],
//     });
//   }, [timeframe]);

//   return (
//     <div className="relative h-96 w-full bg-black p-4 rounded-lg shadow-md">
//       <Chart
//         type="candlestick"
//         options={options}
//         data={{
//           datasets: [
//             {
//               label: `Candlestick Data (${timeframe})`,
//               data: data.datasets[0].data,
//               color: {
//                 up: 'rgba(0, 255, 0, 0.6)',
//                 down: 'rgba(255, 0, 0, 0.6)',
//                 unchanged: 'rgba(255, 255, 0, 0.6)',
//               },
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

// export default CandleChart;
