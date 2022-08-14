// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import WareHouseInfo from "App/Models/WareHouseInfo";
// // import { receiveMessage } from "App/Service/mqttReceive";
// import WareHouseProduct from 'App/Models/WareHouseProduct'
import { Exception } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'
// import WareHouseInfo from 'App/Models/WareHouseInfo'
// import WareHouseProduct from 'App/Models/WareHouseProduct'
export default class WareHouseProductController {
  public async updateStockTry() {
    return { result: "SUCCESS" }

  }

  public async update () {
    const productId = [2,3]
    const result = await Database.from('warehouseProduct').whereIn('productId', productId)
    console.log('result: ', result)
    throw new Exception('test error', 403)
    return result
  }

  public async updateStockConfirm({request}) {
    // const products = request.input('products')
    console.log('updateStockConfirm: ')
    const body = request.body()
    console.log('payload: ', body)
    const products = body.products
    const productIds = products.map(item => item.productId)
    console.log('productIds: ', productIds)
    // const ids = productIds.join(',')
    // let ss = `(${ids})`
    const warehouseProducts = await Database.from('wareHouseProduct').whereIn('productId', productIds)
    // const warehouseProducts = await  Database.rawQuery(`select warehouseProductId, productId, warehouseId, currentCnt, lockCnt, date_format(createTime, '%Y-%m-%d %T') as createTime 
    // from warehouseProduct where productId in ${ss}`)
    console.log('warehouseProducts: ', warehouseProducts)
    let str = ''
    warehouseProducts.forEach( (warehouseProduct, index) => {
      if (index === productIds.length -1) {
        str+= `(${warehouseProduct.warehouseProductId},${warehouseProduct.productId},${warehouseProduct.warehouseId},${ warehouseProduct.lockCnt + products[index].productNum}, ${ warehouseProduct.currentCnt - products[index].productNum})`
      } else {
        str+= `(${warehouseProduct.warehouseProductId},${warehouseProduct.productId},${warehouseProduct.warehouseId},${ warehouseProduct.lockCnt + products[index].productNum},${ warehouseProduct.currentCnt - products[index].productNum}),`
      }    
    })
    // const sql = "UPDATE warehouseProduct " +
    // "SET " +
    // "lockCnt = prod.lockNum, " +
    // "currentCnt = prod.price, " +
    // "FROM " +
    // "( VALUES " + str + " ) as prod (id, lockNum, num) " +
    // "WHERE warehouseProduct.productId = prod.id"
    // console.log('sql: ', sql)
    // const warehouseProduct = await Database.from('warehouseProduct').whereIn('productId', productIds)
    // const products = await Database.from('order').where('order.orderId', orderId).join('orderdetail', 'orderdetail.orderId', '=', 'order.orderId')
    // console.log(request)
    // console.log('product: ',products)
    // const lockNum = 3
    // const productId = 3
    // console.log('updateStockConfirm')
    // // const trx = await Database.transaction()
    // try {
    //   for (let i=0; i<products.length; i++) {
    //     const productId = products[i].productId
    //     const lockNum = products[i].productNum
    //     console.log('lockNum: ', lockNum)
    //     const warehouseProduct = await Database.from('warehouseProduct').where('productId', productId)
    //     console.log('warehouseProduct: ', warehouseProduct)
    //     const preStock = warehouseProduct[0].currentCnt
    //     const num = preStock-lockNum
    //     console.log('num: ', num)
    //     const result = await Database.from('warehouseProduct').where('productId', productId).update({lockNum: lockNum, currentCnt: num })
    //     console.log('result: ', result)
    //   }
    //   // await trx.commit()
    //   return { result: "SUCCESS" }
    // } catch (error) {
    //   // await trx.rollback()

    //   return { result: "FAILURE" }
    // }
    // const productId = 5

    // const lockNum = 2
    // const num = 98
    // const result = await Database.from('warehouseProduct').where('productId', productId).update({lockCnt: lockNum, currentCnt: num, updateTime: new Date() })
    // console.log('result: ', result)

    // const placeholders: any = []
    // const values: any = []
    // warehouseProducts.forEach( (warehouseProduct, index) => {
    //   placeholders.push('(?,?,?)')
    //   const updateCur = warehouseProduct.currentCnt - products[index].productNum
    //   values.push(warehouseProduct.productId)
    //   values.push(products[index].productNum)
    //   values.push(updateCur)
    // })

    const sql = `insert into warehouseProduct(warehouseProductId,productId,warehouseId,lockCnt,currentCnt) values ${str} on duplicate key update warehouseProductId = values(warehouseProductId), warehouseId = values(warehouseId), productId = values(productId), lockCnt=values(lockCnt), currentCnt= values(currentCnt), updateTime = now()`
    console.log('sql: ', sql)
    // insert into test_tbl (id,dr) values (1,'2'),(2,'3'),...(x,'y') on duplicate key update dr=values(dr);
//     1insert into activity_stats (activity_id, times_viewed, works_count, user_count)
// 2values(1, 100, 50, 10)
// 3ON DUPLICATE KEY 
// 4UPDATE times_viewed = values(times_viewed), works_count = values(works_count), user_count = values(user_count);

    // Bulk update with individual pickup cities
    try {
      if (str) {
        const result = await Database.rawQuery(sql)
        console.log('result: ', result)
      }
     
      
    } catch (error) {
      console.log('error: ', error)
    }
    

    // const result = await  WareHouseProduct.query().where('wareHouseProductId',1 ).update({lockCnt: 4})

   
   
    return { result: "SUCCESS" }

  }

  public async updateStockCancel() {
    console.log('updateStockCancel')
    return { result: "SUCCESS" }
  }
}