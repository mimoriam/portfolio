interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
        {title}
      </h2>

      <p className="text-base md:text-lg text-slate-400 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
