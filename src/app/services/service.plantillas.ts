import { Injectable } from "@angular/core";
import { Plantilla } from "../models/plantilla";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePlantillas {
    getFunciones(): Promise<Array<string>> {
        let request = "api/Plantilla/Funciones";
        let url = environment.urlPlantillas + request;
        let funciones = fetch(url).then(response => response.json());
        return funciones;
    }
    getEmpleados(funcion: string): Promise<Array<Plantilla>> {
        let request = "api/Plantilla/PlantillaFuncion/" + funcion;
        let url = environment.urlPlantillas + request;
        let empleados = fetch(url).then(response => response.json());
        return empleados;
    }
    getPlantillaFunciones(funciones: Array<string>): Promise<Array<Plantilla>> {
        let datos = "";
        for (var funcion of funciones){
            datos += "funcion=" + funcion + "&";
        }
        datos = datos.substring(0, datos.length - 1);
        let request = "api/plantilla/plantillafunciones?" + datos;
        let url = environment.urlPlantillas + request;
        let empleados = fetch(url).then(response => response.json());
        return empleados;
    }
}