import React, { useState } from "react";
import QuoteContext from "./QuoteContext";
import {fetchQuotes} from "../Services/fetchQuotes"
const QuoteState = ({
    children,
  }) => {
    // const { authToken } = useContext(AuthContext);
    const [state, setState] = useState({
        loading: "false",
        quote:"Please click on the button to generate quote."
    })
    const getNewQuotes = async () => {
        const quoteData = await fetchQuotes();
        
        console.log(quoteData);
        setState({...state, quote: quoteData.data.content})
    }
    return (
        <QuoteContext.Provider
            value={{
                getNewQuotes,
            ...state,
          }}
        >
          {children}
        </QuoteContext.Provider>
      );
};

export default QuoteState;