import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgExplain';
  showTutorial = false;

  steps = [
    {
      title: 'Gestion des étiquettes',
      desc: 'La liste des étiquettes est paramétrée depuis Mon compte/catalogue.\n' +
        'Il est possible d’ajouter ou de supprimer un ou plusieurs labels pour chaque film (par exemple : jeune public, ' +
        'policier, Cannes 2022, AFCAE, école et cinéma, patrimoine…).\n' +
        'Ces étiquettes apparaissent sur la page Catalogue (vue liste ou carte) et peuvent être filtrées.\n' +
        'Il est possible de générer certains rapports comptables suivant ces étiquettes.',
      selector: '.tuto-1',
    },
    {
      title: 'Title 2',
      desc: 'Description 2',
      selector: '.tuto-2',
    },
    {
      title: 'Title 3',
      desc: 'Description 3',
      selector: '.tuto-3',
    }
  ];

  showTutorialModal(): void {
    this.showTutorial = !this.showTutorial;
  }
}
