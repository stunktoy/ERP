import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ClassificationService } from 'src/app/services/inventory/classifcation.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { BottomSheetConfirmComponent } from 'src/app/shared/component/bottomsheet-confirm/bottomsheet-confirm.component';
import { RouteChangeService } from 'src/app/shared/routechange.service';

@Component({
  selector: 'app-classification-maintenance',
  templateUrl: './classification-maintenance.component.html',
  styleUrls: ['./classification-maintenance.component.scss']
})
export class ClassificationMaintenanceComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  classificationForm:any;

   /** Set default value progress bar : false = hidden */
   displayProgressBar = false;

  constructor(private _routeChangeService: RouteChangeService, private _formBuilder: FormBuilder, private _matBottomSheet: MatBottomSheet, private _snackBarService: SnackBarService, private _classificationService: ClassificationService) { }

  ngOnInit(): void {
    /** Set the breadcrumb value expected output: Bill Of Material / Maintenance. */
    this._routeChangeService.changeMainTitle({
      parentIcon: "dns",
      parentLink: "Classification",
      activeLink: "Maintenance"
    });

    this.createForm();

  }

  createForm() {
    this.classificationForm = this._formBuilder.group({
      ClassificationCode: new FormControl('', [Validators.required]),     
      Name: new FormControl('', [Validators.required])   
    });
  }

  /** Form submition/post data on api*/
  onSubmit() {

    if(this.classificationForm.valid) {

      /** Open bottom sheet confirm component in a form of: Do you really want to proceed with the operation? */
      const bottomSheetRef =  this._matBottomSheet.open(BottomSheetConfirmComponent);

      bottomSheetRef.afterDismissed().subscribe(data => {

        if (data) {
          /** Display progress bar with overlay. */
          this.displayProgressBar = true;

           /** setTimeout is not necessarily needed, just for the presentation of progress bar with overlay.*/
          setTimeout(() => {
            this._classificationService.post(this.classificationForm.value).subscribe({       
              error:(error:any) => {
                
                //this._snackBarService.showError409(error.error.message);

                error.status == 409 ?  this._snackBarService.showError409(error.error.message) : console.error(error);
                
                /** Hide progress bar with overlay */
                this.displayProgressBar = false;

              },
              complete: () => {
                /** Return to initial state of the bill of material form. */
                this.createForm();
                
                /** Reset the validator of form after post and subscribe. */
                this.formGroupDirective.resetForm();
                
                /** Display snackbar "Success Message". */
                this._snackBarService.showDefaultSuccess();

                /** Hide progress bar with overlay */
                this.displayProgressBar = false;
              }
            })
          }, 1500);
        }
      });
    }
  }

}
