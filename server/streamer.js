var Stream=Object.create({},{
    entriesStoreName:{
        get:function(){
            return this.name+':all';
        }
    },
    addingEntriesChannelName:{
        get:function(){
            return this.name+':added';
        }
    },
    updatingEntriesChannelName:{
        get:function(){
            return this.name+':updated';
        }
    },
    removingEntriesChannelName:{
        get:function(){
            return this.name+':removed';
        }
    },
    path:{
        get:function(){
            return '/'+this.name;
        }
    }
});
