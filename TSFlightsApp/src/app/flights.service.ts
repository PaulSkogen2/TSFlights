import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {
  backEndURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`);
  }

  postFlight(flight: Flight) {
    return this.http.post(`http://localhost:3000/flights`,flight).subscribe(data =>{
      console.log("data posted to server!")
    })
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
  }

  // Needed to use http.patch instead of POST to keep things from conflicting with the controller
  updateFlight(flight: Flight) {
    return this.http.patch(`${this.backEndURL}/flights/update/${flight.id}`,flight);
  }

  deleteFlight(id: number) {
    return this.http.post(`${this.backEndURL}/flights/${id}/delete`, null);
  }
}
