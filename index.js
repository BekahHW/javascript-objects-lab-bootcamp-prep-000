var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {prop: 1, key: ['value'], prop2: 2 })

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
 
}

function destructivelyDeleteFromObjectByKey(object, key)
{

 
}