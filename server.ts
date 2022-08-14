/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'
// import mqtt from 'mqtt'
// import { updateStock } from './app/Service/WareHouseProductStock'
// import WareHouseProduct from 'App/Models/WareHouseProduct'
// import Database from '@ioc:Adonis/Lucid/Database'

// import * as dtmcli from "dtmcli"
sourceMapSupport.install({ handleUncaughtExceptions: false })

// async function FireTcc() {
//     let dtm = "http://localhost:36789/api/dtmsvr"
//     let svc = "http://localhost:3334/stock"
//     await dtmcli.tccGlobalTransaction(dtm, async (t: dtmcli.Tcc) => {
//       let req = { amount: 30 }
//       console.log("calling trans out")
//       await t.callBranch(req, svc + "/updateStockTry", svc + "/updateStockConfirm", svc + "/updateStockCancel")
//     })
// }


sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname)
  .httpServer()
  .start()

// FireTcc()
// const client = mqtt.connect('mqtt://192.168.10.212:8000')
// // async function updateStock(params) {
// //   //     const arrays = Array.from(params)
// //       for (let i=0;i<params.length;i++) {
// //           const element = params[i]
// //           const ele = JSON.parse(element)
// //           // const previous = await WareHouseProduct.query().where('productId', ele.productId)
// //       //     const previous = await Database.query().from('warehouse_product').select('*').where('productId', ele.productId)
// //       //     console.log('previous:', previous)
// //       //     const currentCount = ele.productNum + previous[0].currentCnt
// //       //     // await WareHouseProduct.query().where('productId', ele.productId).update({currentCnt: currentCount})
// //       //     await Database.query().from('warehouse_product').where('productId', ele.productId).update({currentCnt: currentCount})
// //       // } 
// //   } 
// client.subscribe('/stock/order', {qos: 1})
// client.on('message', function(topic, message) {
//   console.log('topic: ',topic)
//   console.log('message； ',message)
//   const msg = message.toString()
//   const params = JSON.parse(msg)
//   console.log('message； ', params)

//   // for (let i=0;i<params.length;i++) {
//   //   const element = params[i]
//   //   const ele = JSON.parse(element)
//   //   const previous = await WareHouseProduct.query().where('productId', ele.productId)
//   //   console.log('previous:', previous)
//   //   const currentCount = ele.productNum + previous[0].currentCnt
//   //   await WareHouseProduct.query().where('productId', ele.productId).update({currentCnt: currentCount})
//   // } 
//   // updateStock(params)
// })


