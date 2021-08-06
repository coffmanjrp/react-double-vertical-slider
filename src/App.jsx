import { useEffect, useRef, useState } from 'react';
import { ActionButtons, LeftSlide, RightSlide } from './components';
import slides from './utils/slides';
import './App.scss';

function App() {
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const ref = useRef();
  const length = slides.length - 1;

  useEffect(() => {
    setTransform((prev) => prev * index);
  }, [index]);

  const handleSlide = (direction) => {
    const { clientHeight } = ref.current;
    setTransform(clientHeight);

    if (direction === 'up') {
      setIndex((index) => (index >= length ? 0 : index + 1));
    } else if (direction === 'down') {
      setIndex((index) => (index <= 0 ? length : index - 1));
    }
  };

  return (
    <div ref={ref} className="App">
      <LeftSlide slides={slides} transform={transform} />
      <RightSlide slides={slides} transform={transform} />
      <ActionButtons handleSlide={handleSlide} />
    </div>
  );
}

export default App;
