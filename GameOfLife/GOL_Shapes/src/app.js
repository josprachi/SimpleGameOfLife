var tiles=[[]];
var centerPos=[16,16];
var radius=3;
var Cell=cc.Sprite.extend({
	isAlive:false,
	ctor:function(name)
	{
		this._super(name);
	},
	setAlive:function(val)
	{
		this.isAlive=val;
		if(this.isAlive)
		{
			this.setColor(new cc.Color(0, 255, 0,0));
		}
		else
		{
			this.setColor(new cc.Color(0, 0, 0,0));
		}
	},
	update:function(dt)
	{
		
		
	},
	
});
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
	startBtn:null,
	seedSpr:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

       // var node = new cc.Node();

        //Whether to demonstrate the effects inside a smaller rect
		var visiableSize = cc.director.getVisibleSize();
		 var gridRect = cc.rect(visiableSize.width*0.1,
            visiableSize.height*0.1,
            visiableSize.width*0.4,
            visiableSize.height*0.4);
       
		 var gradient = new cc.LayerGradient( cc.color(255,0,0,255), cc.color(255,255,0,255));
       
		var bg = new cc.Sprite(res.HelloWorld_png);
		startBtn=new cc.Sprite(res.startBtnPng);
        startBtn.setPosition(size.width*0.35,30);
		
       // this.addChild(node);//.addChild( bg );
		this.showTiles();
		this.addChild(startBtn);
        return true;
    },
showTiles:function()
	{
		// cc.Sprite
		
		for(var i=0;i<10;i++)
		{
			var spr=[];
			//tiles[i].push([])
			for(var j=0;j<10;j++)
			{
				spr.push(new Cell(res.boxPng));
				var posX=(150)+((spr[j]._getWidth()+spr[j]._getWidth()*0.1)*j);
				var posY=(150)+((spr[j]._getHeight()+spr[j]._getHeight()*0.1)*i);				
				spr[j].setPosition(posX,posY);
				if(i==j && i==17)
				{
					spr[j].setAlive(true);
				}
				this.addChild(spr[j]);
			}
			tiles.push(spr);
		}
	},
update : function (dt) {
			
		},
	
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

