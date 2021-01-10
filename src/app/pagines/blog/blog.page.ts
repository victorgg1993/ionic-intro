import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  comentaris = [
    {
      nom: 'Katy',
      data: '25/04/2019 15:26',
      comentari:
        'Eveniet perspiciatis asperiores cum odio ducimus omnis nihil iusto ipsam\
         magni voluptatem explicabo ratione accusamus quod ipsa, dicta rem.',
    },

    {
      nom: 'Salomon',
      data: '25/04/2019 17:26',
      comentari:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem debitis\
         tempora iste numquam tempore! Quam nobis aspernatur maiores inventore unde.',
    },

    {
      nom: 'Bondary',
      data: '26/04/2019 16:26',
      comentari:
        'Eius dolores harum enim odio, dolore quibusdam fugit est corporis eaque.\
         Officiis ea enim accusantium consequuntur est?',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
