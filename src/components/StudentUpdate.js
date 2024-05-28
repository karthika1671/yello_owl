import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Student_add() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: '',
    email: '',
    phone: '',
    enrollNum: '',
    date: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/student/get/${id}`)
        .then(res => {
          setValues({
            id: id,
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            enrollNum: res.data.enrollNum,
            date: res.data.date
          });
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/student/update/${id}`, values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='form-add'>
      <div className='form-box'>
        <h5>Edit Student</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" value={values.id} readOnly />
          <input
            type="text"
            value={values.name}
            onChange={e => setValues({ ...values, name: e.target.value })}
            placeholder='Name'
          /><br />
          <input
            type="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.target.value })}
            placeholder='Email'
          /><br />
          <input
            type="text"
            value={values.phone}
            onChange={e => setValues({ ...values, phone: e.target.value })}
            placeholder='Phone'
          /><br />
          <input
            type="text"
            value={values.enrollNum}
            onChange={e => setValues({ ...values, enrollNum: e.target.value })}
            placeholder='Enroll-number'
          /><br />
          <input
            type="date"
            value={values.date}
            onChange={e => setValues({ ...values, date: e.target.value })}
            placeholder='Date of Admission'
          /><br />
          <button type="submit" className='submit-btn'>Update</button>
          <button type="button" onClick={handleCancel} className='cancel-btn'>Cancel</button>
        </form>
      </div>
    </div>
  );
}
