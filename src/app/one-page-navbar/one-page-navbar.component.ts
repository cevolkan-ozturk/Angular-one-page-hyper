// User

// Common Module
import { CommonModule } from '@angular/common';

// Core
import { Component } from '@angular/core';

// Router
import { RouterLink } from '@angular/router';

// Component
@Component({
  // Html Template 
  selector: 'app-one-page-navbar',

  // Bu component tek başına çalışsın
  standalone: true,

  // Projeye import edilecek alan
  imports: [CommonModule,RouterLink],

  // Html Template
  templateUrl: './one-page-navbar.component.html',

  // Css Template
  styleUrl: './one-page-navbar.component.css',
})

// EXPORT
export class OnePageNavbarComponent {

  // Field
  // homePage: String = 'Anasayfa 44';

  // User Object
  // User: User[] = [
  //   {
  //     id: 1,
  //     username: 'Hamit Mizrak',
  //     email: 'hamitmizrak@gmail.com',
  //     password: '123456',
  //     pictures:
  //       'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
  //     date: String(new Date().getFullYear()),
  //     link: 'https://admin1/',
  //     rolles: userRolles.admin,
  //   },
  //   {
  //     id: 2,
  //     username: 'writer1',
  //     email: 'writer1@gmail.com',
  //     password: '123456',
  //     pictures:
  //       'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
  //     date: String(new Date().getFullYear()),
  //     link: 'https://writer1/',
  //     rolles: userRolles.writer,
  //   },
  //   {
  //     id: 3,
  //     username: 'user1',
  //     email: 'huser1@gmail.com',
  //     password: '123456',
  //     pictures:
  //       'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
  //     date: String(new Date().getFullYear()),
  //     link: 'https://user1/',
  //     rolles: userRolles.user,
  //   },
  // ];

  // navBar adında bir obje oluşturunuz.
  // navBar:{}={};
  navBar: {
    isLogin: boolean;
    // logo: string, (fontAwesome,picture,link,title)
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: Array<any>;
    search: {
      name: string;
      placeholder: string;
      type: string;
      style: string;
    };
  } = {
    isLogin: false,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },

    //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
    navbar: [
      {
        id: 1,
        name: 'Home',
        link: '/',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      { id: 2, name: 'Education', link: '#education', fontAwesome: 'font-2' },
      { id: 3, name: 'Skills', link: '#skills', fontAwesome: 'font-2' },
      { id: 4, name: 'Experience', link: '#experience', fontAwesome: 'font-3' },
      { id: 5, name: 'My Projects', link: '#my_project', fontAwesome:'font-4' },
      { id: 6, name: 'Contact', link: '#contact', fontAwesome: 'font-5' },
    ],
    search: {
      name: 'search',
      placeholder: 'Arama için ...',
      type: 'text',
      style: 'btn btn-primary',
    },
  }; // end navBar Object

  // Constructor
  constructor(){}

  // Method
  darkMode(){
    alert("Dark Mode")
  }
}
