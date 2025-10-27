'use client';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = '/about/company' || usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <div>
      <span>Home</span>
      {paths.map((p, i) => (
        <span key={i}> / {p}</span>
      ))}
    </div>
  );
}