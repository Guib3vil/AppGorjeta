import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private alertController: AlertController) {}
 V=''; // Valor do serviço
 GR=''; //Gorjeta radio
 VF=0; // Valor Final
 GA=0; //Gorjeta Adicionada

 calcularGorjeta() {
 if (this.GR==='10'){
this.GA=parseFloat(this.V)*0.1;
this.VF=parseFloat(this.V)+this.GA;
 } else{
  if (this.GR==='15') {
    this.GA=parseFloat(this.V)*0.15;
    this.VF=parseFloat(this.V)+this.GA;
  }else{
    if (this.GR==='20') {
      this.GA=parseFloat(this.V)*0.2;
      this.VF=parseFloat(this.V)+this.GA;
    }
  }
 }
 this.exibirGorjeta()
 }

 async exibirGorjeta() {
  const alert = await this.alertController.create({
  header: 'App da Gorjeta',
  message: `Seu Sua gorjeta foi de
  ${this.GA.toFixed(2)} reais e o falor final foi ${this.VF.toFixed(2)}`,
  buttons: ['OK'],
  });
  await alert.present();
  }
}
