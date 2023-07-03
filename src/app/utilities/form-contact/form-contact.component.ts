import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit, Optional } from '@angular/core';
import { Iform } from '../../model/iform';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/alert';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormContactComponent implements OnInit{
 

  //varaibles y función para formulario con nombre en #etiquetas 
   @Output() arrayFormDataEvent = new EventEmitter<string>();

  formInfo:any=[];

  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

   //Variables y función para formulario con template-driven ngModel sin etiqueta y propiedad "name"
   constructor(private httpClient:HttpClient, private contact: ApiService, public alert:AlertService){}
   ngOnInit(): void {
   }

  
    
    onSubmit(form:NgForm): void{
      
      this.contact.SendEmail(form.value).subscribe({
        next: (response) =>{
          if(response){
            console.log("sevice: Email enviado, , respuesta: " + response);
            this.alertMessages(response)
            
          }
        },
        error: (response) => {
          if(response){
            console.log("sevice: No hay respuesta, error: " + response);
            this.alertMessages(response)
          }
        }
    });

    }

    alertMessages(response:any):void{
    
      if(response){
        this.alert.success('El correo fue enviado exitosamente', this.options);
      } else if(!response){
        this.alert.error('El correo no pudo ser enviado', this.options);
      } else{
        this.alert.info('El correo no pudo ser enviado, no hay conexión hacia el servidor', this.options);
      }
  
      // this.arrayFormDataEvent.emit(this.formInfo);
      
    }

    
  //   onSubmit(form:NgForm): void{
  //     let formIsValid = form.valid;// otra opción para validar si todos los campos requerioos están llenod
  //     let formValue = form.value;
  //     if(formIsValid){
  //     this.formData["name"]= formValue.nombre;
  //     this.formData["email"] = formValue.email;
  //     this.formData["subject"] = formValue.asunto;
  //     this.formData["message"] = formValue.texto;

  //     this.apiEmail.PostMessage(FormData)
  //     .subscribe(response => {
  //       location.href = 'https://grupoinvertur.com/php/contact-form.php'
  //     }, error => {
  //     console.warn(error.responseText)
  //     console.log({ error })
  //   })
  //   }
    
  // }
  

}
