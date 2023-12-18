import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ onChange }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <select value={selectedValue} onChange={handleChange} className="dropdown" id='dropdown'>
            <option value="">Hamur Kalınlığı</option>
            <option value="ince" id='ince'>İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
        </select>
    );
};

export default Dropdown;
