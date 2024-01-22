import { Component, EventEmitter, Output } from '@angular/core';







@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css',
 
})


export class DeleteModalComponent {



  @Output() newItemEvent = new EventEmitter<string>();

  deleteTask(e: any){
    console.log('e', e);
    this.newItemEvent.emit(e);
 }

 

}