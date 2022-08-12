(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('ng-explain-js', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng-explain-js"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var ExplainjsComponent = /** @class */ (function () {
      function ExplainjsComponent() {
          this.closeTutorial = new i0.EventEmitter();
          this.currentStepElementOriginalBorder = '';
          this.currentStepElementOriginalZindex = '';
          this.position = 0;
          this.rounds = undefined;
          this.percent = 0;
      }
      ExplainjsComponent.prototype.ngOnInit = function () {
          this.currentSteps = this.steps[this.position];
          this.changeCibling();
      };
      ExplainjsComponent.prototype.ngAfterViewInit = function () {
          this.initProgressRound();
      };
      ExplainjsComponent.prototype.close = function () {
          this.reInitOriginCibling();
          this.closeTutorial.emit(true);
      };
      ExplainjsComponent.prototype.changeCibling = function () {
          this.reInitOriginCibling();
          this.currentSteps = this.steps[this.position];
          this.currentStepElement = document.querySelector(this.currentSteps.selector);
          var currentStepStyle = this.currentStepElement.style;
          this.currentStepElementOriginalBorder = currentStepStyle.border;
          this.currentStepElementOriginalZindex = currentStepStyle.zIndex;
          currentStepStyle.zIndex = '1001';
      };
      ExplainjsComponent.prototype.reInitOriginCibling = function () {
          if (this.currentStepElement) {
              this.currentStepElement.style.border = this.currentStepElementOriginalBorder;
              this.currentStepElement.style.zIndex = this.currentStepElementOriginalZindex;
              this.currentStepElement.style.zIndex;
          }
      };
      ExplainjsComponent.prototype.initProgressRound = function () {
          this.rounds = document.querySelectorAll('.progress-round');
          this.rounds[0].classList.add('active');
      };
      ExplainjsComponent.prototype.nextStep = function () {
          if ((this.position + 1) < this.steps.length) {
              this.position++;
              this.changeCibling();
              this.progressStepNext();
          }
          else {
              this.close();
          }
      };
      ExplainjsComponent.prototype.previousStep = function () {
          if ((this.position - 1) >= 0) {
              this.progressStepprevious();
              this.position--;
              this.changeCibling();
          }
      };
      ExplainjsComponent.prototype.progressStepNext = function () {
          if (this.position < this.rounds.length) {
              this.rounds[this.position].classList.add('active');
          }
      };
      ExplainjsComponent.prototype.progressStepprevious = function () {
          if (this.position > 0) {
              this.rounds[this.position].classList.remove('active');
          }
      };
      ExplainjsComponent.prototype.passeAuSuivant = function () { };
      return ExplainjsComponent;
  }());
  ExplainjsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: ExplainjsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ExplainjsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.1", type: ExplainjsComponent, selector: "app-explainjs", inputs: { steps: "steps" }, outputs: { closeTutorial: "closeTutorial" }, viewQueries: [{ propertyName: "progressbar", first: true, predicate: ["progressbar"], descendants: true }], ngImport: i0__namespace, template: "\n    <div class=\"overlay\"></div>\n    <div class=\"explain-wrapper\" *ngIf=\"steps\">\n      <p class=\"explain-close\" (click)=\"close()\">x</p>\n      <div class=\"explain-text-content\">\n        <h3>{{ currentSteps.title }}</h3>\n        <p>{{ currentSteps.desc }}</p>\n      </div>\n      <div class=\"explain-progression-container\">\n        <div class=\"explain-progression-dots\" #progressbar>\n          <div class=\"progress-round\" *ngFor=\"let step of steps; let i = index\"></div>\n        </div>\n        <div class=\"explain-progression-buttons\">\n          <button class=\"btn previous\" (click)=\"previousStep()\">Pr\u00E9c\u00E9dent</button>\n          <button class=\"btn next\" (click)=\"nextStep()\">Suivant</button>\n        </div>\n      </div>\n    </div>\n  ", isInline: true, styles: [":root{--progress-width: 0}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#00000091}.explain-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:30rem;min-height:28rem;padding:2.5rem 3.5rem;overflow:hidden;text-overflow:clip;background-color:#fff;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;border-radius:1rem;text-align:center;z-index:10002}.explain-text-content{margin-top:1rem}.explain-text-content>h3{margin-bottom:2rem;color:#220f3cbf}.explain-text-content>p{line-height:1.7}.explain-progression-container{display:flex;flex-direction:column;align-items:center;margin-top:3rem}.explain-progression-container>.explain-progression-buttons>.btn{width:7rem;color:#fff;font-weight:bold}.explain-progression-container>.explain-progression-buttons>.next{background-color:#220f3c}.explain-progression-container>.explain-progression-buttons>.previous{margin-right:2rem;background-color:#220f3c6b}.explain-progression-container>.explain-progression-dots{display:flex;justify-content:space-between;position:relative;width:9rem;max-width:100%;margin-bottom:2rem}.explain-progression-container>.explain-progression-dots>.progress-round{height:.8rem;width:.8rem;background-color:#efefeff7;transition:.6s ease-in-out;border-radius:50%}.explain-progression-container>.explain-progression-dots>.progress-round.active{background-color:#ff407f}.progress-round:first-child{background-color:#ff407f}.explain-wrapper>.explain-close{display:flex;justify-content:center;align-items:center;position:absolute;top:12px;right:12px;height:.8rem;width:.8rem;padding:.8rem;cursor:pointer;background-color:#a29aad;border-radius:50%;color:#fff;font-size:.8rem}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: ExplainjsComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'app-explainjs',
                      template: "\n    <div class=\"overlay\"></div>\n    <div class=\"explain-wrapper\" *ngIf=\"steps\">\n      <p class=\"explain-close\" (click)=\"close()\">x</p>\n      <div class=\"explain-text-content\">\n        <h3>{{ currentSteps.title }}</h3>\n        <p>{{ currentSteps.desc }}</p>\n      </div>\n      <div class=\"explain-progression-container\">\n        <div class=\"explain-progression-dots\" #progressbar>\n          <div class=\"progress-round\" *ngFor=\"let step of steps; let i = index\"></div>\n        </div>\n        <div class=\"explain-progression-buttons\">\n          <button class=\"btn previous\" (click)=\"previousStep()\">Pr\u00E9c\u00E9dent</button>\n          <button class=\"btn next\" (click)=\"nextStep()\">Suivant</button>\n        </div>\n      </div>\n    </div>\n  ",
                      styleUrls: ['../../assets/styles.css'],
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { progressbar: [{
                  type: i0.ViewChild,
                  args: ['progressbar']
              }], steps: [{
                  type: i0.Input
              }], closeTutorial: [{
                  type: i0.Output
              }] } });

  var ExplainjsModule = /** @class */ (function () {
      function ExplainjsModule() {
      }
      return ExplainjsModule;
  }());
  ExplainjsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: ExplainjsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  ExplainjsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: ExplainjsModule, declarations: [ExplainjsComponent], imports: [i1.CommonModule], exports: [ExplainjsComponent] });
  ExplainjsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: ExplainjsModule, imports: [[
              i1.CommonModule,
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: ExplainjsModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          ExplainjsComponent,
                      ],
                      imports: [
                          i1.CommonModule,
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

  exports.ExplainjsComponent = ExplainjsComponent;
  exports.ExplainjsModule = ExplainjsModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-explain-js.umd.js.map
