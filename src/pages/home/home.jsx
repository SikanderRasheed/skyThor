import React, { Children } from 'react'
import Banner from '../../components/Banner/Banner'
// import Tabs from '../../components/Tabs/Tabs'
import Tabs from '../../components/shared/tabs';
// import CustomTabs from '../../components/shared/tabs'
// import Cards from '../../components/shared/card';
// Images
import Tab1 from "../../assets/images/tabs1.webp"
import Tab2 from "../../assets/images/tab2.webp"
import Tab3 from "../../assets/images/tab3.svg"

const Home = () => {

    // const items = [
    //     {
    //         key: "top",
    //         label: "TOP",
    //         children: (
    //             <div>
    //                 <Cards />
    //             </div>
    //         )
    //     },
    //     { key: "new", label: "NEW" },
    //     { key: "exclusive", label: "EXCLUSIVES" },
    //     { key: "jackpots", label: "JACKPOTS" },
    //     { key: "tournaments", label: "TOURNAMENTS" },
    //     { key: "megaways", label: "MEGAWAYS" },
    //     { key: "holdwin", label: "HOLD AND WIN" },
    //     { key: "crash", label: "CRASH GAMES" },
    //     { key: "bingo", label: "VIDEO BINGO" },
    //     { key: "other", label: "OTHER" },
    // ];

    // const topGames = [
    //     {
    //         image: Tab1,
    //         title: "Valley Of The Gods",
    //         provider: "Yggdrasil Gaming",
    //         info: [
    //             { label: "Reels", value: "6" },
    //             { label: "Lines", value: "25" },
    //             { label: "RTP", value: "96%" },
    //         ],
    //     },
    //     {
    //         image: Tab2,
    //         title: "Book Of Dead",
    //         provider: "Play'n GO",
    //         info: [
    //             { label: "Reels", value: "5" },
    //             { label: "Lines", value: "10" },
    //             { label: "RTP", value: "96.2%" },
    //         ],
    //     },
    // ];

    // const newGames = [
    //     {
    //         image: Tab3,
    //         title: "Gates Of Olympus",
    //         provider: "Pragmatic Play",
    //         info: [
    //             { label: "Reels", value: "6" },
    //             { label: "Lines", value: "20" },
    //             { label: "RTP", value: "96.5%" },
    //         ],
    //     },
    // ];

    // const items = [
    //     {
    //         key: "top",
    //         label: "TOP",
    //         children: <Cards data={topGames} />
    //     },
    //     {
    //         key: "new",
    //         label: "NEW",
    //         children: <Cards data={newGames} />
    //     },
    //     {
    //         key: "exclusive",
    //         label: "EXCLUSIVES",
    //         children: <Cards data={topGames} />
    //     },
    // ];

    return (
        <>
            <Banner />
            {/* <CustomTabs items={items} className="my-add-tabs" /> */}
            <Tabs />
        </>
    )
}

export default Home
