import React, {useContext} from "react";
import QuoteContext from "../Contexts/QuoteContext"
import { GenerateQuote } from "./GenerateQuote"
import "../Style/Box.css"
export const Quote = () => {
    const {quote} = useContext(QuoteContext);
    return (
        
            <div className="box">
                <i className="fas fa-quote-left fa2"></i>
                <div className="text">
                    <i className="fas fa-quote-right fa1"></i>
                    <div>
                        <h3>Quote the day</h3>
                        <p>{quote}</p>
                       
                    </div>
                </div>
            </div>

           
        
    )
}
