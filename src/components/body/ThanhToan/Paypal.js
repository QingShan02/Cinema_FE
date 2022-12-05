import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect } from 'react';
function Paypal({price, showSpinner, success }) {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    // console.log(price);
    // useEffect(() => {
    //     dispatch({
    //         type: "resetOptions",
    //         value: {
    //             ...options,
    //             currency: currency,
    //         },
    //     });
    // }, [currency, showSpinner]);
    return (<td colSpan={5}>
     { (showSpinner && isPending) && <div className="spinner" /> }
        <PayPalButtons
             style={{"layout":"vertical"}}
             disabled={false}
            //  forceReRender={[30, currency, {"layout":"vertical"}]}
             fundingSource={undefined}
            createOrder={(data, actions) => {
                return actions.order.create({
                        // intent: 'CAPTURE',
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "USD",
                                    value: price
                                },
                                description: 'xxxxxxxxxxx'
                                // shipping: {
                                //     options: [
                                //         {
                                //             id: "SHIP_123",
                                //             label: "Free Shipping",
                                //             type: "SHIPPING",
                                //             selected: true,
                                //             amount: {
                                //                 value: "3.00",
                                //                 currency_code: "USD"
                                //             }
                                //         },
                                //         {
                                //             id: "SHIP_456",
                                //             label: "Pick up in Store",
                                //             type: "PICKUP",
                                //             selected: false,
                                //             amount: {
                                //                 value: "0.00",
                                //                 currency_code: "USD"
                                //             }
                                //         }
                                //     ]
                                // }
                            },
                        ],

                    })
                    .then((orderId) => {
                        console.log(orderId);
                        return orderId;
                    })
            }}
            onApprove={function (data, actions) {
                // console.log(data,actions);
                return actions.order.capture().then(function (orderData) {
                    if(orderData.status === "COMPLETED"){
                        success();
                    }
                });
            }}/>
    </td>
    );
}

export default Paypal;