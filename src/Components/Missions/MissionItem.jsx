import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reserveMissions } from '../../Redux/Missions';
import css from './MissionItem.module.css';

export default function MissionItem(props) {
  const dispatch = useDispatch();
  const { mission } = props;

  const handleReserve = () => {
    dispatch(reserveMissions(mission.id));
  };

  const buttonCSS = mission.reserved ? css.cancel_button : css.reserve_button;

  return (
    <div key={mission.id} className={css.mission_item}>
      <p className={css.mission_name}>{mission.mission_name}</p>
      <p className={css.mission_description}>{mission.description}</p>
      <span className={css.mission_reserved_badge}>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</span>
      <button type="button" onClick={handleReserve} className={buttonCSS}>
        {mission.reserved ? 'Leave Mission' : 'Join Mission'}
      </button>
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
