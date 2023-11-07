import React from 'react';
import './CheckboxMvp.css';

const Checkbox = ({ size, label, checked, onChange }) => {
    const checkboxClass = `checkbox ${size} ${checked ? 'checked' : ''}`;

    return (
        <div className={checkboxClass}>
            <input type="checkbox" id={label} checked={checked} onChange={onChange} />
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default Checkbox;
