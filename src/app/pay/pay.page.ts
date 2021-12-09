import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor(public alertControler : AlertController) { }

  async ticketFinal(){
    const alert = await this.alertControler.create({
      message: "Your Order Was Aproved",
       buttons: ['OK','SAVE']
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result)
  }

  ngOnInit() {
  }

}
