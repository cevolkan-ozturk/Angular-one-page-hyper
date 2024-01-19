// CommonModule
import { CommonModule } from '@angular/common';

//Core
import { Component } from '@angular/core';

// SocialContent
import { SocialContent } from './SocialContent';

@Component({
  // Html Selector Template
  selector: 'app-onepage-header',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme CommonModule: ngIf, ngFor etc
  imports: [CommonModule],

  // Html5 Url
  templateUrl: './onepage-header.component.html',

  // Css3 Url
  styleUrl: './onepage-header.component.css',
})
export class OnepageHeaderComponent {
  // Field
  header:string="Merhaba Ben Volkan Öztürk";
  title:string="Front End Developer"

  // Social 
  socialContent:SocialContent[]=[
    {id:1,link:"https://www.linkedin.com/in/volkan-ozturkk/",text:"linkedin",icon:"fa-brands fa-linkedin-in",classSocial:"btn btn-primary me-2"},
    {id:1,link:"https://github.com/cevolkan-ozturk",text:"gitHub",icon:"fa-brands fa-github",classSocial:"btn btn-danger me-2"},
    {id:1,link:"http://link3",text:"youtube",icon:"fa-brands fa-youtube",classSocial:"btn btn-secondary me-2"},
    {id:1,link:"http://link4",text:"blogger",icon:"fa-brands fa-blogger-b",classSocial:"btn btn-dark me-2"},
    
  ];

  // Constructor
  constructor(){}

  // Method

} //end OnepageHeaderComponent
