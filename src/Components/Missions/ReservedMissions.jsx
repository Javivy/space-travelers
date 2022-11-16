import { useSelector } from 'react-redux';
import css from './ReservedMissions.module.css';

const ReservedMissions = () => {
  const missions = useSelector((state) => state.Missions.rockets);
  const reservedMissions = missions.filter((rocket) => rocket.reserved);

  return (
    <div className={css.missions_bg}>
      <div className={css.missions}>
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReservedMissions;
