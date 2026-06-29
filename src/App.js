import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";
import Authentication from "./routes/auth/authentication.component";
import Blogging from "./routes/blog/blogging.component";
import RootPage from "./routes/root/root-page.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<RootPage/>}/>
        <Route path="/login" element={<Authentication/>}/>
        <Route path="/blog" element={<Blogging/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
