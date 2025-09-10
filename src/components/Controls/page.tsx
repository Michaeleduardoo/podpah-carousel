import { useState, useEffect } from "react";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

interface ControlsProps {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  totalImages: number;
}

function Controls({ setActiveIndex, activeIndex, totalImages }: ControlsProps) {
  const [showPrev, setShowPrev] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(true);

  useEffect(() => {
    setShowPrev(activeIndex > 0);
    setShowNext(activeIndex < totalImages - 1);
  }, [activeIndex, totalImages]);

  const scrollCarousel = (direction: "prev" | "next") => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      const imageWidth = carousel.clientWidth;
      let newIndex = activeIndex;

      if (direction === "prev") {
        newIndex = Math.max(activeIndex - 1, 0);
        carousel.scrollBy({
          left: -imageWidth,
          behavior: "smooth",
        });
      } else {
        newIndex = Math.min(activeIndex + 1, totalImages - 1);
        carousel.scrollBy({
          left: imageWidth,
          behavior: "smooth",
        });
      }

      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="controls">
      <button
        id="prev"
        className="previous"
        onClick={() => scrollCarousel("prev")}
      >
        {showPrev && <FaCaretSquareLeft className="iconButton" />}
      </button>

      {showNext && (
        <button
          id="next"
          className="next"
          onClick={() => scrollCarousel("next")}
        >
          {showNext && <FaCaretSquareRight className="iconButton" />}
        </button>
      )}
    </div>
  );
}

export default Controls;
