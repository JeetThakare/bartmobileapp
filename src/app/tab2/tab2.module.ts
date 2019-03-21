import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {AgmCoreModule} from '@agm/core'
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMLYZ_-Km0idjH9mDQg8GATuvNwE1rypA'
    }),
    AgmDirectionModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
