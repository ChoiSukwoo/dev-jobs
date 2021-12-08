import './App.css';

import ResizeHook from './hook/ResizeHook'
import ThemeHook from './hook/ThemeHook'
import Button from './components/Button'


function App() {

  const Device = ResizeHook()
  const Theme = ThemeHook()

  return (
    <div>
      <Button>바보</Button>
    </div>
  );
}

export default App;
