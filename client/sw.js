// sw.js - Service Worker for Push Notifications

// Log when the Service Worker installs
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting(); // Activate SW immediately
});

// Log when the Service Worker activates
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

// Handle incoming push events
self.addEventListener('push', event => {
  console.log('Push message received:', event);
  
  // Default notification data if the push doesn't contain any
  let notificationData = {
    title: 'New Notification',
    body: 'This is a default notification.',
    icon: '/icon.png',
    badge: '/badge.png',
    data: {
      url: self.location.origin
    }
  };
  
  // Try to parse data from the push event
  if (event.data) {
    try {
      notificationData = { ...notificationData, ...event.data.json() };
    } catch (error) {
      console.error('Error parsing push data:', error);
    }
  }
  
  // Show the notification
  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon,
      badge: notificationData.badge,
      data: notificationData.data
    })
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  // Try to open a window with the specified URL or default to origin
  const urlToOpen = event.notification.data?.url || self.location.origin;
  
  event.waitUntil(
    clients.matchAll({type: 'window'}).then(windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // If no window/tab is already open, open a new one
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});