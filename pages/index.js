import { Footer, Navbar } from '../components';
import { GetStarted1, GetStarted2, Hero, Insights, WhatsNew1,WhatsNew2, World } from '../sections';

const Home = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />

    <div className="relative">
      <GetStarted1 />
      <div className="gradient-04 z-0" />
      <WhatsNew1 />
    </div>
    <div className="relative">
      <GetStarted2 />
      <div className="gradient-04 z-0" />
      <WhatsNew2 />
    </div>
    <Footer />
  </div>
);

export default Home;
