import ReactCurvedText from 'react-curved-text';
import { AppContainer } from './App';
import GlobalStyle from './GlobalStyle';
import WeekendTimer from './components/WeekendTimer';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* <Logo /> */}
        <WeekendTimer />
      </AppContainer>
    </>
  );
}

export default App;
