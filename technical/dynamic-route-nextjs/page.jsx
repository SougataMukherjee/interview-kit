import Link from 'next/link';
import './styles.css';

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

export default function Home() {
  return (
    <div className="container">
      <h2>Photo Gallery</h2>
      <div className="grid">
        {cards.map((card) => (
          <Link href={`/${card.id}`} key={card.id} className="card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
