import { useDispatch } from 'react-redux';

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
    <div className={css.mission_item}>
      <div className={css.mission_header}>
        <
      </div>
    </div>
  )
}