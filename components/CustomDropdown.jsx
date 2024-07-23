import React, { useEffect, useState, useRef } from 'react'
import { FaAngleDown } from "react-icons/fa6";
const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedIndex, setSelectedIndex] = useState()
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <div className='outerWrapperCustomDropdown'>
      <div className="custom-dropdown" ref={dropdownRef} onClick={toggleDropdown}>
        <div className='d-flex gap-2 align-items-center' >
          <div className="" >
            {selectedOption || 'Select Stage'}
          </div>
          <div className='mt-1'>
          <FaAngleDown />
          </div>
        </div>
        {isOpen && (
          <ul className={`custom-dropdown-options  text-nowrap pt-1  pb-1`}>
            {options.map((option, index) => (
              <li key={index} onClick={() => {
                handleSelect(option)
                setSelectedIndex(index)
              }}
                className={`${SelectedIndex === index ? "active-custom-dropdown-options" : ""}`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;