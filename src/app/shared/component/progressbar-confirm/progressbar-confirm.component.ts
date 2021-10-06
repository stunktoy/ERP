import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AppOverlayConfig, OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-progressbar-confirm',
  templateUrl: './progressbar-confirm.component.html',
  styleUrls: ['./progressbar-confirm.component.scss']
})

/** Component that will be used for every api request and will display a indeterminate progress bar with overlay called from overlay service.*/
export class ProgressBarConfirmComponent implements OnInit {

  /** Variable that will be used whether the component should be use and display. */
  @Input() displayProgressBar: boolean;

  @ViewChild('progressBarRef', { static: true })
  
  private progressBarRef: TemplateRef<any>;
  private progressBarOverlayConfig: AppOverlayConfig;
  private overlayRef: OverlayRef;

  constructor(private _viewContainerRef: ViewContainerRef, private _overlayService: OverlayService) { }

  ngOnInit(): void {

    /** Configuration of overlay backdrop (black background) is set to true as initial */
    this.progressBarOverlayConfig = {
      hasBackdrop: true
    };

    this.progressBarOverlayConfig['positionStrategy'] = this._overlayService.positionGloballyCenter();

    /** Create an overlay for progress bar*/
    this.overlayRef = this._overlayService.createOverlay(this.progressBarOverlayConfig);
  }

  ngDoCheck() {
    /** Verify the status of displayProgressBar and whether the overlay is attached or detached overlay to load the progress bar template*/

    if (this.displayProgressBar && !this.overlayRef.hasAttached()) {
      
      this._overlayService.attachTemplatePortal(this.overlayRef, this.progressBarRef, this._viewContainerRef);

    } else if (!this.displayProgressBar && this.overlayRef.hasAttached()) {

      this.overlayRef.detach();
    }
  }

}
