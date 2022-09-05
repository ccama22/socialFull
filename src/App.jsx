import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";
import UserPage from "./components/Admin/UserPage";
import UserProfile from "./components/Admin/UserProfile";
import FormMain from "./components/Form/FormMain";
import Header from "./components/layout/Header";
import RegisterMain from "./components/Register/RegisterMain";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import PublicRoutesRegister from "./routes/PublicRoutesRegister";
function App() {
  return (
    // <div>
    //   <FormMain />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<FormMain />} />
        </Route>

        <Route path="/register" element={<PublicRoutesRegister />}>
          <Route index element={<RegisterMain />} />
        </Route>
        <Route path="/admin" element={<PrivateRoutes />}>
          <Route path="" element={<Header />}>
            <Route index element={<UserPage />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<PublicRoutes />}>
    //       <Route index element={<LoginPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
