import {ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ExplainjsComponent} from './explainjs.component';
import {ComponentPortal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ExplainjsService {
  private steps: [];

  componentFactory: ComponentFactory<ExplainjsComponent>;
  portal: ComponentPortal<any>;
  component: ComponentRef<ExplainjsComponent>;

  constructor(private cfr: ComponentFactoryResolver, private overlay: Overlay) {
  }

  initComponentFactory(): void {
    this.componentFactory = this.cfr.resolveComponentFactory(ExplainjsComponent);
    const overlayRef = this.overlay.create(
      {
        hasBackdrop: true,
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      },
    );
    overlayRef.backdropClick().subscribe(res => {
      overlayRef.detach();
    });

    this.portal = new ComponentPortal(this.componentFactory.componentType);
    this.component = overlayRef.attach<ExplainjsComponent>(this.portal);
  }

  public push(newSteps: any): void {
    this.steps = newSteps;
  }

  getSteps(): [] {
    return this.steps;
  }

  displayExplain(whichPage: string): void {
    this.initComponentFactory();
  }

  passeAuSuivant(): void {
    this.component.instance.passeAuSuivant();
  }
}
