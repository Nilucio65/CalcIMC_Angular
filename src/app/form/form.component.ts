import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resp: string = "";

  calc(){  

    this.imc = this.peso/(this.altura*this.altura);
    
        if(this.imc <= 18.5){
            this.resp = "Abaixo do peso";
        }
        else if(this.imc <= 24.9){
          this.resp = "Peso normal";
        }
        else if(this.imc <= 29.9){
          this.resp = "Pré obesidade";
        }
        else if(this.imc <= 34.9){
          this.resp = "Obesidade Grau 1";
        }
        else if(this.imc <= 39.9){
          this.resp = "Obesidade Grau 2";
        }
        else if(this.imc >= 40){
          this.resp = "Obesidade Grau 3";
        }
}
}
