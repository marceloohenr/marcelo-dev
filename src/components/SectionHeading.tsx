import Reveal from './Reveal';

interface SectionHeadingProps {
  id: string;
  number: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ id, number, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal>
      <header className="editorial-heading">
        <p className="eyebrow"><span>{number}</span> / {label}</p>
        <div className="heading-columns">
          <h2 id={id}>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </header>
    </Reveal>
  );
}
