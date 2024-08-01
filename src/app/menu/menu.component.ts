import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserBottomSheetService } from '../user-bottom-sheet.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;

  constructor(private router: Router, private userBottomSheetService: UserBottomSheetService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.user = navigation.extras.state['user'];
    }
  }

  ngOnInit(): void {}

  openUserInfo(): void {
    this.userBottomSheetService.open(this.user);
  }
}
