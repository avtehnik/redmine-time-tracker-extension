var Loader = function(o){
    this.loadProjects = function(cb){
       new Request.Redmine({
            url: this.options.url+'/projects.json',
            data:{
                key:this.options.key
            },
            onComplete: cb
        }).send();
    }
    
    this.init = function(options){
        this.options = options;
    }

    this.init(o);
};