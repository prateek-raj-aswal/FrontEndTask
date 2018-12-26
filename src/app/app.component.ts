import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private Data:any=[];
  private productList:any=[];
  private title:String;
  private noData:boolean=false;
  constructor(private HttpClient: HttpClient,

    ) {
      //Method to fetch data using GET request.
    this.HttpClient.get("http://demo9176653.mockable.io/products").subscribe((res) => {
      // console.log(res);
      //Fetched responce is stored into Data variable
      this.Data=res;
      console.log(this.Data);
    });
    }
  ngOnInit() {
    this.title = "Compare";
    if(this.Data==null){
     this.title="No data found !!";
     this.noData=true;
    }
  }
  populate(){
    for (let key in this.Data.products.compareSummary.titles) {
      this.productList.push({ id: key, name: this.Data.products.compareSummary.titles[key].title, subtitle: this.Data.products.compareSummary.titles[key].subtitle});
    }
    console.log(this.productList);
  }
  Differences(value:boolean){
    console.log(value);

  }
}
