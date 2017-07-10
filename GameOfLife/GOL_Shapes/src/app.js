
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var node = new cc.Node();

        //Whether to demonstrate the effects inside a smaller rect
		var visiableSize = cc.director.getVisibleSize();
		 var gridRect = cc.rect(visiableSize.width*0.1,
            visiableSize.height*0.1,
            visiableSize.width*0.4,
            visiableSize.height*0.4);
       
		 var gradient = new cc.LayerGradient( cc.color(255,0,0,255), cc.color(255,255,0,255));
       
		var bg = new cc.Sprite(res.HelloWorld_png);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(node);//.addChild( bg );
		this.showTiles();
        return true;
    },
showTiles:function()
	{
		var tiles=[[]];// cc.Sprite
		
		for(var i=0;i<35;i++)
		{
			var spr=[];
			//tiles[i].push([])
			for(var j=0;j<35;j++)
			{
				spr.push(new cc.Sprite(res.boxPng));
				var posX=(300)+((spr[j]._getWidth()+spr[j]._getWidth()*0.1)*j);
				var posY=(100)+((spr[j]._getHeight()+spr[j]._getHeight()*0.1)*i);				
				spr[j].setPosition(posX,posY);
				this.addChild(spr[j]);
			}
			tiles.push(spr);
		}
	}
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

