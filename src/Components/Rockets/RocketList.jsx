import { useSelector } from 'react-redux';

import RocketItem from './RocketItem';

export default function RocketList() {
  const rockets = useSelector((state) => state.Rrockets);

  let content;

  if (rockets.status === 'loading') {
    content = <div>Loading...</div>;
  } else if (rockets.status === 'succeeded') {
    content = rockets.rockets.map((rocket) => (
      <RocketItem key={rocket.id} rocket={rocket} />
    ));
  } else if (rockets.status === 'failed') {
    content = <div>{rockets.error}</div>;
  }

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '2rem',
  };

  return <div style={styles}>{content}</div>;
}
