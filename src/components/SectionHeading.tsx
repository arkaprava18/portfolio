type SectionHeadingProps = {
  as?: 'h1' | 'h2' | 'h3';
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  as: Heading = 'h2',
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{eyebrow}</p>
      ) : null}
      <Heading className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </Heading>
      {subtitle ? (
        <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
