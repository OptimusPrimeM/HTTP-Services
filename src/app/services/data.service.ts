import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {


    constructor(private http: Http, private _url:string) { }


    getAll() {
        return this.http.get(this._url);
    }

    create(resource) {
        return this.http.post(this._url, JSON.stringify(resource))
            .pipe(
                catchError(this.handleError)
            );
    }

    update(id) {
        return this.http.patch(this._url + "/" + id, JSON.stringify({ isRed: true }))
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(id) {
        return this.http.delete(this._url + "/" + id)
            .pipe(
                catchError(this.handleError)
            );

    }

    handleError = (error: Response) => {

        if (error.status === 400)
            return Observable.throw(new BadInput(error));

        if (error.status === 404)
            return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
    }
} 