import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { POSITIONS } from "./Enums/positions";
import * as i0 from "@angular/core";
interface ISteps {
    title: string;
    desc: string;
    selector: string;
}
export declare class NgExplainComponent implements OnInit, AfterViewInit {
    progressbar: ElementRef;
    explain: ElementRef;
    steps: ISteps[];
    closeTutorial: EventEmitter<boolean>;
    currentSteps: ISteps;
    currentStepElement: HTMLElement;
    currentStepElementOriginalBorder: string;
    currentStepElementOriginalZindex: string;
    position: number;
    rounds: NodeListOf<HTMLElement>;
    percent: number;
    positions: POSITIONS;
    elementCibling: HTMLElement;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgExplainComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgExplainComponent, "ng-explain", never, { "steps": "steps"; }, { "closeTutorial": "closeTutorial"; }, never, never, false, never>;
}
export {};
