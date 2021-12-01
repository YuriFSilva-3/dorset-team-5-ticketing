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
      message: "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       buttons: ['OK','SAVE']
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result)
  }

  ngOnInit() {
  }

}
