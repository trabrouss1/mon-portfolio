import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AfterNavbar } from './components/after-navbar/after-navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { Profil } from './components/profil/profil';
import { Formation } from './components/formation/formation';
import { Realisation } from "./components/realisation/realisation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, AfterNavbar, HeroSection, Profil, Formation, Realisation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-ui');
}
