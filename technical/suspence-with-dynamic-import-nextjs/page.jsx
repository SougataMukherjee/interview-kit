
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), { suspense: true });

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading posts...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
