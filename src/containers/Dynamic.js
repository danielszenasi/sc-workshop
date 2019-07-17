import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [appointments, setAppointments] = useState([]);

  const generateHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    if (window.netlifyIdentity.currentUser()) {
      return window.netlifyIdentity
        .currentUser()
        .jwt()
        .then(token => {
          return { ...headers, Authorization: `Bearer ${token}` };
        });
    }
    return Promise.resolve(headers);
  };

  useEffect(() => {
    const fetchData = async () => {
      const headers = await generateHeaders();
      const result = await axios.get(`/.netlify/functions/appointments`, { headers });

      setAppointments(result.data);
    };

    fetchData();
  }, []);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles'
  };
  return (
    <div>
      <h2>Appointments</h2>
      {appointments.map(appointment => {
        const start = new Intl.DateTimeFormat('en-US', options).format(
          new Date(appointment.data.start)
        );
        const end = new Intl.DateTimeFormat('en-US', options).format(
          new Date(appointment.data.end)
        );
        return (
          <div>
            {start} - {end}
          </div>
        );
      })}
    </div>
  );
};
