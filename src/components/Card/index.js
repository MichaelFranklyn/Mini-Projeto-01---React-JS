import "./style.css";
import cardBack from "../../assets/card-back.png";

export default function Card({ item, stateCards, setStateCards }) {
    function handleTurnCard() {
        const localCards = [...stateCards];

        const currentCard = localCards.find((card) => {
            return card.id === item.id;
        });

        const arrayOnlyTurned = localCards.filter((card) => {
            return card.turned === true;
        });

        const primeiraCarta = arrayOnlyTurned[0]
        // Não vira a primeira a carta duas vezes - Segundo clique 
        if (
            arrayOnlyTurned.length === 1 &&
            currentCard.id === primeiraCarta.id
        ) {
            return;
        }

        // Não vira mais que duas cartas
        if (arrayOnlyTurned.length > 1) {
            return;
        }

        // Verificar se as cartas são iguais
        setTimeout(() => {
            if (arrayOnlyTurned.length === 1) {
                if (currentCard.slug === primeiraCarta.slug) {
                    const newArray = localCards.filter((card) => {
                        return (
                            card.id !== currentCard.id && card.id !== primeiraCarta.id
                        );
                    });

                    setStateCards(newArray);
                    return;
                }
                // Verificar se as cartas são diferentes
                else {
                    localCards.forEach((card) => {
                        card.turned = false;
                    });

                    setStateCards([...localCards]);
                    return;
                }
            }
        }, 1000);

        currentCard.turned = !currentCard.turned;
        setStateCards(localCards);
    }

    return (
        <div>
            <img
                className="card"
                src={item.turned ? item.image : cardBack}
                alt="imagem card"
                onClick={() => handleTurnCard()}
            />
        </div>
    );
}