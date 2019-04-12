//选项卡
$(".view-dan").find("li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".dianji").removeClass("active").eq($(this).index()).addClass("active");
})
$(".header-b").mouseleave(function(){
	$(".dianji").removeClass("active");
	$(".view-dan").find("li").removeClass("active");
})
$(".nav").mouseenter(function(){
	$(".dianji").removeClass("active");
})
//轮播图
$("#banner").banner({
			items:$("#banner .lunbo a"),
			isList:true,
			delayTime:5000,
			moveTime:2000
		})
$("#banner").css({position:"relative"}).find(".list").css({left:"50%",marginRight:"420px"})

$(".l111").find("li").mouseenter(function(){
	$(this).addClass("ac").siblings().removeClass("ac");
	$(".t111").find("li").removeClass("ab").eq($(this).index()).addClass("ab");
})

$(".l222").find("li").mouseenter(function(){
	$(this).addClass("ac").siblings().removeClass("ac");
	$(".t222").find("li").removeClass("ab").eq($(this).index()).addClass("ab");
})

$(".l333").find("li").mouseenter(function(){
	$(this).addClass("ac").siblings().removeClass("ac");
	$(".t333").find("li").removeClass("ab").eq($(this).index()).addClass("ab");
})

//楼层
$(".floor-card").children("li").click(function(){
			var index = $(this).index()+1;
			var t = $(".floor"+index).offset().top;
			$("html").animate({
				scrollTop:t
			})	
		})
//返回顶部		
$(".ding").click(function(){
			var t = 0;
			$("html").animate({
				scrollTop:t
			})	
		})		
		
		
class List{
			constructor(options){
				this.cont = options.cont;
				this.url = options.url;
				
// 				this.addEvent();
				this.load();
				
			}
			
			load(){
				var that = this;
				ajax({
					url:this.url,
					success:function(res){
						that.res = JSON.parse(res);
						that.display();
					}
				})
			}
			
			display(){
				var str = "";
				for(var i=0;i<this.res.length;i++){
					str +=`<li class="ab" index="${this.res[i].shopsid}">
								<a href="#" target="_blank" class="liv"><img src="${this.res[i].src1}" ></a>
								<div class="clearff clear">	
									<div class="clearfir">
										<a href="#" target="_blank">
											<img src="${this.res[i].src2}" />
										</a>
										<span class="discount">立省3279</span>
										<em>加入购物车</em>
										<p class="firqian"><a href="#" target="_blank">${this.res[i].name}</a></p>
										<p class="firzhe">${this.res[i].jiage}</p>
									</div>
									<div class="clearfir">
										<a href="#" target="_blank">
											<img src="${this.res[i].src3}" />										
										</a>
										<span class="discount">立省3279</span>
										<em>加入购物车</em>
										<p class="firqian"><a href="#" target="_blank">${this.res[i].name}</a></p>
										<p class="firzhe">${this.res[i].jiage}</p>
									</div>
									<div class="clearfir">
										<a href="#" target="_blank">
											<img src="${this.res[i].src4}" />										
										</a>
										<span class="discount">立省3279</span>
										<em>加入购物车</em>
										<p class="firqian"><a href="#" target="_blank">${this.res[i].name}</a></p>
										<p class="firzhe">${this.res[i].jiage}</p>
									</div>
									<div class="clearfir">
										<a href="#" target="_blank">
											<img src="${this.res[i].src5}" />										
										</a>
										<span class="discount">立省3279</span>
										<em>加入购物车</em>
										<p class="firqian"><a href="#" target="_blank">${this.res[i].name}</a></p>
										<p class="firzhe">${this.res[i].jiage}</p>
									</div>
								</div>
							</li>`
				}
				this.cont.innerHTML = str;
			}
			
			addEvent(){
				var that = this;
				this.cont.addEventListener("click",function(eve){
					var e = eve || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName == "EM"){
						that.id = target.parentNode.getAttribute("index");
						that.setCookies();
					}
				})
			}
			
			setCookies(){
				this.goods = getCookie("goods");
				if(this.goods == ""){
					this.goods = [{
						id:this.id,
						num:1
					}];
				}else{
					this.goods = JSON.parse(this.goods);
					var onOff = true;
					this.goods.forEach((v)=>{
						if(v.id == this.id){
							v.num++;
							onOff = false;
							
						}
					})
					if(onOff){
						this.goods.push({
							id:this.id,
							num:1
						})
					}
				}
				setCookie("goods",JSON.stringify(this.goods))	
			}
			
		}
		new List({
			cont:document.getElementById("liv"),
			url:"http://localhost/1901/meilele/data/goods1.json"
		})		
		