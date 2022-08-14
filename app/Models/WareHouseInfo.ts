import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from './CamelCaseNamingStrategy'
BaseModel.namingStrategy = new CamelCaseNamingStrategy()
export default class WareHouseInfo extends BaseModel {

    public static get table() {
        return 'warehouse_info'
    }

    @column({ isPrimary: true, serializeAs: 'warehouseId'})
    public warehouseId: number

    @column({ serializeAs: 'warehouseSn'})
    public warehouseSn : string

    @column({ serializeAs: 'warehouseName'})
    public warehouseName : string

    @column({ serializeAs: 'warehouseStatus'})
    public warehouseStatus : number

    @column({ serializeAs: 'contact'})
    public contact : string

    @column({ serializeAs: 'createTime'})
    public createTime : Date
    
    @column({ serializeAs: 'updateTime'})
    public updateTime : Date


}
