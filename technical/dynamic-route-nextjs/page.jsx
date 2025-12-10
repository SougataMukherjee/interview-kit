import Link from 'next/link';
import './styles.css';
import { getData } from "@/getData";

export default function Home() {
  return (
    <div className="container">
      <h2>Photo Gallery</h2>
      <div className="grid">
        {getData().map((card) => (
          <Link href={`/${card.id}`} key={card.id} className="card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
