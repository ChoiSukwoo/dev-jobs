import jobData from './data/data.json'
import {CardType} from "./types/componentsType"

import ResizeHook from './hook/ResizeHook'
import ThemeHook from './hook/ThemeHook'

import MainLayout from './Layouts/MainLayout'
import DetailLayout from './Layouts/DetailLayout'


function App() {

  const Device = ResizeHook()
  const Theme = ThemeHook()

  const Data = jobData[0] as CardType


  return (
    // <MainLayout Theme={Theme} Device={Device} />
    <DetailLayout Theme={Theme} Device={Device}/>
  );
}

export default App;


// <div>
      
// {/* <button onClick={()=>{ Theme.changeTheme()}}>다크</button>

// <JobCard Theme={Theme.theme} Props={Data}  ></JobCard> */}
// </div>