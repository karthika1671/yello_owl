import React from 'react'
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';

export default function StudentDelete() {
    const {id}=useParams();
    const navigate = useNavigate();
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3001/student/delete/'+id)
          .then(res => {
            console.log("deleted successfully");
            navigate('/');
          })
          .catch(err => console.log(err));
      }
      const handleCancel = ()=>{
        navigate('/')
      }
  return (
    <div>
        <div className='form-add'>
      <div className='formdelete-box'>
        <h5>Are You Sure Want to Delete the Student?</h5>
        <button className='yesbtn' onClick={handleDelete}>Yes</button>
        <button className='nobtn' onClick={handleCancel}>No</button>
       
      </div>
    </div>
    </div>
  )
}
