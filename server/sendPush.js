const webPush = require('web-push');

// Import VAPID keys from a separate config file (use require only)
const vapidConfig = require('../config/vapidConfig');

webPush.setVapidDetails(
    vapidConfig.subject,
    vapidConfig.publicKey,
    vapidConfig.privateKey
);



// This is the subscription you provided
const pushSubscription = require('./pushSubscription.json');

// Payload to send
const payload = JSON.stringify({ title: 'Hello!', body: 'This is a test push notification' });

webPush.sendNotification(pushSubscription, payload)
    .then(response => {
        console.log('Push notification sent successfully:', response.statusCode);
    })
    .catch(error => {
        console.error('Error sending push notification:', error);
    });