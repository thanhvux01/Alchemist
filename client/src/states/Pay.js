import React ,{createContext, useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { configAxios } from '../config';
export const PaymentContext = createContext();

const PaymentState = (prop) => {
  const [Course,setCourse] = useState();
  const Navigate = useNavigate();
  const params = useParams();
  const {id} = params;
  const GetCourse = async () => {
    try{
        const course =  await axios.get(`/course/get-course/${id}`,configAxios);
        setCourse(course.data);
    }catch(err){
    console.log(err);
    }
  }
  const PayCourse = async () => {
     try{
        await axios.post("http://localhost:5000/api/course/add-course-user",{id:Course._id},configAxios);
        Navigate("/Success/order")
     }catch(err){
     console.log(err);
     }
  }
  useEffect(()=>{
     GetCourse();
  },[])

  return (
    <PaymentContext.Provider value={{Course,PayCourse}}>
       {prop.children}
    </PaymentContext.Provider>
  )
}

export default PaymentState