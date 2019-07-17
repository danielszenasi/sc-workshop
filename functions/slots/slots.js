const moment = require('moment');
const { google } = require('googleapis');

exports.handler = async (event, context) => {
  try {
    const now = moment();
    const today = now.clone().add(9, 'hours');
    const twoDaysLater = today.clone().add(2, 'days');

    const calendarId = '162m56rcpo25ujo29833s8ouck@group.calendar.google.com';
    const serviceAcctId = 'yoreevo-calendar-share@rtlyoreevo-1554917964675.iam.gserviceaccount.com';

    const keys = process.env.CALENDAR_KEY.split('\\n');
    key = keys.join('\n');

    console.log(key);

    const jwtClient = new google.auth.JWT(serviceAcctId, null, key, [
      'https://www.googleapis.com/auth/calendar'
    ]);

    const response = await google.calendar('v3').events.list({
      auth: jwtClient,
      calendarId,
      timeMin: today.toISOString(),
      timeMax: twoDaysLater.toISOString()
    });

    const events = !response.data || !response.data.items ? [] : response.data.items;

    const result = events
      .filter(e => !e.location)
      .filter(e => e.start && e.end)
      .map(e => ({
        id: e.id,
        start: e.start.dateTime,
        end: e.end.dateTime
      }))
      .sort((a, b) => {
        if (a.start < b.start) {
          return -1;
        } else if (a.start === b.start) {
          return 0;
        } else {
          return 1;
        }
      });

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
