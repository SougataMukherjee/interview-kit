import { useEffect, useState } from "react";

export default function App() {
  const testimonials = [
    {
      name: "-Sami M",
      photoUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "You are never too old to set another goal or to dream a new dream.",
    },
    {
      name: "-Mimi",
      photoUrl:
        "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "To dream a new dream, you are never too old to set another goal.",
    },
    {
      name: "-Namya N",
      photoUrl:
        "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "You are never too old to set a goal or dream a new dream.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  const { name, photoUrl, text } = testimonials[index];

  return (
    <>
      <style>{`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: -50px;
          transform: translateX(-50%);
        }

        .testimonial-container {
          background-color: slateblue;
          border-radius: 10px;
          padding: 70px 20px;
          color: white;
          position: relative;
        }
      `}</style>

      <div className="main">
        <div className="testimonial-container">
          <img src={photoUrl} alt="user" />
          <p>{text}</p>
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
}
