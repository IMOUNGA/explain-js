import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ExplainjsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbGFpbmpzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZXhwbGFpbmpzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQXlCbkgsTUFBTSxPQUFPLGtCQUFrQjtJQWE3QjtRQVZVLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJcEUscUNBQWdDLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLHFDQUFnQyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBR1osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFnQixDQUFDO1FBQzVGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDaEUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztZQUM3RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRCxjQUFjLEtBQVUsQ0FBQzs7K0dBdkZkLGtCQUFrQjttR0FBbEIsa0JBQWtCLDBPQXJCbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDsyRkFHVSxrQkFBa0I7a0JBdkI5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdkM7MEVBRTJCLFdBQVc7c0JBQXBDLFNBQVM7dUJBQUMsYUFBYTtnQkFDZixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWV4cGxhaW5qcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpbi13cmFwcGVyXCIgKm5nSWY9XCJzdGVwc1wiPlxuICAgICAgPHAgY2xhc3M9XCJleHBsYWluLWNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj54PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4tdGV4dC1jb250ZW50XCI+XG4gICAgICAgIDxoMz57eyBjdXJyZW50U3RlcHMudGl0bGUgfX08L2gzPlxuICAgICAgICA8cD57eyBjdXJyZW50U3RlcHMuZGVzYyB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4cGxhaW4tcHJvZ3Jlc3Npb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHBsYWluLXByb2dyZXNzaW9uLWRvdHNcIiAjcHJvZ3Jlc3NiYXI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXJvdW5kXCIgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHBsYWluLXByb2dyZXNzaW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZpb3VzU3RlcCgpXCI+UHLDqWPDqWRlbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIG5leHRcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPlN1aXZhbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uLy4uL2Fzc2V0cy9zdHlsZXMuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGxhaW5qc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3Byb2dyZXNzYmFyJykgcHJvZ3Jlc3NiYXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHN0ZXBzOiB7IHRpdGxlOiBzdHJpbmc7IGRlc2M6IHN0cmluZzsgc2VsZWN0b3I6IHN0cmluZyB9W107XG4gIEBPdXRwdXQoKSBjbG9zZVR1dG9yaWFsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY3VycmVudFN0ZXBzOiB7IHRpdGxlOiBzdHJpbmc7IGRlc2M6IHN0cmluZzsgc2VsZWN0b3I6IHN0cmluZyB9O1xuICBjdXJyZW50U3RlcEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbEJvcmRlciA9ICcnO1xuICBjdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbFppbmRleCA9ICcnO1xuICBwb3NpdGlvbiA9IDA7XG4gIHJvdW5kcyA9IHVuZGVmaW5lZDtcbiAgcGVyY2VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwcyA9IHRoaXMuc3RlcHNbdGhpcy5wb3NpdGlvbl07XG5cbiAgICB0aGlzLmNoYW5nZUNpYmxpbmcoKTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFByb2dyZXNzUm91bmQoKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMucmVJbml0T3JpZ2luQ2libGluZygpO1xuICAgIHRoaXMuY2xvc2VUdXRvcmlhbC5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2hhbmdlQ2libGluZygpOiB2b2lkIHtcbiAgICB0aGlzLnJlSW5pdE9yaWdpbkNpYmxpbmcoKTtcblxuICAgIHRoaXMuY3VycmVudFN0ZXBzID0gdGhpcy5zdGVwc1t0aGlzLnBvc2l0aW9uXTtcblxuICAgIHRoaXMuY3VycmVudFN0ZXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmN1cnJlbnRTdGVwcy5zZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY3VycmVudFN0ZXBTdHlsZSA9IHRoaXMuY3VycmVudFN0ZXBFbGVtZW50LnN0eWxlO1xuICAgIHRoaXMuY3VycmVudFN0ZXBFbGVtZW50T3JpZ2luYWxCb3JkZXIgPSBjdXJyZW50U3RlcFN0eWxlLmJvcmRlcjtcbiAgICB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudE9yaWdpbmFsWmluZGV4ID0gY3VycmVudFN0ZXBTdHlsZS56SW5kZXg7XG4gICAgY3VycmVudFN0ZXBTdHlsZS56SW5kZXggPSAnMTAwMSc7XG4gIH1cblxuICByZUluaXRPcmlnaW5DaWJsaW5nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwRWxlbWVudCkge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gdGhpcy5jdXJyZW50U3RlcEVsZW1lbnRPcmlnaW5hbEJvcmRlcjtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBFbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuY3VycmVudFN0ZXBFbGVtZW50T3JpZ2luYWxaaW5kZXg7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwRWxlbWVudC5zdHlsZS56SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgaW5pdFByb2dyZXNzUm91bmQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3Jlc3Mtcm91bmQnKTtcbiAgICB0aGlzLnJvdW5kc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuXG4gIG5leHRTdGVwKCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5wb3NpdGlvbiArIDEpIDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24rKztcbiAgICAgIHRoaXMuY2hhbmdlQ2libGluZygpO1xuICAgICAgdGhpcy5wcm9ncmVzc1N0ZXBOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91c1N0ZXAoKTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnBvc2l0aW9uIC0gMSkgPj0gMCkge1xuICAgICAgdGhpcy5wcm9ncmVzc1N0ZXBwcmV2aW91cygpO1xuICAgICAgdGhpcy5wb3NpdGlvbi0tO1xuICAgICAgdGhpcy5jaGFuZ2VDaWJsaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvZ3Jlc3NTdGVwTmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA8IHRoaXMucm91bmRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yb3VuZHNbdGhpcy5wb3NpdGlvbl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJvZ3Jlc3NTdGVwcHJldmlvdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPiAwKSB7XG4gICAgICB0aGlzLnJvdW5kc1t0aGlzLnBvc2l0aW9uXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwYXNzZUF1U3VpdmFudCgpOiB2b2lkIHt9XG59XG4iXX0=