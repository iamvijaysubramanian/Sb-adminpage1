import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import Dashboard from "./Dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import Viewuser from "./Viewuser";
import Edituser from "./Edituser";
import PortalLayout from "./PortalLayout";
import Login from "./Login";
import { UserContext } from "./Usercontext";
import { useContext } from "react";
import Products from "./Products";
import Students from "./Students";
import Teachers from "./Teachers";
import Productcreate from "./Productcreate";
import Viewproduct from "./Viewproduct";
import Editproduct from "./Editproduct";
import Studentcreate from "./Studentcreate";
import Viewstudent from "./Viewstudent";
import Editstudent from "./Editstudent";
import Teachercreate from "./Teachercreate";
import Viewteacher from "./Viewteacher";
import Editteacher from "./Editteacher";

function App() {
  const {user} =useContext(UserContext);
 
  return (
    <BrowserRouter>     
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/portal" element={<PortalLayout/>}>
              <Route path="/portal/dashboard" element={<Dashboard/>}/>
              <Route exact path="/portal/users" element={<User/>}/>
              <Route exact path="/portal/users/user_create" element={<Usercreate/>}/>
              <Route path="/portal/users/user/:id" element={<Viewuser/>}/>
              <Route path="/portal/users/edit/:id" element={<Edituser/>}/>
              <Route path="/portal/products" element={<Products/>}/>
              <Route path="/portal/products/product_create" element={<Productcreate/>}/>
              <Route path="/portal/products/product/:id" element={<Viewproduct/>}/>
              <Route path="/portal/products/edit/:id" element={<Editproduct/>}/>
              <Route path="/portal/students" element={<Students/>}/>
              <Route path="/portal/students/student_create" element={<Studentcreate/>}/>
              <Route path="/portal/students/student/:id" element={<Viewstudent/>}/>
              <Route path="/portal/students/edit/:id" element={<Editstudent/>}/>
              <Route path="/portal/teachers" element={<Teachers/>}/>
              <Route path="/portal/teachers/teacher_create" element={<Teachercreate/>}/>
              <Route path="/portal/teachers/teacher/:id" element={<Viewteacher/>}/>
              <Route path="/portal/teachers/edit/:id" element={<Editteacher/>}/>
              </Route>
            </Routes>            
            </BrowserRouter>
  );
}

export default App;
