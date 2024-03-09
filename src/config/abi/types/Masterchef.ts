/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MasterchefInterface extends utils.Interface {
  functions: {
    "BONUS_MULTIPLIER()": FunctionFragment;
    "add(uint256,address,uint16,uint16,uint256,bool)": FunctionFragment;
    "deposit(uint256,uint256,address)": FunctionFragment;
    "emergencyWithdraw(uint256)": FunctionFragment;
    "feeAddress()": FunctionFragment;
    "getMultiplier(uint256,uint256)": FunctionFragment;
    "massUpdatePools()": FunctionFragment;
    "oreoAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingToken(uint256,address)": FunctionFragment;
    "poolExistence(address)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "referralAddress()": FunctionFragment;
    "referralCommissionRate()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "set(uint256,uint256,uint16,uint16,uint256,bool)": FunctionFragment;
    "setFeeAddress(address)": FunctionFragment;
    "setReferralAddress(address)": FunctionFragment;
    "setReferralCommissionRate(uint16)": FunctionFragment;
    "startBlock()": FunctionFragment;
    "tokenPerBlock()": FunctionFragment;
    "totalAllocPoint()": FunctionFragment;
    "totalStakedAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateEmissionRate(uint256)": FunctionFragment;
    "updatePool(uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BONUS_MULTIPLIER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiplier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oreoAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolExistence",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralCommissionRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferralAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferralCommissionRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEmissionRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BONUS_MULTIPLIER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oreoAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolExistence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referralAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referralCommissionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferralAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferralCommissionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEmissionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetFeeAddress(address,address)": EventFragment;
    "UpdateEmissionRate(address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
    "setLockTime(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateEmissionRate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "setLockTime"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type SetFeeAddressEvent = TypedEvent<
  [string, string],
  { user: string; newAddress: string }
>;

export type SetFeeAddressEventFilter = TypedEventFilter<SetFeeAddressEvent>;

export type UpdateEmissionRateEvent = TypedEvent<
  [string, BigNumber],
  { user: string; goosePerBlock: BigNumber }
>;

export type UpdateEmissionRateEventFilter =
  TypedEventFilter<UpdateEmissionRateEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export type setLockTimeEvent = TypedEvent<
  [string, BigNumber],
  { user: string; lockTime: BigNumber }
>;

export type setLockTimeEventFilter = TypedEventFilter<setLockTimeEvent>;

export interface Masterchef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MasterchefInterface;

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
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeAddress(overrides?: CallOverrides): Promise<[string]>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    oreoAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolExistence(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, number, number, BigNumber] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accTokenPerShare: BigNumber;
        depositFeeBP: number;
        withdrawFeeBP: number;
        lockTime: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    referralAddress(overrides?: CallOverrides): Promise<[string]>;

    referralCommissionRate(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeAddress(
      _fee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReferralAddress(
      _referralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReferralCommissionRate(
      _referralCommissionRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStakedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateEmissionRate(
      _tokenPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        depositTime: BigNumber;
      }
    >;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

  add(
    _allocPoint: BigNumberish,
    _lpToken: string,
    _depositFeeBP: BigNumberish,
    _withdrawFeeBP: BigNumberish,
    _lockTime: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    _referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeAddress(overrides?: CallOverrides): Promise<string>;

  getMultiplier(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  massUpdatePools(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  oreoAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingToken(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolExistence(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, number, number, BigNumber] & {
      lpToken: string;
      allocPoint: BigNumber;
      lastRewardBlock: BigNumber;
      accTokenPerShare: BigNumber;
      depositFeeBP: number;
      withdrawFeeBP: number;
      lockTime: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  referralAddress(overrides?: CallOverrides): Promise<string>;

  referralCommissionRate(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _depositFeeBP: BigNumberish,
    _withdrawFeeBP: BigNumberish,
    _lockTime: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeAddress(
    _fee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReferralAddress(
    _referralAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReferralCommissionRate(
    _referralCommissionRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  totalStakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateEmissionRate(
    _tokenPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      rewardDebt: BigNumber;
      depositTime: BigNumber;
    }
  >;

  withdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    feeAddress(overrides?: CallOverrides): Promise<string>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    oreoAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolExistence(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, number, number, BigNumber] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accTokenPerShare: BigNumber;
        depositFeeBP: number;
        withdrawFeeBP: number;
        lockTime: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    referralAddress(overrides?: CallOverrides): Promise<string>;

    referralCommissionRate(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeAddress(_fee: string, overrides?: CallOverrides): Promise<void>;

    setReferralAddress(
      _referralAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReferralCommissionRate(
      _referralCommissionRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEmissionRate(
      _tokenPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        depositTime: BigNumber;
      }
    >;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): DepositEventFilter;

    "EmergencyWithdraw(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SetFeeAddress(address,address)"(
      user?: string | null,
      newAddress?: string | null
    ): SetFeeAddressEventFilter;
    SetFeeAddress(
      user?: string | null,
      newAddress?: string | null
    ): SetFeeAddressEventFilter;

    "UpdateEmissionRate(address,uint256)"(
      user?: string | null,
      goosePerBlock?: null
    ): UpdateEmissionRateEventFilter;
    UpdateEmissionRate(
      user?: string | null,
      goosePerBlock?: null
    ): UpdateEmissionRateEventFilter;

    "Withdraw(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): WithdrawEventFilter;

    "setLockTime(address,uint256)"(
      user?: string | null,
      lockTime?: null
    ): setLockTimeEventFilter;
    setLockTime(user?: string | null, lockTime?: null): setLockTimeEventFilter;
  };

  estimateGas: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    oreoAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolExistence(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    referralAddress(overrides?: CallOverrides): Promise<BigNumber>;

    referralCommissionRate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeAddress(
      _fee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReferralAddress(
      _referralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReferralCommissionRate(
      _referralCommissionRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateEmissionRate(
      _tokenPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    oreoAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolExistence(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralCommissionRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _depositFeeBP: BigNumberish,
      _withdrawFeeBP: BigNumberish,
      _lockTime: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeAddress(
      _fee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReferralAddress(
      _referralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReferralCommissionRate(
      _referralCommissionRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStakedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateEmissionRate(
      _tokenPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}