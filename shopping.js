let shopList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
shopList.push('fruit loops')

let index = shopList.indexOf('coffee')
shopList[index] = 'fair trade coffee'

index = shopList.indexOf('chips')
shopList[index] = 'rice'

index = shopList.indexOf('salsa')
shopList[index] = 'beans'

console.log(shopList)

let shopCart = []
