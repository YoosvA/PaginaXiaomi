import { useState, useRef, useEffect } from "react";

export const useNavbar = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setShowCard(!showCard);
  };

  const handleNavLinkClick = () => {
    setShowCard(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowCard(false);
    }
  };

  useEffect(() => {
    if (showCard) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showCard]);

  return {
    isHovered,
    showCard,
    menuRef,
    handleMouseEnter,
    handleMouseLeave,
    handleCardClick,
    handleNavLinkClick,
  };
};
