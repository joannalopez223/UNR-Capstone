//not the final virsion of dropdown
//will need to change it 
// does not work properly for this prject


import React, { useState } from 'react';
import Select from 'react-select';
import './quickFilter.css';
 
function QuickFilter() {
  const data = [
    {
      value: 1,
      label: "Priority"
    },
    {
      value: 2,
      label: "Severity"
    },
    {
      value: 3,
      label: "Date"
    },

  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
 
  return (
    <div class="QuickFilter">
      
 
      <Select
        placeholder="Quick Filter"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
 
      {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px',  }}>
        <b>Sort by </b><br />
        <div style={{ marginTop: 10 }}>  {selectedOption.label}</div>
       
      </div>}
    </div>
  );
}
export default QuickFilter;

/* used as a refrence

import React, { useState } from 'react';
import Select from 'react-select';
 
function QuickFilter() {
  const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
 
  return (
    <div className="QuickFilter">
      
 
      <Select
        placeholder="Quick Filter"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
 
      {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
        <div><b>Value: </b> {selectedOption.value}</div>
      </div>}
    </div>
  );
}
export default QuickFilter;
*/