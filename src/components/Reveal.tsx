import type { CSSProperties, ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const style = delay > 0 ? ({ transitionDelay: `${delay}ms` } as CSSProperties) : undefined;

  return (
    <div
      ref={ref}
      data-visible={isVisible ? 'true' : 'false'}
      className={`reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default Reveal;
