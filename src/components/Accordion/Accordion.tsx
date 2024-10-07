import React, { useState } from 'react';
import {ReactComponent as OpenIcon} from './assets/chevron-up.svg'; 
import {ReactComponent as CloseIcon} from './assets/chevron-down.svg'; 
import style from './Accordion.module.scss';
interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.accordion}>
      <div className={style.accordionHeader} onClick={handleToggle}>
        <h3>{title}</h3>
        <span style={{ marginLeft: 'auto' }}>{isOpen ? <OpenIcon /> : <CloseIcon />}</span> 
      </div>
      {isOpen && (
        <div className={style.accordionContent}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
