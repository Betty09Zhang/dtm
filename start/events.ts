/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Event from '@ioc:Adonis/Core/Event'
// import WareHouseProduct from 'App/Models/WareHouseProduct'
Event.on('receive:topicMsg', 'ReceiveMsg.updateStock')

Event.on('new:user', 'TestMsg.onNewUser')