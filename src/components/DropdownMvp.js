import React, { useState } from 'react';
import './DropdownMvp.css'; // Dropdown stili içeren CSS dosyası

const Dropdown = ({ onChange }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <select value={selectedValue} onChange={handleChange} className="dropdown">
            <option value="">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
        </select>
    );
};

export default Dropdown;
