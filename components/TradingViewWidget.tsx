'use client'

import React, { useEffect, useRef } from 'react';

// Mock data for GPT Coin
const mockData = [
  { time: '2023-05-01', open: 0.00045, high: 0.00055, low: 0.00040, close: 0.00050, volume: 1500 },
  { time: '2023-05-02', open: 0.00050, high: 0.00060, low: 0.00045, close: 0.00055, volume: 1800 },
  { time: '2023-05-03', open: 0.00055, high: 0.00065, low: 0.00050, close: 0.00060, volume: 2000 },
  { time: '2023-05-04', open: 0.00060, high: 0.00070, low: 0.00055, close: 0.00065, volume: 2200 },
  { time: '2023-05-05', open: 0.00065, high: 0.00075, low: 0.00060, close: 0.00070, volume: 2500 },
];

const TradingViewWidget: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      const theme = localStorage.getItem('theme') === 'true' ? 'Light' : 'Dark';

      new (window as any).TradingView.widget({
        width: '100%',
        height: 432,
        symbol: 'CUSTOM:GPTCOIN',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: theme,
        style: '1',
        isTransparent: true,
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: false,
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
        container_id: 'tradingview_e8053',
        datafeed: {
          onReady: (callback: any) => {
            setTimeout(() => callback({ supported_resolutions: ['1D', '1W', '1M'] }), 0);
          },
          resolveSymbol: (
            symbolName: string,
            onSymbolResolvedCallback: any,
            onResolveErrorCallback: any
          ) => {
            setTimeout(() => {
              onSymbolResolvedCallback({
                name: 'GPT Coin',
                ticker: 'CUSTOM:GPTCOIN',
                description: 'GPT Coin',
                type: 'crypto',
                session: '24x7',
                timezone: 'Etc/UTC',
                minmov: 1,
                pricescale: 100000,
                has_intraday: true,
                has_no_volume: false,
                supported_resolutions: ['1D', '1W', '1M'],
              });
            }, 0);
          },
          getBars: (
            symbolInfo: any,
            resolution: any,
            from: any,
            to: any,
            onHistoryCallback: any,
            onErrorCallback: any
          ) => {
            const bars = mockData.map((bar) => ({
              time: new Date(bar.time).getTime(),
              low: bar.low,
              high: bar.high,
              open: bar.open,
              close: bar.close,
              volume: bar.volume,
            }));
            onHistoryCallback(bars, { noData: false });
          },
          subscribeBars: (
            symbolInfo: any,
            resolution: any,
            onRealtimeCallback: any,
            subscribeUID: any,
            onResetCacheNeededCallback: any
          ) => { },
          unsubscribeBars: (subscriberUID: any) => { },
        },
      });
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tradingview_e8053" className="w-full" ref={chartContainerRef}></div>;
};

export default TradingViewWidget;
