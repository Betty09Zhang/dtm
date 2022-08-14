import { EventsList } from '@ioc:Adonis/Core/Event'
import WareHouseProduct from 'App/Models/WareHouseProduct'
import MqttListener from './MqttListeners'
export default class ReceiveMsg extends MqttListener{

    get subscription () {
        return '/stock/order'
      }
    
    async handleMessage (message) {
        console.log('log: ',message)
    }



    public async updateStock(params: EventsList['receive:topicMsg']) {

        console.log('params: ',params)
        for (let i=0;i<params.length;i++) {
            const element = params[i]
            const ele = JSON.parse(element)
            const previous = await WareHouseProduct.query().where('productId', ele.productId)
            const currentCount = ele.productNum + previous[0].currentCnt
            await WareHouseProduct.query().where('productId', ele.productId).update({currentCnt: currentCount})
        }
    }
}
