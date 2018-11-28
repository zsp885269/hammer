var msgConfig = {
	color:'red'
}
function Message(config){
	this.color = config.color || "#fff";
	this.init();
}
Message.prototype = {
	create:function(){
		// 创建DOM，并设置样式
		this.div = document.createElement("div");
		this.p = document.createElement("p");
		this.div.appendChild(this.p);
		window.document.body.appendChild(this.div);
		this.div.style.cssText = `position: fixed;
		width: 60%;
		margin-left: -30%;
		left: 50%;
		padding: .4rem .2rem;
		line-height: .4rem;
		border: 1px solid #737373;
		background-color: rgba(200,200,200,.8);
	    text-align: center;
	    border-radius: .05rem;
	    font-size: .32rem;
	    color: ${this.color};
	    display: none;`;
	},
	show:function(msg){
		var that = this;
		this.p.innerHTML = msg;
		this.div.style.display = "block";
		var t = setTimeout(function(){
			that.div.style.display = "none";
		},2000);
	},
	init:function(){
		this.create();
	}
}
// 初始化
var message = new Message(msgConfig);