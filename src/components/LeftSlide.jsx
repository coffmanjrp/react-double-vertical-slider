const LeftSlide = ({ slides, transform }) => {
  return (
    <div
      className="left-slide"
      style={{
        top: `-${(slides.length - 1) * 100}vh`,
        transform: `translateY(${transform}px)`,
      }}
    >
      {slides.length > 0 &&
        slides
          .map((slide) => (
            <div key={slide.id} style={{ backgroundColor: `${slide.color}` }}>
              <h1>{slide.heading}</h1>
              <p>{slide.lead}</p>
            </div>
          ))
          .reverse()}
    </div>
  );
};

export default LeftSlide;
