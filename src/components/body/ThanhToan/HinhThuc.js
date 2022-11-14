import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import Paypal from './Paypal';
function HinhThuc() {
  
  return (

    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

      <form action="/" method="POST" role="form">
        <legend>Hình thức thanh toán</legend>
        <div className="form-group">

          <div className="radio">
            <label>
              <input type="radio" name="ht" id="inputht" defaultValue="NCB" defaultChecked="checked" />
              Thẻ <i className="fa fa-id-card" aria-hidden="true"></i>
            </label>
            <div className="radio">
              <label>
                <input type="radio" name="ht" id="inputhtt" defaultValue="NCB" defaultChecked="checked" />
                Tiền mặt <i className="fa fa-money" aria-hidden="true"></i>
              </label>
            </div>

          </div>

        </div>
      </form>


    </div>
  );
}

export default HinhThuc;