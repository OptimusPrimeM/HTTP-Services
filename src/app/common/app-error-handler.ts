import { ErrorHandler } from '@angular/core';


export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        alert("An unexperted error occured!");
        console.log(error);
    }

}