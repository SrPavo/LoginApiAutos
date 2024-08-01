import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserBottomSheetComponent } from './user-bottom-sheet/user-bottom-sheet.component';

@Injectable({
  providedIn: 'root'
})
export class UserBottomSheetService {

  constructor(private bottomSheet: MatBottomSheet) {}

  open(user: any): void {
    this.bottomSheet.open(UserBottomSheetComponent, {
      data: user
    });
  }
}
