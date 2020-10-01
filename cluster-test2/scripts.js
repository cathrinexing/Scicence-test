!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scrollama=t()}(this,function(){"use strict";function e(e){return"scrollama__debug-offset--"+e}function t(t){!function(t){var n=t.id,o=t.offsetVal,r=t.stepClass,i=document.createElement("div");i.id=e(n),i.className="scrollama__debug-offset",i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerHTML='".'+r+'" trigger: <span>'+o+"</span>",s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}({id:t.id,offsetVal:t.offsetVal,stepClass:t.stepEl[0].className})}function n(e){var t=e.id,n=e.index,o=e.state,r="scrollama__debug-step--"+t+"-"+n,i=document.getElementById(r+"_above"),s=document.getElementById(r+"_below"),a="enter"===o?"block":"none";i&&(i.style.display=a),s&&(s.style.display=a)}return function(){var o=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],r={},i={},s=null,a=[],f=[],l=[],c=[],u=0,p=0,d=0,v=0,g=0,m=0,x=!1,b=!1,w=!1,h=!1,y=!1,E=!1,M="down",I="percent",A=[];function C(e){console.error("scrollama error: "+e)}function O(){r={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},i={}}function S(e){return e.getBoundingClientRect().top+window.pageYOffset-(document.body.clientTop||0)}function B(e){return+e.getAttribute("data-scrollama-index")}function H(){window.pageYOffset>g?M="down":window.pageYOffset<g&&(M="up"),g=window.pageYOffset}function k(e){i[e]&&i[e].forEach(function(e){return e.disconnect()})}function _(){var t,n;d=window.innerHeight,t=document.body,n=document.documentElement,v=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),p=u*("pixels"===I?1:d),x&&(f=a.map(function(e){return e.getBoundingClientRect().height}),l=a.map(S),b&&D()),w&&function(t){var n=t.id,o=t.offsetMargin,r=t.offsetVal,i="pixels"===t.format?"px":"",s=e(n),a=document.getElementById(s);a.style.top=o+"px",a.querySelector("span").innerText=""+r+i}({id:s,offsetMargin:p,offsetVal:u,format:I})}function N(e){if(e&&!b){if(!x)return C("scrollama error: enable() called before scroller was ready"),void(b=!1);D()}!e&&b&&o.forEach(k),b=e}function P(e,t){var n=B(e);void 0!==t&&(c[n].progress=t);var o={element:e,index:n,progress:c[n].progress};"enter"===c[n].state&&r.stepProgress(o)}function R(e,t){if("above"===t)for(var n=0;n<e;n+=1){var o=c[n];"enter"!==o.state&&"down"!==o.direction?(T(a[n],"down",!1),q(a[n],"down")):"enter"===o.state&&q(a[n],"down")}else if("below"===t)for(var r=c.length-1;r>e;r-=1){var i=c[r];"enter"===i.state&&q(a[r],"up"),"down"===i.direction&&(T(a[r],"up",!1),q(a[r],"up"))}}function T(e,t,o){void 0===o&&(o=!0);var i=B(e),a={element:e,index:i,direction:t};c[i].direction=t,c[i].state="enter",y&&o&&"down"===t&&R(i,"above"),y&&o&&"up"===t&&R(i,"below"),r.stepEnter&&!A[i]&&(r.stepEnter(a,c),w&&n({id:s,index:i,state:"enter"}),E&&(A[i]=!0)),h&&P(e)}function q(e,t){var o=B(e),i={element:e,index:o,direction:t};h&&("down"===t&&c[o].progress<1?P(e,1):"up"===t&&c[o].progress>0&&P(e,0)),c[o].direction=t,c[o].state="exit",r.stepExit(i,c),w&&n({id:s,index:o,state:"exit"})}function V(e){var t=e[0];H();var n=t.isIntersecting,o=t.boundingClientRect,r=t.target,i=o.top,s=o.bottom,a=i-p,f=s-p,l=B(r),u=c[l];n&&a<=0&&f>=0&&"down"===M&&"enter"!==u.state&&T(r,M),!n&&a>0&&"up"===M&&"enter"===u.state&&q(r,M)}function Y(e){var t=e[0];H();var n=t.isIntersecting,o=t.boundingClientRect,r=t.target,i=o.top,s=o.bottom,a=i-p,f=s-p,l=B(r),u=c[l];n&&a<=0&&f>=0&&"up"===M&&"enter"!==u.state&&T(r,M),!n&&f<0&&"down"===M&&"enter"===u.state&&q(r,M)}function F(e){var t=e[0];H();var n=t.isIntersecting,o=t.target,r=B(o),i=c[r];n&&"down"===M&&"down"!==i.direction&&"enter"!==i.state&&(T(o,"down"),q(o,"down"))}function j(e){var t=e[0];H();var n=t.isIntersecting,o=t.target,r=B(o),i=c[r];n&&"up"===M&&"down"===i.direction&&"enter"!==i.state&&(T(o,"up"),q(o,"up"))}function z(e){var t=e[0];H();var n=t.isIntersecting,o=t.intersectionRatio,r=t.boundingClientRect,i=t.target,s=r.bottom;n&&s-p>=0&&P(i,+o)}function L(){i.stepProgress=a.map(function(e,t){var n=f[t]-p+"px 0px "+(-d+p)+"px 0px",o=function(e){for(var t=Math.ceil(e/m),n=[],o=1/t,r=0;r<t;r+=1)n.push(r*o);return n}(f[t]),r=new IntersectionObserver(z,{rootMargin:n,threshold:o});return r.observe(e),r})}function D(){o.forEach(k),i.viewportAbove=a.map(function(e,t){var n=v-l[t],o=p-d-f[t],r=new IntersectionObserver(F,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),i.viewportBelow=a.map(function(e,t){var n=-p-f[t],o=p-d+f[t]+v,r=new IntersectionObserver(j,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),i.stepAbove=a.map(function(e,t){var n=-p+f[t],o=new IntersectionObserver(V,{rootMargin:n+"px 0px "+(p-d)+"px 0px"});return o.observe(e),o}),i.stepBelow=a.map(function(e,t){var n=-p,o=p-d+f[t],r=new IntersectionObserver(Y,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),h&&L()}function G(e){return!(!e||1!==e.nodeType)&&(function(e){var t=window.getComputedStyle(e);return("scroll"===t.overflowY||"auto"===t.overflowY)&&e.scrollHeight>e.clientHeight}(e)?e:G(e.parentNode))}var J={};return J.setup=function(e){var n=e.step,o=e.offset;void 0===o&&(o=.5);var r=e.progress;void 0===r&&(r=!1);var i=e.threshold;void 0===i&&(i=4);var f=e.debug;void 0===f&&(f=!1);var l=e.order;void 0===l&&(l=!0);var p,d,v,g,b,M=e.once;if(void 0===M&&(M=!1),O(),d=(p="abcdefghijklmnopqrstuv").length,v=Date.now(),s=""+[0,0,0].map(function(e){return p[Math.floor(Math.random()*d)]}).join("")+v,g=n,void 0===b&&(b=document),!(a="string"==typeof g?Array.from(b.querySelectorAll(g)):g instanceof Element?[g]:g instanceof NodeList?Array.from(g):g instanceof Array?g:[]).length)return C("no step elements"),J;var I=a.reduce(function(e,t){return e||G(t.parentNode)},!1);return I&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",I),w=f,h=r,y=l,E=M,J.offsetTrigger(o),m=Math.max(1,+i),x=!0,w&&t({id:s,stepEl:a,offsetVal:u}),a.forEach(function(e,t){return e.setAttribute("data-scrollama-index",t)}),c=a.map(function(){return{direction:null,state:null,progress:0}}),_(),J.enable(),J},J.resize=function(){return _(),J},J.enable=function(){return N(!0),J},J.disable=function(){return N(!1),J},J.destroy=function(){N(!1),O()},J.offsetTrigger=function(e){if(null===e)return u;if("number"==typeof e)I="percent",e>1&&C("offset value is greater than 1. Fallback to 1."),e<0&&C("offset value is lower than 0. Fallback to 0."),u=Math.min(Math.max(0,e),1);else if("string"==typeof e&&e.indexOf("px")>0){var t=+e.replace("px","");isNaN(t)?(C("offset value must be in 'px' format. Fallback to 0.5."),u=.5):(I="pixels",u=t)}else C("offset value does not include 'px'. Fallback to 0.5."),u=.5;return J},J.onStepEnter=function(e){return"function"==typeof e?r.stepEnter=e:C("onStepEnter requires a function"),J},J.onStepExit=function(e){return"function"==typeof e?r.stepExit=e:C("onStepExit requires a function"),J},J.onStepProgress=function(e){return"function"==typeof e?r.stepProgress=e:C("onStepProgress requires a function"),J},J}});


var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

var scroller = scrollama();


figure.append('img').attr('class', 'step-0').attr('opacity', 0).attr("src", "img/" + "step-0" + ".png")


figure.append('img').attr('class', 'step-1').attr('opacity', 0)
  .attr("src", "img/" + "step-1" + ".png")


figure.append('img').attr('class', 'step-2').attr('opacity', 0)
  .attr("src", "img/" + "step-2" + ".png")


figure.append('img').attr('class', 'step-3').attr('opacity', 0)
  .attr("src", "img/" + "step-3" + ".jpg")


figure.append('img').attr('class', 'step-4').attr('opacity', 0)
  .attr("src", "img/" + "step-4" + ".png")

figure.append('img').attr('class', 'step-5').attr('opacity', 0)
  .attr("src", "img/" + "step-5" + ".jpg")

figure.append('img').attr('class', 'step-6').attr('opacity', 0)
  .attr("src", "img/" + "step-6" + ".gif")

figure.append('img').attr('class', 'step-7').attr('opacity', 0).attr("src", "img/" + "step-7" + ".gif")

figure.append('img').attr('class', 'step-8').attr('opacity', 0).attr("src", "img/" + "step-8" + ".png")

figure.append('img').attr('class', 'step-9').attr('opacity', 0).attr("src", "img/" + "step-9" + ".gif")
figure.append('img').attr('class', 'step-10').attr('opacity', 0).attr("src", "img/" + "step-10" + ".gif")
figure.append('img').attr('class', 'step-11').attr('opacity', 0).attr("src", "img/" + "step-11" + ".gif")

figure.append('img').attr('class', 'step-12').attr('opacity', 0).attr("src", "img/" + "step-12" + ".gif")

figure.append('img').attr('class', 'step-13').attr('opacity', 0).attr("src", "img/" + "step-13" + ".png")


// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight;
  // var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  var figureMarginTop = 0;


  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  console.log(response.index, '-------- enter', response.direction);
  // response = { element, direction, index }
  response.element.classList.add('is-active');



  if (response.direction == 'down') figure.select('.step-' + response.index).style('opacity', 0).transition().duration(1000).ease(d3.easeLinear).style("opacity", 1);


}

function handleStepExit(response) {
  // response = { element, direction, index }
  console.log(response.index, '-------- exit', response.direction);
  // remove color from current step
  response.element.classList.remove('is-active');
  // hide corresponding map step if scrolling up
  if (response.direction == 'up')
    figure.select('.step-' + (response.index)).style('opacity', 1).transition().duration(1000).ease(d3.easeLinear).style('opacity', 0);



}

function handleStepProgress(response) {
  // response = { element, progress, index }
  console.log(response.index, '-------- progress -', response.progress);


}






function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}

function init() {
  setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)


  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 1,
      debug: true
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit)
    .onStepProgress(handleStepProgress);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

// kick things off
init();