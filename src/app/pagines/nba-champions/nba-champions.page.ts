import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nba-champions",
  templateUrl: "./nba-champions.page.html",
  styleUrls: ["./nba-champions.page.scss"],
})
export class NbaChampionsPage implements OnInit {
  championShips = [
    {
      year: 2015,
      champion: 'Clevelands Cavaliers',
      championUrl: '../assets/cavaliers.png',
      bestPlayers: [
        'Lebron James',
        'Kyrie Irving',
        'Kevin Love',
        'J.R. Smith',
        'Anderson Varejao',
      ],
    },
    {
      year: 2014,
      champion: 'Golden State Warriors',
      championUrl: '../assets/gs_warriors.png',
      bestPlayers: [
        'Stephen curry',
        'Klay Thompson',
        'Draymong Green',
        'Andrew Bogut',
        'Gestus Ezeli',
      ],
    },
    {
      year: 2013,
      champion: 'San Antonio Spurs',
      championUrl: '../assets/sa_spurs.png',
      bestPlayers: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginóbili',
        'Kawhi Leonard',
        'Tiago Splitter',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
