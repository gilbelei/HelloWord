import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiServices: ApiService, public toastController: ToastController) {
   // this.createData();
   // this.readData();
   // this.updateData();
    //this.deleteData();
    this.presentToastWithOptions()
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Olá Mundo!',
      position: 'middle',
      color: 'primary',
      buttons: [
         {
          text: 'Fechar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  createData(){
    const data: any = {
      title: "Gil",
      body: "Belei",
      userId: 1
    }
    this.apiServices.createData(data).subscribe(data => {
      console.log(data);
    });

  }
  readData(){
    this.apiServices.readData().subscribe(data => {
    console.log(data);
  });
  }
  updateData(){
    const data: any = {
      id:1,
      title: "Gil",
      body: "Belei",
      userId: 1
    }
    this.apiServices.updateData(data).subscribe(data => {
      console.log(data);
    });

  }
  deleteData() {
    this.apiServices.deleteRead().subscribe(data => {
      console.log(data);
    });
  }


}
