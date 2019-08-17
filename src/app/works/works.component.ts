import { Component, OnInit, Input } from '@angular/core';
import { Work } from './work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  loginUserName: string = "haluk.aksoy";
  selected: string = "";
  works: Work[] = [];
  @Input() state:string;

  ngOnInit() {
    for (let index = 0; index < 5; index++) {
      this.works.push({ Id: index, Name: "Work " + index, Priority: 1 });
    }
  }

  clickWorkItem(work: Work) {
    this.selected = work.Name;
  }

}
