import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="down-button">
        <FaArrowDown />
      </button>
      <button className="up-button">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ActionButtons;
