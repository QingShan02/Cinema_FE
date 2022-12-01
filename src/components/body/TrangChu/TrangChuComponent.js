import React from 'react';
import ChuyenDe from './ChuyenDe';
function TrangChuComponent(props) {

    return (
        <div className="container">
            <ChuyenDe title="Phim đang chiếu" />
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Open modal
            </button>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Modal body..
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div> */}
            {/* <ChuyenDe title="Phim đang công chiếu"/> */}
        </div>
    );
}

export default TrangChuComponent;

// class TrangChuComponent extends React.Component {
//     constructor(props) {
//         // super(props);
//         this.state = { data: [] };
//     }
//     componentWillMount() {
//         this.setState({
//             data: [
//                 { id: 1, title: 'Phim 1', mota: 'Mô tả' },
//                 { id: 2, title: 'Phim 2', mota: 'Mô tả' },
//                 { id: 3, title: 'Phim 3', mota: 'Mô tả' },
//                 { id: 4, title: 'Phim 4', mota: 'Mô tả' },
//                 { id: 5, title: 'Phim 5', mota: 'Mô tả' },
//                 { id: 6, title: 'Phim 6', mota: 'Mô tả' },
//                 { id: 7, title: 'Phim 7', mota: 'Mô tả' },
//                 { id: 8, title: 'Phim 8', mota: 'Mô tả' }
//             ]
//         });
//     }
//     render() {
//         // const a = this.state.data.map((s) => {

//         //     return <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 mb-2 shadow-sm'>
//         //         <div className="card" >
//         //             <img className="card-img-top " src="https://zingtv-photo.zmdcdn.me/tv_program_445_445/e/4/e4c33de5d505df18a117935ee48acbd7_1504865052.jpg" alt="Card image cap" />
//         //             <div className="card-body">
//         //                 <h5 className="card-title">{s.title}</h5>
//         //                 <p className="card-text">{s.mota}</p>
//         //                 <a href="#" className="btn btn-primary">Xem thêm</a>
//         //             </div>
//         //         </div>
//         //     </div>
//         //         ;
//         // });
//         return (
//             <div className="panel panel-default">
//                 <div className="panel-heading">
//                     <h3 className="panel-title">Phim sắp ra mắt</h3>
//                 </div>
//                 <hr />
//                 <div className="panel-body">
//                     <div className="row">
//                         {/* <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> */}
//                         {/* {a} */}
//                         {/* </div> */}
//                     </div>
//                 </div>
//                 <a className="btn" id="1" class="btn btn-primary float-right" href="#" role="button">Xem thêm..</a>
//             </div>
//         );
//     }
// }

// export default TrangChuComponent;