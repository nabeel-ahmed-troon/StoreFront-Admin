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
      viewMethods: ["get_nft_id"],

      changeMethods: ["mint"],
    }
  );
}

export function logout() {
  window.walletConnection.signOut();
  window.location.replace(window.location.origin + window.location.pathname);
}

export function logIn() {
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

export async function InsertNftMetadata(props) {
  const contract = new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      viewMethods: ["get_nft_id"],

      changeMethods: ["insert_metadata"],
      sender: window.walletConnection.account(),
    }
  );
  let res = props.tokenName;
  var obj = {};
  obj = res;
  console.log(res);
  try {
    await contract.insert_metadata({
      args: {
        metadata: {
          res: {
            title: props.title,
            description: props.description,
            media: props.media,
            collection_name: props.collection_name,
            nft_contract: "nearwhitelabelnftcontract.testnet",
          },
        },
      },
    });
    alert("Successfully Inserted");
  } catch (error) {
    alert(error);
  }
}

export async function InsertPrice(props) {
  const contract = new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      changeMethods: ["insert_price"],
      sender: window.walletConnection.account(),
    }
  );
  const res = props.tokenName;
  try {
    await contract.insert_price({
      args: {
        price: {
          res: props.price,
        },
      },
    });
    alert("Successfully Inserted");
  } catch (error) {
    alert(error);
  }
}

export async function InsertSupplyCap(props) {
  const contract = new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      changeMethods: ["insert_supply_cap"],
      sender: window.walletConnection.account(),
    }
  );
  const res = props.tokenName;
  try {
    await contract.insert_supply_cap({
      args: {
        supply_caps: {
          res: props.supplyCap,
        },
      },
    });
    alert("Successfully Inserted");
  } catch (error) {
    alert(error);
  }
}

export async function InsertRoyality(props) {
  const contract = new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      changeMethods: ["insert_royalties"],
      sender: window.walletConnection.account(),
    }
  );
  const res = props.tokenName;
  try {
    await contract.insert_supply_cap({
      args: {
        royalties: {
          res: props.royality,
        },
      },
    });
    alert("Successfully Inserted");
  } catch (error) {
    alert(error);
  }
}

export async function InsertNft(props) {
  const contract = new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      changeMethods: ["add_nft_contract"],
      sender: window.walletConnection.account(),
    }
  );
  const res = props.tokenName;
  try {
    await contract.add_nft_contract({
      args: {
        nft_contract: ["nearwhitelabelnftcontract.testnet"],
      },
    });
    alert("Successfully Inserted");
  } catch (error) {
    alert(error);
  }
}
