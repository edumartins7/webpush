// self.addEventListener('push', function(e) {
//     e.waitUntil(
//       self.registration.showNotification('Hello world!', {})
//     );
// });

self.addEventListener('push', function(e) {
    var body;

    if (e.data) {
      body = e.data.text();
    } else {
      body = 'Push message no payload';
    }

    console.log(body);

    var options = {
      body: body,
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  });