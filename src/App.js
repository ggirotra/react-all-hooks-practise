import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import { UserProfile, UserProvider } from "./UseContext/ContextAPI";
import  UserStateProfileZustand from "./UseZustandState/ZustandStateUsage";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

// function App() {
//   return (
//     <div className="App">
//       {/* <ImperativeHandle /> */}
//       {/* <UserProvider>
//         <UserProfile />
//       </UserProvider> */}
//       <UserStateProfileZustand />
//     </div>
//   );
// }
const App = () => <UserStateProfileZustand />

export default App;
