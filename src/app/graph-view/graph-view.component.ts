import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CoinService } from 'src/app/coin.service';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  balance:number
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        fill: false,
        label:'tokens',
        borderColor:'white'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  public lineChartPlugins = [];

  getdata(){

  }
  

  constructor(private coin:CoinService) { }
  

  async ngOnInit(): Promise<void> {
    this.coin.getSanityTokens()
    this.coin.getTokens()
    this.balance = await this.coin.total()
   
  }

}
