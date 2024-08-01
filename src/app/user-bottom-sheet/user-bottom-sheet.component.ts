import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-user-bottom-sheet',
  templateUrl: './user-bottom-sheet.component.html',
  styleUrls: ['./user-bottom-sheet.component.css']
})
export class UserBottomSheetComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

}
