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
    <div className={`mb-6 sm:mb-8 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-2.5 ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {badge}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
        {title}
      </h2>

      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
