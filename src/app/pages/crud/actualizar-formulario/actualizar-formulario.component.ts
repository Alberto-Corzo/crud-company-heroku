import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyModel } from '../../../models/Empresa.model';

@Component({
  selector: 'app-actualizar-formulario',
  templateUrl: './actualizar-formulario.component.html',
  styleUrls: ['./actualizar-formulario.component.css']
})
export class ActualizarFormularioComponent implements OnInit {

  company: CompanyModel = new CompanyModel();

  @Input() idCompany: string = "";

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {

    this.companyService.getCompanies()

  }

  actualizarEmpresa(forma: NgForm){

  }

  limpiarForma(forma: NgForm){ 
    forma.reset(); 
  }

}
