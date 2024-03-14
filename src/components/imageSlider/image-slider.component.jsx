import { useEffect, useState } from "react";
import "./image-slider.styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const fetchImages = async (getUrl) => {
    try {
      setLoadingState(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoadingState(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoadingState(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loadingState) {
    return <div>Loading Data - Please Wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred... {errorMsg}</div>;
  }

  return (
    <div className="sliderWrapper">
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevious}
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-image"
                }
                onClick={() => setCurrentSlide(index)}
              />
            ))
          : null}
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  key={index}
                ></button>
              ))
            : null}
        </span>
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
