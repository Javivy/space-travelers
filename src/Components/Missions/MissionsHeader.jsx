import css from './MissionsHeader.module.css';

export default function MissionsHeader() {
  return (
    <div key="missions-header" className={css.missions_header}>
      <p>Mission</p>
      <p>Description</p>
      <p>Status</p>
      <p />
    </div>
  );
}
