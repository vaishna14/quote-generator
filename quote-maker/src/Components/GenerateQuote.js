import React, {useContext} from "react";
import QuoteContext from "../Contexts/QuoteContext"


export const GenerateQuote = () => {
    const {getNewQuotes} = useContext(QuoteContext);

    const onClick = () => {
        getNewQuotes();
    }
    return (
        <div className="generate-button" >
        <button onClick={onClick}>
            Generate a new Quote !!!
            </button>
            </div>
    )
}

