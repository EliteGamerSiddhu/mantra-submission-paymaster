/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint64, Addr, InstantiateMsg, ExecuteMsg, QueryMsg, Timestamp, ContractInfo } from "./LoanContract.types";
export interface LoanContractReadOnlyInterface {
  contractAddress: string;
  getDetails: () => Promise<ContractInfo>;
  remainingPayment: () => Promise<Uint64>;
}
export class LoanContractQueryClient implements LoanContractReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.getDetails = this.getDetails.bind(this);
    this.remainingPayment = this.remainingPayment.bind(this);
  }
  getDetails = async (): Promise<ContractInfo> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_details: {}
    });
  };
  remainingPayment = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      remaining_payment: {}
    });
  };
}
export interface LoanContractInterface extends LoanContractReadOnlyInterface {
  contractAddress: string;
  sender: string;
  acceptPayment: ({
    payment
  }: {
    payment: Uint64;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateStatus: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class LoanContractClient extends LoanContractQueryClient implements LoanContractInterface {
  declare client: SigningCosmWasmClient;
  sender: string;
  declare contractAddress: string;
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.acceptPayment = this.acceptPayment.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }
  acceptPayment = async ({
    payment
  }: {
    payment: Uint64;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_payment: {
        payment
      }
    }, fee, memo, _funds);
  };
  updateStatus = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_status: {}
    }, fee, memo, _funds);
  };
}