import { Student } from "./student";

export class StudentService {
    students: Student[] = [
        {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
        {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('10-06-1998'), gender: 'Male'},
        {name: 'Merry Jane', course: 'MBA', marks: 540, DOB: new Date('09-22-1996'), gender: 'Female'}
    ];
    totalMarks = 600;
}