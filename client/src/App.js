import React ,{ useEffect, useState}from "react";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Periodic from "./pages/Periodic";
import Authentication from "./pages/Auth";
import Course from "./pages/Course";
import Calc from "./pages/Calc";
import Lesson from "./pages/Lesson";
import User from "./pages/User";
import Multi from "./pages/Multi";
import { AuthContext } from "./storage/auth-context";
import MyLearn from "./pages/MyLearn";
import Payment from "./pages/Payment";
import Learning from "./pages/Learning";
import QA from "./pages/Q&A";
import Admin from "./pages/Admin";
import ManageCourse from "./pages/Admin/Course";
import ManageLecture from "./pages/Admin/Lecture";
import ManageLesson from "./pages/Admin/Lesson";
import NotFound from "./pages/Error";
import Success from "./pages/Success";
import Verify from "./pages/Verify";
import Hangman from "./pages/Hangman";
import Minigame from "./pages/Minigame";

const App = () => {
  const [user,setUser] = useState(undefined);
  useEffect(()=>{
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  },[])
  return (
 <React.Fragment>
   <AuthContext.Provider value={{user,setUser}}>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/hub" element={<Hub/>} />
       <Route path="/learn" element={<MyLearn/>} />
       <Route path="/periodic" element={<Periodic/>} />
       <Route path="/course/:id" element={<Course/>} />
       <Route path="/calc" element={<Calc/>} />
       <Route path="/user" element={<User/>} />
       <Route path="/multi/:id" element={<Multi/>} />
       <Route path="/payment/:id" element={<Payment/>} />
       <Route path="/lesson/:id/:index" element={<Lesson/>} />
       <Route path="/learn/:courseid/lesson/:lessonid" element={<Learning/>} /> 
       <Route path={`/qa/:id?`} element={<QA/>} />
       {/* <Route path="/auth"  >
             <Route index element={<Authentication/>}/>
             <Route path=":switch" element={<Authentication/>}/>
        </Route> */}
        <Route path="/auth/:switch" element={<Authentication/>}/>
        <Route path="/manage" element={<Admin/>} />
        <Route path="/manage/course/:courseid" element={<ManageCourse/>} />
        <Route path="/manage/course/:courseid/:lectureid" element={<ManageLecture/>} />
        <Route path="/manage/course/:courseid/:lectureid/:lessonid" element={<ManageLesson/>} />
        <Route path="/success/:variant" element={<Success/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/Minigame" element={<Minigame/>} />
        <Route path="/Hangman" element={<Hangman/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  
      </AuthContext.Provider>
 </React.Fragment>
  );
};

export default App;
