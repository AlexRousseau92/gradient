import { useSelector } from 'react-redux';

const Gradient = () => {
  const direction = useSelector((state) => state.direction);
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  return (

    <div>
      <div id="gradient" />
    </div>
  );
};

export default Gradient;
