import {
  ContactPage,
  EmailRounded,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { useState, useRef } from "react";

const IconsDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const iconRef = useRef(null);

  const calculateDropdownPosition = () => {
    if (iconRef.current) {
      const iconRect = iconRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: iconRect.bottom + window.scrollY,
        left: iconRect.left + window.scrollX,
      });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    calculateDropdownPosition();
  };

  const dropdownStyles = {
    display: isDropdownVisible ? "flex" : "none",
    position: "fixed",
    top: `${dropdownPosition.top}px`,
    left: `${dropdownPosition.left / 1.3}px`,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  };

  const iconStyle = {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    cursor: "pointer",
  };

  return (
    <div className="relative">
      <div ref={iconRef} onClick={toggleDropdown}>
        <ContactPage sx={iconStyle} />
      </div>

      <div
        className="fixed z-10 rounded-md bg-gray-500 p-2 shadow-md"
        style={dropdownStyles}
      >
        <p className="text-2xl">Quick Access</p>
        <IconItem icon={<EmailRounded sx={iconStyle} />} />
        <IconItem icon={<GitHub sx={iconStyle} />} />
        <IconItem icon={<LinkedIn sx={iconStyle} />} />
        <IconItem icon={<LinkedIn sx={iconStyle} />} />
        <IconItem icon={<LinkedIn sx={iconStyle} />} />
        {/* Add more icons as needed */}
      </div>
    </div>
  );
};

export default IconsDropdown;

// eslint-disable-next-line react/prop-types
const IconItem = ({ icon }) => {
  return <button>{icon}</button>;
};
