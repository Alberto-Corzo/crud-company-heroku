import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CompanyModel } from '../../models/Empresa.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  mostrarAct: boolean = false;

  empresas: CompanyModel [] = [];

  idEmpresa: string = "";

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies()
    .then((res: any) => {
      this.empresas = res.cont.empresas;
      console.log(this.empresas);
      
    })
    .catch((err: any) => {
      Swal.fire({
        icon:'error',
        //imprimirá el mensaje de error que retorne la API
        text: err.error.msg
      });
    });
  }

  showUpdate(){
    this.mostrarAct = !this.mostrarAct;
    //this.mostrarAct = true;
  }
}
