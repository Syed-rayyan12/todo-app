import { Component } from '@angular/core';
import { EditmodalComponent } from "../editmodal/editmodal.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';








@Component({
  selector: 'app-tables',
  standalone: true,
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  imports: [EditmodalComponent, FontAwesomeModule, CommonModule]
})
export class TablesComponent {
  list = [
    {
      id: "#TB010331",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010331",
      customerName: "Terry 1",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010331",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010331",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010331",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    }
  ]


}
