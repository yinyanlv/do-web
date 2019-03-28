import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';

import {JSidebarService} from './sidebar.service';
import {JMatchMediaService} from '../../services/match-media.service';
import {JConfigService} from '../../services/config.service';

@Component({
  selector: 'j-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JSidebarComponent implements OnInit, OnDestroy {

  @Input()
  name: string;

  @Input()
  key: string;

  @Input()
  position: 'left' | 'right';

  @HostBinding('class.open')
  opened: boolean;

  @Input()
  lockedOpen: string;

  @HostBinding('class.locked-open')
  isLockedOpen: boolean;

  @Input()
  foldedWidth: number;

  @Input()
  foldedAutoTriggerOnHover: boolean;

  @HostBinding('class.unfolded')
  unfolded: boolean;

  @Input()
  invisibleOverlay: boolean;

  @Output()
  foldedChanged: EventEmitter<boolean>;

  @Output()
  openedChanged: EventEmitter<boolean>;

  private _folded: boolean;
  private _jConfig: any;
  private _wasActive: boolean;
  private _wasFolded: boolean;
  private _backdrop: HTMLElement | null = null;
  private _player: AnimationPlayer;
  private _unsubscribeAll: Subject<any>;

  @HostBinding('class.animations-enabled')
  private _animationsEnabled: boolean;

  constructor(
    private _animationBuilder: AnimationBuilder,
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _jConfigService: JConfigService,
    private _jMatchMediaService: JMatchMediaService,
    private _jSidebarService: JSidebarService,
    private _mediaObserver: MediaObserver,
    private _renderer: Renderer2
  ) {
    this.foldedAutoTriggerOnHover = true;
    this.foldedWidth = 64;
    this.foldedChanged = new EventEmitter();
    this.openedChanged = new EventEmitter();
    this.opened = false;
    this.position = 'left';
    this.invisibleOverlay = false;

    this._animationsEnabled = false;
    this._folded = false;
    this._unsubscribeAll = new Subject();
  }

  @Input()
  set folded(value: boolean) {
    this._folded = value;

    if (!this.opened) {
      return;
    }

    let sibling;
    let styleRule;

    const styleValue = this.foldedWidth + 'px';

    if (this.position === 'left') {
      sibling = this._elementRef.nativeElement.nextElementSibling;
      styleRule = 'padding-left';
    } else {
      sibling = this._elementRef.nativeElement.previousElementSibling;
      styleRule = 'padding-right';
    }

    if (!sibling) {
      return;
    }

    if (value) {
      this.fold();

      this._renderer.setStyle(this._elementRef.nativeElement, 'width', styleValue);
      this._renderer.setStyle(this._elementRef.nativeElement, 'min-width', styleValue);
      this._renderer.setStyle(this._elementRef.nativeElement, 'max-width', styleValue);

      this._renderer.setStyle(sibling, styleRule, styleValue);
      this._renderer.addClass(this._elementRef.nativeElement, 'folded');
    } else {
      this.unfold();

      this._renderer.removeStyle(this._elementRef.nativeElement, 'width');
      this._renderer.removeStyle(this._elementRef.nativeElement, 'min-width');
      this._renderer.removeStyle(this._elementRef.nativeElement, 'max-width');

      this._renderer.removeStyle(sibling, styleRule);
      this._renderer.removeClass(this._elementRef.nativeElement, 'folded');
    }

    this.foldedChanged.emit(this.folded);
  }

  get folded(): boolean {
    return this._folded;
  }

  ngOnInit(): void {
    this._jConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this._jConfig = config;
      });

    this._jSidebarService.register(this.name, this);

    this._setupVisibility();

    this._setupPosition();

    this._setupLockedOpen();

    this._setupFolded();
  }

  ngOnDestroy(): void {
    if (this.folded) {
      this.unfold();
    }

    this._jSidebarService.unregister(this.name);

    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _setupVisibility(): void {
    this._renderer.setStyle(this._elementRef.nativeElement, 'box-shadow', 'none');
    this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
  }

  private _setupPosition(): void {
    if (this.position === 'right') {
      this._renderer.addClass(this._elementRef.nativeElement, 'right-positioned');
    } else {
      this._renderer.addClass(this._elementRef.nativeElement, 'left-positioned');
    }
  }

  private _setupLockedOpen(): void {
    if (!this.lockedOpen) {
      return;
    }

    this._wasActive = false;

    this._wasFolded = this.folded;

    this._showSidebar();

    this._jMatchMediaService.onMediaChange
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {

        const isActive = this._mediaObserver.isActive(this.lockedOpen);

        if (this._wasActive === isActive) {
          return;
        }

        if (isActive) {
          this.isLockedOpen = true;

          this._showSidebar();

          this.opened = true;

          this.openedChanged.emit(this.opened);

          if (this._wasFolded) {
            this._enableAnimations();

            this.folded = true;

            this._changeDetectorRef.markForCheck();
          }

          this._hideBackdrop();
        } else {
          this.isLockedOpen = false;

          this.unfold();

          this.opened = false;

          this.openedChanged.emit(this.opened);

          this._hideSidebar();
        }

        this._wasActive = isActive;
      });
  }

  private _setupFolded(): void {
    if (!this.folded) {
      return;
    }

    if (!this.opened) {
      return;
    }

    let sibling;
    let styleRule;

    const styleValue = this.foldedWidth + 'px';

    if (this.position === 'left') {
      sibling = this._elementRef.nativeElement.nextElementSibling;
      styleRule = 'padding-left';
    } else {
      sibling = this._elementRef.nativeElement.previousElementSibling;
      styleRule = 'padding-right';
    }

    if (!sibling) {
      return;
    }

    this.fold();

    this._renderer.setStyle(this._elementRef.nativeElement, 'width', styleValue);
    this._renderer.setStyle(this._elementRef.nativeElement, 'min-width', styleValue);
    this._renderer.setStyle(this._elementRef.nativeElement, 'max-width', styleValue);

    this._renderer.setStyle(sibling, styleRule, styleValue);
    this._renderer.addClass(this._elementRef.nativeElement, 'folded');
  }

  private _showBackdrop(): void {
    this._backdrop = this._renderer.createElement('div');

    this._backdrop.classList.add('j-sidebar-overlay');

    if (this.invisibleOverlay) {
      this._backdrop.classList.add('j-sidebar-overlay-invisible');
    }

    this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._backdrop);

    this._player =
      this._animationBuilder
        .build([
          animate('300ms ease', style({opacity: 1}))
        ]).create(this._backdrop);

    this._player.play();

    this._backdrop.addEventListener('click', () => {
        this.close();
      }
    );

    this._changeDetectorRef.markForCheck();
  }

  private _hideBackdrop(): void {
    if (!this._backdrop) {
      return;
    }

    this._player =
      this._animationBuilder
        .build([
          animate('300ms ease', style({opacity: 0}))
        ]).create(this._backdrop);

    this._player.play();

    this._player.onDone(() => {

      if (this._backdrop) {
        this._backdrop.parentNode.removeChild(this._backdrop);
        this._backdrop = null;
      }
    });

    this._changeDetectorRef.markForCheck();
  }

  private _showSidebar(): void {
    this._renderer.removeStyle(this._elementRef.nativeElement, 'box-shadow');

    this._renderer.removeStyle(this._elementRef.nativeElement, 'visibility');

    this._changeDetectorRef.markForCheck();
  }

  private _hideSidebar(delay = true): void {
    const delayAmount = delay ? 300 : 0;

    setTimeout(() => {

      this._renderer.setStyle(this._elementRef.nativeElement, 'box-shadow', 'none');

      this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    }, delayAmount);

    this._changeDetectorRef.markForCheck();
  }

  private _enableAnimations(): void {
    if (this._animationsEnabled) {
      return;
    }

    this._animationsEnabled = true;

    this._changeDetectorRef.markForCheck();
  }

  open(): void {
    if (this.opened || this.isLockedOpen) {
      return;
    }

    this._enableAnimations();

    this._showSidebar();

    this._showBackdrop();

    this.opened = true;

    this.openedChanged.emit(this.opened);

    this._changeDetectorRef.markForCheck();
  }

  close(): void {
    if (!this.opened || this.isLockedOpen) {
      return;
    }

    this._enableAnimations();

    this._hideBackdrop();

    this.opened = false;

    this.openedChanged.emit(this.opened);

    this._hideSidebar();

    this._changeDetectorRef.markForCheck();
  }

  toggleOpen(): void {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.foldedAutoTriggerOnHover) {
      return;
    }

    this.unfoldTemporarily();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.foldedAutoTriggerOnHover) {
      return;
    }

    this.foldTemporarily();
  }

  fold(): void {
    if (this.folded) {
      return;
    }

    this._enableAnimations();

    this.folded = true;

    this._changeDetectorRef.markForCheck();
  }

  unfold(): void {
    if (!this.folded) {
      return;
    }

    this._enableAnimations();

    this.folded = false;

    this._changeDetectorRef.markForCheck();
  }

  toggleFold(): void {
    if (this.folded) {
      this.unfold();
    } else {
      this.fold();
    }
  }

  foldTemporarily(): void {
    if (!this.folded) {
      return;
    }

    this._enableAnimations();

    this.unfolded = false;

    const styleValue = this.foldedWidth + 'px';

    this._renderer.setStyle(this._elementRef.nativeElement, 'width', styleValue);
    this._renderer.setStyle(this._elementRef.nativeElement, 'min-width', styleValue);
    this._renderer.setStyle(this._elementRef.nativeElement, 'max-width', styleValue);

    this._changeDetectorRef.markForCheck();
  }

  unfoldTemporarily(): void {
    if (!this.folded) {
      return;
    }

    this._enableAnimations();

    this.unfolded = true;

    this._renderer.removeStyle(this._elementRef.nativeElement, 'width');
    this._renderer.removeStyle(this._elementRef.nativeElement, 'min-width');
    this._renderer.removeStyle(this._elementRef.nativeElement, 'max-width');

    this._changeDetectorRef.markForCheck();
  }
}
