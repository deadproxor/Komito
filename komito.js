/* @license http://www.apache.org/licenses/LICENSE-2.0 */
(function(){
var g=document,k=window;function l(c,b,a){c.attachEvent?c.attachEvent("on"+b,a):c.addEventListener(b,a,!1)}function m(c,b,a){c.attachEvent?c.detachEvent("on"+b,a):c.removeEventListener(b,a,!1)}function n(c){c=c||k.event;return c.target||c.srcElement}
function r(c,b){var a=g.createElement("SCRIPT"),d=!1,f;a.src=c;a.onload=a.onreadystatechange=function(){f=a.readyState||"complete";d||"loaded"!==f&&"complete"!==f||(d=!0,a.onload=a.onreadystatechange=null,a.parentNode.removeChild(a),b&&b())};t.parentNode.appendChild(a)}var t,w=g&&g.getElementsByTagName("SCRIPT");t=w[w.length-1];var x=Array.prototype.slice;function y(c){return(k.JSON?JSON.parse(c):eval("("+c+")"))||null};var z={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:/[?&]debug=1/.test(location.search)},A=/\.([0-9a-z]+)(?:[\?#]|$)/i,B=k.GoogleAnalyticsObject||"ga";
function C(c){var b,a=b=arguments,d=Array.isArray;b=(d?d(a):"[object Array]"===Object.prototype.toString.call(a))?b:x.call(b);b[0]=b[0]?"social":"event";"function"===typeof k[B]&&(a=k[B].getAll&&k[B].getAll(),d=b[1].indexOf("video")?b:b.concat([{nonInteraction:1}]),a&&D(a,"send",d));var a=b,f=k.TagLoader,d=k.s,e=[],h=1;if(f&&d&&d instanceof f){for(;h<a.length;h++)f="prop"+h,e.push(f),d[f]=a[h];d.linkTrackEvents="None";d.linkTrackVars=e.join(",");D([d],"tl",[d,"download"===a[1]?"d":"o",a[0]])}a=[].concat(b);
"social"==a[0]&&(a[1]="social:"+a.splice(2,1,a[1])[0]);a=a.slice(1);D([k],"ClickTaleEvent",[a.join(":")]);D([k],"__utmTrackEvent",a);k._hmt&&D([k._hmt],"push",[["_trackEvent"].concat(a)]);a=b;if(k._gat||k._gaq)b=k._gat&&k._gat._getTrackers&&k._gat._getTrackers(),a=a[1].indexOf("video")?a:a.concat([1]),a[0]={social:"_trackSocial",event:"_trackEvent"}[a[0]],b?D(b,a[0],a.slice(1)):k._gaq&&D([k._gaq],"push",[a])}
function D(c,b,a){var d=c.length,f;for(E(b,a);d;)f=c[--d],"function"===typeof f[b]&&f[b].apply(f,a)}function E(c){var b=k.console;F.debugMode&&b&&b.log.apply(b,arguments)}var F=k._komito||{},G;for(G in z)G in F||(F[G]=z[G]);H&&new H;I&&new I;J&&new J;K&&new K;F.trackMedia&&(L&&new L,M&&new M,O&&new O);var T={trackFacebook:P,trackLinkedIn:Q,trackTwitter:R,trackUsers:S},U;for(U in T)F[U]&&new T[U];function H(){function c(b){b=n(b);for(var a=b.elements,d=a.length,f=0,e;f<d;)e=a[f++],e.name&&C(0,"form",b.getAttribute("name")||b.getAttribute("id")||"form",e.name+":"+(e.type||e.tagName));m(b,"submit",c)}(function(){if(F.trackForms)for(var b=g.forms,a=b.length;a;)l(b[--a],"submit",c)})()};function I(){function c(a){a=d(a);var b="outbound",h=a.hostname,p=a.pathname.split("/"),v=f(a),N=e[h.replace(/^www\./,"")];C(0,b,h,v);N&&("twitter.com"===h.substr(-11)&&"intent"===p[p.length-2]&&(b="intent-"+p.pop()),C(1,N,b,v));m(a,"mousedown",c)}function b(a){a=d(a);var h=f(a),c=(h.match(A)||[""]).pop().toLowerCase();C(0,"download",c,h);m(a,"mousedown",b)}function a(b){b=d(b);var c=b.protocol.slice(0,-1),h=f(b),e=h.slice(c.length+1).split("?")[0];C(0,"cta:"+c,e,h);m(b,"mousedown",a)}function d(a){for(a=
n(a);a&&"A"!==a.tagName;)a=a.parentNode;return a}function f(a){return a.href||a.getAttribute("href")||""}var e={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo",
"reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"};(function(){for(var d=g&&g.getElementsByTagName("A"),e=d.length;e;){var u=d[--e],p=f(u),v=/^https?:$/.test(p),p=(p.match(A)||[""]).pop().toLowerCase();F.trackOutbound&&v&&!~u.hostname.indexOf(location.hostname)&&l(u,"mousedown",c);F.trackDownloads&&p&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,".indexOf(","+
p+",")&&l(u,"mousedown",b);F.trackActions&&!v&&l(u,"mousedown",a)}})()};function J(){function c(){C(0,"print",g.title,location.href);b?b.removeListener(c):m(k,"afterprint",c);b=c=null}var b;(function(){if(F.trackPrint){var a=k.matchMedia;(b=a&&a("print"))?b.addListener(c):l(k,"afterprint",c)}})()};function K(){(function(){if(F.trackScroll){var c={25:0,50:0,75:0,100:0},b=g.documentElement,a;l(k,"scroll",function(){(a=25*~~((b.scrollTop+g.body.scrollTop)/(b.scrollHeight-b.clientHeight)*100/25))&&!c[a]&&(c[a]=1,C(0,"scroll","depth",a+"%"))})}})()};function L(){function c(b){for(var a=[],d=arguments.length,c,e;d;)for(c=arguments[--d],c=g&&g.getElementsByTagName(c),e=0;e<c.length;)a.push(c[e++]);return a}(function(){function b(a){e=n(a);h=a.type;~h.indexOf("fullscreen")&&(h=g.fullScreen||g.mozFullScreen||g.webkitIsFullScreen?"fullscreen":"");h&&C(0,e.tagName.toLowerCase()+":html5",h,e.currentSrc||e.src)}for(var a="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),d=c("AUDIO","VIDEO"),f=d.length,e,h,q;f--;)for(e=
d[f],q=0;6>q;)l(e,a[q++],b)})()};function M(){function c(a){var d=k.Vimeo&&k.Vimeo.Player;if(d)for(var c=a.length,h;c;)h=a[--c],b(new d(h),h.src.split("?")[0])}function b(a,b){a.on("ended",function(){C(0,"video:vimeo","ended",b)});a.on("play",function(){C(0,"video:vimeo","play",b)});a.on("pause",function(){C(0,"video:vimeo","pause",b)})}var a=/^(https?:)?\/\/player\.vimeo\.com\/video\/\d+/;(function(){for(var b=g&&g.getElementsByTagName("IFRAME"),f=b.length,e=[],h;f;)h=b[--f],a.test(h.src)&&e.push(h);e.length&&(k.Vimeo&&k.Vimeo.Player?
c(e):r("https://player.vimeo.com/api/player.js",function(){c(e)}))})()};function O(){function c(a){var b=["ended","play","pause"][a.data];b&&C(0,"video:youtube",b,a.target.getVideoUrl())}var b=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)?\.com\/(embed|watch|v)/;(function(){for(var a=g&&g.getElementsByTagName("IFRAME"),d=a.length,f=0,e=[],h,q;f<d;)h=a[f++],q=h.src,b.test(q)&&(0>q.indexOf("enablejsapi")&&(h.src+=(~q.indexOf("?")?"&":"?")+"enablejsapi=1"),e.push(h));if(d=e.length)k.onYouTubeIframeAPIReady=function(){for(f=0;f<d;)l(new k.YT.Player(e[f++]),"onStateChange",
c)},k.YT||r("https://www.youtube.com/iframe_api")})()};function P(){function c(){if(9>a++){var d=k.FB;if(d=d&&d.Event&&d.Event.subscribe)try{d("edge.create",function(){b("like")}),d("edge.remove",function(){b("unlike")}),d("message.send",function(){b("message")})}catch(f){}else setTimeout(c,5E3)}}function b(a){C(1,"Facebook",a,location.href)}var a=0;c()};function Q(){function c(b,a){var c=["cb_onsuccess",a,+new Date].join("_");b.onsuccess=(b.onsuccess?b.onsuccess+",":"")+c;k[c]=function(){C(1,"LinkedIn",a,location.href)}}(function(){for(var b=g&&g.getElementsByTagName("SCRIPT"),a=b.length,d=0,f,e;d<a;)f=b[d++],e=(f.getAttribute("type")||"").toLowerCase(),e.indexOf("in/")||c(f,e.substr(3))})()};function R(){function c(){var a={},d,f,e;9>b++&&(k.twttr&&k.twttr.ready?k.__twitterIntentHandler||(l(k,"message",function(b){try{"twitter.com"===b.origin.substr(-11)&&b.data&&(e=(f=y(b.data))&&f.params)&&"trigger"===f.method&&(d=e[0],"click"===d&&e[1]&&(d+="-"+e[1].region),a[d]||(a[d]=1,C(1,"Twitter",d,location.href)))}catch(q){}}),k.twttr.ready(function(a){a.events.bind("message",function(){})}),k.__twitterIntentHandler=!0):setTimeout(c,5E3))}var b=0;c()};function S(){var c={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1","Google+":"https://plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"https://twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"};
(function(){function b(a,b){l(a,"load",function(){C(1,b,"pageview",location.href)});a.src=c[b]}function a(a){a(function(a){a&&"unknown"!==a.status&&!f++&&C(1,"Facebook","pageview",location.href)})}function d(){var b=k.FB&&k.FB.getLoginStatus;b?(a(b),l(k,"message",function(c){try{"facebook.com"===c.origin.substr(-12)&&c.data&&~c.data.indexOf("xd_action=proxy_ready")&&a(b)}catch(p){}})):--e&&setTimeout(d,2E3)}var f=0,e=5,h;for(h in c)b(new Image(1,1),h);d()})()};
})();
