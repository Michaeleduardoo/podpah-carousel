import { useRef, useEffect } from "react";
import Controls from "../Controls/page";
import First from "../Image/Carousel/A-image.png";
import Second from "../Image/Carousel/B-image.png";
import Third from "../Image/Carousel/C-image.png";
import Fourth from "../Image/Carousel/D-image.png";
import Fifth from "../Image/Carousel/E-image.png";
import Six from "../Image/Carousel/F-image.png";
interface CarouselProps {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}

interface ImageData {
  id: string;
  src: string;
  alt: string;
}

function Carousel({ setActiveIndex, activeIndex }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalImages = 6;

  const images: ImageData[] = [
    { id: "card1", src: First, alt: "Ana First" },
    {
      id: "card2",
      src: Second,
      alt: "Ana Second",
    },
    {
      id: "card3",
      src: Third,
      alt: "Ana Third",
    },
    {
      id: "card4",
      src: Fourth,
      alt: "Ana Fourth",
    },
    {
      id: "card5",
      src: Fifth,
      alt: "Ana Fifth",
    },
    {
      id: "card6",
      src: Six,
      alt: "Ana Six",
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      const imageWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: 1 * imageWidth,
        behavior: "smooth",
      });
    }
  }, [carouselRef]);

  useEffect(() => {
    if (carouselRef.current) {
      const imageWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: activeIndex * imageWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div id="carousel" className="visual" ref={carouselRef}>
      {images.map((image, index) => (
        <img
          key={index}
          id={image.id}
          src={image.src}
          alt={image.alt}
          style={{ width: "100%" }}
        />
      ))}
      <Controls
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        totalImages={totalImages}
      />
    </div>
  );
}

export default Carousel;
