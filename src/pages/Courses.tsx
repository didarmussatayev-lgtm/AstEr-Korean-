import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { useCourse } from '../lib/course';
import { useI18n } from '../lib/i18n';

export default function Courses() {
  const { t, tx } = useI18n();
  const { course, setCourse } = useCourse();
  const nav = useNavigate();
  return (
    <div className="stack">
      <div className="hero">
        <h1>{t('chooseCourse')}</h1>
        <p>{t('chooseCourseHint')}</p>
      </div>
      <ul className="path">
        {courses.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`node course-node ${c.id === course.id ? 'current' : ''}`}
              aria-pressed={c.id === course.id}
              onClick={() => { setCourse(c.id); nav('/'); }}
            >
              <span className="emoji">{c.flag}</span>
              <span className="node-body">
                <b>{tx(c.title)} <span className="muted native">{c.native}</span></b>
                <span className="muted">{tx(c.blurb)}</span>
                {!c.ready && <span className="soon-tag">{t('soon')}</span>}
              </span>
              <span className="go">{c.id === course.id ? '✓' : '›'}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
