import React from 'react'
import ContactSidebear from '../../Components/ContactSidebear/ContactSidebear'
import "./HomeScreen.css"
import Settings from '../Settings/Settings';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomeScreenSection from '../HomeScreenSection/HomeScreenSection';
import SettingsSection from '../SettingsSection/SettingsSection';
import ContactScreen from '../ContactScreen/ContactScreen';
import { SidebearLeft } from '../../Components/SidebearLeft/SidebearLeft';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isChatting = location.pathname.includes("/contact/") && location.pathname !== "/contact";

  return (
    <div className='homescreen'>
      {(!isMobile || !isChatting) && <SidebearLeft />}

      {(!isMobile || !isChatting) && (
        <div className={isMobile ? 'show-on-mobile' : 'sidebar-desktop'}> 
          <Routes>
            <Route path='*' element={<ContactSidebear />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>
      )}

      <hr className='hr' />

      <section className={(isMobile && isChatting) ? 'section-mobile-show' : 'section'}>
        <Routes>
          <Route path='/contact/:contact_id' element={<ContactScreen />} />
          <Route path="/Settings" element={<SettingsSection />} />
          <Route path="/" element={<HomeScreenSection />} />
        </Routes>
      </section>
    </div>
  );
}