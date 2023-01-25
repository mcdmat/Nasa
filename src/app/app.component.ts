import { Component } from '@angular/core';
import { NasaService } from './nasa.service';
// import { Data } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Nasa';
 public imgOfTheDay ='';


  constructor(public nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((file) => {
      this.imgOfTheDay = file.url;
    });

  }
}
// Le composant AppComponent doit posséder une propriété publique nommée imgOfTheDay.
// Le composant utilise la méthode getImageOfTheDay du service et récupère l'image du jour.
// Le code de ton composant doit se trouver dans le dossier app/
// Le code de ton service doit se trouver dans le dossier app/
// Le code doit passer les tests unitaires, pour ce faire, utilise la commande ng test