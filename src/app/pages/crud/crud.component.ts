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

  termino: string = "";
  
  constructor(private readonly companyService: CompanyService) { }
  
  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  obtenerEmpresas(){
    this.companyService.getCompanies()
    .then((res: any) => {
      //cont y empresas son propiedades de la API
      this.empresas = res.cont.empresas;
      console.log(this.empresas);
      
    })
    .catch((err: any) => {
      this.empresas = [];
    });
  }

  update(idEmpresa: any){
    this.idEmpresa = idEmpresa;
    this.mostrarAct = true;
  }

  reloadTable(){
    // se ocultará el componente de Actualzar
    this.mostrarAct = false;
    // recargar la tabla de datos
    this.obtenerEmpresas();
  }

  delete(empresa: CompanyModel){
    Swal.fire({
      icon: "question",
      text: `Estas seguro de que deseas eliminar a ${empresa.strNombre}?`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    })
    .then((res) => {
      if (res.isConfirmed) {
        this.companyService.delCompany(empresa._id)
        .then((res: any) => {
          Swal.fire({
            icon: "info",
            text: "La Empresa se eliminó correctamente"
          });
          this.obtenerEmpresas();
        }).catch((err) => {
          
        });
      }
    })
    .catch((err: any) => {
      Swal.fire({
        icon: "error",
        text: "Error al eliminar Empresa"
      });
    });
  }

  showUpdate(idCompany: any){
    this.idEmpresa = idCompany;
    //this.mostrarAct = !this.mostrarAct;
    this.mostrarAct = true;
  }

  /*
  //Funcion busqueda mediante boton
  obtenerResultados(){
    console.log(this.termino);
    this.companyService.getCompanyByFilter(this.termino)
    .then((result: any) => {
      this.empresas = result.cont.empresas;
      //console.log(this.empresas);
      
    }).catch((err) => {
      this.empresas = [];
    });
  }
  */

  searchResults(event: any){
    
    if (event.target.value.length >= 0) {
      this.companyService.getCompanyByFilter(this.termino)
    .then((result: any) => {
      this.empresas = result.cont.empresas;
      //console.log(this.empresas);
      
    }).catch((err) => {
      this.empresas = [];
    });
    }
  }
  
  showLogo(urlLogo: string){
    Swal.fire({
      imageUrl: urlLogo,
      //imageWidth: '60%',
      //imageHeight: '60%',
      imageAlt: 'Custom image',
    })
  }
  
}
