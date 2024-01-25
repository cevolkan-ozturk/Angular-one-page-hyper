// Blog Card


// export interface ProjectCard {
//   // Field
  
//   title: string;
//   link: string;
//   picture: string;
//   languages: Array<string>;
// }



export class ProjectCard {
  // Field
id: number;
header:string;
title: string;
text: string;
description: string;
picture: string;
date: string;
link:string;
categoryName:string;

// constructor
constructor(
id: number,
header:string,
title: string,
text: string,
description: string,
picture: string,
date: string,
link:string,
categoryName:string,

) {
this.id = id;
this.header = header;
this.title = title;
this.text = text;
this.description = description;
this.picture = picture;
this.date = date;
this.link=link;
this.categoryName=categoryName;
}

//   // method
//   // Date : Gün/Ay/Yıl dönderen method yazınız ve bunu date bind ediniz.
}
