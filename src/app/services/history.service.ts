import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";

import { History } from '../classes/history';

@Injectable()
export class HistoryService {
  private readonly URL = "http://localhost:58066/api/history"
  constructor(private httpClient: HttpClient) { }


  public get(): Observable<Array<History>> {
    return this.httpClient.get<Array<History>>(this.URL);
  }
}
