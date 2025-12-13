import { AppContainer, LoadContainer } from './App';
import GlobalStyle from './GlobalStyle';
import WeekendTimer from './components/WeekendTimer';
import Logo from './components/Logo';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20000); // 20-second loading screen
    return () => clearTimeout(timer);
  }, []);

  const endLoad = () => {
    setIsLoading(false);
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {isLoading ? (
          <LoadContainer onClick={endLoad}>
            <Logo/>
            <p>Click to skip loading</p>
          </LoadContainer>
        ) : (
          <WeekendTimer />
        )}
      </AppContainer>
    </>
  );
}

export default App;
