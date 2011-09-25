var redis=require('redis'),
    store=redis.createClient(),
    sub=redis.createClient(),
    pub=redis.createClient();

exports.init = function(channelName){
  this.channelName = channelName;
  sub.subscribe(channelName);
};

exports.increment = function(){
  store.incr(this.channelName);
  pub.publish(channel, this.channelName);
};

exports.onIncrement = function(callback){
  sub.on('message', function(pattern, key){
    getCounter(callback);
  });
};

getCounter = function(callback){
  store.get(this.channelName, function(err, votes){
    callback(votes);
  });
};

exports.getCounter = getCounter;

