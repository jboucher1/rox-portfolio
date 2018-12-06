import { Component, Input, HostListener } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent {

  @Input() icon: string;
  @Input() iconSrc: string;
  @Input() label: string;
  @Input() copyText: string;
  onHover: string;

  constructor(
    private clipboard: ClipboardService,
    private snackBar: MatSnackBar) { }

  @HostListener('click')
  onClick(): void {
    this.snackBar.open(`"${this.copyText}" has been copyied to your clipboard.`, '', {
      duration: 2000
    })
    this.clipboard.copyFromContent(this.copyText)
    this.onHover = ''
  }
  @HostListener('mouseover')
  onmouseover(){
    this.onHover = 'content_copy'
  }
  @HostListener('mouseout')
  onmouseout(){
    this.onHover = ''
  }
}
