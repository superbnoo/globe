const ad=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}};ad();function lo(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Sl(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oe={duration:.5,overwrite:!1,delay:0},Ac,Ct=1e8,Ir=1/Ct,gc=Math.PI*2,id=gc/4,cd=0,Tl=Math.sqrt,nd=Math.cos,ld=Math.sin,Kr=function(r){return typeof r=="string"},Yr=function(r){return typeof r=="function"},bo=function(r){return typeof r=="number"},Lc=function(r){return typeof r=="undefined"},ho=function(r){return typeof r=="object"},wt=function(r){return r!==!1},Cl=function(){return typeof window!="undefined"},Aa=function(r){return Yr(r)||Kr(r)},El=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},it=Array.isArray,dc=/(?:-?\.?\d|\.)+/gi,Al=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ee=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ki=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ll=/[+-]=-?[.\d]+/,Dl=/[^,'"\[\]\s]+/gi,gd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Or,Yt,sc,Dc,_t={},ai={},Pl,Rl=function(r){return(ai=ie(r,_t))&&Vt},Pc=function(r,t){return console.warn("Invalid property",r,"set to",t,"Missing plugin? gsap.registerPlugin()")},ii=function(r,t){return!t&&console.warn(r)},Il=function(r,t){return r&&(_t[r]=t)&&ai&&(ai[r]=t)||_t},sa=function(){return 0},Rc={},Lo=[],pc={},Fl,vt={},_i={},$c=30,Qa=[],Ic="",Fc=function(r){var t=r[0],o,e;if(ho(t)||Yr(t)||(r=[r]),!(o=(t._gsap||{}).harness)){for(e=Qa.length;e--&&!Qa[e].targetTest(t););o=Qa[e]}for(e=r.length;e--;)r[e]&&(r[e]._gsap||(r[e]._gsap=new ag(r[e],o)))||r.splice(e,1);return r},re=function(r){return r._gsap||Fc(Et(r))[0]._gsap},Nl=function(r,t,o){return(o=r[t])&&Yr(o)?r[t]():Lc(o)&&r.getAttribute&&r.getAttribute(t)||o},mt=function(r,t){return(r=r.split(",")).forEach(t)||r},Gr=function(r){return Math.round(r*1e5)/1e5||0},et=function(r){return Math.round(r*1e7)/1e7||0},Pe=function(r,t){var o=t.charAt(0),e=parseFloat(t.substr(2));return r=parseFloat(r),o==="+"?r+e:o==="-"?r-e:o==="*"?r*e:r/e},dd=function(r,t){for(var o=t.length,e=0;r.indexOf(t[e])<0&&++e<o;);return e<o},ci=function(){var r=Lo.length,t=Lo.slice(0),o,e;for(pc={},Lo.length=0,o=0;o<r;o++)e=t[o],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},Ol=function(r,t,o,e){Lo.length&&ci(),r.render(t,o,e),Lo.length&&ci()},Ul=function(r){var t=parseFloat(r);return(t||t===0)&&(r+"").match(Dl).length<2?t:Kr(r)?r.trim():r},Bl=function(r){return r},Pt=function(r,t){for(var o in t)o in r||(r[o]=t[o]);return r},sd=function(r){return function(t,o){for(var e in o)e in t||e==="duration"&&r||e==="ease"||(t[e]=o[e])}},ie=function(r,t){for(var o in t)r[o]=t[o];return r},Kc=function n(r,t){for(var o in t)o!=="__proto__"&&o!=="constructor"&&o!=="prototype"&&(r[o]=ho(t[o])?n(r[o]||(r[o]={}),t[o]):t[o]);return r},ni=function(r,t){var o={},e;for(e in r)e in t||(o[e]=r[e]);return o},na=function(r){var t=r.parent||Or,o=r.keyframes?sd(it(r.keyframes)):Pt;if(wt(r.inherit))for(;t;)o(r,t.vars.defaults),t=t.parent||t._dp;return r},pd=function(r,t){for(var o=r.length,e=o===t.length;e&&o--&&r[o]===t[o];);return o<0},Gl=function(r,t,o,e,a){o===void 0&&(o="_first"),e===void 0&&(e="_last");var c=r[e],i;if(a)for(i=t[a];c&&c[a]>i;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=r[o],r[o]=t),t._next?t._next._prev=t:r[e]=t,t._prev=c,t.parent=t._dp=r,t},wi=function(r,t,o,e){o===void 0&&(o="_first"),e===void 0&&(e="_last");var a=t._prev,c=t._next;a?a._next=c:r[o]===t&&(r[o]=c),c?c._prev=a:r[e]===t&&(r[e]=a),t._next=t._prev=t.parent=null},wo=function(r,t){r.parent&&(!t||r.parent.autoRemoveChildren)&&r.parent.remove(r),r._act=0},te=function(r,t){if(r&&(!t||t._end>r._dur||t._start<0))for(var o=r;o;)o._dirty=1,o=o.parent;return r},wd=function(r){for(var t=r.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return r},md=function n(r){return!r||r._ts&&n(r.parent)},Jc=function(r){return r._repeat?Ue(r._tTime,r=r.duration()+r._rDelay)*r:0},Ue=function(r,t){var o=Math.floor(r/=t);return r&&o===r?o-1:o},li=function(r,t){return(r-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},mi=function(r){return r._end=et(r._start+(r._tDur/Math.abs(r._ts||r._rts||Ir)||0))},Nc=function(r,t){var o=r._dp;return o&&o.smoothChildTiming&&r._ts&&(r._start=et(o._time-(r._ts>0?t/r._ts:((r._dirty?r.totalDuration():r._tDur)-t)/-r._ts)),mi(r),o._dirty||te(o,r)),r},Vl=function(r,t){var o;if((t._time||t._initted&&!t._dur)&&(o=li(r.rawTime(),t),(!t._dur||ka(0,t.totalDuration(),o)-t._tTime>Ir)&&t.render(o,!0)),te(r,t)._dp&&r._initted&&r._time>=r._dur&&r._ts){if(r._dur<r.duration())for(o=r;o._dp;)o.rawTime()>=0&&o.totalTime(o._tTime),o=o._dp;r._zTime=-Ir}},$t=function(r,t,o,e){return t.parent&&wo(t),t._start=et((bo(o)?o:o||r!==Or?Mt(r,o,t):r._time)+t._delay),t._end=et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gl(r,t,"_first","_last",r._sort?"_start":0),wc(t)||(r._recent=t),e||Vl(r,t),r},Hl=function(r,t){return(_t.ScrollTrigger||Pc("scrollTrigger",t))&&_t.ScrollTrigger.create(t,r)},Wl=function(r,t,o,e){if(Uc(r,t),!r._initted)return 1;if(!o&&r._pt&&(r._dur&&r.vars.lazy!==!1||!r._dur&&r.vars.lazy)&&Fl!==xt.frame)return Lo.push(r),r._lazy=[t,e],1},fd=function n(r){var t=r.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},wc=function(r){var t=r.data;return t==="isFromStart"||t==="isStart"},bd=function(r,t,o,e){var a=r.ratio,c=t<0||!t&&(!r._start&&fd(r)&&!(!r._initted&&wc(r))||(r._ts<0||r._dp._ts<0)&&!wc(r))?0:1,i=r._rDelay,g=0,l,d,s;if(i&&r._repeat&&(g=ka(0,r._tDur,t),d=Ue(g,i),r._yoyo&&d&1&&(c=1-c),d!==Ue(r._tTime,i)&&(a=1-c,r.vars.repeatRefresh&&r._initted&&r.invalidate())),c!==a||e||r._zTime===Ir||!t&&r._zTime){if(!r._initted&&Wl(r,t,e,o))return;for(s=r._zTime,r._zTime=t||(o?Ir:0),o||(o=t&&!s),r.ratio=c,r._from&&(c=1-c),r._time=0,r._tTime=g,l=r._pt;l;)l.r(c,l.d),l=l._next;r._startAt&&t<0&&r._startAt.render(t,!0,!0),r._onUpdate&&!o&&At(r,"onUpdate"),g&&r._repeat&&!o&&r.parent&&At(r,"onRepeat"),(t>=r._tDur||t<0)&&r.ratio===c&&(c&&wo(r,1),o||(At(r,c?"onComplete":"onReverseComplete",!0),r._prom&&r._prom()))}else r._zTime||(r._zTime=t)},hd=function(r,t,o){var e;if(o>t)for(e=r._first;e&&e._start<=o;){if(e.data==="isPause"&&e._start>t)return e;e=e._next}else for(e=r._last;e&&e._start>=o;){if(e.data==="isPause"&&e._start<t)return e;e=e._prev}},Be=function(r,t,o,e){var a=r._repeat,c=et(t)||0,i=r._tTime/r._tDur;return i&&!e&&(r._time*=c/r._dur),r._dur=c,r._tDur=a?a<0?1e10:et(c*(a+1)+r._rDelay*a):c,i>0&&!e?Nc(r,r._tTime=r._tDur*i):r.parent&&mi(r),o||te(r.parent,r),r},Qc=function(r){return r instanceof pt?te(r):Be(r,r._dur)},ud={_start:0,endTime:sa,totalDuration:sa},Mt=function n(r,t,o){var e=r.labels,a=r._recent||ud,c=r.duration()>=Ct?a.endTime(!1):r._dur,i,g,l;return Kr(t)&&(isNaN(t)||t in e)?(g=t.charAt(0),l=t.substr(-1)==="%",i=t.indexOf("="),g==="<"||g===">"?(i>=0&&(t=t.replace(/=/,"")),(g==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(i<0?a:o).totalDuration()/100:1)):i<0?(t in e||(e[t]=c),e[t]):(g=parseFloat(t.charAt(i-1)+t.substr(i+1)),l&&o&&(g=g/100*(it(o)?o[0]:o).totalDuration()),i>1?n(r,t.substr(0,i-1),o)+g:c+g)):t==null?c:+t},la=function(r,t,o){var e=bo(t[1]),a=(e?2:1)+(r<2?0:1),c=t[a],i,g;if(e&&(c.duration=t[1]),c.parent=o,r){for(i=c,g=o;g&&!("immediateRender"in i);)i=g.vars.defaults||{},g=wt(g.vars.inherit)&&g.parent;c.immediateRender=wt(i.immediateRender),r<2?c.runBackwards=1:c.startAt=t[a-1]}return new qr(t[0],c,t[a+1])},No=function(r,t){return r||r===0?t(r):t},ka=function(r,t,o){return o<r?r:o>t?t:o},at=function(r,t){return!Kr(r)||!(t=gd.exec(r))?"":t[1]},vd=function(r,t,o){return No(o,function(e){return ka(r,t,e)})},mc=[].slice,jl=function(r,t){return r&&ho(r)&&"length"in r&&(!t&&!r.length||r.length-1 in r&&ho(r[0]))&&!r.nodeType&&r!==Yt},yd=function(r,t,o){return o===void 0&&(o=[]),r.forEach(function(e){var a;return Kr(e)&&!t||jl(e,1)?(a=o).push.apply(a,Et(e)):o.push(e)})||o},Et=function(r,t,o){return Kr(r)&&!o&&(sc||!Ge())?mc.call((t||Dc).querySelectorAll(r),0):it(r)?yd(r,o):jl(r)?mc.call(r,0):r?[r]:[]},xd=function(r){return r=Et(r)[0]||ii("Invalid scope")||{},function(t){var o=r.current||r.nativeElement||r;return Et(t,o.querySelectorAll?o:o===r?ii("Invalid scope")||Dc.createElement("div"):r)}},Xl=function(r){return r.sort(function(){return .5-Math.random()})},ql=function(r){if(Yr(r))return r;var t=ho(r)?r:{each:r},o=oe(t.ease),e=t.from||0,a=parseFloat(t.base)||0,c={},i=e>0&&e<1,g=isNaN(e)||i,l=t.axis,d=e,s=e;return Kr(e)?d=s={center:.5,edges:.5,end:1}[e]||0:!i&&g&&(d=e[0],s=e[1]),function(p,f,b){var w=(b||t).length,m=c[w],h,y,S,_,v,M,C,u,z;if(!m){if(z=t.grid==="auto"?0:(t.grid||[1,Ct])[1],!z){for(C=-Ct;C<(C=b[z++].getBoundingClientRect().left)&&z<w;);z--}for(m=c[w]=[],h=g?Math.min(z,w)*d-.5:e%z,y=z===Ct?0:g?w*s/z-.5:e/z|0,C=0,u=Ct,M=0;M<w;M++)S=M%z-h,_=y-(M/z|0),m[M]=v=l?Math.abs(l==="y"?_:S):Tl(S*S+_*_),v>C&&(C=v),v<u&&(u=v);e==="random"&&Xl(m),m.max=C-u,m.min=u,m.v=w=(parseFloat(t.amount)||parseFloat(t.each)*(z>w?w-1:l?l==="y"?w/z:z:Math.max(z,w/z))||0)*(e==="edges"?-1:1),m.b=w<0?a-w:a,m.u=at(t.amount||t.each)||0,o=o&&w<0?tg(o):o}return w=(m[p]-m.min)/m.max||0,et(m.b+(o?o(w):w)*m.v)+m.u}},fc=function(r){var t=Math.pow(10,((r+"").split(".")[1]||"").length);return function(o){var e=Math.round(parseFloat(o)/r)*r*t;return(e-e%1)/t+(bo(o)?0:at(o))}},Yl=function(r,t){var o=it(r),e,a;return!o&&ho(r)&&(e=o=r.radius||Ct,r.values?(r=Et(r.values),(a=!bo(r[0]))&&(e*=e)):r=fc(r.increment)),No(t,o?Yr(r)?function(c){return a=r(c),Math.abs(a-c)<=e?a:c}:function(c){for(var i=parseFloat(a?c.x:c),g=parseFloat(a?c.y:0),l=Ct,d=0,s=r.length,p,f;s--;)a?(p=r[s].x-i,f=r[s].y-g,p=p*p+f*f):p=Math.abs(r[s]-i),p<l&&(l=p,d=s);return d=!e||l<=e?r[d]:c,a||d===c||bo(c)?d:d+at(c)}:fc(r))},Zl=function(r,t,o,e){return No(it(r)?!t:o===!0?!!(o=0):!e,function(){return it(r)?r[~~(Math.random()*r.length)]:(o=o||1e-5)&&(e=o<1?Math.pow(10,(o+"").length-2):1)&&Math.floor(Math.round((r-o/2+Math.random()*(t-r+o*.99))/o)*o*e)/e})},kd=function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return function(e){return t.reduce(function(a,c){return c(a)},e)}},_d=function(r,t){return function(o){return r(parseFloat(o))+(t||at(o))}},zd=function(r,t,o){return Kl(r,t,0,1,o)},$l=function(r,t,o){return No(o,function(e){return r[~~t(e)]})},Md=function n(r,t,o){var e=t-r;return it(r)?$l(r,n(0,r.length),t):No(o,function(a){return(e+(a-r)%e)%e+r})},Sd=function n(r,t,o){var e=t-r,a=e*2;return it(r)?$l(r,n(0,r.length-1),t):No(o,function(c){return c=(a+(c-r)%a)%a||0,r+(c>e?a-c:c)})},pa=function(r){for(var t=0,o="",e,a,c,i;~(e=r.indexOf("random(",t));)c=r.indexOf(")",e),i=r.charAt(e+7)==="[",a=r.substr(e+7,c-e-7).match(i?Dl:dc),o+=r.substr(t,e-t)+Zl(i?a:+a[0],i?0:+a[1],+a[2]||1e-5),t=c+1;return o+r.substr(t,r.length-t)},Kl=function(r,t,o,e,a){var c=t-r,i=e-o;return No(a,function(g){return o+((g-r)/c*i||0)})},Td=function n(r,t,o,e){var a=isNaN(r+t)?0:function(f){return(1-f)*r+f*t};if(!a){var c=Kr(r),i={},g,l,d,s,p;if(o===!0&&(e=1)&&(o=null),c)r={p:r},t={p:t};else if(it(r)&&!it(t)){for(d=[],s=r.length,p=s-2,l=1;l<s;l++)d.push(n(r[l-1],r[l]));s--,a=function(b){b*=s;var w=Math.min(p,~~b);return d[w](b-w)},o=t}else e||(r=ie(it(r)?[]:{},r));if(!d){for(g in t)Oc.call(i,r,g,"get",t[g]);a=function(b){return Vc(b,i)||(c?r.p:r)}}}return No(o,a)},rn=function(r,t,o){var e=r.labels,a=Ct,c,i,g;for(c in e)i=e[c]-t,i<0==!!o&&i&&a>(i=Math.abs(i))&&(g=c,a=i);return g},At=function(r,t,o){var e=r.vars,a=e[t],c,i;if(!!a)return c=e[t+"Params"],i=e.callbackScope||r,o&&Lo.length&&ci(),c?a.apply(i,c):a.call(i)},oa=function(r){return wo(r),r.scrollTrigger&&r.scrollTrigger.kill(!1),r.progress()<1&&At(r,"onInterrupt"),r},Ae,Cd=function(r){r=!r.name&&r.default||r;var t=r.name,o=Yr(r),e=t&&!o&&r.init?function(){this._props=[]}:r,a={init:sa,render:Vc,add:Oc,kill:Wd,modifier:Hd,rawVars:0},c={targetTest:0,get:0,getSetter:Gc,aliases:{},register:0};if(Ge(),r!==e){if(vt[t])return;Pt(e,Pt(ni(r,a),c)),ie(e.prototype,ie(a,ni(r,c))),vt[e.prop=t]=e,r.targetTest&&(Qa.push(e),Rc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Il(t,e),r.register&&r.register(Vt,e,ft)},Rr=255,ea={aqua:[0,Rr,Rr],lime:[0,Rr,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rr],navy:[0,0,128],white:[Rr,Rr,Rr],olive:[128,128,0],yellow:[Rr,Rr,0],orange:[Rr,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rr,0,0],pink:[Rr,192,203],cyan:[0,Rr,Rr],transparent:[Rr,Rr,Rr,0]},zi=function(r,t,o){return r+=r<0?1:r>1?-1:0,(r*6<1?t+(o-t)*r*6:r<.5?o:r*3<2?t+(o-t)*(2/3-r)*6:t)*Rr+.5|0},Jl=function(r,t,o){var e=r?bo(r)?[r>>16,r>>8&Rr,r&Rr]:0:ea.black,a,c,i,g,l,d,s,p,f,b;if(!e){if(r.substr(-1)===","&&(r=r.substr(0,r.length-1)),ea[r])e=ea[r];else if(r.charAt(0)==="#"){if(r.length<6&&(a=r.charAt(1),c=r.charAt(2),i=r.charAt(3),r="#"+a+a+c+c+i+i+(r.length===5?r.charAt(4)+r.charAt(4):"")),r.length===9)return e=parseInt(r.substr(1,6),16),[e>>16,e>>8&Rr,e&Rr,parseInt(r.substr(7),16)/255];r=parseInt(r.substr(1),16),e=[r>>16,r>>8&Rr,r&Rr]}else if(r.substr(0,3)==="hsl"){if(e=b=r.match(dc),!t)g=+e[0]%360/360,l=+e[1]/100,d=+e[2]/100,c=d<=.5?d*(l+1):d+l-d*l,a=d*2-c,e.length>3&&(e[3]*=1),e[0]=zi(g+1/3,a,c),e[1]=zi(g,a,c),e[2]=zi(g-1/3,a,c);else if(~r.indexOf("="))return e=r.match(Al),o&&e.length<4&&(e[3]=1),e}else e=r.match(dc)||ea.transparent;e=e.map(Number)}return t&&!b&&(a=e[0]/Rr,c=e[1]/Rr,i=e[2]/Rr,s=Math.max(a,c,i),p=Math.min(a,c,i),d=(s+p)/2,s===p?g=l=0:(f=s-p,l=d>.5?f/(2-s-p):f/(s+p),g=s===a?(c-i)/f+(c<i?6:0):s===c?(i-a)/f+2:(a-c)/f+4,g*=60),e[0]=~~(g+.5),e[1]=~~(l*100+.5),e[2]=~~(d*100+.5)),o&&e.length<4&&(e[3]=1),e},Ql=function(r){var t=[],o=[],e=-1;return r.split(Do).forEach(function(a){var c=a.match(Ee)||[];t.push.apply(t,c),o.push(e+=c.length+1)}),t.c=o,t},tn=function(r,t,o){var e="",a=(r+e).match(Do),c=t?"hsla(":"rgba(",i=0,g,l,d,s;if(!a)return r;if(a=a.map(function(p){return(p=Jl(p,t,1))&&c+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),o&&(d=Ql(r),g=o.c,g.join(e)!==d.c.join(e)))for(l=r.replace(Do,"1").split(Ee),s=l.length-1;i<s;i++)e+=l[i]+(~g.indexOf(i)?a.shift()||c+"0,0,0,0)":(d.length?d:a.length?a:o).shift());if(!l)for(l=r.split(Do),s=l.length-1;i<s;i++)e+=l[i]+a[i];return e+l[s]},Do=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",r;for(r in ea)n+="|"+r+"\\b";return new RegExp(n+")","gi")}(),Ed=/hsl[a]?\(/,rg=function(r){var t=r.join(" "),o;if(Do.lastIndex=0,Do.test(t))return o=Ed.test(t),r[1]=tn(r[1],o),r[0]=tn(r[0],o,Ql(r[1])),!0},wa,xt=function(){var n=Date.now,r=500,t=33,o=n(),e=o,a=1e3/240,c=a,i=[],g,l,d,s,p,f,b=function w(m){var h=n()-e,y=m===!0,S,_,v,M;if(h>r&&(o+=h-t),e+=h,v=e-o,S=v-c,(S>0||y)&&(M=++s.frame,p=v-s.time*1e3,s.time=v=v/1e3,c+=S+(S>=a?4:a-S),_=1),y||(g=l(w)),_)for(f=0;f<i.length;f++)i[f](v,p,M,m)};return s={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){Pl&&(!sc&&Cl()&&(Yt=sc=window,Dc=Yt.document||{},_t.gsap=Vt,(Yt.gsapVersions||(Yt.gsapVersions=[])).push(Vt.version),Rl(ai||Yt.GreenSockGlobals||!Yt.gsap&&Yt||{}),d=Yt.requestAnimationFrame),g&&s.sleep(),l=d||function(m){return setTimeout(m,c-s.time*1e3+1|0)},wa=1,b(2))},sleep:function(){(d?Yt.cancelAnimationFrame:clearTimeout)(g),wa=0,l=sa},lagSmoothing:function(m,h){r=m||1/Ir,t=Math.min(h,r,0)},fps:function(m){a=1e3/(m||240),c=s.time*1e3+a},add:function(m,h,y){var S=h?function(_,v,M,C){m(_,v,M,C),s.remove(S)}:m;return s.remove(m),i[y?"unshift":"push"](S),Ge(),S},remove:function(m,h){~(h=i.indexOf(m))&&i.splice(h,1)&&f>=h&&f--},_listeners:i},s}(),Ge=function(){return!wa&&xt.wake()},Mr={},Ad=/^[\d.\-M][\d.\-,\s]/,Ld=/["']/g,Dd=function(r){for(var t={},o=r.substr(1,r.length-3).split(":"),e=o[0],a=1,c=o.length,i,g,l;a<c;a++)g=o[a],i=a!==c-1?g.lastIndexOf(","):g.length,l=g.substr(0,i),t[e]=isNaN(l)?l.replace(Ld,"").trim():+l,e=g.substr(i+1).trim();return t},Pd=function(r){var t=r.indexOf("(")+1,o=r.indexOf(")"),e=r.indexOf("(",t);return r.substring(t,~e&&e<o?r.indexOf(")",o+1):o)},Rd=function(r){var t=(r+"").split("("),o=Mr[t[0]];return o&&t.length>1&&o.config?o.config.apply(null,~r.indexOf("{")?[Dd(t[1])]:Pd(r).split(",").map(Ul)):Mr._CE&&Ad.test(r)?Mr._CE("",r):o},tg=function(r){return function(t){return 1-r(1-t)}},og=function n(r,t){for(var o=r._first,e;o;)o instanceof pt?n(o,t):o.vars.yoyoEase&&(!o._yoyo||!o._repeat)&&o._yoyo!==t&&(o.timeline?n(o.timeline,t):(e=o._ease,o._ease=o._yEase,o._yEase=e,o._yoyo=t)),o=o._next},oe=function(r,t){return r&&(Yr(r)?r:Mr[r]||Rd(r))||t},ge=function(r,t,o,e){o===void 0&&(o=function(g){return 1-t(1-g)}),e===void 0&&(e=function(g){return g<.5?t(g*2)/2:1-t((1-g)*2)/2});var a={easeIn:t,easeOut:o,easeInOut:e},c;return mt(r,function(i){Mr[i]=_t[i]=a,Mr[c=i.toLowerCase()]=o;for(var g in a)Mr[c+(g==="easeIn"?".in":g==="easeOut"?".out":".inOut")]=Mr[i+"."+g]=a[g]}),a},eg=function(r){return function(t){return t<.5?(1-r(1-t*2))/2:.5+r((t-.5)*2)/2}},Mi=function n(r,t,o){var e=t>=1?t:1,a=(o||(r?.3:.45))/(t<1?t:1),c=a/gc*(Math.asin(1/e)||0),i=function(d){return d===1?1:e*Math.pow(2,-10*d)*ld((d-c)*a)+1},g=r==="out"?i:r==="in"?function(l){return 1-i(1-l)}:eg(i);return a=gc/a,g.config=function(l,d){return n(r,l,d)},g},Si=function n(r,t){t===void 0&&(t=1.70158);var o=function(c){return c?--c*c*((t+1)*c+t)+1:0},e=r==="out"?o:r==="in"?function(a){return 1-o(1-a)}:eg(o);return e.config=function(a){return n(r,a)},e};mt("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,r){var t=r<5?r+1:r;ge(n+",Power"+(t-1),r?function(o){return Math.pow(o,t)}:function(o){return o},function(o){return 1-Math.pow(1-o,t)},function(o){return o<.5?Math.pow(o*2,t)/2:1-Math.pow((1-o)*2,t)/2})});Mr.Linear.easeNone=Mr.none=Mr.Linear.easeIn;ge("Elastic",Mi("in"),Mi("out"),Mi());(function(n,r){var t=1/r,o=2*t,e=2.5*t,a=function(i){return i<t?n*i*i:i<o?n*Math.pow(i-1.5/r,2)+.75:i<e?n*(i-=2.25/r)*i+.9375:n*Math.pow(i-2.625/r,2)+.984375};ge("Bounce",function(c){return 1-a(1-c)},a)})(7.5625,2.75);ge("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ge("Circ",function(n){return-(Tl(1-n*n)-1)});ge("Sine",function(n){return n===1?1:-nd(n*id)+1});ge("Back",Si("in"),Si("out"),Si());Mr.SteppedEase=Mr.steps=_t.SteppedEase={config:function(r,t){r===void 0&&(r=1);var o=1/r,e=r+(t?0:1),a=t?1:0,c=1-Ir;return function(i){return((e*ka(0,c,i)|0)+a)*o}}};Oe.ease=Mr["quad.out"];mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ic+=n+","+n+"Params,"});var ag=function(r,t){this.id=cd++,r._gsap=this,this.target=r,this.harness=t,this.get=t?t.get:Nl,this.set=t?t.getSetter:Gc},ma=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Be(this,+t.duration,1,1),this.data=t.data,wa||xt.wake()}var r=n.prototype;return r.delay=function(o){return o||o===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+o-this._delay),this._delay=o,this):this._delay},r.duration=function(o){return arguments.length?this.totalDuration(this._repeat>0?o+(o+this._rDelay)*this._repeat:o):this.totalDuration()&&this._dur},r.totalDuration=function(o){return arguments.length?(this._dirty=0,Be(this,this._repeat<0?o:(o-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},r.totalTime=function(o,e){if(Ge(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Nc(this,o),!a._dp||a.parent||Vl(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&o<this._tDur||this._ts<0&&o>0||!this._tDur&&!o)&&$t(this._dp,this,this._start-this._delay)}return(this._tTime!==o||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===Ir||!o&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=o),Ol(this,o,e)),this},r.time=function(o,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),o+Jc(this))%(this._dur+this._rDelay)||(o?this._dur:0),e):this._time},r.totalProgress=function(o,e){return arguments.length?this.totalTime(this.totalDuration()*o,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},r.progress=function(o,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-o:o)+Jc(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},r.iteration=function(o,e){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(o-1)*a,e):this._repeat?Ue(this._tTime,a)+1:1},r.timeScale=function(o){if(!arguments.length)return this._rts===-Ir?0:this._rts;if(this._rts===o)return this;var e=this.parent&&this._ts?li(this.parent._time,this):this._tTime;return this._rts=+o||0,this._ts=this._ps||o===-Ir?0:this._rts,this.totalTime(ka(-this._delay,this._tDur,e),!0),mi(this),wd(this)},r.paused=function(o){return arguments.length?(this._ps!==o&&(this._ps=o,o?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ge(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ir&&(this._tTime-=Ir)))),this):this._ps},r.startTime=function(o){if(arguments.length){this._start=o;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&$t(e,this,o-this._delay),this}return this._start},r.endTime=function(o){return this._start+(wt(o)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},r.rawTime=function(o){var e=this.parent||this._dp;return e?o&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?li(e.rawTime(o),this):this._tTime:this._tTime},r.globalTime=function(o){for(var e=this,a=arguments.length?o:e.rawTime();e;)a=e._start+a/(e._ts||1),e=e._dp;return a},r.repeat=function(o){return arguments.length?(this._repeat=o===1/0?-2:o,Qc(this)):this._repeat===-2?1/0:this._repeat},r.repeatDelay=function(o){if(arguments.length){var e=this._time;return this._rDelay=o,Qc(this),e?this.time(e):this}return this._rDelay},r.yoyo=function(o){return arguments.length?(this._yoyo=o,this):this._yoyo},r.seek=function(o,e){return this.totalTime(Mt(this,o),wt(e))},r.restart=function(o,e){return this.play().totalTime(o?-this._delay:0,wt(e))},r.play=function(o,e){return o!=null&&this.seek(o,e),this.reversed(!1).paused(!1)},r.reverse=function(o,e){return o!=null&&this.seek(o||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.pause=function(o,e){return o!=null&&this.seek(o,e),this.paused(!0)},r.resume=function(){return this.paused(!1)},r.reversed=function(o){return arguments.length?(!!o!==this.reversed()&&this.timeScale(-this._rts||(o?-Ir:0)),this):this._rts<0},r.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ir,this},r.isActive=function(){var o=this.parent||this._dp,e=this._start,a;return!!(!o||this._ts&&this._initted&&o.isActive()&&(a=o.rawTime(!0))>=e&&a<this.endTime(!0)-Ir)},r.eventCallback=function(o,e,a){var c=this.vars;return arguments.length>1?(e?(c[o]=e,a&&(c[o+"Params"]=a),o==="onUpdate"&&(this._onUpdate=e)):delete c[o],this):c[o]},r.then=function(o){var e=this;return new Promise(function(a){var c=Yr(o)?o:Bl,i=function(){var l=e.then;e.then=null,Yr(c)&&(c=c(e))&&(c.then||c===e)&&(e.then=l),a(c),e.then=l};e._initted&&e.totalProgress()===1&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},r.kill=function(){oa(this)},n}();Pt(ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ir,_prom:0,_ps:!1,_rts:1});var pt=function(n){Sl(r,n);function r(o,e){var a;return o===void 0&&(o={}),a=n.call(this,o)||this,a.labels={},a.smoothChildTiming=!!o.smoothChildTiming,a.autoRemoveChildren=!!o.autoRemoveChildren,a._sort=wt(o.sortChildren),Or&&$t(o.parent||Or,lo(a),e),o.reversed&&a.reverse(),o.paused&&a.paused(!0),o.scrollTrigger&&Hl(lo(a),o.scrollTrigger),a}var t=r.prototype;return t.to=function(e,a,c){return la(0,arguments,this),this},t.from=function(e,a,c){return la(1,arguments,this),this},t.fromTo=function(e,a,c,i){return la(2,arguments,this),this},t.set=function(e,a,c){return a.duration=0,a.parent=this,na(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new qr(e,a,Mt(this,c),1),this},t.call=function(e,a,c){return $t(this,qr.delayedCall(0,e,a),c)},t.staggerTo=function(e,a,c,i,g,l,d){return c.duration=a,c.stagger=c.stagger||i,c.onComplete=l,c.onCompleteParams=d,c.parent=this,new qr(e,c,Mt(this,g)),this},t.staggerFrom=function(e,a,c,i,g,l,d){return c.runBackwards=1,na(c).immediateRender=wt(c.immediateRender),this.staggerTo(e,a,c,i,g,l,d)},t.staggerFromTo=function(e,a,c,i,g,l,d,s){return i.startAt=c,na(i).immediateRender=wt(i.immediateRender),this.staggerTo(e,a,i,g,l,d,s)},t.render=function(e,a,c){var i=this._time,g=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=e<=0?0:et(e),s=this._zTime<0!=e<0&&(this._initted||!l),p,f,b,w,m,h,y,S,_,v,M,C;if(this!==Or&&d>g&&e>=0&&(d=g),d!==this._tTime||c||s){if(i!==this._time&&l&&(d+=this._time-i,e+=this._time-i),p=d,_=this._start,S=this._ts,h=!S,s&&(l||(i=this._zTime),(e||!a)&&(this._zTime=e)),this._repeat){if(M=this._yoyo,m=l+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,a,c);if(p=et(d%m),d===g?(w=this._repeat,p=l):(w=~~(d/m),w&&w===d/m&&(p=l,w--),p>l&&(p=l)),v=Ue(this._tTime,m),!i&&this._tTime&&v!==w&&(v=w),M&&w&1&&(p=l-p,C=1),w!==v&&!this._lock){var u=M&&v&1,z=u===(M&&w&1);if(w<v&&(u=!u),i=u?0:l,this._lock=1,this.render(i||(C?0:et(w*m)),a,!l)._lock=0,this._tTime=d,!a&&this.parent&&At(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),i&&i!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,g=this._tDur,z&&(this._lock=2,i=u?l:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;og(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=hd(this,et(i),et(p)),y&&(d-=p-(p=y._start))),this._tTime=d,this._time=p,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,i=0),!i&&p&&!a&&(At(this,"onStart"),this._tTime!==d))return this;if(p>=i&&e>=0)for(f=this._first;f;){if(b=f._next,(f._act||p>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(e,a,c);if(f.render(f._ts>0?(p-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(p-f._start)*f._ts,a,c),p!==this._time||!this._ts&&!h){y=0,b&&(d+=this._zTime=-Ir);break}}f=b}else{f=this._last;for(var D=e<0?e:p;f;){if(b=f._prev,(f._act||D<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(e,a,c);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,a,c),p!==this._time||!this._ts&&!h){y=0,b&&(d+=this._zTime=D?-Ir:Ir);break}}f=b}}if(y&&!a&&(this.pause(),y.render(p>=i?0:-Ir)._zTime=p>=i?1:-1,this._ts))return this._start=_,mi(this),this.render(e,a,c);this._onUpdate&&!a&&At(this,"onUpdate",!0),(d===g&&this._tTime>=this.totalDuration()||!d&&i)&&(_===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((e||!l)&&(d===g&&this._ts>0||!d&&this._ts<0)&&wo(this,1),!a&&!(e<0&&!i)&&(d||i||!g)&&(At(this,d===g&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<g&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(e,a){var c=this;if(bo(a)||(a=Mt(this,a,e)),!(e instanceof ma)){if(it(e))return e.forEach(function(i){return c.add(i,a)}),this;if(Kr(e))return this.addLabel(e,a);if(Yr(e))e=qr.delayedCall(0,e);else return this}return this!==e?$t(this,e,a):this},t.getChildren=function(e,a,c,i){e===void 0&&(e=!0),a===void 0&&(a=!0),c===void 0&&(c=!0),i===void 0&&(i=-Ct);for(var g=[],l=this._first;l;)l._start>=i&&(l instanceof qr?a&&g.push(l):(c&&g.push(l),e&&g.push.apply(g,l.getChildren(!0,a,c)))),l=l._next;return g},t.getById=function(e){for(var a=this.getChildren(1,1,1),c=a.length;c--;)if(a[c].vars.id===e)return a[c]},t.remove=function(e){return Kr(e)?this.removeLabel(e):Yr(e)?this.killTweensOf(e):(wi(this,e),e===this._recent&&(this._recent=this._last),te(this))},t.totalTime=function(e,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=et(xt.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),n.prototype.totalTime.call(this,e,a),this._forcing=0,this):this._tTime},t.addLabel=function(e,a){return this.labels[e]=Mt(this,a),this},t.removeLabel=function(e){return delete this.labels[e],this},t.addPause=function(e,a,c){var i=qr.delayedCall(0,a||sa,c);return i.data="isPause",this._hasPause=1,$t(this,i,Mt(this,e))},t.removePause=function(e){var a=this._first;for(e=Mt(this,e);a;)a._start===e&&a.data==="isPause"&&wo(a),a=a._next},t.killTweensOf=function(e,a,c){for(var i=this.getTweensOf(e,c),g=i.length;g--;)To!==i[g]&&i[g].kill(e,a);return this},t.getTweensOf=function(e,a){for(var c=[],i=Et(e),g=this._first,l=bo(a),d;g;)g instanceof qr?dd(g._targets,i)&&(l?(!To||g._initted&&g._ts)&&g.globalTime(0)<=a&&g.globalTime(g.totalDuration())>a:!a||g.isActive())&&c.push(g):(d=g.getTweensOf(i,a)).length&&c.push.apply(c,d),g=g._next;return c},t.tweenTo=function(e,a){a=a||{};var c=this,i=Mt(c,e),g=a,l=g.startAt,d=g.onStart,s=g.onStartParams,p=g.immediateRender,f,b=qr.to(c,Pt({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:a.duration||Math.abs((i-(l&&"time"in l?l.time:c._time))/c.timeScale())||Ir,onStart:function(){if(c.pause(),!f){var m=a.duration||Math.abs((i-(l&&"time"in l?l.time:c._time))/c.timeScale());b._dur!==m&&Be(b,m,0,1).render(b._time,!0,!0),f=1}d&&d.apply(b,s||[])}},a));return p?b.render(0):b},t.tweenFromTo=function(e,a,c){return this.tweenTo(a,Pt({startAt:{time:Mt(this,e)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(e){return e===void 0&&(e=this._time),rn(this,Mt(this,e))},t.previousLabel=function(e){return e===void 0&&(e=this._time),rn(this,Mt(this,e),1)},t.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Ir)},t.shiftChildren=function(e,a,c){c===void 0&&(c=0);for(var i=this._first,g=this.labels,l;i;)i._start>=c&&(i._start+=e,i._end+=e),i=i._next;if(a)for(l in g)g[l]>=c&&(g[l]+=e);return te(this)},t.invalidate=function(){var e=this._first;for(this._lock=0;e;)e.invalidate(),e=e._next;return n.prototype.invalidate.call(this)},t.clear=function(e){e===void 0&&(e=!0);for(var a=this._first,c;a;)c=a._next,this.remove(a),a=c;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),te(this)},t.totalDuration=function(e){var a=0,c=this,i=c._last,g=Ct,l,d,s;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-e:e));if(c._dirty){for(s=c.parent;i;)l=i._prev,i._dirty&&i.totalDuration(),d=i._start,d>g&&c._sort&&i._ts&&!c._lock?(c._lock=1,$t(c,i,d-i._delay,1)._lock=0):g=d,d<0&&i._ts&&(a-=d,(!s&&!c._dp||s&&s.smoothChildTiming)&&(c._start+=d/c._ts,c._time-=d,c._tTime-=d),c.shiftChildren(-d,!1,-1/0),g=0),i._end>a&&i._ts&&(a=i._end),i=l;Be(c,c===Or&&c._time>a?c._time:a,1,1),c._dirty=0}return c._tDur},r.updateRoot=function(e){if(Or._ts&&(Ol(Or,li(e,Or)),Fl=xt.frame),xt.frame>=$c){$c+=kt.autoSleep||120;var a=Or._first;if((!a||!a._ts)&&kt.autoSleep&&xt._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||xt.sleep()}}},r}(ma);Pt(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Id=function(r,t,o,e,a,c,i){var g=new ft(this._pt,r,t,0,1,dg,null,a),l=0,d=0,s,p,f,b,w,m,h,y;for(g.b=o,g.e=e,o+="",e+="",(h=~e.indexOf("random("))&&(e=pa(e)),c&&(y=[o,e],c(y,r,t),o=y[0],e=y[1]),p=o.match(ki)||[];s=ki.exec(e);)b=s[0],w=e.substring(l,s.index),f?f=(f+1)%5:w.substr(-5)==="rgba("&&(f=1),b!==p[d++]&&(m=parseFloat(p[d-1])||0,g._pt={_next:g._pt,p:w||d===1?w:",",s:m,c:b.charAt(1)==="="?Pe(m,b)-m:parseFloat(b)-m,m:f&&f<4?Math.round:0},l=ki.lastIndex);return g.c=l<e.length?e.substring(l,e.length):"",g.fp=i,(Ll.test(e)||h)&&(g.e=0),this._pt=g,g},Oc=function(r,t,o,e,a,c,i,g,l){Yr(e)&&(e=e(a||0,r,c));var d=r[t],s=o!=="get"?o:Yr(d)?l?r[t.indexOf("set")||!Yr(r["get"+t.substr(3)])?t:"get"+t.substr(3)](l):r[t]():d,p=Yr(d)?l?Bd:lg:Bc,f;if(Kr(e)&&(~e.indexOf("random(")&&(e=pa(e)),e.charAt(1)==="="&&(f=Pe(s,e)+(at(s)||0),(f||f===0)&&(e=f))),s!==e||bc)return!isNaN(s*e)&&e!==""?(f=new ft(this._pt,r,t,+s||0,e-(s||0),typeof d=="boolean"?Vd:gg,0,p),l&&(f.fp=l),i&&f.modifier(i,this,r),this._pt=f):(!d&&!(t in r)&&Pc(t,e),Id.call(this,r,t,s,e,p,g||kt.stringFilter,l))},Fd=function(r,t,o,e,a){if(Yr(r)&&(r=ga(r,a,t,o,e)),!ho(r)||r.style&&r.nodeType||it(r)||El(r))return Kr(r)?ga(r,a,t,o,e):r;var c={},i;for(i in r)c[i]=ga(r[i],a,t,o,e);return c},ig=function(r,t,o,e,a,c){var i,g,l,d;if(vt[r]&&(i=new vt[r]).init(a,i.rawVars?t[r]:Fd(t[r],e,a,c,o),o,e,c)!==!1&&(o._pt=g=new ft(o._pt,a,r,0,1,i.render,i,0,i.priority),o!==Ae))for(l=o._ptLookup[o._targets.indexOf(a)],d=i._props.length;d--;)l[i._props[d]]=g;return i},To,bc,Uc=function n(r,t){var o=r.vars,e=o.ease,a=o.startAt,c=o.immediateRender,i=o.lazy,g=o.onUpdate,l=o.onUpdateParams,d=o.callbackScope,s=o.runBackwards,p=o.yoyoEase,f=o.keyframes,b=o.autoRevert,w=r._dur,m=r._startAt,h=r._targets,y=r.parent,S=y&&y.data==="nested"?y.parent._targets:h,_=r._overwrite==="auto"&&!Ac,v=r.timeline,M,C,u,z,D,L,K,q,A,B,I,G,j;if(v&&(!f||!e)&&(e="none"),r._ease=oe(e,Oe.ease),r._yEase=p?tg(oe(p===!0?e:p,Oe.ease)):0,p&&r._yoyo&&!r._repeat&&(p=r._yEase,r._yEase=r._ease,r._ease=p),r._from=!v&&!!o.runBackwards,!v||f&&!o.stagger){if(q=h[0]?re(h[0]).harness:0,G=q&&o[q.prop],M=ni(o,Rc),m&&(wo(m.render(-1,!0)),m._lazy=0),a)if(wo(r._startAt=qr.set(h,Pt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:wt(i),startAt:null,delay:0,onUpdate:g,onUpdateParams:l,callbackScope:d,stagger:0},a))),t<0&&!c&&!b&&r._startAt.render(-1,!0),c){if(t>0&&!b&&(r._startAt=0),w&&t<=0){t&&(r._zTime=t);return}}else b===!1&&(r._startAt=0);else if(s&&w){if(m)!b&&(r._startAt=0);else if(t&&(c=!1),u=Pt({overwrite:!1,data:"isFromStart",lazy:c&&wt(i),immediateRender:c,stagger:0,parent:y},M),G&&(u[q.prop]=G),wo(r._startAt=qr.set(h,u)),t<0&&r._startAt.render(-1,!0),r._zTime=t,!c)n(r._startAt,Ir);else if(!t)return}for(r._pt=r._ptCache=0,i=w&&wt(i)||i&&!w,C=0;C<h.length;C++){if(D=h[C],K=D._gsap||Fc(h)[C]._gsap,r._ptLookup[C]=B={},pc[K.id]&&Lo.length&&ci(),I=S===h?C:S.indexOf(D),q&&(A=new q).init(D,G||M,r,I,S)!==!1&&(r._pt=z=new ft(r._pt,D,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(N){B[N]=z}),A.priority&&(L=1)),!q||G)for(u in M)vt[u]&&(A=ig(u,M,r,I,D,S))?A.priority&&(L=1):B[u]=z=Oc.call(r,D,u,"get",M[u],I,S,0,o.stringFilter);r._op&&r._op[C]&&r.kill(D,r._op[C]),_&&r._pt&&(To=r,Or.killTweensOf(D,B,r.globalTime(t)),j=!r.parent,To=0),r._pt&&i&&(pc[K.id]=1)}L&&sg(r),r._onInit&&r._onInit(r)}r._onUpdate=g,r._initted=(!r._op||r._pt)&&!j,f&&t<=0&&v.render(Ct,!0,!0)},Nd=function(r,t,o,e,a,c,i){var g=(r._pt&&r._ptCache||(r._ptCache={}))[t],l,d,s;if(!g)for(g=r._ptCache[t]=[],d=r._ptLookup,s=r._targets.length;s--;){if(l=d[s][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t;)l=l._next;if(!l)return bc=1,r.vars[t]="+=0",Uc(r,i),bc=0,1;g.push(l)}for(s=g.length;s--;)l=g[s],l.s=(e||e===0)&&!a?e:l.s+(e||0)+c*l.c,l.c=o-l.s,l.e&&(l.e=Gr(o)+at(l.e)),l.b&&(l.b=l.s+at(l.b))},Od=function(r,t){var o=r[0]?re(r[0]).harness:0,e=o&&o.aliases,a,c,i,g;if(!e)return t;a=ie({},t);for(c in e)if(c in a)for(g=e[c].split(","),i=g.length;i--;)a[g[i]]=a[c];return a},Ud=function(r,t,o,e){var a=t.ease||e||"power1.inOut",c,i;if(it(t))i=o[r]||(o[r]=[]),t.forEach(function(g,l){return i.push({t:l/(t.length-1)*100,v:g,e:a})});else for(c in t)i=o[c]||(o[c]=[]),c==="ease"||i.push({t:parseFloat(r),v:t[c],e:a})},ga=function(r,t,o,e,a){return Yr(r)?r.call(t,o,e,a):Kr(r)&&~r.indexOf("random(")?pa(r):r},cg=Ic+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ng={};mt(cg+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return ng[n]=1});var qr=function(n){Sl(r,n);function r(o,e,a,c){var i;typeof e=="number"&&(a.duration=e,e=a,a=null),i=n.call(this,c?e:na(e))||this;var g=i.vars,l=g.duration,d=g.delay,s=g.immediateRender,p=g.stagger,f=g.overwrite,b=g.keyframes,w=g.defaults,m=g.scrollTrigger,h=g.yoyoEase,y=e.parent||Or,S=(it(o)||El(o)?bo(o[0]):"length"in e)?[o]:Et(o),_,v,M,C,u,z,D,L;if(i._targets=S.length?Fc(S):ii("GSAP target "+o+" not found. https://greensock.com",!kt.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=f,b||p||Aa(l)||Aa(d)){if(e=i.vars,_=i.timeline=new pt({data:"nested",defaults:w||{}}),_.kill(),_.parent=_._dp=lo(i),_._start=0,p||Aa(l)||Aa(d)){if(C=S.length,D=p&&ql(p),ho(p))for(u in p)~cg.indexOf(u)&&(L||(L={}),L[u]=p[u]);for(v=0;v<C;v++)M=ni(e,ng),M.stagger=0,h&&(M.yoyoEase=h),L&&ie(M,L),z=S[v],M.duration=+ga(l,lo(i),v,z,S),M.delay=(+ga(d,lo(i),v,z,S)||0)-i._delay,!p&&C===1&&M.delay&&(i._delay=d=M.delay,i._start+=d,M.delay=0),_.to(z,M,D?D(v,z,S):0),_._ease=Mr.none;_.duration()?l=d=0:i.timeline=0}else if(b){na(Pt(_.vars.defaults,{ease:"none"})),_._ease=oe(b.ease||e.ease||"none");var K=0,q,A,B;if(it(b))b.forEach(function(I){return _.to(S,I,">")});else{M={};for(u in b)u==="ease"||u==="easeEach"||Ud(u,b[u],M,b.easeEach);for(u in M)for(q=M[u].sort(function(I,G){return I.t-G.t}),K=0,v=0;v<q.length;v++)A=q[v],B={ease:A.e,duration:(A.t-(v?q[v-1].t:0))/100*l},B[u]=A.v,_.to(S,B,K),K+=B.duration;_.duration()<l&&_.to({},{duration:l-_.duration()})}}l||i.duration(l=_.duration())}else i.timeline=0;return f===!0&&!Ac&&(To=lo(i),Or.killTweensOf(S),To=0),$t(y,lo(i),a),e.reversed&&i.reverse(),e.paused&&i.paused(!0),(s||!l&&!b&&i._start===et(y._time)&&wt(s)&&md(lo(i))&&y.data!=="nested")&&(i._tTime=-Ir,i.render(Math.max(0,-d))),m&&Hl(lo(i),m),i}var t=r.prototype;return t.render=function(e,a,c){var i=this._time,g=this._tDur,l=this._dur,d=e>g-Ir&&e>=0?g:e<Ir?0:e,s,p,f,b,w,m,h,y,S;if(!l)bd(this,e,a,c);else if(d!==this._tTime||!e||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=e<0){if(s=d,y=this.timeline,this._repeat){if(b=l+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(b*100+e,a,c);if(s=et(d%b),d===g?(f=this._repeat,s=l):(f=~~(d/b),f&&f===d/b&&(s=l,f--),s>l&&(s=l)),m=this._yoyo&&f&1,m&&(S=this._yEase,s=l-s),w=Ue(this._tTime,b),s===i&&!c&&this._initted)return this._tTime=d,this;f!==w&&(y&&this._yEase&&og(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=c=1,this.render(et(b*f),!0).invalidate()._lock=0))}if(!this._initted){if(Wl(this,e<0?e:s,c,a))return this._tTime=0,this;if(i!==this._time)return this;if(l!==this._dur)return this.render(e,a,c)}if(this._tTime=d,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(S||this._ease)(s/l),this._from&&(this.ratio=h=1-h),s&&!i&&!a&&(At(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(h,p.d),p=p._next;y&&y.render(e<0?e:!s&&m?-Ir:y._dur*y._ease(s/this._dur),a,c)||this._startAt&&(this._zTime=e),this._onUpdate&&!a&&(e<0&&this._startAt&&this._startAt.render(e,!0,c),At(this,"onUpdate")),this._repeat&&f!==w&&this.vars.onRepeat&&!a&&this.parent&&At(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(e<0&&this._startAt&&!this._onUpdate&&this._startAt.render(e,!0,!0),(e||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&wo(this,1),!a&&!(e<0&&!i)&&(d||i)&&(At(this,d===g?"onComplete":"onReverseComplete",!0),this._prom&&!(d<g&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),n.prototype.invalidate.call(this)},t.resetTo=function(e,a,c,i){wa||xt.wake(),this._ts||this.play();var g=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Uc(this,g),l=this._ease(g/this._dur),Nd(this,e,a,c,i,l,g)?this.resetTo(e,a,c,i):(Nc(this,0),this.parent||Gl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(e,a){if(a===void 0&&(a="all"),!e&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?oa(this):this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(e,a,To&&To.vars.overwrite!==!0)._first||oa(this),this.parent&&c!==this.timeline.totalDuration()&&Be(this,this._dur*this.timeline._tDur/c,0,1),this}var i=this._targets,g=e?Et(e):i,l=this._ptLookup,d=this._pt,s,p,f,b,w,m,h;if((!a||a==="all")&&pd(i,g))return a==="all"&&(this._pt=0),oa(this);for(s=this._op=this._op||[],a!=="all"&&(Kr(a)&&(w={},mt(a,function(y){return w[y]=1}),a=w),a=Od(i,a)),h=i.length;h--;)if(~g.indexOf(i[h])){p=l[h],a==="all"?(s[h]=a,b=p,f={}):(f=s[h]=s[h]||{},b=a);for(w in b)m=p&&p[w],m&&((!("kill"in m.d)||m.d.kill(w)===!0)&&wi(this,m,"_pt"),delete p[w]),f!=="all"&&(f[w]=1)}return this._initted&&!this._pt&&d&&oa(this),this},r.to=function(e,a){return new r(e,a,arguments[2])},r.from=function(e,a){return la(1,arguments)},r.delayedCall=function(e,a,c,i){return new r(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:a,onReverseComplete:a,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:i})},r.fromTo=function(e,a,c){return la(2,arguments)},r.set=function(e,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new r(e,a)},r.killTweensOf=function(e,a,c){return Or.killTweensOf(e,a,c)},r}(ma);Pt(qr.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mt("staggerTo,staggerFrom,staggerFromTo",function(n){qr[n]=function(){var r=new pt,t=mc.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),r[n].apply(r,t)}});var Bc=function(r,t,o){return r[t]=o},lg=function(r,t,o){return r[t](o)},Bd=function(r,t,o,e){return r[t](e.fp,o)},Gd=function(r,t,o){return r.setAttribute(t,o)},Gc=function(r,t){return Yr(r[t])?lg:Lc(r[t])&&r.setAttribute?Gd:Bc},gg=function(r,t){return t.set(t.t,t.p,Math.round((t.s+t.c*r)*1e6)/1e6,t)},Vd=function(r,t){return t.set(t.t,t.p,!!(t.s+t.c*r),t)},dg=function(r,t){var o=t._pt,e="";if(!r&&t.b)e=t.b;else if(r===1&&t.e)e=t.e;else{for(;o;)e=o.p+(o.m?o.m(o.s+o.c*r):Math.round((o.s+o.c*r)*1e4)/1e4)+e,o=o._next;e+=t.c}t.set(t.t,t.p,e,t)},Vc=function(r,t){for(var o=t._pt;o;)o.r(r,o.d),o=o._next},Hd=function(r,t,o,e){for(var a=this._pt,c;a;)c=a._next,a.p===e&&a.modifier(r,t,o),a=c},Wd=function(r){for(var t=this._pt,o,e;t;)e=t._next,t.p===r&&!t.op||t.op===r?wi(this,t,"_pt"):t.dep||(o=1),t=e;return!o},jd=function(r,t,o,e){e.mSet(r,t,e.m.call(e.tween,o,e.mt),e)},sg=function(r){for(var t=r._pt,o,e,a,c;t;){for(o=t._next,e=a;e&&e.pr>t.pr;)e=e._next;(t._prev=e?e._prev:c)?t._prev._next=t:a=t,(t._next=e)?e._prev=t:c=t,t=o}r._pt=a},ft=function(){function n(t,o,e,a,c,i,g,l,d){this.t=o,this.s=a,this.c=c,this.p=e,this.r=i||gg,this.d=g||this,this.set=l||Bc,this.pr=d||0,this._next=t,t&&(t._prev=this)}var r=n.prototype;return r.modifier=function(o,e,a){this.mSet=this.mSet||this.set,this.set=jd,this.m=o,this.mt=a,this.tween=e},n}();mt(Ic+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Rc[n]=1});_t.TweenMax=_t.TweenLite=qr;_t.TimelineLite=_t.TimelineMax=pt;Or=new pt({sortChildren:!1,defaults:Oe,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kt.stringFilter=rg;var gi={registerPlugin:function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];t.forEach(function(e){return Cd(e)})},timeline:function(r){return new pt(r)},getTweensOf:function(r,t){return Or.getTweensOf(r,t)},getProperty:function(r,t,o,e){Kr(r)&&(r=Et(r)[0]);var a=re(r||{}).get,c=o?Bl:Ul;return o==="native"&&(o=""),r&&(t?c((vt[t]&&vt[t].get||a)(r,t,o,e)):function(i,g,l){return c((vt[i]&&vt[i].get||a)(r,i,g,l))})},quickSetter:function(r,t,o){if(r=Et(r),r.length>1){var e=r.map(function(d){return Vt.quickSetter(d,t,o)}),a=e.length;return function(d){for(var s=a;s--;)e[s](d)}}r=r[0]||{};var c=vt[t],i=re(r),g=i.harness&&(i.harness.aliases||{})[t]||t,l=c?function(d){var s=new c;Ae._pt=0,s.init(r,o?d+o:d,Ae,0,[r]),s.render(1,s),Ae._pt&&Vc(1,Ae)}:i.set(r,g);return c?l:function(d){return l(r,g,o?d+o:d,i,1)}},quickTo:function(r,t,o){var e,a=Vt.to(r,ie((e={},e[t]="+=0.1",e.paused=!0,e),o||{})),c=function(g,l,d){return a.resetTo(t,g,l,d)};return c.tween=a,c},isTweening:function(r){return Or.getTweensOf(r,!0).length>0},defaults:function(r){return r&&r.ease&&(r.ease=oe(r.ease,Oe.ease)),Kc(Oe,r||{})},config:function(r){return Kc(kt,r||{})},registerEffect:function(r){var t=r.name,o=r.effect,e=r.plugins,a=r.defaults,c=r.extendTimeline;(e||"").split(",").forEach(function(i){return i&&!vt[i]&&!_t[i]&&ii(t+" effect requires "+i+" plugin.")}),_i[t]=function(i,g,l){return o(Et(i),Pt(g||{},a),l)},c&&(pt.prototype[t]=function(i,g,l){return this.add(_i[t](i,ho(g)?g:(l=g)&&{},this),l)})},registerEase:function(r,t){Mr[r]=oe(t)},parseEase:function(r,t){return arguments.length?oe(r,t):Mr},getById:function(r){return Or.getById(r)},exportRoot:function(r,t){r===void 0&&(r={});var o=new pt(r),e,a;for(o.smoothChildTiming=wt(r.smoothChildTiming),Or.remove(o),o._dp=0,o._time=o._tTime=Or._time,e=Or._first;e;)a=e._next,(t||!(!e._dur&&e instanceof qr&&e.vars.onComplete===e._targets[0]))&&$t(o,e,e._start-e._delay),e=a;return $t(Or,o,0),o},utils:{wrap:Md,wrapYoyo:Sd,distribute:ql,random:Zl,snap:Yl,normalize:zd,getUnit:at,clamp:vd,splitColor:Jl,toArray:Et,selector:xd,mapRange:Kl,pipe:kd,unitize:_d,interpolate:Td,shuffle:Xl},install:Rl,effects:_i,ticker:xt,updateRoot:pt.updateRoot,plugins:vt,globalTimeline:Or,core:{PropTween:ft,globals:Il,Tween:qr,Timeline:pt,Animation:ma,getCache:re,_removeLinkedListItem:wi,suppressOverwrites:function(r){return Ac=r}}};mt("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return gi[n]=qr[n]});xt.add(pt.updateRoot);Ae=gi.to({},{duration:0});var Xd=function(r,t){for(var o=r._pt;o&&o.p!==t&&o.op!==t&&o.fp!==t;)o=o._next;return o},qd=function(r,t){var o=r._targets,e,a,c;for(e in t)for(a=o.length;a--;)c=r._ptLookup[a][e],c&&(c=c.d)&&(c._pt&&(c=Xd(c,e)),c&&c.modifier&&c.modifier(t[e],r,o[a],e))},Ti=function(r,t){return{name:r,rawVars:1,init:function(e,a,c){c._onInit=function(i){var g,l;if(Kr(a)&&(g={},mt(a,function(d){return g[d]=1}),a=g),t){g={};for(l in a)g[l]=t(a[l]);a=g}qd(i,a)}}}},Vt=gi.registerPlugin({name:"attr",init:function(r,t,o,e,a){var c,i;for(c in t)i=this.add(r,"setAttribute",(r.getAttribute(c)||0)+"",t[c],e,a,0,0,c),i&&(i.op=c),this._props.push(c)}},{name:"endArray",init:function(r,t){for(var o=t.length;o--;)this.add(r,o,r[o]||0,t[o])}},Ti("roundProps",fc),Ti("modifiers"),Ti("snap",Yl))||gi;qr.version=pt.version=Vt.version="3.10.4";Pl=1;Cl()&&Ge();Mr.Power0;Mr.Power1;Mr.Power2;Mr.Power3;Mr.Power4;Mr.Linear;Mr.Quad;Mr.Cubic;Mr.Quart;Mr.Quint;Mr.Strong;Mr.Elastic;Mr.Back;Mr.SteppedEase;Mr.Bounce;Mr.Sine;Mr.Expo;Mr.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var on,Co,Re,Hc,$o,en,Yd=function(){return typeof window!="undefined"},Ro={},Wo=180/Math.PI,Ie=Math.PI/180,we=Math.atan2,an=1e8,pg=/([A-Z])/g,Zd=/(left|right|width|margin|padding|x)/i,$d=/[\s,\(]\S/,Eo={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wg=function(r,t){return t.set(t.t,t.p,Math.round((t.s+t.c*r)*1e4)/1e4+t.u,t)},Kd=function(r,t){return t.set(t.t,t.p,r===1?t.e:Math.round((t.s+t.c*r)*1e4)/1e4+t.u,t)},Jd=function(r,t){return t.set(t.t,t.p,r?Math.round((t.s+t.c*r)*1e4)/1e4+t.u:t.b,t)},Qd=function(r,t){var o=t.s+t.c*r;t.set(t.t,t.p,~~(o+(o<0?-.5:.5))+t.u,t)},mg=function(r,t){return t.set(t.t,t.p,r?t.e:t.b,t)},fg=function(r,t){return t.set(t.t,t.p,r!==1?t.b:t.e,t)},rs=function(r,t,o){return r.style[t]=o},ts=function(r,t,o){return r.style.setProperty(t,o)},os=function(r,t,o){return r._gsap[t]=o},es=function(r,t,o){return r._gsap.scaleX=r._gsap.scaleY=o},as=function(r,t,o,e,a){var c=r._gsap;c.scaleX=c.scaleY=o,c.renderTransform(a,c)},is=function(r,t,o,e,a){var c=r._gsap;c[t]=o,c.renderTransform(a,c)},Qr="transform",Io=Qr+"Origin",bg,hc=function(r,t){var o=Co.createElementNS?Co.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),r):Co.createElement(r);return o.style?o:Co.createElement(r)},mo=function n(r,t,o){var e=getComputedStyle(r);return e[t]||e.getPropertyValue(t.replace(pg,"-$1").toLowerCase())||e.getPropertyValue(t)||!o&&n(r,Ve(t)||t,1)||""},cn="O,Moz,ms,Ms,Webkit".split(","),Ve=function(r,t,o){var e=t||$o,a=e.style,c=5;if(r in a&&!o)return r;for(r=r.charAt(0).toUpperCase()+r.substr(1);c--&&!(cn[c]+r in a););return c<0?null:(c===3?"ms":c>=0?cn[c]:"")+r},uc=function(){Yd()&&window.document&&(on=window,Co=on.document,Re=Co.documentElement,$o=hc("div")||{style:{}},hc("div"),Qr=Ve(Qr),Io=Qr+"Origin",$o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!Ve("perspective"),Hc=1)},Ci=function n(r){var t=hc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=this.parentNode,e=this.nextSibling,a=this.style.cssText,c;if(Re.appendChild(t),t.appendChild(this),this.style.display="block",r)try{c=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(c=this._gsapBBox());return o&&(e?o.insertBefore(this,e):o.appendChild(this)),Re.removeChild(t),this.style.cssText=a,c},nn=function(r,t){for(var o=t.length;o--;)if(r.hasAttribute(t[o]))return r.getAttribute(t[o])},hg=function(r){var t;try{t=r.getBBox()}catch{t=Ci.call(r,!0)}return t&&(t.width||t.height)||r.getBBox===Ci||(t=Ci.call(r,!0)),t&&!t.width&&!t.x&&!t.y?{x:+nn(r,["x","cx","x1"])||0,y:+nn(r,["y","cy","y1"])||0,width:0,height:0}:t},ug=function(r){return!!(r.getCTM&&(!r.parentNode||r.ownerSVGElement)&&hg(r))},fa=function(r,t){if(t){var o=r.style;t in Ro&&t!==Io&&(t=Qr),o.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),o.removeProperty(t.replace(pg,"-$1").toLowerCase())):o.removeAttribute(t)}},Ao=function(r,t,o,e,a,c){var i=new ft(r._pt,t,o,0,1,c?fg:mg);return r._pt=i,i.b=e,i.e=a,r._props.push(o),i},ln={deg:1,rad:1,turn:1},Fo=function n(r,t,o,e){var a=parseFloat(o)||0,c=(o+"").trim().substr((a+"").length)||"px",i=$o.style,g=Zd.test(t),l=r.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(g?"Width":"Height"),s=100,p=e==="px",f=e==="%",b,w,m,h;return e===c||!a||ln[e]||ln[c]?a:(c!=="px"&&!p&&(a=n(r,t,o,"px")),h=r.getCTM&&ug(r),(f||c==="%")&&(Ro[t]||~t.indexOf("adius"))?(b=h?r.getBBox()[g?"width":"height"]:r[d],Gr(f?a/b*s:a/100*b)):(i[g?"width":"height"]=s+(p?c:e),w=~t.indexOf("adius")||e==="em"&&r.appendChild&&!l?r:r.parentNode,h&&(w=(r.ownerSVGElement||{}).parentNode),(!w||w===Co||!w.appendChild)&&(w=Co.body),m=w._gsap,m&&f&&m.width&&g&&m.time===xt.time?Gr(a/m.width*s):((f||c==="%")&&(i.position=mo(r,"position")),w===r&&(i.position="static"),w.appendChild($o),b=$o[d],w.removeChild($o),i.position="absolute",g&&f&&(m=re(w),m.time=xt.time,m.width=w[d]),Gr(p?b*a/s:b&&a?s/b*a:0))))},jo=function(r,t,o,e){var a;return Hc||uc(),t in Eo&&t!=="transform"&&(t=Eo[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ro[t]&&t!=="transform"?(a=ha(r,e),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:si(mo(r,Io))+" "+a.zOrigin+"px"):(a=r.style[t],(!a||a==="auto"||e||~(a+"").indexOf("calc("))&&(a=di[t]&&di[t](r,t,o)||mo(r,t)||Nl(r,t)||(t==="opacity"?1:0))),o&&!~(a+"").trim().indexOf(" ")?Fo(r,t,a,o)+o:a},cs=function(r,t,o,e){if(!o||o==="none"){var a=Ve(t,r,1),c=a&&mo(r,a,1);c&&c!==o?(t=a,o=c):t==="borderColor"&&(o=mo(r,"borderTopColor"))}var i=new ft(this._pt,r.style,t,0,1,dg),g=0,l=0,d,s,p,f,b,w,m,h,y,S,_,v;if(i.b=o,i.e=e,o+="",e+="",e==="auto"&&(r.style[t]=e,e=mo(r,t)||e,r.style[t]=o),d=[o,e],rg(d),o=d[0],e=d[1],p=o.match(Ee)||[],v=e.match(Ee)||[],v.length){for(;s=Ee.exec(e);)m=s[0],y=e.substring(g,s.index),b?b=(b+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(b=1),m!==(w=p[l++]||"")&&(f=parseFloat(w)||0,_=w.substr((f+"").length),m.charAt(1)==="="&&(m=Pe(f,m)+_),h=parseFloat(m),S=m.substr((h+"").length),g=Ee.lastIndex-S.length,S||(S=S||kt.units[t]||_,g===e.length&&(e+=S,i.e+=S)),_!==S&&(f=Fo(r,t,w,S)||0),i._pt={_next:i._pt,p:y||l===1?y:",",s:f,c:h-f,m:b&&b<4||t==="zIndex"?Math.round:0});i.c=g<e.length?e.substring(g,e.length):""}else i.r=t==="display"&&e==="none"?fg:mg;return Ll.test(e)&&(i.e=0),this._pt=i,i},gn={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ns=function(r){var t=r.split(" "),o=t[0],e=t[1]||"50%";return(o==="top"||o==="bottom"||e==="left"||e==="right")&&(r=o,o=e,e=r),t[0]=gn[o]||o,t[1]=gn[e]||e,t.join(" ")},ls=function(r,t){if(t.tween&&t.tween._time===t.tween._dur){var o=t.t,e=o.style,a=t.u,c=o._gsap,i,g,l;if(a==="all"||a===!0)e.cssText="",g=1;else for(a=a.split(","),l=a.length;--l>-1;)i=a[l],Ro[i]&&(g=1,i=i==="transformOrigin"?Io:Qr),fa(o,i);g&&(fa(o,Qr),c&&(c.svg&&o.removeAttribute("transform"),ha(o,1),c.uncache=1))}},di={clearProps:function(r,t,o,e,a){if(a.data!=="isFromStart"){var c=r._pt=new ft(r._pt,t,o,0,0,ls);return c.u=e,c.pr=-10,c.tween=a,r._props.push(o),1}}},ba=[1,0,0,1,0,0],vg={},yg=function(r){return r==="matrix(1, 0, 0, 1, 0, 0)"||r==="none"||!r},dn=function(r){var t=mo(r,Qr);return yg(t)?ba:t.substr(7).match(Al).map(Gr)},Wc=function(r,t){var o=r._gsap||re(r),e=r.style,a=dn(r),c,i,g,l;return o.svg&&r.getAttribute("transform")?(g=r.transform.baseVal.consolidate().matrix,a=[g.a,g.b,g.c,g.d,g.e,g.f],a.join(",")==="1,0,0,1,0,0"?ba:a):(a===ba&&!r.offsetParent&&r!==Re&&!o.svg&&(g=e.display,e.display="block",c=r.parentNode,(!c||!r.offsetParent)&&(l=1,i=r.nextSibling,Re.appendChild(r)),a=dn(r),g?e.display=g:fa(r,"display"),l&&(i?c.insertBefore(r,i):c?c.appendChild(r):Re.removeChild(r))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},vc=function(r,t,o,e,a,c){var i=r._gsap,g=a||Wc(r,!0),l=i.xOrigin||0,d=i.yOrigin||0,s=i.xOffset||0,p=i.yOffset||0,f=g[0],b=g[1],w=g[2],m=g[3],h=g[4],y=g[5],S=t.split(" "),_=parseFloat(S[0])||0,v=parseFloat(S[1])||0,M,C,u,z;o?g!==ba&&(C=f*m-b*w)&&(u=_*(m/C)+v*(-w/C)+(w*y-m*h)/C,z=_*(-b/C)+v*(f/C)-(f*y-b*h)/C,_=u,v=z):(M=hg(r),_=M.x+(~S[0].indexOf("%")?_/100*M.width:_),v=M.y+(~(S[1]||S[0]).indexOf("%")?v/100*M.height:v)),e||e!==!1&&i.smooth?(h=_-l,y=v-d,i.xOffset=s+(h*f+y*w)-h,i.yOffset=p+(h*b+y*m)-y):i.xOffset=i.yOffset=0,i.xOrigin=_,i.yOrigin=v,i.smooth=!!e,i.origin=t,i.originIsAbsolute=!!o,r.style[Io]="0px 0px",c&&(Ao(c,i,"xOrigin",l,_),Ao(c,i,"yOrigin",d,v),Ao(c,i,"xOffset",s,i.xOffset),Ao(c,i,"yOffset",p,i.yOffset)),r.setAttribute("data-svg-origin",_+" "+v)},ha=function(r,t){var o=r._gsap||new ag(r);if("x"in o&&!t&&!o.uncache)return o;var e=r.style,a=o.scaleX<0,c="px",i="deg",g=mo(r,Io)||"0",l,d,s,p,f,b,w,m,h,y,S,_,v,M,C,u,z,D,L,K,q,A,B,I,G,j,N,H,Z,$,Y,ir;return l=d=s=b=w=m=h=y=S=0,p=f=1,o.svg=!!(r.getCTM&&ug(r)),M=Wc(r,o.svg),o.svg&&(I=(!o.uncache||g==="0px 0px")&&!t&&r.getAttribute("data-svg-origin"),vc(r,I||g,!!I||o.originIsAbsolute,o.smooth!==!1,M)),_=o.xOrigin||0,v=o.yOrigin||0,M!==ba&&(D=M[0],L=M[1],K=M[2],q=M[3],l=A=M[4],d=B=M[5],M.length===6?(p=Math.sqrt(D*D+L*L),f=Math.sqrt(q*q+K*K),b=D||L?we(L,D)*Wo:0,h=K||q?we(K,q)*Wo+b:0,h&&(f*=Math.abs(Math.cos(h*Ie))),o.svg&&(l-=_-(_*D+v*K),d-=v-(_*L+v*q))):(ir=M[6],$=M[7],N=M[8],H=M[9],Z=M[10],Y=M[11],l=M[12],d=M[13],s=M[14],C=we(ir,Z),w=C*Wo,C&&(u=Math.cos(-C),z=Math.sin(-C),I=A*u+N*z,G=B*u+H*z,j=ir*u+Z*z,N=A*-z+N*u,H=B*-z+H*u,Z=ir*-z+Z*u,Y=$*-z+Y*u,A=I,B=G,ir=j),C=we(-K,Z),m=C*Wo,C&&(u=Math.cos(-C),z=Math.sin(-C),I=D*u-N*z,G=L*u-H*z,j=K*u-Z*z,Y=q*z+Y*u,D=I,L=G,K=j),C=we(L,D),b=C*Wo,C&&(u=Math.cos(C),z=Math.sin(C),I=D*u+L*z,G=A*u+B*z,L=L*u-D*z,B=B*u-A*z,D=I,A=G),w&&Math.abs(w)+Math.abs(b)>359.9&&(w=b=0,m=180-m),p=Gr(Math.sqrt(D*D+L*L+K*K)),f=Gr(Math.sqrt(B*B+ir*ir)),C=we(A,B),h=Math.abs(C)>2e-4?C*Wo:0,S=Y?1/(Y<0?-Y:Y):0),o.svg&&(I=r.getAttribute("transform"),o.forceCSS=r.setAttribute("transform","")||!yg(mo(r,Qr)),I&&r.setAttribute("transform",I))),Math.abs(h)>90&&Math.abs(h)<270&&(a?(p*=-1,h+=b<=0?180:-180,b+=b<=0?180:-180):(f*=-1,h+=h<=0?180:-180)),t=t||o.uncache,o.x=l-((o.xPercent=l&&(!t&&o.xPercent||(Math.round(r.offsetWidth/2)===Math.round(-l)?-50:0)))?r.offsetWidth*o.xPercent/100:0)+c,o.y=d-((o.yPercent=d&&(!t&&o.yPercent||(Math.round(r.offsetHeight/2)===Math.round(-d)?-50:0)))?r.offsetHeight*o.yPercent/100:0)+c,o.z=s+c,o.scaleX=Gr(p),o.scaleY=Gr(f),o.rotation=Gr(b)+i,o.rotationX=Gr(w)+i,o.rotationY=Gr(m)+i,o.skewX=h+i,o.skewY=y+i,o.transformPerspective=S+c,(o.zOrigin=parseFloat(g.split(" ")[2])||0)&&(e[Io]=si(g)),o.xOffset=o.yOffset=0,o.force3D=kt.force3D,o.renderTransform=o.svg?ds:bg?xg:gs,o.uncache=0,o},si=function(r){return(r=r.split(" "))[0]+" "+r[1]},Ei=function(r,t,o){var e=at(t);return Gr(parseFloat(t)+parseFloat(Fo(r,"x",o+"px",e)))+e},gs=function(r,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xg(r,t)},Uo="0deg",Je="0px",Bo=") ",xg=function(r,t){var o=t||this,e=o.xPercent,a=o.yPercent,c=o.x,i=o.y,g=o.z,l=o.rotation,d=o.rotationY,s=o.rotationX,p=o.skewX,f=o.skewY,b=o.scaleX,w=o.scaleY,m=o.transformPerspective,h=o.force3D,y=o.target,S=o.zOrigin,_="",v=h==="auto"&&r&&r!==1||h===!0;if(S&&(s!==Uo||d!==Uo)){var M=parseFloat(d)*Ie,C=Math.sin(M),u=Math.cos(M),z;M=parseFloat(s)*Ie,z=Math.cos(M),c=Ei(y,c,C*z*-S),i=Ei(y,i,-Math.sin(M)*-S),g=Ei(y,g,u*z*-S+S)}m!==Je&&(_+="perspective("+m+Bo),(e||a)&&(_+="translate("+e+"%, "+a+"%) "),(v||c!==Je||i!==Je||g!==Je)&&(_+=g!==Je||v?"translate3d("+c+", "+i+", "+g+") ":"translate("+c+", "+i+Bo),l!==Uo&&(_+="rotate("+l+Bo),d!==Uo&&(_+="rotateY("+d+Bo),s!==Uo&&(_+="rotateX("+s+Bo),(p!==Uo||f!==Uo)&&(_+="skew("+p+", "+f+Bo),(b!==1||w!==1)&&(_+="scale("+b+", "+w+Bo),y.style[Qr]=_||"translate(0, 0)"},ds=function(r,t){var o=t||this,e=o.xPercent,a=o.yPercent,c=o.x,i=o.y,g=o.rotation,l=o.skewX,d=o.skewY,s=o.scaleX,p=o.scaleY,f=o.target,b=o.xOrigin,w=o.yOrigin,m=o.xOffset,h=o.yOffset,y=o.forceCSS,S=parseFloat(c),_=parseFloat(i),v,M,C,u,z;g=parseFloat(g),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,g+=d),g||l?(g*=Ie,l*=Ie,v=Math.cos(g)*s,M=Math.sin(g)*s,C=Math.sin(g-l)*-p,u=Math.cos(g-l)*p,l&&(d*=Ie,z=Math.tan(l-d),z=Math.sqrt(1+z*z),C*=z,u*=z,d&&(z=Math.tan(d),z=Math.sqrt(1+z*z),v*=z,M*=z)),v=Gr(v),M=Gr(M),C=Gr(C),u=Gr(u)):(v=s,u=p,M=C=0),(S&&!~(c+"").indexOf("px")||_&&!~(i+"").indexOf("px"))&&(S=Fo(f,"x",c,"px"),_=Fo(f,"y",i,"px")),(b||w||m||h)&&(S=Gr(S+b-(b*v+w*C)+m),_=Gr(_+w-(b*M+w*u)+h)),(e||a)&&(z=f.getBBox(),S=Gr(S+e/100*z.width),_=Gr(_+a/100*z.height)),z="matrix("+v+","+M+","+C+","+u+","+S+","+_+")",f.setAttribute("transform",z),y&&(f.style[Qr]=z)},ss=function(r,t,o,e,a){var c=360,i=Kr(a),g=parseFloat(a)*(i&&~a.indexOf("rad")?Wo:1),l=g-e,d=e+l+"deg",s,p;return i&&(s=a.split("_")[1],s==="short"&&(l%=c,l!==l%(c/2)&&(l+=l<0?c:-c)),s==="cw"&&l<0?l=(l+c*an)%c-~~(l/c)*c:s==="ccw"&&l>0&&(l=(l-c*an)%c-~~(l/c)*c)),r._pt=p=new ft(r._pt,t,o,e,l,Kd),p.e=d,p.u="deg",r._props.push(o),p},sn=function(r,t){for(var o in t)r[o]=t[o];return r},ps=function(r,t,o){var e=sn({},o._gsap),a="perspective,force3D,transformOrigin,svgOrigin",c=o.style,i,g,l,d,s,p,f,b;e.svg?(l=o.getAttribute("transform"),o.setAttribute("transform",""),c[Qr]=t,i=ha(o,1),fa(o,Qr),o.setAttribute("transform",l)):(l=getComputedStyle(o)[Qr],c[Qr]=t,i=ha(o,1),c[Qr]=l);for(g in Ro)l=e[g],d=i[g],l!==d&&a.indexOf(g)<0&&(f=at(l),b=at(d),s=f!==b?Fo(o,g,l,b):parseFloat(l),p=parseFloat(d),r._pt=new ft(r._pt,i,g,s,p-s,wg),r._pt.u=b||0,r._props.push(g));sn(i,e)};mt("padding,margin,Width,Radius",function(n,r){var t="Top",o="Right",e="Bottom",a="Left",c=(r<3?[t,o,e,a]:[t+a,t+o,e+o,e+a]).map(function(i){return r<2?n+i:"border"+i+n});di[r>1?"border"+n:n]=function(i,g,l,d,s){var p,f;if(arguments.length<4)return p=c.map(function(b){return jo(i,b,l)}),f=p.join(" "),f.split(p[0]).length===5?p[0]:f;p=(d+"").split(" "),f={},c.forEach(function(b,w){return f[b]=p[w]=p[w]||p[(w-1)/2|0]}),i.init(g,f,s)}});var kg={name:"css",register:uc,targetTest:function(r){return r.style&&r.nodeType},init:function(r,t,o,e,a){var c=this._props,i=r.style,g=o.vars.startAt,l,d,s,p,f,b,w,m,h,y,S,_,v,M,C;Hc||uc();for(w in t)if(w!=="autoRound"&&(d=t[w],!(vt[w]&&ig(w,t,o,e,r,a)))){if(f=typeof d,b=di[w],f==="function"&&(d=d.call(o,e,r,a),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=pa(d)),b)b(this,r,w,d,o)&&(C=1);else if(w.substr(0,2)==="--")l=(getComputedStyle(r).getPropertyValue(w)+"").trim(),d+="",Do.lastIndex=0,Do.test(l)||(m=at(l),h=at(d)),h?m!==h&&(l=Fo(r,w,l,h)+h):m&&(d+=m),this.add(i,"setProperty",l,d,e,a,0,0,w),c.push(w);else if(f!=="undefined"){if(g&&w in g?(l=typeof g[w]=="function"?g[w].call(o,e,r,a):g[w],Kr(l)&&~l.indexOf("random(")&&(l=pa(l)),at(l+"")||(l+=kt.units[w]||at(jo(r,w))||""),(l+"").charAt(1)==="="&&(l=jo(r,w))):l=jo(r,w),p=parseFloat(l),y=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),s=parseFloat(d),w in Eo&&(w==="autoAlpha"&&(p===1&&jo(r,"visibility")==="hidden"&&s&&(p=0),Ao(this,i,"visibility",p?"inherit":"hidden",s?"inherit":"hidden",!s)),w!=="scale"&&w!=="transform"&&(w=Eo[w],~w.indexOf(",")&&(w=w.split(",")[0]))),S=w in Ro,S){if(_||(v=r._gsap,v.renderTransform&&!t.parseTransform||ha(r,t.parseTransform),M=t.smoothOrigin!==!1&&v.smooth,_=this._pt=new ft(this._pt,i,Qr,0,1,v.renderTransform,v,0,-1),_.dep=1),w==="scale")this._pt=new ft(this._pt,v,"scaleY",v.scaleY,(y?Pe(v.scaleY,y+s):s)-v.scaleY||0),c.push("scaleY",w),w+="X";else if(w==="transformOrigin"){d=ns(d),v.svg?vc(r,d,0,M,0,this):(h=parseFloat(d.split(" ")[2])||0,h!==v.zOrigin&&Ao(this,v,"zOrigin",v.zOrigin,h),Ao(this,i,w,si(l),si(d)));continue}else if(w==="svgOrigin"){vc(r,d,1,M,0,this);continue}else if(w in vg){ss(this,v,w,p,y?Pe(p,y+d):d);continue}else if(w==="smoothOrigin"){Ao(this,v,"smooth",v.smooth,d);continue}else if(w==="force3D"){v[w]=d;continue}else if(w==="transform"){ps(this,d,r);continue}}else w in i||(w=Ve(w)||w);if(S||(s||s===0)&&(p||p===0)&&!$d.test(d)&&w in i)m=(l+"").substr((p+"").length),s||(s=0),h=at(d)||(w in kt.units?kt.units[w]:m),m!==h&&(p=Fo(r,w,l,h)),this._pt=new ft(this._pt,S?v:i,w,p,(y?Pe(p,y+s):s)-p,!S&&(h==="px"||w==="zIndex")&&t.autoRound!==!1?Qd:wg),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=l,this._pt.r=Jd);else if(w in i)cs.call(this,r,w,l,y?y+d:d);else if(w in r)this.add(r,w,l||r[w],y?y+d:d,e,a);else{Pc(w,d);continue}c.push(w)}}C&&sg(this)},get:jo,aliases:Eo,getSetter:function(r,t,o){var e=Eo[t];return e&&e.indexOf(",")<0&&(t=e),t in Ro&&t!==Io&&(r._gsap.x||jo(r,"x"))?o&&en===o?t==="scale"?es:os:(en=o||{})&&(t==="scale"?as:is):r.style&&!Lc(r.style[t])?rs:~t.indexOf("-")?ts:Gc(r,t)},core:{_removeProperty:fa,_getMatrix:Wc}};Vt.utils.checkPrefix=Ve;(function(n,r,t,o){var e=mt(n+","+r+","+t,function(a){Ro[a]=1});mt(r,function(a){kt.units[a]="deg",vg[a]=1}),Eo[e[13]]=n+","+r,mt(o,function(a){var c=a.split(":");Eo[c[1]]=e[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){kt.units[n]="px"});Vt.registerPlugin(kg);var _g=Vt.registerPlugin(kg)||Vt;_g.core.Tween;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="142",ws=0,pn=1,ms=2,zg=1,fs=2,aa=3,ua=0,Dt=1,He=2,bs=1,Po=0,Fe=1,yc=2,wn=3,mn=4,hs=5,Ce=100,us=101,vs=102,fn=103,bn=104,ys=200,xs=201,ks=202,_s=203,Mg=204,Sg=205,zs=206,Ms=207,Ss=208,Ts=209,Cs=210,Es=0,As=1,Ls=2,xc=3,Ds=4,Ps=5,Rs=6,Is=7,Tg=0,Fs=1,Ns=2,fo=0,Os=1,Us=2,Bs=3,Gs=4,Vs=5,Cg=300,We=301,je=302,kc=303,_c=304,fi=306,zc=1e3,Bt=1001,Mc=1002,st=1003,hn=1004,un=1005,St=1006,Hs=1007,bi=1008,ce=1009,Ws=1010,js=1011,Eg=1012,Xs=1013,Ko=1014,Jo=1015,va=1016,qs=1017,Ys=1018,Ne=1020,Zs=1021,$s=1022,Kt=1023,Ks=1024,Js=1025,ee=1026,Xe=1027,Qs=1028,rp=1029,tp=1030,op=1031,ep=1033,Ai=33776,Li=33777,Di=33778,Pi=33779,vn=35840,yn=35841,xn=35842,kn=35843,ap=36196,_n=37492,zn=37496,Mn=37808,Sn=37809,Tn=37810,Cn=37811,En=37812,An=37813,Ln=37814,Dn=37815,Pn=37816,Rn=37817,In=37818,Fn=37819,Nn=37820,On=37821,Un=36492,ne=3e3,Br=3001,ip=3200,cp=3201,np=0,lp=1,go="srgb",Qo="srgb-linear",Ri=7680,gp=519,Bn=35044,Gn="300 es",Sc=1035;class Ye{addEventListener(r,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[r]===void 0&&(o[r]=[]),o[r].indexOf(t)===-1&&o[r].push(t)}hasEventListener(r,t){if(this._listeners===void 0)return!1;const o=this._listeners;return o[r]!==void 0&&o[r].indexOf(t)!==-1}removeEventListener(r,t){if(this._listeners===void 0)return;const e=this._listeners[r];if(e!==void 0){const a=e.indexOf(t);a!==-1&&e.splice(a,1)}}dispatchEvent(r){if(this._listeners===void 0)return;const o=this._listeners[r.type];if(o!==void 0){r.target=this;const e=o.slice(0);for(let a=0,c=e.length;a<c;a++)e[a].call(this,r);r.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ii=Math.PI/180,Vn=180/Math.PI;function _a(){const n=Math.random()*4294967295|0,r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]+"-"+tt[r&255]+tt[r>>8&255]+"-"+tt[r>>16&15|64]+tt[r>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[o&255]+tt[o>>8&255]+tt[o>>16&255]+tt[o>>24&255]).toLowerCase()}function yt(n,r,t){return Math.max(r,Math.min(t,n))}function dp(n,r){return(n%r+r)%r}function Fi(n,r,t){return(1-t)*n+t*r}function Hn(n){return(n&n-1)===0&&n!==0}function Tc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Fr{constructor(r=0,t=0){Fr.prototype.isVector2=!0,this.x=r,this.y=t}get width(){return this.x}set width(r){this.x=r}get height(){return this.y}set height(r){this.y=r}set(r,t){return this.x=r,this.y=t,this}setScalar(r){return this.x=r,this.y=r,this}setX(r){return this.x=r,this}setY(r){return this.y=r,this}setComponent(r,t){switch(r){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+r)}return this}getComponent(r){switch(r){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+r)}}clone(){return new this.constructor(this.x,this.y)}copy(r){return this.x=r.x,this.y=r.y,this}add(r,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(r,t)):(this.x+=r.x,this.y+=r.y,this)}addScalar(r){return this.x+=r,this.y+=r,this}addVectors(r,t){return this.x=r.x+t.x,this.y=r.y+t.y,this}addScaledVector(r,t){return this.x+=r.x*t,this.y+=r.y*t,this}sub(r,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(r,t)):(this.x-=r.x,this.y-=r.y,this)}subScalar(r){return this.x-=r,this.y-=r,this}subVectors(r,t){return this.x=r.x-t.x,this.y=r.y-t.y,this}multiply(r){return this.x*=r.x,this.y*=r.y,this}multiplyScalar(r){return this.x*=r,this.y*=r,this}divide(r){return this.x/=r.x,this.y/=r.y,this}divideScalar(r){return this.multiplyScalar(1/r)}applyMatrix3(r){const t=this.x,o=this.y,e=r.elements;return this.x=e[0]*t+e[3]*o+e[6],this.y=e[1]*t+e[4]*o+e[7],this}min(r){return this.x=Math.min(this.x,r.x),this.y=Math.min(this.y,r.y),this}max(r){return this.x=Math.max(this.x,r.x),this.y=Math.max(this.y,r.y),this}clamp(r,t){return this.x=Math.max(r.x,Math.min(t.x,this.x)),this.y=Math.max(r.y,Math.min(t.y,this.y)),this}clampScalar(r,t){return this.x=Math.max(r,Math.min(t,this.x)),this.y=Math.max(r,Math.min(t,this.y)),this}clampLength(r,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(r,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(r){return this.x*r.x+this.y*r.y}cross(r){return this.x*r.y-this.y*r.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(r){return Math.sqrt(this.distanceToSquared(r))}distanceToSquared(r){const t=this.x-r.x,o=this.y-r.y;return t*t+o*o}manhattanDistanceTo(r){return Math.abs(this.x-r.x)+Math.abs(this.y-r.y)}setLength(r){return this.normalize().multiplyScalar(r)}lerp(r,t){return this.x+=(r.x-this.x)*t,this.y+=(r.y-this.y)*t,this}lerpVectors(r,t,o){return this.x=r.x+(t.x-r.x)*o,this.y=r.y+(t.y-r.y)*o,this}equals(r){return r.x===this.x&&r.y===this.y}fromArray(r,t=0){return this.x=r[t],this.y=r[t+1],this}toArray(r=[],t=0){return r[t]=this.x,r[t+1]=this.y,r}fromBufferAttribute(r,t,o){return o!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=r.getX(t),this.y=r.getY(t),this}rotateAround(r,t){const o=Math.cos(t),e=Math.sin(t),a=this.x-r.x,c=this.y-r.y;return this.x=a*o-c*e+r.x,this.y=a*e+c*o+r.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(r,t,o,e,a,c,i,g,l){const d=this.elements;return d[0]=r,d[1]=e,d[2]=i,d[3]=t,d[4]=a,d[5]=g,d[6]=o,d[7]=c,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(r){const t=this.elements,o=r.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(r,t,o){return r.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(r){const t=r.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(r){return this.multiplyMatrices(this,r)}premultiply(r){return this.multiplyMatrices(r,this)}multiplyMatrices(r,t){const o=r.elements,e=t.elements,a=this.elements,c=o[0],i=o[3],g=o[6],l=o[1],d=o[4],s=o[7],p=o[2],f=o[5],b=o[8],w=e[0],m=e[3],h=e[6],y=e[1],S=e[4],_=e[7],v=e[2],M=e[5],C=e[8];return a[0]=c*w+i*y+g*v,a[3]=c*m+i*S+g*M,a[6]=c*h+i*_+g*C,a[1]=l*w+d*y+s*v,a[4]=l*m+d*S+s*M,a[7]=l*h+d*_+s*C,a[2]=p*w+f*y+b*v,a[5]=p*m+f*S+b*M,a[8]=p*h+f*_+b*C,this}multiplyScalar(r){const t=this.elements;return t[0]*=r,t[3]*=r,t[6]*=r,t[1]*=r,t[4]*=r,t[7]*=r,t[2]*=r,t[5]*=r,t[8]*=r,this}determinant(){const r=this.elements,t=r[0],o=r[1],e=r[2],a=r[3],c=r[4],i=r[5],g=r[6],l=r[7],d=r[8];return t*c*d-t*i*l-o*a*d+o*i*g+e*a*l-e*c*g}invert(){const r=this.elements,t=r[0],o=r[1],e=r[2],a=r[3],c=r[4],i=r[5],g=r[6],l=r[7],d=r[8],s=d*c-i*l,p=i*g-d*a,f=l*a-c*g,b=t*s+o*p+e*f;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return r[0]=s*w,r[1]=(e*l-d*o)*w,r[2]=(i*o-e*c)*w,r[3]=p*w,r[4]=(d*t-e*g)*w,r[5]=(e*a-i*t)*w,r[6]=f*w,r[7]=(o*g-l*t)*w,r[8]=(c*t-o*a)*w,this}transpose(){let r;const t=this.elements;return r=t[1],t[1]=t[3],t[3]=r,r=t[2],t[2]=t[6],t[6]=r,r=t[5],t[5]=t[7],t[7]=r,this}getNormalMatrix(r){return this.setFromMatrix4(r).invert().transpose()}transposeIntoArray(r){const t=this.elements;return r[0]=t[0],r[1]=t[3],r[2]=t[6],r[3]=t[1],r[4]=t[4],r[5]=t[7],r[6]=t[2],r[7]=t[5],r[8]=t[8],this}setUvTransform(r,t,o,e,a,c,i){const g=Math.cos(a),l=Math.sin(a);return this.set(o*g,o*l,-o*(g*c+l*i)+c+r,-e*l,e*g,-e*(-l*c+g*i)+i+t,0,0,1),this}scale(r,t){const o=this.elements;return o[0]*=r,o[3]*=r,o[6]*=r,o[1]*=t,o[4]*=t,o[7]*=t,this}rotate(r){const t=Math.cos(r),o=Math.sin(r),e=this.elements,a=e[0],c=e[3],i=e[6],g=e[1],l=e[4],d=e[7];return e[0]=t*a+o*g,e[3]=t*c+o*l,e[6]=t*i+o*d,e[1]=-o*a+t*g,e[4]=-o*c+t*l,e[7]=-o*i+t*d,this}translate(r,t){const o=this.elements;return o[0]+=r*o[2],o[3]+=r*o[5],o[6]+=r*o[8],o[1]+=t*o[2],o[4]+=t*o[5],o[7]+=t*o[8],this}equals(r){const t=this.elements,o=r.elements;for(let e=0;e<9;e++)if(t[e]!==o[e])return!1;return!0}fromArray(r,t=0){for(let o=0;o<9;o++)this.elements[o]=r[o+t];return this}toArray(r=[],t=0){const o=this.elements;return r[t]=o[0],r[t+1]=o[1],r[t+2]=o[2],r[t+3]=o[3],r[t+4]=o[4],r[t+5]=o[5],r[t+6]=o[6],r[t+7]=o[7],r[t+8]=o[8],r}clone(){return new this.constructor().fromArray(this.elements)}}function Ag(n){for(let r=n.length-1;r>=0;--r)if(n[r]>65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ae(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ri(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ni={[go]:{[Qo]:ae},[Qo]:{[go]:ri}},Ft={legacyMode:!0,get workingColorSpace(){return Qo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,r,t){if(this.legacyMode||r===t||!r||!t)return n;if(Ni[r]&&Ni[r][t]!==void 0){const o=Ni[r][t];return n.r=o(n.r),n.g=o(n.g),n.b=o(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)}},Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={r:0,g:0,b:0},Nt={h:0,s:0,l:0},La={h:0,s:0,l:0};function Oi(n,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(r-n)*6*t:t<1/2?r:t<2/3?n+(r-n)*6*(2/3-t):n}function Da(n,r){return r.r=n.r,r.g=n.g,r.b=n.b,r}class Nr{constructor(r,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&o===void 0?this.set(r):this.setRGB(r,t,o)}set(r){return r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r),this}setScalar(r){return this.r=r,this.g=r,this.b=r,this}setHex(r,t=go){return r=Math.floor(r),this.r=(r>>16&255)/255,this.g=(r>>8&255)/255,this.b=(r&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(r,t,o,e=Qo){return this.r=r,this.g=t,this.b=o,Ft.toWorkingColorSpace(this,e),this}setHSL(r,t,o,e=Qo){if(r=dp(r,1),t=yt(t,0,1),o=yt(o,0,1),t===0)this.r=this.g=this.b=o;else{const a=o<=.5?o*(1+t):o+t-o*t,c=2*o-a;this.r=Oi(c,a,r+1/3),this.g=Oi(c,a,r),this.b=Oi(c,a,r-1/3)}return Ft.toWorkingColorSpace(this,e),this}setStyle(r,t=go){function o(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+r+" will be ignored.")}let e;if(e=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(r)){let a;const c=e[1],i=e[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Ft.toWorkingColorSpace(this,t),o(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Ft.toWorkingColorSpace(this,t),o(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const g=parseFloat(a[1])/360,l=parseInt(a[2],10)/100,d=parseInt(a[3],10)/100;return o(a[4]),this.setHSL(g,l,d,t)}break}}else if(e=/^\#([A-Fa-f\d]+)$/.exec(r)){const a=e[1],c=a.length;if(c===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Ft.toWorkingColorSpace(this,t),this;if(c===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Ft.toWorkingColorSpace(this,t),this}return r&&r.length>0?this.setColorName(r,t):this}setColorName(r,t=go){const o=Lg[r.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+r),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(r){return this.r=r.r,this.g=r.g,this.b=r.b,this}copySRGBToLinear(r){return this.r=ae(r.r),this.g=ae(r.g),this.b=ae(r.b),this}copyLinearToSRGB(r){return this.r=ri(r.r),this.g=ri(r.g),this.b=ri(r.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(r=go){return Ft.fromWorkingColorSpace(Da(this,Wr),r),yt(Wr.r*255,0,255)<<16^yt(Wr.g*255,0,255)<<8^yt(Wr.b*255,0,255)<<0}getHexString(r=go){return("000000"+this.getHex(r).toString(16)).slice(-6)}getHSL(r,t=Qo){Ft.fromWorkingColorSpace(Da(this,Wr),t);const o=Wr.r,e=Wr.g,a=Wr.b,c=Math.max(o,e,a),i=Math.min(o,e,a);let g,l;const d=(i+c)/2;if(i===c)g=0,l=0;else{const s=c-i;switch(l=d<=.5?s/(c+i):s/(2-c-i),c){case o:g=(e-a)/s+(e<a?6:0);break;case e:g=(a-o)/s+2;break;case a:g=(o-e)/s+4;break}g/=6}return r.h=g,r.s=l,r.l=d,r}getRGB(r,t=Qo){return Ft.fromWorkingColorSpace(Da(this,Wr),t),r.r=Wr.r,r.g=Wr.g,r.b=Wr.b,r}getStyle(r=go){return Ft.fromWorkingColorSpace(Da(this,Wr),r),r!==go?`color(${r} ${Wr.r} ${Wr.g} ${Wr.b})`:`rgb(${Wr.r*255|0},${Wr.g*255|0},${Wr.b*255|0})`}offsetHSL(r,t,o){return this.getHSL(Nt),Nt.h+=r,Nt.s+=t,Nt.l+=o,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(r){return this.r+=r.r,this.g+=r.g,this.b+=r.b,this}addColors(r,t){return this.r=r.r+t.r,this.g=r.g+t.g,this.b=r.b+t.b,this}addScalar(r){return this.r+=r,this.g+=r,this.b+=r,this}sub(r){return this.r=Math.max(0,this.r-r.r),this.g=Math.max(0,this.g-r.g),this.b=Math.max(0,this.b-r.b),this}multiply(r){return this.r*=r.r,this.g*=r.g,this.b*=r.b,this}multiplyScalar(r){return this.r*=r,this.g*=r,this.b*=r,this}lerp(r,t){return this.r+=(r.r-this.r)*t,this.g+=(r.g-this.g)*t,this.b+=(r.b-this.b)*t,this}lerpColors(r,t,o){return this.r=r.r+(t.r-r.r)*o,this.g=r.g+(t.g-r.g)*o,this.b=r.b+(t.b-r.b)*o,this}lerpHSL(r,t){this.getHSL(Nt),r.getHSL(La);const o=Fi(Nt.h,La.h,t),e=Fi(Nt.s,La.s,t),a=Fi(Nt.l,La.l,t);return this.setHSL(o,e,a),this}equals(r){return r.r===this.r&&r.g===this.g&&r.b===this.b}fromArray(r,t=0){return this.r=r[t],this.g=r[t+1],this.b=r[t+2],this}toArray(r=[],t=0){return r[t]=this.r,r[t+1]=this.g,r[t+2]=this.b,r}fromBufferAttribute(r,t){return this.r=r.getX(t),this.g=r.getY(t),this.b=r.getZ(t),r.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Nr.NAMES=Lg;let me;class Dg{static getDataURL(r){if(/^data:/i.test(r.src)||typeof HTMLCanvasElement=="undefined")return r.src;let t;if(r instanceof HTMLCanvasElement)t=r;else{me===void 0&&(me=ya("canvas")),me.width=r.width,me.height=r.height;const o=me.getContext("2d");r instanceof ImageData?o.putImageData(r,0,0):o.drawImage(r,0,0,r.width,r.height),t=me}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",r),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(r){if(typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap){const t=ya("canvas");t.width=r.width,t.height=r.height;const o=t.getContext("2d");o.drawImage(r,0,0,r.width,r.height);const e=o.getImageData(0,0,r.width,r.height),a=e.data;for(let c=0;c<a.length;c++)a[c]=ae(a[c]/255)*255;return o.putImageData(e,0,0),t}else if(r.data){const t=r.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(ae(t[o]/255)*255):t[o]=ae(t[o]);return{data:t,width:r.width,height:r.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),r}}class Pg{constructor(r=null){this.isSource=!0,this.uuid=_a(),this.data=r,this.version=0}set needsUpdate(r){r===!0&&this.version++}toJSON(r){const t=r===void 0||typeof r=="string";if(!t&&r.images[this.uuid]!==void 0)return r.images[this.uuid];const o={uuid:this.uuid,url:""},e=this.data;if(e!==null){let a;if(Array.isArray(e)){a=[];for(let c=0,i=e.length;c<i;c++)e[c].isDataTexture?a.push(Ui(e[c].image)):a.push(Ui(e[c]))}else a=Ui(e);o.url=a}return t||(r.images[this.uuid]=o),o}}function Ui(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;class Rt extends Ye{constructor(r=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,o=Bt,e=Bt,a=St,c=bi,i=Kt,g=ce,l=1,d=ne){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=_a(),this.name="",this.source=new Pg(r),this.mipmaps=[],this.mapping=t,this.wrapS=o,this.wrapT=e,this.magFilter=a,this.minFilter=c,this.anisotropy=l,this.format=i,this.internalFormat=null,this.type=g,this.offset=new Fr(0,0),this.repeat=new Fr(1,1),this.center=new Fr(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(r){this.source.data=r}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(r){return this.name=r.name,this.source=r.source,this.mipmaps=r.mipmaps.slice(0),this.mapping=r.mapping,this.wrapS=r.wrapS,this.wrapT=r.wrapT,this.magFilter=r.magFilter,this.minFilter=r.minFilter,this.anisotropy=r.anisotropy,this.format=r.format,this.internalFormat=r.internalFormat,this.type=r.type,this.offset.copy(r.offset),this.repeat.copy(r.repeat),this.center.copy(r.center),this.rotation=r.rotation,this.matrixAutoUpdate=r.matrixAutoUpdate,this.matrix.copy(r.matrix),this.generateMipmaps=r.generateMipmaps,this.premultiplyAlpha=r.premultiplyAlpha,this.flipY=r.flipY,this.unpackAlignment=r.unpackAlignment,this.encoding=r.encoding,this.userData=JSON.parse(JSON.stringify(r.userData)),this.needsUpdate=!0,this}toJSON(r){const t=r===void 0||typeof r=="string";if(!t&&r.textures[this.uuid]!==void 0)return r.textures[this.uuid];const o={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(r).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),t||(r.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(r){if(this.mapping!==Cg)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case zc:r.x=r.x-Math.floor(r.x);break;case Bt:r.x=r.x<0?0:1;break;case Mc:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x=r.x-Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case zc:r.y=r.y-Math.floor(r.y);break;case Bt:r.y=r.y<0?0:1;break;case Mc:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y=r.y-Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(r){r===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Cg;class Zr{constructor(r=0,t=0,o=0,e=1){Zr.prototype.isVector4=!0,this.x=r,this.y=t,this.z=o,this.w=e}get width(){return this.z}set width(r){this.z=r}get height(){return this.w}set height(r){this.w=r}set(r,t,o,e){return this.x=r,this.y=t,this.z=o,this.w=e,this}setScalar(r){return this.x=r,this.y=r,this.z=r,this.w=r,this}setX(r){return this.x=r,this}setY(r){return this.y=r,this}setZ(r){return this.z=r,this}setW(r){return this.w=r,this}setComponent(r,t){switch(r){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+r)}return this}getComponent(r){switch(r){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+r)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w!==void 0?r.w:1,this}add(r,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(r,t)):(this.x+=r.x,this.y+=r.y,this.z+=r.z,this.w+=r.w,this)}addScalar(r){return this.x+=r,this.y+=r,this.z+=r,this.w+=r,this}addVectors(r,t){return this.x=r.x+t.x,this.y=r.y+t.y,this.z=r.z+t.z,this.w=r.w+t.w,this}addScaledVector(r,t){return this.x+=r.x*t,this.y+=r.y*t,this.z+=r.z*t,this.w+=r.w*t,this}sub(r,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(r,t)):(this.x-=r.x,this.y-=r.y,this.z-=r.z,this.w-=r.w,this)}subScalar(r){return this.x-=r,this.y-=r,this.z-=r,this.w-=r,this}subVectors(r,t){return this.x=r.x-t.x,this.y=r.y-t.y,this.z=r.z-t.z,this.w=r.w-t.w,this}multiply(r){return this.x*=r.x,this.y*=r.y,this.z*=r.z,this.w*=r.w,this}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this.w*=r,this}applyMatrix4(r){const t=this.x,o=this.y,e=this.z,a=this.w,c=r.elements;return this.x=c[0]*t+c[4]*o+c[8]*e+c[12]*a,this.y=c[1]*t+c[5]*o+c[9]*e+c[13]*a,this.z=c[2]*t+c[6]*o+c[10]*e+c[14]*a,this.w=c[3]*t+c[7]*o+c[11]*e+c[15]*a,this}divideScalar(r){return this.multiplyScalar(1/r)}setAxisAngleFromQuaternion(r){this.w=2*Math.acos(r.w);const t=Math.sqrt(1-r.w*r.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=r.x/t,this.y=r.y/t,this.z=r.z/t),this}setAxisAngleFromRotationMatrix(r){let t,o,e,a;const g=r.elements,l=g[0],d=g[4],s=g[8],p=g[1],f=g[5],b=g[9],w=g[2],m=g[6],h=g[10];if(Math.abs(d-p)<.01&&Math.abs(s-w)<.01&&Math.abs(b-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(s+w)<.1&&Math.abs(b+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,_=(f+1)/2,v=(h+1)/2,M=(d+p)/4,C=(s+w)/4,u=(b+m)/4;return S>_&&S>v?S<.01?(o=0,e=.707106781,a=.707106781):(o=Math.sqrt(S),e=M/o,a=C/o):_>v?_<.01?(o=.707106781,e=0,a=.707106781):(e=Math.sqrt(_),o=M/e,a=u/e):v<.01?(o=.707106781,e=.707106781,a=0):(a=Math.sqrt(v),o=C/a,e=u/a),this.set(o,e,a,t),this}let y=Math.sqrt((m-b)*(m-b)+(s-w)*(s-w)+(p-d)*(p-d));return Math.abs(y)<.001&&(y=1),this.x=(m-b)/y,this.y=(s-w)/y,this.z=(p-d)/y,this.w=Math.acos((l+f+h-1)/2),this}min(r){return this.x=Math.min(this.x,r.x),this.y=Math.min(this.y,r.y),this.z=Math.min(this.z,r.z),this.w=Math.min(this.w,r.w),this}max(r){return this.x=Math.max(this.x,r.x),this.y=Math.max(this.y,r.y),this.z=Math.max(this.z,r.z),this.w=Math.max(this.w,r.w),this}clamp(r,t){return this.x=Math.max(r.x,Math.min(t.x,this.x)),this.y=Math.max(r.y,Math.min(t.y,this.y)),this.z=Math.max(r.z,Math.min(t.z,this.z)),this.w=Math.max(r.w,Math.min(t.w,this.w)),this}clampScalar(r,t){return this.x=Math.max(r,Math.min(t,this.x)),this.y=Math.max(r,Math.min(t,this.y)),this.z=Math.max(r,Math.min(t,this.z)),this.w=Math.max(r,Math.min(t,this.w)),this}clampLength(r,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(r,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(r){return this.x*r.x+this.y*r.y+this.z*r.z+this.w*r.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(r){return this.normalize().multiplyScalar(r)}lerp(r,t){return this.x+=(r.x-this.x)*t,this.y+=(r.y-this.y)*t,this.z+=(r.z-this.z)*t,this.w+=(r.w-this.w)*t,this}lerpVectors(r,t,o){return this.x=r.x+(t.x-r.x)*o,this.y=r.y+(t.y-r.y)*o,this.z=r.z+(t.z-r.z)*o,this.w=r.w+(t.w-r.w)*o,this}equals(r){return r.x===this.x&&r.y===this.y&&r.z===this.z&&r.w===this.w}fromArray(r,t=0){return this.x=r[t],this.y=r[t+1],this.z=r[t+2],this.w=r[t+3],this}toArray(r=[],t=0){return r[t]=this.x,r[t+1]=this.y,r[t+2]=this.z,r[t+3]=this.w,r}fromBufferAttribute(r,t,o){return o!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=r.getX(t),this.y=r.getY(t),this.z=r.getZ(t),this.w=r.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class le extends Ye{constructor(r,t,o={}){super(),this.isWebGLRenderTarget=!0,this.width=r,this.height=t,this.depth=1,this.scissor=new Zr(0,0,r,t),this.scissorTest=!1,this.viewport=new Zr(0,0,r,t);const e={width:r,height:t,depth:1};this.texture=new Rt(e,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=o.generateMipmaps!==void 0?o.generateMipmaps:!1,this.texture.internalFormat=o.internalFormat!==void 0?o.internalFormat:null,this.texture.minFilter=o.minFilter!==void 0?o.minFilter:St,this.depthBuffer=o.depthBuffer!==void 0?o.depthBuffer:!0,this.stencilBuffer=o.stencilBuffer!==void 0?o.stencilBuffer:!1,this.depthTexture=o.depthTexture!==void 0?o.depthTexture:null,this.samples=o.samples!==void 0?o.samples:0}setSize(r,t,o=1){(this.width!==r||this.height!==t||this.depth!==o)&&(this.width=r,this.height=t,this.depth=o,this.texture.image.width=r,this.texture.image.height=t,this.texture.image.depth=o,this.dispose()),this.viewport.set(0,0,r,t),this.scissor.set(0,0,r,t)}clone(){return new this.constructor().copy(this)}copy(r){this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.copy(r.viewport),this.texture=r.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},r.texture.image);return this.texture.source=new Pg(t),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,r.depthTexture!==null&&(this.depthTexture=r.depthTexture.clone()),this.samples=r.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rg extends Rt{constructor(r=null,t=1,o=1,e=1){super(null),this.isDataArrayTexture=!0,this.image={data:r,width:t,height:o,depth:e},this.magFilter=st,this.minFilter=st,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pp extends Rt{constructor(r=null,t=1,o=1,e=1){super(null),this.isData3DTexture=!0,this.image={data:r,width:t,height:o,depth:e},this.magFilter=st,this.minFilter=st,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(r=0,t=0,o=0,e=1){this.isQuaternion=!0,this._x=r,this._y=t,this._z=o,this._w=e}static slerp(r,t,o,e){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),o.slerpQuaternions(r,t,e)}static slerpFlat(r,t,o,e,a,c,i){let g=o[e+0],l=o[e+1],d=o[e+2],s=o[e+3];const p=a[c+0],f=a[c+1],b=a[c+2],w=a[c+3];if(i===0){r[t+0]=g,r[t+1]=l,r[t+2]=d,r[t+3]=s;return}if(i===1){r[t+0]=p,r[t+1]=f,r[t+2]=b,r[t+3]=w;return}if(s!==w||g!==p||l!==f||d!==b){let m=1-i;const h=g*p+l*f+d*b+s*w,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const v=Math.sqrt(S),M=Math.atan2(v,h*y);m=Math.sin(m*M)/v,i=Math.sin(i*M)/v}const _=i*y;if(g=g*m+p*_,l=l*m+f*_,d=d*m+b*_,s=s*m+w*_,m===1-i){const v=1/Math.sqrt(g*g+l*l+d*d+s*s);g*=v,l*=v,d*=v,s*=v}}r[t]=g,r[t+1]=l,r[t+2]=d,r[t+3]=s}static multiplyQuaternionsFlat(r,t,o,e,a,c){const i=o[e],g=o[e+1],l=o[e+2],d=o[e+3],s=a[c],p=a[c+1],f=a[c+2],b=a[c+3];return r[t]=i*b+d*s+g*f-l*p,r[t+1]=g*b+d*p+l*s-i*f,r[t+2]=l*b+d*f+i*p-g*s,r[t+3]=d*b-i*s-g*p-l*f,r}get x(){return this._x}set x(r){this._x=r,this._onChangeCallback()}get y(){return this._y}set y(r){this._y=r,this._onChangeCallback()}get z(){return this._z}set z(r){this._z=r,this._onChangeCallback()}get w(){return this._w}set w(r){this._w=r,this._onChangeCallback()}set(r,t,o,e){return this._x=r,this._y=t,this._z=o,this._w=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(r){return this._x=r.x,this._y=r.y,this._z=r.z,this._w=r.w,this._onChangeCallback(),this}setFromEuler(r,t){if(!(r&&r.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const o=r._x,e=r._y,a=r._z,c=r._order,i=Math.cos,g=Math.sin,l=i(o/2),d=i(e/2),s=i(a/2),p=g(o/2),f=g(e/2),b=g(a/2);switch(c){case"XYZ":this._x=p*d*s+l*f*b,this._y=l*f*s-p*d*b,this._z=l*d*b+p*f*s,this._w=l*d*s-p*f*b;break;case"YXZ":this._x=p*d*s+l*f*b,this._y=l*f*s-p*d*b,this._z=l*d*b-p*f*s,this._w=l*d*s+p*f*b;break;case"ZXY":this._x=p*d*s-l*f*b,this._y=l*f*s+p*d*b,this._z=l*d*b+p*f*s,this._w=l*d*s-p*f*b;break;case"ZYX":this._x=p*d*s-l*f*b,this._y=l*f*s+p*d*b,this._z=l*d*b-p*f*s,this._w=l*d*s+p*f*b;break;case"YZX":this._x=p*d*s+l*f*b,this._y=l*f*s+p*d*b,this._z=l*d*b-p*f*s,this._w=l*d*s-p*f*b;break;case"XZY":this._x=p*d*s-l*f*b,this._y=l*f*s-p*d*b,this._z=l*d*b+p*f*s,this._w=l*d*s+p*f*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(r,t){const o=t/2,e=Math.sin(o);return this._x=r.x*e,this._y=r.y*e,this._z=r.z*e,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(r){const t=r.elements,o=t[0],e=t[4],a=t[8],c=t[1],i=t[5],g=t[9],l=t[2],d=t[6],s=t[10],p=o+i+s;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-g)*f,this._y=(a-l)*f,this._z=(c-e)*f}else if(o>i&&o>s){const f=2*Math.sqrt(1+o-i-s);this._w=(d-g)/f,this._x=.25*f,this._y=(e+c)/f,this._z=(a+l)/f}else if(i>s){const f=2*Math.sqrt(1+i-o-s);this._w=(a-l)/f,this._x=(e+c)/f,this._y=.25*f,this._z=(g+d)/f}else{const f=2*Math.sqrt(1+s-o-i);this._w=(c-e)/f,this._x=(a+l)/f,this._y=(g+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(r,t){let o=r.dot(t)+1;return o<Number.EPSILON?(o=0,Math.abs(r.x)>Math.abs(r.z)?(this._x=-r.y,this._y=r.x,this._z=0,this._w=o):(this._x=0,this._y=-r.z,this._z=r.y,this._w=o)):(this._x=r.y*t.z-r.z*t.y,this._y=r.z*t.x-r.x*t.z,this._z=r.x*t.y-r.y*t.x,this._w=o),this.normalize()}angleTo(r){return 2*Math.acos(Math.abs(yt(this.dot(r),-1,1)))}rotateTowards(r,t){const o=this.angleTo(r);if(o===0)return this;const e=Math.min(1,t/o);return this.slerp(r,e),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(r){return this._x*r._x+this._y*r._y+this._z*r._z+this._w*r._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let r=this.length();return r===0?(this._x=0,this._y=0,this._z=0,this._w=1):(r=1/r,this._x=this._x*r,this._y=this._y*r,this._z=this._z*r,this._w=this._w*r),this._onChangeCallback(),this}multiply(r,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(r,t)):this.multiplyQuaternions(this,r)}premultiply(r){return this.multiplyQuaternions(r,this)}multiplyQuaternions(r,t){const o=r._x,e=r._y,a=r._z,c=r._w,i=t._x,g=t._y,l=t._z,d=t._w;return this._x=o*d+c*i+e*l-a*g,this._y=e*d+c*g+a*i-o*l,this._z=a*d+c*l+o*g-e*i,this._w=c*d-o*i-e*g-a*l,this._onChangeCallback(),this}slerp(r,t){if(t===0)return this;if(t===1)return this.copy(r);const o=this._x,e=this._y,a=this._z,c=this._w;let i=c*r._w+o*r._x+e*r._y+a*r._z;if(i<0?(this._w=-r._w,this._x=-r._x,this._y=-r._y,this._z=-r._z,i=-i):this.copy(r),i>=1)return this._w=c,this._x=o,this._y=e,this._z=a,this;const g=1-i*i;if(g<=Number.EPSILON){const f=1-t;return this._w=f*c+t*this._w,this._x=f*o+t*this._x,this._y=f*e+t*this._y,this._z=f*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(g),d=Math.atan2(l,i),s=Math.sin((1-t)*d)/l,p=Math.sin(t*d)/l;return this._w=c*s+this._w*p,this._x=o*s+this._x*p,this._y=e*s+this._y*p,this._z=a*s+this._z*p,this._onChangeCallback(),this}slerpQuaternions(r,t,o){return this.copy(r).slerp(t,o)}random(){const r=Math.random(),t=Math.sqrt(1-r),o=Math.sqrt(r),e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(e),o*Math.sin(a),o*Math.cos(a),t*Math.sin(e))}equals(r){return r._x===this._x&&r._y===this._y&&r._z===this._z&&r._w===this._w}fromArray(r,t=0){return this._x=r[t],this._y=r[t+1],this._z=r[t+2],this._w=r[t+3],this._onChangeCallback(),this}toArray(r=[],t=0){return r[t]=this._x,r[t+1]=this._y,r[t+2]=this._z,r[t+3]=this._w,r}fromBufferAttribute(r,t){return this._x=r.getX(t),this._y=r.getY(t),this._z=r.getZ(t),this._w=r.getW(t),this}_onChange(r){return this._onChangeCallback=r,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(r=0,t=0,o=0){P.prototype.isVector3=!0,this.x=r,this.y=t,this.z=o}set(r,t,o){return o===void 0&&(o=this.z),this.x=r,this.y=t,this.z=o,this}setScalar(r){return this.x=r,this.y=r,this.z=r,this}setX(r){return this.x=r,this}setY(r){return this.y=r,this}setZ(r){return this.z=r,this}setComponent(r,t){switch(r){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+r)}return this}getComponent(r){switch(r){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+r)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(r){return this.x=r.x,this.y=r.y,this.z=r.z,this}add(r,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(r,t)):(this.x+=r.x,this.y+=r.y,this.z+=r.z,this)}addScalar(r){return this.x+=r,this.y+=r,this.z+=r,this}addVectors(r,t){return this.x=r.x+t.x,this.y=r.y+t.y,this.z=r.z+t.z,this}addScaledVector(r,t){return this.x+=r.x*t,this.y+=r.y*t,this.z+=r.z*t,this}sub(r,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(r,t)):(this.x-=r.x,this.y-=r.y,this.z-=r.z,this)}subScalar(r){return this.x-=r,this.y-=r,this.z-=r,this}subVectors(r,t){return this.x=r.x-t.x,this.y=r.y-t.y,this.z=r.z-t.z,this}multiply(r,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(r,t)):(this.x*=r.x,this.y*=r.y,this.z*=r.z,this)}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this}multiplyVectors(r,t){return this.x=r.x*t.x,this.y=r.y*t.y,this.z=r.z*t.z,this}applyEuler(r){return r&&r.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Wn.setFromEuler(r))}applyAxisAngle(r,t){return this.applyQuaternion(Wn.setFromAxisAngle(r,t))}applyMatrix3(r){const t=this.x,o=this.y,e=this.z,a=r.elements;return this.x=a[0]*t+a[3]*o+a[6]*e,this.y=a[1]*t+a[4]*o+a[7]*e,this.z=a[2]*t+a[5]*o+a[8]*e,this}applyNormalMatrix(r){return this.applyMatrix3(r).normalize()}applyMatrix4(r){const t=this.x,o=this.y,e=this.z,a=r.elements,c=1/(a[3]*t+a[7]*o+a[11]*e+a[15]);return this.x=(a[0]*t+a[4]*o+a[8]*e+a[12])*c,this.y=(a[1]*t+a[5]*o+a[9]*e+a[13])*c,this.z=(a[2]*t+a[6]*o+a[10]*e+a[14])*c,this}applyQuaternion(r){const t=this.x,o=this.y,e=this.z,a=r.x,c=r.y,i=r.z,g=r.w,l=g*t+c*e-i*o,d=g*o+i*t-a*e,s=g*e+a*o-c*t,p=-a*t-c*o-i*e;return this.x=l*g+p*-a+d*-i-s*-c,this.y=d*g+p*-c+s*-a-l*-i,this.z=s*g+p*-i+l*-c-d*-a,this}project(r){return this.applyMatrix4(r.matrixWorldInverse).applyMatrix4(r.projectionMatrix)}unproject(r){return this.applyMatrix4(r.projectionMatrixInverse).applyMatrix4(r.matrixWorld)}transformDirection(r){const t=this.x,o=this.y,e=this.z,a=r.elements;return this.x=a[0]*t+a[4]*o+a[8]*e,this.y=a[1]*t+a[5]*o+a[9]*e,this.z=a[2]*t+a[6]*o+a[10]*e,this.normalize()}divide(r){return this.x/=r.x,this.y/=r.y,this.z/=r.z,this}divideScalar(r){return this.multiplyScalar(1/r)}min(r){return this.x=Math.min(this.x,r.x),this.y=Math.min(this.y,r.y),this.z=Math.min(this.z,r.z),this}max(r){return this.x=Math.max(this.x,r.x),this.y=Math.max(this.y,r.y),this.z=Math.max(this.z,r.z),this}clamp(r,t){return this.x=Math.max(r.x,Math.min(t.x,this.x)),this.y=Math.max(r.y,Math.min(t.y,this.y)),this.z=Math.max(r.z,Math.min(t.z,this.z)),this}clampScalar(r,t){return this.x=Math.max(r,Math.min(t,this.x)),this.y=Math.max(r,Math.min(t,this.y)),this.z=Math.max(r,Math.min(t,this.z)),this}clampLength(r,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(r,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(r){return this.x*r.x+this.y*r.y+this.z*r.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(r){return this.normalize().multiplyScalar(r)}lerp(r,t){return this.x+=(r.x-this.x)*t,this.y+=(r.y-this.y)*t,this.z+=(r.z-this.z)*t,this}lerpVectors(r,t,o){return this.x=r.x+(t.x-r.x)*o,this.y=r.y+(t.y-r.y)*o,this.z=r.z+(t.z-r.z)*o,this}cross(r,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(r,t)):this.crossVectors(this,r)}crossVectors(r,t){const o=r.x,e=r.y,a=r.z,c=t.x,i=t.y,g=t.z;return this.x=e*g-a*i,this.y=a*c-o*g,this.z=o*i-e*c,this}projectOnVector(r){const t=r.lengthSq();if(t===0)return this.set(0,0,0);const o=r.dot(this)/t;return this.copy(r).multiplyScalar(o)}projectOnPlane(r){return Bi.copy(this).projectOnVector(r),this.sub(Bi)}reflect(r){return this.sub(Bi.copy(r).multiplyScalar(2*this.dot(r)))}angleTo(r){const t=Math.sqrt(this.lengthSq()*r.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(r)/t;return Math.acos(yt(o,-1,1))}distanceTo(r){return Math.sqrt(this.distanceToSquared(r))}distanceToSquared(r){const t=this.x-r.x,o=this.y-r.y,e=this.z-r.z;return t*t+o*o+e*e}manhattanDistanceTo(r){return Math.abs(this.x-r.x)+Math.abs(this.y-r.y)+Math.abs(this.z-r.z)}setFromSpherical(r){return this.setFromSphericalCoords(r.radius,r.phi,r.theta)}setFromSphericalCoords(r,t,o){const e=Math.sin(t)*r;return this.x=e*Math.sin(o),this.y=Math.cos(t)*r,this.z=e*Math.cos(o),this}setFromCylindrical(r){return this.setFromCylindricalCoords(r.radius,r.theta,r.y)}setFromCylindricalCoords(r,t,o){return this.x=r*Math.sin(t),this.y=o,this.z=r*Math.cos(t),this}setFromMatrixPosition(r){const t=r.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(r){const t=this.setFromMatrixColumn(r,0).length(),o=this.setFromMatrixColumn(r,1).length(),e=this.setFromMatrixColumn(r,2).length();return this.x=t,this.y=o,this.z=e,this}setFromMatrixColumn(r,t){return this.fromArray(r.elements,t*4)}setFromMatrix3Column(r,t){return this.fromArray(r.elements,t*3)}setFromEuler(r){return this.x=r._x,this.y=r._y,this.z=r._z,this}equals(r){return r.x===this.x&&r.y===this.y&&r.z===this.z}fromArray(r,t=0){return this.x=r[t],this.y=r[t+1],this.z=r[t+2],this}toArray(r=[],t=0){return r[t]=this.x,r[t+1]=this.y,r[t+2]=this.z,r}fromBufferAttribute(r,t,o){return o!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=r.getX(t),this.y=r.getY(t),this.z=r.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const r=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,o=Math.sqrt(1-r**2);return this.x=o*Math.cos(t),this.y=o*Math.sin(t),this.z=r,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bi=new P,Wn=new za;class Ma{constructor(r=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=r,this.max=t}set(r,t){return this.min.copy(r),this.max.copy(t),this}setFromArray(r){let t=1/0,o=1/0,e=1/0,a=-1/0,c=-1/0,i=-1/0;for(let g=0,l=r.length;g<l;g+=3){const d=r[g],s=r[g+1],p=r[g+2];d<t&&(t=d),s<o&&(o=s),p<e&&(e=p),d>a&&(a=d),s>c&&(c=s),p>i&&(i=p)}return this.min.set(t,o,e),this.max.set(a,c,i),this}setFromBufferAttribute(r){let t=1/0,o=1/0,e=1/0,a=-1/0,c=-1/0,i=-1/0;for(let g=0,l=r.count;g<l;g++){const d=r.getX(g),s=r.getY(g),p=r.getZ(g);d<t&&(t=d),s<o&&(o=s),p<e&&(e=p),d>a&&(a=d),s>c&&(c=s),p>i&&(i=p)}return this.min.set(t,o,e),this.max.set(a,c,i),this}setFromPoints(r){this.makeEmpty();for(let t=0,o=r.length;t<o;t++)this.expandByPoint(r[t]);return this}setFromCenterAndSize(r,t){const o=Go.copy(t).multiplyScalar(.5);return this.min.copy(r).sub(o),this.max.copy(r).add(o),this}setFromObject(r,t=!1){return this.makeEmpty(),this.expandByObject(r,t)}clone(){return new this.constructor().copy(this)}copy(r){return this.min.copy(r.min),this.max.copy(r.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(r){return this.isEmpty()?r.set(0,0,0):r.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(r){return this.isEmpty()?r.set(0,0,0):r.subVectors(this.max,this.min)}expandByPoint(r){return this.min.min(r),this.max.max(r),this}expandByVector(r){return this.min.sub(r),this.max.add(r),this}expandByScalar(r){return this.min.addScalar(-r),this.max.addScalar(r),this}expandByObject(r,t=!1){r.updateWorldMatrix(!1,!1);const o=r.geometry;if(o!==void 0)if(t&&o.attributes!=null&&o.attributes.position!==void 0){const a=o.attributes.position;for(let c=0,i=a.count;c<i;c++)Go.fromBufferAttribute(a,c).applyMatrix4(r.matrixWorld),this.expandByPoint(Go)}else o.boundingBox===null&&o.computeBoundingBox(),Gi.copy(o.boundingBox),Gi.applyMatrix4(r.matrixWorld),this.union(Gi);const e=r.children;for(let a=0,c=e.length;a<c;a++)this.expandByObject(e[a],t);return this}containsPoint(r){return!(r.x<this.min.x||r.x>this.max.x||r.y<this.min.y||r.y>this.max.y||r.z<this.min.z||r.z>this.max.z)}containsBox(r){return this.min.x<=r.min.x&&r.max.x<=this.max.x&&this.min.y<=r.min.y&&r.max.y<=this.max.y&&this.min.z<=r.min.z&&r.max.z<=this.max.z}getParameter(r,t){return t.set((r.x-this.min.x)/(this.max.x-this.min.x),(r.y-this.min.y)/(this.max.y-this.min.y),(r.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(r){return!(r.max.x<this.min.x||r.min.x>this.max.x||r.max.y<this.min.y||r.min.y>this.max.y||r.max.z<this.min.z||r.min.z>this.max.z)}intersectsSphere(r){return this.clampPoint(r.center,Go),Go.distanceToSquared(r.center)<=r.radius*r.radius}intersectsPlane(r){let t,o;return r.normal.x>0?(t=r.normal.x*this.min.x,o=r.normal.x*this.max.x):(t=r.normal.x*this.max.x,o=r.normal.x*this.min.x),r.normal.y>0?(t+=r.normal.y*this.min.y,o+=r.normal.y*this.max.y):(t+=r.normal.y*this.max.y,o+=r.normal.y*this.min.y),r.normal.z>0?(t+=r.normal.z*this.min.z,o+=r.normal.z*this.max.z):(t+=r.normal.z*this.max.z,o+=r.normal.z*this.min.z),t<=-r.constant&&o>=-r.constant}intersectsTriangle(r){if(this.isEmpty())return!1;this.getCenter(Qe),Pa.subVectors(this.max,Qe),fe.subVectors(r.a,Qe),be.subVectors(r.b,Qe),he.subVectors(r.c,Qe),yo.subVectors(be,fe),xo.subVectors(he,be),Vo.subVectors(fe,he);let t=[0,-yo.z,yo.y,0,-xo.z,xo.y,0,-Vo.z,Vo.y,yo.z,0,-yo.x,xo.z,0,-xo.x,Vo.z,0,-Vo.x,-yo.y,yo.x,0,-xo.y,xo.x,0,-Vo.y,Vo.x,0];return!Vi(t,fe,be,he,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Vi(t,fe,be,he,Pa))?!1:(Ra.crossVectors(yo,xo),t=[Ra.x,Ra.y,Ra.z],Vi(t,fe,be,he,Pa))}clampPoint(r,t){return t.copy(r).clamp(this.min,this.max)}distanceToPoint(r){return Go.copy(r).clamp(this.min,this.max).sub(r).length()}getBoundingSphere(r){return this.getCenter(r.center),r.radius=this.getSize(Go).length()*.5,r}intersect(r){return this.min.max(r.min),this.max.min(r.max),this.isEmpty()&&this.makeEmpty(),this}union(r){return this.min.min(r.min),this.max.max(r.max),this}applyMatrix4(r){return this.isEmpty()?this:(eo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(r),eo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(r),eo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(r),eo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(r),eo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(r),eo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(r),eo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(r),eo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(r),this.setFromPoints(eo),this)}translate(r){return this.min.add(r),this.max.add(r),this}equals(r){return r.min.equals(this.min)&&r.max.equals(this.max)}}const eo=[new P,new P,new P,new P,new P,new P,new P,new P],Go=new P,Gi=new Ma,fe=new P,be=new P,he=new P,yo=new P,xo=new P,Vo=new P,Qe=new P,Pa=new P,Ra=new P,Ho=new P;function Vi(n,r,t,o,e){for(let a=0,c=n.length-3;a<=c;a+=3){Ho.fromArray(n,a);const i=e.x*Math.abs(Ho.x)+e.y*Math.abs(Ho.y)+e.z*Math.abs(Ho.z),g=r.dot(Ho),l=t.dot(Ho),d=o.dot(Ho);if(Math.max(-Math.max(g,l,d),Math.min(g,l,d))>i)return!1}return!0}const wp=new Ma,jn=new P,Ia=new P,Hi=new P;class hi{constructor(r=new P,t=-1){this.center=r,this.radius=t}set(r,t){return this.center.copy(r),this.radius=t,this}setFromPoints(r,t){const o=this.center;t!==void 0?o.copy(t):wp.setFromPoints(r).getCenter(o);let e=0;for(let a=0,c=r.length;a<c;a++)e=Math.max(e,o.distanceToSquared(r[a]));return this.radius=Math.sqrt(e),this}copy(r){return this.center.copy(r.center),this.radius=r.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(r){return r.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(r){return r.distanceTo(this.center)-this.radius}intersectsSphere(r){const t=this.radius+r.radius;return r.center.distanceToSquared(this.center)<=t*t}intersectsBox(r){return r.intersectsSphere(this)}intersectsPlane(r){return Math.abs(r.distanceToPoint(this.center))<=this.radius}clampPoint(r,t){const o=this.center.distanceToSquared(r);return t.copy(r),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(r){return this.isEmpty()?(r.makeEmpty(),r):(r.set(this.center,this.center),r.expandByScalar(this.radius),r)}applyMatrix4(r){return this.center.applyMatrix4(r),this.radius=this.radius*r.getMaxScaleOnAxis(),this}translate(r){return this.center.add(r),this}expandByPoint(r){Hi.subVectors(r,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),e=(o-this.radius)*.5;this.center.add(Hi.multiplyScalar(e/o)),this.radius+=e}return this}union(r){return this.center.equals(r.center)===!0?Ia.set(0,0,1).multiplyScalar(r.radius):Ia.subVectors(r.center,this.center).normalize().multiplyScalar(r.radius),this.expandByPoint(jn.copy(r.center).add(Ia)),this.expandByPoint(jn.copy(r.center).sub(Ia)),this}equals(r){return r.center.equals(this.center)&&r.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ao=new P,Wi=new P,Fa=new P,ko=new P,ji=new P,Na=new P,Xi=new P;class Ig{constructor(r=new P,t=new P(0,0,-1)){this.origin=r,this.direction=t}set(r,t){return this.origin.copy(r),this.direction.copy(t),this}copy(r){return this.origin.copy(r.origin),this.direction.copy(r.direction),this}at(r,t){return t.copy(this.direction).multiplyScalar(r).add(this.origin)}lookAt(r){return this.direction.copy(r).sub(this.origin).normalize(),this}recast(r){return this.origin.copy(this.at(r,ao)),this}closestPointToPoint(r,t){t.subVectors(r,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(o).add(this.origin)}distanceToPoint(r){return Math.sqrt(this.distanceSqToPoint(r))}distanceSqToPoint(r){const t=ao.subVectors(r,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(r):(ao.copy(this.direction).multiplyScalar(t).add(this.origin),ao.distanceToSquared(r))}distanceSqToSegment(r,t,o,e){Wi.copy(r).add(t).multiplyScalar(.5),Fa.copy(t).sub(r).normalize(),ko.copy(this.origin).sub(Wi);const a=r.distanceTo(t)*.5,c=-this.direction.dot(Fa),i=ko.dot(this.direction),g=-ko.dot(Fa),l=ko.lengthSq(),d=Math.abs(1-c*c);let s,p,f,b;if(d>0)if(s=c*g-i,p=c*i-g,b=a*d,s>=0)if(p>=-b)if(p<=b){const w=1/d;s*=w,p*=w,f=s*(s+c*p+2*i)+p*(c*s+p+2*g)+l}else p=a,s=Math.max(0,-(c*p+i)),f=-s*s+p*(p+2*g)+l;else p=-a,s=Math.max(0,-(c*p+i)),f=-s*s+p*(p+2*g)+l;else p<=-b?(s=Math.max(0,-(-c*a+i)),p=s>0?-a:Math.min(Math.max(-a,-g),a),f=-s*s+p*(p+2*g)+l):p<=b?(s=0,p=Math.min(Math.max(-a,-g),a),f=p*(p+2*g)+l):(s=Math.max(0,-(c*a+i)),p=s>0?a:Math.min(Math.max(-a,-g),a),f=-s*s+p*(p+2*g)+l);else p=c>0?-a:a,s=Math.max(0,-(c*p+i)),f=-s*s+p*(p+2*g)+l;return o&&o.copy(this.direction).multiplyScalar(s).add(this.origin),e&&e.copy(Fa).multiplyScalar(p).add(Wi),f}intersectSphere(r,t){ao.subVectors(r.center,this.origin);const o=ao.dot(this.direction),e=ao.dot(ao)-o*o,a=r.radius*r.radius;if(e>a)return null;const c=Math.sqrt(a-e),i=o-c,g=o+c;return i<0&&g<0?null:i<0?this.at(g,t):this.at(i,t)}intersectsSphere(r){return this.distanceSqToPoint(r.center)<=r.radius*r.radius}distanceToPlane(r){const t=r.normal.dot(this.direction);if(t===0)return r.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(r.normal)+r.constant)/t;return o>=0?o:null}intersectPlane(r,t){const o=this.distanceToPlane(r);return o===null?null:this.at(o,t)}intersectsPlane(r){const t=r.distanceToPoint(this.origin);return t===0||r.normal.dot(this.direction)*t<0}intersectBox(r,t){let o,e,a,c,i,g;const l=1/this.direction.x,d=1/this.direction.y,s=1/this.direction.z,p=this.origin;return l>=0?(o=(r.min.x-p.x)*l,e=(r.max.x-p.x)*l):(o=(r.max.x-p.x)*l,e=(r.min.x-p.x)*l),d>=0?(a=(r.min.y-p.y)*d,c=(r.max.y-p.y)*d):(a=(r.max.y-p.y)*d,c=(r.min.y-p.y)*d),o>c||a>e||((a>o||o!==o)&&(o=a),(c<e||e!==e)&&(e=c),s>=0?(i=(r.min.z-p.z)*s,g=(r.max.z-p.z)*s):(i=(r.max.z-p.z)*s,g=(r.min.z-p.z)*s),o>g||i>e)||((i>o||o!==o)&&(o=i),(g<e||e!==e)&&(e=g),e<0)?null:this.at(o>=0?o:e,t)}intersectsBox(r){return this.intersectBox(r,ao)!==null}intersectTriangle(r,t,o,e,a){ji.subVectors(t,r),Na.subVectors(o,r),Xi.crossVectors(ji,Na);let c=this.direction.dot(Xi),i;if(c>0){if(e)return null;i=1}else if(c<0)i=-1,c=-c;else return null;ko.subVectors(this.origin,r);const g=i*this.direction.dot(Na.crossVectors(ko,Na));if(g<0)return null;const l=i*this.direction.dot(ji.cross(ko));if(l<0||g+l>c)return null;const d=-i*ko.dot(Xi);return d<0?null:this.at(d/c,a)}applyMatrix4(r){return this.origin.applyMatrix4(r),this.direction.transformDirection(r),this}equals(r){return r.origin.equals(this.origin)&&r.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $r{constructor(){$r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(r,t,o,e,a,c,i,g,l,d,s,p,f,b,w,m){const h=this.elements;return h[0]=r,h[4]=t,h[8]=o,h[12]=e,h[1]=a,h[5]=c,h[9]=i,h[13]=g,h[2]=l,h[6]=d,h[10]=s,h[14]=p,h[3]=f,h[7]=b,h[11]=w,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $r().fromArray(this.elements)}copy(r){const t=this.elements,o=r.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(r){const t=this.elements,o=r.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(r){const t=r.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(r,t,o){return r.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(r,t,o){return this.set(r.x,t.x,o.x,0,r.y,t.y,o.y,0,r.z,t.z,o.z,0,0,0,0,1),this}extractRotation(r){const t=this.elements,o=r.elements,e=1/ue.setFromMatrixColumn(r,0).length(),a=1/ue.setFromMatrixColumn(r,1).length(),c=1/ue.setFromMatrixColumn(r,2).length();return t[0]=o[0]*e,t[1]=o[1]*e,t[2]=o[2]*e,t[3]=0,t[4]=o[4]*a,t[5]=o[5]*a,t[6]=o[6]*a,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(r){r&&r.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,o=r.x,e=r.y,a=r.z,c=Math.cos(o),i=Math.sin(o),g=Math.cos(e),l=Math.sin(e),d=Math.cos(a),s=Math.sin(a);if(r.order==="XYZ"){const p=c*d,f=c*s,b=i*d,w=i*s;t[0]=g*d,t[4]=-g*s,t[8]=l,t[1]=f+b*l,t[5]=p-w*l,t[9]=-i*g,t[2]=w-p*l,t[6]=b+f*l,t[10]=c*g}else if(r.order==="YXZ"){const p=g*d,f=g*s,b=l*d,w=l*s;t[0]=p+w*i,t[4]=b*i-f,t[8]=c*l,t[1]=c*s,t[5]=c*d,t[9]=-i,t[2]=f*i-b,t[6]=w+p*i,t[10]=c*g}else if(r.order==="ZXY"){const p=g*d,f=g*s,b=l*d,w=l*s;t[0]=p-w*i,t[4]=-c*s,t[8]=b+f*i,t[1]=f+b*i,t[5]=c*d,t[9]=w-p*i,t[2]=-c*l,t[6]=i,t[10]=c*g}else if(r.order==="ZYX"){const p=c*d,f=c*s,b=i*d,w=i*s;t[0]=g*d,t[4]=b*l-f,t[8]=p*l+w,t[1]=g*s,t[5]=w*l+p,t[9]=f*l-b,t[2]=-l,t[6]=i*g,t[10]=c*g}else if(r.order==="YZX"){const p=c*g,f=c*l,b=i*g,w=i*l;t[0]=g*d,t[4]=w-p*s,t[8]=b*s+f,t[1]=s,t[5]=c*d,t[9]=-i*d,t[2]=-l*d,t[6]=f*s+b,t[10]=p-w*s}else if(r.order==="XZY"){const p=c*g,f=c*l,b=i*g,w=i*l;t[0]=g*d,t[4]=-s,t[8]=l*d,t[1]=p*s+w,t[5]=c*d,t[9]=f*s-b,t[2]=b*s-f,t[6]=i*d,t[10]=w*s+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(r){return this.compose(mp,r,fp)}lookAt(r,t,o){const e=this.elements;return ht.subVectors(r,t),ht.lengthSq()===0&&(ht.z=1),ht.normalize(),_o.crossVectors(o,ht),_o.lengthSq()===0&&(Math.abs(o.z)===1?ht.x+=1e-4:ht.z+=1e-4,ht.normalize(),_o.crossVectors(o,ht)),_o.normalize(),Oa.crossVectors(ht,_o),e[0]=_o.x,e[4]=Oa.x,e[8]=ht.x,e[1]=_o.y,e[5]=Oa.y,e[9]=ht.y,e[2]=_o.z,e[6]=Oa.z,e[10]=ht.z,this}multiply(r,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(r,t)):this.multiplyMatrices(this,r)}premultiply(r){return this.multiplyMatrices(r,this)}multiplyMatrices(r,t){const o=r.elements,e=t.elements,a=this.elements,c=o[0],i=o[4],g=o[8],l=o[12],d=o[1],s=o[5],p=o[9],f=o[13],b=o[2],w=o[6],m=o[10],h=o[14],y=o[3],S=o[7],_=o[11],v=o[15],M=e[0],C=e[4],u=e[8],z=e[12],D=e[1],L=e[5],K=e[9],q=e[13],A=e[2],B=e[6],I=e[10],G=e[14],j=e[3],N=e[7],H=e[11],Z=e[15];return a[0]=c*M+i*D+g*A+l*j,a[4]=c*C+i*L+g*B+l*N,a[8]=c*u+i*K+g*I+l*H,a[12]=c*z+i*q+g*G+l*Z,a[1]=d*M+s*D+p*A+f*j,a[5]=d*C+s*L+p*B+f*N,a[9]=d*u+s*K+p*I+f*H,a[13]=d*z+s*q+p*G+f*Z,a[2]=b*M+w*D+m*A+h*j,a[6]=b*C+w*L+m*B+h*N,a[10]=b*u+w*K+m*I+h*H,a[14]=b*z+w*q+m*G+h*Z,a[3]=y*M+S*D+_*A+v*j,a[7]=y*C+S*L+_*B+v*N,a[11]=y*u+S*K+_*I+v*H,a[15]=y*z+S*q+_*G+v*Z,this}multiplyScalar(r){const t=this.elements;return t[0]*=r,t[4]*=r,t[8]*=r,t[12]*=r,t[1]*=r,t[5]*=r,t[9]*=r,t[13]*=r,t[2]*=r,t[6]*=r,t[10]*=r,t[14]*=r,t[3]*=r,t[7]*=r,t[11]*=r,t[15]*=r,this}determinant(){const r=this.elements,t=r[0],o=r[4],e=r[8],a=r[12],c=r[1],i=r[5],g=r[9],l=r[13],d=r[2],s=r[6],p=r[10],f=r[14],b=r[3],w=r[7],m=r[11],h=r[15];return b*(+a*g*s-e*l*s-a*i*p+o*l*p+e*i*f-o*g*f)+w*(+t*g*f-t*l*p+a*c*p-e*c*f+e*l*d-a*g*d)+m*(+t*l*s-t*i*f-a*c*s+o*c*f+a*i*d-o*l*d)+h*(-e*i*d-t*g*s+t*i*p+e*c*s-o*c*p+o*g*d)}transpose(){const r=this.elements;let t;return t=r[1],r[1]=r[4],r[4]=t,t=r[2],r[2]=r[8],r[8]=t,t=r[6],r[6]=r[9],r[9]=t,t=r[3],r[3]=r[12],r[12]=t,t=r[7],r[7]=r[13],r[13]=t,t=r[11],r[11]=r[14],r[14]=t,this}setPosition(r,t,o){const e=this.elements;return r.isVector3?(e[12]=r.x,e[13]=r.y,e[14]=r.z):(e[12]=r,e[13]=t,e[14]=o),this}invert(){const r=this.elements,t=r[0],o=r[1],e=r[2],a=r[3],c=r[4],i=r[5],g=r[6],l=r[7],d=r[8],s=r[9],p=r[10],f=r[11],b=r[12],w=r[13],m=r[14],h=r[15],y=s*m*l-w*p*l+w*g*f-i*m*f-s*g*h+i*p*h,S=b*p*l-d*m*l-b*g*f+c*m*f+d*g*h-c*p*h,_=d*w*l-b*s*l+b*i*f-c*w*f-d*i*h+c*s*h,v=b*s*g-d*w*g-b*i*p+c*w*p+d*i*m-c*s*m,M=t*y+o*S+e*_+a*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return r[0]=y*C,r[1]=(w*p*a-s*m*a-w*e*f+o*m*f+s*e*h-o*p*h)*C,r[2]=(i*m*a-w*g*a+w*e*l-o*m*l-i*e*h+o*g*h)*C,r[3]=(s*g*a-i*p*a-s*e*l+o*p*l+i*e*f-o*g*f)*C,r[4]=S*C,r[5]=(d*m*a-b*p*a+b*e*f-t*m*f-d*e*h+t*p*h)*C,r[6]=(b*g*a-c*m*a-b*e*l+t*m*l+c*e*h-t*g*h)*C,r[7]=(c*p*a-d*g*a+d*e*l-t*p*l-c*e*f+t*g*f)*C,r[8]=_*C,r[9]=(b*s*a-d*w*a-b*o*f+t*w*f+d*o*h-t*s*h)*C,r[10]=(c*w*a-b*i*a+b*o*l-t*w*l-c*o*h+t*i*h)*C,r[11]=(d*i*a-c*s*a-d*o*l+t*s*l+c*o*f-t*i*f)*C,r[12]=v*C,r[13]=(d*w*e-b*s*e+b*o*p-t*w*p-d*o*m+t*s*m)*C,r[14]=(b*i*e-c*w*e-b*o*g+t*w*g+c*o*m-t*i*m)*C,r[15]=(c*s*e-d*i*e+d*o*g-t*s*g-c*o*p+t*i*p)*C,this}scale(r){const t=this.elements,o=r.x,e=r.y,a=r.z;return t[0]*=o,t[4]*=e,t[8]*=a,t[1]*=o,t[5]*=e,t[9]*=a,t[2]*=o,t[6]*=e,t[10]*=a,t[3]*=o,t[7]*=e,t[11]*=a,this}getMaxScaleOnAxis(){const r=this.elements,t=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],o=r[4]*r[4]+r[5]*r[5]+r[6]*r[6],e=r[8]*r[8]+r[9]*r[9]+r[10]*r[10];return Math.sqrt(Math.max(t,o,e))}makeTranslation(r,t,o){return this.set(1,0,0,r,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(r){const t=Math.cos(r),o=Math.sin(r);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(r){const t=Math.cos(r),o=Math.sin(r);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(r){const t=Math.cos(r),o=Math.sin(r);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(r,t){const o=Math.cos(t),e=Math.sin(t),a=1-o,c=r.x,i=r.y,g=r.z,l=a*c,d=a*i;return this.set(l*c+o,l*i-e*g,l*g+e*i,0,l*i+e*g,d*i+o,d*g-e*c,0,l*g-e*i,d*g+e*c,a*g*g+o,0,0,0,0,1),this}makeScale(r,t,o){return this.set(r,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(r,t,o,e,a,c){return this.set(1,o,a,0,r,1,c,0,t,e,1,0,0,0,0,1),this}compose(r,t,o){const e=this.elements,a=t._x,c=t._y,i=t._z,g=t._w,l=a+a,d=c+c,s=i+i,p=a*l,f=a*d,b=a*s,w=c*d,m=c*s,h=i*s,y=g*l,S=g*d,_=g*s,v=o.x,M=o.y,C=o.z;return e[0]=(1-(w+h))*v,e[1]=(f+_)*v,e[2]=(b-S)*v,e[3]=0,e[4]=(f-_)*M,e[5]=(1-(p+h))*M,e[6]=(m+y)*M,e[7]=0,e[8]=(b+S)*C,e[9]=(m-y)*C,e[10]=(1-(p+w))*C,e[11]=0,e[12]=r.x,e[13]=r.y,e[14]=r.z,e[15]=1,this}decompose(r,t,o){const e=this.elements;let a=ue.set(e[0],e[1],e[2]).length();const c=ue.set(e[4],e[5],e[6]).length(),i=ue.set(e[8],e[9],e[10]).length();this.determinant()<0&&(a=-a),r.x=e[12],r.y=e[13],r.z=e[14],Ot.copy(this);const l=1/a,d=1/c,s=1/i;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=d,Ot.elements[5]*=d,Ot.elements[6]*=d,Ot.elements[8]*=s,Ot.elements[9]*=s,Ot.elements[10]*=s,t.setFromRotationMatrix(Ot),o.x=a,o.y=c,o.z=i,this}makePerspective(r,t,o,e,a,c){c===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const i=this.elements,g=2*a/(t-r),l=2*a/(o-e),d=(t+r)/(t-r),s=(o+e)/(o-e),p=-(c+a)/(c-a),f=-2*c*a/(c-a);return i[0]=g,i[4]=0,i[8]=d,i[12]=0,i[1]=0,i[5]=l,i[9]=s,i[13]=0,i[2]=0,i[6]=0,i[10]=p,i[14]=f,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(r,t,o,e,a,c){const i=this.elements,g=1/(t-r),l=1/(o-e),d=1/(c-a),s=(t+r)*g,p=(o+e)*l,f=(c+a)*d;return i[0]=2*g,i[4]=0,i[8]=0,i[12]=-s,i[1]=0,i[5]=2*l,i[9]=0,i[13]=-p,i[2]=0,i[6]=0,i[10]=-2*d,i[14]=-f,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(r){const t=this.elements,o=r.elements;for(let e=0;e<16;e++)if(t[e]!==o[e])return!1;return!0}fromArray(r,t=0){for(let o=0;o<16;o++)this.elements[o]=r[o+t];return this}toArray(r=[],t=0){const o=this.elements;return r[t]=o[0],r[t+1]=o[1],r[t+2]=o[2],r[t+3]=o[3],r[t+4]=o[4],r[t+5]=o[5],r[t+6]=o[6],r[t+7]=o[7],r[t+8]=o[8],r[t+9]=o[9],r[t+10]=o[10],r[t+11]=o[11],r[t+12]=o[12],r[t+13]=o[13],r[t+14]=o[14],r[t+15]=o[15],r}}const ue=new P,Ot=new $r,mp=new P(0,0,0),fp=new P(1,1,1),_o=new P,Oa=new P,ht=new P,Xn=new $r,qn=new za;class Sa{constructor(r=0,t=0,o=0,e=Sa.DefaultOrder){this.isEuler=!0,this._x=r,this._y=t,this._z=o,this._order=e}get x(){return this._x}set x(r){this._x=r,this._onChangeCallback()}get y(){return this._y}set y(r){this._y=r,this._onChangeCallback()}get z(){return this._z}set z(r){this._z=r,this._onChangeCallback()}get order(){return this._order}set order(r){this._order=r,this._onChangeCallback()}set(r,t,o,e=this._order){return this._x=r,this._y=t,this._z=o,this._order=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(r){return this._x=r._x,this._y=r._y,this._z=r._z,this._order=r._order,this._onChangeCallback(),this}setFromRotationMatrix(r,t=this._order,o=!0){const e=r.elements,a=e[0],c=e[4],i=e[8],g=e[1],l=e[5],d=e[9],s=e[2],p=e[6],f=e[10];switch(t){case"XYZ":this._y=Math.asin(yt(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(i,f),this._z=Math.atan2(g,l)):(this._y=Math.atan2(-s,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-s,f),this._z=Math.atan2(-c,l)):(this._y=0,this._z=Math.atan2(g,a));break;case"ZYX":this._y=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(g,a)):(this._x=0,this._z=Math.atan2(-c,l));break;case"YZX":this._z=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-s,a)):(this._x=0,this._y=Math.atan2(i,f));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(i,a)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(r,t,o){return Xn.makeRotationFromQuaternion(r),this.setFromRotationMatrix(Xn,t,o)}setFromVector3(r,t=this._order){return this.set(r.x,r.y,r.z,t)}reorder(r){return qn.setFromEuler(this),this.setFromQuaternion(qn,r)}equals(r){return r._x===this._x&&r._y===this._y&&r._z===this._z&&r._order===this._order}fromArray(r){return this._x=r[0],this._y=r[1],this._z=r[2],r[3]!==void 0&&(this._order=r[3]),this._onChangeCallback(),this}toArray(r=[],t=0){return r[t]=this._x,r[t+1]=this._y,r[t+2]=this._z,r[t+3]=this._order,r}_onChange(r){return this._onChangeCallback=r,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Sa.DefaultOrder="XYZ";Sa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Fg{constructor(){this.mask=1}set(r){this.mask=(1<<r|0)>>>0}enable(r){this.mask|=1<<r|0}enableAll(){this.mask=-1}toggle(r){this.mask^=1<<r|0}disable(r){this.mask&=~(1<<r|0)}disableAll(){this.mask=0}test(r){return(this.mask&r.mask)!==0}isEnabled(r){return(this.mask&(1<<r|0))!==0}}let bp=0;const Yn=new P,ve=new za,io=new $r,Ua=new P,ra=new P,hp=new P,up=new za,Zn=new P(1,0,0),$n=new P(0,1,0),Kn=new P(0,0,1),vp={type:"added"},Jn={type:"removed"};class It extends Ye{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DefaultUp.clone();const r=new P,t=new Sa,o=new za,e=new P(1,1,1);function a(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(a),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:r},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:e},modelViewMatrix:{value:new $r},normalMatrix:{value:new Lt}}),this.matrix=new $r,this.matrixWorld=new $r,this.matrixAutoUpdate=It.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(r){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(r),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(r){return this.quaternion.premultiply(r),this}setRotationFromAxisAngle(r,t){this.quaternion.setFromAxisAngle(r,t)}setRotationFromEuler(r){this.quaternion.setFromEuler(r,!0)}setRotationFromMatrix(r){this.quaternion.setFromRotationMatrix(r)}setRotationFromQuaternion(r){this.quaternion.copy(r)}rotateOnAxis(r,t){return ve.setFromAxisAngle(r,t),this.quaternion.multiply(ve),this}rotateOnWorldAxis(r,t){return ve.setFromAxisAngle(r,t),this.quaternion.premultiply(ve),this}rotateX(r){return this.rotateOnAxis(Zn,r)}rotateY(r){return this.rotateOnAxis($n,r)}rotateZ(r){return this.rotateOnAxis(Kn,r)}translateOnAxis(r,t){return Yn.copy(r).applyQuaternion(this.quaternion),this.position.add(Yn.multiplyScalar(t)),this}translateX(r){return this.translateOnAxis(Zn,r)}translateY(r){return this.translateOnAxis($n,r)}translateZ(r){return this.translateOnAxis(Kn,r)}localToWorld(r){return r.applyMatrix4(this.matrixWorld)}worldToLocal(r){return r.applyMatrix4(io.copy(this.matrixWorld).invert())}lookAt(r,t,o){r.isVector3?Ua.copy(r):Ua.set(r,t,o);const e=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?io.lookAt(ra,Ua,this.up):io.lookAt(Ua,ra,this.up),this.quaternion.setFromRotationMatrix(io),e&&(io.extractRotation(e.matrixWorld),ve.setFromRotationMatrix(io),this.quaternion.premultiply(ve.invert()))}add(r){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return r===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",r),this):(r&&r.isObject3D?(r.parent!==null&&r.parent.remove(r),r.parent=this,this.children.push(r),r.dispatchEvent(vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",r),this)}remove(r){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(r);return t!==-1&&(r.parent=null,this.children.splice(t,1),r.dispatchEvent(Jn)),this}removeFromParent(){const r=this.parent;return r!==null&&r.remove(this),this}clear(){for(let r=0;r<this.children.length;r++){const t=this.children[r];t.parent=null,t.dispatchEvent(Jn)}return this.children.length=0,this}attach(r){return this.updateWorldMatrix(!0,!1),io.copy(this.matrixWorld).invert(),r.parent!==null&&(r.parent.updateWorldMatrix(!0,!1),io.multiply(r.parent.matrixWorld)),r.applyMatrix4(io),this.add(r),r.updateWorldMatrix(!1,!0),this}getObjectById(r){return this.getObjectByProperty("id",r)}getObjectByName(r){return this.getObjectByProperty("name",r)}getObjectByProperty(r,t){if(this[r]===t)return this;for(let o=0,e=this.children.length;o<e;o++){const c=this.children[o].getObjectByProperty(r,t);if(c!==void 0)return c}}getWorldPosition(r){return this.updateWorldMatrix(!0,!1),r.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(r){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,r,hp),r}getWorldScale(r){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,up,r),r}getWorldDirection(r){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return r.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(r){r(this);const t=this.children;for(let o=0,e=t.length;o<e;o++)t[o].traverse(r)}traverseVisible(r){if(this.visible===!1)return;r(this);const t=this.children;for(let o=0,e=t.length;o<e;o++)t[o].traverseVisible(r)}traverseAncestors(r){const t=this.parent;t!==null&&(r(t),t.traverseAncestors(r))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(r){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,r=!0);const t=this.children;for(let o=0,e=t.length;o<e;o++)t[o].updateMatrixWorld(r)}updateWorldMatrix(r,t){const o=this.parent;if(r===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const e=this.children;for(let a=0,c=e.length;a<c;a++)e[a].updateWorldMatrix(!1,!0)}}toJSON(r){const t=r===void 0||typeof r=="string",o={};t&&(r={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const e={};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),this.frustumCulled===!1&&(e.frustumCulled=!1),this.renderOrder!==0&&(e.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(e.userData=this.userData),e.layers=this.layers.mask,e.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(e.matrixAutoUpdate=!1),this.isInstancedMesh&&(e.type="InstancedMesh",e.count=this.count,e.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(e.instanceColor=this.instanceColor.toJSON()));function a(i,g){return i[g.uuid]===void 0&&(i[g.uuid]=g.toJSON(r)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?e.background=this.background.toJSON():this.background.isTexture&&(e.background=this.background.toJSON(r).uuid)),this.environment&&this.environment.isTexture&&(e.environment=this.environment.toJSON(r).uuid);else if(this.isMesh||this.isLine||this.isPoints){e.geometry=a(r.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const g=i.shapes;if(Array.isArray(g))for(let l=0,d=g.length;l<d;l++){const s=g[l];a(r.shapes,s)}else a(r.shapes,g)}}if(this.isSkinnedMesh&&(e.bindMode=this.bindMode,e.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(r.skeletons,this.skeleton),e.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let g=0,l=this.material.length;g<l;g++)i.push(a(r.materials,this.material[g]));e.material=i}else e.material=a(r.materials,this.material);if(this.children.length>0){e.children=[];for(let i=0;i<this.children.length;i++)e.children.push(this.children[i].toJSON(r).object)}if(this.animations.length>0){e.animations=[];for(let i=0;i<this.animations.length;i++){const g=this.animations[i];e.animations.push(a(r.animations,g))}}if(t){const i=c(r.geometries),g=c(r.materials),l=c(r.textures),d=c(r.images),s=c(r.shapes),p=c(r.skeletons),f=c(r.animations),b=c(r.nodes);i.length>0&&(o.geometries=i),g.length>0&&(o.materials=g),l.length>0&&(o.textures=l),d.length>0&&(o.images=d),s.length>0&&(o.shapes=s),p.length>0&&(o.skeletons=p),f.length>0&&(o.animations=f),b.length>0&&(o.nodes=b)}return o.object=e,o;function c(i){const g=[];for(const l in i){const d=i[l];delete d.metadata,g.push(d)}return g}}clone(r){return new this.constructor().copy(this,r)}copy(r,t=!0){if(this.name=r.name,this.up.copy(r.up),this.position.copy(r.position),this.rotation.order=r.rotation.order,this.quaternion.copy(r.quaternion),this.scale.copy(r.scale),this.matrix.copy(r.matrix),this.matrixWorld.copy(r.matrixWorld),this.matrixAutoUpdate=r.matrixAutoUpdate,this.matrixWorldNeedsUpdate=r.matrixWorldNeedsUpdate,this.layers.mask=r.layers.mask,this.visible=r.visible,this.castShadow=r.castShadow,this.receiveShadow=r.receiveShadow,this.frustumCulled=r.frustumCulled,this.renderOrder=r.renderOrder,this.userData=JSON.parse(JSON.stringify(r.userData)),t===!0)for(let o=0;o<r.children.length;o++){const e=r.children[o];this.add(e.clone())}return this}}It.DefaultUp=new P(0,1,0);It.DefaultMatrixAutoUpdate=!0;const Ut=new P,co=new P,qi=new P,no=new P,ye=new P,xe=new P,Qn=new P,Yi=new P,Zi=new P,$i=new P;class so{constructor(r=new P,t=new P,o=new P){this.a=r,this.b=t,this.c=o}static getNormal(r,t,o,e){e.subVectors(o,t),Ut.subVectors(r,t),e.cross(Ut);const a=e.lengthSq();return a>0?e.multiplyScalar(1/Math.sqrt(a)):e.set(0,0,0)}static getBarycoord(r,t,o,e,a){Ut.subVectors(e,t),co.subVectors(o,t),qi.subVectors(r,t);const c=Ut.dot(Ut),i=Ut.dot(co),g=Ut.dot(qi),l=co.dot(co),d=co.dot(qi),s=c*l-i*i;if(s===0)return a.set(-2,-1,-1);const p=1/s,f=(l*g-i*d)*p,b=(c*d-i*g)*p;return a.set(1-f-b,b,f)}static containsPoint(r,t,o,e){return this.getBarycoord(r,t,o,e,no),no.x>=0&&no.y>=0&&no.x+no.y<=1}static getUV(r,t,o,e,a,c,i,g){return this.getBarycoord(r,t,o,e,no),g.set(0,0),g.addScaledVector(a,no.x),g.addScaledVector(c,no.y),g.addScaledVector(i,no.z),g}static isFrontFacing(r,t,o,e){return Ut.subVectors(o,t),co.subVectors(r,t),Ut.cross(co).dot(e)<0}set(r,t,o){return this.a.copy(r),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(r,t,o,e){return this.a.copy(r[t]),this.b.copy(r[o]),this.c.copy(r[e]),this}setFromAttributeAndIndices(r,t,o,e){return this.a.fromBufferAttribute(r,t),this.b.fromBufferAttribute(r,o),this.c.fromBufferAttribute(r,e),this}clone(){return new this.constructor().copy(this)}copy(r){return this.a.copy(r.a),this.b.copy(r.b),this.c.copy(r.c),this}getArea(){return Ut.subVectors(this.c,this.b),co.subVectors(this.a,this.b),Ut.cross(co).length()*.5}getMidpoint(r){return r.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(r){return so.getNormal(this.a,this.b,this.c,r)}getPlane(r){return r.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(r,t){return so.getBarycoord(r,this.a,this.b,this.c,t)}getUV(r,t,o,e,a){return so.getUV(r,this.a,this.b,this.c,t,o,e,a)}containsPoint(r){return so.containsPoint(r,this.a,this.b,this.c)}isFrontFacing(r){return so.isFrontFacing(this.a,this.b,this.c,r)}intersectsBox(r){return r.intersectsTriangle(this)}closestPointToPoint(r,t){const o=this.a,e=this.b,a=this.c;let c,i;ye.subVectors(e,o),xe.subVectors(a,o),Yi.subVectors(r,o);const g=ye.dot(Yi),l=xe.dot(Yi);if(g<=0&&l<=0)return t.copy(o);Zi.subVectors(r,e);const d=ye.dot(Zi),s=xe.dot(Zi);if(d>=0&&s<=d)return t.copy(e);const p=g*s-d*l;if(p<=0&&g>=0&&d<=0)return c=g/(g-d),t.copy(o).addScaledVector(ye,c);$i.subVectors(r,a);const f=ye.dot($i),b=xe.dot($i);if(b>=0&&f<=b)return t.copy(a);const w=f*l-g*b;if(w<=0&&l>=0&&b<=0)return i=l/(l-b),t.copy(o).addScaledVector(xe,i);const m=d*b-f*s;if(m<=0&&s-d>=0&&f-b>=0)return Qn.subVectors(a,e),i=(s-d)/(s-d+(f-b)),t.copy(e).addScaledVector(Qn,i);const h=1/(m+w+p);return c=w*h,i=p*h,t.copy(o).addScaledVector(ye,c).addScaledVector(xe,i)}equals(r){return r.a.equals(this.a)&&r.b.equals(this.b)&&r.c.equals(this.c)}}let yp=0;class Ta extends Ye{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=Fe,this.side=ua,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mg,this.blendDst=Sg,this.blendEquation=Ce,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(r){this._alphaTest>0!=r>0&&this.version++,this._alphaTest=r}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(r){if(r!==void 0)for(const t in r){const o=r[t];if(o===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===bs;continue}const e=this[t];if(e===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}e&&e.isColor?e.set(o):e&&e.isVector3&&o&&o.isVector3?e.copy(o):this[t]=o}}toJSON(r){const t=r===void 0||typeof r=="string";t&&(r={textures:{},images:{}});const o={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(r).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(r).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(r).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(r).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(r).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(r).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(r).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(r).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(r).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(r).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(r).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(r).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==Fe&&(o.blending=this.blending),this.side!==ua&&(o.side=this.side),this.vertexColors&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=this.transparent),o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.stencilWrite=this.stencilWrite,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(o.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(o.wireframe=this.wireframe),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=this.flatShading),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData);function e(a){const c=[];for(const i in a){const g=a[i];delete g.metadata,c.push(g)}return c}if(t){const a=e(r.textures),c=e(r.images);a.length>0&&(o.textures=a),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(r){this.name=r.name,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const t=r.clippingPlanes;let o=null;if(t!==null){const e=t.length;o=new Array(e);for(let a=0;a!==e;++a)o[a]=t[a].clone()}return this.clippingPlanes=o,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(r){r===!0&&this.version++}}class Ng extends Ta{constructor(r){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this.fog=r.fog,this}}const Hr=new P,Ba=new Fr;class Qt{constructor(r,t,o){if(Array.isArray(r))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=r,this.itemSize=t,this.count=r!==void 0?r.length/t:0,this.normalized=o===!0,this.usage=Bn,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(r){r===!0&&this.version++}setUsage(r){return this.usage=r,this}copy(r){return this.name=r.name,this.array=new r.array.constructor(r.array),this.itemSize=r.itemSize,this.count=r.count,this.normalized=r.normalized,this.usage=r.usage,this}copyAt(r,t,o){r*=this.itemSize,o*=t.itemSize;for(let e=0,a=this.itemSize;e<a;e++)this.array[r+e]=t.array[o+e];return this}copyArray(r){return this.array.set(r),this}copyColorsArray(r){const t=this.array;let o=0;for(let e=0,a=r.length;e<a;e++){let c=r[e];c===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",e),c=new Nr),t[o++]=c.r,t[o++]=c.g,t[o++]=c.b}return this}copyVector2sArray(r){const t=this.array;let o=0;for(let e=0,a=r.length;e<a;e++){let c=r[e];c===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",e),c=new Fr),t[o++]=c.x,t[o++]=c.y}return this}copyVector3sArray(r){const t=this.array;let o=0;for(let e=0,a=r.length;e<a;e++){let c=r[e];c===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",e),c=new P),t[o++]=c.x,t[o++]=c.y,t[o++]=c.z}return this}copyVector4sArray(r){const t=this.array;let o=0;for(let e=0,a=r.length;e<a;e++){let c=r[e];c===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",e),c=new Zr),t[o++]=c.x,t[o++]=c.y,t[o++]=c.z,t[o++]=c.w}return this}applyMatrix3(r){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(r),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(r),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyMatrix4(r){for(let t=0,o=this.count;t<o;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix4(r),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyNormalMatrix(r){for(let t=0,o=this.count;t<o;t++)Hr.fromBufferAttribute(this,t),Hr.applyNormalMatrix(r),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}transformDirection(r){for(let t=0,o=this.count;t<o;t++)Hr.fromBufferAttribute(this,t),Hr.transformDirection(r),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}set(r,t=0){return this.array.set(r,t),this}getX(r){return this.array[r*this.itemSize]}setX(r,t){return this.array[r*this.itemSize]=t,this}getY(r){return this.array[r*this.itemSize+1]}setY(r,t){return this.array[r*this.itemSize+1]=t,this}getZ(r){return this.array[r*this.itemSize+2]}setZ(r,t){return this.array[r*this.itemSize+2]=t,this}getW(r){return this.array[r*this.itemSize+3]}setW(r,t){return this.array[r*this.itemSize+3]=t,this}setXY(r,t,o){return r*=this.itemSize,this.array[r+0]=t,this.array[r+1]=o,this}setXYZ(r,t,o,e){return r*=this.itemSize,this.array[r+0]=t,this.array[r+1]=o,this.array[r+2]=e,this}setXYZW(r,t,o,e,a){return r*=this.itemSize,this.array[r+0]=t,this.array[r+1]=o,this.array[r+2]=e,this.array[r+3]=a,this}onUpload(r){return this.onUploadCallback=r,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const r={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(r.name=this.name),this.usage!==Bn&&(r.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(r.updateRange=this.updateRange),r}}class Og extends Qt{constructor(r,t,o){super(new Uint16Array(r),t,o)}}class Ug extends Qt{constructor(r,t,o){super(new Uint32Array(r),t,o)}}class Gt extends Qt{constructor(r,t,o){super(new Float32Array(r),t,o)}}let xp=0;const zt=new $r,Ki=new It,ke=new P,ut=new Ma,ta=new Ma,Xr=new P;class ro extends Ye{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(r){return Array.isArray(r)?this.index=new(Ag(r)?Ug:Og)(r,1):this.index=r,this}getAttribute(r){return this.attributes[r]}setAttribute(r,t){return this.attributes[r]=t,this}deleteAttribute(r){return delete this.attributes[r],this}hasAttribute(r){return this.attributes[r]!==void 0}addGroup(r,t,o=0){this.groups.push({start:r,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(r,t){this.drawRange.start=r,this.drawRange.count=t}applyMatrix4(r){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(r),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const a=new Lt().getNormalMatrix(r);o.applyNormalMatrix(a),o.needsUpdate=!0}const e=this.attributes.tangent;return e!==void 0&&(e.transformDirection(r),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(r){return zt.makeRotationFromQuaternion(r),this.applyMatrix4(zt),this}rotateX(r){return zt.makeRotationX(r),this.applyMatrix4(zt),this}rotateY(r){return zt.makeRotationY(r),this.applyMatrix4(zt),this}rotateZ(r){return zt.makeRotationZ(r),this.applyMatrix4(zt),this}translate(r,t,o){return zt.makeTranslation(r,t,o),this.applyMatrix4(zt),this}scale(r,t,o){return zt.makeScale(r,t,o),this.applyMatrix4(zt),this}lookAt(r){return Ki.lookAt(r),Ki.updateMatrix(),this.applyMatrix4(Ki.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ke).negate(),this.translate(ke.x,ke.y,ke.z),this}setFromPoints(r){const t=[];for(let o=0,e=r.length;o<e;o++){const a=r[o];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const r=this.attributes.position,t=this.morphAttributes.position;if(r&&r.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(r!==void 0){if(this.boundingBox.setFromBufferAttribute(r),t)for(let o=0,e=t.length;o<e;o++){const a=t[o];ut.setFromBufferAttribute(a),this.morphTargetsRelative?(Xr.addVectors(this.boundingBox.min,ut.min),this.boundingBox.expandByPoint(Xr),Xr.addVectors(this.boundingBox.max,ut.max),this.boundingBox.expandByPoint(Xr)):(this.boundingBox.expandByPoint(ut.min),this.boundingBox.expandByPoint(ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const r=this.attributes.position,t=this.morphAttributes.position;if(r&&r.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(r){const o=this.boundingSphere.center;if(ut.setFromBufferAttribute(r),t)for(let a=0,c=t.length;a<c;a++){const i=t[a];ta.setFromBufferAttribute(i),this.morphTargetsRelative?(Xr.addVectors(ut.min,ta.min),ut.expandByPoint(Xr),Xr.addVectors(ut.max,ta.max),ut.expandByPoint(Xr)):(ut.expandByPoint(ta.min),ut.expandByPoint(ta.max))}ut.getCenter(o);let e=0;for(let a=0,c=r.count;a<c;a++)Xr.fromBufferAttribute(r,a),e=Math.max(e,o.distanceToSquared(Xr));if(t)for(let a=0,c=t.length;a<c;a++){const i=t[a],g=this.morphTargetsRelative;for(let l=0,d=i.count;l<d;l++)Xr.fromBufferAttribute(i,l),g&&(ke.fromBufferAttribute(r,l),Xr.add(ke)),e=Math.max(e,o.distanceToSquared(Xr))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const r=this.index,t=this.attributes;if(r===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=r.array,e=t.position.array,a=t.normal.array,c=t.uv.array,i=e.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i),4));const g=this.getAttribute("tangent").array,l=[],d=[];for(let D=0;D<i;D++)l[D]=new P,d[D]=new P;const s=new P,p=new P,f=new P,b=new Fr,w=new Fr,m=new Fr,h=new P,y=new P;function S(D,L,K){s.fromArray(e,D*3),p.fromArray(e,L*3),f.fromArray(e,K*3),b.fromArray(c,D*2),w.fromArray(c,L*2),m.fromArray(c,K*2),p.sub(s),f.sub(s),w.sub(b),m.sub(b);const q=1/(w.x*m.y-m.x*w.y);!isFinite(q)||(h.copy(p).multiplyScalar(m.y).addScaledVector(f,-w.y).multiplyScalar(q),y.copy(f).multiplyScalar(w.x).addScaledVector(p,-m.x).multiplyScalar(q),l[D].add(h),l[L].add(h),l[K].add(h),d[D].add(y),d[L].add(y),d[K].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:o.length}]);for(let D=0,L=_.length;D<L;++D){const K=_[D],q=K.start,A=K.count;for(let B=q,I=q+A;B<I;B+=3)S(o[B+0],o[B+1],o[B+2])}const v=new P,M=new P,C=new P,u=new P;function z(D){C.fromArray(a,D*3),u.copy(C);const L=l[D];v.copy(L),v.sub(C.multiplyScalar(C.dot(L))).normalize(),M.crossVectors(u,L);const q=M.dot(d[D])<0?-1:1;g[D*4]=v.x,g[D*4+1]=v.y,g[D*4+2]=v.z,g[D*4+3]=q}for(let D=0,L=_.length;D<L;++D){const K=_[D],q=K.start,A=K.count;for(let B=q,I=q+A;B<I;B+=3)z(o[B+0]),z(o[B+1]),z(o[B+2])}}computeVertexNormals(){const r=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let p=0,f=o.count;p<f;p++)o.setXYZ(p,0,0,0);const e=new P,a=new P,c=new P,i=new P,g=new P,l=new P,d=new P,s=new P;if(r)for(let p=0,f=r.count;p<f;p+=3){const b=r.getX(p+0),w=r.getX(p+1),m=r.getX(p+2);e.fromBufferAttribute(t,b),a.fromBufferAttribute(t,w),c.fromBufferAttribute(t,m),d.subVectors(c,a),s.subVectors(e,a),d.cross(s),i.fromBufferAttribute(o,b),g.fromBufferAttribute(o,w),l.fromBufferAttribute(o,m),i.add(d),g.add(d),l.add(d),o.setXYZ(b,i.x,i.y,i.z),o.setXYZ(w,g.x,g.y,g.z),o.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)e.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),d.subVectors(c,a),s.subVectors(e,a),d.cross(s),o.setXYZ(p+0,d.x,d.y,d.z),o.setXYZ(p+1,d.x,d.y,d.z),o.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),o.needsUpdate=!0}}merge(r,t){if(!(r&&r.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",r);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const o=this.attributes;for(const e in o){if(r.attributes[e]===void 0)continue;const c=o[e].array,i=r.attributes[e],g=i.array,l=i.itemSize*t,d=Math.min(g.length,c.length-l);for(let s=0,p=l;s<d;s++,p++)c[p]=g[s]}return this}normalizeNormals(){const r=this.attributes.normal;for(let t=0,o=r.count;t<o;t++)Xr.fromBufferAttribute(r,t),Xr.normalize(),r.setXYZ(t,Xr.x,Xr.y,Xr.z)}toNonIndexed(){function r(i,g){const l=i.array,d=i.itemSize,s=i.normalized,p=new l.constructor(g.length*d);let f=0,b=0;for(let w=0,m=g.length;w<m;w++){i.isInterleavedBufferAttribute?f=g[w]*i.data.stride+i.offset:f=g[w]*d;for(let h=0;h<d;h++)p[b++]=l[f++]}return new Qt(p,d,s)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ro,o=this.index.array,e=this.attributes;for(const i in e){const g=e[i],l=r(g,o);t.setAttribute(i,l)}const a=this.morphAttributes;for(const i in a){const g=[],l=a[i];for(let d=0,s=l.length;d<s;d++){const p=l[d],f=r(p,o);g.push(f)}t.morphAttributes[i]=g}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let i=0,g=c.length;i<g;i++){const l=c[i];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const r={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),Object.keys(this.userData).length>0&&(r.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const l in g)g[l]!==void 0&&(r[l]=g[l]);return r}r.data={attributes:{}};const t=this.index;t!==null&&(r.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const g in o){const l=o[g];r.data.attributes[g]=l.toJSON(r.data)}const e={};let a=!1;for(const g in this.morphAttributes){const l=this.morphAttributes[g],d=[];for(let s=0,p=l.length;s<p;s++){const f=l[s];d.push(f.toJSON(r.data))}d.length>0&&(e[g]=d,a=!0)}a&&(r.data.morphAttributes=e,r.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(r.data.groups=JSON.parse(JSON.stringify(c)));const i=this.boundingSphere;return i!==null&&(r.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),r}clone(){return new this.constructor().copy(this)}copy(r){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=r.name;const o=r.index;o!==null&&this.setIndex(o.clone(t));const e=r.attributes;for(const l in e){const d=e[l];this.setAttribute(l,d.clone(t))}const a=r.morphAttributes;for(const l in a){const d=[],s=a[l];for(let p=0,f=s.length;p<f;p++)d.push(s[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=r.morphTargetsRelative;const c=r.groups;for(let l=0,d=c.length;l<d;l++){const s=c[l];this.addGroup(s.start,s.count,s.materialIndex)}const i=r.boundingBox;i!==null&&(this.boundingBox=i.clone());const g=r.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=r.drawRange.start,this.drawRange.count=r.drawRange.count,this.userData=r.userData,r.parameters!==void 0&&(this.parameters=Object.assign({},r.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new $r,_e=new Ig,Ji=new hi,zo=new P,Mo=new P,So=new P,Qi=new P,rc=new P,tc=new P,Ga=new P,Va=new P,Ha=new P,Wa=new Fr,ja=new Fr,Xa=new Fr,oc=new P,qa=new P;class Jt extends It{constructor(r=new ro,t=new Ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=r,this.material=t,this.updateMorphTargets()}copy(r,t){return super.copy(r,t),r.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=r.morphTargetInfluences.slice()),r.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},r.morphTargetDictionary)),this.material=r.material,this.geometry=r.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const e=t[o[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=e.length;a<c;a++){const i=e[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}raycast(r,t){const o=this.geometry,e=this.material,a=this.matrixWorld;if(e===void 0||(o.boundingSphere===null&&o.computeBoundingSphere(),Ji.copy(o.boundingSphere),Ji.applyMatrix4(a),r.ray.intersectsSphere(Ji)===!1)||(rl.copy(a).invert(),_e.copy(r.ray).applyMatrix4(rl),o.boundingBox!==null&&_e.intersectsBox(o.boundingBox)===!1))return;let c;const i=o.index,g=o.attributes.position,l=o.morphAttributes.position,d=o.morphTargetsRelative,s=o.attributes.uv,p=o.attributes.uv2,f=o.groups,b=o.drawRange;if(i!==null)if(Array.isArray(e))for(let w=0,m=f.length;w<m;w++){const h=f[w],y=e[h.materialIndex],S=Math.max(h.start,b.start),_=Math.min(i.count,Math.min(h.start+h.count,b.start+b.count));for(let v=S,M=_;v<M;v+=3){const C=i.getX(v),u=i.getX(v+1),z=i.getX(v+2);c=Ya(this,y,r,_e,g,l,d,s,p,C,u,z),c&&(c.faceIndex=Math.floor(v/3),c.face.materialIndex=h.materialIndex,t.push(c))}}else{const w=Math.max(0,b.start),m=Math.min(i.count,b.start+b.count);for(let h=w,y=m;h<y;h+=3){const S=i.getX(h),_=i.getX(h+1),v=i.getX(h+2);c=Ya(this,e,r,_e,g,l,d,s,p,S,_,v),c&&(c.faceIndex=Math.floor(h/3),t.push(c))}}else if(g!==void 0)if(Array.isArray(e))for(let w=0,m=f.length;w<m;w++){const h=f[w],y=e[h.materialIndex],S=Math.max(h.start,b.start),_=Math.min(g.count,Math.min(h.start+h.count,b.start+b.count));for(let v=S,M=_;v<M;v+=3){const C=v,u=v+1,z=v+2;c=Ya(this,y,r,_e,g,l,d,s,p,C,u,z),c&&(c.faceIndex=Math.floor(v/3),c.face.materialIndex=h.materialIndex,t.push(c))}}else{const w=Math.max(0,b.start),m=Math.min(g.count,b.start+b.count);for(let h=w,y=m;h<y;h+=3){const S=h,_=h+1,v=h+2;c=Ya(this,e,r,_e,g,l,d,s,p,S,_,v),c&&(c.faceIndex=Math.floor(h/3),t.push(c))}}}}function kp(n,r,t,o,e,a,c,i){let g;if(r.side===Dt?g=o.intersectTriangle(c,a,e,!0,i):g=o.intersectTriangle(e,a,c,r.side!==He,i),g===null)return null;qa.copy(i),qa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qa);return l<t.near||l>t.far?null:{distance:l,point:qa.clone(),object:n}}function Ya(n,r,t,o,e,a,c,i,g,l,d,s){zo.fromBufferAttribute(e,l),Mo.fromBufferAttribute(e,d),So.fromBufferAttribute(e,s);const p=n.morphTargetInfluences;if(a&&p){Ga.set(0,0,0),Va.set(0,0,0),Ha.set(0,0,0);for(let b=0,w=a.length;b<w;b++){const m=p[b],h=a[b];m!==0&&(Qi.fromBufferAttribute(h,l),rc.fromBufferAttribute(h,d),tc.fromBufferAttribute(h,s),c?(Ga.addScaledVector(Qi,m),Va.addScaledVector(rc,m),Ha.addScaledVector(tc,m)):(Ga.addScaledVector(Qi.sub(zo),m),Va.addScaledVector(rc.sub(Mo),m),Ha.addScaledVector(tc.sub(So),m)))}zo.add(Ga),Mo.add(Va),So.add(Ha)}n.isSkinnedMesh&&(n.boneTransform(l,zo),n.boneTransform(d,Mo),n.boneTransform(s,So));const f=kp(n,r,t,o,zo,Mo,So,oc);if(f){i&&(Wa.fromBufferAttribute(i,l),ja.fromBufferAttribute(i,d),Xa.fromBufferAttribute(i,s),f.uv=so.getUV(oc,zo,Mo,So,Wa,ja,Xa,new Fr)),g&&(Wa.fromBufferAttribute(g,l),ja.fromBufferAttribute(g,d),Xa.fromBufferAttribute(g,s),f.uv2=so.getUV(oc,zo,Mo,So,Wa,ja,Xa,new Fr));const b={a:l,b:d,c:s,normal:new P,materialIndex:0};so.getNormal(zo,Mo,So,b.normal),f.face=b}return f}class Ca extends ro{constructor(r=1,t=1,o=1,e=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:r,height:t,depth:o,widthSegments:e,heightSegments:a,depthSegments:c};const i=this;e=Math.floor(e),a=Math.floor(a),c=Math.floor(c);const g=[],l=[],d=[],s=[];let p=0,f=0;b("z","y","x",-1,-1,o,t,r,c,a,0),b("z","y","x",1,-1,o,t,-r,c,a,1),b("x","z","y",1,1,r,o,t,e,c,2),b("x","z","y",1,-1,r,o,-t,e,c,3),b("x","y","z",1,-1,r,t,o,e,a,4),b("x","y","z",-1,-1,r,t,-o,e,a,5),this.setIndex(g),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(s,2));function b(w,m,h,y,S,_,v,M,C,u,z){const D=_/C,L=v/u,K=_/2,q=v/2,A=M/2,B=C+1,I=u+1;let G=0,j=0;const N=new P;for(let H=0;H<I;H++){const Z=H*L-q;for(let $=0;$<B;$++){const Y=$*D-K;N[w]=Y*y,N[m]=Z*S,N[h]=A,l.push(N.x,N.y,N.z),N[w]=0,N[m]=0,N[h]=M>0?1:-1,d.push(N.x,N.y,N.z),s.push($/C),s.push(1-H/u),G+=1}}for(let H=0;H<u;H++)for(let Z=0;Z<C;Z++){const $=p+Z+B*H,Y=p+Z+B*(H+1),ir=p+(Z+1)+B*(H+1),sr=p+(Z+1)+B*H;g.push($,Y,sr),g.push(Y,ir,sr),j+=6}i.addGroup(f,j,z),f+=j,p+=G}}static fromJSON(r){return new Ca(r.width,r.height,r.depth,r.widthSegments,r.heightSegments,r.depthSegments)}}function qe(n){const r={};for(const t in n){r[t]={};for(const o in n[t]){const e=n[t][o];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)?r[t][o]=e.clone():Array.isArray(e)?r[t][o]=e.slice():r[t][o]=e}}return r}function ot(n){const r={};for(let t=0;t<n.length;t++){const o=qe(n[t]);for(const e in o)r[e]=o[e]}return r}const _p={clone:qe,merge:ot};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class uo extends Ta{constructor(r){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=zp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,r!==void 0&&(r.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(r))}copy(r){return super.copy(r),this.fragmentShader=r.fragmentShader,this.vertexShader=r.vertexShader,this.uniforms=qe(r.uniforms),this.defines=Object.assign({},r.defines),this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.fog=r.fog,this.lights=r.lights,this.clipping=r.clipping,this.extensions=Object.assign({},r.extensions),this.glslVersion=r.glslVersion,this}toJSON(r){const t=super.toJSON(r);t.glslVersion=this.glslVersion,t.uniforms={};for(const e in this.uniforms){const c=this.uniforms[e].value;c&&c.isTexture?t.uniforms[e]={type:"t",value:c.toJSON(r).uuid}:c&&c.isColor?t.uniforms[e]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[e]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[e]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[e]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[e]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[e]={type:"m4",value:c.toArray()}:t.uniforms[e]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const o={};for(const e in this.extensions)this.extensions[e]===!0&&(o[e]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class Bg extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $r,this.projectionMatrix=new $r,this.projectionMatrixInverse=new $r}copy(r,t){return super.copy(r,t),this.matrixWorldInverse.copy(r.matrixWorldInverse),this.projectionMatrix.copy(r.projectionMatrix),this.projectionMatrixInverse.copy(r.projectionMatrixInverse),this}getWorldDirection(r){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return r.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(r){super.updateMatrixWorld(r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(r,t){super.updateWorldMatrix(r,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Bg{constructor(r=50,t=1,o=.1,e=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=r,this.zoom=1,this.near=o,this.far=e,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(r,t){return super.copy(r,t),this.fov=r.fov,this.zoom=r.zoom,this.near=r.near,this.far=r.far,this.focus=r.focus,this.aspect=r.aspect,this.view=r.view===null?null:Object.assign({},r.view),this.filmGauge=r.filmGauge,this.filmOffset=r.filmOffset,this}setFocalLength(r){const t=.5*this.getFilmHeight()/r;this.fov=Vn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const r=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/r}getEffectiveFOV(){return Vn*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(r,t,o,e,a,c){this.aspect=r/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=r,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=e,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const r=this.near;let t=r*Math.tan(Ii*.5*this.fov)/this.zoom,o=2*t,e=this.aspect*o,a=-.5*e;const c=this.view;if(this.view!==null&&this.view.enabled){const g=c.fullWidth,l=c.fullHeight;a+=c.offsetX*e/g,t-=c.offsetY*o/l,e*=c.width/g,o*=c.height/l}const i=this.filmOffset;i!==0&&(a+=r*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+e,t,t-o,r,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(r){const t=super.toJSON(r);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ze=90,Me=1;class Sp extends It{constructor(r,t,o){if(super(),this.type="CubeCamera",o.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=o;const e=new Tt(ze,Me,r,t);e.layers=this.layers,e.up.set(0,-1,0),e.lookAt(new P(1,0,0)),this.add(e);const a=new Tt(ze,Me,r,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new P(-1,0,0)),this.add(a);const c=new Tt(ze,Me,r,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(new P(0,1,0)),this.add(c);const i=new Tt(ze,Me,r,t);i.layers=this.layers,i.up.set(0,0,-1),i.lookAt(new P(0,-1,0)),this.add(i);const g=new Tt(ze,Me,r,t);g.layers=this.layers,g.up.set(0,-1,0),g.lookAt(new P(0,0,1)),this.add(g);const l=new Tt(ze,Me,r,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(r,t){this.parent===null&&this.updateMatrixWorld();const o=this.renderTarget,[e,a,c,i,g,l]=this.children,d=r.getRenderTarget(),s=r.toneMapping,p=r.xr.enabled;r.toneMapping=fo,r.xr.enabled=!1;const f=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,r.setRenderTarget(o,0),r.render(t,e),r.setRenderTarget(o,1),r.render(t,a),r.setRenderTarget(o,2),r.render(t,c),r.setRenderTarget(o,3),r.render(t,i),r.setRenderTarget(o,4),r.render(t,g),o.texture.generateMipmaps=f,r.setRenderTarget(o,5),r.render(t,l),r.setRenderTarget(d),r.toneMapping=s,r.xr.enabled=p,o.texture.needsPMREMUpdate=!0}}class Gg extends Rt{constructor(r,t,o,e,a,c,i,g,l,d){r=r!==void 0?r:[],t=t!==void 0?t:We,super(r,t,o,e,a,c,i,g,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(r){this.image=r}}class Tp extends le{constructor(r,t={}){super(r,r,t),this.isWebGLCubeRenderTarget=!0;const o={width:r,height:r,depth:1},e=[o,o,o,o,o,o];this.texture=new Gg(e,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(r,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},e=new Ca(5,5,5),a=new uo({name:"CubemapFromEquirect",uniforms:qe(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Dt,blending:Po});a.uniforms.tEquirect.value=t;const c=new Jt(e,a),i=t.minFilter;return t.minFilter===bi&&(t.minFilter=St),new Sp(1,10,this).update(r,c),t.minFilter=i,c.geometry.dispose(),c.material.dispose(),this}clear(r,t,o,e){const a=r.getRenderTarget();for(let c=0;c<6;c++)r.setRenderTarget(this,c),r.clear(t,o,e);r.setRenderTarget(a)}}const ec=new P,Cp=new P,Ep=new Lt;class Xo{constructor(r=new P(1,0,0),t=0){this.isPlane=!0,this.normal=r,this.constant=t}set(r,t){return this.normal.copy(r),this.constant=t,this}setComponents(r,t,o,e){return this.normal.set(r,t,o),this.constant=e,this}setFromNormalAndCoplanarPoint(r,t){return this.normal.copy(r),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(r,t,o){const e=ec.subVectors(o,t).cross(Cp.subVectors(r,t)).normalize();return this.setFromNormalAndCoplanarPoint(e,r),this}copy(r){return this.normal.copy(r.normal),this.constant=r.constant,this}normalize(){const r=1/this.normal.length();return this.normal.multiplyScalar(r),this.constant*=r,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(r){return this.normal.dot(r)+this.constant}distanceToSphere(r){return this.distanceToPoint(r.center)-r.radius}projectPoint(r,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(r)).add(r)}intersectLine(r,t){const o=r.delta(ec),e=this.normal.dot(o);if(e===0)return this.distanceToPoint(r.start)===0?t.copy(r.start):null;const a=-(r.start.dot(this.normal)+this.constant)/e;return a<0||a>1?null:t.copy(o).multiplyScalar(a).add(r.start)}intersectsLine(r){const t=this.distanceToPoint(r.start),o=this.distanceToPoint(r.end);return t<0&&o>0||o<0&&t>0}intersectsBox(r){return r.intersectsPlane(this)}intersectsSphere(r){return r.intersectsPlane(this)}coplanarPoint(r){return r.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(r,t){const o=t||Ep.getNormalMatrix(r),e=this.coplanarPoint(ec).applyMatrix4(r),a=this.normal.applyMatrix3(o).normalize();return this.constant=-e.dot(a),this}translate(r){return this.constant-=r.dot(this.normal),this}equals(r){return r.normal.equals(this.normal)&&r.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Se=new hi,Za=new P;class Vg{constructor(r=new Xo,t=new Xo,o=new Xo,e=new Xo,a=new Xo,c=new Xo){this.planes=[r,t,o,e,a,c]}set(r,t,o,e,a,c){const i=this.planes;return i[0].copy(r),i[1].copy(t),i[2].copy(o),i[3].copy(e),i[4].copy(a),i[5].copy(c),this}copy(r){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(r.planes[o]);return this}setFromProjectionMatrix(r){const t=this.planes,o=r.elements,e=o[0],a=o[1],c=o[2],i=o[3],g=o[4],l=o[5],d=o[6],s=o[7],p=o[8],f=o[9],b=o[10],w=o[11],m=o[12],h=o[13],y=o[14],S=o[15];return t[0].setComponents(i-e,s-g,w-p,S-m).normalize(),t[1].setComponents(i+e,s+g,w+p,S+m).normalize(),t[2].setComponents(i+a,s+l,w+f,S+h).normalize(),t[3].setComponents(i-a,s-l,w-f,S-h).normalize(),t[4].setComponents(i-c,s-d,w-b,S-y).normalize(),t[5].setComponents(i+c,s+d,w+b,S+y).normalize(),this}intersectsObject(r){const t=r.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Se.copy(t.boundingSphere).applyMatrix4(r.matrixWorld),this.intersectsSphere(Se)}intersectsSprite(r){return Se.center.set(0,0,0),Se.radius=.7071067811865476,Se.applyMatrix4(r.matrixWorld),this.intersectsSphere(Se)}intersectsSphere(r){const t=this.planes,o=r.center,e=-r.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(o)<e)return!1;return!0}intersectsBox(r){const t=this.planes;for(let o=0;o<6;o++){const e=t[o];if(Za.x=e.normal.x>0?r.max.x:r.min.x,Za.y=e.normal.y>0?r.max.y:r.min.y,Za.z=e.normal.z>0?r.max.z:r.min.z,e.distanceToPoint(Za)<0)return!1}return!0}containsPoint(r){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let n=null,r=!1,t=null,o=null;function e(a,c){t(a,c),o=n.requestAnimationFrame(e)}return{start:function(){r!==!0&&t!==null&&(o=n.requestAnimationFrame(e),r=!0)},stop:function(){n.cancelAnimationFrame(o),r=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ap(n,r){const t=r.isWebGL2,o=new WeakMap;function e(l,d){const s=l.array,p=l.usage,f=n.createBuffer();n.bindBuffer(d,f),n.bufferData(d,s,p),l.onUploadCallback();let b;if(s instanceof Float32Array)b=5126;else if(s instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(s instanceof Int16Array)b=5122;else if(s instanceof Uint32Array)b=5125;else if(s instanceof Int32Array)b=5124;else if(s instanceof Int8Array)b=5120;else if(s instanceof Uint8Array)b=5121;else if(s instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:f,type:b,bytesPerElement:s.BYTES_PER_ELEMENT,version:l.version}}function a(l,d,s){const p=d.array,f=d.updateRange;n.bindBuffer(s,l),f.count===-1?n.bufferSubData(s,0,p):(t?n.bufferSubData(s,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):n.bufferSubData(s,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1)}function c(l){return l.isInterleavedBufferAttribute&&(l=l.data),o.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=o.get(l);d&&(n.deleteBuffer(d.buffer),o.delete(l))}function g(l,d){if(l.isGLBufferAttribute){const p=o.get(l);(!p||p.version<l.version)&&o.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const s=o.get(l);s===void 0?o.set(l,e(l,d)):s.version<l.version&&(a(s.buffer,l,d),s.version=l.version)}return{get:c,remove:i,update:g}}class Xc extends ro{constructor(r=1,t=1,o=1,e=1){super(),this.type="PlaneGeometry",this.parameters={width:r,height:t,widthSegments:o,heightSegments:e};const a=r/2,c=t/2,i=Math.floor(o),g=Math.floor(e),l=i+1,d=g+1,s=r/i,p=t/g,f=[],b=[],w=[],m=[];for(let h=0;h<d;h++){const y=h*p-c;for(let S=0;S<l;S++){const _=S*s-a;b.push(_,-y,0),w.push(0,0,1),m.push(S/i),m.push(1-h/g)}}for(let h=0;h<g;h++)for(let y=0;y<i;y++){const S=y+l*h,_=y+l*(h+1),v=y+1+l*(h+1),M=y+1+l*h;f.push(S,_,M),f.push(_,v,M)}this.setIndex(f),this.setAttribute("position",new Gt(b,3)),this.setAttribute("normal",new Gt(w,3)),this.setAttribute("uv",new Gt(m,2))}static fromJSON(r){return new Xc(r.width,r.height,r.widthSegments,r.heightSegments)}}var Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np="vec3 transformed = vec3( position );",Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Bp=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",aw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ww=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hw=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,uw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,zw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ew=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ww=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,l0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,w0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,x0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,k0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,z0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,M0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,S0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kr={alphamap_fragment:Lp,alphamap_pars_fragment:Dp,alphatest_fragment:Pp,alphatest_pars_fragment:Rp,aomap_fragment:Ip,aomap_pars_fragment:Fp,begin_vertex:Np,beginnormal_vertex:Op,bsdfs:Up,iridescence_fragment:Bp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:jp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:$p,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:rw,emissivemap_fragment:tw,emissivemap_pars_fragment:ow,encodings_fragment:ew,encodings_pars_fragment:aw,envmap_fragment:iw,envmap_common_pars_fragment:cw,envmap_pars_fragment:nw,envmap_pars_vertex:lw,envmap_physical_pars_fragment:vw,envmap_vertex:gw,fog_vertex:dw,fog_pars_vertex:sw,fog_fragment:pw,fog_pars_fragment:ww,gradientmap_pars_fragment:mw,lightmap_fragment:fw,lightmap_pars_fragment:bw,lights_lambert_vertex:hw,lights_pars_begin:uw,lights_toon_fragment:yw,lights_toon_pars_fragment:xw,lights_phong_fragment:kw,lights_phong_pars_fragment:_w,lights_physical_fragment:zw,lights_physical_pars_fragment:Mw,lights_fragment_begin:Sw,lights_fragment_maps:Tw,lights_fragment_end:Cw,logdepthbuf_fragment:Ew,logdepthbuf_pars_fragment:Aw,logdepthbuf_pars_vertex:Lw,logdepthbuf_vertex:Dw,map_fragment:Pw,map_pars_fragment:Rw,map_particle_fragment:Iw,map_particle_pars_fragment:Fw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Ow,morphcolor_vertex:Uw,morphnormal_vertex:Bw,morphtarget_pars_vertex:Gw,morphtarget_vertex:Vw,normal_fragment_begin:Hw,normal_fragment_maps:Ww,normal_pars_fragment:jw,normal_pars_vertex:Xw,normal_vertex:qw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:Zw,clearcoat_normal_fragment_maps:$w,clearcoat_pars_fragment:Kw,iridescence_pars_fragment:Jw,output_fragment:Qw,packing:r0,premultiplied_alpha_fragment:t0,project_vertex:o0,dithering_fragment:e0,dithering_pars_fragment:a0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:l0,shadowmap_vertex:g0,shadowmask_pars_fragment:d0,skinbase_vertex:s0,skinning_pars_vertex:p0,skinning_vertex:w0,skinnormal_vertex:m0,specularmap_fragment:f0,specularmap_pars_fragment:b0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:v0,transmission_pars_fragment:y0,uv_pars_fragment:x0,uv_pars_vertex:k0,uv_vertex:_0,uv2_pars_fragment:z0,uv2_pars_vertex:M0,uv2_vertex:S0,worldpos_vertex:T0,background_vert:C0,background_frag:E0,cube_vert:A0,cube_frag:L0,depth_vert:D0,depth_frag:P0,distanceRGBA_vert:R0,distanceRGBA_frag:I0,equirect_vert:F0,equirect_frag:N0,linedashed_vert:O0,linedashed_frag:U0,meshbasic_vert:B0,meshbasic_frag:G0,meshlambert_vert:V0,meshlambert_frag:H0,meshmatcap_vert:W0,meshmatcap_frag:j0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:Z0,meshphysical_vert:$0,meshphysical_frag:K0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:rm,points_frag:tm,shadow_vert:om,shadow_frag:em,sprite_vert:am,sprite_frag:im},er={common:{diffuse:{value:new Nr(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fr(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Nr(16777215)},opacity:{value:1},center:{value:new Fr(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},Zt={basic:{uniforms:ot([er.common,er.specularmap,er.envmap,er.aomap,er.lightmap,er.fog]),vertexShader:kr.meshbasic_vert,fragmentShader:kr.meshbasic_frag},lambert:{uniforms:ot([er.common,er.specularmap,er.envmap,er.aomap,er.lightmap,er.emissivemap,er.fog,er.lights,{emissive:{value:new Nr(0)}}]),vertexShader:kr.meshlambert_vert,fragmentShader:kr.meshlambert_frag},phong:{uniforms:ot([er.common,er.specularmap,er.envmap,er.aomap,er.lightmap,er.emissivemap,er.bumpmap,er.normalmap,er.displacementmap,er.fog,er.lights,{emissive:{value:new Nr(0)},specular:{value:new Nr(1118481)},shininess:{value:30}}]),vertexShader:kr.meshphong_vert,fragmentShader:kr.meshphong_frag},standard:{uniforms:ot([er.common,er.envmap,er.aomap,er.lightmap,er.emissivemap,er.bumpmap,er.normalmap,er.displacementmap,er.roughnessmap,er.metalnessmap,er.fog,er.lights,{emissive:{value:new Nr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kr.meshphysical_vert,fragmentShader:kr.meshphysical_frag},toon:{uniforms:ot([er.common,er.aomap,er.lightmap,er.emissivemap,er.bumpmap,er.normalmap,er.displacementmap,er.gradientmap,er.fog,er.lights,{emissive:{value:new Nr(0)}}]),vertexShader:kr.meshtoon_vert,fragmentShader:kr.meshtoon_frag},matcap:{uniforms:ot([er.common,er.bumpmap,er.normalmap,er.displacementmap,er.fog,{matcap:{value:null}}]),vertexShader:kr.meshmatcap_vert,fragmentShader:kr.meshmatcap_frag},points:{uniforms:ot([er.points,er.fog]),vertexShader:kr.points_vert,fragmentShader:kr.points_frag},dashed:{uniforms:ot([er.common,er.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kr.linedashed_vert,fragmentShader:kr.linedashed_frag},depth:{uniforms:ot([er.common,er.displacementmap]),vertexShader:kr.depth_vert,fragmentShader:kr.depth_frag},normal:{uniforms:ot([er.common,er.bumpmap,er.normalmap,er.displacementmap,{opacity:{value:1}}]),vertexShader:kr.meshnormal_vert,fragmentShader:kr.meshnormal_frag},sprite:{uniforms:ot([er.sprite,er.fog]),vertexShader:kr.sprite_vert,fragmentShader:kr.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:kr.background_vert,fragmentShader:kr.background_frag},cube:{uniforms:ot([er.envmap,{opacity:{value:1}}]),vertexShader:kr.cube_vert,fragmentShader:kr.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kr.equirect_vert,fragmentShader:kr.equirect_frag},distanceRGBA:{uniforms:ot([er.common,er.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kr.distanceRGBA_vert,fragmentShader:kr.distanceRGBA_frag},shadow:{uniforms:ot([er.lights,er.fog,{color:{value:new Nr(0)},opacity:{value:1}}]),vertexShader:kr.shadow_vert,fragmentShader:kr.shadow_frag}};Zt.physical={uniforms:ot([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fr(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Nr(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fr},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Nr(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Nr(1,1,1)},specularColorMap:{value:null}}]),vertexShader:kr.meshphysical_vert,fragmentShader:kr.meshphysical_frag};function cm(n,r,t,o,e,a){const c=new Nr(0);let i=e===!0?0:1,g,l,d=null,s=0,p=null;function f(w,m){let h=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=r.get(y));const S=n.xr,_=S.getSession&&S.getSession();_&&_.environmentBlendMode==="additive"&&(y=null),y===null?b(c,i):y&&y.isColor&&(b(y,1),h=!0),(n.autoClear||h)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===fi)?(l===void 0&&(l=new Jt(new Ca(1,1,1),new uo({name:"BackgroundCubeMaterial",uniforms:qe(Zt.cube.uniforms),vertexShader:Zt.cube.vertexShader,fragmentShader:Zt.cube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(d!==y||s!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,s=y.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(g===void 0&&(g=new Jt(new Xc(2,2),new uo({name:"BackgroundMaterial",uniforms:qe(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:ua,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),g.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||s!==y.version||p!==n.toneMapping)&&(g.material.needsUpdate=!0,d=y,s=y.version,p=n.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null))}function b(w,m){t.buffers.color.setClear(w.r,w.g,w.b,m,a)}return{getClearColor:function(){return c},setClearColor:function(w,m=1){c.set(w),i=m,b(c,i)},getClearAlpha:function(){return i},setClearAlpha:function(w){i=w,b(c,i)},render:f}}function nm(n,r,t,o){const e=n.getParameter(34921),a=o.isWebGL2?null:r.get("OES_vertex_array_object"),c=o.isWebGL2||a!==null,i={},g=m(null);let l=g,d=!1;function s(A,B,I,G,j){let N=!1;if(c){const H=w(G,I,B);l!==H&&(l=H,f(l.object)),N=h(A,G,I,j),N&&y(A,G,I,j)}else{const H=B.wireframe===!0;(l.geometry!==G.id||l.program!==I.id||l.wireframe!==H)&&(l.geometry=G.id,l.program=I.id,l.wireframe=H,N=!0)}j!==null&&t.update(j,34963),(N||d)&&(d=!1,u(A,B,I,G),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function p(){return o.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function f(A){return o.isWebGL2?n.bindVertexArray(A):a.bindVertexArrayOES(A)}function b(A){return o.isWebGL2?n.deleteVertexArray(A):a.deleteVertexArrayOES(A)}function w(A,B,I){const G=I.wireframe===!0;let j=i[A.id];j===void 0&&(j={},i[A.id]=j);let N=j[B.id];N===void 0&&(N={},j[B.id]=N);let H=N[G];return H===void 0&&(H=m(p()),N[G]=H),H}function m(A){const B=[],I=[],G=[];for(let j=0;j<e;j++)B[j]=0,I[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:I,attributeDivisors:G,object:A,attributes:{},index:null}}function h(A,B,I,G){const j=l.attributes,N=B.attributes;let H=0;const Z=I.getAttributes();for(const $ in Z)if(Z[$].location>=0){const ir=j[$];let sr=N[$];if(sr===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(sr=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(sr=A.instanceColor)),ir===void 0||ir.attribute!==sr||sr&&ir.data!==sr.data)return!0;H++}return l.attributesNum!==H||l.index!==G}function y(A,B,I,G){const j={},N=B.attributes;let H=0;const Z=I.getAttributes();for(const $ in Z)if(Z[$].location>=0){let ir=N[$];ir===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(ir=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(ir=A.instanceColor));const sr={};sr.attribute=ir,ir&&ir.data&&(sr.data=ir.data),j[$]=sr,H++}l.attributes=j,l.attributesNum=H,l.index=G}function S(){const A=l.newAttributes;for(let B=0,I=A.length;B<I;B++)A[B]=0}function _(A){v(A,0)}function v(A,B){const I=l.newAttributes,G=l.enabledAttributes,j=l.attributeDivisors;I[A]=1,G[A]===0&&(n.enableVertexAttribArray(A),G[A]=1),j[A]!==B&&((o.isWebGL2?n:r.get("ANGLE_instanced_arrays"))[o.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,B),j[A]=B)}function M(){const A=l.newAttributes,B=l.enabledAttributes;for(let I=0,G=B.length;I<G;I++)B[I]!==A[I]&&(n.disableVertexAttribArray(I),B[I]=0)}function C(A,B,I,G,j,N){o.isWebGL2===!0&&(I===5124||I===5125)?n.vertexAttribIPointer(A,B,I,j,N):n.vertexAttribPointer(A,B,I,G,j,N)}function u(A,B,I,G){if(o.isWebGL2===!1&&(A.isInstancedMesh||G.isInstancedBufferGeometry)&&r.get("ANGLE_instanced_arrays")===null)return;S();const j=G.attributes,N=I.getAttributes(),H=B.defaultAttributeValues;for(const Z in N){const $=N[Z];if($.location>=0){let Y=j[Z];if(Y===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),Y!==void 0){const ir=Y.normalized,sr=Y.itemSize,W=t.get(Y);if(W===void 0)continue;const jr=W.buffer,_r=W.type,vr=W.bytesPerElement;if(Y.isInterleavedBufferAttribute){const cr=Y.data,Dr=cr.stride,zr=Y.offset;if(cr.isInstancedInterleavedBuffer){for(let wr=0;wr<$.locationSize;wr++)v($.location+wr,cr.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=cr.meshPerAttribute*cr.count)}else for(let wr=0;wr<$.locationSize;wr++)_($.location+wr);n.bindBuffer(34962,jr);for(let wr=0;wr<$.locationSize;wr++)C($.location+wr,sr/$.locationSize,_r,ir,Dr*vr,(zr+sr/$.locationSize*wr)*vr)}else{if(Y.isInstancedBufferAttribute){for(let cr=0;cr<$.locationSize;cr++)v($.location+cr,Y.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let cr=0;cr<$.locationSize;cr++)_($.location+cr);n.bindBuffer(34962,jr);for(let cr=0;cr<$.locationSize;cr++)C($.location+cr,sr/$.locationSize,_r,ir,sr*vr,sr/$.locationSize*cr*vr)}}else if(H!==void 0){const ir=H[Z];if(ir!==void 0)switch(ir.length){case 2:n.vertexAttrib2fv($.location,ir);break;case 3:n.vertexAttrib3fv($.location,ir);break;case 4:n.vertexAttrib4fv($.location,ir);break;default:n.vertexAttrib1fv($.location,ir)}}}}M()}function z(){K();for(const A in i){const B=i[A];for(const I in B){const G=B[I];for(const j in G)b(G[j].object),delete G[j];delete B[I]}delete i[A]}}function D(A){if(i[A.id]===void 0)return;const B=i[A.id];for(const I in B){const G=B[I];for(const j in G)b(G[j].object),delete G[j];delete B[I]}delete i[A.id]}function L(A){for(const B in i){const I=i[B];if(I[A.id]===void 0)continue;const G=I[A.id];for(const j in G)b(G[j].object),delete G[j];delete I[A.id]}}function K(){q(),d=!0,l!==g&&(l=g,f(l.object))}function q(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:s,reset:K,resetDefaultState:q,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:_,disableUnusedAttributes:M}}function lm(n,r,t,o){const e=o.isWebGL2;let a;function c(l){a=l}function i(l,d){n.drawArrays(a,l,d),t.update(d,a,1)}function g(l,d,s){if(s===0)return;let p,f;if(e)p=n,f="drawArraysInstanced";else if(p=r.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](a,l,d,s),t.update(d,a,s)}this.setMode=c,this.render=i,this.renderInstances=g}function gm(n,r,t){let o;function e(){if(o!==void 0)return o;if(r.has("EXT_texture_filter_anisotropic")===!0){const C=r.get("EXT_texture_filter_anisotropic");o=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(C){if(C==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let i=t.precision!==void 0?t.precision:"highp";const g=a(i);g!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",g,"instead."),i=g);const l=c||r.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,s=n.getParameter(34930),p=n.getParameter(35660),f=n.getParameter(3379),b=n.getParameter(34076),w=n.getParameter(34921),m=n.getParameter(36347),h=n.getParameter(36348),y=n.getParameter(36349),S=p>0,_=c||r.has("OES_texture_float"),v=S&&_,M=c?n.getParameter(36183):0;return{isWebGL2:c,drawBuffers:l,getMaxAnisotropy:e,getMaxPrecision:a,precision:i,logarithmicDepthBuffer:d,maxTextures:s,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:_,floatVertexTextures:v,maxSamples:M}}function dm(n){const r=this;let t=null,o=0,e=!1,a=!1;const c=new Xo,i=new Lt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(s,p,f){const b=s.length!==0||p||o!==0||e;return e=p,t=d(s,f,0),o=s.length,b},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1,l()},this.setState=function(s,p,f){const b=s.clippingPlanes,w=s.clipIntersection,m=s.clipShadows,h=n.get(s);if(!e||b===null||b.length===0||a&&!m)a?d(null):l();else{const y=a?0:o,S=y*4;let _=h.clippingState||null;g.value=_,_=d(b,p,S,f);for(let v=0;v!==S;++v)_[v]=t[v];h.clippingState=_,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=y}};function l(){g.value!==t&&(g.value=t,g.needsUpdate=o>0),r.numPlanes=o,r.numIntersection=0}function d(s,p,f,b){const w=s!==null?s.length:0;let m=null;if(w!==0){if(m=g.value,b!==!0||m===null){const h=f+w*4,y=p.matrixWorldInverse;i.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,_=f;S!==w;++S,_+=4)c.copy(s[S]).applyMatrix4(y,i),c.normal.toArray(m,_),m[_+3]=c.constant}g.value=m,g.needsUpdate=!0}return r.numPlanes=w,r.numIntersection=0,m}}function sm(n){let r=new WeakMap;function t(c,i){return i===kc?c.mapping=We:i===_c&&(c.mapping=je),c}function o(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const i=c.mapping;if(i===kc||i===_c)if(r.has(c)){const g=r.get(c).texture;return t(g,c.mapping)}else{const g=c.image;if(g&&g.height>0){const l=new Tp(g.height/2);return l.fromEquirectangularTexture(n,c),r.set(c,l),c.addEventListener("dispose",e),t(l.texture,c.mapping)}else return null}}return c}function e(c){const i=c.target;i.removeEventListener("dispose",e);const g=r.get(i);g!==void 0&&(r.delete(i),g.dispose())}function a(){r=new WeakMap}return{get:o,dispose:a}}class pm extends Bg{constructor(r=-1,t=1,o=1,e=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=r,this.right=t,this.top=o,this.bottom=e,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(r,t){return super.copy(r,t),this.left=r.left,this.right=r.right,this.top=r.top,this.bottom=r.bottom,this.near=r.near,this.far=r.far,this.zoom=r.zoom,this.view=r.view===null?null:Object.assign({},r.view),this}setViewOffset(r,t,o,e,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=r,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=e,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const r=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let a=o-r,c=o+r,i=e+t,g=e-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,c=a+l*this.view.width,i-=d*this.view.offsetY,g=i-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,i,g,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(r){const t=super.toJSON(r);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Le=4,tl=[.125,.215,.35,.446,.526,.582],Zo=20,ac=new pm,ol=new Nr;let ic=null;const qo=(1+Math.sqrt(5))/2,Te=1/qo,el=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,qo,Te),new P(0,qo,-Te),new P(Te,0,qo),new P(-Te,0,qo),new P(qo,Te,0),new P(-qo,Te,0)];class al{constructor(r){this._renderer=r,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(r,t=0,o=.1,e=100){ic=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(r,o,e,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(r,t=null){return this._fromTexture(r,t)}fromCubemap(r,t=null){return this._fromTexture(r,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(r){this._lodMax=Math.floor(Math.log2(r)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let r=0;r<this._lodPlanes.length;r++)this._lodPlanes[r].dispose()}_cleanup(r){this._renderer.setRenderTarget(ic),r.scissorTest=!1,$a(r,0,0,r.width,r.height)}_fromTexture(r,t){r.mapping===We||r.mapping===je?this._setSize(r.image.length===0?16:r.image[0].width||r.image[0].image.width):this._setSize(r.image.width/4),ic=this._renderer.getRenderTarget();const o=t||this._allocateTargets();return this._textureToCubeUV(r,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const r=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:St,minFilter:St,generateMipmaps:!1,type:va,format:Kt,encoding:ne,depthBuffer:!1},e=il(r,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(r,t,o);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(a)),this._blurMaterial=mm(a,r,t)}return e}_compileMaterial(r){const t=new Jt(this._lodPlanes[0],r);this._renderer.compile(t,ac)}_sceneToCubeUV(r,t,o,e){const i=new Tt(90,1,t,o),g=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,s=d.autoClear,p=d.toneMapping;d.getClearColor(ol),d.toneMapping=fo,d.autoClear=!1;const f=new Ng({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),b=new Jt(new Ca,f);let w=!1;const m=r.background;m?m.isColor&&(f.color.copy(m),r.background=null,w=!0):(f.color.copy(ol),w=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(i.up.set(0,g[h],0),i.lookAt(l[h],0,0)):y===1?(i.up.set(0,0,g[h]),i.lookAt(0,l[h],0)):(i.up.set(0,g[h],0),i.lookAt(0,0,l[h]));const S=this._cubeSize;$a(e,y*S,h>2?S:0,S,S),d.setRenderTarget(e),w&&d.render(b,i),d.render(r,i)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=p,d.autoClear=s,r.background=m}_textureToCubeUV(r,t){const o=this._renderer,e=r.mapping===We||r.mapping===je;e?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=r.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const a=e?this._cubemapMaterial:this._equirectMaterial,c=new Jt(this._lodPlanes[0],a),i=a.uniforms;i.envMap.value=r;const g=this._cubeSize;$a(t,0,0,3*g,2*g),o.setRenderTarget(t),o.render(c,ac)}_applyPMREM(r){const t=this._renderer,o=t.autoClear;t.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const a=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),c=el[(e-1)%el.length];this._blur(r,e-1,e,a,c)}t.autoClear=o}_blur(r,t,o,e,a){const c=this._pingPongRenderTarget;this._halfBlur(r,c,t,o,e,"latitudinal",a),this._halfBlur(c,r,o,o,e,"longitudinal",a)}_halfBlur(r,t,o,e,a,c,i){const g=this._renderer,l=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,s=new Jt(this._lodPlanes[e],l),p=l.uniforms,f=this._sizeLods[o]-1,b=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Zo-1),w=a/b,m=isFinite(a)?1+Math.floor(d*w):Zo;m>Zo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zo}`);const h=[];let y=0;for(let C=0;C<Zo;++C){const u=C/w,z=Math.exp(-u*u/2);h.push(z),C===0?y+=z:C<m&&(y+=2*z)}for(let C=0;C<h.length;C++)h[C]=h[C]/y;p.envMap.value=r.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=c==="latitudinal",i&&(p.poleAxis.value=i);const{_lodMax:S}=this;p.dTheta.value=b,p.mipInt.value=S-o;const _=this._sizeLods[e],v=3*_*(e>S-Le?e-S+Le:0),M=4*(this._cubeSize-_);$a(t,v,M,3*_,2*_),g.setRenderTarget(t),g.render(s,ac)}}function wm(n){const r=[],t=[],o=[];let e=n;const a=n-Le+1+tl.length;for(let c=0;c<a;c++){const i=Math.pow(2,e);t.push(i);let g=1/i;c>n-Le?g=tl[c-n+Le-1]:c===0&&(g=0),o.push(g);const l=1/(i-2),d=-l,s=1+l,p=[d,d,s,d,s,s,d,d,s,s,d,s],f=6,b=6,w=3,m=2,h=1,y=new Float32Array(w*b*f),S=new Float32Array(m*b*f),_=new Float32Array(h*b*f);for(let M=0;M<f;M++){const C=M%3*2/3-1,u=M>2?0:-1,z=[C,u,0,C+2/3,u,0,C+2/3,u+1,0,C,u,0,C+2/3,u+1,0,C,u+1,0];y.set(z,w*b*M),S.set(p,m*b*M);const D=[M,M,M,M,M,M];_.set(D,h*b*M)}const v=new ro;v.setAttribute("position",new Qt(y,w)),v.setAttribute("uv",new Qt(S,m)),v.setAttribute("faceIndex",new Qt(_,h)),r.push(v),e>Le&&e--}return{lodPlanes:r,sizeLods:t,sigmas:o}}function il(n,r,t){const o=new le(n,r,t);return o.texture.mapping=fi,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function $a(n,r,t,o,e){n.viewport.set(r,t,o,e),n.scissor.set(r,t,o,e)}function mm(n,r,t){const o=new Float32Array(Zo),e=new P(0,1,0);return new uo({name:"SphericalGaussianBlur",defines:{n:Zo,CUBEUV_TEXEL_WIDTH:1/r,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Po,depthTest:!1,depthWrite:!1})}function cl(){return new uo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Po,depthTest:!1,depthWrite:!1})}function nl(){return new uo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Po,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fm(n){let r=new WeakMap,t=null;function o(i){if(i&&i.isTexture){const g=i.mapping,l=g===kc||g===_c,d=g===We||g===je;if(l||d)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let s=r.get(i);return t===null&&(t=new al(n)),s=l?t.fromEquirectangular(i,s):t.fromCubemap(i,s),r.set(i,s),s.texture}else{if(r.has(i))return r.get(i).texture;{const s=i.image;if(l&&s&&s.height>0||d&&s&&e(s)){t===null&&(t=new al(n));const p=l?t.fromEquirectangular(i):t.fromCubemap(i);return r.set(i,p),i.addEventListener("dispose",a),p.texture}else return null}}}return i}function e(i){let g=0;const l=6;for(let d=0;d<l;d++)i[d]!==void 0&&g++;return g===l}function a(i){const g=i.target;g.removeEventListener("dispose",a);const l=r.get(g);l!==void 0&&(r.delete(g),l.dispose())}function c(){r=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function bm(n){const r={};function t(o){if(r[o]!==void 0)return r[o];let e;switch(o){case"WEBGL_depth_texture":e=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":e=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":e=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":e=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:e=n.getExtension(o)}return r[o]=e,e}return{has:function(o){return t(o)!==null},init:function(o){o.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(o){const e=t(o);return e===null&&console.warn("THREE.WebGLRenderer: "+o+" extension not supported."),e}}}function hm(n,r,t,o){const e={},a=new WeakMap;function c(s){const p=s.target;p.index!==null&&r.remove(p.index);for(const b in p.attributes)r.remove(p.attributes[b]);p.removeEventListener("dispose",c),delete e[p.id];const f=a.get(p);f&&(r.remove(f),a.delete(p)),o.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function i(s,p){return e[p.id]===!0||(p.addEventListener("dispose",c),e[p.id]=!0,t.memory.geometries++),p}function g(s){const p=s.attributes;for(const b in p)r.update(p[b],34962);const f=s.morphAttributes;for(const b in f){const w=f[b];for(let m=0,h=w.length;m<h;m++)r.update(w[m],34962)}}function l(s){const p=[],f=s.index,b=s.attributes.position;let w=0;if(f!==null){const y=f.array;w=f.version;for(let S=0,_=y.length;S<_;S+=3){const v=y[S+0],M=y[S+1],C=y[S+2];p.push(v,M,M,C,C,v)}}else{const y=b.array;w=b.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const v=S+0,M=S+1,C=S+2;p.push(v,M,M,C,C,v)}}const m=new(Ag(p)?Ug:Og)(p,1);m.version=w;const h=a.get(s);h&&r.remove(h),a.set(s,m)}function d(s){const p=a.get(s);if(p){const f=s.index;f!==null&&p.version<f.version&&l(s)}else l(s);return a.get(s)}return{get:i,update:g,getWireframeAttribute:d}}function um(n,r,t,o){const e=o.isWebGL2;let a;function c(p){a=p}let i,g;function l(p){i=p.type,g=p.bytesPerElement}function d(p,f){n.drawElements(a,f,i,p*g),t.update(f,a,1)}function s(p,f,b){if(b===0)return;let w,m;if(e)w=n,m="drawElementsInstanced";else if(w=r.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[m](a,f,i,p*g,b),t.update(f,a,b)}this.setMode=c,this.setIndex=l,this.render=d,this.renderInstances=s}function vm(n){const r={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(a,c,i){switch(t.calls++,c){case 4:t.triangles+=i*(a/3);break;case 1:t.lines+=i*(a/2);break;case 3:t.lines+=i*(a-1);break;case 2:t.lines+=i*a;break;case 0:t.points+=i*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function e(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:r,render:t,programs:null,autoReset:!0,reset:e,update:o}}function ym(n,r){return n[0]-r[0]}function xm(n,r){return Math.abs(r[1])-Math.abs(n[1])}function cc(n,r){let t=1;const o=r.isInterleavedBufferAttribute?r.data.array:r.array;o instanceof Int8Array?t=127:o instanceof Uint8Array?t=255:o instanceof Uint16Array?t=65535:o instanceof Int16Array?t=32767:o instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",o),n.divideScalar(t)}function km(n,r,t){const o={},e=new Float32Array(8),a=new WeakMap,c=new Zr,i=[];for(let l=0;l<8;l++)i[l]=[l,0];function g(l,d,s,p){const f=l.morphTargetInfluences;if(r.isWebGL2===!0){const w=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=w!==void 0?w.length:0;let h=a.get(d);if(h===void 0||h.count!==m){let I=function(){A.dispose(),a.delete(d),d.removeEventListener("dispose",I)};var b=I;h!==void 0&&h.texture.dispose();const _=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],u=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;_===!0&&(D=1),v===!0&&(D=2),M===!0&&(D=3);let L=d.attributes.position.count*D,K=1;L>r.maxTextureSize&&(K=Math.ceil(L/r.maxTextureSize),L=r.maxTextureSize);const q=new Float32Array(L*K*4*m),A=new Rg(q,L,K,m);A.type=Jo,A.needsUpdate=!0;const B=D*4;for(let G=0;G<m;G++){const j=C[G],N=u[G],H=z[G],Z=L*K*4*G;for(let $=0;$<j.count;$++){const Y=$*B;_===!0&&(c.fromBufferAttribute(j,$),j.normalized===!0&&cc(c,j),q[Z+Y+0]=c.x,q[Z+Y+1]=c.y,q[Z+Y+2]=c.z,q[Z+Y+3]=0),v===!0&&(c.fromBufferAttribute(N,$),N.normalized===!0&&cc(c,N),q[Z+Y+4]=c.x,q[Z+Y+5]=c.y,q[Z+Y+6]=c.z,q[Z+Y+7]=0),M===!0&&(c.fromBufferAttribute(H,$),H.normalized===!0&&cc(c,H),q[Z+Y+8]=c.x,q[Z+Y+9]=c.y,q[Z+Y+10]=c.z,q[Z+Y+11]=H.itemSize===4?c.w:1)}}h={count:m,texture:A,size:new Fr(L,K)},a.set(d,h),d.addEventListener("dispose",I)}let y=0;for(let _=0;_<f.length;_++)y+=f[_];const S=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(n,"morphTargetBaseInfluence",S),p.getUniforms().setValue(n,"morphTargetInfluences",f),p.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const w=f===void 0?0:f.length;let m=o[d.id];if(m===void 0||m.length!==w){m=[];for(let v=0;v<w;v++)m[v]=[v,0];o[d.id]=m}for(let v=0;v<w;v++){const M=m[v];M[0]=v,M[1]=f[v]}m.sort(xm);for(let v=0;v<8;v++)v<w&&m[v][1]?(i[v][0]=m[v][0],i[v][1]=m[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(ym);const h=d.morphAttributes.position,y=d.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const M=i[v],C=M[0],u=M[1];C!==Number.MAX_SAFE_INTEGER&&u?(h&&d.getAttribute("morphTarget"+v)!==h[C]&&d.setAttribute("morphTarget"+v,h[C]),y&&d.getAttribute("morphNormal"+v)!==y[C]&&d.setAttribute("morphNormal"+v,y[C]),e[v]=u,S+=u):(h&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),y&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),e[v]=0)}const _=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(n,"morphTargetBaseInfluence",_),p.getUniforms().setValue(n,"morphTargetInfluences",e)}}return{update:g}}function _m(n,r,t,o){let e=new WeakMap;function a(g){const l=o.render.frame,d=g.geometry,s=r.get(g,d);return e.get(s)!==l&&(r.update(s),e.set(s,l)),g.isInstancedMesh&&(g.hasEventListener("dispose",i)===!1&&g.addEventListener("dispose",i),t.update(g.instanceMatrix,34962),g.instanceColor!==null&&t.update(g.instanceColor,34962)),s}function c(){e=new WeakMap}function i(g){const l=g.target;l.removeEventListener("dispose",i),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:c}}const Wg=new Rt,jg=new Rg,Xg=new pp,qg=new Gg,ll=[],gl=[],dl=new Float32Array(16),sl=new Float32Array(9),pl=new Float32Array(4);function Ze(n,r,t){const o=n[0];if(o<=0||o>0)return n;const e=r*t;let a=ll[e];if(a===void 0&&(a=new Float32Array(e),ll[e]=a),r!==0){o.toArray(a,0);for(let c=1,i=0;c!==r;++c)i+=t,n[c].toArray(a,i)}return a}function lt(n,r){if(n.length!==r.length)return!1;for(let t=0,o=n.length;t<o;t++)if(n[t]!==r[t])return!1;return!0}function gt(n,r){for(let t=0,o=r.length;t<o;t++)n[t]=r[t]}function ui(n,r){let t=gl[r];t===void 0&&(t=new Int32Array(r),gl[r]=t);for(let o=0;o!==r;++o)t[o]=n.allocateTextureUnit();return t}function zm(n,r){const t=this.cache;t[0]!==r&&(n.uniform1f(this.addr,r),t[0]=r)}function Mm(n,r){const t=this.cache;if(r.x!==void 0)(t[0]!==r.x||t[1]!==r.y)&&(n.uniform2f(this.addr,r.x,r.y),t[0]=r.x,t[1]=r.y);else{if(lt(t,r))return;n.uniform2fv(this.addr,r),gt(t,r)}}function Sm(n,r){const t=this.cache;if(r.x!==void 0)(t[0]!==r.x||t[1]!==r.y||t[2]!==r.z)&&(n.uniform3f(this.addr,r.x,r.y,r.z),t[0]=r.x,t[1]=r.y,t[2]=r.z);else if(r.r!==void 0)(t[0]!==r.r||t[1]!==r.g||t[2]!==r.b)&&(n.uniform3f(this.addr,r.r,r.g,r.b),t[0]=r.r,t[1]=r.g,t[2]=r.b);else{if(lt(t,r))return;n.uniform3fv(this.addr,r),gt(t,r)}}function Tm(n,r){const t=this.cache;if(r.x!==void 0)(t[0]!==r.x||t[1]!==r.y||t[2]!==r.z||t[3]!==r.w)&&(n.uniform4f(this.addr,r.x,r.y,r.z,r.w),t[0]=r.x,t[1]=r.y,t[2]=r.z,t[3]=r.w);else{if(lt(t,r))return;n.uniform4fv(this.addr,r),gt(t,r)}}function Cm(n,r){const t=this.cache,o=r.elements;if(o===void 0){if(lt(t,r))return;n.uniformMatrix2fv(this.addr,!1,r),gt(t,r)}else{if(lt(t,o))return;pl.set(o),n.uniformMatrix2fv(this.addr,!1,pl),gt(t,o)}}function Em(n,r){const t=this.cache,o=r.elements;if(o===void 0){if(lt(t,r))return;n.uniformMatrix3fv(this.addr,!1,r),gt(t,r)}else{if(lt(t,o))return;sl.set(o),n.uniformMatrix3fv(this.addr,!1,sl),gt(t,o)}}function Am(n,r){const t=this.cache,o=r.elements;if(o===void 0){if(lt(t,r))return;n.uniformMatrix4fv(this.addr,!1,r),gt(t,r)}else{if(lt(t,o))return;dl.set(o),n.uniformMatrix4fv(this.addr,!1,dl),gt(t,o)}}function Lm(n,r){const t=this.cache;t[0]!==r&&(n.uniform1i(this.addr,r),t[0]=r)}function Dm(n,r){const t=this.cache;lt(t,r)||(n.uniform2iv(this.addr,r),gt(t,r))}function Pm(n,r){const t=this.cache;lt(t,r)||(n.uniform3iv(this.addr,r),gt(t,r))}function Rm(n,r){const t=this.cache;lt(t,r)||(n.uniform4iv(this.addr,r),gt(t,r))}function Im(n,r){const t=this.cache;t[0]!==r&&(n.uniform1ui(this.addr,r),t[0]=r)}function Fm(n,r){const t=this.cache;lt(t,r)||(n.uniform2uiv(this.addr,r),gt(t,r))}function Nm(n,r){const t=this.cache;lt(t,r)||(n.uniform3uiv(this.addr,r),gt(t,r))}function Om(n,r){const t=this.cache;lt(t,r)||(n.uniform4uiv(this.addr,r),gt(t,r))}function Um(n,r,t){const o=this.cache,e=t.allocateTextureUnit();o[0]!==e&&(n.uniform1i(this.addr,e),o[0]=e),t.setTexture2D(r||Wg,e)}function Bm(n,r,t){const o=this.cache,e=t.allocateTextureUnit();o[0]!==e&&(n.uniform1i(this.addr,e),o[0]=e),t.setTexture3D(r||Xg,e)}function Gm(n,r,t){const o=this.cache,e=t.allocateTextureUnit();o[0]!==e&&(n.uniform1i(this.addr,e),o[0]=e),t.setTextureCube(r||qg,e)}function Vm(n,r,t){const o=this.cache,e=t.allocateTextureUnit();o[0]!==e&&(n.uniform1i(this.addr,e),o[0]=e),t.setTexture2DArray(r||jg,e)}function Hm(n){switch(n){case 5126:return zm;case 35664:return Mm;case 35665:return Sm;case 35666:return Tm;case 35674:return Cm;case 35675:return Em;case 35676:return Am;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Pm;case 35669:case 35673:return Rm;case 5125:return Im;case 36294:return Fm;case 36295:return Nm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Wm(n,r){n.uniform1fv(this.addr,r)}function jm(n,r){const t=Ze(r,this.size,2);n.uniform2fv(this.addr,t)}function Xm(n,r){const t=Ze(r,this.size,3);n.uniform3fv(this.addr,t)}function qm(n,r){const t=Ze(r,this.size,4);n.uniform4fv(this.addr,t)}function Ym(n,r){const t=Ze(r,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zm(n,r){const t=Ze(r,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $m(n,r){const t=Ze(r,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Km(n,r){n.uniform1iv(this.addr,r)}function Jm(n,r){n.uniform2iv(this.addr,r)}function Qm(n,r){n.uniform3iv(this.addr,r)}function rf(n,r){n.uniform4iv(this.addr,r)}function tf(n,r){n.uniform1uiv(this.addr,r)}function of(n,r){n.uniform2uiv(this.addr,r)}function ef(n,r){n.uniform3uiv(this.addr,r)}function af(n,r){n.uniform4uiv(this.addr,r)}function cf(n,r,t){const o=r.length,e=ui(t,o);n.uniform1iv(this.addr,e);for(let a=0;a!==o;++a)t.setTexture2D(r[a]||Wg,e[a])}function nf(n,r,t){const o=r.length,e=ui(t,o);n.uniform1iv(this.addr,e);for(let a=0;a!==o;++a)t.setTexture3D(r[a]||Xg,e[a])}function lf(n,r,t){const o=r.length,e=ui(t,o);n.uniform1iv(this.addr,e);for(let a=0;a!==o;++a)t.setTextureCube(r[a]||qg,e[a])}function gf(n,r,t){const o=r.length,e=ui(t,o);n.uniform1iv(this.addr,e);for(let a=0;a!==o;++a)t.setTexture2DArray(r[a]||jg,e[a])}function df(n){switch(n){case 5126:return Wm;case 35664:return jm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return rf;case 5125:return tf;case 36294:return of;case 36295:return ef;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return gf}}class sf{constructor(r,t,o){this.id=r,this.addr=o,this.cache=[],this.setValue=Hm(t.type)}}class pf{constructor(r,t,o){this.id=r,this.addr=o,this.cache=[],this.size=t.size,this.setValue=df(t.type)}}class wf{constructor(r){this.id=r,this.seq=[],this.map={}}setValue(r,t,o){const e=this.seq;for(let a=0,c=e.length;a!==c;++a){const i=e[a];i.setValue(r,t[i.id],o)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function wl(n,r){n.seq.push(r),n.map[r.id]=r}function mf(n,r,t){const o=n.name,e=o.length;for(nc.lastIndex=0;;){const a=nc.exec(o),c=nc.lastIndex;let i=a[1];const g=a[2]==="]",l=a[3];if(g&&(i=i|0),l===void 0||l==="["&&c+2===e){wl(t,l===void 0?new sf(i,n,r):new pf(i,n,r));break}else{let s=t.map[i];s===void 0&&(s=new wf(i),wl(t,s)),t=s}}}class ti{constructor(r,t){this.seq=[],this.map={};const o=r.getProgramParameter(t,35718);for(let e=0;e<o;++e){const a=r.getActiveUniform(t,e),c=r.getUniformLocation(t,a.name);mf(a,c,this)}}setValue(r,t,o,e){const a=this.map[t];a!==void 0&&a.setValue(r,o,e)}setOptional(r,t,o){const e=t[o];e!==void 0&&this.setValue(r,o,e)}static upload(r,t,o,e){for(let a=0,c=t.length;a!==c;++a){const i=t[a],g=o[i.id];g.needsUpdate!==!1&&i.setValue(r,g.value,e)}}static seqWithValue(r,t){const o=[];for(let e=0,a=r.length;e!==a;++e){const c=r[e];c.id in t&&o.push(c)}return o}}function ml(n,r,t){const o=n.createShader(r);return n.shaderSource(o,t),n.compileShader(o),o}let ff=0;function bf(n,r){const t=n.split(`
`),o=[],e=Math.max(r-6,0),a=Math.min(r+6,t.length);for(let c=e;c<a;c++){const i=c+1;o.push(`${i===r?">":" "} ${i}: ${t[c]}`)}return o.join(`
`)}function hf(n){switch(n){case ne:return["Linear","( value )"];case Br:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function fl(n,r,t){const o=n.getShaderParameter(r,35713),e=n.getShaderInfoLog(r).trim();if(o&&e==="")return"";const a=/ERROR: 0:(\d+)/.exec(e);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+e+`

`+bf(n.getShaderSource(r),c)}else return e}function uf(n,r){const t=hf(r);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vf(n,r){let t;switch(r){case Os:t="Linear";break;case Us:t="Reinhard";break;case Bs:t="OptimizedCineon";break;case Gs:t="ACESFilmic";break;case Vs:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",r),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yf(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ia).join(`
`)}function xf(n){const r=[];for(const t in n){const o=n[t];o!==!1&&r.push("#define "+t+" "+o)}return r.join(`
`)}function kf(n,r){const t={},o=n.getProgramParameter(r,35721);for(let e=0;e<o;e++){const a=n.getActiveAttrib(r,e),c=a.name;let i=1;a.type===35674&&(i=2),a.type===35675&&(i=3),a.type===35676&&(i=4),t[c]={type:a.type,location:n.getAttribLocation(r,c),locationSize:i}}return t}function ia(n){return n!==""}function bl(n,r){return n.replace(/NUM_DIR_LIGHTS/g,r.numDirLights).replace(/NUM_SPOT_LIGHTS/g,r.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,r.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,r.numPointLights).replace(/NUM_HEMI_LIGHTS/g,r.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,r.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,r.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,r.numPointLightShadows)}function hl(n,r){return n.replace(/NUM_CLIPPING_PLANES/g,r.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,r.numClippingPlanes-r.numClipIntersection)}const _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(_f,zf)}function zf(n,r){const t=kr[r];if(t===void 0)throw new Error("Can not resolve #include <"+r+">");return Cc(t)}const Mf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(n){return n.replace(Sf,Yg).replace(Mf,Tf)}function Tf(n,r,t,o){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Yg(n,r,t,o)}function Yg(n,r,t,o){let e="";for(let a=parseInt(r);a<parseInt(t);a++)e+=o.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return e}function vl(n){let r="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?r+=`
#define HIGH_PRECISION`:n.precision==="mediump"?r+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(r+=`
#define LOW_PRECISION`),r}function Cf(n){let r="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zg?r="SHADOWMAP_TYPE_PCF":n.shadowMapType===fs?r="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===aa&&(r="SHADOWMAP_TYPE_VSM"),r}function Ef(n){let r="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case We:case je:r="ENVMAP_TYPE_CUBE";break;case fi:r="ENVMAP_TYPE_CUBE_UV";break}return r}function Af(n){let r="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case je:r="ENVMAP_MODE_REFRACTION";break}return r}function Lf(n){let r="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tg:r="ENVMAP_BLENDING_MULTIPLY";break;case Fs:r="ENVMAP_BLENDING_MIX";break;case Ns:r="ENVMAP_BLENDING_ADD";break}return r}function Df(n){const r=n.envMapCubeUVHeight;if(r===null)return null;const t=Math.log2(r)-2,o=1/r;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:o,maxMip:t}}function Pf(n,r,t,o){const e=n.getContext(),a=t.defines;let c=t.vertexShader,i=t.fragmentShader;const g=Cf(t),l=Ef(t),d=Af(t),s=Lf(t),p=Df(t),f=t.isWebGL2?"":yf(t),b=xf(a),w=e.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[b].filter(ia).join(`
`),m.length>0&&(m+=`
`),h=[f,b].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(m=[vl(t),"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[f,vl(t),"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+s:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fo?"#define TONE_MAPPING":"",t.toneMapping!==fo?kr.tonemapping_pars_fragment:"",t.toneMapping!==fo?vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kr.encodings_pars_fragment,uf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),c=Cc(c),c=bl(c,t),c=hl(c,t),i=Cc(i),i=bl(i,t),i=hl(i,t),c=ul(c),i=ul(i),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Gn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+m+c,_=y+h+i,v=ml(e,35633,S),M=ml(e,35632,_);if(e.attachShader(w,v),e.attachShader(w,M),t.index0AttributeName!==void 0?e.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&e.bindAttribLocation(w,0,"position"),e.linkProgram(w),n.debug.checkShaderErrors){const z=e.getProgramInfoLog(w).trim(),D=e.getShaderInfoLog(v).trim(),L=e.getShaderInfoLog(M).trim();let K=!0,q=!0;if(e.getProgramParameter(w,35714)===!1){K=!1;const A=fl(e,v,"vertex"),B=fl(e,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(w,35715)+`

Program Info Log: `+z+`
`+A+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||L==="")&&(q=!1);q&&(this.diagnostics={runnable:K,programLog:z,vertexShader:{log:D,prefix:m},fragmentShader:{log:L,prefix:h}})}e.deleteShader(v),e.deleteShader(M);let C;this.getUniforms=function(){return C===void 0&&(C=new ti(e,w)),C};let u;return this.getAttributes=function(){return u===void 0&&(u=kf(e,w)),u},this.destroy=function(){o.releaseStatesOfProgram(this),e.deleteProgram(w),this.program=void 0},this.name=t.shaderName,this.id=ff++,this.cacheKey=r,this.usedTimes=1,this.program=w,this.vertexShader=v,this.fragmentShader=M,this}let Rf=0;class If{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(r){const t=r.vertexShader,o=r.fragmentShader,e=this._getShaderStage(t),a=this._getShaderStage(o),c=this._getShaderCacheForMaterial(r);return c.has(e)===!1&&(c.add(e),e.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(r){const t=this.materialCache.get(r);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(r),this}getVertexShaderID(r){return this._getShaderStage(r.vertexShader).id}getFragmentShaderID(r){return this._getShaderStage(r.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(r){const t=this.materialCache;return t.has(r)===!1&&t.set(r,new Set),t.get(r)}_getShaderStage(r){const t=this.shaderCache;if(t.has(r)===!1){const o=new Ff(r);t.set(r,o)}return t.get(r)}}class Ff{constructor(r){this.id=Rf++,this.code=r,this.usedTimes=0}}function Nf(n,r,t,o,e,a,c){const i=new Fg,g=new If,l=[],d=e.isWebGL2,s=e.logarithmicDepthBuffer,p=e.vertexTextures;let f=e.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(u,z,D,L,K){const q=L.fog,A=K.geometry,B=u.isMeshStandardMaterial?L.environment:null,I=(u.isMeshStandardMaterial?t:r).get(u.envMap||B),G=!!I&&I.mapping===fi?I.image.height:null,j=b[u.type];u.precision!==null&&(f=e.getMaxPrecision(u.precision),f!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",f,"instead."));const N=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,H=N!==void 0?N.length:0;let Z=0;A.morphAttributes.position!==void 0&&(Z=1),A.morphAttributes.normal!==void 0&&(Z=2),A.morphAttributes.color!==void 0&&(Z=3);let $,Y,ir,sr;if(j){const Dr=Zt[j];$=Dr.vertexShader,Y=Dr.fragmentShader}else $=u.vertexShader,Y=u.fragmentShader,g.update(u),ir=g.getVertexShaderID(u),sr=g.getFragmentShaderID(u);const W=n.getRenderTarget(),jr=u.alphaTest>0,_r=u.clearcoat>0,vr=u.iridescence>0;return{isWebGL2:d,shaderID:j,shaderName:u.type,vertexShader:$,fragmentShader:Y,defines:u.defines,customVertexShaderID:ir,customFragmentShaderID:sr,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:f,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:p,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ne,map:!!u.map,matcap:!!u.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:G,lightMap:!!u.lightMap,aoMap:!!u.aoMap,emissiveMap:!!u.emissiveMap,bumpMap:!!u.bumpMap,normalMap:!!u.normalMap,objectSpaceNormalMap:u.normalMapType===lp,tangentSpaceNormalMap:u.normalMapType===np,decodeVideoTexture:!!u.map&&u.map.isVideoTexture===!0&&u.map.encoding===Br,clearcoat:_r,clearcoatMap:_r&&!!u.clearcoatMap,clearcoatRoughnessMap:_r&&!!u.clearcoatRoughnessMap,clearcoatNormalMap:_r&&!!u.clearcoatNormalMap,iridescence:vr,iridescenceMap:vr&&!!u.iridescenceMap,iridescenceThicknessMap:vr&&!!u.iridescenceThicknessMap,displacementMap:!!u.displacementMap,roughnessMap:!!u.roughnessMap,metalnessMap:!!u.metalnessMap,specularMap:!!u.specularMap,specularIntensityMap:!!u.specularIntensityMap,specularColorMap:!!u.specularColorMap,opaque:u.transparent===!1&&u.blending===Fe,alphaMap:!!u.alphaMap,alphaTest:jr,gradientMap:!!u.gradientMap,sheen:u.sheen>0,sheenColorMap:!!u.sheenColorMap,sheenRoughnessMap:!!u.sheenRoughnessMap,transmission:u.transmission>0,transmissionMap:!!u.transmissionMap,thicknessMap:!!u.thicknessMap,combine:u.combine,vertexTangents:!!u.normalMap&&!!A.attributes.tangent,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!u.map||!!u.bumpMap||!!u.normalMap||!!u.specularMap||!!u.alphaMap||!!u.emissiveMap||!!u.roughnessMap||!!u.metalnessMap||!!u.clearcoatMap||!!u.clearcoatRoughnessMap||!!u.clearcoatNormalMap||!!u.iridescenceMap||!!u.iridescenceThicknessMap||!!u.displacementMap||!!u.transmissionMap||!!u.thicknessMap||!!u.specularIntensityMap||!!u.specularColorMap||!!u.sheenColorMap||!!u.sheenRoughnessMap,uvsVertexOnly:!(!!u.map||!!u.bumpMap||!!u.normalMap||!!u.specularMap||!!u.alphaMap||!!u.emissiveMap||!!u.roughnessMap||!!u.metalnessMap||!!u.clearcoatNormalMap||!!u.iridescenceMap||!!u.iridescenceThicknessMap||u.transmission>0||!!u.transmissionMap||!!u.thicknessMap||!!u.specularIntensityMap||!!u.specularColorMap||u.sheen>0||!!u.sheenColorMap||!!u.sheenRoughnessMap)&&!!u.displacementMap,fog:!!q,useFog:u.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:!!u.flatShading,sizeAttenuation:u.sizeAttenuation,logarithmicDepthBuffer:s,skinning:K.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Z,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:u.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:u.toneMapped?n.toneMapping:fo,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===He,flipSided:u.side===Dt,useDepthPacking:!!u.depthPacking,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionDerivatives:u.extensions&&u.extensions.derivatives,extensionFragDepth:u.extensions&&u.extensions.fragDepth,extensionDrawBuffers:u.extensions&&u.extensions.drawBuffers,extensionShaderTextureLOD:u.extensions&&u.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||o.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||o.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||o.has("EXT_shader_texture_lod"),customProgramCacheKey:u.customProgramCacheKey()}}function m(u){const z=[];if(u.shaderID?z.push(u.shaderID):(z.push(u.customVertexShaderID),z.push(u.customFragmentShaderID)),u.defines!==void 0)for(const D in u.defines)z.push(D),z.push(u.defines[D]);return u.isRawShaderMaterial===!1&&(h(z,u),y(z,u),z.push(n.outputEncoding)),z.push(u.customProgramCacheKey),z.join()}function h(u,z){u.push(z.precision),u.push(z.outputEncoding),u.push(z.envMapMode),u.push(z.envMapCubeUVHeight),u.push(z.combine),u.push(z.vertexUvs),u.push(z.fogExp2),u.push(z.sizeAttenuation),u.push(z.morphTargetsCount),u.push(z.morphAttributeCount),u.push(z.numDirLights),u.push(z.numPointLights),u.push(z.numSpotLights),u.push(z.numHemiLights),u.push(z.numRectAreaLights),u.push(z.numDirLightShadows),u.push(z.numPointLightShadows),u.push(z.numSpotLightShadows),u.push(z.shadowMapType),u.push(z.toneMapping),u.push(z.numClippingPlanes),u.push(z.numClipIntersection),u.push(z.depthPacking)}function y(u,z){i.disableAll(),z.isWebGL2&&i.enable(0),z.supportsVertexTextures&&i.enable(1),z.instancing&&i.enable(2),z.instancingColor&&i.enable(3),z.map&&i.enable(4),z.matcap&&i.enable(5),z.envMap&&i.enable(6),z.lightMap&&i.enable(7),z.aoMap&&i.enable(8),z.emissiveMap&&i.enable(9),z.bumpMap&&i.enable(10),z.normalMap&&i.enable(11),z.objectSpaceNormalMap&&i.enable(12),z.tangentSpaceNormalMap&&i.enable(13),z.clearcoat&&i.enable(14),z.clearcoatMap&&i.enable(15),z.clearcoatRoughnessMap&&i.enable(16),z.clearcoatNormalMap&&i.enable(17),z.iridescence&&i.enable(18),z.iridescenceMap&&i.enable(19),z.iridescenceThicknessMap&&i.enable(20),z.displacementMap&&i.enable(21),z.specularMap&&i.enable(22),z.roughnessMap&&i.enable(23),z.metalnessMap&&i.enable(24),z.gradientMap&&i.enable(25),z.alphaMap&&i.enable(26),z.alphaTest&&i.enable(27),z.vertexColors&&i.enable(28),z.vertexAlphas&&i.enable(29),z.vertexUvs&&i.enable(30),z.vertexTangents&&i.enable(31),z.uvsVertexOnly&&i.enable(32),z.fog&&i.enable(33),u.push(i.mask),i.disableAll(),z.useFog&&i.enable(0),z.flatShading&&i.enable(1),z.logarithmicDepthBuffer&&i.enable(2),z.skinning&&i.enable(3),z.morphTargets&&i.enable(4),z.morphNormals&&i.enable(5),z.morphColors&&i.enable(6),z.premultipliedAlpha&&i.enable(7),z.shadowMapEnabled&&i.enable(8),z.physicallyCorrectLights&&i.enable(9),z.doubleSided&&i.enable(10),z.flipSided&&i.enable(11),z.useDepthPacking&&i.enable(12),z.dithering&&i.enable(13),z.specularIntensityMap&&i.enable(14),z.specularColorMap&&i.enable(15),z.transmission&&i.enable(16),z.transmissionMap&&i.enable(17),z.thicknessMap&&i.enable(18),z.sheen&&i.enable(19),z.sheenColorMap&&i.enable(20),z.sheenRoughnessMap&&i.enable(21),z.decodeVideoTexture&&i.enable(22),z.opaque&&i.enable(23),u.push(i.mask)}function S(u){const z=b[u.type];let D;if(z){const L=Zt[z];D=_p.clone(L.uniforms)}else D=u.uniforms;return D}function _(u,z){let D;for(let L=0,K=l.length;L<K;L++){const q=l[L];if(q.cacheKey===z){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Pf(n,z,u,a),l.push(D)),D}function v(u){if(--u.usedTimes===0){const z=l.indexOf(u);l[z]=l[l.length-1],l.pop(),u.destroy()}}function M(u){g.remove(u)}function C(){g.dispose()}return{getParameters:w,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:v,releaseShaderCache:M,programs:l,dispose:C}}function Of(){let n=new WeakMap;function r(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function t(a){n.delete(a)}function o(a,c,i){n.get(a)[c]=i}function e(){n=new WeakMap}return{get:r,remove:t,update:o,dispose:e}}function Uf(n,r){return n.groupOrder!==r.groupOrder?n.groupOrder-r.groupOrder:n.renderOrder!==r.renderOrder?n.renderOrder-r.renderOrder:n.material.id!==r.material.id?n.material.id-r.material.id:n.z!==r.z?n.z-r.z:n.id-r.id}function yl(n,r){return n.groupOrder!==r.groupOrder?n.groupOrder-r.groupOrder:n.renderOrder!==r.renderOrder?n.renderOrder-r.renderOrder:n.z!==r.z?r.z-n.z:n.id-r.id}function xl(){const n=[];let r=0;const t=[],o=[],e=[];function a(){r=0,t.length=0,o.length=0,e.length=0}function c(s,p,f,b,w,m){let h=n[r];return h===void 0?(h={id:s.id,object:s,geometry:p,material:f,groupOrder:b,renderOrder:s.renderOrder,z:w,group:m},n[r]=h):(h.id=s.id,h.object=s,h.geometry=p,h.material=f,h.groupOrder=b,h.renderOrder=s.renderOrder,h.z=w,h.group=m),r++,h}function i(s,p,f,b,w,m){const h=c(s,p,f,b,w,m);f.transmission>0?o.push(h):f.transparent===!0?e.push(h):t.push(h)}function g(s,p,f,b,w,m){const h=c(s,p,f,b,w,m);f.transmission>0?o.unshift(h):f.transparent===!0?e.unshift(h):t.unshift(h)}function l(s,p){t.length>1&&t.sort(s||Uf),o.length>1&&o.sort(p||yl),e.length>1&&e.sort(p||yl)}function d(){for(let s=r,p=n.length;s<p;s++){const f=n[s];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:o,transparent:e,init:a,push:i,unshift:g,finish:d,sort:l}}function Bf(){let n=new WeakMap;function r(o,e){let a;return n.has(o)===!1?(a=new xl,n.set(o,[a])):e>=n.get(o).length?(a=new xl,n.get(o).push(a)):a=n.get(o)[e],a}function t(){n=new WeakMap}return{get:r,dispose:t}}function Gf(){const n={};return{get:function(r){if(n[r.id]!==void 0)return n[r.id];let t;switch(r.type){case"DirectionalLight":t={direction:new P,color:new Nr};break;case"SpotLight":t={position:new P,direction:new P,color:new Nr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Nr,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Nr,groundColor:new Nr};break;case"RectAreaLight":t={color:new Nr,position:new P,halfWidth:new P,halfHeight:new P};break}return n[r.id]=t,t}}}function Vf(){const n={};return{get:function(r){if(n[r.id]!==void 0)return n[r.id];let t;switch(r.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fr};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fr};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fr,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[r.id]=t,t}}}let Hf=0;function Wf(n,r){return(r.castShadow?1:0)-(n.castShadow?1:0)}function jf(n,r){const t=new Gf,o=Vf(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)e.probe.push(new P);const a=new P,c=new $r,i=new $r;function g(d,s){let p=0,f=0,b=0;for(let z=0;z<9;z++)e.probe[z].set(0,0,0);let w=0,m=0,h=0,y=0,S=0,_=0,v=0,M=0;d.sort(Wf);const C=s!==!0?Math.PI:1;for(let z=0,D=d.length;z<D;z++){const L=d[z],K=L.color,q=L.intensity,A=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=K.r*q*C,f+=K.g*q*C,b+=K.b*q*C;else if(L.isLightProbe)for(let I=0;I<9;I++)e.probe[I].addScaledVector(L.sh.coefficients[I],q);else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*C),L.castShadow){const G=L.shadow,j=o.get(L);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,e.directionalShadow[w]=j,e.directionalShadowMap[w]=B,e.directionalShadowMatrix[w]=L.shadow.matrix,_++}e.directional[w]=I,w++}else if(L.isSpotLight){const I=t.get(L);if(I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(K).multiplyScalar(q*C),I.distance=A,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,L.castShadow){const G=L.shadow,j=o.get(L);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,e.spotShadow[h]=j,e.spotShadowMap[h]=B,e.spotShadowMatrix[h]=L.shadow.matrix,M++}e.spot[h]=I,h++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(K).multiplyScalar(q),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),e.rectArea[y]=I,y++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*C),I.distance=L.distance,I.decay=L.decay,L.castShadow){const G=L.shadow,j=o.get(L);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,e.pointShadow[m]=j,e.pointShadowMap[m]=B,e.pointShadowMatrix[m]=L.shadow.matrix,v++}e.point[m]=I,m++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(q*C),I.groundColor.copy(L.groundColor).multiplyScalar(q*C),e.hemi[S]=I,S++}}y>0&&(r.isWebGL2||n.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=er.LTC_FLOAT_1,e.rectAreaLTC2=er.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(e.rectAreaLTC1=er.LTC_HALF_1,e.rectAreaLTC2=er.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),e.ambient[0]=p,e.ambient[1]=f,e.ambient[2]=b;const u=e.hash;(u.directionalLength!==w||u.pointLength!==m||u.spotLength!==h||u.rectAreaLength!==y||u.hemiLength!==S||u.numDirectionalShadows!==_||u.numPointShadows!==v||u.numSpotShadows!==M)&&(e.directional.length=w,e.spot.length=h,e.rectArea.length=y,e.point.length=m,e.hemi.length=S,e.directionalShadow.length=_,e.directionalShadowMap.length=_,e.pointShadow.length=v,e.pointShadowMap.length=v,e.spotShadow.length=M,e.spotShadowMap.length=M,e.directionalShadowMatrix.length=_,e.pointShadowMatrix.length=v,e.spotShadowMatrix.length=M,u.directionalLength=w,u.pointLength=m,u.spotLength=h,u.rectAreaLength=y,u.hemiLength=S,u.numDirectionalShadows=_,u.numPointShadows=v,u.numSpotShadows=M,e.version=Hf++)}function l(d,s){let p=0,f=0,b=0,w=0,m=0;const h=s.matrixWorldInverse;for(let y=0,S=d.length;y<S;y++){const _=d[y];if(_.isDirectionalLight){const v=e.directional[p];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(h),p++}else if(_.isSpotLight){const v=e.spot[b];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(h),b++}else if(_.isRectAreaLight){const v=e.rectArea[w];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(h),i.identity(),c.copy(_.matrixWorld),c.premultiply(h),i.extractRotation(c),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(i),v.halfHeight.applyMatrix4(i),w++}else if(_.isPointLight){const v=e.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(h),f++}else if(_.isHemisphereLight){const v=e.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(h),m++}}}return{setup:g,setupView:l,state:e}}function kl(n,r){const t=new jf(n,r),o=[],e=[];function a(){o.length=0,e.length=0}function c(s){o.push(s)}function i(s){e.push(s)}function g(s){t.setup(o,s)}function l(s){t.setupView(o,s)}return{init:a,state:{lightsArray:o,shadowsArray:e,lights:t},setupLights:g,setupLightsView:l,pushLight:c,pushShadow:i}}function Xf(n,r){let t=new WeakMap;function o(a,c=0){let i;return t.has(a)===!1?(i=new kl(n,r),t.set(a,[i])):c>=t.get(a).length?(i=new kl(n,r),t.get(a).push(i)):i=t.get(a)[c],i}function e(){t=new WeakMap}return{get:o,dispose:e}}class qf extends Ta{constructor(r){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(r)}copy(r){return super.copy(r),this.depthPacking=r.depthPacking,this.map=r.map,this.alphaMap=r.alphaMap,this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this}}class Yf extends Ta{constructor(r){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(r)}copy(r){return super.copy(r),this.referencePosition.copy(r.referencePosition),this.nearDistance=r.nearDistance,this.farDistance=r.farDistance,this.map=r.map,this.alphaMap=r.alphaMap,this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this}}const Zf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$f=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kf(n,r,t){let o=new Vg;const e=new Fr,a=new Fr,c=new Zr,i=new qf({depthPacking:cp}),g=new Yf,l={},d=t.maxTextureSize,s={0:Dt,1:ua,2:He},p=new uo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fr},radius:{value:4}},vertexShader:Zf,fragmentShader:$f}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const b=new ro;b.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jt(b,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg,this.render=function(_,v,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;const C=n.getRenderTarget(),u=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Po),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let L=0,K=_.length;L<K;L++){const q=_[L],A=q.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;e.copy(A.mapSize);const B=A.getFrameExtents();if(e.multiply(B),a.copy(A.mapSize),(e.x>d||e.y>d)&&(e.x>d&&(a.x=Math.floor(d/B.x),e.x=a.x*B.x,A.mapSize.x=a.x),e.y>d&&(a.y=Math.floor(d/B.y),e.y=a.y*B.y,A.mapSize.y=a.y)),A.map===null){const G=this.type!==aa?{minFilter:st,magFilter:st}:{};A.map=new le(e.x,e.y,G),A.map.texture.name=q.name+".shadowMap",A.camera.updateProjectionMatrix()}n.setRenderTarget(A.map),n.clear();const I=A.getViewportCount();for(let G=0;G<I;G++){const j=A.getViewport(G);c.set(a.x*j.x,a.y*j.y,a.x*j.z,a.y*j.w),D.viewport(c),A.updateMatrices(q,G),o=A.getFrustum(),S(v,M,A.camera,q,this.type)}A.isPointLightShadow!==!0&&this.type===aa&&h(A,M),A.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(C,u,z)};function h(_,v){const M=r.update(w);p.defines.VSM_SAMPLES!==_.blurSamples&&(p.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new le(e.x,e.y)),p.uniforms.shadow_pass.value=_.map.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(v,null,M,p,w,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(v,null,M,f,w,null)}function y(_,v,M,C,u,z){let D=null;const L=M.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(L!==void 0?D=L:D=M.isPointLight===!0?g:i,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const K=D.uuid,q=v.uuid;let A=l[K];A===void 0&&(A={},l[K]=A);let B=A[q];B===void 0&&(B=D.clone(),A[q]=B),D=B}return D.visible=v.visible,D.wireframe=v.wireframe,z===aa?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:s[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaTest,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(M.matrixWorld),D.nearDistance=C,D.farDistance=u),D}function S(_,v,M,C,u){if(_.visible===!1)return;if(_.layers.test(v.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&u===aa)&&(!_.frustumCulled||o.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,_.matrixWorld);const L=r.update(_),K=_.material;if(Array.isArray(K)){const q=L.groups;for(let A=0,B=q.length;A<B;A++){const I=q[A],G=K[I.materialIndex];if(G&&G.visible){const j=y(_,G,C,M.near,M.far,u);n.renderBufferDirect(M,null,L,j,_,I)}}}else if(K.visible){const q=y(_,K,C,M.near,M.far,u);n.renderBufferDirect(M,null,L,q,_,null)}}const D=_.children;for(let L=0,K=D.length;L<K;L++)S(D[L],v,M,C,u)}}function Jf(n,r,t){const o=t.isWebGL2;function e(){let E=!1;const or=new Zr;let tr=null;const pr=new Zr(0,0,0,0);return{setMask:function(lr){tr!==lr&&!E&&(n.colorMask(lr,lr,lr,lr),tr=lr)},setLocked:function(lr){E=lr},setClear:function(lr,fr,Q,br,Er){Er===!0&&(lr*=br,fr*=br,Q*=br),or.set(lr,fr,Q,br),pr.equals(or)===!1&&(n.clearColor(lr,fr,Q,br),pr.copy(or))},reset:function(){E=!1,tr=null,pr.set(-1,0,0,0)}}}function a(){let E=!1,or=null,tr=null,pr=null;return{setTest:function(lr){lr?sr(2929):W(2929)},setMask:function(lr){or!==lr&&!E&&(n.depthMask(lr),or=lr)},setFunc:function(lr){if(tr!==lr){if(lr)switch(lr){case Es:n.depthFunc(512);break;case As:n.depthFunc(519);break;case Ls:n.depthFunc(513);break;case xc:n.depthFunc(515);break;case Ds:n.depthFunc(514);break;case Ps:n.depthFunc(518);break;case Rs:n.depthFunc(516);break;case Is:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);tr=lr}},setLocked:function(lr){E=lr},setClear:function(lr){pr!==lr&&(n.clearDepth(lr),pr=lr)},reset:function(){E=!1,or=null,tr=null,pr=null}}}function c(){let E=!1,or=null,tr=null,pr=null,lr=null,fr=null,Q=null,br=null,Er=null;return{setTest:function(Ar){E||(Ar?sr(2960):W(2960))},setMask:function(Ar){or!==Ar&&!E&&(n.stencilMask(Ar),or=Ar)},setFunc:function(Ar,ct,Wt){(tr!==Ar||pr!==ct||lr!==Wt)&&(n.stencilFunc(Ar,ct,Wt),tr=Ar,pr=ct,lr=Wt)},setOp:function(Ar,ct,Wt){(fr!==Ar||Q!==ct||br!==Wt)&&(n.stencilOp(Ar,ct,Wt),fr=Ar,Q=ct,br=Wt)},setLocked:function(Ar){E=Ar},setClear:function(Ar){Er!==Ar&&(n.clearStencil(Ar),Er=Ar)},reset:function(){E=!1,or=null,tr=null,pr=null,lr=null,fr=null,Q=null,br=null,Er=null}}}const i=new e,g=new a,l=new c;let d={},s={},p=new WeakMap,f=[],b=null,w=!1,m=null,h=null,y=null,S=null,_=null,v=null,M=null,C=!1,u=null,z=null,D=null,L=null,K=null;const q=n.getParameter(35661);let A=!1,B=0;const I=n.getParameter(7938);I.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(I)[1]),A=B>=1):I.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),A=B>=2);let G=null,j={};const N=n.getParameter(3088),H=n.getParameter(2978),Z=new Zr().fromArray(N),$=new Zr().fromArray(H);function Y(E,or,tr){const pr=new Uint8Array(4),lr=n.createTexture();n.bindTexture(E,lr),n.texParameteri(E,10241,9728),n.texParameteri(E,10240,9728);for(let fr=0;fr<tr;fr++)n.texImage2D(or+fr,0,6408,1,1,0,6408,5121,pr);return lr}const ir={};ir[3553]=Y(3553,3553,1),ir[34067]=Y(34067,34069,6),i.setClear(0,0,0,1),g.setClear(1),l.setClear(0),sr(2929),g.setFunc(xc),rt(!1),dt(pn),sr(2884),zr(Po);function sr(E){d[E]!==!0&&(n.enable(E),d[E]=!0)}function W(E){d[E]!==!1&&(n.disable(E),d[E]=!1)}function jr(E,or){return s[E]!==or?(n.bindFramebuffer(E,or),s[E]=or,o&&(E===36009&&(s[36160]=or),E===36160&&(s[36009]=or)),!0):!1}function _r(E,or){let tr=f,pr=!1;if(E)if(tr=p.get(or),tr===void 0&&(tr=[],p.set(or,tr)),E.isWebGLMultipleRenderTargets){const lr=E.texture;if(tr.length!==lr.length||tr[0]!==36064){for(let fr=0,Q=lr.length;fr<Q;fr++)tr[fr]=36064+fr;tr.length=lr.length,pr=!0}}else tr[0]!==36064&&(tr[0]=36064,pr=!0);else tr[0]!==1029&&(tr[0]=1029,pr=!0);pr&&(t.isWebGL2?n.drawBuffers(tr):r.get("WEBGL_draw_buffers").drawBuffersWEBGL(tr))}function vr(E){return b!==E?(n.useProgram(E),b=E,!0):!1}const cr={[Ce]:32774,[us]:32778,[vs]:32779};if(o)cr[fn]=32775,cr[bn]=32776;else{const E=r.get("EXT_blend_minmax");E!==null&&(cr[fn]=E.MIN_EXT,cr[bn]=E.MAX_EXT)}const Dr={[ys]:0,[xs]:1,[ks]:768,[Mg]:770,[Cs]:776,[Ss]:774,[zs]:772,[_s]:769,[Sg]:771,[Ts]:775,[Ms]:773};function zr(E,or,tr,pr,lr,fr,Q,br){if(E===Po){w===!0&&(W(3042),w=!1);return}if(w===!1&&(sr(3042),w=!0),E!==hs){if(E!==m||br!==C){if((h!==Ce||_!==Ce)&&(n.blendEquation(32774),h=Ce,_=Ce),br)switch(E){case Fe:n.blendFuncSeparate(1,771,1,771);break;case yc:n.blendFunc(1,1);break;case wn:n.blendFuncSeparate(0,769,0,1);break;case mn:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Fe:n.blendFuncSeparate(770,771,1,771);break;case yc:n.blendFunc(770,1);break;case wn:n.blendFuncSeparate(0,769,0,1);break;case mn:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}y=null,S=null,v=null,M=null,m=E,C=br}return}lr=lr||or,fr=fr||tr,Q=Q||pr,(or!==h||lr!==_)&&(n.blendEquationSeparate(cr[or],cr[lr]),h=or,_=lr),(tr!==y||pr!==S||fr!==v||Q!==M)&&(n.blendFuncSeparate(Dr[tr],Dr[pr],Dr[fr],Dr[Q]),y=tr,S=pr,v=fr,M=Q),m=E,C=null}function wr(E,or){E.side===He?W(2884):sr(2884);let tr=E.side===Dt;or&&(tr=!tr),rt(tr),E.blending===Fe&&E.transparent===!1?zr(Po):zr(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),g.setFunc(E.depthFunc),g.setTest(E.depthTest),g.setMask(E.depthWrite),i.setMask(E.colorWrite);const pr=E.stencilWrite;l.setTest(pr),pr&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Ht(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?sr(32926):W(32926)}function rt(E){u!==E&&(E?n.frontFace(2304):n.frontFace(2305),u=E)}function dt(E){E!==ws?(sr(2884),E!==z&&(E===pn?n.cullFace(1029):E===ms?n.cullFace(1028):n.cullFace(1032))):W(2884),z=E}function bt(E){E!==D&&(A&&n.lineWidth(E),D=E)}function Ht(E,or,tr){E?(sr(32823),(L!==or||K!==tr)&&(n.polygonOffset(or,tr),L=or,K=tr)):W(32823)}function Jr(E){E?sr(3089):W(3089)}function Pr(E){E===void 0&&(E=33984+q-1),G!==E&&(n.activeTexture(E),G=E)}function to(E,or){G===null&&Pr();let tr=j[G];tr===void 0&&(tr={type:void 0,texture:void 0},j[G]=tr),(tr.type!==E||tr.texture!==or)&&(n.bindTexture(E,or||ir[E]),tr.type=E,tr.texture=or)}function oo(){const E=j[G];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function T(){try{n.compressedTexImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function x(){try{n.texSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function V(){try{n.texSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function rr(){try{n.texStorage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ar(){try{n.texStorage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function hr(){try{n.texImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function U(){try{n.texImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function dr(E){Z.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),Z.copy(E))}function gr(E){$.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),$.copy(E))}function nr(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),o===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},G=null,j={},s={},p=new WeakMap,f=[],b=null,w=!1,m=null,h=null,y=null,S=null,_=null,v=null,M=null,C=!1,u=null,z=null,D=null,L=null,K=null,Z.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),i.reset(),g.reset(),l.reset()}return{buffers:{color:i,depth:g,stencil:l},enable:sr,disable:W,bindFramebuffer:jr,drawBuffers:_r,useProgram:vr,setBlending:zr,setMaterial:wr,setFlipSided:rt,setCullFace:dt,setLineWidth:bt,setPolygonOffset:Ht,setScissorTest:Jr,activeTexture:Pr,bindTexture:to,unbindTexture:oo,compressedTexImage2D:T,texImage2D:hr,texImage3D:U,texStorage2D:rr,texStorage3D:ar,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:J,scissor:dr,viewport:gr,reset:nr}}function Qf(n,r,t,o,e,a,c){const i=e.isWebGL2,g=e.maxTextures,l=e.maxCubemapSize,d=e.maxTextureSize,s=e.maxSamples,p=r.has("WEBGL_multisampled_render_to_texture")?r.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let w;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,x){return h?new OffscreenCanvas(T,x):ya("canvas")}function S(T,x,V,J){let rr=1;if((T.width>J||T.height>J)&&(rr=J/Math.max(T.width,T.height)),rr<1||x===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const ar=x?Tc:Math.floor,hr=ar(rr*T.width),U=ar(rr*T.height);w===void 0&&(w=y(hr,U));const dr=V?y(hr,U):w;return dr.width=hr,dr.height=U,dr.getContext("2d").drawImage(T,0,0,hr,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+hr+"x"+U+")."),dr}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return Hn(T.width)&&Hn(T.height)}function v(T){return i?!1:T.wrapS!==Bt||T.wrapT!==Bt||T.minFilter!==st&&T.minFilter!==St}function M(T,x){return T.generateMipmaps&&x&&T.minFilter!==st&&T.minFilter!==St}function C(T){n.generateMipmap(T)}function u(T,x,V,J,rr=!1){if(i===!1)return x;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ar=x;return x===6403&&(V===5126&&(ar=33326),V===5131&&(ar=33325),V===5121&&(ar=33321)),x===33319&&(V===5126&&(ar=33328),V===5131&&(ar=33327),V===5121&&(ar=33323)),x===6408&&(V===5126&&(ar=34836),V===5131&&(ar=34842),V===5121&&(ar=J===Br&&rr===!1?35907:32856),V===32819&&(ar=32854),V===32820&&(ar=32855)),(ar===33325||ar===33326||ar===33327||ar===33328||ar===34842||ar===34836)&&r.get("EXT_color_buffer_float"),ar}function z(T,x,V){return M(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==st&&T.minFilter!==St?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function D(T){return T===st||T===hn||T===un?9728:9729}function L(T){const x=T.target;x.removeEventListener("dispose",L),q(x),x.isVideoTexture&&b.delete(x)}function K(T){const x=T.target;x.removeEventListener("dispose",K),B(x)}function q(T){const x=o.get(T);if(x.__webglInit===void 0)return;const V=T.source,J=m.get(V);if(J){const rr=J[x.__cacheKey];rr.usedTimes--,rr.usedTimes===0&&A(T),Object.keys(J).length===0&&m.delete(V)}o.remove(T)}function A(T){const x=o.get(T);n.deleteTexture(x.__webglTexture);const V=T.source,J=m.get(V);delete J[x.__cacheKey],c.memory.textures--}function B(T){const x=T.texture,V=o.get(T),J=o.get(x);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),c.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let rr=0;rr<6;rr++)n.deleteFramebuffer(V.__webglFramebuffer[rr]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[rr]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let rr=0;rr<V.__webglColorRenderbuffer.length;rr++)V.__webglColorRenderbuffer[rr]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[rr]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let rr=0,ar=x.length;rr<ar;rr++){const hr=o.get(x[rr]);hr.__webglTexture&&(n.deleteTexture(hr.__webglTexture),c.memory.textures--),o.remove(x[rr])}o.remove(x),o.remove(T)}let I=0;function G(){I=0}function j(){const T=I;return T>=g&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+g),I+=1,T}function N(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.encoding),x.join()}function H(T,x){const V=o.get(T);if(T.isVideoTexture&&to(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_r(V,T,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,V.__webglTexture)}function Z(T,x){const V=o.get(T);if(T.version>0&&V.__version!==T.version){_r(V,T,x);return}t.activeTexture(33984+x),t.bindTexture(35866,V.__webglTexture)}function $(T,x){const V=o.get(T);if(T.version>0&&V.__version!==T.version){_r(V,T,x);return}t.activeTexture(33984+x),t.bindTexture(32879,V.__webglTexture)}function Y(T,x){const V=o.get(T);if(T.version>0&&V.__version!==T.version){vr(V,T,x);return}t.activeTexture(33984+x),t.bindTexture(34067,V.__webglTexture)}const ir={[zc]:10497,[Bt]:33071,[Mc]:33648},sr={[st]:9728,[hn]:9984,[un]:9986,[St]:9729,[Hs]:9985,[bi]:9987};function W(T,x,V){if(V?(n.texParameteri(T,10242,ir[x.wrapS]),n.texParameteri(T,10243,ir[x.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,ir[x.wrapR]),n.texParameteri(T,10240,sr[x.magFilter]),n.texParameteri(T,10241,sr[x.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(x.wrapS!==Bt||x.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,D(x.magFilter)),n.texParameteri(T,10241,D(x.minFilter)),x.minFilter!==st&&x.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),r.has("EXT_texture_filter_anisotropic")===!0){const J=r.get("EXT_texture_filter_anisotropic");if(x.type===Jo&&r.has("OES_texture_float_linear")===!1||i===!1&&x.type===va&&r.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||o.get(x).__currentAnisotropy)&&(n.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,e.getMaxAnisotropy())),o.get(x).__currentAnisotropy=x.anisotropy)}}function jr(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const J=x.source;let rr=m.get(J);rr===void 0&&(rr={},m.set(J,rr));const ar=N(x);if(ar!==T.__cacheKey){rr[ar]===void 0&&(rr[ar]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,V=!0),rr[ar].usedTimes++;const hr=rr[T.__cacheKey];hr!==void 0&&(rr[T.__cacheKey].usedTimes--,hr.usedTimes===0&&A(x)),T.__cacheKey=ar,T.__webglTexture=rr[ar].texture}return V}function _r(T,x,V){let J=3553;x.isDataArrayTexture&&(J=35866),x.isData3DTexture&&(J=32879);const rr=jr(T,x),ar=x.source;if(t.activeTexture(33984+V),t.bindTexture(J,T.__webglTexture),ar.version!==ar.__currentVersion||rr===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const hr=v(x)&&_(x.image)===!1;let U=S(x.image,hr,!1,d);U=oo(x,U);const dr=_(U)||i,gr=a.convert(x.format,x.encoding);let nr=a.convert(x.type),E=u(x.internalFormat,gr,nr,x.encoding,x.isVideoTexture);W(J,x,dr);let or;const tr=x.mipmaps,pr=i&&x.isVideoTexture!==!0,lr=ar.__currentVersion===void 0||rr===!0,fr=z(x,U,dr);if(x.isDepthTexture)E=6402,i?x.type===Jo?E=36012:x.type===Ko?E=33190:x.type===Ne?E=35056:E=33189:x.type===Jo&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ee&&E===6402&&x.type!==Eg&&x.type!==Ko&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ko,nr=a.convert(x.type)),x.format===Xe&&E===6402&&(E=34041,x.type!==Ne&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ne,nr=a.convert(x.type))),lr&&(pr?t.texStorage2D(3553,1,E,U.width,U.height):t.texImage2D(3553,0,E,U.width,U.height,0,gr,nr,null));else if(x.isDataTexture)if(tr.length>0&&dr){pr&&lr&&t.texStorage2D(3553,fr,E,tr[0].width,tr[0].height);for(let Q=0,br=tr.length;Q<br;Q++)or=tr[Q],pr?t.texSubImage2D(3553,Q,0,0,or.width,or.height,gr,nr,or.data):t.texImage2D(3553,Q,E,or.width,or.height,0,gr,nr,or.data);x.generateMipmaps=!1}else pr?(lr&&t.texStorage2D(3553,fr,E,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,gr,nr,U.data)):t.texImage2D(3553,0,E,U.width,U.height,0,gr,nr,U.data);else if(x.isCompressedTexture){pr&&lr&&t.texStorage2D(3553,fr,E,tr[0].width,tr[0].height);for(let Q=0,br=tr.length;Q<br;Q++)or=tr[Q],x.format!==Kt?gr!==null?pr?t.compressedTexSubImage2D(3553,Q,0,0,or.width,or.height,gr,or.data):t.compressedTexImage2D(3553,Q,E,or.width,or.height,0,or.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pr?t.texSubImage2D(3553,Q,0,0,or.width,or.height,gr,nr,or.data):t.texImage2D(3553,Q,E,or.width,or.height,0,gr,nr,or.data)}else if(x.isDataArrayTexture)pr?(lr&&t.texStorage3D(35866,fr,E,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,gr,nr,U.data)):t.texImage3D(35866,0,E,U.width,U.height,U.depth,0,gr,nr,U.data);else if(x.isData3DTexture)pr?(lr&&t.texStorage3D(32879,fr,E,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,gr,nr,U.data)):t.texImage3D(32879,0,E,U.width,U.height,U.depth,0,gr,nr,U.data);else if(x.isFramebufferTexture){if(lr)if(pr)t.texStorage2D(3553,fr,E,U.width,U.height);else{let Q=U.width,br=U.height;for(let Er=0;Er<fr;Er++)t.texImage2D(3553,Er,E,Q,br,0,gr,nr,null),Q>>=1,br>>=1}}else if(tr.length>0&&dr){pr&&lr&&t.texStorage2D(3553,fr,E,tr[0].width,tr[0].height);for(let Q=0,br=tr.length;Q<br;Q++)or=tr[Q],pr?t.texSubImage2D(3553,Q,0,0,gr,nr,or):t.texImage2D(3553,Q,E,gr,nr,or);x.generateMipmaps=!1}else pr?(lr&&t.texStorage2D(3553,fr,E,U.width,U.height),t.texSubImage2D(3553,0,0,0,gr,nr,U)):t.texImage2D(3553,0,E,gr,nr,U);M(x,dr)&&C(J),ar.__currentVersion=ar.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function vr(T,x,V){if(x.image.length!==6)return;const J=jr(T,x),rr=x.source;if(t.activeTexture(33984+V),t.bindTexture(34067,T.__webglTexture),rr.version!==rr.__currentVersion||J===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const ar=x.isCompressedTexture||x.image[0].isCompressedTexture,hr=x.image[0]&&x.image[0].isDataTexture,U=[];for(let Q=0;Q<6;Q++)!ar&&!hr?U[Q]=S(x.image[Q],!1,!0,l):U[Q]=hr?x.image[Q].image:x.image[Q],U[Q]=oo(x,U[Q]);const dr=U[0],gr=_(dr)||i,nr=a.convert(x.format,x.encoding),E=a.convert(x.type),or=u(x.internalFormat,nr,E,x.encoding),tr=i&&x.isVideoTexture!==!0,pr=rr.__currentVersion===void 0||J===!0;let lr=z(x,dr,gr);W(34067,x,gr);let fr;if(ar){tr&&pr&&t.texStorage2D(34067,lr,or,dr.width,dr.height);for(let Q=0;Q<6;Q++){fr=U[Q].mipmaps;for(let br=0;br<fr.length;br++){const Er=fr[br];x.format!==Kt?nr!==null?tr?t.compressedTexSubImage2D(34069+Q,br,0,0,Er.width,Er.height,nr,Er.data):t.compressedTexImage2D(34069+Q,br,or,Er.width,Er.height,0,Er.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tr?t.texSubImage2D(34069+Q,br,0,0,Er.width,Er.height,nr,E,Er.data):t.texImage2D(34069+Q,br,or,Er.width,Er.height,0,nr,E,Er.data)}}}else{fr=x.mipmaps,tr&&pr&&(fr.length>0&&lr++,t.texStorage2D(34067,lr,or,U[0].width,U[0].height));for(let Q=0;Q<6;Q++)if(hr){tr?t.texSubImage2D(34069+Q,0,0,0,U[Q].width,U[Q].height,nr,E,U[Q].data):t.texImage2D(34069+Q,0,or,U[Q].width,U[Q].height,0,nr,E,U[Q].data);for(let br=0;br<fr.length;br++){const Ar=fr[br].image[Q].image;tr?t.texSubImage2D(34069+Q,br+1,0,0,Ar.width,Ar.height,nr,E,Ar.data):t.texImage2D(34069+Q,br+1,or,Ar.width,Ar.height,0,nr,E,Ar.data)}}else{tr?t.texSubImage2D(34069+Q,0,0,0,nr,E,U[Q]):t.texImage2D(34069+Q,0,or,nr,E,U[Q]);for(let br=0;br<fr.length;br++){const Er=fr[br];tr?t.texSubImage2D(34069+Q,br+1,0,0,nr,E,Er.image[Q]):t.texImage2D(34069+Q,br+1,or,nr,E,Er.image[Q])}}}M(x,gr)&&C(34067),rr.__currentVersion=rr.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function cr(T,x,V,J,rr){const ar=a.convert(V.format,V.encoding),hr=a.convert(V.type),U=u(V.internalFormat,ar,hr,V.encoding);o.get(x).__hasExternalTextures||(rr===32879||rr===35866?t.texImage3D(rr,0,U,x.width,x.height,x.depth,0,ar,hr,null):t.texImage2D(rr,0,U,x.width,x.height,0,ar,hr,null)),t.bindFramebuffer(36160,T),Pr(x)?p.framebufferTexture2DMultisampleEXT(36160,J,rr,o.get(V).__webglTexture,0,Jr(x)):n.framebufferTexture2D(36160,J,rr,o.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Dr(T,x,V){if(n.bindRenderbuffer(36161,T),x.depthBuffer&&!x.stencilBuffer){let J=33189;if(V||Pr(x)){const rr=x.depthTexture;rr&&rr.isDepthTexture&&(rr.type===Jo?J=36012:rr.type===Ko&&(J=33190));const ar=Jr(x);Pr(x)?p.renderbufferStorageMultisampleEXT(36161,ar,J,x.width,x.height):n.renderbufferStorageMultisample(36161,ar,J,x.width,x.height)}else n.renderbufferStorage(36161,J,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(x.depthBuffer&&x.stencilBuffer){const J=Jr(x);V&&Pr(x)===!1?n.renderbufferStorageMultisample(36161,J,35056,x.width,x.height):Pr(x)?p.renderbufferStorageMultisampleEXT(36161,J,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let rr=0;rr<J.length;rr++){const ar=J[rr],hr=a.convert(ar.format,ar.encoding),U=a.convert(ar.type),dr=u(ar.internalFormat,hr,U,ar.encoding),gr=Jr(x);V&&Pr(x)===!1?n.renderbufferStorageMultisample(36161,gr,dr,x.width,x.height):Pr(x)?p.renderbufferStorageMultisampleEXT(36161,gr,dr,x.width,x.height):n.renderbufferStorage(36161,dr,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function zr(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!o.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const J=o.get(x.depthTexture).__webglTexture,rr=Jr(x);if(x.depthTexture.format===ee)Pr(x)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,rr):n.framebufferTexture2D(36160,36096,3553,J,0);else if(x.depthTexture.format===Xe)Pr(x)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,rr):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function wr(T){const x=o.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zr(x.__webglFramebuffer,T)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=n.createRenderbuffer(),Dr(x.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Dr(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function rt(T,x,V){const J=o.get(T);x!==void 0&&cr(J.__webglFramebuffer,T,T.texture,36064,3553),V!==void 0&&wr(T)}function dt(T){const x=T.texture,V=o.get(T),J=o.get(x);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,c.memory.textures++);const rr=T.isWebGLCubeRenderTarget===!0,ar=T.isWebGLMultipleRenderTargets===!0,hr=_(T)||i;if(rr){V.__webglFramebuffer=[];for(let U=0;U<6;U++)V.__webglFramebuffer[U]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),ar)if(e.drawBuffers){const U=T.texture;for(let dr=0,gr=U.length;dr<gr;dr++){const nr=o.get(U[dr]);nr.__webglTexture===void 0&&(nr.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&T.samples>0&&Pr(T)===!1){const U=ar?x:[x];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let dr=0;dr<U.length;dr++){const gr=U[dr];V.__webglColorRenderbuffer[dr]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[dr]);const nr=a.convert(gr.format,gr.encoding),E=a.convert(gr.type),or=u(gr.internalFormat,nr,E,gr.encoding),tr=Jr(T);n.renderbufferStorageMultisample(36161,tr,or,T.width,T.height),n.framebufferRenderbuffer(36160,36064+dr,36161,V.__webglColorRenderbuffer[dr])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Dr(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(rr){t.bindTexture(34067,J.__webglTexture),W(34067,x,hr);for(let U=0;U<6;U++)cr(V.__webglFramebuffer[U],T,x,36064,34069+U);M(x,hr)&&C(34067),t.unbindTexture()}else if(ar){const U=T.texture;for(let dr=0,gr=U.length;dr<gr;dr++){const nr=U[dr],E=o.get(nr);t.bindTexture(3553,E.__webglTexture),W(3553,nr,hr),cr(V.__webglFramebuffer,T,nr,36064+dr,3553),M(nr,hr)&&C(3553)}t.unbindTexture()}else{let U=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(i?U=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,J.__webglTexture),W(U,x,hr),cr(V.__webglFramebuffer,T,x,36064,U),M(x,hr)&&C(U),t.unbindTexture()}T.depthBuffer&&wr(T)}function bt(T){const x=_(T)||i,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,rr=V.length;J<rr;J++){const ar=V[J];if(M(ar,x)){const hr=T.isWebGLCubeRenderTarget?34067:3553,U=o.get(ar).__webglTexture;t.bindTexture(hr,U),C(hr),t.unbindTexture()}}}function Ht(T){if(i&&T.samples>0&&Pr(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,J=T.height;let rr=16384;const ar=[],hr=T.stencilBuffer?33306:36096,U=o.get(T),dr=T.isWebGLMultipleRenderTargets===!0;if(dr)for(let gr=0;gr<x.length;gr++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+gr,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),n.framebufferTexture2D(36009,36064+gr,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let gr=0;gr<x.length;gr++){ar.push(36064+gr),T.depthBuffer&&ar.push(hr);const nr=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(nr===!1&&(T.depthBuffer&&(rr|=256),T.stencilBuffer&&(rr|=1024)),dr&&n.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[gr]),nr===!0&&(n.invalidateFramebuffer(36008,[hr]),n.invalidateFramebuffer(36009,[hr])),dr){const E=o.get(x[gr]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,E,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,rr,9728),f&&n.invalidateFramebuffer(36008,ar)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),dr)for(let gr=0;gr<x.length;gr++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+gr,36161,U.__webglColorRenderbuffer[gr]);const nr=o.get(x[gr]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),n.framebufferTexture2D(36009,36064+gr,3553,nr,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function Jr(T){return Math.min(s,T.samples)}function Pr(T){const x=o.get(T);return i&&T.samples>0&&r.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function to(T){const x=c.render.frame;b.get(T)!==x&&(b.set(T,x),T.update())}function oo(T,x){const V=T.encoding,J=T.format,rr=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Sc||V!==ne&&(V===Br?i===!1?r.has("EXT_sRGB")===!0&&J===Kt?(T.format=Sc,T.minFilter=St,T.generateMipmaps=!1):x=Dg.sRGBToLinear(x):(J!==Kt||rr!==ce)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),x}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=rt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=wr,this.setupFrameBufferTexture=cr,this.useMultisampledRTT=Pr}function rb(n,r,t){const o=t.isWebGL2;function e(a,c=null){let i;if(a===ce)return 5121;if(a===qs)return 32819;if(a===Ys)return 32820;if(a===Ws)return 5120;if(a===js)return 5122;if(a===Eg)return 5123;if(a===Xs)return 5124;if(a===Ko)return 5125;if(a===Jo)return 5126;if(a===va)return o?5131:(i=r.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(a===Zs)return 6406;if(a===Kt)return 6408;if(a===Ks)return 6409;if(a===Js)return 6410;if(a===ee)return 6402;if(a===Xe)return 34041;if(a===Qs)return 6403;if(a===$s)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Sc)return i=r.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(a===rp)return 36244;if(a===tp)return 33319;if(a===op)return 33320;if(a===ep)return 36249;if(a===Ai||a===Li||a===Di||a===Pi)if(c===Br)if(i=r.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(a===Ai)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Li)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Di)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Pi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=r.get("WEBGL_compressed_texture_s3tc"),i!==null){if(a===Ai)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Li)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Di)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Pi)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===vn||a===yn||a===xn||a===kn)if(i=r.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(a===vn)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===yn)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===xn)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===kn)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ap)return i=r.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_n||a===zn)if(i=r.get("WEBGL_compressed_texture_etc"),i!==null){if(a===_n)return c===Br?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(a===zn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Mn||a===Sn||a===Tn||a===Cn||a===En||a===An||a===Ln||a===Dn||a===Pn||a===Rn||a===In||a===Fn||a===Nn||a===On)if(i=r.get("WEBGL_compressed_texture_astc"),i!==null){if(a===Mn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Sn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Tn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Cn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===En)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===An)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ln)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Dn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Pn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===In)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Fn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nn)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===On)return c===Br?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Un)if(i=r.get("EXT_texture_compression_bptc"),i!==null){if(a===Un)return c===Br?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Ne?o?34042:(i=r.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:e}}class tb extends Tt{constructor(r=[]){super(),this.isArrayCamera=!0,this.cameras=r}}class ca extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(r){return this._targetRay!==null&&this._targetRay.dispatchEvent(r),this._grip!==null&&this._grip.dispatchEvent(r),this._hand!==null&&this._hand.dispatchEvent(r),this}disconnect(r){return this.dispatchEvent({type:"disconnected",data:r}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(r,t,o){let e=null,a=null,c=null;const i=this._targetRay,g=this._grip,l=this._hand;if(r&&t.session.visibilityState!=="visible-blurred"){if(l&&r.hand){c=!0;for(const w of r.hand.values()){const m=t.getJointPose(w,o);if(l.joints[w.jointName]===void 0){const y=new ca;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[w.jointName]=y,l.add(y)}const h=l.joints[w.jointName];m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],s=l.joints["thumb-tip"],p=d.position.distanceTo(s.position),f=.02,b=.005;l.inputState.pinching&&p>f+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:r.handedness,target:this})):!l.inputState.pinching&&p<=f-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:r.handedness,target:this}))}else g!==null&&r.gripSpace&&(a=t.getPose(r.gripSpace,o),a!==null&&(g.matrix.fromArray(a.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),a.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(a.linearVelocity)):g.hasLinearVelocity=!1,a.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(a.angularVelocity)):g.hasAngularVelocity=!1));i!==null&&(e=t.getPose(r.targetRaySpace,o),e===null&&a!==null&&(e=a),e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),e.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(e.linearVelocity)):i.hasLinearVelocity=!1,e.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(e.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return i!==null&&(i.visible=e!==null),g!==null&&(g.visible=a!==null),l!==null&&(l.visible=c!==null),this}}class eb extends Rt{constructor(r,t,o,e,a,c,i,g,l,d){if(d=d!==void 0?d:ee,d!==ee&&d!==Xe)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");o===void 0&&d===ee&&(o=Ko),o===void 0&&d===Xe&&(o=Ne),super(null,e,a,c,i,g,d,o,l),this.isDepthTexture=!0,this.image={width:r,height:t},this.magFilter=i!==void 0?i:st,this.minFilter=g!==void 0?g:st,this.flipY=!1,this.generateMipmaps=!1}}class ab extends Ye{constructor(r,t){super();const o=this;let e=null,a=1,c=null,i="local-floor",g=null,l=null,d=null,s=null,p=null,f=null;const b=t.getContextAttributes();let w=null,m=null;const h=[],y=[],S=new Tt;S.layers.enable(1),S.viewport=new Zr;const _=new Tt;_.layers.enable(2),_.viewport=new Zr;const v=[S,_],M=new tb;M.layers.enable(1),M.layers.enable(2);let C=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=h[N];return H===void 0&&(H=new lc,h[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=h[N];return H===void 0&&(H=new lc,h[N]=H),H.getGripSpace()},this.getHand=function(N){let H=h[N];return H===void 0&&(H=new lc,h[N]=H),H.getHandSpace()};function z(N){const H=y.indexOf(N.inputSource);if(H===-1)return;const Z=h[H];Z!==void 0&&Z.dispatchEvent({type:N.type,data:N.inputSource})}function D(){e.removeEventListener("select",z),e.removeEventListener("selectstart",z),e.removeEventListener("selectend",z),e.removeEventListener("squeeze",z),e.removeEventListener("squeezestart",z),e.removeEventListener("squeezeend",z),e.removeEventListener("end",D),e.removeEventListener("inputsourceschange",L);for(let N=0;N<h.length;N++){const H=y[N];H!==null&&(y[N]=null,h[N].disconnect(H))}C=null,u=null,r.setRenderTarget(w),p=null,s=null,d=null,e=null,m=null,j.stop(),o.isPresenting=!1,o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){a=N,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){i=N,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(N){g=N},this.getBaseLayer=function(){return s!==null?s:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return e},this.setSession=async function(N){if(e=N,e!==null){if(w=r.getRenderTarget(),e.addEventListener("select",z),e.addEventListener("selectstart",z),e.addEventListener("selectend",z),e.addEventListener("squeeze",z),e.addEventListener("squeezestart",z),e.addEventListener("squeezeend",z),e.addEventListener("end",D),e.addEventListener("inputsourceschange",L),b.xrCompatible!==!0&&await t.makeXRCompatible(),e.renderState.layers===void 0||r.capabilities.isWebGL2===!1){const H={antialias:e.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(e,t,H),e.updateRenderState({baseLayer:p}),m=new le(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:ce,encoding:r.outputEncoding})}else{let H=null,Z=null,$=null;b.depth&&($=b.stencil?35056:33190,H=b.stencil?Xe:ee,Z=b.stencil?Ne:Ko);const Y={colorFormat:32856,depthFormat:$,scaleFactor:a};d=new XRWebGLBinding(e,t),s=d.createProjectionLayer(Y),e.updateRenderState({layers:[s]}),m=new le(s.textureWidth,s.textureHeight,{format:Kt,type:ce,depthTexture:new eb(s.textureWidth,s.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:b.stencil,encoding:r.outputEncoding,samples:b.antialias?4:0});const ir=r.properties.get(m);ir.__ignoreDepthValues=s.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),g=null,c=await e.requestReferenceSpace(i),j.setContext(e),j.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}};function L(N){for(let H=0;H<N.removed.length;H++){const Z=N.removed[H],$=y.indexOf(Z);$>=0&&(y[$]=null,h[$].dispatchEvent({type:"disconnected",data:Z}))}for(let H=0;H<N.added.length;H++){const Z=N.added[H];let $=y.indexOf(Z);if($===-1){for(let ir=0;ir<h.length;ir++)if(ir>=y.length){y.push(Z),$=ir;break}else if(y[ir]===null){y[ir]=Z,$=ir;break}if($===-1)break}const Y=h[$];Y&&Y.dispatchEvent({type:"connected",data:Z})}}const K=new P,q=new P;function A(N,H,Z){K.setFromMatrixPosition(H.matrixWorld),q.setFromMatrixPosition(Z.matrixWorld);const $=K.distanceTo(q),Y=H.projectionMatrix.elements,ir=Z.projectionMatrix.elements,sr=Y[14]/(Y[10]-1),W=Y[14]/(Y[10]+1),jr=(Y[9]+1)/Y[5],_r=(Y[9]-1)/Y[5],vr=(Y[8]-1)/Y[0],cr=(ir[8]+1)/ir[0],Dr=sr*vr,zr=sr*cr,wr=$/(-vr+cr),rt=wr*-vr;H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(rt),N.translateZ(wr),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const dt=sr+wr,bt=W+wr,Ht=Dr-rt,Jr=zr+($-rt),Pr=jr*W/bt*dt,to=_r*W/bt*dt;N.projectionMatrix.makePerspective(Ht,Jr,Pr,to,dt,bt)}function B(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(e===null)return;M.near=_.near=S.near=N.near,M.far=_.far=S.far=N.far,(C!==M.near||u!==M.far)&&(e.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,u=M.far);const H=N.parent,Z=M.cameras;B(M,H);for(let Y=0;Y<Z.length;Y++)B(Z[Y],H);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),N.position.copy(M.position),N.quaternion.copy(M.quaternion),N.scale.copy(M.scale),N.matrix.copy(M.matrix),N.matrixWorld.copy(M.matrixWorld);const $=N.children;for(let Y=0,ir=$.length;Y<ir;Y++)$[Y].updateMatrixWorld(!0);Z.length===2?A(M,S,_):M.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(s!==null)return s.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(N){s!==null&&(s.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let I=null;function G(N,H){if(l=H.getViewerPose(g||c),f=H,l!==null){const Z=l.views;p!==null&&(r.setRenderTargetFramebuffer(m,p.framebuffer),r.setRenderTarget(m));let $=!1;Z.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let Y=0;Y<Z.length;Y++){const ir=Z[Y];let sr=null;if(p!==null)sr=p.getViewport(ir);else{const jr=d.getViewSubImage(s,ir);sr=jr.viewport,Y===0&&(r.setRenderTargetTextures(m,jr.colorTexture,s.ignoreDepthValues?void 0:jr.depthStencilTexture),r.setRenderTarget(m))}let W=v[Y];W===void 0&&(W=new Tt,W.layers.enable(Y),W.viewport=new Zr,v[Y]=W),W.matrix.fromArray(ir.transform.matrix),W.projectionMatrix.fromArray(ir.projectionMatrix),W.viewport.set(sr.x,sr.y,sr.width,sr.height),Y===0&&M.matrix.copy(W.matrix),$===!0&&M.cameras.push(W)}}for(let Z=0;Z<h.length;Z++){const $=y[Z],Y=h[Z];$!==null&&Y!==void 0&&Y.update($,H,g||c)}I&&I(N,H),f=null}const j=new Hg;j.setAnimationLoop(G),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}function ib(n,r){function t(w,m){w.fogColor.value.copy(m.color),m.isFog?(w.fogNear.value=m.near,w.fogFar.value=m.far):m.isFogExp2&&(w.fogDensity.value=m.density)}function o(w,m,h,y,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?e(w,m):m.isMeshToonMaterial?(e(w,m),d(w,m)):m.isMeshPhongMaterial?(e(w,m),l(w,m)):m.isMeshStandardMaterial?(e(w,m),s(w,m),m.isMeshPhysicalMaterial&&p(w,m,S)):m.isMeshMatcapMaterial?(e(w,m),f(w,m)):m.isMeshDepthMaterial?e(w,m):m.isMeshDistanceMaterial?(e(w,m),b(w,m)):m.isMeshNormalMaterial?e(w,m):m.isLineBasicMaterial?(a(w,m),m.isLineDashedMaterial&&c(w,m)):m.isPointsMaterial?i(w,m,h,y):m.isSpriteMaterial?g(w,m):m.isShadowMaterial?(w.color.value.copy(m.color),w.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function e(w,m){w.opacity.value=m.opacity,m.color&&w.diffuse.value.copy(m.color),m.emissive&&w.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(w.map.value=m.map),m.alphaMap&&(w.alphaMap.value=m.alphaMap),m.bumpMap&&(w.bumpMap.value=m.bumpMap,w.bumpScale.value=m.bumpScale,m.side===Dt&&(w.bumpScale.value*=-1)),m.displacementMap&&(w.displacementMap.value=m.displacementMap,w.displacementScale.value=m.displacementScale,w.displacementBias.value=m.displacementBias),m.emissiveMap&&(w.emissiveMap.value=m.emissiveMap),m.normalMap&&(w.normalMap.value=m.normalMap,w.normalScale.value.copy(m.normalScale),m.side===Dt&&w.normalScale.value.negate()),m.specularMap&&(w.specularMap.value=m.specularMap),m.alphaTest>0&&(w.alphaTest.value=m.alphaTest);const h=r.get(m).envMap;if(h&&(w.envMap.value=h,w.flipEnvMap.value=h.isCubeTexture&&h.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=m.reflectivity,w.ior.value=m.ior,w.refractionRatio.value=m.refractionRatio),m.lightMap){w.lightMap.value=m.lightMap;const _=n.physicallyCorrectLights!==!0?Math.PI:1;w.lightMapIntensity.value=m.lightMapIntensity*_}m.aoMap&&(w.aoMap.value=m.aoMap,w.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),w.uvTransform.value.copy(y.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),w.uv2Transform.value.copy(S.matrix))}function a(w,m){w.diffuse.value.copy(m.color),w.opacity.value=m.opacity}function c(w,m){w.dashSize.value=m.dashSize,w.totalSize.value=m.dashSize+m.gapSize,w.scale.value=m.scale}function i(w,m,h,y){w.diffuse.value.copy(m.color),w.opacity.value=m.opacity,w.size.value=m.size*h,w.scale.value=y*.5,m.map&&(w.map.value=m.map),m.alphaMap&&(w.alphaMap.value=m.alphaMap),m.alphaTest>0&&(w.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),w.uvTransform.value.copy(S.matrix))}function g(w,m){w.diffuse.value.copy(m.color),w.opacity.value=m.opacity,w.rotation.value=m.rotation,m.map&&(w.map.value=m.map),m.alphaMap&&(w.alphaMap.value=m.alphaMap),m.alphaTest>0&&(w.alphaTest.value=m.alphaTest);let h;m.map?h=m.map:m.alphaMap&&(h=m.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),w.uvTransform.value.copy(h.matrix))}function l(w,m){w.specular.value.copy(m.specular),w.shininess.value=Math.max(m.shininess,1e-4)}function d(w,m){m.gradientMap&&(w.gradientMap.value=m.gradientMap)}function s(w,m){w.roughness.value=m.roughness,w.metalness.value=m.metalness,m.roughnessMap&&(w.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(w.metalnessMap.value=m.metalnessMap),r.get(m).envMap&&(w.envMapIntensity.value=m.envMapIntensity)}function p(w,m,h){w.ior.value=m.ior,m.sheen>0&&(w.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),w.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(w.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(w.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(w.clearcoat.value=m.clearcoat,w.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(w.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(w.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),w.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Dt&&w.clearcoatNormalScale.value.negate())),m.iridescence>0&&(w.iridescence.value=m.iridescence,w.iridescenceIOR.value=m.iridescenceIOR,w.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(w.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(w.transmission.value=m.transmission,w.transmissionSamplerMap.value=h.texture,w.transmissionSamplerSize.value.set(h.width,h.height),m.transmissionMap&&(w.transmissionMap.value=m.transmissionMap),w.thickness.value=m.thickness,m.thicknessMap&&(w.thicknessMap.value=m.thicknessMap),w.attenuationDistance.value=m.attenuationDistance,w.attenuationColor.value.copy(m.attenuationColor)),w.specularIntensity.value=m.specularIntensity,w.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(w.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(w.specularColorMap.value=m.specularColorMap)}function f(w,m){m.matcap&&(w.matcap.value=m.matcap)}function b(w,m){w.referencePosition.value.copy(m.referencePosition),w.nearDistance.value=m.nearDistance,w.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:o}}function cb(){const n=ya("canvas");return n.style.display="block",n}function Zg(n={}){this.isWebGLRenderer=!0;const r=n.canvas!==void 0?n.canvas:cb(),t=n.context!==void 0?n.context:null,o=n.depth!==void 0?n.depth:!0,e=n.stencil!==void 0?n.stencil:!0,a=n.antialias!==void 0?n.antialias:!1,c=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,i=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,g=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let s=null,p=null;const f=[],b=[];this.domElement=r,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ne,this.physicallyCorrectLights=!1,this.toneMapping=fo,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const w=this;let m=!1,h=0,y=0,S=null,_=-1,v=null;const M=new Zr,C=new Zr;let u=null,z=r.width,D=r.height,L=1,K=null,q=null;const A=new Zr(0,0,z,D),B=new Zr(0,0,z,D);let I=!1;const G=new Vg;let j=!1,N=!1,H=null;const Z=new $r,$=new Fr,Y=new P,ir={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function sr(){return S===null?L:1}let W=t;function jr(k,R){for(let O=0;O<k.length;O++){const F=k[O],X=r.getContext(F,R);if(X!==null)return X}return null}try{const k={alpha:!0,depth:o,stencil:e,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:i,powerPreference:g,failIfMajorPerformanceCaveat:l};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${jc}`),r.addEventListener("webglcontextlost",E,!1),r.addEventListener("webglcontextrestored",or,!1),r.addEventListener("webglcontextcreationerror",tr,!1),W===null){const R=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&R.shift(),W=jr(R,k),W===null)throw jr(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let _r,vr,cr,Dr,zr,wr,rt,dt,bt,Ht,Jr,Pr,to,oo,T,x,V,J,rr,ar,hr,U,dr;function gr(){_r=new bm(W),vr=new gm(W,_r,n),_r.init(vr),U=new rb(W,_r,vr),cr=new Jf(W,_r,vr),Dr=new vm,zr=new Of,wr=new Qf(W,_r,cr,zr,vr,U,Dr),rt=new sm(w),dt=new fm(w),bt=new Ap(W,vr),dr=new nm(W,_r,bt,vr),Ht=new hm(W,bt,Dr,dr),Jr=new _m(W,Ht,bt,Dr),rr=new km(W,vr,wr),x=new dm(zr),Pr=new Nf(w,rt,dt,_r,vr,dr,x),to=new ib(w,zr),oo=new Bf,T=new Xf(_r,vr),J=new cm(w,rt,cr,Jr,d,c),V=new Kf(w,Jr,vr),ar=new lm(W,_r,Dr,vr),hr=new um(W,_r,Dr,vr),Dr.programs=Pr.programs,w.capabilities=vr,w.extensions=_r,w.properties=zr,w.renderLists=oo,w.shadowMap=V,w.state=cr,w.info=Dr}gr();const nr=new ab(w,W);this.xr=nr,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const k=_r.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=_r.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(k){k!==void 0&&(L=k,this.setSize(z,D,!1))},this.getSize=function(k){return k.set(z,D)},this.setSize=function(k,R,O){if(nr.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=k,D=R,r.width=Math.floor(k*L),r.height=Math.floor(R*L),O!==!1&&(r.style.width=k+"px",r.style.height=R+"px"),this.setViewport(0,0,k,R)},this.getDrawingBufferSize=function(k){return k.set(z*L,D*L).floor()},this.setDrawingBufferSize=function(k,R,O){z=k,D=R,L=O,r.width=Math.floor(k*O),r.height=Math.floor(R*O),this.setViewport(0,0,k,R)},this.getCurrentViewport=function(k){return k.copy(M)},this.getViewport=function(k){return k.copy(A)},this.setViewport=function(k,R,O,F){k.isVector4?A.set(k.x,k.y,k.z,k.w):A.set(k,R,O,F),cr.viewport(M.copy(A).multiplyScalar(L).floor())},this.getScissor=function(k){return k.copy(B)},this.setScissor=function(k,R,O,F){k.isVector4?B.set(k.x,k.y,k.z,k.w):B.set(k,R,O,F),cr.scissor(C.copy(B).multiplyScalar(L).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(k){cr.setScissorTest(I=k)},this.setOpaqueSort=function(k){K=k},this.setTransparentSort=function(k){q=k},this.getClearColor=function(k){return k.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(k=!0,R=!0,O=!0){let F=0;k&&(F|=16384),R&&(F|=256),O&&(F|=1024),W.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",E,!1),r.removeEventListener("webglcontextrestored",or,!1),r.removeEventListener("webglcontextcreationerror",tr,!1),oo.dispose(),T.dispose(),zr.dispose(),rt.dispose(),dt.dispose(),Jr.dispose(),dr.dispose(),Pr.dispose(),nr.dispose(),nr.removeEventListener("sessionstart",Er),nr.removeEventListener("sessionend",Ar),H&&(H.dispose(),H=null),ct.stop()};function E(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function or(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const k=Dr.autoReset,R=V.enabled,O=V.autoUpdate,F=V.needsUpdate,X=V.type;gr(),Dr.autoReset=k,V.enabled=R,V.autoUpdate=O,V.needsUpdate=F,V.type=X}function tr(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function pr(k){const R=k.target;R.removeEventListener("dispose",pr),lr(R)}function lr(k){fr(k),zr.remove(k)}function fr(k){const R=zr.get(k).programs;R!==void 0&&(R.forEach(function(O){Pr.releaseProgram(O)}),k.isShaderMaterial&&Pr.releaseShaderCache(k))}this.renderBufferDirect=function(k,R,O,F,X,mr){R===null&&(R=ir);const ur=X.isMesh&&X.matrixWorld.determinant()<0,xr=td(k,R,O,F,X);cr.setMaterial(F,ur);let yr=O.index;const Lr=O.attributes.position;if(yr===null){if(Lr===void 0||Lr.count===0)return}else if(yr.count===0)return;let Sr=1;F.wireframe===!0&&(yr=Ht.getWireframeAttribute(O),Sr=2),dr.setup(X,F,xr,O,yr);let Tr,Ur=ar;yr!==null&&(Tr=bt.get(yr),Ur=hr,Ur.setIndex(Tr));const Oo=yr!==null?yr.count:Lr.count,de=O.drawRange.start*Sr,se=O.drawRange.count*Sr,jt=mr!==null?mr.start*Sr:0,Cr=mr!==null?mr.count*Sr:1/0,pe=Math.max(de,jt),Vr=Math.min(Oo,de+se,jt+Cr)-1,Xt=Math.max(0,Vr-pe+1);if(Xt!==0){if(X.isMesh)F.wireframe===!0?(cr.setLineWidth(F.wireframeLinewidth*sr()),Ur.setMode(1)):Ur.setMode(4);else if(X.isLine){let vo=F.linewidth;vo===void 0&&(vo=1),cr.setLineWidth(vo*sr()),X.isLineSegments?Ur.setMode(1):X.isLineLoop?Ur.setMode(2):Ur.setMode(3)}else X.isPoints?Ur.setMode(0):X.isSprite&&Ur.setMode(4);if(X.isInstancedMesh)Ur.renderInstances(pe,Xt,X.count);else if(O.isInstancedBufferGeometry){const vo=Math.min(O.instanceCount,O._maxInstanceCount);Ur.renderInstances(pe,Xt,vo)}else Ur.render(pe,Xt)}},this.compile=function(k,R){p=T.get(k),p.init(),b.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(w.physicallyCorrectLights),k.traverse(function(O){const F=O.material;if(F)if(Array.isArray(F))for(let X=0;X<F.length;X++){const mr=F[X];vi(mr,k,O)}else vi(F,k,O)}),b.pop(),p=null};let Q=null;function br(k){Q&&Q(k)}function Er(){ct.stop()}function Ar(){ct.start()}const ct=new Hg;ct.setAnimationLoop(br),typeof self!="undefined"&&ct.setContext(self),this.setAnimationLoop=function(k){Q=k,nr.setAnimationLoop(k),k===null?ct.stop():ct.start()},nr.addEventListener("sessionstart",Er),nr.addEventListener("sessionend",Ar),this.render=function(k,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;k.autoUpdate===!0&&k.updateMatrixWorld(),R.parent===null&&R.updateMatrixWorld(),nr.enabled===!0&&nr.isPresenting===!0&&(nr.cameraAutoUpdate===!0&&nr.updateCamera(R),R=nr.getCamera()),k.isScene===!0&&k.onBeforeRender(w,k,R,S),p=T.get(k,b.length),p.init(),b.push(p),Z.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),G.setFromProjectionMatrix(Z),N=this.localClippingEnabled,j=x.init(this.clippingPlanes,N,R),s=oo.get(k,f.length),s.init(),f.push(s),Wt(k,R,0,w.sortObjects),s.finish(),w.sortObjects===!0&&s.sort(K,q),j===!0&&x.beginShadows();const O=p.state.shadowsArray;if(V.render(O,k,R),j===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(s,k),p.setupLights(w.physicallyCorrectLights),R.isArrayCamera){const F=R.cameras;for(let X=0,mr=F.length;X<mr;X++){const ur=F[X];Yc(s,k,ur,ur.viewport)}}else Yc(s,k,R);S!==null&&(wr.updateMultisampleRenderTarget(S),wr.updateRenderTargetMipmap(S)),k.isScene===!0&&k.onAfterRender(w,k,R),dr.resetDefaultState(),_=-1,v=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?s=f[f.length-1]:s=null};function Wt(k,R,O,F){if(k.visible===!1)return;if(k.layers.test(R.layers)){if(k.isGroup)O=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(R);else if(k.isLight)p.pushLight(k),k.castShadow&&p.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||G.intersectsSprite(k)){F&&Y.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Z);const ur=Jr.update(k),xr=k.material;xr.visible&&s.push(k,ur,xr,O,Y.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(k.isSkinnedMesh&&k.skeleton.frame!==Dr.render.frame&&(k.skeleton.update(),k.skeleton.frame=Dr.render.frame),!k.frustumCulled||G.intersectsObject(k))){F&&Y.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Z);const ur=Jr.update(k),xr=k.material;if(Array.isArray(xr)){const yr=ur.groups;for(let Lr=0,Sr=yr.length;Lr<Sr;Lr++){const Tr=yr[Lr],Ur=xr[Tr.materialIndex];Ur&&Ur.visible&&s.push(k,ur,Ur,O,Y.z,Tr)}}else xr.visible&&s.push(k,ur,xr,O,Y.z,null)}}const mr=k.children;for(let ur=0,xr=mr.length;ur<xr;ur++)Wt(mr[ur],R,O,F)}function Yc(k,R,O,F){const X=k.opaque,mr=k.transmissive,ur=k.transparent;p.setupLightsView(O),mr.length>0&&Qg(X,R,O),F&&cr.viewport(M.copy(F)),X.length>0&&Ea(X,R,O),mr.length>0&&Ea(mr,R,O),ur.length>0&&Ea(ur,R,O),cr.buffers.depth.setTest(!0),cr.buffers.depth.setMask(!0),cr.buffers.color.setMask(!0),cr.setPolygonOffset(!1)}function Qg(k,R,O){const F=vr.isWebGL2;H===null&&(H=new le(1,1,{generateMipmaps:!0,type:_r.has("EXT_color_buffer_half_float")?va:ce,minFilter:bi,samples:F&&a===!0?4:0})),w.getDrawingBufferSize($),F?H.setSize($.x,$.y):H.setSize(Tc($.x),Tc($.y));const X=w.getRenderTarget();w.setRenderTarget(H),w.clear();const mr=w.toneMapping;w.toneMapping=fo,Ea(k,R,O),w.toneMapping=mr,wr.updateMultisampleRenderTarget(H),wr.updateRenderTargetMipmap(H),w.setRenderTarget(X)}function Ea(k,R,O){const F=R.isScene===!0?R.overrideMaterial:null;for(let X=0,mr=k.length;X<mr;X++){const ur=k[X],xr=ur.object,yr=ur.geometry,Lr=F===null?ur.material:F,Sr=ur.group;xr.layers.test(O.layers)&&rd(xr,R,O,yr,Lr,Sr)}}function rd(k,R,O,F,X,mr){k.onBeforeRender(w,R,O,F,X,mr),k.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),X.onBeforeRender(w,R,O,F,k,mr),X.transparent===!0&&X.side===He?(X.side=Dt,X.needsUpdate=!0,w.renderBufferDirect(O,R,F,X,k,mr),X.side=ua,X.needsUpdate=!0,w.renderBufferDirect(O,R,F,X,k,mr),X.side=He):w.renderBufferDirect(O,R,F,X,k,mr),k.onAfterRender(w,R,O,F,X,mr)}function vi(k,R,O){R.isScene!==!0&&(R=ir);const F=zr.get(k),X=p.state.lights,mr=p.state.shadowsArray,ur=X.state.version,xr=Pr.getParameters(k,X.state,mr,R,O),yr=Pr.getProgramCacheKey(xr);let Lr=F.programs;F.environment=k.isMeshStandardMaterial?R.environment:null,F.fog=R.fog,F.envMap=(k.isMeshStandardMaterial?dt:rt).get(k.envMap||F.environment),Lr===void 0&&(k.addEventListener("dispose",pr),Lr=new Map,F.programs=Lr);let Sr=Lr.get(yr);if(Sr!==void 0){if(F.currentProgram===Sr&&F.lightsStateVersion===ur)return Zc(k,xr),Sr}else xr.uniforms=Pr.getUniforms(k),k.onBuild(O,xr,w),k.onBeforeCompile(xr,w),Sr=Pr.acquireProgram(xr,yr),Lr.set(yr,Sr),F.uniforms=xr.uniforms;const Tr=F.uniforms;(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Tr.clippingPlanes=x.uniform),Zc(k,xr),F.needsLights=ed(k),F.lightsStateVersion=ur,F.needsLights&&(Tr.ambientLightColor.value=X.state.ambient,Tr.lightProbe.value=X.state.probe,Tr.directionalLights.value=X.state.directional,Tr.directionalLightShadows.value=X.state.directionalShadow,Tr.spotLights.value=X.state.spot,Tr.spotLightShadows.value=X.state.spotShadow,Tr.rectAreaLights.value=X.state.rectArea,Tr.ltc_1.value=X.state.rectAreaLTC1,Tr.ltc_2.value=X.state.rectAreaLTC2,Tr.pointLights.value=X.state.point,Tr.pointLightShadows.value=X.state.pointShadow,Tr.hemisphereLights.value=X.state.hemi,Tr.directionalShadowMap.value=X.state.directionalShadowMap,Tr.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Tr.spotShadowMap.value=X.state.spotShadowMap,Tr.spotShadowMatrix.value=X.state.spotShadowMatrix,Tr.pointShadowMap.value=X.state.pointShadowMap,Tr.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ur=Sr.getUniforms(),Oo=ti.seqWithValue(Ur.seq,Tr);return F.currentProgram=Sr,F.uniformsList=Oo,Sr}function Zc(k,R){const O=zr.get(k);O.outputEncoding=R.outputEncoding,O.instancing=R.instancing,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function td(k,R,O,F,X){R.isScene!==!0&&(R=ir),wr.resetTextureUnits();const mr=R.fog,ur=F.isMeshStandardMaterial?R.environment:null,xr=S===null?w.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:ne,yr=(F.isMeshStandardMaterial?dt:rt).get(F.envMap||ur),Lr=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Sr=!!F.normalMap&&!!O.attributes.tangent,Tr=!!O.morphAttributes.position,Ur=!!O.morphAttributes.normal,Oo=!!O.morphAttributes.color,de=F.toneMapped?w.toneMapping:fo,se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,jt=se!==void 0?se.length:0,Cr=zr.get(F),pe=p.state.lights;if(j===!0&&(N===!0||k!==v)){const qt=k===v&&F.id===_;x.setState(F,k,qt)}let Vr=!1;F.version===Cr.__version?(Cr.needsLights&&Cr.lightsStateVersion!==pe.state.version||Cr.outputEncoding!==xr||X.isInstancedMesh&&Cr.instancing===!1||!X.isInstancedMesh&&Cr.instancing===!0||X.isSkinnedMesh&&Cr.skinning===!1||!X.isSkinnedMesh&&Cr.skinning===!0||Cr.envMap!==yr||F.fog===!0&&Cr.fog!==mr||Cr.numClippingPlanes!==void 0&&(Cr.numClippingPlanes!==x.numPlanes||Cr.numIntersection!==x.numIntersection)||Cr.vertexAlphas!==Lr||Cr.vertexTangents!==Sr||Cr.morphTargets!==Tr||Cr.morphNormals!==Ur||Cr.morphColors!==Oo||Cr.toneMapping!==de||vr.isWebGL2===!0&&Cr.morphTargetsCount!==jt)&&(Vr=!0):(Vr=!0,Cr.__version=F.version);let Xt=Cr.currentProgram;Vr===!0&&(Xt=vi(F,R,X));let vo=!1,$e=!1,yi=!1;const nt=Xt.getUniforms(),Ke=Cr.uniforms;if(cr.useProgram(Xt.program)&&(vo=!0,$e=!0,yi=!0),F.id!==_&&(_=F.id,$e=!0),vo||v!==k){if(nt.setValue(W,"projectionMatrix",k.projectionMatrix),vr.logarithmicDepthBuffer&&nt.setValue(W,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),v!==k&&(v=k,$e=!0,yi=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const qt=nt.map.cameraPosition;qt!==void 0&&qt.setValue(W,Y.setFromMatrixPosition(k.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&nt.setValue(W,"isOrthographic",k.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||X.isSkinnedMesh)&&nt.setValue(W,"viewMatrix",k.matrixWorldInverse)}if(X.isSkinnedMesh){nt.setOptional(W,X,"bindMatrix"),nt.setOptional(W,X,"bindMatrixInverse");const qt=X.skeleton;qt&&(vr.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),nt.setValue(W,"boneTexture",qt.boneTexture,wr),nt.setValue(W,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xi=O.morphAttributes;return(xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0&&vr.isWebGL2===!0)&&rr.update(X,O,F,Xt),($e||Cr.receiveShadow!==X.receiveShadow)&&(Cr.receiveShadow=X.receiveShadow,nt.setValue(W,"receiveShadow",X.receiveShadow)),$e&&(nt.setValue(W,"toneMappingExposure",w.toneMappingExposure),Cr.needsLights&&od(Ke,yi),mr&&F.fog===!0&&to.refreshFogUniforms(Ke,mr),to.refreshMaterialUniforms(Ke,F,L,D,H),ti.upload(W,Cr.uniformsList,Ke,wr)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ti.upload(W,Cr.uniformsList,Ke,wr),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&nt.setValue(W,"center",X.center),nt.setValue(W,"modelViewMatrix",X.modelViewMatrix),nt.setValue(W,"normalMatrix",X.normalMatrix),nt.setValue(W,"modelMatrix",X.matrixWorld),Xt}function od(k,R){k.ambientLightColor.needsUpdate=R,k.lightProbe.needsUpdate=R,k.directionalLights.needsUpdate=R,k.directionalLightShadows.needsUpdate=R,k.pointLights.needsUpdate=R,k.pointLightShadows.needsUpdate=R,k.spotLights.needsUpdate=R,k.spotLightShadows.needsUpdate=R,k.rectAreaLights.needsUpdate=R,k.hemisphereLights.needsUpdate=R}function ed(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return h},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(k,R,O){zr.get(k.texture).__webglTexture=R,zr.get(k.depthTexture).__webglTexture=O;const F=zr.get(k);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||_r.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(k,R){const O=zr.get(k);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(k,R=0,O=0){S=k,h=R,y=O;let F=!0;if(k){const yr=zr.get(k);yr.__useDefaultFramebuffer!==void 0?(cr.bindFramebuffer(36160,null),F=!1):yr.__webglFramebuffer===void 0?wr.setupRenderTarget(k):yr.__hasExternalTextures&&wr.rebindTextures(k,zr.get(k.texture).__webglTexture,zr.get(k.depthTexture).__webglTexture)}let X=null,mr=!1,ur=!1;if(k){const yr=k.texture;(yr.isData3DTexture||yr.isDataArrayTexture)&&(ur=!0);const Lr=zr.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(X=Lr[R],mr=!0):vr.isWebGL2&&k.samples>0&&wr.useMultisampledRTT(k)===!1?X=zr.get(k).__webglMultisampledFramebuffer:X=Lr,M.copy(k.viewport),C.copy(k.scissor),u=k.scissorTest}else M.copy(A).multiplyScalar(L).floor(),C.copy(B).multiplyScalar(L).floor(),u=I;if(cr.bindFramebuffer(36160,X)&&vr.drawBuffers&&F&&cr.drawBuffers(k,X),cr.viewport(M),cr.scissor(C),cr.setScissorTest(u),mr){const yr=zr.get(k.texture);W.framebufferTexture2D(36160,36064,34069+R,yr.__webglTexture,O)}else if(ur){const yr=zr.get(k.texture),Lr=R||0;W.framebufferTextureLayer(36160,36064,yr.__webglTexture,O||0,Lr)}_=-1},this.readRenderTargetPixels=function(k,R,O,F,X,mr,ur){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xr=zr.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&ur!==void 0&&(xr=xr[ur]),xr){cr.bindFramebuffer(36160,xr);try{const yr=k.texture,Lr=yr.format,Sr=yr.type;if(Lr!==Kt&&U.convert(Lr)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Tr=Sr===va&&(_r.has("EXT_color_buffer_half_float")||vr.isWebGL2&&_r.has("EXT_color_buffer_float"));if(Sr!==ce&&U.convert(Sr)!==W.getParameter(35738)&&!(Sr===Jo&&(vr.isWebGL2||_r.has("OES_texture_float")||_r.has("WEBGL_color_buffer_float")))&&!Tr){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=k.width-F&&O>=0&&O<=k.height-X&&W.readPixels(R,O,F,X,U.convert(Lr),U.convert(Sr),mr)}finally{const yr=S!==null?zr.get(S).__webglFramebuffer:null;cr.bindFramebuffer(36160,yr)}}},this.copyFramebufferToTexture=function(k,R,O=0){const F=Math.pow(2,-O),X=Math.floor(R.image.width*F),mr=Math.floor(R.image.height*F);wr.setTexture2D(R,0),W.copyTexSubImage2D(3553,O,0,0,k.x,k.y,X,mr),cr.unbindTexture()},this.copyTextureToTexture=function(k,R,O,F=0){const X=R.image.width,mr=R.image.height,ur=U.convert(O.format),xr=U.convert(O.type);wr.setTexture2D(O,0),W.pixelStorei(37440,O.flipY),W.pixelStorei(37441,O.premultiplyAlpha),W.pixelStorei(3317,O.unpackAlignment),R.isDataTexture?W.texSubImage2D(3553,F,k.x,k.y,X,mr,ur,xr,R.image.data):R.isCompressedTexture?W.compressedTexSubImage2D(3553,F,k.x,k.y,R.mipmaps[0].width,R.mipmaps[0].height,ur,R.mipmaps[0].data):W.texSubImage2D(3553,F,k.x,k.y,ur,xr,R.image),F===0&&O.generateMipmaps&&W.generateMipmap(3553),cr.unbindTexture()},this.copyTextureToTexture3D=function(k,R,O,F,X=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mr=k.max.x-k.min.x+1,ur=k.max.y-k.min.y+1,xr=k.max.z-k.min.z+1,yr=U.convert(F.format),Lr=U.convert(F.type);let Sr;if(F.isData3DTexture)wr.setTexture3D(F,0),Sr=32879;else if(F.isDataArrayTexture)wr.setTexture2DArray(F,0),Sr=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,F.flipY),W.pixelStorei(37441,F.premultiplyAlpha),W.pixelStorei(3317,F.unpackAlignment);const Tr=W.getParameter(3314),Ur=W.getParameter(32878),Oo=W.getParameter(3316),de=W.getParameter(3315),se=W.getParameter(32877),jt=O.isCompressedTexture?O.mipmaps[0]:O.image;W.pixelStorei(3314,jt.width),W.pixelStorei(32878,jt.height),W.pixelStorei(3316,k.min.x),W.pixelStorei(3315,k.min.y),W.pixelStorei(32877,k.min.z),O.isDataTexture||O.isData3DTexture?W.texSubImage3D(Sr,X,R.x,R.y,R.z,mr,ur,xr,yr,Lr,jt.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Sr,X,R.x,R.y,R.z,mr,ur,xr,yr,jt.data)):W.texSubImage3D(Sr,X,R.x,R.y,R.z,mr,ur,xr,yr,Lr,jt),W.pixelStorei(3314,Tr),W.pixelStorei(32878,Ur),W.pixelStorei(3316,Oo),W.pixelStorei(3315,de),W.pixelStorei(32877,se),X===0&&F.generateMipmaps&&W.generateMipmap(Sr),cr.unbindTexture()},this.initTexture=function(k){k.isCubeTexture?wr.setTextureCube(k,0):k.isData3DTexture?wr.setTexture3D(k,0):k.isDataArrayTexture?wr.setTexture2DArray(k,0):wr.setTexture2D(k,0),cr.unbindTexture()},this.resetState=function(){h=0,y=0,S=null,cr.reset(),dr.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nb extends Zg{}nb.prototype.isWebGL1Renderer=!0;class lb extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(r,t){return super.copy(r,t),r.background!==null&&(this.background=r.background.clone()),r.environment!==null&&(this.environment=r.environment.clone()),r.fog!==null&&(this.fog=r.fog.clone()),r.overrideMaterial!==null&&(this.overrideMaterial=r.overrideMaterial.clone()),this.autoUpdate=r.autoUpdate,this.matrixAutoUpdate=r.matrixAutoUpdate,this}toJSON(r){const t=super.toJSON(r);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class $g extends Ta{constructor(r){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nr(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.alphaMap=r.alphaMap,this.size=r.size,this.sizeAttenuation=r.sizeAttenuation,this.fog=r.fog,this}}const _l=new $r,Ec=new Ig,Ka=new hi,Ja=new P;class gb extends It{constructor(r=new ro,t=new $g){super(),this.isPoints=!0,this.type="Points",this.geometry=r,this.material=t,this.updateMorphTargets()}copy(r,t){return super.copy(r,t),this.material=r.material,this.geometry=r.geometry,this}raycast(r,t){const o=this.geometry,e=this.matrixWorld,a=r.params.Points.threshold,c=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),Ka.copy(o.boundingSphere),Ka.applyMatrix4(e),Ka.radius+=a,r.ray.intersectsSphere(Ka)===!1)return;_l.copy(e).invert(),Ec.copy(r.ray).applyMatrix4(_l);const i=a/((this.scale.x+this.scale.y+this.scale.z)/3),g=i*i,l=o.index,s=o.attributes.position;if(l!==null){const p=Math.max(0,c.start),f=Math.min(l.count,c.start+c.count);for(let b=p,w=f;b<w;b++){const m=l.getX(b);Ja.fromBufferAttribute(s,m),zl(Ja,m,g,e,r,t,this)}}else{const p=Math.max(0,c.start),f=Math.min(s.count,c.start+c.count);for(let b=p,w=f;b<w;b++)Ja.fromBufferAttribute(s,b),zl(Ja,b,g,e,r,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const e=t[o[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=e.length;a<c;a++){const i=e[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}}function zl(n,r,t,o,e,a,c){const i=Ec.distanceSqToPoint(n);if(i<t){const g=new P;Ec.closestPointToPoint(n,g),g.applyMatrix4(o);const l=e.ray.origin.distanceTo(g);if(l<e.near||l>e.far)return;a.push({distance:l,distanceToRay:Math.sqrt(i),point:g,index:r,face:null,object:c})}}class pi extends ro{constructor(r=1,t=32,o=16,e=0,a=Math.PI*2,c=0,i=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:r,widthSegments:t,heightSegments:o,phiStart:e,phiLength:a,thetaStart:c,thetaLength:i},t=Math.max(3,Math.floor(t)),o=Math.max(2,Math.floor(o));const g=Math.min(c+i,Math.PI);let l=0;const d=[],s=new P,p=new P,f=[],b=[],w=[],m=[];for(let h=0;h<=o;h++){const y=[],S=h/o;let _=0;h==0&&c==0?_=.5/t:h==o&&g==Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){const M=v/t;s.x=-r*Math.cos(e+M*a)*Math.sin(c+S*i),s.y=r*Math.cos(c+S*i),s.z=r*Math.sin(e+M*a)*Math.sin(c+S*i),b.push(s.x,s.y,s.z),p.copy(s).normalize(),w.push(p.x,p.y,p.z),m.push(M+_,1-S),y.push(l++)}d.push(y)}for(let h=0;h<o;h++)for(let y=0;y<t;y++){const S=d[h][y+1],_=d[h][y],v=d[h+1][y],M=d[h+1][y+1];(h!==0||c>0)&&f.push(S,_,M),(h!==o-1||g<Math.PI)&&f.push(_,v,M)}this.setIndex(f),this.setAttribute("position",new Gt(b,3)),this.setAttribute("normal",new Gt(w,3)),this.setAttribute("uv",new Gt(m,2))}static fromJSON(r){return new pi(r.radius,r.widthSegments,r.heightSegments,r.phiStart,r.phiLength,r.thetaStart,r.thetaLength)}}const Ml={enabled:!1,files:{},add:function(n,r){this.enabled!==!1&&(this.files[n]=r)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class db{constructor(r,t,o){const e=this;let a=!1,c=0,i=0,g;const l=[];this.onStart=void 0,this.onLoad=r,this.onProgress=t,this.onError=o,this.itemStart=function(d){i++,a===!1&&e.onStart!==void 0&&e.onStart(d,c,i),a=!0},this.itemEnd=function(d){c++,e.onProgress!==void 0&&e.onProgress(d,c,i),c===i&&(a=!1,e.onLoad!==void 0&&e.onLoad())},this.itemError=function(d){e.onError!==void 0&&e.onError(d)},this.resolveURL=function(d){return g?g(d):d},this.setURLModifier=function(d){return g=d,this},this.addHandler=function(d,s){return l.push(d,s),this},this.removeHandler=function(d){const s=l.indexOf(d);return s!==-1&&l.splice(s,2),this},this.getHandler=function(d){for(let s=0,p=l.length;s<p;s+=2){const f=l[s],b=l[s+1];if(f.global&&(f.lastIndex=0),f.test(d))return b}return null}}}const sb=new db;class Kg{constructor(r){this.manager=r!==void 0?r:sb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(r,t){const o=this;return new Promise(function(e,a){o.load(r,e,t,a)})}parse(){}setCrossOrigin(r){return this.crossOrigin=r,this}setWithCredentials(r){return this.withCredentials=r,this}setPath(r){return this.path=r,this}setResourcePath(r){return this.resourcePath=r,this}setRequestHeader(r){return this.requestHeader=r,this}}class pb extends Kg{constructor(r){super(r)}load(r,t,o,e){this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);const a=this,c=Ml.get(r);if(c!==void 0)return a.manager.itemStart(r),setTimeout(function(){t&&t(c),a.manager.itemEnd(r)},0),c;const i=ya("img");function g(){d(),Ml.add(r,this),t&&t(this),a.manager.itemEnd(r)}function l(s){d(),e&&e(s),a.manager.itemError(r),a.manager.itemEnd(r)}function d(){i.removeEventListener("load",g,!1),i.removeEventListener("error",l,!1)}return i.addEventListener("load",g,!1),i.addEventListener("error",l,!1),r.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),a.manager.itemStart(r),i.src=r,i}}class wb extends Kg{constructor(r){super(r)}load(r,t,o,e){const a=new Rt,c=new pb(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(r,function(i){a.image=i,a.needsUpdate=!0,t!==void 0&&t(a)},o,e),a}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);var mb="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1);}",fb="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",bb="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",hb="varying vec3 vertexNormal;void main(){float intensity=pow(0.6-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}";let xa,Yo,da,oi,ei,po;const De={x:void 0,y:void 0};function ub(){po=document.querySelector("#canvasContainer"),xa=new Tt(75,po.offsetWidth/po.offsetHeight,.1,15e3),xa.position.z=15,Yo=new lb,Yo.background=new Nr(0);const n=new uo({vertexShader:mb,fragmentShader:fb,uniforms:{globeTexture:{value:new wb().load("./img/earth_uv.jpeg")}}});oi=new Jt(new pi(5,50,50),n),Yo.add(oi);const r=new Jt(new pi(5,50,50),new uo({vertexShader:bb,fragmentShader:hb,blending:yc,side:Dt}));r.scale.set(1.1,1.1,1.1),Yo.add(r),ei=new ca,ei.add(oi),Yo.add(ei);const t=new ro,o=new $g({color:16777215}),e=[];for(let c=0;c<2e3;c++){const i=(Math.random()-.5)*2e3,g=(Math.random()-.5)*2e3,l=-(Math.random()+.002)*2e3;e.push(i,g,l)}console.log(e),t.setAttribute("position",new Gt(e,3));const a=new gb(t,o);Yo.add(a),da=new Zg({antialias:!0,canvas:document.querySelector("canvas")}),da.setPixelRatio(window.devicePixelRatio),da.setSize(po.offsetWidth,po.offsetHeight),window.addEventListener("resize",xb)}function Jg(){requestAnimationFrame(Jg),vb(),oi.rotation.y+=.001,De.x!==void 0&&De.y!==void 0&&_g.to(ei.rotation,{x:-De.y*.3,y:De.x*.5,duration:2})}function vb(){da.render(Yo,xa)}document.addEventListener("mousemove",yb);function yb(n){De.x=n.clientX/innerWidth*2-1,De.y=-(n.clientY/innerHeight)*2-1}document.addEventListener("DOMContentLoaded",function(n){ub(),Jg()});function xb(){xa.aspect=po.offsetWidth/po.offsetHeight,xa.updateProjectionMatrix(),da.setSize(po.offsetWidth,po.offsetHeight)}
