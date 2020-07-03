var push = require('web-push');

let vapidKeys = push.generateVAPIDKeys();

 console.log(vapidKeys);

// let vapidKeys = {
//     publicKey: 'BGYCa6bzAqA8xDITCZbTBEHjnSN8LbIih1Yr0S6-spjoZhcYSZOW9nhd-xEl3X2tIPTeArzV6aY8QUQHPYeYPYM',
//     privateKey: 'QFZpPWirw70_iUGrGPgmS-AlXpgmXRtQQ3_fJrWZdQE'
// }

// push.setVapidDetails('mailto:emartins@controlshop.com.br', vapidKeys.publicKey, vapidKeys.privateKey);

// //vem do banco
// // let sub = { };

// let sub = { "endpoint" : "https://fcm.googleapis.com/fcm/send/cMl5jeTBxFo:APA91bF2rpljf1HSbQtcjMnADtoznMLiTrvyY7EerWLnKTS1sfwItC85oPHJ-pHXQp6s92gMXCwgeaevdcuIcTDgAcRHuuxuXTaCY_X50yyippu_EsmRbNkrS1xRY21vjei8CzbROpGG","expirationTime":null,"keys":{ "p256dh":"BGz6eZTC7My9F6Q75G8TFTbaoY-hKHIdEHzbX4z8Gcxq0OlZeG49GHOAXY0N3xV-zkJkjlPVZcvJScsWDOtG4R8","auth":"-5Kh2Rfq7p7hqVjp2aiG7w"} }

// push.sendNotification(sub, 'mensagem do backend');