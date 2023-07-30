
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./cmp/Layout";
import Home from "./cmp/Home";
import Login from "./cmp/Login";
import SignUp from "./cmp/SignUp";
import NoPage from "./cmp/NoPage";

import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/icofont.min.css'
import './assets/css/icofont.css'
// import './assets/css/lightcase.css'
import './assets/css/swiper.min.css'

import './assets/css/style.css'
import ContactUs from "./cmp/ContactUs";
import Courses from "./cmp/Courses";
import Enquiry from "./cmp/Enquiry";
import Protected from "./cmp/user/Protected";
import Users from "./cmp/user/Users";
import Dashboard from "./cmp/user/Dashboard";
import ProtectedAdmin from "./cmp/admin/ProtectedAdmin";
import Admin from "./cmp/admin/Admin";
import DashboardAdmin from "./cmp/admin/DashboardAdmin";
import EnquiryList from "./cmp/admin/EnquiryList";
import SetSession from "./cmp/admin/SetSession";
import SetCourse from "./cmp/admin/SetCourse";
import EnquiryStatus from "./cmp/EnquiryStatus";
import EnquiryDetails from "./cmp/admin/EnquiryDetails";
import EnquiryAccept from "./cmp/admin/EnquiryAccept";
import RegistrationStatus from "./cmp/user/RegistrationStatus";
import RegistrationList from "./cmp/admin/RegistrationList";
import RegistrationDetails from "./cmp/admin/RegistrationDetails";
import StudyNotes from "./cmp/StudyNotes";
import StudyNotesAdmin from "./cmp/admin/StudyNotesAdmin";


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="loadr">
        <div className="loader_bg">
          <div className="loader_body_bg"></div>
          <div id="nest" className="loader_wait">
            <span>&nbsp;</span>
            </div>
            </div>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="enquirystatus" element={<EnquiryStatus />} />
          <Route path="studynotes" element={<StudyNotes />} />

          <Route path="*" element={<NoPage />} />
        </Route>
        

        <Route path='/users/*'
            element={
              <Protected Cmp={Users}>
                <Users />
              </Protected>
            }
          > 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registrationstatus" element={<RegistrationStatus />} />

        </Route>

        <Route path='/admin/*'
            element={
              <ProtectedAdmin Cmp={Admin}>
                <Admin />
              </ProtectedAdmin>
            }
          > 
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="setsession" element={<SetSession />} />
          <Route path="setcourseapplied" element={<SetCourse />} />
          <Route path="registrationlist" element={<RegistrationList />} />
          <Route path="enquirylist" element={<EnquiryList />} />
          <Route path="enquiryAcceptlist" element={<EnquiryAccept />} />
          <Route path="enquirydetails/:id" element={<EnquiryDetails />} />
          <Route path="registrationdetails/:id" element={<RegistrationDetails />} />
          <Route path="studynotes" element={<StudyNotesAdmin />} />

          

        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
