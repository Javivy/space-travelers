import { useSelector } from 'react-redux';
import css from './ReservedRockets.module.css';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.Rrockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className={css.rockets_bg}>
      <div className={css.rockets}>
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReservedRockets;
