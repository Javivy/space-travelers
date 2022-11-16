import css from './Profile.module.css';
import ReservedRockets from '../../Rockets/ReservedRockets';
// import ReservedMissions from '../../Missions/ReservedMissions';

const Profile = () => (
  <div className={css.profile_bg}>
    <ReservedRockets />
    <ReservedRockets />
  </div>
);

export default Profile;
