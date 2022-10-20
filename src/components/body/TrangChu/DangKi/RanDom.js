import React from 'react';
function ramdomkitu() {
    return (
        <div className="row">
            <label className="col-form-label fw-bold">Vui lòng nhập kí tự bên dưới</label>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <input type="text" className="form-control" />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <input type="password" disabled className="form-control" />
            </div>
        </div>

    );
}

export default ramdomkitu;