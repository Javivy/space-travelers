import { useSelector } from 'react-redux';
import css from './ReservedMissions.module.css';

const ReservedMissions = () => {
  const missions = useSelector((state) => state.Missions.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={css.missions_bg}>
      <div className={css.missions}>
        <h2>My Missions</h2>
        <ul>
          {
          reservedMissions.length !== 0 ? reservedMissions.map((mission) => (
            <li key={mission.id}>{mission.mission_name}</li>
          )) : <p>You haven&apos;t joined to any mission yet</p>
          }
        </ul>
      </div>
    </div>
  );
};

export default ReservedMissions;
