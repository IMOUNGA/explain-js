import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-explainjs',
  template: `
    <div class="overlay"></div>
    <div class="explain-wrapper" *ngIf="steps">
      <p class="explain-close" (click)="close()">x</p>
      <div class="explain-text-content">
        <h3>{{ currentSteps.title }}</h3>
        <p>{{ currentSteps.desc }}</p>
      </div>
      <div class="explain-progression-container">
        <div class="explain-progression-dots" #progressbar>
          <div class="progress-round" *ngFor="let step of steps; let i = index"></div>
        </div>
        <div class="explain-progression-buttons">
          <button class="btn previous" (click)="previousStep()">Précédent</button>
          <button class="btn next" (click)="nextStep()">Suivant</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../../assets/styles.css'],
})
export class ExplainjsComponent implements OnInit, AfterViewInit {
  @ViewChild('progressbar') progressbar: ElementRef;
  @Input() steps: { title: string; desc: string; selector: string }[];
  @Output() closeTutorial: EventEmitter<boolean> = new EventEmitter();

  currentSteps: { title: string; desc: string; selector: string };
  currentStepElement: HTMLElement;
  currentStepElementOriginalBorder = '';
  currentStepElementOriginalZindex = '';
  position = 0;
  rounds = undefined;
  percent = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.currentSteps = this.steps[this.position];

    this.changeCibling();

  }

  ngAfterViewInit(): void {
    this.initProgressRound();
  }

  close(): void {
    this.reInitOriginCibling();
    this.closeTutorial.emit(true);
  }

  changeCibling(): void {
    this.reInitOriginCibling();

    this.currentSteps = this.steps[this.position];

    this.currentStepElement = document.querySelector(this.currentSteps.selector) as HTMLElement;
    const currentStepStyle = this.currentStepElement.style;
    this.currentStepElementOriginalBorder = currentStepStyle.border;
    this.currentStepElementOriginalZindex = currentStepStyle.zIndex;
    currentStepStyle.zIndex = '1001';
  }

  reInitOriginCibling(): void {
    if (this.currentStepElement) {
      this.currentStepElement.style.border = this.currentStepElementOriginalBorder;
      this.currentStepElement.style.zIndex = this.currentStepElementOriginalZindex;
      this.currentStepElement.style.zIndex;
    }
  }

  initProgressRound(): void {
    this.rounds = document.querySelectorAll('.progress-round');
    this.rounds[0].classList.add('active');
  }

  nextStep(): void {
    if ((this.position + 1) < this.steps.length) {
      this.position++;
      this.changeCibling();
      this.progressStepNext();
    } else {
      this.close();
    }
  }

  previousStep(): void {
    if ((this.position - 1) >= 0) {
      this.progressStepprevious();
      this.position--;
      this.changeCibling();
    }
  }

  progressStepNext(): void {
    if (this.position < this.rounds.length) {
      this.rounds[this.position].classList.add('active');
    }
  }

  progressStepprevious(): void {
    if (this.position > 0) {
      this.rounds[this.position].classList.remove('active');
    }
  }

  passeAuSuivant(): void {}
}
