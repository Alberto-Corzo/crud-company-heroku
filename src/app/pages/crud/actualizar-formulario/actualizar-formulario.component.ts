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

  empresa: CompanyModel = new CompanyModel();

  @Input() idCompany: string = "";

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {

    this.companyService.getCompany(this.idCompany)
    .then((res: any) => {
      this.empresa = res.cont.empresa;
    })
    .catch((arr: any) => {});

  }

  actualizarEmpresa(forma: NgForm){

  }

  limpiarForma(forma: NgForm){ 
    forma.reset(); 
  }

}
