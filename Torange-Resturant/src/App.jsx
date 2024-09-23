import Navbar from './Components/Navbar';
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  const router = useRoutes(Routes);
  return (
    <div className="pb-20">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
