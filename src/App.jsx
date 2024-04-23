import { Route, Routes } from "react-router-dom";
import { Button, Icon } from "./components";
import { Home } from "./pages";

function App() {
    return (
        <div className="wrapper">
            <header></header>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <footer></footer>
        </div>
    );
}

export default App;
