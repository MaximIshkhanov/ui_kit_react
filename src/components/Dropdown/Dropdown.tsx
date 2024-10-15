import React, { useRef, useState } from 'react';
import style from './Dropdown.module.scss';
import useClickOutside from './useClickOutside';

interface DropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['Dropdown1', 'Dropdown2', 'Dropdown3'];
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 50);
  });

  return (
    <div className={`${style.dropdown} ${isActive ? style.active : ''}`} ref={menuRef}>
      <div
        className={style.dropdownBtn}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <span className={style.caretDown}>+</span>
      </div>
      <div className={`${style.dropdownContent} ${isActive ? style.active : ''}`}>
        {options.map((option) => (
          <div key={option}
            onClick={() => {
              setSelected(option);
              setIsActive(false);
            }}
            className={style.dropdownItem}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
