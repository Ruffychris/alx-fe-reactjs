import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Rufus Christian" age={31} bio="I love playing football and coding." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;