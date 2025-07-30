import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

import { DEFAULT_CIPHERS } from 'tls';

const Support = () => {
  return (
    <div className="min-h-screen">
      
      {/* <Navigation /> */}
      <Dummy />
      <div className="pt-20">
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
};

export default Support;