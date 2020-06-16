self.addEventListener('push', () => {
    self.registration.sendNotification('testeee', {});
});