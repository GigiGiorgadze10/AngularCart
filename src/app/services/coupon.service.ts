import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  coupons = [
    { code: 'DISCOUNT10', discount: 10 },
    { code: 'DISCOUNT20', discount: 20 }
  ];

  applyCoupon(code: string) {
    const coupon = this.coupons.find(coupon => coupon.code === code);
    return coupon ? coupon.discount : 0;
  }
}
