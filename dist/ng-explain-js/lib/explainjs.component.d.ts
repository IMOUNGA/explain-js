import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ExplainjsComponent implements OnInit, AfterViewInit {
    progressbar: ElementRef;
    steps: {
        title: string;
        desc: string;
        selector: string;
    }[];
    closeTutorial: EventEmitter<boolean>;
    currentSteps: {
        title: string;
        desc: string;
        selector: string;
    };
    currentStepElement: HTMLElement;
    currentStepElementOriginalBorder: string;
    currentStepElementOriginalZindex: string;
    position: number;
    rounds: any;
    percent: number;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    close(): void;
    changeCibling(): void;
    reInitOriginCibling(): void;
    initProgressRound(): void;
    nextStep(): void;
    previousStep(): void;
    progressStepNext(): void;
    progressStepprevious(): void;
    passeAuSuivant(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExplainjsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExplainjsComponent, "app-explainjs", never, { "steps": "steps"; }, { "closeTutorial": "closeTutorial"; }, never, never>;
}
