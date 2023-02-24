import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { POSITIONS } from "./Enums/positions";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgExplainComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXhwbGFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1leHBsYWluL3NyYy9saWIvbmctZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBc0M1QyxNQUFNLE9BQU8sa0JBQWtCO0lBb0I3QjtRQVpVLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJcEUscUNBQWdDLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLHFDQUFnQyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQVMsR0FBYyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBSXpDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FB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QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UE9TSVRJT05TfSBmcm9tIFwiLi9FbnVtcy9wb3NpdGlvbnNcIjtcblxuaW50ZXJmYWNlIElTdGVwcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgc2VsZWN0b3I6IHN0cmluZztcbiAgcGhvdG9Vcmw/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWV4cGxhaW4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZy1leHBsYWluLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpbi13cmFwcGVyXCIgKm5nSWY9XCJzdGVwc1wiICNleHBsYWluPlxuICAgICAgICA8cCBjbGFzcz1cImV4cGxhaW4tY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPng8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHBsYWluLXRleHQtY29udGVudFwiPlxuICAgICAgICAgIDxoMz57eyBjdXJyZW50U3RlcHMudGl0bGUgfX08L2gzPlxuICAgICAgICAgIDxwPnt7IGN1cnJlbnRTdGVwcy5kZXNjIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4tcHJvZ3Jlc3Npb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4tcHJvZ3Jlc3Npb24tZG90c1wiICNwcm9ncmVzc2Jhcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1yb3VuZFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4tcHJvZ3Jlc3Npb24tYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwcmV2aW91c1wiIFxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvciwgJ2NvbG9yJzogY29sb3JUZXh0fVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2aW91c1N0ZXAoKVwiPlByw6ljw6lkZW50PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIG5leHRcIiBcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3JTZWNvbmRhcnksICdjb2xvcic6IGNvbG9yVGV4dH1cIiBcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5TdWl2YW50PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogW1wiLi9uZy1leHBsYWluLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE5nRXhwbGFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzYmFyJykgcHJvZ3Jlc3NiYXIhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdleHBsYWluJykgZXhwbGFpbiE6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgc3RlcHMhOiBJU3RlcHNbXTtcbiAgQElucHV0KCkgY29sb3IhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yU2Vjb25kYXJ5ITogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvclRleHQhOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbG9zZVR1dG9yaWFsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY3VycmVudFN0ZXBzITogSVN0ZXBzO1xuICBjdXJyZW50U3RlcEVsZW1lbnQhOiBIVE1MRWxlbWVudDtcbiAgY3VycmVudFN0ZXBFbGVtZW50T3JpZ2luYWxCb3JkZXIgPSAnJztcbiAgY3VycmVudFN0ZXBFbGVtZW50T3JpZ2luYWxaaW5kZXggPSAnJztcbiAgcG9zaXRpb24gPSAwO1xuICByb3VuZHMhOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgcGVyY2VudCA9IDA7XG4gIHBvc2l0aW9uczogUE9TSVRJT05TID0gUE9TSVRJT05TLkRFRkFVTFQ7XG4gIGVsZW1lbnRDaWJsaW5nITogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwcyA9IHRoaXMuc3RlcHNbdGhpcy5wb3NpdGlvbl07XG4gICAgdGhpcy5jaGFuZ2VDaWJsaW5nKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UHJvZ3Jlc3NSb3VuZCgpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5yZUluaXRPcmlnaW5DaWJsaW5nKCk7XG4gICAgdGhpcy5jbG9zZVR1dG9yaWFsLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjaGFuZ2VDaWJsaW5nKCk6IHZvaWQge1xuICAgIHRoaXMucmVJbml0T3JpZ2luQ2libGluZygpO1xuXG4gICAgdGhpcy5jdXJyZW50U3RlcHMgPSB0aGlzLnN0ZXBzW3RoaXMucG9zaXRpb25dO1xuXG4gICAgdGhpcy5jdXJyZW50U3RlcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY3VycmVudFN0ZXBzLnNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjdXJyZW50U3RlcFN0eWxlID0gdGhpcy5jdXJyZW50U3RlcEVsZW1lbnQuc3R5bGU7XG4gICAgdGhpcy5jdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbEJvcmRlciA9IGN1cnJlbnRTdGVwU3R5bGUuYm9yZGVyO1xuICAgIHRoaXMuY3VycmVudFN0ZXBFbGVtZW50T3JpZ2luYWxaaW5kZXggPSBjdXJyZW50U3RlcFN0eWxlLnpJbmRleDtcbiAgICBjdXJyZW50U3RlcFN0eWxlLnpJbmRleCA9ICcxMDAxJztcbiAgfVxuXG4gIHJlSW5pdE9yaWdpbkNpYmxpbmcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXBFbGVtZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudC5zdHlsZS5ib3JkZXIgPSB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudE9yaWdpbmFsQm9yZGVyO1xuICAgICAgdGhpcy5jdXJyZW50U3RlcEVsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5jdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbFppbmRleDtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBFbGVtZW50LnN0eWxlLnpJbmRleDtcbiAgICB9XG4gIH1cblxuICBpbml0UHJvZ3Jlc3NSb3VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1yb3VuZCcpO1xuICAgIHRoaXMucm91bmRzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG5cbiAgbmV4dFN0ZXAoKTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnBvc2l0aW9uICsgMSkgPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgdGhpcy5jaGFuZ2VDaWJsaW5nKCk7XG4gICAgICB0aGlzLnByb2dyZXNzU3RlcE5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzU3RlcCgpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMucG9zaXRpb24gLSAxKSA+PSAwKSB7XG4gICAgICB0aGlzLnByb2dyZXNzU3RlcHByZXZpb3VzKCk7XG4gICAgICB0aGlzLnBvc2l0aW9uLS07XG4gICAgICB0aGlzLmNoYW5nZUNpYmxpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwcm9ncmVzc1N0ZXBOZXh0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5yb3VuZHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJvdW5kc1t0aGlzLnBvc2l0aW9uXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwcm9ncmVzc1N0ZXBwcmV2aW91cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA+IDApIHtcbiAgICAgIHRoaXMucm91bmRzW3RoaXMucG9zaXRpb25dLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=