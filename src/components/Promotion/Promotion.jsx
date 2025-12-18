import React from 'react'
import SectionBar from '../shared/section_bar'
// Images
import Card1 from "../../assets/images/card1.webp"
import Button from '../shared/button'
import GamesCards from '../shared/gamesCard'

const Promotion = ({ data }) => {

  return (
    <section className='promotion_sec px-3 py-3' id={data.sectionId}>
      <SectionBar title={data.title} />
      <div className="card_wrapper">
        <div className="row">
          {data.card.map((data, index) => (
            <div className="col-lg-6 col-12" key={index}>
              <GamesCards image={data.image} timer={data.timer} timerHeading={data.timerHeading} sharedBtn={data.sharedBtn} overlay={data.overlay}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promotion
