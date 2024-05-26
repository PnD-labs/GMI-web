import dayjs from "dayjs";
import { ITradesData } from "./TradesTable";

interface ItradesDataListResponse {
  result: ITradesData[];
  totalCount: number;
}

enum TradeType {
  BUY = "buy",
  SELL = "sell",
}

export const mockData: ITradesData[] = [
  {
    id: 1,
    profileImgUrl: "",
    accountAddress: "0x1234567890abcdef1234567890abcdef12345678",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "51.64k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef1234567890abcdef1234567890abcdef1234",
  },
  {
    id: 2,
    profileImgUrl: "",
    accountAddress: "0xabcdef1234567890abcdef1234567890abcdef1234",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "52.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x1234567890abcdef1234567890abcdef12345678",
  },
  {
    id: 3,
    profileImgUrl: "",
    accountAddress: "0x7890abcdef1234567890abcdef1234567890abcd",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "51.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef7890abcdef1234567890abcdef12345678",
  },
  {
    id: 4,
    profileImgUrl: "",
    accountAddress: "0x4567890abcdef1234567890abcdef1234567890",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "48.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x1234567890abcdef1234567890abcdef7890abcd",
  },
  {
    id: 5,
    profileImgUrl: "",
    accountAddress: "0x90abcdef1234567890abcdef1234567890abcdef",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "53.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef1234567890abcdef1234567890abcdef7890",
  },
  {
    id: 6,
    profileImgUrl: "",
    accountAddress: "0x67890abcdef1234567890abcdef1234567890abc",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "47.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x7890abcdef1234567890abcdef1234567890abcdef",
  },
  {
    id: 7,
    profileImgUrl: "",
    accountAddress: "0x234567890abcdef1234567890abcdef123456789",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "54.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef1234567890abcdef1234567890abcdef1234",
  },
  {
    id: 8,
    profileImgUrl: "",
    accountAddress: "0xabcdef1234567890abcdef1234567890abcdef1234",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "48.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x1234567890abcdef1234567890abcdef12345678",
  },
  {
    id: 9,
    profileImgUrl: "",
    accountAddress: "0x7890abcdef1234567890abcdef1234567890abcd",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "51.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef7890abcdef1234567890abcdef12345678",
  },
  {
    id: 10,
    profileImgUrl: "",
    accountAddress: "0x4567890abcdef1234567890abcdef1234567890",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "46.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x1234567890abcdef1234567890abcdef7890abcd",
  },
  {
    id: 11,
    profileImgUrl: "",
    accountAddress: "0x90abcdef1234567890abcdef1234567890abcdef",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "55.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef1234567890abcdef1234567890abcdef7890",
  },
  {
    id: 12,
    profileImgUrl: "",
    accountAddress: "0x67890abcdef1234567890abcdef1234567890abc",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "47.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x7890abcdef1234567890abcdef1234567890abcdef",
  },
  {
    id: 13,
    profileImgUrl: "",
    accountAddress: "0x234567890abcdef1234567890abcdef123456789",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "56.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef1234567890abcdef1234567890abcdef1234",
  },
  {
    id: 14,
    profileImgUrl: "",
    accountAddress: "0xabcdef1234567890abcdef1234567890abcdef1234",
    type: TradeType.SELL,
    suiAmount: "0.0134",
    tokenMarketCap: "49.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0x1234567890abcdef1234567890abcdef12345678",
  },
  {
    id: 15,
    profileImgUrl: "",
    accountAddress: "0x7890abcdef1234567890abcdef1234567890abcd",
    type: TradeType.BUY,
    suiAmount: "0.0134",
    tokenMarketCap: "52.00k",
    updatedTimeStampAt: dayjs().add(5, "minute").toISOString(),
    transactionHash: "0xabcdef7890abcdef1234567890abcdef12345678",
  },
];

export const tradesDataListResponse: ItradesDataListResponse = {
  result: mockData,
  totalCount: mockData.length,
};