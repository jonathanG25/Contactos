import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modificarcontacto',
  templateUrl: './modificarcontacto.page.html',
  styleUrls: ['./modificarcontacto.page.scss'],
})
export class ModificarcontactoPage implements OnInit {

  @Input() task;

  newTaskObj = {}
  nombre
  apellido
  celular
  correo


  constructor(
    public modalCtrl:ModalController,
    public alertController: AlertController,
    public toastController: ToastController,
    public dataService: DataService
    ){}
  
  ngOnInit(){
    this.nombre = this.task.value.nombre
    this.apellido = this.task.value.apellido
    this.correo = this.task.value.correo
    this.celular = this.task.value.celular
  }

  async dismis(){
    await this.modalCtrl.dismiss()
  }

  async update(){
    this.newTaskObj = ({nombre:this.nombre, apellido:this.apellido,correo:this.correo, celular:this.celular})
    let uid = this.task.key
    await this.dataService.addTask(uid,this.newTaskObj)
    this.dismis()
    this.mensaje()
  }

  async mensaje() {
    const toast = await this.toastController.create({
      cssClass: 'my-custom-class',
      icon: 'create-outline',
      color: 'primary',
      message: 'Modificado Correctamente.',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }
}

