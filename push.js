var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BGYCa6bzAqA8xDITCZbTBEHjnSN8LbIih1Yr0S6-spjoZhcYSZOW9nhd-xEl3X2tIPTeArzV6aY8QUQHPYeYPYM',
    privateKey: 'QFZpPWirw70_iUGrGPgmS-AlXpgmXRtQQ3_fJrWZdQE'
}

push.setVapidDetails('mailto:emartins@controlshop.com.br', vapidKeys.publicKey, vapidKeys.privateKey);

//vem do banco
// let sub = { };

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cNO38ou6ZEU:APA91bFLln16-t7Zrl5Nl8AAFowvmr5HEds3ujJVvnGHMqaFHRlFgWXlpEsMxIaV91QMP3gqfzRlJoZDwU8rdbwae8Or3ua28QG80kx9lyGmFnZU-Dwih6HgasCTFkc1OJTD2ods3I5R","expirationTime":null,"keys":{"p256dh":"BEaw80YbZ3lZ2fF9GioO2yIkic39s8pqP2_THPtsRLdoHkrdF8hJ9-sVqLZBPyQbHrYnJkYRoqhczpMsk6X8GbA","auth":"Ftzfqikr-sJ9oL4v6ZJU3Q"}}

push.sendNotification(sub, 'test message');