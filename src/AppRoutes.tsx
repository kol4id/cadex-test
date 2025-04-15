import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import App from "./App";
import Home from "./app/pages/Home";


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<App />} />
        </Routes>
    </Router>
)

export default AppRoutes;