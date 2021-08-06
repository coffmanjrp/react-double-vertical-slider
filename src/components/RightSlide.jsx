const RightSlide = ({ slides }) => {
  return (
    <div className="right-slide">
      {slides.length > 0 &&
        slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          ></div>
        ))}
    </div>
  );
};

export default RightSlide;
