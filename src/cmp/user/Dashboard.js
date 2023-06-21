import React from 'react'

export default function Dashboard() {
  return (
    <div className='std_dsbt'>
      <div class="dash-brd"><i class="icofont-dashboard"></i> Student Dashboard</div>
      <div className='std_crd'>
        <div className='std_crd_ic'>
          <i class="icofont-user-alt-3"></i>
        </div>
        <div className='std_crd_ic_dt'>
          <ul>
            <li><label>Session:</label><div>2023-2024</div></li>
            <li><label>Name:</label><div>Atul Das</div></li>
            <li><label>Email:</label> <div>atuldas@gmail.com</div></li>
            <li><label>Gender:</label><div>Male</div></li>
            <li><label>Contact No.:</label> <div>7834399933</div></li>
            <li> <label>Date of Birth:</label><div>2023-06-08</div></li>
            <li><label>Address:</label><div>Siliguri, West Bengal</div></li>
            <li><label>Pin Code:</label><div>732832</div></li>
            <li><label>Email Id:</label><div>atuldas@gmail.com</div></li>
            <li><label>Course:</label><div>GNM Nursing</div></li>
          </ul>
        </div></div></div>
  )
}
