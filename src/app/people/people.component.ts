import {Component} from '@angular/core';
import {Person} from './shared/person';
import {PeopleService} from './shared/people.service';

type BeatleType = Array<{name: string, value: number}>;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people: Person[] = [];
  beatles: BeatleType;
  showStyle: boolean = false;
  highlight: boolean = false;

  toggle() {
    console.log("toggling");
    this.highlight = !this.highlight;
  }

  getStyle(index) {
    let beatle = this.beatles[index];
    return (beatle.value==1) ? "highlight-item" : null;
  }

  isHighlighted(index) {
    console.log("isHighlighted: " + index);
    let beatle = this.beatles[index];
    return (beatle.value==1) ? true : false;
  }

  // changeValue(index) {
  //   let beatle = this.beatles[index];
  //   beatle.value = (beatle.value==0) ? 1 : 0;
  // }

  changeValue(index, inViewport) {

    console.log(inViewport);
    let beatle = this.beatles[index];
    beatle.value = (inViewport==true) ? 1 : 0;
    this.beatles[index] = beatle;
    console.log(beatle.name + ": " + beatle.value);
  }

  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _peopleService : PeopleService){
    this.people = _peopleService.getAll();
    this.beatles = [
      { name: "John", value: 0 },
      { name: "Paul", value: 0 },
      { name: "George", value: 0 },
      { name: "Ringo", value: 0 }
    ];
  }
}
