import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/services/students/student';
import { StudentService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.scss']
})
export class DirectivesPipesComponent implements OnInit {theBool = true;
  bkgColor = 'white';
  randomText = 'dodi';
  date = new Date();
  
  students!: Student[];
  totalMarks!: number;
  filterText = '';
  roleDefined = true;
  adminRole = false;
  numbers = [1,2,3,4,5,6,7,8];
  counter = 2;

  constructor(
    private studentService: StudentService
  ) {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.theBool = !this.theBool;
  }

  addDummyStudent() {
    this.students.push({name: 'Dodi', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
  }

  increase() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

}
