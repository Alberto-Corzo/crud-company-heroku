import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() emitterRegistro: EventEmitter<any> = new EventEmitter();

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
      forma.reset();
      // emitir trigger para activar obtenerEmpresas()
      this.emitterRegistro.emit();
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
