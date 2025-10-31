import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectSection') projectSection!: ElementRef;

  projects = [
    {
      title: 'StudyJet- A Course Management System',
      description:
        'A Full-stack web app where user can buy and study the courses available.',
      image: 'assets/studyjet.png',
      github: 'https://github.com/Benjina-Paudyal/StudyJet',
      tech: ['Angular', 'ASP.NET', 'SQL', 'Bootstrap'],
    },
    {
      title: 'Movie Management System',
      description:
        'A full-stack web app to manage movies, genres, and directors.',
      image: 'assets/moviemanagement.png',
      github: 'https://github.com/Benjina-Paudyal/movie_management_system',
      tech: ['Python', 'Flask', 'Jinja2', 'SQLite', 'Bootstrap'],
    },

    {
      title: 'Portfolio Website',
      description:
        'Responsive personal portfolio built with Angular and Bootstrap.',
      image: 'assets/portfolio.png',
      github: 'https://github.com/Benjina-Paudyal/portfolio-website',
      tech: ['Angular', 'Bootstrap', 'CSS', 'HTML'],
    },
  ];

  ngAfterViewInit() {
    const section = this.projectSection.nativeElement;
    const cards = section.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
            // Stagger each card
            cards.forEach((card: HTMLElement, index: number) => {
              setTimeout(() => card.classList.add('visible'), index * 150);
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
