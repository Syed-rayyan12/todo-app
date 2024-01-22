import { Component } from '@angular/core';
import { TablesComponent } from "../tables/tables.component";

@Component({
    selector: 'app-modal-bar',
    standalone: true,
    templateUrl: './modal-bar.component.html',
    styleUrl: './modal-bar.component.css',
    imports: [TablesComponent]
})
export class ModalBarComponent {
  
     
}
