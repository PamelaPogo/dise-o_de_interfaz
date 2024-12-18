import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { InicioRoutingModule } from '../inicio-routing.module';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [ButtonModule, InicioRoutingModule, SpeedDialModule, ToastModule],
  providers:[MessageService],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.scss'
})

export class BotonesComponent implements OnInit {
  loading: boolean = false;
  items: MenuItem[] | undefined

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      },
      { icon: 'pi pi-pencil', command: () => console.log('Add') },
      { icon: 'pi pi-trash', command: () => console.log('Delete') }
    ];
  }
  
  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }
}

