interface GooglePlayButtonProps {
  url: string;
  variant?: 'primary' | 'secondary' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export function GooglePlayButton({
  url,
  variant = 'primary',
  size = 'md',
  className = '',
  label = 'View on Google Play',
}: GooglePlayButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  }[size];

  if (variant === 'badge') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 text-white transition-all shadow-lg hover:shadow-blue-500/10 group ${className}`}
      >
        <svg
          className="w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.609 1.813a1.5 1.5 0 0 0-.359 1.03v18.314c0 .385.127.749.359 1.03l9.902-9.902L3.609 1.813z"
            fill="#00E676"
          />
          <path
            d="M17.48 8.441L14.77 11.15l-1.258 1.135 1.258 1.135 2.71 2.71 3.513-2.029a1.488 1.488 0 0 0 0-2.63L17.48 8.44z"
            fill="#FFD600"
          />
          <path
            d="M3.609 22.187l9.902-9.902 3.969 3.969-12.75 7.362a1.36 1.36 0 0 1-1.121-1.429z"
            fill="#FF1744"
          />
          <path
            d="M3.609 1.813l13.87 8.009-3.969 3.463L3.609 3.383c.127-.585.578-1.218 1.121-1.57z"
            fill="#00B0FF"
          />
        </svg>
        <div className="text-left flex flex-col">
          <span className="text-[10px] uppercase font-medium tracking-wider text-slate-400 leading-none">
            Get it on
          </span>
          <span className="text-sm font-semibold text-white leading-tight tracking-tight">
            Google Play
          </span>
        </div>
      </a>
    );
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white',
    badge: '',
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants} ${sizeClasses} ${className}`}
    >
      <svg
        className="w-4 h-4 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3.609 1.813a1.5 1.5 0 0 0-.359 1.03v18.314c0 .385.127.749.359 1.03l9.902-9.902L3.609 1.813z" fill="#00E676" />
        <path d="M17.48 8.441L14.77 11.15l-1.258 1.135 1.258 1.135 2.71 2.71 3.513-2.029a1.488 1.488 0 0 0 0-2.63L17.48 8.44z" fill="#FFD600" />
        <path d="M3.609 22.187l9.902-9.902 3.969 3.969-12.75 7.362a1.36 1.36 0 0 1-1.121-1.429z" fill="#FF1744" />
        <path d="M3.609 1.813l13.87 8.009-3.969 3.463L3.609 3.383c.127-.585.578-1.218 1.121-1.57z" fill="#00B0FF" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
