import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from 'src/app/services/testService/test.service';
import { ChildComponent } from './child/child.component';

export interface Items {
  id: number,
  name: string
}

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit, AfterViewInit {
  varFromService = '';
  listFromService: Items[];
  @ViewChild(ChildComponent, { static: false }) childComponentRef!: ChildComponent;
  testArray = [
    {
      name: 'test1',
      description: 'desc1'
    },
    {
      name: 'test2',
      description: 'desc2'
    },
  ];

  constructor(
    private testService: TestService
    ) {
      this.varFromService = this.testService.serviceName;
      this.listFromService = this.testService.itemsList;
    }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.childComponentRef.message == undefined) {
      this.childComponentRef.message = 'Message from child comp';
    }
    this.childComponentRef.message = 'Message from child comp';
    console.log(this.childComponentRef.message);
  }

  greet(name: string) {
    alert(name);
  }

}
