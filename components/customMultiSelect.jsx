import React, { useState } from 'react';
import Select from 'react-select';

function CustomMultiSelect({ ImageSource, options, handlerSelectedOption }) {
    const [selectedOptions, setSelectedOptions] = useState([]); // Use an array for multiple selections

    const handleSelectChange = (selectedValues) => {
        setSelectedOptions(selectedValues);
        handlerSelectedOption(selectedValues);
    };

    return (
        <div className='position-relative'>
            <Select
                options={options}
                isMulti={true} // Enable multi-select by adding the isMulti prop
                value={selectedOptions}
                onChange={handleSelectChange}
                className='w-100'
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
            />
            {/* <img src={ImageSource} alt="DropDownIcon" className='DropDownIconsInputField' /> */}
        </div>
    );
}
export default CustomMultiSelect