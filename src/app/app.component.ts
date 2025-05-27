import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SlideCarouselComponent } from './shared/components/slide-carousel/slide-carousel.component';
import { CategoryCarouselComponent } from "./shared/components/category-carousel/category-carousel.component";

//Sidenav
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from "@angular/material/list";
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SlideCarouselComponent, MatToolbarModule, MatIconModule, MatButtonModule,
    ReactiveFormsModule, MatMenuModule, MatSidenavModule, MatListModule, CategoryCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'livraria-aurora';

  searchControl = new FormControl('');

  //Dropdowns
  isLivrosOpen = false;
  isPapelariaOpen = false;
  isJogosOpen = false;
  isInformaticaOpen = false;

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        console.log('Busca:', value);
      });
  }

}
