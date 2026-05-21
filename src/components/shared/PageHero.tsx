import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Breadcrumb = {
  label: string;
  to?: string;
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  actions?: ReactNode;
};

export function PageHero({ title, subtitle, breadcrumbs = [], actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_40%)]" />
      </div>

      <div className="container relative space-y-6">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to} className="underline-offset-2 hover:underline">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? 'page' : undefined}>{crumb.label}</span>
                    )}
                    {!isLast && <span aria-hidden="true">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle ? <p className="text-base text-white/90 sm:text-lg">{subtitle}</p> : null}
        </div>

        {actions ? <div>{actions}</div> : null}
      </div>
    </section>
  );
}
