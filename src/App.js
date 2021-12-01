import React, {Component} from 'react';
import './App.css';
import DropDown from './components/DropDown';
import Simpletextarea from './components/Simpletextarea';
const arrayOfData = [
  {
    id: '1',
    name: 'ID: 00012345'    
  },
  {
    id: '2',
    name: 'ID: 00023456'    
  },
  {
    id: '3',
    name: 'ID: 00034567'    
  },
];

      class App extends Component {
        handleSelectChange = (selectedValue) =>{
          this.setState({
            selectedValue: selectedValue
          });
        }
      
        render() {
          return (
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">Select your request</h1>
              </header>
              <p className="custom-search-select">
                <DropDown arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} />
              </p>
              <p className= "Questionnaire-header"> Questionnaire </p>
              <div class="shape">
              <p className= "question-one">Were you satisfied with your service?*</p>
              <p type="textarea"> <Simpletextarea/></p>
              <p className= "question-two">Did maintenance attend to your needs right away?*</p>
              <p type="textarea"> <Simpletextarea/></p>
              <p className= "question-three">Feedback for the facility.*</p>
              <p type="textarea"> <Simpletextarea/></p>
            </div>
            </div>
          );
        }
      }
      
      export default App;
