/**
 * Ícones SVG inline das linguagens e frameworks usados nos orbs da Hero.
 * Cada ícone é leve (~300-500 bytes), sem dependências externas.
 */

interface TechIconProps {
  className?: string;
  size?: number;
}

export const ReactIcon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

export const TypeScriptIcon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 3h18v18H3V3zm9.72 14.04v1.68c.27.14.64.26 1.02.32.38.07.76.1 1.1.1.36 0 .7-.04 1.02-.14.32-.09.6-.24.83-.43.24-.2.42-.44.55-.74.14-.3.2-.66.2-1.06 0-.3-.04-.56-.14-.78a2.1 2.1 0 0 0-.38-.58c-.16-.16-.34-.3-.56-.44-.2-.13-.43-.26-.67-.38-.18-.1-.33-.18-.46-.27a1.5 1.5 0 0 1-.32-.26.92.92 0 0 1-.18-.27.74.74 0 0 1-.06-.3c0-.1.02-.2.06-.28a.56.56 0 0 1 .18-.22c.08-.06.18-.1.3-.14.12-.03.24-.04.38-.04.1 0 .22 0 .34.03.12.02.24.06.36.1.12.05.22.1.34.18.1.07.2.16.28.26v-1.56a3.26 3.26 0 0 0-.66-.2 4.04 4.04 0 0 0-.82-.08c-.36 0-.68.05-1 .14-.3.1-.56.24-.78.42-.22.18-.4.42-.52.7-.12.28-.18.6-.18.97 0 .52.14.95.44 1.3.3.34.72.64 1.28.9.22.1.4.2.56.3.16.1.3.2.4.3.1.1.18.22.24.34.05.12.08.26.08.42 0 .1-.02.2-.07.3a.66.66 0 0 1-.2.24c-.1.07-.2.12-.34.16-.14.04-.3.06-.48.06a2.4 2.4 0 0 1-.86-.16 2.72 2.72 0 0 1-.74-.44zM8.64 12.74H10.4v5.94h1.72v-5.94h1.76V11.2H8.64v1.54z" />
  </svg>
);

export const NodeJsIcon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 1.85l-9.5 5.5v11l9.5 5.5 9.5-5.5v-11L12 1.85zm0 1.73l7.8 4.5v9L12 21.6l-7.8-4.5v-9L12 3.58zM12 8a1.5 1.5 0 0 0-.75.2l-2.5 1.44A1.5 1.5 0 0 0 8 10.94v2.88a1.5 1.5 0 0 0 .75 1.3l2.5 1.44a1.5 1.5 0 0 0 1.5 0l2.5-1.44a1.5 1.5 0 0 0 .75-1.3v-2.88a1.5 1.5 0 0 0-.75-1.3L12.75 8.2A1.5 1.5 0 0 0 12 8z" />
  </svg>
);

export const NextJsIcon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.5 14.5v-9l7 9h-2.1L10.5 11v5.5h-1.5zm7.06.56L12.4 10.2V16h-1.5V7.5h1.5l5.16 6.86V8H19v7.5c0 .5-.16.94-.44 1.3z" />
  </svg>
);

export const TailwindIcon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.35 10.82 14.46 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.65 7.18 14.54 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.35 16.82 9.46 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.65 13.18 9.54 12 7 12z" />
  </svg>
);

export const JavaScriptIcon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 3h18v18H3V3zm4.73 15.04c.4.73 1.17 1.3 2.3 1.3 1.36 0 2.24-.7 2.24-2.38v-5.65H10.5v5.6c0 .8-.33 1-.84 1-.5 0-.7-.35-.93-.76l-1 .9zm5.53-.26c.46.87 1.4 1.56 2.86 1.56 1.5 0 2.62-.79 2.62-2.16 0-1.3-.75-1.86-2.08-2.42l-.4-.18c-.67-.3-.96-.49-.96-.96 0-.38.3-.68.76-.68.45 0 .75.2.96.68l.96-.64c-.42-.73-1-1.02-1.92-1.02-1.21 0-1.98.77-1.98 1.78 0 1.26.74 1.86 1.86 2.33l.4.17c.72.32 1.14.5 1.14 1.05 0 .44-.42.77-1.07.77-.78 0-1.22-.4-1.56-1l-1.05.6z" />
  </svg>
);

export const Html5Icon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.14 3l1.52 17.06L12 22l6.34-1.94L19.86 3H4.14zM17.27 7H8.2l.2 2.26h8.53l-.65 7.26L12 17.77l-4.28-1.25-.3-3.33h2.2l.16 1.7 2.22.6 2.22-.6.23-2.56H7.7L7.1 7h9.82l-.65 0z" />
  </svg>
);

export const Css3Icon = ({ className, size = 20 }: TechIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.19 3l1.52 17.06L12 22l6.29-1.94L19.81 3H4.19zm13.04 4.14l-.42 4.7-.07.8L12 14.28l-4.74-1.64.32 3.6 4.42 1.22 4.42-1.22.32-3.6h-2.2l-.15 1.72L12 15.4l-2.39-.82-.15-1.72h7.04l.32-3.6H7.18l.32-3.6h9l-.27 1.48z" />
  </svg>
);
