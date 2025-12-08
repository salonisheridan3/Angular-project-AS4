import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';


export interface BalletItem {
  id: string;
  name?: string;
  born?: string;
  yearJoined?: number;
  position?: string;
  photo?: string;
  description?: string;   
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class BalletService {
  private url = '/assets/ballet_data/data.json'; 

  constructor(private http: HttpClient) {}

  
  getAll(): Observable<BalletItem[]> {
    return this.http.get<any>(this.url).pipe(
      map(res => res?.dancers ?? []),
      catchError(err => {
        console.error('BalletService load error:', err);
        return of([] as BalletItem[]);
      })
    );
  }

  getById(id: string | number): Observable<BalletItem | undefined> {
    return this.getAll().pipe(
      map(list => list.find(i => String(i.id) === String(id)))
    );
  }
  
}
