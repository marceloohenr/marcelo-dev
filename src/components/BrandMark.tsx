import logo from '../assets/mh-logo-transparent.webp';

export default function BrandMark() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <img src={logo} alt="" width={384} height={384} decoding="async" />
    </span>
  );
}
