import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet-confirm',
  templateUrl: './bottomsheet-confirm.component.html',
  styleUrls: ['./bottomsheet-confirm.component.scss']
})

/** Component that will be used for every confirmation that will confirm wether the user will proceed the transaction.*/

export class BottomSheetConfirmComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetConfirmComponent>) {

  }

  ngOnInit(): void {
    
  }

  closeBottomSheetYes(){
    //  pass the data to parent when bottom sheet closes.
    this._bottomSheetRef.dismiss(true);
  }

  closeBottomSheetNo(){
    //  pass the data to parent when bottom sheet closes.
    this._bottomSheetRef.dismiss(false);
  }

}
