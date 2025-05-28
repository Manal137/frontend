


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [userStatuses, setUserStatuses] = useState({});
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/admin/all-users`);
      const data = await res.json();
      setUsers(data);
      const initialStatuses = {};
      data.forEach((user) => {
        initialStatuses[user.id] = user.is_approved ? 'approved' : 'pending';
      });
      setUserStatuses(initialStatuses);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('adminToken');
    setShowLogoutDialog(true);
    setTimeout(() => {
      setShowLogoutDialog(false);
      navigate('/');
    }, 2000);
  };

  const handleToggleApproval = async (userId) => {
    const currentStatus = userStatuses[userId];
    const isApproved = currentStatus === 'approved';

    const url = `${API_BASE}/api/auth/admin/${isApproved ? 'disapprove' : 'approve'}`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Action failed');
      }

      setUserStatuses((prev) => ({
        ...prev,
        [userId]: isApproved ? 'disapproved' : 'approved',
      }));
    } catch (err) {
      console.error('Approval toggle error:', err);
      alert('Action failed: ' + err.message);
    }
  };

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/api/auth/admin/delete-user/${userId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Delete failed');
      }

      setUserStatuses((prev) => ({
        ...prev,
        [userId]: 'removed',
      }));

      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete user: ' + err.message);
    }
  };

  const renderStatus = (status) => {
    const base = 'px-2 py-1 rounded-full text-xs font-semibold';
    switch (status) {
      case 'approved':
        return <span className={`${base} bg-green-100 text-green-700`}>Approved</span>;
      case 'pending':
        return <span className={`${base} bg-yellow-100 text-yellow-700`}>Pending</span>;
      case 'disapproved':
        return <span className={`${base} bg-red-100 text-red-700`}>Disapproved</span>;
      case 'removed':
        return <span className={`${base} bg-gray-300 text-gray-700`}>Removed</span>;
      default:
        return <span className={`${base} bg-gray-200 text-gray-600`}>Unknown</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 rounded-lg"
         style={{
           backgroundColor: '#f5f0e6',
           boxShadow: '0 8px 24px rgba(139, 94, 60, 0.3)',
           minHeight: '90vh',
         }}>
      <div className="flex justify-between items-center mb-7 relative">
        <h2 className="text-4xl font-bold text-center border-b pb-4"
            style={{ color: '#5b3a29', borderColor: '#a97458' }}>
          Admin Portal
        </h2>
        <div style={{ position: 'relative' }}>
          <button onClick={handleLogout}
                  className="bg-[#8b5e3c] hover:bg-[#a97458] text-white px-4 py-2 rounded-md transition font-semibold">
            Logout
          </button>
          {showLogoutDialog && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              right: 0,
              backgroundColor: '#ffffff',
              padding: '4px 8px',
              border: '1px solid #ddd',
              borderRadius: '2px',
              fontSize: '0.75rem',
              color: '#333',
              zIndex: 1000,
              minWidth: '100px',
              boxShadow: 'none',
            }}>
              Logged out successfully! Redirecting...
            </div>
          )}
        </div>
      </div>

      {users.length === 0 ? (
        <p className="text-center italic text-[#8b5e3c]">No users available</p>
      ) : (
        <div className="overflow-x-auto rounded shadow bg-white">
          <table className="min-w-full text-sm text-left" style={{ color: '#5b3a29' }}>
            <thead className="bg-[#a97458] text-white" style={{ fontWeight: '600' }}>
              <tr>
                <th className="py-3 px-4">Username</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}
                    className="border-b hover:bg-[#f5f0e6] transition">
                  <td className="py-3 px-4 font-medium">{user.username}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{renderStatus(userStatuses[user.id])}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button onClick={() => handleToggleApproval(user.id)}
                            disabled={userStatuses[user.id] === 'removed'}
                            className={`px-4 py-2 rounded-md text-white transition ${
                              userStatuses[user.id] === 'approved'
                                ? 'bg-[#8b5e3c] hover:bg-[#a97458]'
                                : 'bg-[#8b5e3c] hover:bg-[#a97458]'
                            } ${userStatuses[user.id] === 'removed' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ fontWeight: '600' }}>
                      {userStatuses[user.id] === 'approved' ? 'Disapprove' : 'Approve'}
                    </button>
                    <button onClick={() => handleDelete(user.id)}
                            disabled={userStatuses[user.id] === 'removed'}
                            className={`px-4 py-2 bg-[#5b3a29] text-white rounded-md hover:bg-[#8b5e3c] transition ${
                              userStatuses[user.id] === 'removed' ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            style={{ fontWeight: '600' }}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
