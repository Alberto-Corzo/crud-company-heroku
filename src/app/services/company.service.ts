import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { CompanyModel } from '../models/Empresa.model';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url: string = `${environment.urlApi}/empresa`;
  matricula: string = environment.matricula;
  
  constructor(private readonly http: HttpClient) { }

  getCompanies(){
    return lastValueFrom(this.http.get(`${this.url}`, {params: {matricula: this.matricula}}));
  }
  getCompany(idCompany: CompanyModel){}

  postCompany(){}
  putCompany(){}
  delCompany(){}

}
