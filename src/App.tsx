import { useState } from "react";
import "./App.css";
import { TiMediaRecordOutline, TiMediaRecord } from "react-icons/ti";
import Headers from "./components/Header/page";
import Carousel from "./components/Carousel/page";
import Inter from "./components/Inter/page";

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(1); 
  const totalImages = 6; 

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <Headers />
      <div className="card">
        <Carousel setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
        <div id="pagination" className="pagination">
          {[...Array(totalImages)].map((_, index) =>
            index === activeIndex ? (
              <TiMediaRecord
                key={index}
                onClick={() => handlePaginationClick(index)}
              />
            ) : (
              <TiMediaRecordOutline
                key={index}
                onClick={() => handlePaginationClick(index)}
              />
            )
          )}
        </div>
      </div>
      <div className="social">
        <Inter />
      </div>
    </section>
  );
}

export default App;
