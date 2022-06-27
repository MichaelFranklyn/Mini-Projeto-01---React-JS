import "./style.css";
import Logo from "../../assets/logo.svg";

export default function sidebar({ setStateCards, cards }) {
  function handleReset() {
    cards.forEach((item) => {
      item.turned = false;
    });

    setStateCards(cards);
  }

  return (
    <div className="sidebar">
      <div className="sidebar_over">
        <img src={Logo} alt="imagem do logo" />
        <h1>CUBOS PUZZLE</h1>
      </div>

      <button className="reset_button" onClick={() => handleReset()}>
        RESET
      </button>
    </div>
  );
}