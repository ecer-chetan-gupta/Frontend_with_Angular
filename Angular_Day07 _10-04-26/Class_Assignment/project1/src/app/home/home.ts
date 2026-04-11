import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  students = [
    { name: 'Abhinav', rollNo: 101, branch: 'ECE' },
    { name: 'Chetan', rollNo: 102, branch: 'CSE' },
    { name: 'Devansh', rollNo: 103, branch: 'CS-AI' },
    { name: 'Gourav', rollNo: 104, branch: 'AI&DS' },
  ];

  displayedColumns: string[] = ['name', 'rollNo', 'branch'];
}
