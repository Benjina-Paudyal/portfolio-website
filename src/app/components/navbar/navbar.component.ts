import { AfterViewInit, Component, ElementRef, QueryList, ViewChild,ViewChildren,} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements AfterViewInit {
  
  @ViewChildren('navLink') navLinks!: QueryList<ElementRef>;
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  ngAfterViewInit() {
    const collapseEl = this.navbarCollapse.nativeElement;

    // Close mobile menu when any link is clicked
    this.navLinks.forEach((linkRef) => {
      linkRef.nativeElement.addEventListener('click', () => {
        if (collapseEl.classList.contains('show')) {
          (window as any).bootstrap.Collapse.getInstance(collapseEl)?.hide();
        }
      });
    });
  }
}
