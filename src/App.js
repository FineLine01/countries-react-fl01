import './App.css';
import Country from './components/country';

function App() {
  return (
    <div className="App">
        <h1>Countries</h1>

        {/* Filter will go here  */}

        {/* List countries here  */}

        <Country 
          name={`Estonia`}
          continent={`Europe`}
          flag={`https://www.countryflags.com/wp-content/uploads/estonia-flag-png-large.png`}
          
          countrySize={45228}
        />

    </div>
  );
}

export default App;
