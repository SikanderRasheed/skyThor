import React from 'react'
import Tabs from '../../components/Tabs/Tabs'
import SportsTabs from '../../components/SportsTabs/SportsTabs'
import LeagueTabs from '../../components/LeagesTabs/LeagesTabs'
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu'
import SideBarSearch from '../../components/SideBarSearch/SideBarSearch'
import Format from '../../components/Format/Format'
import LiveStreaming from '../../components/LiveStreaming/LiveStreaming'
import BestSlip from '../../components/BestSlip/BestSlip'
import PopularBets from '../../components/PopularBets/PopularBets'
import Match from '../../components/Match/Match'
import SportsSlider from '../../components/SportsSlider/SportsSlider'
import Live from '../../components/Live/Live'
// Images
import Card1 from "../../assets/images/card1.webp"
import Card2 from "../../assets/images/card2.webp"
import Card3 from "../../assets/images/card3.webp"
import Card4 from "../../assets/images/card4.webp"
import Promotion from '../../components/Promotion/Promotion'
import Winner from '../../components/Winner/Winner'

const Overview = () => {
    // Promotion 
    const promotionCardContent = {
        sectionId: "promotions",
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
        sectionId: "tournament",
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
            <div>
                <div className="px-3 py-2">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <Tabs />
                            <SportsTabs />
                            <LeagueTabs />
                            <SideBarSearch />
                            <SideBarMenu />
                            <Format />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Match />
                            <SportsSlider />
                            <Live />
                        </div>
                        <div className="col-lg-3 col-12">
                            <LiveStreaming />
                            <BestSlip />
                            <PopularBets />
                        </div>
                    </div>
                </div>
            </div>
            <Promotion data={promotionCardContent} />
            <Promotion data={tournamentCardContent} />
            <Winner />
        </>
    )
}

export default Overview
