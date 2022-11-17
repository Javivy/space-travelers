import css from './MissionsHeader.module.css';

export default function MissionsHeader() {
  return (
    <div key="missions-header" className={css.missions_header}>
      <div>
        <p>Mission</p>
      </div>
      <div>
        <p>Description</p>
      </div>
      <div>
        <p>Status</p>
      </div>
      <div>
        <p>Join</p>
      </div>
    </div>
  );
}
