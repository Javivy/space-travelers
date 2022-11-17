import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reserveMissions } from '../../Redux/Missions';
import css from './MissionItem.module.css';

export default function MissionItem(props) {
  const arr = useSelector((state) => state.Missions);
  const dispatch = useDispatch();
  const { mission } = props;

  const tableStyle = {
    background: '#efefef',
  };

  const memberStyle = {
    background: '#00a4aa',
  };

  const handleReserve = () => {
    dispatch(reserveMissions(mission.id));
  };

  const buttonCSS = mission.reserved ? css.leave_button : css.join_button;

  return (
    <div
      key={mission.id}
      id={arr.missions.indexOf(mission)}
      className={css.mission_item}
      style={
        arr.missions.indexOf(mission) % 2 === 0 ? tableStyle : undefined
      }
    >
      <div>
        <p className={css.mission_name}>{mission.mission_name}</p>
      </div>
      <div>
        <p className={css.mission_description}>{mission.description}</p>
      </div>
      <div className={css.mission_badge}>
        <span
          className={css.mission_reserved_badge}
          style={mission.reserved ? memberStyle : null}
        >
          {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </div>
      <div className={css.mission_button}>
        <button type="button" onClick={handleReserve} className={buttonCSS}>
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
