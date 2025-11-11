import { Injectable } from "@angular/core";
import { Coche } from "../models/Coche";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) { }
    getCoches(): Promise<Array<Coche>> {
        let request = "webresources/coches";
        let url = environment.urlCoches + request;
        let coches = fetch(url).then(response => response.json());
        return coches;
    }

    getCochesHttpClient(): Observable<any> {
        let request = "webresources/coches";
        let url = environment.urlCoches + request;
        return this._http.get(url);
    }
}