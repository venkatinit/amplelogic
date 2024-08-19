import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-migration-process',
  templateUrl: './migration-process.component.html',
  styleUrls: ['./migration-process.component.scss']
})
export class MigrationProcessComponent implements AfterViewInit {
  progressValue: number = 0;
  toggleStyle: boolean = true;
  showMigrationUI: boolean = false;

  @ViewChild('offcanvasBottom') offcanvasElement!: ElementRef;
  private offcanvasInstance!: bootstrap.Offcanvas;

  constructor(public toast: ToastrService) {}

  ngAfterViewInit() {
    if (this.offcanvasElement) {
      this.offcanvasInstance = new bootstrap.Offcanvas(this.offcanvasElement.nativeElement);
    }
  }

  toggleArrow() {
    this.toggleStyle = !this.toggleStyle;
  }

  startMigrationProcess() {
    this.showMigrationUI = true;  
    setTimeout(() => {
      if (this.offcanvasInstance) {
        this.offcanvasInstance.show();  
      }

      this.startProgress();  
    }, 100);  
  }

  startProgress() {
    let interval = setInterval(() => {
      this.progressValue += 0;
      if (this.progressValue >= 100) {
        clearInterval(interval);
        this.progressValue = 100;
        this.showSuccessToast();  
        setTimeout(() => {
          this.closeOffCanvas();  
        }, 500);  
      }
    }, 1000);
  }

  showSuccessToast() {
    this.toast.success("Migration Process successfully Completed!");
  }

  closeOffCanvas() {
    if (this.offcanvasInstance) {
      this.offcanvasInstance.hide();  
    }
    this.showMigrationUI = false;  
    this.resetProgress();  
  }

  resetProgress() {
    this.progressValue = 0;
  }
}
