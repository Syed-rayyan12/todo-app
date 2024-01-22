import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalBarComponent } from './modal-bar/modal-bar.component';
import { TablesComponent } from "./tables/tables.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {MatDialogModule} from '@angular/material/dialog'


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ModalBarComponent, TablesComponent, FontAwesomeModule, DeleteModalComponent, MatDialogModule,]
})
export class AppComponent {
  title = 'todolist';

  
}
