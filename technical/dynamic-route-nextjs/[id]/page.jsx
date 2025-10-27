import { notFound } from 'next/navigation';

const cards = [
  {
    id: 1,
    title: 'Sunset View',
    img: '/images/sunset.jpg',
    desc: 'Beautiful orange sunset.',
  },
  {
    id: 2,
    title: 'Mountain Peak',
    img: '/images/mountain.jpg',
    desc: 'Snow-covered mountain peak.',
  },
  {
    id: 3,
    title: 'City Lights',
    img: '/images/city.jpg',
    desc: 'Night skyline full of lights.',
  },
  {
    id: 4,
    title: 'Beach Waves',
    img: '/images/beach.jpg',
    desc: 'Relaxing ocean waves.',
  },
];

export default function CardDetail({ params }) {
  const { id } = params;
  const card = cards.find((c) => c.id.toString() === id);

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
