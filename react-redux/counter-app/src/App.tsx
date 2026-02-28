// import Counter from './domain/counter/components/Counter'
// import TodoContainer  from './domain/todo/container'
// import  GalleryContainer  from './domain/image-gallery/container/GalleryContainer';
// import  GallerySearchContainer  from './domain/search-filter/container/GalleryContainer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './app/shop-kart/components/Route';


function App() {
  return (<>
  {/* <Counter /> */}
  {/* <TodoContainer /> */}
  {/* <GalleryContainer /> */}
  {/* <GallerySearchContainer /> */}
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  </>)
}

export default App
