import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reserveRocket } from '../../Redux/Rockets';
import css from './RocketItem.module.css';

export default function RocketItem(props) {
  const dispatch = useDispatch();
  const { rocket } = props;

  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const buttonCSS = rocket.reserved ? css.cancel_button : css.reserve_button;

  return (
    <div className={css.rocket_item}>
      <img
        src={rocket.flickr_images[0]}
        className={css.rocket_img}
        alt={rocket.rocket_name}
      />
      <div className={css.rocket_info}>
        <h2 className={css.rocket_name}>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && <span>reserved </span>}
          {rocket.description}
        </p>
        <button type="button" onClick={handleReserve} className={buttonCSS}>
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
}

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
