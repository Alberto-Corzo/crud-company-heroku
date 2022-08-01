import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyModel } from '../../../models/Empresa.model';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-registrar-formulario',
  templateUrl: './registrar-formulario.component.html',
  styleUrls: ['./registrar-formulario.component.css']
})
export class RegistrarFormularioComponent implements OnInit {

  empresa: CompanyModel = new CompanyModel();

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {

    /* 
    this.companyService.putCompanies(this.empresa)
    .then((res: any) => {})
    .catch((err: any) => {});
    */
  }

  registrarEmpresa(forma: NgForm){

  }

  limpiarForma(forma: NgForm){
    forma.reset();
  }
}
