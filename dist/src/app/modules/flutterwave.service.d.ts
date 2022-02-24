import { AsyncPaymentOptions, InlinePaymentOptions, PaymentSuccessResponse } from './models';
import { ApiTracking } from './api-tracking.service';
import * as i0 from "@angular/core";
export declare class Flutterwave {
    private tracker;
    constructor(tracker: ApiTracking);
    inlinePay(paymentData: InlinePaymentOptions): void;
    asyncInlinePay(paymentData: AsyncPaymentOptions | any): Promise<PaymentSuccessResponse | 'closed'>;
    submitToTracker(paymentData: any, response: any, responseTime: any): void;
    /**
     *
     * @param waitDuration {Number} Seconds before closing payment modal
     */
    closePaymentModal(waitDuration?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Flutterwave, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Flutterwave>;
}
