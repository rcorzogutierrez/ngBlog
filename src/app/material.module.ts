import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatCardModule, 
  MatButtonModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatProgressSpinnerModule, 
  MatDividerModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
  
} from '@angular/material';



const myModule = [MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, 
  MatSidenavModule, MatListModule,MatProgressSpinnerModule,MatDividerModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, myModule
  ],
  exports:[ myModule]
})
export class MaterialModule { }
