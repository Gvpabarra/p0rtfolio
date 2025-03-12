// File: Records.jsx
// Gabriel Abarra - Mar 11, 2025

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../src/records.css"; 

const Records = () => {
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch Users & Clients
  useEffect(() => {
    if (!token) {
      alert("Access Denied. Please log in.");
      return;
    }

    const fetchData = async () => {
      try {
        const [userRes, clientRes] = await Promise.all([
          fetch("/api/users", { headers: { Authorization: `Bearer ${token}` } }),
          fetch("/api/contacts", { headers: { Authorization: `Bearer ${token}` } })
        ]);

        if (!userRes.ok) throw new Error("Failed to fetch users");
        if (!clientRes.ok) throw new Error("Failed to fetch clients");

        setUsers(await userRes.json());
        setClients(await clientRes.json());
      } catch (error) {
        console.error("Error fetching records:", error);
        alert("Failed to load records. Please try again later.");
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="records-container">
      <h1>Records</h1>
      <div className="records-grid">
        <div className="table-container">
          <h2>Users</h2>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="2">No users found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h2>Clients</h2>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map((client) => (
                  <tr key={client._id}>
                    <td>{client.firstname} {client.lastname}</td>
                    <td>{client.email}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="2">No clients found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Records;
