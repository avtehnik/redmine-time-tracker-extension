Request.Redmine = new Class({
    Extends: Request.JSONP,
    send: function(options){
        if (!Request.prototype.check.call(this, options)) return this;
        this.running = true;

        var type = typeOf(options);
        if (type == 'string' || type == 'element') options = {
            data: options
        };
        options = Object.merge(this.options, options || {});

        var data = options.data;
        switch (typeOf(data)){
            case 'element':
                data = document.id(data).toQueryString();
                break;
            case 'object': case 'hash':
                data = Object.toQueryString(data);
        }

        var index = this.index = Request.JSONP.counter++;

        var src = options.url +
        (options.url.test('\\?') ? '&' :'?') +
        (options.callbackKey) +
        '=request_'+ index +
        (data ? '&' + data : '');

        if (src.length > 2083) this.fireEvent('error', src);

        window['request_' + index] = function(){
            this.success(arguments, index);
        }.bind(this);

        var script = this.getScript(src).inject(options.injectScript);
        this.fireEvent('request', [src, script]);

        if (options.timeout) this.timeout.delay(options.timeout, this);

        return this;
    }
});
