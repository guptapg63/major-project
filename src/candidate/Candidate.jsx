import React, { useState } from 'react';
import { Home, User, AlertTriangle, FileText, BarChart2, Settings, Clipboard, LogOut, Grid, ChevronLeft, ChevronRight } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import "./candidate.css";

const allEmployees = [   
  { name: 'John Smith', mobNo: '+912345678901', address: 'Gurgaon', status: 'verify' },
  { name: 'Suzene', mobNo: '+912345678901', address: 'Gurgaon', status: 'process' },
  { name: 'Walsh', mobNo: '+912345678901', address: 'Gurgaon', status: 'clear' },
  { name: 'Maurila', mobNo: '+912345678901', address: 'Gurgaon', status: 'confirm' },
  { name: 'Kundra', mobNo: '+912345678901', address: 'Gurgaon', status: 'valid' },
  { name: 'Erasene', mobNo: '+912345678901', address: 'Gurgaon', status: 'invalid' },
  { name: 'Juneme', mobNo: '+912345678901', address: 'Gurgaon', status: 'verify' },
  { name: 'John Smith', mobNo: '+912345678901', address: 'Gurgaon', status: 'process' },
  { name: 'Carl', mobNo: '+912345678901', address: 'Gurgaon', status: 'clear' },
  { name: 'Kimble', mobNo: '+912345678901', address: 'Gurgaon', status: 'confirm' },
  { name: 'Jane Doe', mobNo: '+912345678902', address: 'Delhi', status: 'verify' },
  { name: 'Robert', mobNo: '+912345678903', address: 'Delhi', status: 'process' },
  { name: 'Linda', mobNo: '+912345678904', address: 'Delhi', status: 'clear' },
  { name: 'Michael', mobNo: '+912345678905', address: 'Delhi', status: 'confirm' },
  { name: 'Sarah', mobNo: '+912345678906', address: 'Delhi', status: 'valid' },
  { name: 'David', mobNo: '+912345678907', address: 'Delhi', status: 'invalid' },
  { name: 'Laura', mobNo: '+912345678908', address: 'Delhi', status: 'verify' },
  { name: 'James', mobNo: '+912345678909', address: 'Delhi', status: 'process' },
  { name: 'Emma', mobNo: '+912345678910', address: 'Delhi', status: 'clear' },
  { name: 'Daniel', mobNo: '+912345678911', address: 'Delhi', status: 'confirm' },
];

const PAGE_SIZE = 10;

const Candidate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(allEmployees);
  const [isDataFound, setIsDataFound] = useState(true); // New state to track data presence

  const navigate = useNavigate(); 

  const totalPages = Math.ceil(filteredEmployees.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentEmployees = filteredEmployees.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleLogout = () => {
    const confirmation = window.confirm("Are you sure you want to logout?");
    if(confirmation){
      navigate('/login'); 
    }
  };

  const handleSearch = () => {
    const filtered = allEmployees.filter(employee => 
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      employee.mobNo.includes(searchQuery) ||
      employee.address.toLowerCase().includes(searchQuery) ||
      employee.status.toLowerCase().includes(searchQuery)
    );

    setFilteredEmployees(filtered);
    setIsDataFound(filtered.length > 0);  // Check if any data is found
    setCurrentPage(1);  // Reset to page 1 after search
  };

  return (
    <div className="app-layout">
      <div className="sidebar">
        <h2 className="sidebar-title">RECRUIT</h2>
        <nav>
          <ul>
            <li className="nav-item">
              <Home className="icon-feather" />
              <span className="nav-text">Home</span>
            </li>
            <li className="nav-item">
              <User className="icon-feather" />
              <span className="nav-text">Candidates</span>
            </li>
            <li className="nav-item">
              <AlertTriangle className="icon-feather" />
              <span className="nav-text">Adverse Actions</span>
            </li>
            <li className="nav-item">
              <FileText className="icon-feather" />
              <span className="nav-text">Logs</span>
            </li>
            <li className="nav-item">
              <BarChart2 className="icon-feather" />
              <span className="nav-text">Analytics</span>
            </li>
            <li className="nav-item">
              <Settings className="icon-feather" />
              <span className="nav-text">Account</span>
            </li>
            <li className="nav-item">
              <Clipboard className="icon-feather" />
              <span className="nav-text">Screenings</span>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src="https://via.placeholder.com/30" alt="User" className="user-image" />
          <div className="user-info">
            <p>James Rodriguez</p>
            <p className="user-role">Admin</p>
          </div>
          <LogOut className="logout-icon" onClick={handleLogout} />
        </div>
      </div>
      <div className="main-content">
        <div className="dashboard-header">
          <Grid className="dashboard-icon" />
          <h1 className="dashboard-title">Dashboard</h1>
          <button className="btn btn-primary logout-button" onClick={handleLogout}>Log Out</button>
        </div>
        <div className="search-bar-container">
          <input 
            type="text" 
            className="form-control search-bar" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleSearch}>Search</button>
        </div>
        
         
        {isDataFound ? (
          <div className="employee-flex">
            <div className="flex-header">
              <div>Employee Name</div>
              <div>Mob. No.</div>
              <div>Address</div>
              <div>Status</div>
            </div>
            {currentEmployees.map((employee, index) => (
              <div className="flex-row" key={index}>
                <div className="flex-item">{employee.name}</div>
                <div className="flex-item">{employee.mobNo}</div>
                <div className="flex-item">{employee.address}</div>
                <div className="flex-item">
                  <button className={`status-button ${employee.status}`}>{employee.status}</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data-found">Data not found</div> 
        )}

        <div className="pagination">
          <ChevronLeft 
            className={`pagination-icon ${currentPage === 1 ? 'disabled' : ''}`} 
            onClick={() => handlePageChange(currentPage - 1)} 
          />
          <span className="pagination-text">{currentPage}/{totalPages}</span>
          <ChevronRight 
            className={`pagination-icon ${currentPage === totalPages ? 'disabled' : ''}`} 
            onClick={() => handlePageChange(currentPage + 1)} 
          />
        </div> 
      </div>
    </div>
  );
}

export default Candidate;
