import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Event from "./routes/event/event.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />s
        <Route path="event" element={<Event />} />
      </Route>
    </Routes>
  );
};

export default App;
