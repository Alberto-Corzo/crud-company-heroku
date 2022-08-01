import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
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

  }

  registrarEmpresa(forma: NgForm){
    this.companyService.postCompany(this.empresa)
    .then((res: any) => {
      Swal.fire({
        icon:'success',
        text: "Se registró la Empresa Exitosamente"
      });
    })
    .catch((err: any) => {
      Swal.fire({
        icon:'error',
        text: "Error al Registrar Empresa"
      });
    });

    console.log(this.empresa);
    
  }

  limpiarForma(forma: NgForm){
    forma.reset();
  }
}
