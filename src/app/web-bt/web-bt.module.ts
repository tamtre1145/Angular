import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { ListAllComponent } from './list-all/list-all.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PhoneComponent } from './list-all/phone/phone.component';
import { LaptopComponent } from './list-all/laptop/laptop.component';
import { PromotionsComponent } from './promotion/promotions/promotions.component';




@NgModule({
  declarations: [HeaderComponent, SlideComponent, ListAllComponent, PromotionComponent, PhoneComponent, LaptopComponent, PromotionsComponent],
  exports:[HeaderComponent, SlideComponent, ListAllComponent, PromotionComponent],
  imports: [
    CommonModule
  ]
})
export class WebBTModule { }
