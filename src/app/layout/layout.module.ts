import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './dashboard-layout/navigation-bar/navigation-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NavbarComponent } from '../components';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [NavigationBarComponent, LoginLayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    NavbarComponent,
    MatInputModule,
    ReactiveFormsModule,
    AuthModule
  ],
  exports: [NavigationBarComponent]
})
export class LayoutModule { }
