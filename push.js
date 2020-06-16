var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BGYCa6bzAqA8xDITCZbTBEHjnSN8LbIih1Yr0S6-spjoZhcYSZOW9nhd-xEl3X2tIPTeArzV6aY8QUQHPYeYPYM',
    privateKey: 'QFZpPWirw70_iUGrGPgmS-AlXpgmXRtQQ3_fJrWZdQE'
}

push.setVapidDetails('mailto:emartins@controlshop.com.br', vapidKeys.publicKey, vapidKeys.privateKey);

//vem do banco
let sub = { };

push.sendNotification(sub, 'test message');