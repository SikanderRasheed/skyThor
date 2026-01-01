import React from 'react'
import { FaFutbol, FaSignal } from 'react-icons/fa';
import Slider from 'react-slick';
// Images
import TeamOne from "../../assets/images/icons/teamOne.png"
import TeamTwo from "../../assets/images/icons/teamTwo.png"
import LeagueImage1 from "../../assets/images/icons/leagueImage1.svg"

const MatchData = [
    {
        live: false,
        teamOne: "Blackburn Rovers",
        teamTwo: "Wrexham",
        teamOneKit: TeamOne,
        teamTwoKit: TeamTwo,
        teamOneScore: "1",
        teamTwoScore: "0",
        teamsKit: true,
        leagueImage: LeagueImage1,
        leagueName: "Championship",
        time: "17'",
        MarketData: [
            {
                id: "home",
                label: "1",
                team: "Blackburn Rovers",
                odds: 4.90
            },
            {
                id: "draw",
                label: "X",
                team: "Draw",
                odds: 3.50
            },
            {
                id: "away",
                label: "2",
                team: "Wrexham",
                odds: 1.75
            }
        ]
    },
    {
        live: false,
        teamOne: "Blackburn Rovers",
        teamTwo: "Wrexham",
        teamOneKit: TeamOne,
        teamTwoKit: TeamTwo,
        teamOneScore: "1",
        teamTwoScore: "0",
        teamsKit: true,
        leagueImage: LeagueImage1,
        leagueName: "Championship",
        time: "17'",
        MarketData: [
            {
                id: "home",
                label: "1",
                team: "Blackburn Rovers",
                odds: 4.90
            },
            {
                id: "draw",
                label: "X",
                team: "Draw",
                odds: 3.50
            },
            {
                id: "away",
                label: "2",
                team: "Wrexham",
                odds: 1.75
            }
        ]
    },
    {
        live: false,
        teamOne: "Blackburn Rovers",
        teamTwo: "Wrexham",
        teamOneKit: TeamOne,
        teamTwoKit: TeamTwo,
        teamOneScore: "1",
        teamTwoScore: "0",
        teamsKit: true,
        leagueImage: LeagueImage1,
        leagueName: "Championship",
        time: "17'",
        MarketData: [
            {
                id: "home",
                label: "1",
                team: "Blackburn Rovers",
                odds: 4.90
            },
            {
                id: "draw",
                label: "X",
                team: "Draw",
                odds: 3.50
            },
            {
                id: "away",
                label: "2",
                team: "Wrexham",
                odds: 1.75
            }
        ]
    },
    {
        live: false,
        teamOne: "Blackburn Rovers",
        teamTwo: "Wrexham",
        teamOneKit: TeamOne,
        teamTwoKit: TeamTwo,
        teamOneScore: "1",
        teamTwoScore: "0",
        teamsKit: true,
        leagueImage: LeagueImage1,
        leagueName: "Championship",
        time: "17'",
        MarketData: [
            {
                id: "home",
                label: "1",
                team: "Blackburn Rovers",
                odds: 4.90
            },
            {
                id: "draw",
                label: "X",
                team: "Draw",
                odds: 3.50
            },
            {
                id: "away",
                label: "2",
                team: "Wrexham",
                odds: 1.75
            }
        ]
    },
    {
        live: false,
        teamOne: "Blackburn Rovers",
        teamTwo: "Wrexham",
        teamOneKit: TeamOne,
        teamTwoKit: TeamTwo,
        teamOneScore: "1",
        teamTwoScore: "0",
        teamsKit: true,
        leagueImage: LeagueImage1,
        leagueName: "Championship",
        time: "17'",
        MarketData: [
            {
                id: "home",
                label: "1",
                team: "Blackburn Rovers",
                odds: 4.90
            },
            {
                id: "draw",
                label: "X",
                team: "Draw",
                odds: 3.50
            },
            {
                id: "away",
                label: "2",
                team: "Wrexham",
                odds: 1.75
            }
        ]
    },
]

const Match = () => {

    const matchSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className='match_sec'>
            <div className="match_wrapper">
                <Slider {...matchSlider}>
                    {MatchData.map((data, index) => (
                        <div key={index} className='px-1'>
                            <div className="match_box">
                                <div className="top_wrapper">
                                    <div>
                                        <FaFutbol className='f-18 me-2' />
                                        <span className='offer_txt me-2'>BB</span>
                                        <span className='live_txt me-2'>LIVE</span>
                                        <span className='match_time me-2'>{data.time}</span>
                                        <span className='mb-0 dott f-16 f900'>.</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={data.leagueImage} alt="Image" />
                                        <p className='league_name mb-0'>{data.leagueName}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='d-flex align-items-center gap-3'>
                                        {data.teamsKit ?
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={data.teamOneKit} alt="Team" width={16} height={18} />
                                                <img src={data.teamTwoKit} alt="Team" width={16} height={18} />
                                            </div> : null}
                                        <div>
                                            <p className='mb-0 text-black f-14 f600' style={{ lineHeight: "20px" }}>{data.teamOne}</p>
                                            <p className='mb-0 text-black f-14 f600' style={{ lineHeight: "20px" }}>{data.teamTwo}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {data.live ?
                                            <div>
                                                <p className='mb-0 text-black f-14 f600'>{data.teamOneScore}</p>
                                                <p className='mb-0 text-black f-14 f600'>{data.teamTwoScore}</p>
                                            </div> :
                                            <div>
                                                <div className="highlight_live d-flex align-items-center gap-2">
                                                    <p className='mb-0 offer_txt'>LIVE</p>
                                                    <FaSignal className='f-16 text-black' style={{ opacity: "0.5" }} />
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                                <div className="bottom_wrapper">
                                    {data.MarketData.map((marketData, index) => (
                                        <div key={index} className='merket_box'>
                                            <p className='mb-0'>{marketData.label}</p>
                                            <p className='mb-0'>{marketData.odds}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Match
