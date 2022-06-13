import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendCompletedModalComponent } from './send-completed-modal/send-completed-modal.component';
import { FormControl,FormGroup } from '@angular/forms';
import { CoinService } from 'src/app/coin.service';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';

@Component({
  selector: 'app-transaction-box',
  templateUrl: './transaction-box.component.html',
  styleUrls: ['./transaction-box.component.css']
})
export class TransactionBoxComponent implements OnInit {
  sendbtnClicked:boolean = true
  recivebtnClicked:boolean = false
  sanityData:any
  thirdwebData:any
  tokenValue:number = 0;
  address:string
  TransactionCompleted:boolean = false

  TransactionForm = new FormGroup({
    Amt:new FormControl(''),
    Address: new FormControl(''),
    Pay:new FormControl(''),
  })

  constructor(private dialog:MatDialog, private coin:CoinService) { }

 sendClicked(){
  this.sendbtnClicked = true
  this.recivebtnClicked = false
 }

 reciveClicked(){
   this.recivebtnClicked = true
  this.sendbtnClicked = false
 }

 openDialoge(){
   if(this.TransactionCompleted === true ){
    const dialog = this.dialog.open(SendCompletedModalComponent,{height:'200px', width:'200px'})

   }
  if(this.TransactionCompleted === false){
    const dialog = this.dialog.open(LoadingModalComponent, {height:'200px',width:'200px'})
  }
 }

 onClick(){
   console.log(this.TransactionForm.value);
 }


get Amt():FormControl{
  return this.TransactionForm.get("Amt") as FormControl
}
get Address():FormControl{
  return this.TransactionForm.get('Address') as FormControl
}

 get selectedValue():FormControl{
   return this.TransactionForm.get('Pay') as FormControl
 }


async tryhard(){
  this.TransactionForm.get('Pay').valueChanges.subscribe(async value=>{
    const x = this.thirdwebData.find(data=>data.symbol === value)
    this.tokenValue = await x?.displayValue
  })
  this.TransactionForm.get('Pay').valueChanges.subscribe(async value => {
    const x = this.sanityData.find(data=>data.symbol === value)
    this.address = await x?.ContractAddress
  })
}

async SendTokens() {
 
  const  sdk = new ThirdwebSDK(
    new ethers.Wallet(
      environment.metamask_Key,
      ethers.getDefaultProvider('https://rinkeby.infura.io/v3/94ef7ea56a0e4585834ffbb4dfb3f8b8'))
      )
      try{
        const x =await sdk.wallet.transfer(this.Address.value,this.Amt.value,this.address)
        console.log("completed..")
        this.TransactionCompleted = true
        this.openDialoge();
        console.log(x);
      }
      catch(err){
        console.log(err)   
        
      }     
      
    }

 async ngOnInit(): Promise<void> {
    this.thirdwebData = await this.coin.getOnlythirdwebValue();
    this.sanityData = await this.coin.getSanityTokens();
    this.tryhard();
  }
  
}
