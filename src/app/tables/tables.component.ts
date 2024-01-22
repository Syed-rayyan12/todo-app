import { EditmodalComponent } from "../editmodal/editmodal.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { Component} from '@angular/core';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
    selector: 'app-tables',
    standalone: true,
    templateUrl: './tables.component.html',
    styleUrl: './tables.component.css',
    imports: [EditmodalComponent, FontAwesomeModule, CommonModule, DeleteModalComponent, MatDialogModule]
})
export class TablesComponent {

constructor(private dialogRef : MatDialog){}

 

  


 openModal(){
  this.dialogRef.open(DeleteModalComponent,{
    data:{
      name : 'sam'
    }
  });


  setTimeout(() => {
    
    this.dialogRef.closeAll();
  }, 3000);
  
 }

  selectedItemId:string = '';
  openDeleteModal: boolean = false;

  list = [
    {
      id: "#TB010331",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010332",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010333",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010334",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010335",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010336",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
  ]
 
 
  addNewItem(list: any) {
    this.list.push(list);
  }

  deleteItem(id:string){
      console.log(id)
      this.selectedItemId = id;
      this.openDeleteModal = true;
  }

  deleteConfirm(e: any){
    console.log('e', e);
    if(e){
      let deletedIndex = this.list.findIndex((item) => { return item.id == this.selectedItemId });
      this.list.splice(deletedIndex, 1);
      this.openDeleteModal = false;
    }else{
      this.openDeleteModal = false;
    }
  }

  
 colseModal(){
  this.dialogRef.closeAll();

  
 }

}


  



