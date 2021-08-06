const RightSlide = ({ slides, transform }) => {
  return (
    <div
      className="right-slide"
      style={{ transform: `translateY(-${transform}px)` }}
    >
      {slides.length > 0 &&
        slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
    </div>
  );
};

export default RightSlide;
