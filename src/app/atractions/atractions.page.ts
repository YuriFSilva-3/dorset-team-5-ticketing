import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-atractions',
  templateUrl: './atractions.page.html',
  styleUrls: ['./atractions.page.scss'],
})
export class AtractionsPage implements OnInit {

  constructor(public alertcontroller : AlertController) { }

  async specs(){
    const alert = await this.alertcontroller.create({
      message: "Your ticket details:",
       buttons: ['OK']
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result)
  }

  ngOnInit() {
  }

}
