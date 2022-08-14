import  {client} from '../../server'
export const receiveMessage = (SubscribeTopic, callback) => {
    client.subscribe(SubscribeTopic, {qos: 1})
    client.on('message', function(topic, message) {
        if (topic === SubscribeTopic) {
            callback(message)
        }
    })
}
