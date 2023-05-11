
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./cmp/Layout";
import Home from "./cmp/Home";
import Login from "./cmp/Login";
import SignUp from "./cmp/SignUp";
import NoPage from "./cmp/NoPage";

import './assets/css/style.css'
import ContactUs from "./cmp/ContactUs";
import Courses from "./cmp/Courses";
import Enquiry from "./cmp/Enquiry";
import Protected from "./cmp/user/Protected";
import Users from "./cmp/user/Users";
import Dashboard from "./cmp/user/Dashboard";
import Admission from "./cmp/user/Admission";
import ProtectedAdmin from "./cmp/admin/ProtectedAdmin";
import Admin from "./cmp/admin/Admin";
import DashboardAdmin from "./cmp/admin/DashboardAdmin";
import AdmissionList from "./cmp/admin/AdmissionList";
import EnquiryList from "./cmp/admin/EnquiryList";
import SetSession from "./cmp/admin/SetSession";
import SetCourse from "./cmp/admin/SetCourse";
import EnquiryStatus from "./cmp/EnquiryStatus";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="enquirystatus" element={<EnquiryStatus />} />

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
          <Route path="admission" element={<Admission />} />

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
          <Route path="admissionlist" element={<AdmissionList />} />
          <Route path="enquirylist" element={<EnquiryList />} />

        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
