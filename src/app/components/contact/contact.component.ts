import { AfterViewInit, Component, NgZone } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  name: string = '';
  email: string = '';
  message: string = '';
  statusMessage: string = '';
  statusType: 'success' | 'error' | '' = '';
  sending: boolean = false;

  constructor(private ngZone: NgZone) {} // for proper change detection

  sendEmail(form: NgForm) {
    if (this.sending) return;

    if (!this.name || !this.email || !this.message) {
      this.ngZone.run(() => {
        this.statusMessage = 'Please fill in all fields.';
        this.statusType = 'error';
      });
      return;
    }

    this.sending = true;
    emailjs
      .send(
        'service_ehed12j',
        'template_zlz59vx',
        {
          from_name: this.name,
          from_email: this.email,
          message: this.message,
        },
        'vQ2Wa6tRmkTppZMJS'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS', response.status, response.text);

          this.statusMessage = `Hi ${this.name}, thanks for contacting me! Your message has been sent.`;
          this.statusType = 'success';
          form.reset();
          this.sending = false;

          setTimeout(() => (this.statusMessage = ''), 5000);
        },
        (error) => {
          console.log('FAILED...', error);
          this.statusMessage = 'Oops! Something went wrong.';
          this.statusType = 'error';
          this.sending = false;
          setTimeout(() => (this.statusMessage = ''), 5000);
        }
      );
  }

  ngAfterViewInit() {
    const section = document.querySelector('.contact-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
