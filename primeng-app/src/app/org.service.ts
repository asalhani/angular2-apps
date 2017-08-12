import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { OrgnizationModel, ApplicantOrgnizationRelationModel } from "app/models/orgnization.model";


@Injectable()
export class OrgnizationServices {

    constructor(private http: Http) {
       
    }

    public getOrgs(): Observable<any> {
        return this.http.get("/assets/orgs-data.json")
            .map((res: any) => res.json())
            .catch(this.handleError);
    }

    private handleError(err) {
        console.log(err);
        return Observable.throw(err || 'Server error');
    }
}