/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as followsss
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Hello world from a slim app'
})
Route.get('/notify/index', `WareHouseProductController.updateStock`)

Route.post('/stock/updateStockTry', `WareHouseProductController.updateStockTry`)
Route.post('/stock/updateStockConfirm', `WareHouseProductController.updateStockConfirm`)
Route.post('/stock/updateStockCancel', `WareHouseProductController.updateStockCancel`)


Route.get('/test', `WareHouseProductController.update`)