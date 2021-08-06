import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import slides from './utils/slides';
import './App.scss';

function App() {
  const { length } = slides;

  return (
    <div className="App">
      <div className="left-slide">
        {length > 0 &&
          slides.map((slide) => (
            <div key={slide.id} style={{ backgroundColor: `${slide.color}` }}>
              <h1>{slide.heading}</h1>
              <p>{slide.lead}</p>
            </div>
          ))}
      </div>
      <div className="right-slide">
        {length > 0 &&
          slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            ></div>
          ))}
      </div>
      <div className="action-buttons">
        <button className="down-button">
          <FaArrowDown />
        </button>
        <button className="up-button">
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default App;
