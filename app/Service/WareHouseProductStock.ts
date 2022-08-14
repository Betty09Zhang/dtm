import WareHouseProduct from 'App/Models/WareHouseProduct'
export default class WareHouseProductService {
   public async updateStock(params) {
        //     const arrays = Array.from(params)
            for (let i=0;i<params.length;i++) {
                const element = params[i]
                const ele = JSON.parse(element)
                const previous = await WareHouseProduct.query().where('productId', ele.productId)
                console.log('previous:', previous)
                const currentCount = ele.productNum + previous[0].currentCnt
                await WareHouseProduct.query().where('productId', ele.productId).update({currentCnt: currentCount})
            } 
        } 
}
