window.addEvent('domready',function(){
    
    DataLoader = new Loader({
        key:'0e96523a813ecf559ddba696a4f9549489aa8781',
        url:'http://avtehnik.m.redmine.org'
    });


    window.projects = function(data){
    
        data.projects.each(function(p){
            new Element('div',{
                'html':p.name
                }).inject(document.body);  
        })
        console.log(data);
    }

    DataLoader.loadProjects("projects")

});