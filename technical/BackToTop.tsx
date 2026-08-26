import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to toggle visibility

    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      // show button
      setIsVisible(true)
    } else {
      // hide button
      setIsVisible(false)
    }
  }
  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({top:0,behavior:'smooth'})
  }
  const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `This is a paragraph ${i + 1}`,
}));
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>
      {items.map((item) => (
    <div key={item.id} style={{height:'60px'}}>
        {item.name}
    </div>
    ))}

      <div className="container">
        {isVisible &&
          (<button
            className="backtotop-btn"
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>)
        }
      </div>
    </div>
  );
}
export default BackToTop;