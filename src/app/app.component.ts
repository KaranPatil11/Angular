import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AppointmentListComponent, FormsModule]
})
export class AppComponent {
  title = 'todo-list';
  log(text : string) : void{
    var message = 'Message' + text;
    console.log(message);
    
    
  }
  
}
