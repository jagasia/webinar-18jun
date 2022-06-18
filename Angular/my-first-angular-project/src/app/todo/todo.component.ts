import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todo:TodoService) { }

  ngOnInit(): void {
    this.todo.fnGetAllTodos().subscribe((data)=>{
      console.log(data)
    });
  }

}