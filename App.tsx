
import React, { useContext } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import { CalendarIcon, LocationIcon, ClockIcon, TrulloIcon, PlaneIcon, BedIcon, SparklesIcon, FloralDivider, DressCodeIcon, GiftIcon } from './components/icons';
import AccordionItem from './components/AccordionItem';
import { LanguageContext } from './contexts/LanguageContext';
import { translations } from './translations';

const App: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScd_gSrDFdsFf-S_I-k8bwwpBqDqS9z0_D8g/viewform?embedded=true"; // IMPORTANT: Replace with your actual Google Form URL

  return (
    <div className="bg-ivory text-green font-sans antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-orange/30 z-10"></div>
          {/* Image of a trullo in Puglia, Italy */}
          <img src="https://images.unsplash.com/photo-1628926957778-10696ea355ab?q=80&w=1920&auto=format&fit=crop" alt="A sunny view of a trullo in Puglia, Italy" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="relative z-20 p-4">
            <h1 className="font-script text-6xl md:text-9xl mb-2">Elisabetta & Ivan</h1>
            <p className="text-xl md:text-2xl font-light tracking-wider uppercase">{t.heroSubheading}</p>
            <p className="mt-4 text-lg md:text-xl font-sans">{t.heroDate}</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="story" className="py-20 px-6 md:px-12">
           <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-16">
                  <FloralDivider className="w-48 text-green" />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left order-2 md:order-1">
                      <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-6">{t.storyTitle}</h2>
                      <p className="text-lg leading-relaxed text-green/80 mb-4">
                          {t.storyPara1}
                      </p>
                      <p className="text-lg leading-relaxed text-green/80">
                          {t.storyPara2}
                      </p>
                  </div>
                  <div className="order-1 md:order-2">
                      <img src="https://images.unsplash.com/photo-1569426853889-b2de44118f6f?q=80&w=800&auto=format&fit=crop" alt="Elisabetta and Ivan smiling together" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/5]" />
                  </div>
              </div>
          </div>
        </section>

        {/* Details Section */}
        <section id="details" className="bg-ivory py-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex justify-center mb-16">
                    <FloralDivider className="w-48 text-green" />
                </div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-12 flex items-center justify-center gap-4">
                  <TrulloIcon className="w-10 h-10" />
                  {t.detailsTitle}
                  <TrulloIcon className="w-10 h-10 transform -scale-x-100" />
                </h2>
                <div className="grid md:grid-cols-3 gap-12 text-green">
                    <div className="flex flex-col items-center">
                        <CalendarIcon className="w-12 h-12 mb-4 text-orange" />
                        <h3 className="font-sans font-bold text-2xl mb-2">{t.detailsDateTitle}</h3>
                        <p className="text-lg">{t.detailsDateValue}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ClockIcon className="w-12 h-12 mb-4 text-orange" />
                        <h3 className="font-sans font-bold text-2xl mb-2">{t.detailsTimeTitle}</h3>
                        <p className="text-lg">{t.detailsTimeValue1}</p>
                        <p className="text-lg">{t.detailsTimeValue2}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <LocationIcon className="w-12 h-12 mb-4 text-orange" />
                        <h3 className="font-sans font-bold text-2xl mb-2">{t.detailsLocationTitle}</h3>
                        <p className="text-lg">Masseria del Leccio</p>
                        <p className="text-lg">Contrada Leccio, Puglia, IT 72015</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Dress Code Section */}
        <section id="dress-code" className="bg-ivory py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-16">
                    <FloralDivider className="w-48 text-green" />
                </div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-12 flex items-center justify-center gap-4">
                    <DressCodeIcon className="w-10 h-10" />
                    {t.dressCodeTitle}
                </h2>
                <p className="text-lg leading-relaxed text-green/80">
                    {t.dressCodePara}
                </p>
            </div>
        </section>

        {/* Travel & Stay Section */}
        <section id="travel" className="bg-ivory py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-16">
                    <FloralDivider className="w-48 text-green" />
                </div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-12 flex items-center justify-center gap-4">
                    {t.travelTitle}
                </h2>
                <div className="space-y-4 text-left text-green">
                    <div className="bg-terracotta/20 p-8 rounded-lg shadow-sm">
                        <h3 className="font-sans font-bold text-2xl mb-4 text-orange flex items-center gap-3"><PlaneIcon className="w-6 h-6" /> {t.travelGettingHereTitle}</h3>
                        <p className="leading-relaxed text-green/80">
                            {t.travelGettingHerePara}
                        </p>
                    </div>
                    
                    <AccordionItem title={<h3 className="font-sans font-bold text-2xl text-orange flex items-center gap-3"><BedIcon className="w-6 h-6" /> {t.travelAccommodationsTitle}</h3>}>
                        <div className="pt-4 text-green/80">
                            <p className="leading-relaxed mb-2">
                                {t.travelAccommodationsPara1}
                            </p>
                             <p className="leading-relaxed">
                                {t.travelAccommodationsPara2}
                            </p>
                        </div>
                    </AccordionItem>
                    
                    <AccordionItem title={<h3 className="font-sans font-bold text-2xl text-orange flex items-center gap-3"><SparklesIcon className="w-6 h-6" /> {t.travelExploreTitle}</h3>}>
                        <div className="pt-4 text-green/80">
                           <p className="leading-relaxed">
                                {t.travelExplorePara}
                            </p>
                        </div>
                    </AccordionItem>
                </div>
            </div>
        </section>


        {/* Photo Gallery Section */}
        <section id="photos" className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-16">
                <FloralDivider className="w-48 text-green" />
            </div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-12">{t.photosTitle}</h2>
            <PhotoGallery />
          </div>
        </section>
        
        {/* Gift Section */}
        <section id="gifts" className="bg-ivory py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-16">
                    <FloralDivider className="w-48 text-green" />
                </div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-12 flex items-center justify-center gap-4">
                    <GiftIcon className="w-10 h-10" />
                    {t.giftsTitle}
                </h2>
                <p className="text-lg leading-relaxed text-green/80 mb-4">
                    {t.giftsPara1}
                </p>
                <p className="text-lg leading-relaxed text-green/80 mb-8">
                    {t.giftsPara2}
                </p>
                <div className="bg-terracotta/20 inline-block px-6 py-4 rounded-lg font-mono text-orange tracking-widest text-lg">
                    IT 12 A 12345 12345 123456789012
                </div>
                 <p className="text-lg leading-relaxed text-green/80 mt-8">
                    {t.giftsPara3}
                </p>
            </div>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="bg-ivory py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                 <div className="flex justify-center mb-16">
                    <FloralDivider className="w-48 text-green" />
                </div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl text-orange mb-4">{t.rsvpTitle}</h2>
                <p className="text-lg mb-8 text-green/80">{t.rsvpPara}</p>
                <div className="aspect-w-1 aspect-h-1 md:aspect-w-3 md:aspect-h-2">
                   <iframe
                      src={googleFormUrl}
                      width="100%"
                      height="900"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="RSVP Form"
                      className="rounded-lg shadow-lg"
                      >
                      Loading…
                    </iframe>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
