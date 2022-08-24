import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.page.html',
  styleUrls: ['./crearcontacto.page.scss'],
})
export class CrearcontactoPage implements OnInit {

  newTaskObj = {}
  nombre
  apellido
  correo
  celular


  constructor(
    public modalCtrl:ModalController,
    public alertController: AlertController,
    public toastController: ToastController,
    public dataService: DataService
    ){}
  
  ngOnInit(){
  }

  async add(){
    this.newTaskObj = ({nombre:this.nombre, apellido:this.apellido, correo:this.correo, celular:this.celular})
    let uid = this.nombre + this.apellido + this.correo + this.celular

    if(uid){
      await this.dataService.addTask(uid,this.newTaskObj)
      this.dismis()
      this.mensaje2()
    }else{
      this.mensaje();
    }
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.newTaskObj)
  }

  async mensaje() {
    const toast = await this.toastController.create({
      cssClass: 'my-custom-class',
      icon: 'alert-circle-outline',
      color: 'danger',
      message: 'No existen datos.',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async mensaje2() {
    const toast = await this.toastController.create({
      cssClass: 'my-custom-class',
      icon: 'bookmark-outline',
      color: 'primary',
      message: 'Guardado.',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }


}

