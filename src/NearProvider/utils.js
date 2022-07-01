import {
    connect,
    Contract,
    keyStores,
    utils,
    WalletConnection,
  } from "near-api-js";
  import * as nearAPI from "near-api-js";
  import getConfig from "./config";
  import { useState } from "react";
  
  const config = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    // keyStore: new keyStores.,
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };
  
  const nearConfig = getConfig(process.env.NODE_ENV || "development");
  const GAS = "300000000000000";
  
  export async function initContract() {
   
    const near = await connect(config);
    window.walletConnection = new WalletConnection(near);
  
    window.accountId = window.walletConnection.getAccountId();
  
    window.contract = await new Contract(
      window.walletConnection.account(),
      nearConfig.contractName,
      {
        viewMethods: [
          "get_nft_id",
        ],
  
        changeMethods: [
          "mint",
        
        ],
      }
    );
  }
  
  export function logout() {
    window.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  }
  
  export function login() {
    window.walletConnection.requestSignIn("lottery_project.testnet");
  }
 