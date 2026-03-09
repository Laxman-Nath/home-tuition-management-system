import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { GuidesComponent } from './components/home/guides/guides.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { ProcessComponent } from './components/home/process/process.component';
import { PricingComponent } from './components/home/pricing/pricing.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,GuidesComponent,HeroComponent,FeaturesComponent,ProcessComponent,PricingComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular';
}
