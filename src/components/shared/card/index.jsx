import React from "react";

const Cards = ({ image, title, provider, info = [] }) => {
    return (
        <div className="slot_card_wrapper">
            <div className="slot-card">
                <img
                    src={image}
                    alt={title}
                    className="slot-img"
                />

                <div className="slot-content">
                    <h2>{title}</h2>
                    <h4>{provider}</h4>

                    <div className="card-info">
                        <div className="wrapper">
                            {info.map((infoItem, i) => (
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
    );
};

export default Cards;