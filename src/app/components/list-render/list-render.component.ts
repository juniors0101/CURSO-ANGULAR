import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[]= [];

  animal: Animal =  {
    name: 'teste',
    type: 'alguma coisa',
    age: 10,
  }

  animalDetails  = '';

  constructor(private listservice: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal...!");
    this.animals = this.listservice.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listservice.getAll().subscribe((animals) => (this.animals = animals));
  }

}
