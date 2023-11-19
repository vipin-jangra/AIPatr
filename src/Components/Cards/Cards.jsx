import './Cards.scss';
import card2 from "../../assets/2card.jpg"
import card4 from "../../assets/4card.jpg";
import card5 from "../../assets/5card.jpg"
import SouthEastIcon from '@mui/icons-material/SouthEast';


const Cards = (()=>{
    return <>
        <div className="cards">
            <div className="card-container">
                <div className="card1">
                    <img src={card5} alt="" />
                    <button className='topleft'>01</button>
                    <div className='content'>
                        <div className='profile-card'>
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                            <h2 >Learn from best mentors</h2>
                        </div>
                        <div>
                            <button className='button'>Start learning <span ><SouthEastIcon fontSize='x-small' /></span></button>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <img src={card2} alt="" />
                    <button className='topleft'>02</button>
                    <div className='content'>
                    <div className='list'>
                        <ul>
                            <li>Free Edit <span ><SouthEastIcon fontSize='x-small' /></span></li>
                            <li>Interactive <span ><SouthEastIcon fontSize='x-small' /></span></li>
                            <li>Easy interface <span ><SouthEastIcon fontSize='x-small' /></span></li>
                            <li>Compre to other <span ><SouthEastIcon fontSize='x-small' /></span></li>
                        </ul>

                    </div>

                    </div>
                </div>
                <div className="card3">
                    <img src={card4} alt="" />
                    <button className='topleft'>03</button>
                    <div className='content'>
                        
                        <h1>+20k</h1>
                        <p>Glass Pattern generated this week in the first release</p>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    </>
})

export default Cards;