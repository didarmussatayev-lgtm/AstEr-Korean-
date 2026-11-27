import { Link } from 'react-router-dom';
import type { Course } from '../data/courses';
import { useI18n } from '../lib/i18n';
import { Card } from '../components/ui';

/** Home screen of a course whose content is not published yet. */
export default function CourseSoon({ course }: { course: Course }) {
  const { t, tx } = useI18n();
  return (
    <div className="stack">
      <div className="hero">
        <h1>{course.flag} {tx(course.title)}</h1>
        <p>{tx(course.blurb)}</p>
      </div>
      <Card className="stack soon-card">
        <h2>🚧 {t('courseSoon')}</h2>
        <p className="muted">{t('courseSoonText')}</p>
        {course.plan && (
          <>
            <h3>{t('courseWillHave')}</h3>
            <ul className="plan-list">
              {course.plan.map((p, i) => <li key={i}>{tx(p)}</li>)}
            </ul>
          </>
        )}
        <Link className="btn primary" to="/courses">{t('chooseCourse')}</Link>
      </Card>
    </div>
  );
}
