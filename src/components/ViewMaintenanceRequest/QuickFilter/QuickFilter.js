import React, { useState } from 'react';
import Select from 'react-select';
import styles from './QuickFilter.module.css';
 
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
    <div class={styles.QuickFilter}>
      
 
      <Select
        placeholder="Quick Filter"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
 
      {selectedOption && <div style={{ marginTop: '0px', lineHeight: '25px',  }}>
        <div style={{ marginTop: '0px' }}>  {selectedOption.label}</div>
       
      </div>}
    </div>
  );
}
export default QuickFilter;