import "./style.css";
import Sidebar from "../../components/Sidebar/index";
import Card from "../../components/Card/index";
import cards from "../../cards";
import { useState } from "react";
import congrats from "../../assets/congrats.png";

function Main() {
  const [stateCards, setStateCards] = useState([...cards]);

  return (
    <div className="container">
      <Sidebar setStateCards={setStateCards} cards={cards} />

      <div className="container_main">
        <div className={stateCards.length ? "container_card" : "congrats"}>
          {stateCards.length ? (
            stateCards.map((item) => (
              <Card
                key={item.id}
                item={item}
                stateCards={stateCards}
                setStateCards={setStateCards}
              />
            ))
          ) : (
            <img className="congrats" src={congrats} alt="imagem congrats" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;