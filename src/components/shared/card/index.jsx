// import React from 'react'
// // Images
// import Tab1 from "../../../assets/images/tabs1.webp"

// const Cards = () => {
//     return (
//         <div>
//             <div className="slot_card_wrapper">
//                 <div className="slot-card">
//                     <img src={Tab1} alt="tab" className="slot-img" />

//                     <div className="slot-content">
//                         <h2>Valley Of The Gods</h2>
//                         <h4>Yggdrasil Gaming</h4>

//                         <div className="card-info">
//                             <div className="d-flex align-items-center gap-1">
//                                 <div className="wrapper">
//                                     <div className="info">
//                                         <p className='text-black f-14 f600 text-left mb-0'>Reels</p>
//                                         <p className='text-yellow f-14 f600 text-left mb-0'>6</p>
//                                     </div>
//                                     <div className="info">
//                                         <p className='text-black f-14 f600 text-left mb-0'>Reels</p>
//                                         <p className='text-yellow f-14 f600 text-left mb-0'>6</p>
//                                     </div>
//                                     <div className="info">
//                                         <p className='text-black f-14 f600 text-left mb-0'>Reels</p>
//                                         <p className='text-yellow f-14 f600 text-left mb-0'>6</p>
//                                     </div>
//                                 </div>
//                                 <div className="wrapper">
//                                     <div className="info">
//                                         <p className='text-black f-14 f600 text-left mb-0'>Reels</p>
//                                         <p className='text-yellow f-14 f600 text-left mb-0'>6</p>
//                                     </div>
//                                     <div className="info">
//                                         <p className='text-black f-14 f600 text-left mb-0'>Reels</p>
//                                         <p className='text-yellow f-14 f600 text-left mb-0'>6</p>
//                                     </div>
//                                     <div className="info">
//                                         <p className='text-black f-14 f600 text-left mb-0'>Reels</p>
//                                         <p className='text-yellow f-14 f600 text-left mb-0'>6</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cards

import React from 'react';

const Cards = ({ data }) => {
    return (
        <div className="slot_card_wrapper">
            <div className="row">
                {data.map((item, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="slot-card">
                            <img src={item.image} alt="tab" className="slot-img" />

                            <div className="slot-content">
                                <h2>{item.title}</h2>
                                <h4>{item.provider}</h4>

                                <div className="card-info">
                                    <div className="d-flex gap-3">
                                        {item.info.map((infoItem, i) => (
                                            <div className="info" key={i}>
                                                <p className="text-black f-14 f600 mb-0">
                                                    {infoItem.label}
                                                </p>
                                                <p className="text-yellow f-14 f600 mb-0">
                                                    {infoItem.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
