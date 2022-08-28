import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../services/students/student';

@Pipe({
  name: 'filterStudent'
})
export class FilterStudentPipe implements PipeTransform {

  transform(students: Student[], filterText: string) {
    if(students.length === 0 || filterText === '') {
      return students;
    }
    else {
      return students.filter((student) => {
        return student.gender.toLowerCase() === filterText.toLowerCase()
      });
    }
  }

}
