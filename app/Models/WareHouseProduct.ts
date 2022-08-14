import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from './CamelCaseNamingStrategy'
BaseModel.namingStrategy = new CamelCaseNamingStrategy()
export default class WareHouseProduct extends BaseModel {

    public static get table() {
        return 'warehouseProduct'
    }

    @column({ isPrimary: true, serializeAs: 'warehouseProductId'})
    public warehouseProductId: number

    @column({ serializeAs: 'productId'})
    public productId : number

    @column({ serializeAs: 'warehouseId'})
    public warehouseId : number

    @column({ serializeAs: 'currentCnt'})
    public currentCnt : number

    @column({ serializeAs: 'lockCnt'})
    public lockCnt : number

    @column({ serializeAs: 'createTime'})
    public createTime : Date
    
    @column({ serializeAs: 'updateTime'})
    public updateTime : Date
}
