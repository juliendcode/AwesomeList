import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'al-home-features',
  templateUrl: './home-features.component.html',
  styles: []
})
export class HomeFeaturesComponent implements OnInit {
  features;

  constructor() {}

  ngOnInit() {
    this.features = [
      {
        title: 'Plannifier sa semaine',
        description: 'Visibilité sur les 7 prochains jours',
        icon: '../../../../assets/calendar.png'
      },
      {
        title: 'Atteindre ses objectifs',
        description: 'Priorisation des tâches',
        icon: '../../../../assets/award.png'
      },
      {
        title: 'Analyser sa productivité',
        description: 'Visualiser le travail accompli',
        icon: '../../../../assets/diagram.png'
      }
    ];
  }
}
