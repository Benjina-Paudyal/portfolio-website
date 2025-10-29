import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
   projects = [
    {
      title: 'StudyJet- A Course Management System',
      description: 'Full-stack app with Angular frontend, ASP.NET Web API backend, SQL database.',
      image: 'assets/studyjet.png',
      github: 'https://github.com/Benjina-Paudyal/StudyJet'
    },
    {
      title: 'Movie Management System',
      description: 'A full-stack web application to manage movies, genres, and directors. Users can add, edit, delete, and search movies, and view statistics with charts..',
      image: 'assets/moviemanagement.png',
      github: 'https://github.com/Benjina-Paudyal/movie_management_system'
    },
    {
      title: 'WaveRiders Squirrel Surf School',
      description: 'A responsive HTML/CSS website for a fictional surf school.',
      image: 'assets/waveriders.png',
      github: 'https://github.com/Benjina-Paudyal/Waveriders_Responsive_Website'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio built with Angular and Bootstrap.',
      image: 'assets/portfolio.png',
      github: 'https://github.com/Benjina-Paudyal/portfolio-website'
    }
  ];

  ngAfterViewInit() {
    const section = document.querySelector('.projects-section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section?.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
  }
}



