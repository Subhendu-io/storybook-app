import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";

import { Home } from "./pages/Home";
import { Overview } from "./pages/Dashboard/Overview";
import { Orders } from "./pages/Dashboard/Orders";
import { Support } from "./pages/Dashboard/Support";
import { FeedBack } from "./pages/Dashboard/Feedback";
import { MarketPlace } from "./pages/Dashboard/MarketPlace";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/app" element={<Dashboard />}>
        <Route index path="overview" element={<Overview />} />
        <Route path="orders" element={<Orders />} />
        <Route path="market-place" element={<MarketPlace />} />
        <Route path="support" element={<Support />} />
        <Route path="feedBack" element={<FeedBack />} />

        <Route path="*" element={<Overview />} />
      </Route>
    </Routes>
  );
}

export default App;
