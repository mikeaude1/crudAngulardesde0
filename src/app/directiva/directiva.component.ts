import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCurso: string[] =['typescript', 'javascript', 'java se', 'c#', 'php'];
  habilitar: boolean=true;
constructor(){}
  setHabilitar(): void{
    this.habilitar= (this.habilitar == true)? false: true;
}
}
