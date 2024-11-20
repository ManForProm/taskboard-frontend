import React, { useEffect, useRef, useState } from "react";
import "../../styles/utils/dropdownWrapper.css";

const Dropdown = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState("down");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handlePositioning = () => {
      const dropdown = dropdownRef.current;
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (rect.bottom > screenHeight) {
          setDropdownPosition("up");
        } else {
          setDropdownPosition("down");
        }
      }
    };

    window.addEventListener("resize", handlePositioning);
    handlePositioning();

    return () => window.removeEventListener("resize", handlePositioning);
  }, [isOpen]);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`dropdown-content ${dropdownPosition}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownSection = ({ title, children }) => {
  return (
    <div className="dropdown-section">
      {title && <div className="dropdown-section-title">{title}</div>}
      {children}
    </div>
  );
};

const Divider = () => {
  return <div className="divider"></div>;
};

export { Divider, Dropdown, DropdownSection };




// usage of custom dropdown

// <Dropdown label="Открыть меню">
//                 <DropdownSection title="Категория 1">
//                   <button className="dropdown-item">Кнопка 1</button>
//                   <button className="dropdown-item">Кнопка 2</button>
//                 </DropdownSection>
//                 <Divider />
//                 <DropdownSection title="Категория 2">
//                   <button className="dropdown-item">Кнопка 3</button>
//                   <button className="dropdown-item">Кнопка 4</button>
//                 </DropdownSection>
//                 <Divider />
//                 <DropdownSection title="Категория 3">
//                   <button className="dropdown-item">Кнопка 5</button>
//                   <button className="dropdown-item">Кнопка 6</button>
//                 </DropdownSection>
//               </Dropdown>
