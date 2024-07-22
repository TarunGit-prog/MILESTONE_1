import React from 'react';
import Navbar from './navbar';
import { CChart } from '@coreui/react-chartjs';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Leave() {
  return (
    <>
      <Navbar/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <div>Leave Management</div>
      <div style={{width: '40%', height: '290px', margin: '0' }}>
      <CChart
  type="doughnut"
  data={{
    labels: ['TOTAL TAKEN', 'TOTAL REMAINING', 'SICK LEAVE', 'CASUAL', 'FESTIVALS'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16','#E7E9ED'],
        data: [30, 20, 20, 10, 15],
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        labels: {
          color: 'black',
        }
      }
    },
  }}
/>  
      </div>
      <Button 
            variant="info" 
            as={Link} 
            to="/Applyleave" 
          >
           Apply for LEAVE
          </Button>
      </div>
    </>
  );
}
