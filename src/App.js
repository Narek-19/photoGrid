import { Gallery } from "./components/Gallery";
import { GalleryLayout } from "./components/GalleryLayout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GalleryLayout>
        <Gallery />
      </GalleryLayout>
    </div>
  );
}

export default App;
