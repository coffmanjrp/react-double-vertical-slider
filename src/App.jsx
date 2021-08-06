import { ActionButtons, LeftSlide, RightSlide } from './components';
import slides from './utils/slides';
import './App.scss';

function App() {
  return (
    <div className="App">
      <LeftSlide slides={slides} />
      <RightSlide slides={slides} />
      <ActionButtons />
    </div>
  );
}

export default App;
