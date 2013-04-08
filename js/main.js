window.addEvent('domready',function(){
//  to reed http://www.redmine.org/projects/redmine/wiki/Rest_TimeEntries    
    DataLoader = new Loader({
        key:'0e96523a813ecf559ddba696a4f9549489aa8781',
        url:'http://avtehnik.m.redmine.org'
    });

    DataLoader.loadProjects(function(data){
        data.projects.each(function(p){
            var project = new Element('div',{
                'html':'<div>'+p.id+' '+p.name+'</div>'
            }).inject(document.body);
                  
                  var ul = new Element('ul').inject(project); 
                  
            DataLoader.loadIssues(p.id , function(data){
                data.issues.each(function(i){
                    new Element('li',{
                        'html':i.start_date+' '+i.subject
                    }).inject(ul);  
                })
                console.log(data);
            })
        })
        console.log(data);
    })

});