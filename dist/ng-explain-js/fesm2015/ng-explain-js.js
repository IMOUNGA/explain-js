import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ExplainjsComponent {
    constructor() {
        this.closeTutorial = new EventEmitter();
        this.currentStepElementOriginalBorder = '';
        this.currentStepElementOriginalZindex = '';
        this.position = 0;
        this.rounds = undefined;
        this.percent = 0;
    }
    ngOnInit() {
        this.currentSteps = this.steps[this.position];
        this.changeCibling();
    }
    ngAfterViewInit() {
        this.initProgressRound();
    }
    close() {
        this.reInitOriginCibling();
        this.closeTutorial.emit(true);
    }
    changeCibling() {
        this.reInitOriginCibling();
        this.currentSteps = this.steps[this.position];
        this.currentStepElement = document.querySelector(this.currentSteps.selector);
        const currentStepStyle = this.currentStepElement.style;
        this.currentStepElementOriginalBorder = currentStepStyle.border;
        this.currentStepElementOriginalZindex = currentStepStyle.zIndex;
        currentStepStyle.zIndex = '1001';
    }
    reInitOriginCibling() {
        if (this.currentStepElement) {
            this.currentStepElement.style.border = this.currentStepElementOriginalBorder;
            this.currentStepElement.style.zIndex = this.currentStepElementOriginalZindex;
            this.currentStepElement.style.zIndex;
        }
    }
    initProgressRound() {
        this.rounds = document.querySelectorAll('.progress-round');
        this.rounds[0].classList.add('active');
    }
    nextStep() {
        if ((this.position + 1) < this.steps.length) {
            this.position++;
            this.changeCibling();
            this.progressStepNext();
        }
        else {
            this.close();
        }
    }
    previousStep() {
        if ((this.position - 1) >= 0) {
            this.progressStepprevious();
            this.position--;
            this.changeCibling();
        }
    }
    progressStepNext() {
        if (this.position < this.rounds.length) {
            this.rounds[this.position].classList.add('active');
        }
    }
    progressStepprevious() {
        if (this.position > 0) {
            this.rounds[this.position].classList.remove('active');
        }
    }
    passeAuSuivant() { }
}
ExplainjsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: ExplainjsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExplainjsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.1", type: ExplainjsComponent, selector: "app-explainjs", inputs: { steps: "steps" }, outputs: { closeTutorial: "closeTutorial" }, viewQueries: [{ propertyName: "progressbar", first: true, predicate: ["progressbar"], descendants: true }], ngImport: i0, template: `
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
  `, isInline: true, styles: [":root{--progress-width: 0}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#00000091}.explain-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:30rem;min-height:28rem;padding:2.5rem 3.5rem;overflow:hidden;text-overflow:clip;background-color:#fff;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;border-radius:1rem;text-align:center;z-index:10002}.explain-text-content{margin-top:1rem}.explain-text-content>h3{margin-bottom:2rem;color:#220f3cbf}.explain-text-content>p{line-height:1.7}.explain-progression-container{display:flex;flex-direction:column;align-items:center;margin-top:3rem}.explain-progression-container>.explain-progression-buttons>.btn{width:7rem;color:#fff;font-weight:bold}.explain-progression-container>.explain-progression-buttons>.next{background-color:#220f3c}.explain-progression-container>.explain-progression-buttons>.previous{margin-right:2rem;background-color:#220f3c6b}.explain-progression-container>.explain-progression-dots{display:flex;justify-content:space-between;position:relative;width:9rem;max-width:100%;margin-bottom:2rem}.explain-progression-container>.explain-progression-dots>.progress-round{height:.8rem;width:.8rem;background-color:#efefeff7;transition:.6s ease-in-out;border-radius:50%}.explain-progression-container>.explain-progression-dots>.progress-round.active{background-color:#ff407f}.progress-round:first-child{background-color:#ff407f}.explain-wrapper>.explain-close{display:flex;justify-content:center;align-items:center;position:absolute;top:12px;right:12px;height:.8rem;width:.8rem;padding:.8rem;cursor:pointer;background-color:#a29aad;border-radius:50%;color:#fff;font-size:.8rem}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: ExplainjsComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { progressbar: [{
                type: ViewChild,
                args: ['progressbar']
            }], steps: [{
                type: Input
            }], closeTutorial: [{
                type: Output
            }] } });

class ExplainjsModule {
}
ExplainjsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: ExplainjsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExplainjsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: ExplainjsModule, declarations: [ExplainjsComponent], imports: [CommonModule], exports: [ExplainjsComponent] });
ExplainjsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: ExplainjsModule, imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: ExplainjsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ExplainjsComponent,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        ExplainjsComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of explainjs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExplainjsComponent, ExplainjsModule };
//# sourceMappingURL=ng-explain-js.js.map
