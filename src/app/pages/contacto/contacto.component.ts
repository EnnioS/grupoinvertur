import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }
  formInfo:any=[];
  ngOnInit(): void { 
  }

  catchFormEventData(eventCatch:any){
    this.formInfo = eventCatch;
  }


  // onSubmit(formData:FormGroup){
  //   this.contact.SendEmail(formData).subscribe({
  //     next: (response) =>{
  //       if(response){
  //         console.log("sevice: Email enviado, , respuesta: " + response);
  //       }
  //     },
  //     error: (response) => {
  //       if(response){
  //         console.log("sevice: No hay respuesta, error: " + response);
  //       }
  //     }
  // });

  // }
}
