#!/usr/bin/env node

/* bootstrap database in your FaunaDB account - use with `netlify dev:exec <path-to-this-file>` */
const faunadb = require('faunadb');

const q = faunadb.query;

function createFaunaDB() {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log('No FAUNADB_SERVER_SECRET in environment, skipping DB setup');
  }
  console.log('Create the database!');
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  });

  return client.query(
    q.Create(q.Ref('indexes'), {
      name: 'appointments_by_user_id',
      source: q.Ref('classes/appointments'),
      active: true,
      terms: [{ field: ['data', 'userId'] }]
    })
  );

  /* Based on your requirements, change the schema here */
  // return client
  //   .query(q.Create(q.Ref('classes'), { name: 'appointments' }))
  //   .then(() => {
  //     console.log('Created appointments class');
  //     return client.query(
  //       q.Create(q.Ref('indexes'), {
  //         name: 'appointments_by_user_id',
  //         source: q.Ref('classes/appointments'),
  //         active: true,
  //         terms: [{ field: ['data', 'userId'] }]
  //       })
  //     );
  //   })

  //   .catch(e => {
  //     if (e.requestResult.statusCode === 400 && e.message === 'instance not unique') {
  //       console.log('DB already exists');
  //     }
  //     throw e;
  //   });
}

createFaunaDB();
