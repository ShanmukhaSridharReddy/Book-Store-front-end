import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SEARCH_ICON,OPEN_BOOK_ICON, PROFILE_ICON,CART_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private iconRegistry:MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconLiteral("search-icon",sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("open-book-icon",sanitizer.bypassSecurityTrustHtml(OPEN_BOOK_ICON))
    iconRegistry.addSvgIconLiteral("profile-icon",sanitizer.bypassSecurityTrustHtml(PROFILE_ICON))
    iconRegistry.addSvgIconLiteral("cart-icon",sanitizer.bypassSecurityTrustHtml(CART_ICON))
  }

  ngOnInit(): void {
  }

}
