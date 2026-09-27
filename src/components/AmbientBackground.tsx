import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Braces, Code2, GitBranch, Layers3, Terminal } from 'lucide-react';
import { ReactIcon, NodeJsIcon, TypeScriptIcon } from './TechIcons';
import { usePointerMotion } from '../hooks/usePointerMotion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ornaments = [
  { icon: Code2, x: '4%', y: '20%', size: 42, duration: 23, delay: -4 },
  { icon: ReactIcon, x: '91%', y: '17%', size: 58, duration: 29, delay: -13 },
  { icon: Braces, x: '6%', y: '66%', size: 52, duration: 27, delay: -8 },
  { icon: Terminal, x: '93%', y: '64%', size: 38, duration: 24, delay: -17 },
  { icon: NodeJsIcon, x: '20%', y: '91%', size: 42, duration: 31, delay: -6 },
  { icon: GitBranch, x: '78%', y: '90%', size: 36, duration: 26, delay: -19 },
  { icon: Layers3, x: '49%', y: '11%', size: 30, duration: 28, delay: -11 },
  { icon: TypeScriptIcon, x: '47%', y: '81%', size: 30, duration: 33, delay: -22 },
  { icon: Code2, x: '34%', y: '43%', size: 24, duration: 30, delay: -15 },
  { icon: Braces, x: '67%', y: '48%', size: 32, duration: 25, delay: -3 },
];

export default function AmbientBackground() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => typeof document !== 'undefined' && !document.hidden);
  const running = !reducedMotion && visible;
  usePointerMotion(fieldRef, running);

  useEffect(() => {
    const onVisibilityChange = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  return (
      <div ref={fieldRef} className="ambient-field" data-running={running} aria-hidden="true">
        <div className="ambient-response">
          <div className="ambient-glow ambient-glow-blue" />
          <div className="ambient-glow ambient-glow-violet" />
          <div className="ambient-grid" />
          {ornaments.map(({ icon: Icon, x, y, size, duration, delay }, index) => (
            <span
              key={index}
              className="ambient-icon"
              style={{ left: x, top: y, '--float-duration': `${duration}s`, '--float-delay': `${delay}s` } as CSSProperties}
            >
              <Icon size={size} />
            </span>
          ))}
        </div>
      </div>
  );
}
