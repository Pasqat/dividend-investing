import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Autosuggest  from 'react-autosuggest';

import "./search.styles.scss";

// ! WIP AutoSuggest
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class Auto extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
           
    });

  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Scrivi un simbolo per aggiungerlo",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

// ! ______________________________________________________________

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { addSymbols, isLoading } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newStock = {
      symbol: searchTerm,
    };
    
    addSymbols(newStock);

    setSearchTerm("");
  };

  return (
    <div className="search">
      <div className="search-bar">
        <form className="form-search-bar" onSubmit={onSubmit}>
        <Auto />
          <input
            type="text"
            name="search field"
            value={searchTerm}
            placeholder="Digita un simbolo per aggiungere..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         
          { isLoading ? <div className='waiting'><span role='img'>💩</span></div> : <input name="submit" type="submit" />}
        </form>
        
      </div>
    </div>
  );
};

export default Search;
