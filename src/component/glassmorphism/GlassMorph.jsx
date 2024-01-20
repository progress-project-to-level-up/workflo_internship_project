import React from 'react'
import '../../component/glassmorphism/glassMorph.css'
import Hambugger from '../../asset/svg/hambugger.svg'
import cardOne from '../../asset/image/card1.jpg'
import woman from '../../asset/image/woman.jpg'
import HambuggerTiny from '../../asset/svg/hambuggertiny.svg'
import mancole from '../../asset/image/mancole.jpg'

const GlassCards = () => {
    const glassTemplate = [
        {
            id: 1,
            img: mancole,
            head: 'William Houston',
            title: 'Sponsor'
        },
        {
            id: 2,
            img: woman,
            head: 'Joy miller',
            title: 'Researcher'
        },
        {
            id: 2,
            img: cardOne,
            head: 'Mark Fletcher',
            title: 'Senior Backend Engineer'
        }
    ]
    return (
        <div className='glassHolder'>
            {
                glassTemplate.map((glass, ind) => (
                    <div key={ind} className={`myGlass${ind + 1}`}>
                        <div className='threeDots'>
                            <img src={Hambugger} alt="" />
                        </div>
                        <div className="glassContent">
                            <div className='imageHolder'>
                                <img src={glass.img} alt="" />
                            </div>
                            <div className="glasstxt">
                                <h2>{glass.head}</h2>
                                <p>{glass.title}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default GlassCards