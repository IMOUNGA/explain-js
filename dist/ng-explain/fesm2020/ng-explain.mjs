import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { NgIf, NgForOf, NgStyle } from '@angular/common';

var POSITIONS;
(function (POSITIONS) {
    POSITIONS["ABOVE"] = "above";
    POSITIONS["BELOW"] = "below";
    POSITIONS["LEFT"] = "left";
    POSITIONS["RIGHT"] = "right";
    POSITIONS["DEFAULT"] = "left";
})(POSITIONS || (POSITIONS = {}));

class NgExplainComponent {
    constructor() {
        this.closeTutorial = new EventEmitter();
        this.currentStepElementOriginalBorder = '';
        this.currentStepElementOriginalZindex = '';
        this.position = 0;
        this.percent = 0;
        this.positions = POSITIONS.DEFAULT;
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
}
NgExplainComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgExplainComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgExplainComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.5", type: NgExplainComponent, selector: "ng-explain", inputs: { steps: "steps", color: "color", colorSecondary: "colorSecondary", colorText: "colorText" }, outputs: { closeTutorial: "closeTutorial" }, viewQueries: [{ propertyName: "progressbar", first: true, predicate: ["progressbar"], descendants: true }, { propertyName: "explain", first: true, predicate: ["explain"], descendants: true }], ngImport: i0, template: `
    <div class="ng-explain-wrapper">
      <div class="overlay"></div>
      <div class="explain-wrapper" *ngIf="steps" #explain>
        <p class="explain-close" 
           [ngStyle]="{'background-color': colorSecondary, 'color': colorText}" 
           (click)="close()">x</p>
        <div class="explain-text-content">
          <h3>{{ currentSteps.title }}</h3>
          <p>{{ currentSteps.desc }}</p>
        </div>
        <div class="explain-progression-container">
          <div class="explain-progression-dots" #progressbar>
            <div class="progress-round" *ngFor="let step of steps; let i = index"></div>
          </div>
          <div class="explain-progression-buttons">
            <button class="btn previous" 
                    [ngStyle]="{'background-color': color, 'color': colorText}"
                    (click)="previousStep()">Précédent</button>
            <button class="btn next" 
                    [ngStyle]="{'background-color': colorSecondary, 'color': colorText}" 
                    (click)="nextStep()">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  `, isInline: true, styles: ["@import\"https://use.typekit.net/bks3dkn.css\";:root{--progress-width: 0}*{box-sizing:border-box}html,body,ng-explain-wrapper{padding:0;margin:0;position:relative}.ng-explain-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;top:0;left:0}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#00000091}.explain-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;width:30rem;min-height:28rem;padding:2.5rem 3.5rem;overflow:clip;text-overflow:clip;background-color:#fff;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;border-radius:1rem;text-align:center;z-index:10002}.explain-text-content{margin-top:1rem}.explain-text-content>h3{margin-bottom:2rem;color:#220f3cbf}.explain-text-content>p{line-height:1.7}.explain-progression-container{display:flex;flex-direction:column;align-items:center;margin-top:3rem}.explain-progression-container>.explain-progression-buttons>.btn{width:7rem;color:#fff;font-weight:700;height:2rem;border:none;border-radius:.2rem}.explain-progression-container>.explain-progression-buttons>.next{background-color:#220f3c}.explain-progression-container>.explain-progression-buttons>.previous{margin-right:2rem;background-color:#220f3c6b}.explain-progression-container>.explain-progression-dots{display:flex;justify-content:space-between;position:relative;width:9rem;max-width:100%;margin-bottom:2rem}.explain-progression-container>.explain-progression-dots>.progress-round{height:.8rem;width:.8rem;background-color:#efefeff7;transition:.6s ease-in-out;border-radius:50%}.explain-progression-container>.explain-progression-dots>.progress-round.active{background-color:#ff407f}.progress-round:first-child{background-color:#ff407f}.explain-wrapper>.explain-close{display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:12px;height:.8rem;width:.8rem;padding:.8rem;cursor:pointer;background-color:#a29aad;border-radius:50%;color:#fff;font-size:.8rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgExplainComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-explain', template: `
    <div class="ng-explain-wrapper">
      <div class="overlay"></div>
      <div class="explain-wrapper" *ngIf="steps" #explain>
        <p class="explain-close" 
           [ngStyle]="{'background-color': colorSecondary, 'color': colorText}" 
           (click)="close()">x</p>
        <div class="explain-text-content">
          <h3>{{ currentSteps.title }}</h3>
          <p>{{ currentSteps.desc }}</p>
        </div>
        <div class="explain-progression-container">
          <div class="explain-progression-dots" #progressbar>
            <div class="progress-round" *ngFor="let step of steps; let i = index"></div>
          </div>
          <div class="explain-progression-buttons">
            <button class="btn previous" 
                    [ngStyle]="{'background-color': color, 'color': colorText}"
                    (click)="previousStep()">Précédent</button>
            <button class="btn next" 
                    [ngStyle]="{'background-color': colorSecondary, 'color': colorText}" 
                    (click)="nextStep()">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["@import\"https://use.typekit.net/bks3dkn.css\";:root{--progress-width: 0}*{box-sizing:border-box}html,body,ng-explain-wrapper{padding:0;margin:0;position:relative}.ng-explain-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;top:0;left:0}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#00000091}.explain-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;width:30rem;min-height:28rem;padding:2.5rem 3.5rem;overflow:clip;text-overflow:clip;background-color:#fff;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;border-radius:1rem;text-align:center;z-index:10002}.explain-text-content{margin-top:1rem}.explain-text-content>h3{margin-bottom:2rem;color:#220f3cbf}.explain-text-content>p{line-height:1.7}.explain-progression-container{display:flex;flex-direction:column;align-items:center;margin-top:3rem}.explain-progression-container>.explain-progression-buttons>.btn{width:7rem;color:#fff;font-weight:700;height:2rem;border:none;border-radius:.2rem}.explain-progression-container>.explain-progression-buttons>.next{background-color:#220f3c}.explain-progression-container>.explain-progression-buttons>.previous{margin-right:2rem;background-color:#220f3c6b}.explain-progression-container>.explain-progression-dots{display:flex;justify-content:space-between;position:relative;width:9rem;max-width:100%;margin-bottom:2rem}.explain-progression-container>.explain-progression-dots>.progress-round{height:.8rem;width:.8rem;background-color:#efefeff7;transition:.6s ease-in-out;border-radius:50%}.explain-progression-container>.explain-progression-dots>.progress-round.active{background-color:#ff407f}.progress-round:first-child{background-color:#ff407f}.explain-wrapper>.explain-close{display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:12px;height:.8rem;width:.8rem;padding:.8rem;cursor:pointer;background-color:#a29aad;border-radius:50%;color:#fff;font-size:.8rem}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { progressbar: [{
                type: ViewChild,
                args: ['progressbar']
            }], explain: [{
                type: ViewChild,
                args: ['explain']
            }], steps: [{
                type: Input
            }], color: [{
                type: Input
            }], colorSecondary: [{
                type: Input
            }], colorText: [{
                type: Input
            }], closeTutorial: [{
                type: Output
            }] } });

class NgExplainModule {
}
NgExplainModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgExplainModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgExplainModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.5", ngImport: i0, type: NgExplainModule, declarations: [NgExplainComponent], imports: [NgIf,
        NgForOf,
        NgStyle], exports: [NgExplainComponent] });
NgExplainModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgExplainModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: NgExplainModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgExplainComponent
                    ],
                    imports: [
                        NgIf,
                        NgForOf,
                        NgStyle
                    ],
                    exports: [
                        NgExplainComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-explain
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgExplainComponent, NgExplainModule };
//# sourceMappingURL=ng-explain.mjs.map
