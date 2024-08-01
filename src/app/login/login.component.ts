import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const user = new Login(this.username, this.password);
    if (user.username === 'admin' && user.password === 'admin') {
      this.router.navigate(['/menu'], { state: { user: { 
        name: user.username, 
        email: 'admin@example.com', 
        id: '12345', 
        imageUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093' 
      }}});
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
