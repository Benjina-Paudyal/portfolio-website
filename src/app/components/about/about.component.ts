import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const about = document.querySelector('.about-section');
    if (!about) return; // safety check

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            about.classList.add('visible');
            observer.unobserve(about);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(about);
  }
}
