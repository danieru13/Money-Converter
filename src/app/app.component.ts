import { Component, OnInit } from '@angular/core';

import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  converted;
  returnValue = ' ';

  constructor( private converterService: ConverterService){

  }
  
  ngOnInit() {
    
  }

  convert(from: string, to: string){
    this.converterService.convert(from, to)
    .subscribe(
      res => {
        let fromTo = `${from}_${to}`;
        console.log(res);
        this.converted = res;
        this.returnValue = this.converted[fromTo];
      },
      err => console.log(err)
    );
  }

  submitCurrencies(from: HTMLInputElement, to: HTMLInputElement) {
    if(from.value && to.value){
      this.convert(from.value, to.value);
      console.log('estoy en subCu' + from.value +  " " + to.value);

      from.value = '';
      to.value = '';
    } else {
      alert('Please insert some values');
    }
    

    
    from.focus();
    return false;
   }
}
