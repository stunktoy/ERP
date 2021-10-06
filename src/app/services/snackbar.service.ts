import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

/** Service that will serve for snackbar component to display the snackbar*/
export class SnackBarService {

    constructor(private _snackBar: MatSnackBar) { }

    showSnackBar(snackBarParam = {
        message: "Successfully Saved",
        color:"", 
        duration: 2000, 
        action:false
    }){
        let actionButtonLabel = "Close";
        let horizontalPosition: MatSnackBarHorizontalPosition = 'end'; // start,end,left,right,center
        let verticalPosition: MatSnackBarVerticalPosition = 'top'; //top,bottom
        let addExtraClass: boolean = false;

        let snackBarConfig = new MatSnackBarConfig();
        snackBarConfig.verticalPosition = verticalPosition;
        snackBarConfig.horizontalPosition = horizontalPosition;
        snackBarConfig.duration = snackBarParam.duration;
        snackBarConfig.panelClass = snackBarParam.color;
        this._snackBar.open(snackBarParam.message, snackBarParam.action ? actionButtonLabel : undefined, snackBarConfig);
    }


    showDefaultSuccess() {
        this.showSnackBar({
            message:"Operation successfully saved.",
            color: "snackbar-primary", /** css style from style.scss file*/
            duration: 2000,
            action: true
        });
    }

    showError409(errorMessage:string) {
        this.showSnackBar({
            message: errorMessage,
            color: "snackbar-danger", /** css style from style.scss file*/
            duration: 3000,
            action: true
        });
    }
}