import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../Service';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllUsers();
      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow rounded">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-1 text-center">Registered Users</h4>
        </div>
        <div className="card-body p-0">
          {userdata.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover table-striped mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {userdata.map((user, index) => (
                    <tr key={index}>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-4 text-center text-muted">No users found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
