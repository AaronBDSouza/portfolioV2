import './cardPopUp.scss';
import { FaCaretLeft } from "react-icons/fa";

export default function CardPopUp({position, details}) {
    let positionX = position[0];
    let positionY = position[1];
    let width = position[2];
    let height = position[3];

    let cardType = details[0];
    let cardName = details[1]; 
    let cardRating = details[2] >= 0 && details[2] <= 5 ? details[2] : 0;

  return (
    <div className="cardPopUp" style={{top:`${positionX - height}px`, left:`${positionY + width}px`}}>
        <div className="cardPopUpCaret">
            <FaCaretLeft/>
        </div>
        <img src={`assets/logos/${cardType}.png`} alt={`${cardType}`}/>
        <div className="headerText">{cardName.toUpperCase()}</div>
        <div className="ratingText">Rating</div>
        <input type="range" id="rating" name="rating" min="0" max="5" defaultValue={cardRating}></input>
        <div className="ratingTextNumbers"><span>0</span><span>{cardRating > 0 && cardRating < 5 ? cardRating : ' '}</span><span>5</span></div>
    </div>
  )
}
