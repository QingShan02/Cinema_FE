import React from 'react';
function HinhThuc() {
    return (   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    
    <form action="/" method="POST" role="form">
  <legend>Hình thức thanh toán</legend>
  <div className="form-group">
    <label htmlFor="ht">Ngân hàng</label>
    
    <div className="radio">
  <label>
    <input type="radio" name="ht" id="inputht" defaultValue="NCB" defaultChecked="checked" />
    NCB
  </label>
</div>

    
  </div>
</form>

    
</div>);
}

export default HinhThuc;