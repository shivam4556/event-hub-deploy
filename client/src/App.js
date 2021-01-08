import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/PortfolioPage/Portfolio";
import Filter from "./Components/FilterPage/Filter";
import Login from "./Components/AuxillaryPages/Login Page/Login";
import ProfilePage from "./Components/AuxillaryPages/Profile Page/ProfilePage";
import AboutUs from "./Components/AuxillaryPages/About Page/AboutUs";
import UserRegisterationPage from "./Components/AuxillaryPages/Registeration Page/UserRegisterationPage";
import CompanyRegisterationPage from "./Components/AuxillaryPages/Registeration Page/CompanyRegisterationPage";
import ContactUs from "./Components/AuxillaryPages/Contact Us/ContactUs";
import FAQs from "./Components/AuxillaryPages/FAQs/FAQs";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/portfolio/:companyID">
            <Portfolio />
          </Route>
          <Route exact path="/:userOrCompany/portfolio/:id">
            <Portfolio />
          </Route>
          <Route exact path="/filter">
            <Filter />
          </Route>
          <Route exact path="/:userOrCompany/filter">
            <Filter />
          </Route>
          <Route exact path="/:userOrCompany/filter/:id">
            <Filter />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile_page">
            <ProfilePage />
          </Route>
          <Route exact path="/:userOrCompany/profile_page/:id">
            <ProfilePage />
          </Route>
          <Route exact path="/about_us">
            <AboutUs />
          </Route>
          <Route exact path="/:userOrCompany/about_us">
            <AboutUs />
          </Route>
          <Route exact path="/:userOrCompany/about_us/:id">
            <AboutUs />
          </Route>
          <Route exact path="/user_registeration">
            <UserRegisterationPage />
          </Route>
          <Route exact path="/:userOrCompany/user_registeration">
            <UserRegisterationPage />
          </Route>
          <Route exact path="/:userOrCompany/user_registeration/:id">
            <UserRegisterationPage />
          </Route>
          <Route exact path="/company_registeration">
            <CompanyRegisterationPage />
          </Route>
          <Route exact path="/:userOrCompany/company_registeration">
            <CompanyRegisterationPage />
          </Route>
          <Route exact path="/:userOrCompany/company_registeration/:id">
            <CompanyRegisterationPage />
          </Route>
          <Route exact path="/contact_us">
            <ContactUs />
          </Route>
          <Route exact path="/:userOrCompany/contact_us">
            <ContactUs />
          </Route>
          <Route exact path="/:userOrCompany/contact_us/:id">
            <ContactUs />
          </Route>
          <Route exact path="/faqs">
            <FAQs />
          </Route>
          <Route exact path="/:userOrCompany/faqs">
            <FAQs />
          </Route>
          <Route exact path="/:userOrCompany/faqs/:id">
            <FAQs />
          </Route>
          <Route exact path="/:userOrCompanyorId/:id">
            <Home />
          </Route>
          <Route exact path="/:userOrCompanyorId">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
