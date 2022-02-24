import { EventEmitter, OnInit } from '@angular/core';
import { InlinePaymentOptions, PaymentSuccessResponse } from '../models';
import { Flutterwave } from '../flutterwave.service';
import * as i0 from "@angular/core";
export declare class MakePaymentComponent implements OnInit {
    private flutterwave;
    public_key: string;
    tx_ref: string;
    amount: number;
    currency: string;
    payment_options: string;
    payment_plan: string | number;
    subaccounts: any;
    integrity_hash: any;
    redirect_url: string;
    meta: object;
    customer: object;
    callback: EventEmitter<PaymentSuccessResponse>;
    close: EventEmitter<any>;
    customizations: object;
    text: string;
    style: any;
    className: string;
    data: InlinePaymentOptions;
    private inlinePaymentOptions;
    customer_defaults: {
        email: string;
        phone_number: string;
        name: string;
    };
    meta_defaults: {
        consumer_id: string;
        consumer_mac: string;
    };
    customizations_defaults: {
        title: string;
        description: string;
        logo: string;
    };
    constructor(flutterwave: Flutterwave);
    ngOnInit(): void;
    makePayment(): void;
    prepareForPayment(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MakePaymentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MakePaymentComponent, "flutterwave-make-payment", never, { "public_key": "public_key"; "tx_ref": "tx_ref"; "amount": "amount"; "currency": "currency"; "payment_options": "payment_options"; "payment_plan": "payment_plan"; "subaccounts": "subaccounts"; "integrity_hash": "integrity_hash"; "redirect_url": "redirect_url"; "meta": "meta"; "customer": "customer"; "customizations": "customizations"; "text": "text"; "style": "style"; "className": "className"; "data": "data"; }, { "callback": "callback"; "close": "close"; }, never, never>;
}
