/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export interface InstantiateMsg {
  admin: Addr;
}
export type ExecuteMsg = {
  add_payment: {
    amount: Uint64;
    decimals: number;
    frequency_in_days: number;
    receiver: Addr;
    start_date: Timestamp;
    token_address: Addr;
    token_symbol: string;
  };
} | {
  remove_payment: {
    payment_id: Uint128;
  };
} | {
  update_payment_status: {};
};
export type Uint64 = string;
export type Timestamp = Uint64;
export type Uint128 = string;
export type QueryMsg = {
  get_payments: {};
} | {
  get_payment_by_i_d: {
    id: Uint128;
  };
};