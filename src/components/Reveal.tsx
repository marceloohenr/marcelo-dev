import type { CSSProperties, ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

const Reveal = ({ children, className = '', delay = 0, style }: RevealProps) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const mergedStyle = {
    ...(style ?? {}),
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-visible={isVisible ? 'true' : 'false'}
      className={`reveal ${className}`.trim()}
      style={mergedStyle}
    >
      {children}
    </div>
  );
};

export default Reveal;
