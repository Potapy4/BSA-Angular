import { Component, OnInit } from '@angular/core';
import { History } from '../classes/history';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private historyList: History[];
  private p: number = 1;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.get().subscribe(val => this.historyList = val);
  }

}
