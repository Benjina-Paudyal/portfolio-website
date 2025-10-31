import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('resumeSection') resumeSection!: ElementRef;

  ngAfterViewInit() {
    const section = this.resumeSection.nativeElement;
    const columns = section.querySelectorAll('.col-md-6');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');

            columns.forEach((col: HTMLElement, index: number) => {
              setTimeout(() => col.classList.add('visible'), index * 150);
            });

            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }
}
