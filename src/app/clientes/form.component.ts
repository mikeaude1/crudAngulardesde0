import { Component ,OnInit} from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
  public titulo: String =  "Crear Cliente";
  public cliente: Cliente = new Cliente();

  constructor(private ClienteService: ClienteService, private router: Router,private activatedRoute: ActivatedRoute) {}
  ngOnInit(){
    this.cargarCliente()
   {
    
   }
  }
  create(): void{
    
    this.ClienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo Cliente',`Cliente ${cliente.nombre} creado con exito!`, 'success')
      }
    )
    
  }
  update(): void{
    this.ClienteService.update(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Actualizado',`Cliente ${cliente.nombre} Actualizado con exito!`, 'success')
      }
    )
    
  }
  cargarCliente(): void{
  this.activatedRoute.params.subscribe(params =>{
    let id = params ['id']
    if(id){
      this.ClienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
    }
  })

 
}

  
  
}
