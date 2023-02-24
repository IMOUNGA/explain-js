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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXhwbGFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1leHBsYWluL3NyYy9saWIvbmctZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBd0M1QyxNQUFNLE9BQU8sa0JBQWtCO0lBb0I3QjtRQVpVLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJcEUscUNBQWdDLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLHFDQUFnQyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQVMsR0FBYyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBSXpDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FB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cnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BPU0lUSU9OU30gZnJvbSBcIi4vRW51bXMvcG9zaXRpb25zXCI7XG5cbmludGVyZmFjZSBJU3RlcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIHNlbGVjdG9yOiBzdHJpbmc7XG4gIHBob3RvVXJsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1leHBsYWluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmctZXhwbGFpbi13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4td3JhcHBlclwiICpuZ0lmPVwic3RlcHNcIiAjZXhwbGFpbj5cbiAgICAgICAgPHAgY2xhc3M9XCJleHBsYWluLWNsb3NlXCIgXG4gICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yU2Vjb25kYXJ5LCAnY29sb3InOiBjb2xvclRleHR9XCIgXG4gICAgICAgICAgIChjbGljayk9XCJjbG9zZSgpXCI+eDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4tdGV4dC1jb250ZW50XCI+XG4gICAgICAgICAgPGgzPnt7IGN1cnJlbnRTdGVwcy50aXRsZSB9fTwvaDM+XG4gICAgICAgICAgPHA+e3sgY3VycmVudFN0ZXBzLmRlc2MgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpbi1wcm9ncmVzc2lvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpbi1wcm9ncmVzc2lvbi1kb3RzXCIgI3Byb2dyZXNzYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXJvdW5kXCIgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpbi1wcm9ncmVzc2lvbi1idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHByZXZpb3VzXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yLCAnY29sb3InOiBjb2xvclRleHR9XCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzU3RlcCgpXCI+UHLDqWPDqWRlbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gbmV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvclNlY29uZGFyeSwgJ2NvbG9yJzogY29sb3JUZXh0fVwiIFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPlN1aXZhbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCIuL25nLWV4cGxhaW4uY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTmdFeHBsYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgncHJvZ3Jlc3NiYXInKSBwcm9ncmVzc2JhciE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2V4cGxhaW4nKSBleHBsYWluITogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBzdGVwcyE6IElTdGVwc1tdO1xuICBASW5wdXQoKSBjb2xvciE6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3JTZWNvbmRhcnkhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yVGV4dCE6IHN0cmluZztcbiAgQE91dHB1dCgpIGNsb3NlVHV0b3JpYWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjdXJyZW50U3RlcHMhOiBJU3RlcHM7XG4gIGN1cnJlbnRTdGVwRWxlbWVudCE6IEhUTUxFbGVtZW50O1xuICBjdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbEJvcmRlciA9ICcnO1xuICBjdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbFppbmRleCA9ICcnO1xuICBwb3NpdGlvbiA9IDA7XG4gIHJvdW5kcyE6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICBwZXJjZW50ID0gMDtcbiAgcG9zaXRpb25zOiBQT1NJVElPTlMgPSBQT1NJVElPTlMuREVGQVVMVDtcbiAgZWxlbWVudENpYmxpbmchOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFN0ZXBzID0gdGhpcy5zdGVwc1t0aGlzLnBvc2l0aW9uXTtcbiAgICB0aGlzLmNoYW5nZUNpYmxpbmcoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRQcm9ncmVzc1JvdW5kKCk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlSW5pdE9yaWdpbkNpYmxpbmcoKTtcbiAgICB0aGlzLmNsb3NlVHV0b3JpYWwuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGNoYW5nZUNpYmxpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5yZUluaXRPcmlnaW5DaWJsaW5nKCk7XG5cbiAgICB0aGlzLmN1cnJlbnRTdGVwcyA9IHRoaXMuc3RlcHNbdGhpcy5wb3NpdGlvbl07XG5cbiAgICB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jdXJyZW50U3RlcHMuc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwU3R5bGUgPSB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudC5zdHlsZTtcbiAgICB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudE9yaWdpbmFsQm9yZGVyID0gY3VycmVudFN0ZXBTdHlsZS5ib3JkZXI7XG4gICAgdGhpcy5jdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbFppbmRleCA9IGN1cnJlbnRTdGVwU3R5bGUuekluZGV4O1xuICAgIGN1cnJlbnRTdGVwU3R5bGUuekluZGV4ID0gJzEwMDEnO1xuICB9XG5cbiAgcmVJbml0T3JpZ2luQ2libGluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBFbGVtZW50LnN0eWxlLmJvcmRlciA9IHRoaXMuY3VycmVudFN0ZXBFbGVtZW50T3JpZ2luYWxCb3JkZXI7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudE9yaWdpbmFsWmluZGV4O1xuICAgICAgdGhpcy5jdXJyZW50U3RlcEVsZW1lbnQuc3R5bGUuekluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGluaXRQcm9ncmVzc1JvdW5kKCk6IHZvaWQge1xuICAgIHRoaXMucm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzLXJvdW5kJyk7XG4gICAgdGhpcy5yb3VuZHNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cblxuICBuZXh0U3RlcCgpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMucG9zaXRpb24gKyAxKSA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICB0aGlzLmNoYW5nZUNpYmxpbmcoKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NTdGVwTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXNTdGVwKCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5wb3NpdGlvbiAtIDEpID49IDApIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3NTdGVwcHJldmlvdXMoKTtcbiAgICAgIHRoaXMucG9zaXRpb24tLTtcbiAgICAgIHRoaXMuY2hhbmdlQ2libGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHByb2dyZXNzU3RlcE5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPCB0aGlzLnJvdW5kcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucm91bmRzW3RoaXMucG9zaXRpb25dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIHByb2dyZXNzU3RlcHByZXZpb3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID4gMCkge1xuICAgICAgdGhpcy5yb3VuZHNbdGhpcy5wb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==