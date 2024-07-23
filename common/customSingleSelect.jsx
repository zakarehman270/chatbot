import React, { useState } from 'react';
import Select from 'react-select';
function SingleSelect({ options, handlerSelectedOption, defaultSelected, borderedRed , disabled }) {
    const [selectedOption, setSelectedOption] = useState(defaultSelected); // Changed to single option state
    const handleSelectChange = (selectedValue) => {
        setSelectedOption(selectedValue); // Changed to single option state
        handlerSelectedOption(selectedValue)
    };
    // Define a CSS class for the component based on the 'borderedRed' prop
    const inputClass = 'borderRed';

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor:borderedRed ? 'red' : "", // Add a border
        }),
    };

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            className={`w-100 ${inputClass}`} // Add the 'border-red' class conditionally
            styles={customStyles}
            isDisabled={disabled}
        />
    );
}
export default SingleSelect