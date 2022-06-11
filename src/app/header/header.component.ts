import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoinService } from 'src/app/coin.service';
import { TransactionBoxComponent } from '../transaction-box/transaction-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contractAddress:String

  async login(){
    //@ts-ignore
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    this.contractAddress = accounts[0]
    //sending contractAddress to a variable inside servcies 
    this.coin.getTokenAddress(this.contractAddress)
    console.log(this.contractAddress)
  }

  
  openDialog(){
    const dialog = this.dialog.open(TransactionBoxComponent,{height:'580px', width:'500px'})
    
  }
  
  constructor(private dialog:MatDialog,private coin:CoinService) { }

  ngOnInit(): void {
  }

}
