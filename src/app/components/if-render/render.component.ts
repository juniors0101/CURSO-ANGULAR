import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  canShow: boolean = true;
  name = 'Karine';

  constructor() { }

  ngOnInit(): void {
  }

}
