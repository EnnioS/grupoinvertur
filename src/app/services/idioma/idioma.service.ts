import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  idiomaEs= true;//dato por defecto
  isMenu = false;
  private idiomaObs$ = new BehaviorSubject<boolean>(this.idiomaEs)//se le debe de colocara un dato por defecto
  private isMobileMenu$ = new BehaviorSubject<boolean>(this.isMenu)
  getIdiomaFromSevice(){
    return this.idiomaObs$.asObservable();
  }

  changeIdiomaInSevice(idioma:boolean){
    this.idiomaObs$.next(idioma);
    this.idiomaEs = idioma;
  }



}
