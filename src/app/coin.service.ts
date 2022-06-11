import { Injectable } from '@angular/core';
import { ThirdwebSDK  } from '@thirdweb-dev/sdk';
import { environment } from 'src/environments/environment';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  TokenContractAddress:string

  getTokenAddress( address){
    this.TokenContractAddress = address
  }
   async getSanityTokens() {
    const coins = await fetch("https://dss6p2ro.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20symbol%2C%0A%20%20usdPrice%2C%0A%20%20ContractAddress%2C%0A%20%20logo%0A%7D")
    const data = await coins.json();
    const address = data.result;
    return address
   }
 
   async getThirdWebTokens(contractAddress) {
     const  sdk = new ThirdwebSDK(
       new ethers.Wallet(
         environment.metamask_Key,
         ethers.getDefaultProvider('https://rinkeby.infura.io/v3/94ef7ea56a0e4585834ffbb4dfb3f8b8'))
         )
         const token = sdk.getToken(contractAddress);
         const tokens = await token.balanceOf("0x47444Bfc280Bd50e3a96ccFd031f7539d6B6E97A")
        //  const tokens = await token.balanceOf(this.TokenContractAddress)
         return tokens
   }
   
  async getTokens() {
    const coins = await this.getSanityTokens();
    const promises = coins.map(async coin => {
              const tokenValues = this.getThirdWebTokens(coin.ContractAddress);
              return {...coin, ...tokenValues, usdTotal: (+coin.usdPrice) * (+(await tokenValues).displayValue)}
  });
    const tokenArray = await Promise.all(promises);
    return tokenArray
  }
 
  async getOnlythirdwebValue(){
    const coins = await this.getSanityTokens();
    const promises = coins.map(coin=>this.getThirdWebTokens(coin.ContractAddress));
    const tokenArray = await Promise.all(promises)
    return tokenArray
  }

  async total(){
    const balance  = await this.getTokens()
    const value = balance.map(item => { return item["usdTotal"]; })
    const x = value.reduce((a,b)=>a+b,0)
    return x 
  }

  constructor() { }
}
