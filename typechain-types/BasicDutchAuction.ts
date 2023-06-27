/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BasicDutchAuctionInterface extends utils.Interface {
  functions: {
    "auctionEndTime()": FunctionFragment;
    "auctionEnded()": FunctionFragment;
    "auctionStatusOpen()": FunctionFragment;
    "bid()": FunctionFragment;
    "currentPrice()": FunctionFragment;
    "endAuction()": FunctionFragment;
    "highestBid()": FunctionFragment;
    "highestBidder()": FunctionFragment;
    "initialPrice()": FunctionFragment;
    "numBlocksAuctionOpen()": FunctionFragment;
    "offerPriceDecrement()": FunctionFragment;
    "refund()": FunctionFragment;
    "reservePrice()": FunctionFragment;
    "seller()": FunctionFragment;
    "withdrawRefund()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "auctionEndTime"
      | "auctionEnded"
      | "auctionStatusOpen"
      | "bid"
      | "currentPrice"
      | "endAuction"
      | "highestBid"
      | "highestBidder"
      | "initialPrice"
      | "numBlocksAuctionOpen"
      | "offerPriceDecrement"
      | "refund"
      | "reservePrice"
      | "seller"
      | "withdrawRefund"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "auctionEndTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionEnded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionStatusOpen",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endAuction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBidder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numBlocksAuctionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPriceDecrement",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "refund", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawRefund",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "auctionEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionEnded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionStatusOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endAuction", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "highestBidder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksAuctionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPriceDecrement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRefund",
    data: BytesLike
  ): Result;

  events: {
    "Refund(address,uint256)": EventFragment;
    "RefundWithdrawal(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundWithdrawal"): EventFragment;
}

export interface RefundEventObject {
  bidder: string;
  amount: BigNumber;
}
export type RefundEvent = TypedEvent<[string, BigNumber], RefundEventObject>;

export type RefundEventFilter = TypedEventFilter<RefundEvent>;

export interface RefundWithdrawalEventObject {
  bidder: string;
  amount: BigNumber;
}
export type RefundWithdrawalEvent = TypedEvent<
  [string, BigNumber],
  RefundWithdrawalEventObject
>;

export type RefundWithdrawalEventFilter =
  TypedEventFilter<RefundWithdrawalEvent>;

export interface BasicDutchAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BasicDutchAuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    auctionEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    auctionEnded(overrides?: CallOverrides): Promise<[boolean]>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<[boolean]>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    endAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    highestBid(overrides?: CallOverrides): Promise<[BigNumber]>;

    highestBidder(overrides?: CallOverrides): Promise<[string]>;

    initialPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<[BigNumber]>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<[BigNumber]>;

    refund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    seller(overrides?: CallOverrides): Promise<[string]>;

    withdrawRefund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  auctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;

  auctionEnded(overrides?: CallOverrides): Promise<boolean>;

  auctionStatusOpen(overrides?: CallOverrides): Promise<boolean>;

  bid(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

  endAuction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  highestBid(overrides?: CallOverrides): Promise<BigNumber>;

  highestBidder(overrides?: CallOverrides): Promise<string>;

  initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

  numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

  offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

  refund(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

  seller(overrides?: CallOverrides): Promise<string>;

  withdrawRefund(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    auctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    auctionEnded(overrides?: CallOverrides): Promise<boolean>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<boolean>;

    bid(overrides?: CallOverrides): Promise<void>;

    currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    endAuction(overrides?: CallOverrides): Promise<void>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBidder(overrides?: CallOverrides): Promise<string>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    refund(overrides?: CallOverrides): Promise<void>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    seller(overrides?: CallOverrides): Promise<string>;

    withdrawRefund(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Refund(address,uint256)"(bidder?: null, amount?: null): RefundEventFilter;
    Refund(bidder?: null, amount?: null): RefundEventFilter;

    "RefundWithdrawal(address,uint256)"(
      bidder?: null,
      amount?: null
    ): RefundWithdrawalEventFilter;
    RefundWithdrawal(bidder?: null, amount?: null): RefundWithdrawalEventFilter;
  };

  estimateGas: {
    auctionEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    auctionEnded(overrides?: CallOverrides): Promise<BigNumber>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    endAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBidder(overrides?: CallOverrides): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    seller(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawRefund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    auctionEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionEnded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    highestBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highestBidder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numBlocksAuctionOpen(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offerPriceDecrement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawRefund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
