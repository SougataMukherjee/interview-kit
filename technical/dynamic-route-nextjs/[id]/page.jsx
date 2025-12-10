import { notFound } from 'next/navigation';
import { getData } from "@/getData";

//using params we can take data from parent no need to use usePathname because its use 'use client'
export default function CardDetail({ params }) {
  const { id } = params;
  const card = getData().find((c) => c.id.toString() === id);

  if (!card) return notFound();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{card.title}</h2>
      <img
        src={card.img}
        alt={card.title}
        width="400"
        style={{ borderRadius: '10px' }}
      />
      <p>{card.desc}</p>
    </div>
  );
}
