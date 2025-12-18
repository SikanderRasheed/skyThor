import React from 'react'
import Banner from '../../components/Banner/Banner'
import CustomTabs from '../../components/shared/tabs'
import Promotion from '../../components/Promotion/Promotion'
import Winner from '../../components/Winner/Winner'
// Images
import Tab1 from "../../assets/images/tabs1.webp"
import Tab2 from "../../assets/images/tab2.webp"
import Tab3 from "../../assets/images/tab3.svg"
import Tab4 from "../../assets/images/tab4.webp"
import Tab5 from "../../assets/images/tab5.webp"
import Tab6 from "../../assets/images/tab6.webp"
import Tab7 from "../../assets/images/tab7.webp"
import Tab8 from "../../assets/images/tab8.webp"
import Tab9 from "../../assets/images/tab9.webp"
import Tab10 from "../../assets/images/tab10.webp"
import Tab11 from "../../assets/images/tab11.webp"
import Tab12 from "../../assets/images/tab12.webp"
import Tab13 from "../../assets/images/tab13.png"
// Images
import Card1 from "../../assets/images/card1.webp"
import Card2 from "../../assets/images/card2.webp"
import Card3 from "../../assets/images/card3.webp"
import Card4 from "../../assets/images/card4.webp"

const casino = () => {
    const items = [
        {
            key: "top",
            label: "TOP",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "new",
            label: "NEW",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "exclusive",
            label: "EXCLUSIVES",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab13}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "jackpots",
            label: "Jackpots",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "tournaments",
            label: "Tournaments",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "megaways",
            label: "Megaways",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "hold_and_win",
            label: "Hold and Win",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "crash_games",
            label: "Crash Games",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "video_bingo",
            label: "Video Bingo",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-4">
                            <Cards
                                image={Tab1}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab2}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab3}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab4}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab5}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab6}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab7}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab8}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <Cards
                                        image={Tab9}
                                        title="Valley Of The Gods"
                                        provider="Yggdrasil Gaming"
                                        info={
                                            [
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Reels", value: "6" },
                                                { label: "Lines", value: "25" },
                                                { label: "RTP", value: "96%" },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab11}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab12}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab3}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: "other",
            label: "Other",
            children: (
                <>
                    <div className="row">
                        <div className="col-lg-2">
                            <Cards
                                image={Tab2}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab10}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab4}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab5}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab6}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab7}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab8}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                        <div className="col-lg-2">
                            <Cards
                                image={Tab9}
                                title="Valley Of The Gods"
                                provider="Yggdrasil Gaming"
                                info={
                                    [
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Reels", value: "6" },
                                        { label: "Lines", value: "25" },
                                        { label: "RTP", value: "96%" },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </>
            ),
        },
    ];

    // Promotion 
    const promotionCardContent = {
        title: "Promotions",
        card: [
            {
                image: Card1,
                timer: false,
                timerHeading: "Starting",
                sharedBtn: true,
                overlay: true,
            },
            {
                image: Card2,
                timer: false,
                timerHeading: "Starting",
                sharedBtn: true,
                overlay: true,
            },
            {
                image: Card1,
                timer: false,
                timerHeading: "Starting",
                sharedBtn: true,
                overlay: true,
            },
            {
                image: Card2,
                timer: false,
                timerHeading: "Starting",
                sharedBtn: true,
                overlay: true,
            },
            {
                image: Card1,
                timer: true,
                timerHeading: "Starting",
                sharedBtn: true,
                overlay: true,
            },
            {
                image: Card2,
                timer: false,
                timerHeading: "Starting",
                sharedBtn: true,
                overlay: true,
            }
        ]
    }
    // Tournament 
    const tournamentCardContent = {
        title: "Tournaments",
        card: [
            {
                image: Card3,
                timer: true,
                timerHeading: "Ending",
                sharedBtn: true,
                overlay: false,
            },
            {
                image: Card4,
                timer: true,
                timerHeading: "Ending",
                sharedBtn: true,
                overlay: false,
            },
            {
                image: Card3,
                timer: true,
                timerHeading: "Ending",
                sharedBtn: true,
                overlay: false,
            },
            {
                image: Card4,
                timer: true,
                timerHeading: "Ending",
                sharedBtn: true,
                overlay: false,
            },
            {
                image: Card3,
                timer: true,
                timerHeading: "Ending",
                sharedBtn: true,
                overlay: false,
            },
            {
                image: Card4,
                timer: true,
                timerHeading: "Ending",
                sharedBtn: false,
                overlay: false,
            }
        ]
    }
    return (
        <>
            <Banner />
            <CustomTabs items={items} className="my-add-tabs" />
            <Promotion data={promotionCardContent} />
            <Promotion data={tournamentCardContent} />
            <Winner />
        </>
    )
}

export default casino
