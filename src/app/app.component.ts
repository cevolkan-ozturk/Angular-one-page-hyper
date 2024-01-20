import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos';

// Header, Main, Footer
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnePageNavbarComponent } from './one-page-navbar/one-page-navbar.component';

// Dikkat: Bütün Componentleri buraya eklemek zorundayız
@Component({
  // Html tag'i oluşturmak
  selector: 'app-root',

  // Bu componentin tek başına kullanmamıza olanak sağlar
  standalone: true,

  // Eğer Component veya Module ekliyorsanız burada olmak zorundadır.
  imports: [
    CommonModule, 
    RouterOutlet, 
    OnePageNavbarComponent,
    OnepageMainComponent
  ],

  // Html'de bu componentte kullanacağımız html dosyası
  // template:  Html kullanmadan direk html kodlarını template:``
  templateUrl: './app.component.html',

  // Css'de bu componentte kullanacağımız css dosyası
  styleUrl: './app.component.css'
})

// EXPORT: bu classı dışarda çağırmak istiyorsak
export class AppComponent implements OnInit {
  constructor (private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Volkan ÖZTÜRK | Frontend Developer');
    this.metaService.addTags([
      {name: 'keywords', content: 'fronted, software, developer, angular'},
      {
        name : 'description',
        content: 'Merhablar! Ben Volkan bla bla bla'
      },
    ]);
   
    
  }
  
  toggleNavbar(event: Event) {
    event.preventDefault();
    document.querySelector('body')?.classList.toggle('nav-active');
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
  }
}