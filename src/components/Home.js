import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from '../images/edited.png'
import image2 from '../images/delete.png'
import image3 from '../images/yellow-owl.png'
import { NavLink ,Link} from 'react-router-dom';

export default function Home() {
  const [list, setList] = useState([]);
 


  useEffect(() => {
    axios.get('http://localhost:3001/student/get')
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  }, []);

  

  return (
    <div>
      <div className='row'>
        <div className='col-md-3'>
          <div className='side-bar'>
            <img src={image3} className='logo' alt=""></img>
            <h4>Yellow Owl</h4>
            <h5>Admin</h5>
          </div>
        </div>
        <div className='col-md-9'>
          <div className='main'>
            <div className='stud'>
              Students
            </div>
          </div>
          <div className='section'>
            <span className='text'>Students</span>
            <input type='text' placeholder='Search' id="input-box"></input>
            <button className='add-btn'><NavLink to="/students-add"className='add-btn'>ADD NEW STUDENT</NavLink></button>
            <table >
              <div className='table-box'>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th className='enroll'>ENROLL-NUMBER</th>
                  <th className='dateofadd'>DATE OF ADMISSION</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list.map((x, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.phone}</td>
                    <td>{x.enrollNum}</td>
                    <td>{x.date}</td>
                    <td>
                      
                      <Link to={`/students-update/${x._id}`}> <img src={image1} alt="..." className='image-1'/></Link>
                      <Link to={`/students-delete/${x._id}`}><img src={image2} alt="..." className='image-1'/></Link>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
              </div>
            </table>

           
          </div>
        </div>
      </div>
    </div>
  );
}
