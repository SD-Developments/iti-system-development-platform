import gsap from 'gsap';
import BrandingNavBar from './components/BrandingNavBar';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Home from './pages/Home';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <BrandingNavBar />
      <Home />
      <div className="bg-red-400 w-full h-dvh"></div>
      <div className="bg-blue-400 w-full h-dvh"></div>
    </>
  );
}

export default App;
