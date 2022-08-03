import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyModel } from '../../../models/Empresa.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-formulario',
  templateUrl: './actualizar-formulario.component.html',
  styleUrls: ['./actualizar-formulario.component.css']
})
export class ActualizarFormularioComponent implements OnInit {

  empresa: CompanyModel = new CompanyModel();

  @Input() idCompany: string = "";

  @Output() emitterActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {

    this.companyService.getCompany(this.idCompany)
    .then((res: any) => {
      this.empresa = res.cont.empresa;
    })
    .catch((err: any) => {});

  }

  actualizarEmpresa(forma: NgForm){
    this.companyService.putCompany(this.empresa, this.idCompany)
    .then((res: any) => {
      Swal.fire({
        icon: "success",
        text: "Se actualizó los datos correctamente"
      });
      forma.reset();

      // Trigger para accionar reloadTable() de crud.component.ts
      this.emitterActualizacion.emit();
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        text: "Error al actualizar datos"
      });
    });
  }

  limpiarForma(forma: NgForm){ 
    forma.reset(); 
  }

}
