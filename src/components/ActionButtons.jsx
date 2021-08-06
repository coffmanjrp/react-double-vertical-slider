import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ActionButtons = ({ handleSlide }) => {
  return (
    <div className="action-buttons">
      <button className="down-button" onClick={() => handleSlide('down')}>
        <FaArrowDown />
      </button>
      <button className="up-button" onClick={() => handleSlide('up')}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ActionButtons;
