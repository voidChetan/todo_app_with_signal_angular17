import { ChangeDetectionStrategy, Component, computed, signal,Signal } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
  courseName =  "DOT NET";

  firstName =  signal('Angular');

  rollNo =  signal <number> (123)

  demoName: Observable<string>  = of("");

  fullName  = computed (() =>  this.fName() + " " + this.mName() + " "+ this.lName());

  fName = signal('');
  mName = signal('');
  lName = signal('');




  constructor() {
    setTimeout(() => {
      this.courseName = "React JS ";
      this.firstName.set("Angular 17.3")
    }, 5000);
  }
  changeName() {
    this.firstName.set("React")
  }
  changeFName(value: string) {
    this.fName.set(value)
  }
  changeMName(value: string) {
    this.mName.set(value)
  }
  changeLName(value: string) {
    this.lName.set(value)
  }

  changeCouse() {
    this.courseName = "React JS "
  }
}
