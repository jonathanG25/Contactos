import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { CrearcontactoPage } from '../crearcontacto/crearcontacto.page';
import { ModificarcontactoPage } from '../modificarcontacto/modificarcontacto.page';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

@ViewChild(IonList) ionlist: IonList;
  darkMode: boolean = true ;
  url: string;
  contactos=[]
  
  //Search
  searchContacto: any

  constructor(
    public modalCtrl: ModalController,
    public dataService: DataService,
    public alertController: AlertController,
    public toastController: ToastController){
    this.getAllTask();
    this.Dark();

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit(){
  }

  async addNewItem(){
    const modal = await this.modalCtrl.create({
      component: CrearcontactoPage,
    })
    modal.onDidDismiss().then(newTask => {
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.contactos = this.dataService.getAllTask()
    this.carga()
  }

  eliminar(key){
    this.mensaje(key);
    this.ejecutarAccion();
  }

  ejecutarAccion(){
    this.ionlist.closeSlidingItems()
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: ModificarcontactoPage,
      componentProps: {task: selectedTask}
    })
    modal.onDidDismiss().then(newTask => {
      this.getAllTask()
    })
    return await modal.present()
    this.ejecutarAccion()
  }

  //Search
  buscar(event){
    const text = event.target.value;
    this.searchContacto = this.contactos;
    if (text && text.trim() != '') {
      this.searchContacto = this.searchContacto.filter((contact: any)=>{
        return (contact.value.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
  }

  //Para que no haya errores en el momento de cargar al implementar el buscador
  carga(){
    this.searchContacto = this.contactos;
  }

  //ALERTAS 
  //inicio
  async mensaje(key) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ESPERA!',
      message: '¿Estás seguro de que quieres eliminar este contacto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.mensajeCancelar()
          }
        }, {
          text: 'Si',
          handler: () => {
            this.dataService.deleteTask(key)
            this.getAllTask()
            this.mensaje3();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async mensaje3() {
    const toast = await this.toastController.create({
      cssClass: 'my-custom-class',
      icon: 'alert-circle-outline',
      color: 'danger',
      message: 'Eliminado Correctamente',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  async mensajeCancelar() {
    const toast = await this.toastController.create({
      message: 'Cancelado',
      duration: 1000,
      icon: 'backspace-outline',
      color: 'warning',
      position: 'bottom'
    });
    toast.present();
  }

  whatsapp(contacto){
    this.url=`https://api.whatsapp.com/send?phone=+593${contacto.value.celular}&text=Conectado con ${contacto.value.nombre}`;
    this.Accion();
  }
  llamar(contacto){
    this.url=`tel:${contacto.value.celular}`;
    this.Accion();
  }
  Accion(){
    this.ionlist.closeSlidingItems();
    var win=window.open(this.url,'_blank');
    win.focus();
  }

  Dark(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }

  Cambio(){
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');
    }

}




