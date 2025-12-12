import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AfterNavbar } from './components/after-navbar/after-navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { Profil } from './components/profil/profil';
import { Formation } from './components/formation/formation';
import { Realisation } from "./components/realisation/realisation";
import { Footer } from "./components/footer/footer";
import { Experience } from "./components/experience/experience";
import { Stack } from "./components/stack/stack";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, AfterNavbar, HeroSection, Profil, Formation, Realisation, Footer, Experience, Stack],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-ui');
}
