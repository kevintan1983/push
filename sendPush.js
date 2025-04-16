const webPush = require('web-push');

// Import VAPID keys from a separate config file (use require only)
const vapidConfig = require('./vapidConfig');

webPush.setVapidDetails(
    'mailto:user@email.com',
    vapidConfig.vapid.publicKey,
    vapidConfig.vapid.privateKey
);

// This is the subscription you provided
const pushSubscription = {
    endpoint: 'https://wns2-ln2p.notify.windows.com/w/?token=BQYAAABnPJxaamvtl%2bDv4hDuiX5lkosDwamnlczzXA%2b6M9QzENwuhdAJgwKWY%2fb1nBPUt3l3gD5zY8oiIN5uHFrHXXMObt2iGZkvl4K6mRE3jxjB6ochPFYU1euY%2f7uNKCrA66LdU0%2fY0JKBbvef9nOnWJ7%2bxzzh%2bqXOGo7zMaTcmtwDyc1WA0J70f%2fJSO7c2xERiHOHaoAoLI8e7YqFqfdh4RZPNLjailmJyFgborxGqjUnb37%2bikhTUlCqF%2bIfAZ9FlxXo0Y%2bBF4swS3tLiNIfqAEQv6Uayhc5K9iTJ2VnibL0BwgEm6DLtQ36SnKYnY7Eyd0%3d',
    keys: {
        p256dh: 'BPj-lrNUwq_OhIvcQPVFKyd4ZcGupyJWkymRkNHOnTq5uiBtLml9uO1TEidc6LlEEhePp9yTw9HO4NspX32oaNs',
        auth: '1h9pSj4qfqm0GNt2dDNarQ'
    }
};

// Payload to send
const payload = JSON.stringify({ title: 'Hello!', body: 'This is a test push notification' });

webPush.sendNotification(pushSubscription, payload)
    .then(response => {
        console.log('Push notification sent successfully:', response.statusCode);
    })
    .catch(error => {
        console.error('Error sending push notification:', error);
    });

const webPush = require('web-push');

// VAPID keys (you should use your actual keys if you generate them)
const vapidKeys = {
    publicKey: 'BCZcisAiMpZJJFIv_3DtCY3fReTb_uXf3tLBpTQ9nv-HmRyGUDXtT8UozYROs-dmzsTc63nxInNBJLbgJC2Xl5c',
    privateKey: 'x2p5VwAN3t7j3qOI-koGEMIT-sSoJ6qgV6643EGyB_E' // Replace with your private key
};

webPush.setVapidDetails(
    'mailto:user@email.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// This is the subscription you provided
const pushSubscription = {
    endpoint: 'https://wns2-ln2p.notify.windows.com/w/?token=BQYAAABnPJxaamvtl%2bDv4hDuiX5lkosDwamnlczzXA%2b6M9QzENwuhdAJgwKWY%2fb1nBPUt3l3gD5zY8oiIN5uHFrHXXMObt2iGZkvl4K6mRE3jxjB6ochPFYU1euY%2f7uNKCrA66LdU0%2fY0JKBbvef9nOnWJ7%2bxzzh%2bqXOGo7zMaTcmtwDyc1WA0J70f%2fJSO7c2xERiHOHaoAoLI8e7YqFqfdh4RZPNLjailmJyFgborxGqjUnb37%2bikhTUlCqF%2bIfAZ9FlxXo0Y%2bBF4swS3tLiNIfqAEQv6Uayhc5K9iTJ2VnibL0BwgEm6DLtQ36SnKYnY7Eyd0%3d',
    keys: {
        p256dh: 'BPj-lrNUwq_OhIvcQPVFKyd4ZcGupyJWkymRkNHOnTq5uiBtLml9uO1TEidc6LlEEhePp9yTw9HO4NspX32oaNs',
        auth: '1h9pSj4qfqm0GNt2dDNarQ'
    }
};

// Payload to send
const payload = JSON.stringify({ title: 'Hello!', body: 'This is a test push notification' });

webPush.sendNotification(pushSubscription, payload)
    .then(response => {
        console.log('Push notification sent successfully:', response.statusCode);
    })
    .catch(error => {
        console.error('Error sending push notification:', error);
    });
