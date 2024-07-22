import React from 'react'
import Navbar from './navbar'
import { CChart } from '@coreui/react-chartjs'
export default function Home() {
  return (
    <>
    <Navbar/>
      <div style={{marginLeft:'30px'}}>Employee Salary Statement</div>
      <div style={{width: '40%', height: '290px', margin: '0' }}>
    <CChart 
  type="radar"
  data={{
    labels: [
      'HR',
      'Software Engineer',
      'Salesman',
      'Technician',
      'Manager',
      'Security'
    ],
    datasets: [
      {
        label: 'Salaries in Thousands',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220, 220, 220, 1)',
        data: [65, 59, 55,45, 81, 40],
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        labels: {
          color: 'blue',
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: 'black',
        },
        ticks: {
          color: 'black',
        },
      },
    },
  }}
/>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
        <div>Employee Profile</div>
        <div style={{ width: '40%', height: '290px', margin: '20px 0' }}>
          {/* Profile Information */}
          <h3>Name: Tarun G</h3>
          <h3>Id: 4672</h3>
          {/* Additional profile details can be added here */}
        </div>
      </div>
</div>
    </>
  )
}
