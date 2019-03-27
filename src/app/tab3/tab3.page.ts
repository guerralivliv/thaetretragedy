import { Component } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
    this.clientes = this.clienteService.getClientes();
  }
}
