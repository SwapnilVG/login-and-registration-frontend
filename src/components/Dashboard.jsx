// UserTable.jsx
import React from 'react';
import { Table } from 'react-bootstrap';
import { FaCog, FaTrash } from 'react-icons/fa';
import '../App.css';
import Antonio from '../assets/images/Antonio_Moreno.jpg'
import Martin_Sommer from '../assets/images/Martin_Sommer.jpg'
import MarySaveley from '../assets/images/MarySaveley.jpg'
import Michael_Holz from '../assets/images/Michael_Holz.jpg'
import Paula_Wilson from '../assets/images/Paula_Wilson.jpg'

const Dashboard = () => {
  // Sample data
  const users = [
    { id: 1, name: 'Michael Holz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active', avatar: Antonio},
    { id: 2, name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active', avatar: Martin_Sommer },
    { id: 3, name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended', avatar: MarySaveley },
    { id: 4, name: 'Mary Saveley', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active', avatar: Michael_Holz },
    { id: 5, name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive', avatar: Paula_Wilson },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'text-success';
      case 'Suspended':
        return 'text-danger';
      case 'Inactive':
        return 'text-warning';
      default:
        return '';
    }
  };

  return (
    <div className="container mt-5">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img src={user.avatar} alt="avatar" className="avatar-img" />
                {user.name}
              </td>
              <td>{user.dateCreated}</td>
              <td>{user.role}</td>
              <td className={getStatusClass(user.status)}>{user.status}</td>
              <td className='d-flex justify-content-center align-items-center'>
                <FaCog className="action-icon" /> &nbsp; &nbsp;
                <FaTrash className="action-icon text-danger" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
