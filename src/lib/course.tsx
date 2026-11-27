import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { courseById, courses } from '../data/courses';
import type { Course, CourseId } from '../data/courses';

const KEY = 'aster:course';

interface CourseCtx {
  course: Course;
  setCourse: (id: CourseId) => void;
}

const Ctx = createContext<CourseCtx | null>(null);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<CourseId>(() => {
    try {
      const s = localStorage.getItem(KEY);
      if (s && courseById(s)) return s as CourseId;
    } catch {
      /* ignore */
    }
    return 'korean';
  });
  const setCourse = (next: CourseId) => {
    setId(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
  };
  return <Ctx.Provider value={{ course: courseById(id) ?? courses[0], setCourse }}>{children}</Ctx.Provider>;
}

export const useCourse = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error('CourseProvider missing');
  return c;
};
