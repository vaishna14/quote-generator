import './Style/App.css';
import { Quote } from "./Components/Quote";
import QuoteState from "./Contexts/QuoteState"
import {GenerateQuote} from "./Components/GenerateQuote"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteState>
            <Quote />
          <GenerateQuote />
          
          </QuoteState>
      </header>
    </div>
  );
}

export default App;
