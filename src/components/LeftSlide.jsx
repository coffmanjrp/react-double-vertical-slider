const LeftSlide = ({ slides }) => {
  return (
    <div className="left-slide">
      {slides.length > 0 &&
        slides.map((slide) => (
          <div key={slide.id} style={{ backgroundColor: `${slide.color}` }}>
            <h1>{slide.heading}</h1>
            <p>{slide.lead}</p>
          </div>
        ))}
    </div>
  );
};

export default LeftSlide;
