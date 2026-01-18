import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: 'Rufus Christian',
    email: 'christian.rufus23@gmail.com'
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;