
import jobData from './data/data.json'

import ResizeHook from './hook/ResizeHook'
import ThemeHook from './hook/ThemeHook'
import Button from './components/Button'


import JobCard , {CardProps} from './components/JobCard'


function App() {

  const Device = ResizeHook()
  const Theme = ThemeHook()

  const Data = jobData[0] as CardProps
  console.log(Data);

  return (
    <div>
      <JobCard Theme={Theme.theme} Props={Data}  ></JobCard>
    </div>
  );
}

export default App;
