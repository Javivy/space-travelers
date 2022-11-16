import { useSelector } from 'react-redux';

import MissionItem from './MissionItem';
import MissionsHeader from './MissionsHeader';

export default function MissionList() {
  const missions = useSelector((state) => state.Missions);

  let content;

  if (missions.status === 'loading') {
    content = <div>Loading...</div>;
  } else if (missions.status === 'succeeded') {
    content = missions.missions.map((mission) => (
      <MissionItem key={mission.id} mission={mission} />
    ));
  } else if (missions.status === 'failed') {
    content = <div>{missions.error}</div>;
  }

  const styles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={styles}>
      <MissionsHeader />
      {content}
    </div>
  );
}
