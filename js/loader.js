var Loader = function(o){
    this.loadProjects = function(cb){
        var t = this;
        
        new Request.JSONP({
            callbackKey: 'jsoncallback',
            url: t.options.url+'/projects.json?key=5a61db3dcec0fe4616d08084102dad9b6511c1b1&jsoncallback=foo2&callback='+cb,
            onRequest: function(url){
                // a script tag is created with a src attribute equal to url
            },
            onComplete: function(data){
                // the request was completed.
            }
        }).send();
    }
    
    this.init = function(options){
        this.options = options;
    }

    this.init(o);
};