import { useState, useEffect } from 'react'
import './App.css'
import './styles/main.css'
import './styles/extraLarge.css'
import './styles/medium.css'
import Header from './components/Header'
import FrontPageHero from './components/FrontPageHero'
import FloatingCardBlock from './components/FloatingCardBlock'
import PageInfo from './components/PageInfo'
import CardDescription from './components/CardDescription'
import ClientCarousel from './components/ClientCarousel'
import MixedMediaTextBlock from './components/MixedMediaTextBlock'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const scrollTop = element.scrollTop;
      setScrollHeight(scrollTop + 200);
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight]);

  return (
    <>
      <Header />
      <FrontPageHero />
      <CardDescription />
      <PageInfo />
      <ClientCarousel />
      <FloatingCardBlock />
      <MixedMediaTextBlock scrollHeight={scrollHeight} />
      <News />
      <Footer />
    </>
  )
}

export default App
