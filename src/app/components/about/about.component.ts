import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('aboutSection') about!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.about.nativeElement.classList.add('visible');
            observer.unobserve(this.about.nativeElement);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    observer.observe(this.about.nativeElement);
  }
}