(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zr="160",Ro=0,hs=1,Po=2,Va=1,Lo=2,Zt=3,fn=0,Et=1,Lt=2,cn=0,Kn=1,fs=2,ds=3,ps=4,Do=5,Mn=100,Uo=101,Io=102,ms=103,gs=104,No=200,Fo=201,Oo=202,Bo=203,Vr=204,kr=205,zo=206,Ho=207,Go=208,Vo=209,ko=210,Wo=211,Xo=212,qo=213,Yo=214,Ko=0,$o=1,jo=2,$i=3,Zo=4,Jo=5,Qo=6,el=7,ka=0,tl=1,nl=2,un=0,il=1,rl=2,sl=3,al=4,ol=5,ll=6,Wa=300,jn=301,Zn=302,Wr=303,Xr=304,er=306,Jn=1e3,Bt=1001,qr=1002,Ze=1003,vs=1004,lr=1005,Pt=1006,cl=1007,pi=1008,hn=1009,ul=1010,hl=1011,Jr=1012,Xa=1013,on=1014,ln=1015,mi=1016,qa=1017,Ya=1018,Tn=1020,fl=1021,zt=1023,dl=1024,pl=1025,An=1026,Qn=1027,ml=1028,Ka=1029,gl=1030,$a=1031,ja=1033,cr=33776,ur=33777,hr=33778,fr=33779,xs=35840,_s=35841,Ss=35842,ys=35843,Za=36196,Ms=37492,Es=37496,Ts=37808,As=37809,bs=37810,ws=37811,Cs=37812,Rs=37813,Ps=37814,Ls=37815,Ds=37816,Us=37817,Is=37818,Ns=37819,Fs=37820,Os=37821,dr=36492,Bs=36494,zs=36495,vl=36283,Hs=36284,Gs=36285,Vs=36286,Ja=3e3,bn=3001,xl=3200,_l=3201,Sl=0,yl=1,Dt="",rt="srgb",en="srgb-linear",Qr="display-p3",tr="display-p3-linear",ji="linear",je="srgb",Zi="rec709",Ji="p3",Rn=7680,ks=519,Ml=512,El=513,Tl=514,Qa=515,Al=516,bl=517,wl=518,Cl=519,Ws=35044,Xs="300 es",Yr=1035,Jt=2e3,Qi=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let n=0,l=r.length;n<l;n++)r[n].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Kr=180/Math.PI;function vi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[s&255]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Rl(s,e){return(s%e+e)%e}function mr(s,e,t){return(1-t)*s+t*e}function qs(s){return(s&s-1)===0&&s!==0}function $r(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,l=this.y-e.y;return this.x=n*i-l*r+e.x,this.y=n*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,n,l,a,c,h){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,l,a,c,h)}set(e,t,i,r,n,l,a,c,h){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=n,u[5]=c,u[6]=i,u[7]=l,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,l=i[0],a=i[3],c=i[6],h=i[1],u=i[4],p=i[7],f=i[2],o=i[5],m=i[8],v=r[0],d=r[3],g=r[6],E=r[1],S=r[4],A=r[7],x=r[2],M=r[5],T=r[8];return n[0]=l*v+a*E+c*x,n[3]=l*d+a*S+c*M,n[6]=l*g+a*A+c*T,n[1]=h*v+u*E+p*x,n[4]=h*d+u*S+p*M,n[7]=h*g+u*A+p*T,n[2]=f*v+o*E+m*x,n[5]=f*d+o*S+m*M,n[8]=f*g+o*A+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],l=e[4],a=e[5],c=e[6],h=e[7],u=e[8];return t*l*u-t*a*h-i*n*u+i*a*c+r*n*h-r*l*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],l=e[4],a=e[5],c=e[6],h=e[7],u=e[8],p=u*l-a*h,f=a*c-u*n,o=h*n-l*c,m=t*p+i*f+r*o;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=p*v,e[1]=(r*h-u*i)*v,e[2]=(a*i-r*l)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*n-a*t)*v,e[6]=o*v,e[7]=(i*c-h*t)*v,e[8]=(l*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,l,a){const c=Math.cos(n),h=Math.sin(n);return this.set(i*c,i*h,-i*(c*l+h*a)+l+e,-r*h,r*c,-r*(-h*l+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Oe;function eo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pl(){const s=gi("canvas");return s.style.display="block",s}const Ys={};function di(s){s in Ys||(Ys[s]=!0,console.warn(s))}const Ks=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$s=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ei={[en]:{transfer:ji,primaries:Zi,toReference:s=>s,fromReference:s=>s},[rt]:{transfer:je,primaries:Zi,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[tr]:{transfer:ji,primaries:Ji,toReference:s=>s.applyMatrix3($s),fromReference:s=>s.applyMatrix3(Ks)},[Qr]:{transfer:je,primaries:Ji,toReference:s=>s.convertSRGBToLinear().applyMatrix3($s),fromReference:s=>s.applyMatrix3(Ks).convertLinearToSRGB()}},Ll=new Set([en,tr]),Xe={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ll.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Ei[e].toReference,r=Ei[t].fromReference;return r(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ei[s].primaries},getTransfer:function(s){return s===Dt?ji:Ei[s].transfer}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pn;class to{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=gi("canvas")),Pn.width=e.width,Pn.height=e.height;const i=Pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let l=0;l<n.length;l++)n[l]=$n(n[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($n(t[i]/255)*255):t[i]=$n(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dl=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?n.push(xr(r[l].image)):n.push(xr(r[l]))}else n=xr(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?to.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ul=0;class dt extends ti{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,i=Bt,r=Bt,n=Pt,l=pi,a=zt,c=hn,h=dt.DEFAULT_ANISOTROPY,u=Dt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=vi(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===bn?rt:Dt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?bn:Ja}set encoding(e){di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bn?rt:Dt}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=Wa;dt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*n,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*n,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*n,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const c=e.elements,h=c[0],u=c[4],p=c[8],f=c[1],o=c[5],m=c[9],v=c[2],d=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(p-v)<.01&&Math.abs(m-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+v)<.1&&Math.abs(m+d)<.1&&Math.abs(h+o+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,A=(o+1)/2,x=(g+1)/2,M=(u+f)/4,T=(p+v)/4,b=(m+d)/4;return S>A&&S>x?S<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(S),r=M/i,n=T/i):A>x?A<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(A),i=M/r,n=b/r):x<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(x),i=T/n,r=b/n),this.set(i,r,n,t),this}let E=Math.sqrt((d-m)*(d-m)+(p-v)*(p-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-m)/E,this.y=(p-v)/E,this.z=(f-u)/E,this.w=Math.acos((h+o+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Il extends ti{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bn?rt:Dt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Il{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class io extends dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,l,a){let c=i[r+0],h=i[r+1],u=i[r+2],p=i[r+3];const f=n[l+0],o=n[l+1],m=n[l+2],v=n[l+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=o,e[t+2]=m,e[t+3]=v;return}if(p!==v||c!==f||h!==o||u!==m){let d=1-a;const g=c*f+h*o+u*m+p*v,E=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const x=Math.sqrt(S),M=Math.atan2(x,g*E);d=Math.sin(d*M)/x,a=Math.sin(a*M)/x}const A=a*E;if(c=c*d+f*A,h=h*d+o*A,u=u*d+m*A,p=p*d+v*A,d===1-a){const x=1/Math.sqrt(c*c+h*h+u*u+p*p);c*=x,h*=x,u*=x,p*=x}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,n,l){const a=i[r],c=i[r+1],h=i[r+2],u=i[r+3],p=n[l],f=n[l+1],o=n[l+2],m=n[l+3];return e[t]=a*m+u*p+c*o-h*f,e[t+1]=c*m+u*f+h*p-a*o,e[t+2]=h*m+u*o+a*f-c*p,e[t+3]=u*m-a*p-c*f-h*o,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,n=e._z,l=e._order,a=Math.cos,c=Math.sin,h=a(i/2),u=a(r/2),p=a(n/2),f=c(i/2),o=c(r/2),m=c(n/2);switch(l){case"XYZ":this._x=f*u*p+h*o*m,this._y=h*o*p-f*u*m,this._z=h*u*m+f*o*p,this._w=h*u*p-f*o*m;break;case"YXZ":this._x=f*u*p+h*o*m,this._y=h*o*p-f*u*m,this._z=h*u*m-f*o*p,this._w=h*u*p+f*o*m;break;case"ZXY":this._x=f*u*p-h*o*m,this._y=h*o*p+f*u*m,this._z=h*u*m+f*o*p,this._w=h*u*p-f*o*m;break;case"ZYX":this._x=f*u*p-h*o*m,this._y=h*o*p+f*u*m,this._z=h*u*m-f*o*p,this._w=h*u*p+f*o*m;break;case"YZX":this._x=f*u*p+h*o*m,this._y=h*o*p+f*u*m,this._z=h*u*m-f*o*p,this._w=h*u*p-f*o*m;break;case"XZY":this._x=f*u*p-h*o*m,this._y=h*o*p-f*u*m,this._z=h*u*m+f*o*p,this._w=h*u*p+f*o*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],l=t[1],a=t[5],c=t[9],h=t[2],u=t[6],p=t[10],f=i+a+p;if(f>0){const o=.5/Math.sqrt(f+1);this._w=.25/o,this._x=(u-c)*o,this._y=(n-h)*o,this._z=(l-r)*o}else if(i>a&&i>p){const o=2*Math.sqrt(1+i-a-p);this._w=(u-c)/o,this._x=.25*o,this._y=(r+l)/o,this._z=(n+h)/o}else if(a>p){const o=2*Math.sqrt(1+a-i-p);this._w=(n-h)/o,this._x=(r+l)/o,this._y=.25*o,this._z=(c+u)/o}else{const o=2*Math.sqrt(1+p-i-a);this._w=(l-r)/o,this._x=(n+h)/o,this._y=(c+u)/o,this._z=.25*o}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,l=e._w,a=t._x,c=t._y,h=t._z,u=t._w;return this._x=i*u+l*a+r*h-n*c,this._y=r*u+l*c+n*a-i*h,this._z=n*u+l*h+i*c-r*a,this._w=l*u-i*a-r*c-n*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=n,this;const c=1-a*a;if(c<=Number.EPSILON){const o=1-t;return this._w=o*l+t*this._w,this._x=o*i+t*this._x,this._y=o*r+t*this._y,this._z=o*n+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,a),p=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=l*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=n*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(js.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(js.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,l=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*l,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*l,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,l=e.y,a=e.z,c=e.w,h=2*(l*r-a*i),u=2*(a*t-n*r),p=2*(n*i-l*t);return this.x=t+c*h+l*p-a*u,this.y=i+c*u+a*h-n*p,this.z=r+c*p+n*u-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,l=t.x,a=t.y,c=t.z;return this.x=r*c-n*a,this.y=n*l-i*c,this.z=i*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new z,js=new xi;class dn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=n.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,Ut):Ut.fromBufferAttribute(n,l),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ti.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ti.copy(i.boundingBox)),Ti.applyMatrix4(e.matrixWorld),this.union(Ti)}const r=e.children;for(let n=0,l=r.length;n<l;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),Ai.subVectors(this.max,ai),Ln.subVectors(e.a,ai),Dn.subVectors(e.b,ai),Un.subVectors(e.c,ai),tn.subVectors(Dn,Ln),nn.subVectors(Un,Dn),gn.subVectors(Ln,Un);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-gn.z,gn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,gn.z,0,-gn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-gn.y,gn.x,0];return!Sr(t,Ln,Dn,Un,Ai)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,Ln,Dn,Un,Ai))?!1:(bi.crossVectors(tn,nn),t=[bi.x,bi.y,bi.z],Sr(t,Ln,Dn,Un,Ai))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new z,new z,new z,new z,new z,new z,new z,new z],Ut=new z,Ti=new dn,Ln=new z,Dn=new z,Un=new z,tn=new z,nn=new z,gn=new z,ai=new z,Ai=new z,bi=new z,vn=new z;function Sr(s,e,t,i,r){for(let n=0,l=s.length-3;n<=l;n+=3){vn.fromArray(s,n);const a=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),c=e.dot(vn),h=t.dot(vn),u=i.dot(vn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}const Fl=new dn,oi=new z,yr=new z;class ni{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fl.setFromPoints(e).getCenter(i);let r=0;for(let n=0,l=e.length;n<l;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);const t=oi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(oi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(yr)),this.expandByPoint(oi.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new z,Mr=new z,wi=new z,rn=new z,Er=new z,Ci=new z,Tr=new z;class ro{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mr.copy(e).add(t).multiplyScalar(.5),wi.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Mr);const n=e.distanceTo(t)*.5,l=-this.direction.dot(wi),a=rn.dot(this.direction),c=-rn.dot(wi),h=rn.lengthSq(),u=Math.abs(1-l*l);let p,f,o,m;if(u>0)if(p=l*c-a,f=l*a-c,m=n*u,p>=0)if(f>=-m)if(f<=m){const v=1/u;p*=v,f*=v,o=p*(p+l*f+2*a)+f*(l*p+f+2*c)+h}else f=n,p=Math.max(0,-(l*f+a)),o=-p*p+f*(f+2*c)+h;else f=-n,p=Math.max(0,-(l*f+a)),o=-p*p+f*(f+2*c)+h;else f<=-m?(p=Math.max(0,-(-l*n+a)),f=p>0?-n:Math.min(Math.max(-n,-c),n),o=-p*p+f*(f+2*c)+h):f<=m?(p=0,f=Math.min(Math.max(-n,-c),n),o=f*(f+2*c)+h):(p=Math.max(0,-(l*n+a)),f=p>0?n:Math.min(Math.max(-n,-c),n),o=-p*p+f*(f+2*c)+h);else f=l>0?-n:n,p=Math.max(0,-(l*f+a)),o=-p*p+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Mr).addScaledVector(wi,f),o}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const i=Yt.dot(this.direction),r=Yt.dot(Yt)-i*i,n=e.radius*e.radius;if(r>n)return null;const l=Math.sqrt(n-r),a=i-l,c=i+l;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,l,a,c;const h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),u>=0?(n=(e.min.y-f.y)*u,l=(e.max.y-f.y)*u):(n=(e.max.y-f.y)*u,l=(e.min.y-f.y)*u),i>l||n>r||((n>i||isNaN(i))&&(i=n),(l<r||isNaN(r))&&(r=l),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,i,r,n){Er.subVectors(t,e),Ci.subVectors(i,e),Tr.crossVectors(Er,Ci);let l=this.direction.dot(Tr),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;rn.subVectors(this.origin,e);const c=a*this.direction.dot(Ci.crossVectors(rn,Ci));if(c<0)return null;const h=a*this.direction.dot(Er.cross(rn));if(h<0||c+h>l)return null;const u=-a*rn.dot(Tr);return u<0?null:this.at(u/l,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,r,n,l,a,c,h,u,p,f,o,m,v,d){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,l,a,c,h,u,p,f,o,m,v,d)}set(e,t,i,r,n,l,a,c,h,u,p,f,o,m,v,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=l,g[9]=a,g[13]=c,g[2]=h,g[6]=u,g[10]=p,g[14]=f,g[3]=o,g[7]=m,g[11]=v,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),n=1/In.setFromMatrixColumn(e,1).length(),l=1/In.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,l=Math.cos(i),a=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const f=l*u,o=l*p,m=a*u,v=a*p;t[0]=c*u,t[4]=-c*p,t[8]=h,t[1]=o+m*h,t[5]=f-v*h,t[9]=-a*c,t[2]=v-f*h,t[6]=m+o*h,t[10]=l*c}else if(e.order==="YXZ"){const f=c*u,o=c*p,m=h*u,v=h*p;t[0]=f+v*a,t[4]=m*a-o,t[8]=l*h,t[1]=l*p,t[5]=l*u,t[9]=-a,t[2]=o*a-m,t[6]=v+f*a,t[10]=l*c}else if(e.order==="ZXY"){const f=c*u,o=c*p,m=h*u,v=h*p;t[0]=f-v*a,t[4]=-l*p,t[8]=m+o*a,t[1]=o+m*a,t[5]=l*u,t[9]=v-f*a,t[2]=-l*h,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const f=l*u,o=l*p,m=a*u,v=a*p;t[0]=c*u,t[4]=m*h-o,t[8]=f*h+v,t[1]=c*p,t[5]=v*h+f,t[9]=o*h-m,t[2]=-h,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,o=l*h,m=a*c,v=a*h;t[0]=c*u,t[4]=v-f*p,t[8]=m*p+o,t[1]=p,t[5]=l*u,t[9]=-a*u,t[2]=-h*u,t[6]=o*p+m,t[10]=f-v*p}else if(e.order==="XZY"){const f=l*c,o=l*h,m=a*c,v=a*h;t[0]=c*u,t[4]=-p,t[8]=h*u,t[1]=f*p+v,t[5]=l*u,t[9]=o*p-m,t[2]=m*p-o,t[6]=a*u,t[10]=v*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ol,e,Bl)}lookAt(e,t,i){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),sn.crossVectors(i,At),sn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),sn.crossVectors(i,At)),sn.normalize(),Ri.crossVectors(At,sn),r[0]=sn.x,r[4]=Ri.x,r[8]=At.x,r[1]=sn.y,r[5]=Ri.y,r[9]=At.y,r[2]=sn.z,r[6]=Ri.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,l=i[0],a=i[4],c=i[8],h=i[12],u=i[1],p=i[5],f=i[9],o=i[13],m=i[2],v=i[6],d=i[10],g=i[14],E=i[3],S=i[7],A=i[11],x=i[15],M=r[0],T=r[4],b=r[8],_=r[12],y=r[1],R=r[5],P=r[9],N=r[13],D=r[2],U=r[6],F=r[10],O=r[14],G=r[3],Y=r[7],K=r[11],Z=r[15];return n[0]=l*M+a*y+c*D+h*G,n[4]=l*T+a*R+c*U+h*Y,n[8]=l*b+a*P+c*F+h*K,n[12]=l*_+a*N+c*O+h*Z,n[1]=u*M+p*y+f*D+o*G,n[5]=u*T+p*R+f*U+o*Y,n[9]=u*b+p*P+f*F+o*K,n[13]=u*_+p*N+f*O+o*Z,n[2]=m*M+v*y+d*D+g*G,n[6]=m*T+v*R+d*U+g*Y,n[10]=m*b+v*P+d*F+g*K,n[14]=m*_+v*N+d*O+g*Z,n[3]=E*M+S*y+A*D+x*G,n[7]=E*T+S*R+A*U+x*Y,n[11]=E*b+S*P+A*F+x*K,n[15]=E*_+S*N+A*O+x*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],l=e[1],a=e[5],c=e[9],h=e[13],u=e[2],p=e[6],f=e[10],o=e[14],m=e[3],v=e[7],d=e[11],g=e[15];return m*(+n*c*p-r*h*p-n*a*f+i*h*f+r*a*o-i*c*o)+v*(+t*c*o-t*h*f+n*l*f-r*l*o+r*h*u-n*c*u)+d*(+t*h*p-t*a*o-n*l*p+i*l*o+n*a*u-i*h*u)+g*(-r*a*u-t*c*p+t*a*f+r*l*p-i*l*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],l=e[4],a=e[5],c=e[6],h=e[7],u=e[8],p=e[9],f=e[10],o=e[11],m=e[12],v=e[13],d=e[14],g=e[15],E=p*d*h-v*f*h+v*c*o-a*d*o-p*c*g+a*f*g,S=m*f*h-u*d*h-m*c*o+l*d*o+u*c*g-l*f*g,A=u*v*h-m*p*h+m*a*o-l*v*o-u*a*g+l*p*g,x=m*p*c-u*v*c-m*a*f+l*v*f+u*a*d-l*p*d,M=t*E+i*S+r*A+n*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=E*T,e[1]=(v*f*n-p*d*n-v*r*o+i*d*o+p*r*g-i*f*g)*T,e[2]=(a*d*n-v*c*n+v*r*h-i*d*h-a*r*g+i*c*g)*T,e[3]=(p*c*n-a*f*n-p*r*h+i*f*h+a*r*o-i*c*o)*T,e[4]=S*T,e[5]=(u*d*n-m*f*n+m*r*o-t*d*o-u*r*g+t*f*g)*T,e[6]=(m*c*n-l*d*n-m*r*h+t*d*h+l*r*g-t*c*g)*T,e[7]=(l*f*n-u*c*n+u*r*h-t*f*h-l*r*o+t*c*o)*T,e[8]=A*T,e[9]=(m*p*n-u*v*n-m*i*o+t*v*o+u*i*g-t*p*g)*T,e[10]=(l*v*n-m*a*n+m*i*h-t*v*h-l*i*g+t*a*g)*T,e[11]=(u*a*n-l*p*n-u*i*h+t*p*h+l*i*o-t*a*o)*T,e[12]=x*T,e[13]=(u*v*r-m*p*r+m*i*f-t*v*f-u*i*d+t*p*d)*T,e[14]=(m*a*r-l*v*r-m*i*c+t*v*c+l*i*d-t*a*d)*T,e[15]=(l*p*r-u*a*r+u*i*c-t*p*c-l*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,l=e.x,a=e.y,c=e.z,h=n*l,u=n*a;return this.set(h*l+i,h*a-r*c,h*c+r*a,0,h*a+r*c,u*a+i,u*c-r*l,0,h*c-r*a,u*c+r*l,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,l){return this.set(1,i,n,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,l=t._y,a=t._z,c=t._w,h=n+n,u=l+l,p=a+a,f=n*h,o=n*u,m=n*p,v=l*u,d=l*p,g=a*p,E=c*h,S=c*u,A=c*p,x=i.x,M=i.y,T=i.z;return r[0]=(1-(v+g))*x,r[1]=(o+A)*x,r[2]=(m-S)*x,r[3]=0,r[4]=(o-A)*M,r[5]=(1-(f+g))*M,r[6]=(d+E)*M,r[7]=0,r[8]=(m+S)*T,r[9]=(d-E)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=In.set(r[0],r[1],r[2]).length();const l=In.set(r[4],r[5],r[6]).length(),a=In.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],It.copy(this);const h=1/n,u=1/l,p=1/a;return It.elements[0]*=h,It.elements[1]*=h,It.elements[2]*=h,It.elements[4]*=u,It.elements[5]*=u,It.elements[6]*=u,It.elements[8]*=p,It.elements[9]*=p,It.elements[10]*=p,t.setFromRotationMatrix(It),i.x=n,i.y=l,i.z=a,this}makePerspective(e,t,i,r,n,l,a=Jt){const c=this.elements,h=2*n/(t-e),u=2*n/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let o,m;if(a===Jt)o=-(l+n)/(l-n),m=-2*l*n/(l-n);else if(a===Qi)o=-l/(l-n),m=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=o,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,n,l,a=Jt){const c=this.elements,h=1/(t-e),u=1/(i-r),p=1/(l-n),f=(t+e)*h,o=(i+r)*u;let m,v;if(a===Jt)m=(l+n)*p,v=-2*p;else if(a===Qi)m=n*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-o,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const In=new z,It=new Qe,Ol=new z(0,0,0),Bl=new z(1,1,1),sn=new z,Ri=new z,At=new z,Zs=new Qe,Js=new xi;class nr{constructor(e=0,t=0,i=0,r=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],l=r[4],a=r[8],c=r[1],h=r[5],u=r[9],p=r[2],f=r[6],o=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,o),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,o),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,o),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,o),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(a,o));break;case"XZY":this._z=Math.asin(-Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,o),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Js.setFromEuler(this),this.setFromQuaternion(Js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class so{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zl=0;const Qs=new z,Nn=new xi,Kt=new Qe,Pi=new z,li=new z,Hl=new z,Gl=new xi,ea=new z(1,0,0),ta=new z(0,1,0),na=new z(0,0,1),Vl={type:"added"},kl={type:"removed"};class ft extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new z,t=new nr,i=new xi,r=new z(1,1,1);function n(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Oe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(ea,e)}rotateY(e){return this.rotateOnAxis(ta,e)}rotateZ(e){return this.rotateOnAxis(na,e)}translateOnAxis(e,t){return Qs.copy(e).applyQuaternion(this.quaternion),this.position.add(Qs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ea,e)}translateY(e){return this.translateOnAxis(ta,e)}translateZ(e){return this.translateOnAxis(na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pi.copy(e):Pi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(li,Pi,this.up):Kt.lookAt(Pi,li,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let n=0,l=r.length;n<l;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,Hl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,Gl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,l=r.length;n<l;n++){const a=r[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function n(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const p=c[h];n(e.shapes,p)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(n(e.materials,this.material[c]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(n(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),h=l(e.textures),u=l(e.images),p=l(e.shapes),f=l(e.skeletons),o=l(e.animations),m=l(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),o.length>0&&(i.animations=o),m.length>0&&(i.nodes=m)}return i.object=r,i;function l(a){const c=[];for(const h in a){const u=a[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ft.DEFAULT_UP=new z(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new z,$t=new z,Ar=new z,jt=new z,Fn=new z,On=new z,ia=new z,br=new z,wr=new z,Cr=new z;let Li=!1;class Ft{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Nt.subVectors(e,t),r.cross(Nt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Nt.subVectors(r,t),$t.subVectors(i,t),Ar.subVectors(e,t);const l=Nt.dot(Nt),a=Nt.dot($t),c=Nt.dot(Ar),h=$t.dot($t),u=$t.dot(Ar),p=l*h-a*a;if(p===0)return n.set(0,0,0),null;const f=1/p,o=(h*c-a*u)*f,m=(l*u-a*c)*f;return n.set(1-o-m,m,o)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,i,r,n,l,a,c){return Li===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Li=!0),this.getInterpolation(e,t,i,r,n,l,a,c)}static getInterpolation(e,t,i,r,n,l,a,c){return this.getBarycoord(e,t,i,r,jt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,jt.x),c.addScaledVector(l,jt.y),c.addScaledVector(a,jt.z),c)}static isFrontFacing(e,t,i,r){return Nt.subVectors(i,t),$t.subVectors(e,t),Nt.cross($t).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Nt.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Li===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Li=!0),Ft.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}getInterpolation(e,t,i,r,n){return Ft.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let l,a;Fn.subVectors(r,i),On.subVectors(n,i),br.subVectors(e,i);const c=Fn.dot(br),h=On.dot(br);if(c<=0&&h<=0)return t.copy(i);wr.subVectors(e,r);const u=Fn.dot(wr),p=On.dot(wr);if(u>=0&&p<=u)return t.copy(r);const f=c*p-u*h;if(f<=0&&c>=0&&u<=0)return l=c/(c-u),t.copy(i).addScaledVector(Fn,l);Cr.subVectors(e,n);const o=Fn.dot(Cr),m=On.dot(Cr);if(m>=0&&o<=m)return t.copy(n);const v=o*h-c*m;if(v<=0&&h>=0&&m<=0)return a=h/(h-m),t.copy(i).addScaledVector(On,a);const d=u*m-o*p;if(d<=0&&p-u>=0&&o-m>=0)return ia.subVectors(n,r),a=(p-u)/(p-u+(o-m)),t.copy(r).addScaledVector(ia,a);const g=1/(d+v+f);return l=v*g,a=f*g,t.copy(i).addScaledVector(Fn,l).addScaledVector(On,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Di={h:0,s:0,l:0};function Rr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=Rl(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,l=2*i-n;this.r=Rr(l,n,e+1/3),this.g=Rr(l,n,e),this.b=Rr(l,n,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=rt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],l=n.length;if(l===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const i=ao[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return Xe.fromWorkingColorSpace(gt.copy(this),e),Math.round(Mt(gt.r*255,0,255))*65536+Math.round(Mt(gt.g*255,0,255))*256+Math.round(Mt(gt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(gt.copy(this),t);const i=gt.r,r=gt.g,n=gt.b,l=Math.max(i,r,n),a=Math.min(i,r,n);let c,h;const u=(a+l)/2;if(a===l)c=0,h=0;else{const p=l-a;switch(h=u<=.5?p/(l+a):p/(2-l-a),l){case i:c=(r-n)/p+(r<n?6:0);break;case r:c=(n-i)/p+2;break;case n:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=rt){Xe.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,i=gt.g,r=gt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Di);const i=mr(an.h,Di.h,t),r=mr(an.s,Di.s,t),n=mr(an.l,Di.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new He;He.NAMES=ao;let Wl=0;class _i extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Kn,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=kr,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ks,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(i.blending=this.blending),this.side!==fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vr&&(i.blendSrc=this.blendSrc),this.blendDst!==kr&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ks&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const l=[];for(const a in n){const c=n[a];delete c.metadata,l.push(c)}return l}if(t){const n=r(e.textures),l=r(e.images);n.length>0&&(i.textures=n),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ht extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new z,Ui=new Ve;class wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ws,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ws&&(e.usage=this.usage),e}}class oo extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lo extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xl=0;const Rt=new Qe,Pr=new ft,Bn=new z,bt=new dn,ci=new dn,ut=new z;class Wt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eo(e)?lo:oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Oe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,i){return Rt.makeTranslation(e,t,i),this.applyMatrix4(Rt),this}scale(e,t,i){return Rt.makeScale(e,t,i),this.applyMatrix4(Rt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];bt.setFromBufferAttribute(n),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let n=0,l=t.length;n<l;n++){const a=t[n];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(bt.min,ci.min),bt.expandByPoint(ut),ut.addVectors(bt.max,ci.max),bt.expandByPoint(ut)):(bt.expandByPoint(ci.min),bt.expandByPoint(ci.max))}bt.getCenter(i);let r=0;for(let n=0,l=e.count;n<l;n++)ut.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let n=0,l=t.length;n<l;n++){const a=t[n],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)ut.fromBufferAttribute(a,h),c&&(Bn.fromBufferAttribute(e,h),ut.add(Bn)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,l=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let y=0;y<a;y++)h[y]=new z,u[y]=new z;const p=new z,f=new z,o=new z,m=new Ve,v=new Ve,d=new Ve,g=new z,E=new z;function S(y,R,P){p.fromArray(r,y*3),f.fromArray(r,R*3),o.fromArray(r,P*3),m.fromArray(l,y*2),v.fromArray(l,R*2),d.fromArray(l,P*2),f.sub(p),o.sub(p),v.sub(m),d.sub(m);const N=1/(v.x*d.y-d.x*v.y);isFinite(N)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(o,-v.y).multiplyScalar(N),E.copy(o).multiplyScalar(v.x).addScaledVector(f,-d.x).multiplyScalar(N),h[y].add(g),h[R].add(g),h[P].add(g),u[y].add(E),u[R].add(E),u[P].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let y=0,R=A.length;y<R;++y){const P=A[y],N=P.start,D=P.count;for(let U=N,F=N+D;U<F;U+=3)S(i[U+0],i[U+1],i[U+2])}const x=new z,M=new z,T=new z,b=new z;function _(y){T.fromArray(n,y*3),b.copy(T);const R=h[y];x.copy(R),x.sub(T.multiplyScalar(T.dot(R))).normalize(),M.crossVectors(b,R);const N=M.dot(u[y])<0?-1:1;c[y*4]=x.x,c[y*4+1]=x.y,c[y*4+2]=x.z,c[y*4+3]=N}for(let y=0,R=A.length;y<R;++y){const P=A[y],N=P.start,D=P.count;for(let U=N,F=N+D;U<F;U+=3)_(i[U+0]),_(i[U+1]),_(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,o=i.count;f<o;f++)i.setXYZ(f,0,0,0);const r=new z,n=new z,l=new z,a=new z,c=new z,h=new z,u=new z,p=new z;if(e)for(let f=0,o=e.count;f<o;f+=3){const m=e.getX(f+0),v=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,m),n.fromBufferAttribute(t,v),l.fromBufferAttribute(t,d),u.subVectors(l,n),p.subVectors(r,n),u.cross(p),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,d),a.add(u),c.add(u),h.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(d,h.x,h.y,h.z)}else for(let f=0,o=t.count;f<o;f+=3)r.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),u.subVectors(l,n),p.subVectors(r,n),u.cross(p),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,c){const h=a.array,u=a.itemSize,p=a.normalized,f=new h.constructor(c.length*u);let o=0,m=0;for(let v=0,d=c.length;v<d;v++){a.isInterleavedBufferAttribute?o=c[v]*a.data.stride+a.offset:o=c[v]*u;for(let g=0;g<u;g++)f[m++]=h[o++]}return new wt(f,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],h=e(c,i);t.setAttribute(a,h)}const n=this.morphAttributes;for(const a in n){const c=[],h=n[a];for(let u=0,p=h.length;u<p;u++){const f=h[u],o=e(f,i);c.push(o)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const h=l[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const h=i[c];e.data.attributes[c]=h.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let p=0,f=h.length;p<f;p++){const o=h[p];u.push(o.toJSON(e.data))}u.length>0&&(r[c]=u,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(t))}const n=e.morphAttributes;for(const h in n){const u=[],p=n[h];for(let f=0,o=p.length;f<o;f++)u.push(p[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,u=l.length;h<u;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ra=new Qe,xn=new ro,Ii=new ni,sa=new z,zn=new z,Hn=new z,Gn=new z,Lr=new z,Ni=new z,Fi=new Ve,Oi=new Ve,Bi=new Ve,aa=new z,oa=new z,la=new z,zi=new z,Hi=new z;class vt extends ft{constructor(e=new Wt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,l=r.length;n<l;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(n&&a){Ni.set(0,0,0);for(let c=0,h=n.length;c<h;c++){const u=a[c],p=n[c];u!==0&&(Lr.fromBufferAttribute(p,e),l?Ni.addScaledVector(Lr,u):Ni.addScaledVector(Lr.sub(t),u))}t.add(Ni)}return t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ii.copy(i.boundingSphere),Ii.applyMatrix4(n),xn.copy(e.ray).recast(e.near),!(Ii.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Ii,sa)===null||xn.origin.distanceToSquared(sa)>(e.far-e.near)**2))&&(ra.copy(n).invert(),xn.copy(e.ray).applyMatrix4(ra),!(i.boundingBox!==null&&xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,i){let r;const n=this.geometry,l=this.material,a=n.index,c=n.attributes.position,h=n.attributes.uv,u=n.attributes.uv1,p=n.attributes.normal,f=n.groups,o=n.drawRange;if(a!==null)if(Array.isArray(l))for(let m=0,v=f.length;m<v;m++){const d=f[m],g=l[d.materialIndex],E=Math.max(d.start,o.start),S=Math.min(a.count,Math.min(d.start+d.count,o.start+o.count));for(let A=E,x=S;A<x;A+=3){const M=a.getX(A),T=a.getX(A+1),b=a.getX(A+2);r=Gi(this,g,e,i,h,u,p,M,T,b),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,o.start),v=Math.min(a.count,o.start+o.count);for(let d=m,g=v;d<g;d+=3){const E=a.getX(d),S=a.getX(d+1),A=a.getX(d+2);r=Gi(this,l,e,i,h,u,p,E,S,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let m=0,v=f.length;m<v;m++){const d=f[m],g=l[d.materialIndex],E=Math.max(d.start,o.start),S=Math.min(c.count,Math.min(d.start+d.count,o.start+o.count));for(let A=E,x=S;A<x;A+=3){const M=A,T=A+1,b=A+2;r=Gi(this,g,e,i,h,u,p,M,T,b),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let d=m,g=v;d<g;d+=3){const E=d,S=d+1,A=d+2;r=Gi(this,l,e,i,h,u,p,E,S,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function ql(s,e,t,i,r,n,l,a){let c;if(e.side===Et?c=i.intersectTriangle(l,n,r,!0,a):c=i.intersectTriangle(r,n,l,e.side===fn,a),c===null)return null;Hi.copy(a),Hi.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Hi);return h<t.near||h>t.far?null:{distance:h,point:Hi.clone(),object:s}}function Gi(s,e,t,i,r,n,l,a,c,h){s.getVertexPosition(a,zn),s.getVertexPosition(c,Hn),s.getVertexPosition(h,Gn);const u=ql(s,e,t,i,zn,Hn,Gn,zi);if(u){r&&(Fi.fromBufferAttribute(r,a),Oi.fromBufferAttribute(r,c),Bi.fromBufferAttribute(r,h),u.uv=Ft.getInterpolation(zi,zn,Hn,Gn,Fi,Oi,Bi,new Ve)),n&&(Fi.fromBufferAttribute(n,a),Oi.fromBufferAttribute(n,c),Bi.fromBufferAttribute(n,h),u.uv1=Ft.getInterpolation(zi,zn,Hn,Gn,Fi,Oi,Bi,new Ve),u.uv2=u.uv1),l&&(aa.fromBufferAttribute(l,a),oa.fromBufferAttribute(l,c),la.fromBufferAttribute(l,h),u.normal=Ft.getInterpolation(zi,zn,Hn,Gn,aa,oa,la,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:h,normal:new z,materialIndex:0};Ft.getNormal(zn,Hn,Gn,p.normal),u.face=p}return u}class Si extends Wt{constructor(e=1,t=1,i=1,r=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:l};const a=this;r=Math.floor(r),n=Math.floor(n),l=Math.floor(l);const c=[],h=[],u=[],p=[];let f=0,o=0;m("z","y","x",-1,-1,i,t,e,l,n,0),m("z","y","x",1,-1,i,t,-e,l,n,1),m("x","z","y",1,1,e,i,t,r,l,2),m("x","z","y",1,-1,e,i,-t,r,l,3),m("x","y","z",1,-1,e,t,i,r,n,4),m("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(p,2));function m(v,d,g,E,S,A,x,M,T,b,_){const y=A/T,R=x/b,P=A/2,N=x/2,D=M/2,U=T+1,F=b+1;let O=0,G=0;const Y=new z;for(let K=0;K<F;K++){const Z=K*R-N;for(let j=0;j<U;j++){const k=j*y-P;Y[v]=k*E,Y[d]=Z*S,Y[g]=D,h.push(Y.x,Y.y,Y.z),Y[v]=0,Y[d]=0,Y[g]=M>0?1:-1,u.push(Y.x,Y.y,Y.z),p.push(j/T),p.push(1-K/b),O+=1}}for(let K=0;K<b;K++)for(let Z=0;Z<T;Z++){const j=f+Z+U*K,k=f+Z+U*(K+1),$=f+(Z+1)+U*(K+1),ne=f+(Z+1)+U*K;c.push(j,k,ne),c.push(k,$,ne),G+=6}a.addGroup(o,G,_),o+=G,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(s){const e={};for(let t=0;t<s.length;t++){const i=ei(s[t]);for(const r in i)e[r]=i[r]}return e}function Yl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function co(s){return s.getRenderTarget()===null?s.outputColorSpace:Xe.workingColorSpace}const Kl={clone:ei,merge:St};var $l=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$l,this.fragmentShader=jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=Yl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let uo=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Jt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Ot extends uo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,h=l.fullHeight;n+=l.offsetX*r/c,t-=l.offsetY*i/h,r*=l.width/c,i*=l.height/h}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vn=-90,kn=1;class Zl extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(Vn,kn,e,t);r.layers=this.layers,this.add(r);const n=new Ot(Vn,kn,e,t);n.layers=this.layers,this.add(n);const l=new Ot(Vn,kn,e,t);l.layers=this.layers,this.add(l);const a=new Ot(Vn,kn,e,t);a.layers=this.layers,this.add(a);const c=new Ot(Vn,kn,e,t);c.layers=this.layers,this.add(c);const h=new Ot(Vn,kn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,n,l,a,c]=t;for(const h of t)this.remove(h);if(e===Jt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qi)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,l,a,c,h,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),o=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,n),e.setRenderTarget(i,1,r),e.render(t,l),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(p,f,o),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ho extends dt{constructor(e,t,i,r,n,l,a,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,i,r,n,l,a,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bn?rt:Dt),this.texture=new ho(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Si(5,5,5),n=new Cn({name:"CubemapFromEquirect",uniforms:ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:cn});n.uniforms.tEquirect.value=t;const l=new vt(r,n),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Pt),new Zl(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(n)}}const Dr=new z,Ql=new z,ec=new Oe;class Sn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dr.subVectors(i,t).cross(Ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ec.getNormalMatrix(e),r=this.coplanarPoint(Dr).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new ni,Vi=new z;class es{constructor(e=new Sn,t=new Sn,i=new Sn,r=new Sn,n=new Sn,l=new Sn){this.planes=[e,t,i,r,n,l]}set(e,t,i,r,n,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jt){const i=this.planes,r=e.elements,n=r[0],l=r[1],a=r[2],c=r[3],h=r[4],u=r[5],p=r[6],f=r[7],o=r[8],m=r[9],v=r[10],d=r[11],g=r[12],E=r[13],S=r[14],A=r[15];if(i[0].setComponents(c-n,f-h,d-o,A-g).normalize(),i[1].setComponents(c+n,f+h,d+o,A+g).normalize(),i[2].setComponents(c+l,f+u,d+m,A+E).normalize(),i[3].setComponents(c-l,f-u,d-m,A-E).normalize(),i[4].setComponents(c-a,f-p,d-v,A-S).normalize(),t===Jt)i[5].setComponents(c+a,f+p,d+v,A+S).normalize();else if(t===Qi)i[5].setComponents(a,p,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vi.x=r.normal.x>0?e.max.x:e.min.x,Vi.y=r.normal.y>0?e.max.y:e.min.y,Vi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fo(){let s=null,e=!1,t=null,i=null;function r(n,l){t(n,l),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function tc(s,e){const t=e.isWebGL2,i=new WeakMap;function r(h,u){const p=h.array,f=h.usage,o=p.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,p,f),h.onUploadCallback();let v;if(p instanceof Float32Array)v=s.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=s.SHORT;else if(p instanceof Uint32Array)v=s.UNSIGNED_INT;else if(p instanceof Int32Array)v=s.INT;else if(p instanceof Int8Array)v=s.BYTE;else if(p instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:o}}function n(h,u,p){const f=u.array,o=u._updateRange,m=u.updateRanges;if(s.bindBuffer(p,h),o.count===-1&&m.length===0&&s.bufferSubData(p,0,f),m.length!==0){for(let v=0,d=m.length;v<d;v++){const g=m[v];t?s.bufferSubData(p,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count):s.bufferSubData(p,g.start*f.BYTES_PER_ELEMENT,f.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}o.count!==-1&&(t?s.bufferSubData(p,o.offset*f.BYTES_PER_ELEMENT,f,o.offset,o.count):s.bufferSubData(p,o.offset*f.BYTES_PER_ELEMENT,f.subarray(o.offset,o.offset+o.count)),o.count=-1),u.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);u&&(s.deleteBuffer(u.buffer),i.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);if(p===void 0)i.set(h,r(h,u));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,h,u),p.version=h.version}}return{get:l,remove:a,update:c}}class Gt extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,l=t/2,a=Math.floor(i),c=Math.floor(r),h=a+1,u=c+1,p=e/a,f=t/c,o=[],m=[],v=[],d=[];for(let g=0;g<u;g++){const E=g*f-l;for(let S=0;S<h;S++){const A=S*p-n;m.push(A,-E,0),v.push(0,0,1),d.push(S/a),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<a;E++){const S=E+h*g,A=E+h*(g+1),x=E+1+h*(g+1),M=E+1+h*g;o.push(S,A,M),o.push(A,x,M)}this.setIndex(o),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.widthSegments,e.heightSegments)}}var nc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ic=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ac=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mc=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ac=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,wc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ic=`#ifdef USE_ENVMAP
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
#endif`,Nc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
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
#endif`,zc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,$c=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tu=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
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
#endif`,vu=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`#ifdef USE_MORPHTARGETS
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
#endif`,_u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Su=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hu=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ku=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ju=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const th=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ah=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,lh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ch=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,uh=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ph=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Sh=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,Eh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Th=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ch=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,Ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uh=`uniform float rotation;
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
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:nc,alphahash_pars_fragment:ic,alphamap_fragment:rc,alphamap_pars_fragment:sc,alphatest_fragment:ac,alphatest_pars_fragment:oc,aomap_fragment:lc,aomap_pars_fragment:cc,batching_pars_vertex:uc,batching_vertex:hc,begin_vertex:fc,beginnormal_vertex:dc,bsdfs:pc,iridescence_fragment:mc,bumpmap_pars_fragment:gc,clipping_planes_fragment:vc,clipping_planes_pars_fragment:xc,clipping_planes_pars_vertex:_c,clipping_planes_vertex:Sc,color_fragment:yc,color_pars_fragment:Mc,color_pars_vertex:Ec,color_vertex:Tc,common:Ac,cube_uv_reflection_fragment:bc,defaultnormal_vertex:wc,displacementmap_pars_vertex:Cc,displacementmap_vertex:Rc,emissivemap_fragment:Pc,emissivemap_pars_fragment:Lc,colorspace_fragment:Dc,colorspace_pars_fragment:Uc,envmap_fragment:Ic,envmap_common_pars_fragment:Nc,envmap_pars_fragment:Fc,envmap_pars_vertex:Oc,envmap_physical_pars_fragment:$c,envmap_vertex:Bc,fog_vertex:zc,fog_pars_vertex:Hc,fog_fragment:Gc,fog_pars_fragment:Vc,gradientmap_pars_fragment:kc,lightmap_fragment:Wc,lightmap_pars_fragment:Xc,lights_lambert_fragment:qc,lights_lambert_pars_fragment:Yc,lights_pars_begin:Kc,lights_toon_fragment:jc,lights_toon_pars_fragment:Zc,lights_phong_fragment:Jc,lights_phong_pars_fragment:Qc,lights_physical_fragment:eu,lights_physical_pars_fragment:tu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:ru,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:uu,map_particle_fragment:hu,map_particle_pars_fragment:fu,metalnessmap_fragment:du,metalnessmap_pars_fragment:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:vu,morphtarget_vertex:xu,normal_fragment_begin:_u,normal_fragment_maps:Su,normal_pars_fragment:yu,normal_pars_vertex:Mu,normal_vertex:Eu,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:Au,clearcoat_normal_fragment_maps:bu,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Cu,opaque_fragment:Ru,packing:Pu,premultiplied_alpha_fragment:Lu,project_vertex:Du,dithering_fragment:Uu,dithering_pars_fragment:Iu,roughnessmap_fragment:Nu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:Bu,shadowmap_vertex:zu,shadowmask_pars_fragment:Hu,skinbase_vertex:Gu,skinning_pars_vertex:Vu,skinning_vertex:ku,skinnormal_vertex:Wu,specularmap_fragment:Xu,specularmap_pars_fragment:qu,tonemapping_fragment:Yu,tonemapping_pars_fragment:Ku,transmission_fragment:$u,transmission_pars_fragment:ju,uv_pars_fragment:Zu,uv_pars_vertex:Ju,uv_vertex:Qu,worldpos_vertex:eh,background_vert:th,background_frag:nh,backgroundCube_vert:ih,backgroundCube_frag:rh,cube_vert:sh,cube_frag:ah,depth_vert:oh,depth_frag:lh,distanceRGBA_vert:ch,distanceRGBA_frag:uh,equirect_vert:hh,equirect_frag:fh,linedashed_vert:dh,linedashed_frag:ph,meshbasic_vert:mh,meshbasic_frag:gh,meshlambert_vert:vh,meshlambert_frag:xh,meshmatcap_vert:_h,meshmatcap_frag:Sh,meshnormal_vert:yh,meshnormal_frag:Mh,meshphong_vert:Eh,meshphong_frag:Th,meshphysical_vert:Ah,meshphysical_frag:bh,meshtoon_vert:wh,meshtoon_frag:Ch,points_vert:Rh,points_frag:Ph,shadow_vert:Lh,shadow_frag:Dh,sprite_vert:Uh,sprite_frag:Ih},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},kt={basic:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:St([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:St([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:St([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:St([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:St([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:St([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:St([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:St([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};kt.physical={uniforms:St([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ki={r:0,b:0,g:0};function Nh(s,e,t,i,r,n,l){const a=new He(0);let c=n===!0?0:1,h,u,p=null,f=0,o=null;function m(d,g){let E=!1,S=g.isScene===!0?g.background:null;S&&S.isTexture&&(S=(g.backgroundBlurriness>0?t:e).get(S)),S===null?v(a,c):S&&S.isColor&&(v(S,1),E=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,l):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===er)?(u===void 0&&(u=new vt(new Si(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ei(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==je,(p!==S||f!==S.version||o!==s.toneMapping)&&(u.material.needsUpdate=!0,p=S,f=S.version,o=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new vt(new Gt(2,2),new Cn({name:"BackgroundMaterial",uniforms:ei(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(S.colorSpace)!==je,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||f!==S.version||o!==s.toneMapping)&&(h.material.needsUpdate=!0,p=S,f=S.version,o=s.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null))}function v(d,g){d.getRGB(ki,co(s)),i.buffers.color.setClear(ki.r,ki.g,ki.b,g,l)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),c=g,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,v(a,c)},render:m}}function Fh(s,e,t,i){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||n!==null,a={},c=d(null);let h=c,u=!1;function p(D,U,F,O,G){let Y=!1;if(l){const K=v(O,F,U);h!==K&&(h=K,o(h.object)),Y=g(D,O,F,G),Y&&E(D,O,F,G)}else{const K=U.wireframe===!0;(h.geometry!==O.id||h.program!==F.id||h.wireframe!==K)&&(h.geometry=O.id,h.program=F.id,h.wireframe=K,Y=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,b(D,U,F,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function f(){return i.isWebGL2?s.createVertexArray():n.createVertexArrayOES()}function o(D){return i.isWebGL2?s.bindVertexArray(D):n.bindVertexArrayOES(D)}function m(D){return i.isWebGL2?s.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function v(D,U,F){const O=F.wireframe===!0;let G=a[D.id];G===void 0&&(G={},a[D.id]=G);let Y=G[U.id];Y===void 0&&(Y={},G[U.id]=Y);let K=Y[O];return K===void 0&&(K=d(f()),Y[O]=K),K}function d(D){const U=[],F=[],O=[];for(let G=0;G<r;G++)U[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:O,object:D,attributes:{},index:null}}function g(D,U,F,O){const G=h.attributes,Y=U.attributes;let K=0;const Z=F.getAttributes();for(const j in Z)if(Z[j].location>=0){const $=G[j];let ne=Y[j];if(ne===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;K++}return h.attributesNum!==K||h.index!==O}function E(D,U,F,O){const G={},Y=U.attributes;let K=0;const Z=F.getAttributes();for(const j in Z)if(Z[j].location>=0){let $=Y[j];$===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&($=D.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),G[j]=ne,K++}h.attributes=G,h.attributesNum=K,h.index=O}function S(){const D=h.newAttributes;for(let U=0,F=D.length;U<F;U++)D[U]=0}function A(D){x(D,0)}function x(D,U){const F=h.newAttributes,O=h.enabledAttributes,G=h.attributeDivisors;F[D]=1,O[D]===0&&(s.enableVertexAttribArray(D),O[D]=1),G[D]!==U&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),G[D]=U)}function M(){const D=h.newAttributes,U=h.enabledAttributes;for(let F=0,O=U.length;F<O;F++)U[F]!==D[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function T(D,U,F,O,G,Y,K){K===!0?s.vertexAttribIPointer(D,U,F,G,Y):s.vertexAttribPointer(D,U,F,O,G,Y)}function b(D,U,F,O){if(i.isWebGL2===!1&&(D.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const G=O.attributes,Y=F.getAttributes(),K=U.defaultAttributeValues;for(const Z in Y){const j=Y[Z];if(j.location>=0){let k=G[Z];if(k===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){const $=k.normalized,ne=k.itemSize,ae=t.get(k);if(ae===void 0)continue;const ue=ae.buffer,ge=ae.type,we=ae.bytesPerElement,ye=i.isWebGL2===!0&&(ge===s.INT||ge===s.UNSIGNED_INT||k.gpuType===Xa);if(k.isInterleavedBufferAttribute){const ze=k.data,H=ze.stride,ot=k.offset;if(ze.isInstancedInterleavedBuffer){for(let ve=0;ve<j.locationSize;ve++)x(j.location+ve,ze.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ve=0;ve<j.locationSize;ve++)A(j.location+ve);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ve=0;ve<j.locationSize;ve++)T(j.location+ve,ne/j.locationSize,ge,$,H*we,(ot+ne/j.locationSize*ve)*we,ye)}else{if(k.isInstancedBufferAttribute){for(let ze=0;ze<j.locationSize;ze++)x(j.location+ze,k.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ze=0;ze<j.locationSize;ze++)A(j.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ze=0;ze<j.locationSize;ze++)T(j.location+ze,ne/j.locationSize,ge,$,ne*we,ne/j.locationSize*ze*we,ye)}}else if(K!==void 0){const $=K[Z];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(j.location,$);break;case 3:s.vertexAttrib3fv(j.location,$);break;case 4:s.vertexAttrib4fv(j.location,$);break;default:s.vertexAttrib1fv(j.location,$)}}}}M()}function _(){P();for(const D in a){const U=a[D];for(const F in U){const O=U[F];for(const G in O)m(O[G].object),delete O[G];delete U[F]}delete a[D]}}function y(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const F in U){const O=U[F];for(const G in O)m(O[G].object),delete O[G];delete U[F]}delete a[D.id]}function R(D){for(const U in a){const F=a[U];if(F[D.id]===void 0)continue;const O=F[D.id];for(const G in O)m(O[G].object),delete O[G];delete F[D.id]}}function P(){N(),u=!0,h!==c&&(h=c,o(h.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:P,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:A,disableUnusedAttributes:M}}function Oh(s,e,t,i){const r=i.isWebGL2;let n;function l(u){n=u}function a(u,p){s.drawArrays(n,u,p),t.update(p,n,1)}function c(u,p,f){if(f===0)return;let o,m;if(r)o=s,m="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",o===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}o[m](n,u,p,f),t.update(p,n,f)}function h(u,p,f){if(f===0)return;const o=e.get("WEBGL_multi_draw");if(o===null)for(let m=0;m<f;m++)this.render(u[m],p[m]);else{o.multiDrawArraysWEBGL(n,u,0,p,0,f);let m=0;for(let v=0;v<f;v++)m+=p[v];t.update(m,n,1)}}this.setMode=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Bh(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=n(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=l||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),o=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,A=l||e.has("OES_texture_float"),x=S&&A,M=l?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:o,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:A,floatVertexTextures:x,maxSamples:M}}function zh(s){const e=this;let t=null,i=0,r=!1,n=!1;const l=new Sn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const o=p.length!==0||f||i!==0||r;return r=f,i=p.length,o},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,f){t=u(p,f,0)},this.setState=function(p,f,o){const m=p.clippingPlanes,v=p.clipIntersection,d=p.clipShadows,g=s.get(p);if(!r||m===null||m.length===0||n&&!d)n?u(null):h();else{const E=n?0:i,S=E*4;let A=g.clippingState||null;c.value=A,A=u(m,f,S,o);for(let x=0;x!==S;++x)A[x]=t[x];g.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,f,o,m){const v=p!==null?p.length:0;let d=null;if(v!==0){if(d=c.value,m!==!0||d===null){const g=o+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<g)&&(d=new Float32Array(g));for(let S=0,A=o;S!==v;++S,A+=4)l.copy(p[S]).applyMatrix4(E,a),l.normal.toArray(d,A),d[A+3]=l.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function Hh(s){let e=new WeakMap;function t(l,a){return a===Wr?l.mapping=jn:a===Xr&&(l.mapping=Zn),l}function i(l){if(l&&l.isTexture){const a=l.mapping;if(a===Wr||a===Xr)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const h=new Jl(c.height/2);return h.fromEquirectangularTexture(s,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class ts extends uo{constructor(e=-1,t=1,i=1,r=-1,n=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,l=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,l=n+h*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,l,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,ca=[.125,.215,.35,.446,.526,.582],En=20,Ur=new ts,ua=new He;let Ir=null,Nr=0,Fr=0;const yn=(1+Math.sqrt(5))/2,Wn=1/yn,ha=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,yn,Wn),new z(0,yn,-Wn),new z(Wn,0,yn),new z(-Wn,0,yn),new z(yn,Wn,0),new z(-yn,Wn,0)];class fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ir=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Nr,Fr),e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===Zn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:mi,format:zt,colorSpace:en,depthBuffer:!1},r=da(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gh(n)),this._blurMaterial=Vh(n,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,i,r){const a=new Ot(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(ua),u.toneMapping=un,u.autoClear=!1;const o=new Ht({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),m=new vt(new Si,o);let v=!1;const d=e.background;d?d.isColor&&(o.color.copy(d),e.background=null,v=!0):(o.color.copy(ua),v=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(a.up.set(0,c[g],0),a.lookAt(h[g],0,0)):E===1?(a.up.set(0,0,c[g]),a.lookAt(0,h[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,h[g]));const S=this._cubeSize;Wi(r,E*S,g>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jn||e.mapping===Zn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pa());const n=r?this._cubemapMaterial:this._equirectMaterial,l=new vt(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const c=this._cubeSize;Wi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(l,Ur)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=ha[(r-1)%ha.length];this._blur(e,r-1,r,n,l)}t.autoClear=i}_blur(e,t,i,r,n){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",n),this._halfBlur(l,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,l,a){const c=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new vt(this._lodPlanes[r],h),f=h.uniforms,o=this._sizeLods[i]-1,m=isFinite(n)?Math.PI/(2*o):2*Math.PI/(2*En-1),v=n/m,d=isFinite(n)?1+Math.floor(u*v):En;d>En&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const g=[];let E=0;for(let T=0;T<En;++T){const b=T/v,_=Math.exp(-b*b/2);g.push(_),T===0?E+=_:T<d&&(E+=2*_)}for(let T=0;T<g.length;T++)g[T]=g[T]/E;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=l==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-i;const A=this._sizeLods[r],x=3*A*(r>S-qn?r-S+qn:0),M=4*(this._cubeSize-A);Wi(t,x,M,3*A,2*A),c.setRenderTarget(t),c.render(p,Ur)}}function Gh(s){const e=[],t=[],i=[];let r=s;const n=s-qn+1+ca.length;for(let l=0;l<n;l++){const a=Math.pow(2,r);t.push(a);let c=1/a;l>s-qn?c=ca[l-s+qn-1]:l===0&&(c=0),i.push(c);const h=1/(a-2),u=-h,p=1+h,f=[u,u,p,u,p,p,u,u,p,p,u,p],o=6,m=6,v=3,d=2,g=1,E=new Float32Array(v*m*o),S=new Float32Array(d*m*o),A=new Float32Array(g*m*o);for(let M=0;M<o;M++){const T=M%3*2/3-1,b=M>2?0:-1,_=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];E.set(_,v*m*M),S.set(f,d*m*M);const y=[M,M,M,M,M,M];A.set(y,g*m*M)}const x=new Wt;x.setAttribute("position",new wt(E,v)),x.setAttribute("uv",new wt(S,d)),x.setAttribute("faceIndex",new wt(A,g)),e.push(x),r>qn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function da(s,e,t){const i=new wn(s,e,t);return i.texture.mapping=er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wi(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function Vh(s,e,t){const i=new Float32Array(En),r=new z(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ns(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function pa(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ns(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ma(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ns(){return`

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
	`}function kh(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,h=c===Wr||c===Xr,u=c===jn||c===Zn;if(h||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new fa(s)),p=h?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(h&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new fa(s));const f=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",n),f.texture}else return null}}}return a}function r(a){let c=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&c++;return c===h}function n(a){const c=a.target;c.removeEventListener("dispose",n);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function Wh(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xh(s,e,t,i){const r={},n=new WeakMap;function l(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let d=0,g=v.length;d<g;d++)e.remove(v[d])}f.removeEventListener("dispose",l),delete r[f.id];const o=n.get(f);o&&(e.remove(o),n.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],s.ARRAY_BUFFER);const o=p.morphAttributes;for(const m in o){const v=o[m];for(let d=0,g=v.length;d<g;d++)e.update(v[d],s.ARRAY_BUFFER)}}function h(p){const f=[],o=p.index,m=p.attributes.position;let v=0;if(o!==null){const E=o.array;v=o.version;for(let S=0,A=E.length;S<A;S+=3){const x=E[S+0],M=E[S+1],T=E[S+2];f.push(x,M,M,T,T,x)}}else if(m!==void 0){const E=m.array;v=m.version;for(let S=0,A=E.length/3-1;S<A;S+=3){const x=S+0,M=S+1,T=S+2;f.push(x,M,M,T,T,x)}}else return;const d=new(eo(f)?lo:oo)(f,1);d.version=v;const g=n.get(p);g&&e.remove(g),n.set(p,d)}function u(p){const f=n.get(p);if(f){const o=p.index;o!==null&&f.version<o.version&&h(p)}else h(p);return n.get(p)}return{get:a,update:c,getWireframeAttribute:u}}function qh(s,e,t,i){const r=i.isWebGL2;let n;function l(o){n=o}let a,c;function h(o){a=o.type,c=o.bytesPerElement}function u(o,m){s.drawElements(n,m,a,o*c),t.update(m,n,1)}function p(o,m,v){if(v===0)return;let d,g;if(r)d=s,g="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](n,m,a,o*c,v),t.update(m,n,v)}function f(o,m,v){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<v;g++)this.render(o[g]/c,m[g]);else{d.multiDrawElementsWEBGL(n,m,0,a,o,0,v);let g=0;for(let E=0;E<v;E++)g+=m[E];t.update(g,n,1)}}this.setMode=l,this.setIndex=h,this.render=u,this.renderInstances=p,this.renderMultiDraw=f}function Yh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,l,a){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=a*(n/3);break;case s.LINES:t.lines+=a*(n/2);break;case s.LINE_STRIP:t.lines+=a*(n-1);break;case s.LINE_LOOP:t.lines+=a*n;break;case s.POINTS:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Kh(s,e){return s[0]-e[0]}function $h(s,e){return Math.abs(e[1])-Math.abs(s[1])}function jh(s,e,t){const i={},r=new Float32Array(8),n=new WeakMap,l=new ht,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,u,p){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let d=n.get(u);if(d===void 0||d.count!==v){let U=function(){N.dispose(),n.delete(u),u.removeEventListener("dispose",U)};var o=U;d!==void 0&&d.texture.dispose();const S=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let _=0;S===!0&&(_=1),A===!0&&(_=2),x===!0&&(_=3);let y=u.attributes.position.count*_,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const P=new Float32Array(y*R*4*v),N=new io(P,y,R,v);N.type=ln,N.needsUpdate=!0;const D=_*4;for(let F=0;F<v;F++){const O=M[F],G=T[F],Y=b[F],K=y*R*4*F;for(let Z=0;Z<O.count;Z++){const j=Z*D;S===!0&&(l.fromBufferAttribute(O,Z),P[K+j+0]=l.x,P[K+j+1]=l.y,P[K+j+2]=l.z,P[K+j+3]=0),A===!0&&(l.fromBufferAttribute(G,Z),P[K+j+4]=l.x,P[K+j+5]=l.y,P[K+j+6]=l.z,P[K+j+7]=0),x===!0&&(l.fromBufferAttribute(Y,Z),P[K+j+8]=l.x,P[K+j+9]=l.y,P[K+j+10]=l.z,P[K+j+11]=Y.itemSize===4?l.w:1)}}d={count:v,texture:N,size:new Ve(y,R)},n.set(u,d),u.addEventListener("dispose",U)}let g=0;for(let S=0;S<f.length;S++)g+=f[S];const E=u.morphTargetsRelative?1:1-g;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",f),p.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const m=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let A=0;A<m;A++)v[A]=[A,0];i[u.id]=v}for(let A=0;A<m;A++){const x=v[A];x[0]=A,x[1]=f[A]}v.sort($h);for(let A=0;A<8;A++)A<m&&v[A][1]?(a[A][0]=v[A][0],a[A][1]=v[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(Kh);const d=u.morphAttributes.position,g=u.morphAttributes.normal;let E=0;for(let A=0;A<8;A++){const x=a[A],M=x[0],T=x[1];M!==Number.MAX_SAFE_INTEGER&&T?(d&&u.getAttribute("morphTarget"+A)!==d[M]&&u.setAttribute("morphTarget"+A,d[M]),g&&u.getAttribute("morphNormal"+A)!==g[M]&&u.setAttribute("morphNormal"+A,g[M]),r[A]=T,E+=T):(d&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),g&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const S=u.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",S),p.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:c}}function Zh(s,e,t,i){let r=new WeakMap;function n(c){const h=i.render.frame,u=c.geometry,p=e.get(c,u);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return p}function l(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:n,dispose:l}}class po extends dt{constructor(e,t,i,r,n,l,a,c,h,u){if(u=u!==void 0?u:An,u!==An&&u!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===An&&(i=on),i===void 0&&u===Qn&&(i=Tn),super(null,r,n,l,a,c,u,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mo=new dt,go=new po(1,1);go.compareFunction=Qa;const vo=new io,xo=new Nl,_o=new ho,ga=[],va=[],xa=new Float32Array(16),_a=new Float32Array(9),Sa=new Float32Array(4);function ii(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=ga[r];if(n===void 0&&(n=new Float32Array(r),ga[r]=n),e!==0){i.toArray(n,0);for(let l=1,a=0;l!==e;++l)a+=t,s[l].toArray(n,a)}return n}function st(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function at(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ir(s,e){let t=va[e];t===void 0&&(t=new Int32Array(e),va[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Jh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2fv(this.addr,e),at(t,e)}}function ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;s.uniform3fv(this.addr,e),at(t,e)}}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4fv(this.addr,e),at(t,e)}}function nf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;Sa.set(i),s.uniformMatrix2fv(this.addr,!1,Sa),at(t,i)}}function rf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;_a.set(i),s.uniformMatrix3fv(this.addr,!1,_a),at(t,i)}}function sf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;xa.set(i),s.uniformMatrix4fv(this.addr,!1,xa),at(t,i)}}function af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2iv(this.addr,e),at(t,e)}}function lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;s.uniform3iv(this.addr,e),at(t,e)}}function cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4iv(this.addr,e),at(t,e)}}function uf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2uiv(this.addr,e),at(t,e)}}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;s.uniform3uiv(this.addr,e),at(t,e)}}function df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4uiv(this.addr,e),at(t,e)}}function pf(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);const n=this.type===s.SAMPLER_2D_SHADOW?go:mo;t.setTexture2D(e||n,r)}function mf(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xo,r)}function gf(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_o,r)}function vf(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vo,r)}function xf(s){switch(s){case 5126:return Jh;case 35664:return Qh;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return rf;case 35676:return sf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return uf;case 36294:return hf;case 36295:return ff;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return vf}}function _f(s,e){s.uniform1fv(this.addr,e)}function Sf(s,e){const t=ii(e,this.size,2);s.uniform2fv(this.addr,t)}function yf(s,e){const t=ii(e,this.size,3);s.uniform3fv(this.addr,t)}function Mf(s,e){const t=ii(e,this.size,4);s.uniform4fv(this.addr,t)}function Ef(s,e){const t=ii(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tf(s,e){const t=ii(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Af(s,e){const t=ii(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bf(s,e){s.uniform1iv(this.addr,e)}function wf(s,e){s.uniform2iv(this.addr,e)}function Cf(s,e){s.uniform3iv(this.addr,e)}function Rf(s,e){s.uniform4iv(this.addr,e)}function Pf(s,e){s.uniform1uiv(this.addr,e)}function Lf(s,e){s.uniform2uiv(this.addr,e)}function Df(s,e){s.uniform3uiv(this.addr,e)}function Uf(s,e){s.uniform4uiv(this.addr,e)}function If(s,e,t){const i=this.cache,r=e.length,n=ir(t,r);st(i,n)||(s.uniform1iv(this.addr,n),at(i,n));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||mo,n[l])}function Nf(s,e,t){const i=this.cache,r=e.length,n=ir(t,r);st(i,n)||(s.uniform1iv(this.addr,n),at(i,n));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||xo,n[l])}function Ff(s,e,t){const i=this.cache,r=e.length,n=ir(t,r);st(i,n)||(s.uniform1iv(this.addr,n),at(i,n));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||_o,n[l])}function Of(s,e,t){const i=this.cache,r=e.length,n=ir(t,r);st(i,n)||(s.uniform1iv(this.addr,n),at(i,n));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||vo,n[l])}function Bf(s){switch(s){case 5126:return _f;case 35664:return Sf;case 35665:return yf;case 35666:return Mf;case 35674:return Ef;case 35675:return Tf;case 35676:return Af;case 5124:case 35670:return bf;case 35667:case 35671:return wf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return Lf;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class zf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xf(t.type)}}class Hf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}}class Gf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,l=r.length;n!==l;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function ya(s,e){s.seq.push(e),s.map[e.id]=e}function Vf(s,e,t){const i=s.name,r=i.length;for(Or.lastIndex=0;;){const n=Or.exec(i),l=Or.lastIndex;let a=n[1];const c=n[2]==="]",h=n[3];if(c&&(a=a|0),h===void 0||h==="["&&l+2===r){ya(t,h===void 0?new zf(a,s,e):new Hf(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new Gf(a),ya(t,p)),t=p}}}class Ki{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),l=e.getUniformLocation(t,n.name);Vf(n,l,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,l=t.length;n!==l;++n){const a=t[n],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function Ma(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const kf=37297;let Wf=0;function Xf(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let l=r;l<n;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return i.join(`
`)}function qf(s){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(s);let i;switch(e===t?i="":e===Ji&&t===Zi?i="LinearDisplayP3ToLinearSRGB":e===Zi&&t===Ji&&(i="LinearSRGBToLinearDisplayP3"),s){case en:case tr:return[i,"LinearTransferOETF"];case rt:case Qr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Ea(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const l=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Xf(s.getShaderSource(e),l)}else return r}function Yf(s,e){const t=qf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kf(s,e){let t;switch(e){case il:t="Linear";break;case rl:t="Reinhard";break;case sl:t="OptimizedCineon";break;case al:t="ACESFilmic";break;case ll:t="AgX";break;case ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $f(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yn).join(`
`)}function jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yn).join(`
`)}function Zf(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jf(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),l=n.name;let a=1;n.type===s.FLOAT_MAT2&&(a=2),n.type===s.FLOAT_MAT3&&(a=3),n.type===s.FLOAT_MAT4&&(a=4),t[l]={type:n.type,location:s.getAttribLocation(e,l),locationSize:a}}return t}function Yn(s){return s!==""}function Ta(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Aa(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(s){return s.replace(Qf,td)}const ed=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function td(s,e){let t=De[e];if(t===void 0){const i=ed.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jr(t)}const nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(s){return s.replace(nd,id)}function id(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function wa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Va?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function sd(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jn:case Zn:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ad(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zn:e="ENVMAP_MODE_REFRACTION";break}return e}function od(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ka:e="ENVMAP_BLENDING_MULTIPLY";break;case tl:e="ENVMAP_BLENDING_MIX";break;case nl:e="ENVMAP_BLENDING_ADD";break}return e}function ld(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cd(s,e,t,i){const r=s.getContext(),n=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=rd(t),h=sd(t),u=ad(t),p=od(t),f=ld(t),o=t.isWebGL2?"":$f(t),m=jf(t),v=Zf(n),d=r.createProgram();let g,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Yn).join(`
`),g.length>0&&(g+=`
`),E=[o,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Yn).join(`
`),E.length>0&&(E+=`
`)):(g=[wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yn).join(`
`),E=[o,wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?De.tonemapping_pars_fragment:"",t.toneMapping!==un?Kf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Yf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yn).join(`
`)),l=jr(l),l=Ta(l,t),l=Aa(l,t),a=jr(a),a=Ta(a,t),a=Aa(a,t),l=ba(l),a=ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const A=S+g+l,x=S+E+a,M=Ma(r,r.VERTEX_SHADER,A),T=Ma(r,r.FRAGMENT_SHADER,x);r.attachShader(d,M),r.attachShader(d,T),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function b(P){if(s.debug.checkShaderErrors){const N=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(M).trim(),U=r.getShaderInfoLog(T).trim();let F=!0,O=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,d,M,T);else{const G=Ea(r,M,"vertex"),Y=Ea(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:F,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:U,prefix:E}})}r.deleteShader(M),r.deleteShader(T),_=new Ki(r,d),y=Jf(r,d)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(d,kf)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=T,this}let ud=0;class hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(n)===!1&&(l.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fd(e),t.set(e,i)),i}}class fd{constructor(e){this.id=ud++,this.code=e,this.usedTimes=0}}function dd(s,e,t,i,r,n,l){const a=new so,c=new hd,h=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,f=r.vertexTextures;let o=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===0?"uv":`uv${_}`}function d(_,y,R,P,N){const D=P.fog,U=N.geometry,F=_.isMeshStandardMaterial?P.environment:null,O=(_.isMeshStandardMaterial?t:e).get(_.envMap||F),G=O&&O.mapping===er?O.image.height:null,Y=m[_.type];_.precision!==null&&(o=r.getMaxPrecision(_.precision),o!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",o,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Z=K!==void 0?K.length:0;let j=0;U.morphAttributes.position!==void 0&&(j=1),U.morphAttributes.normal!==void 0&&(j=2),U.morphAttributes.color!==void 0&&(j=3);let k,$,ne,ae;if(Y){const xt=kt[Y];k=xt.vertexShader,$=xt.fragmentShader}else k=_.vertexShader,$=_.fragmentShader,c.update(_),ne=c.getVertexShaderID(_),ae=c.getFragmentShaderID(_);const ue=s.getRenderTarget(),ge=N.isInstancedMesh===!0,we=N.isBatchedMesh===!0,ye=!!_.map,ze=!!_.matcap,H=!!O,ot=!!_.aoMap,ve=!!_.lightMap,xe=!!_.bumpMap,pe=!!_.normalMap,qe=!!_.displacementMap,Ce=!!_.emissiveMap,L=!!_.metalnessMap,w=!!_.roughnessMap,V=_.anisotropy>0,J=_.clearcoat>0,Q=_.iridescence>0,te=_.sheen>0,de=_.transmission>0,se=V&&!!_.anisotropyMap,he=J&&!!_.clearcoatMap,Ee=J&&!!_.clearcoatNormalMap,Ue=J&&!!_.clearcoatRoughnessMap,ee=Q&&!!_.iridescenceMap,We=Q&&!!_.iridescenceThicknessMap,Be=te&&!!_.sheenColorMap,be=te&&!!_.sheenRoughnessMap,_e=!!_.specularMap,fe=!!_.specularColorMap,Le=!!_.specularIntensityMap,ke=de&&!!_.transmissionMap,et=de&&!!_.thicknessMap,Ne=!!_.gradientMap,ie=!!_.alphaMap,I=_.alphaTest>0,oe=!!_.alphaHash,le=!!_.extensions,Te=!!U.attributes.uv1,Se=!!U.attributes.uv2,Ye=!!U.attributes.uv3;let Ke=un;return _.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=s.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:$,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:o,batching:we,instancing:ge,instancingColor:ge&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:en,map:ye,matcap:ze,envMap:H,envMapMode:H&&O.mapping,envMapCubeUVHeight:G,aoMap:ot,lightMap:ve,bumpMap:xe,normalMap:pe,displacementMap:f&&qe,emissiveMap:Ce,normalMapObjectSpace:pe&&_.normalMapType===yl,normalMapTangentSpace:pe&&_.normalMapType===Sl,metalnessMap:L,roughnessMap:w,anisotropy:V,anisotropyMap:se,clearcoat:J,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ue,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:We,sheen:te,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:_e,specularColorMap:fe,specularIntensityMap:Le,transmission:de,transmissionMap:ke,thicknessMap:et,gradientMap:Ne,opaque:_.transparent===!1&&_.blending===Kn,alphaMap:ie,alphaTest:I,alphaHash:oe,combine:_.combine,mapUv:ye&&v(_.map.channel),aoMapUv:ot&&v(_.aoMap.channel),lightMapUv:ve&&v(_.lightMap.channel),bumpMapUv:xe&&v(_.bumpMap.channel),normalMapUv:pe&&v(_.normalMap.channel),displacementMapUv:qe&&v(_.displacementMap.channel),emissiveMapUv:Ce&&v(_.emissiveMap.channel),metalnessMapUv:L&&v(_.metalnessMap.channel),roughnessMapUv:w&&v(_.roughnessMap.channel),anisotropyMapUv:se&&v(_.anisotropyMap.channel),clearcoatMapUv:he&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(_.sheenRoughnessMap.channel),specularMapUv:_e&&v(_.specularMap.channel),specularColorMapUv:fe&&v(_.specularColorMap.channel),specularIntensityMapUv:Le&&v(_.specularIntensityMap.channel),transmissionMapUv:ke&&v(_.transmissionMap.channel),thicknessMapUv:et&&v(_.thicknessMap.channel),alphaMapUv:ie&&v(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:Ye,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(ye||ie),fog:!!D,useFog:_.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ye&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Lt,flipSided:_.side===Et,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:le&&_.extensions.derivatives===!0,extensionFragDepth:le&&_.extensions.fragDepth===!0,extensionDrawBuffers:le&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function g(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)y.push(R),y.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(E(y,_),S(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function E(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function S(_,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function A(_){const y=m[_.type];let R;if(y){const P=kt[y];R=Kl.clone(P.uniforms)}else R=_.uniforms;return R}function x(_,y){let R;for(let P=0,N=h.length;P<N;P++){const D=h[P];if(D.cacheKey===y){R=D,++R.usedTimes;break}}return R===void 0&&(R=new cd(s,y,_,n),h.push(R)),R}function M(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function T(_){c.remove(_)}function b(){c.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:A,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:b}}function pd(){let s=new WeakMap;function e(n){let l=s.get(n);return l===void 0&&(l={},s.set(n,l)),l}function t(n){s.delete(n)}function i(n,l,a){s.get(n)[l]=a}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function md(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ca(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ra(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function l(p,f,o,m,v,d){let g=s[e];return g===void 0?(g={id:p.id,object:p,geometry:f,material:o,groupOrder:m,renderOrder:p.renderOrder,z:v,group:d},s[e]=g):(g.id=p.id,g.object=p,g.geometry=f,g.material=o,g.groupOrder=m,g.renderOrder=p.renderOrder,g.z=v,g.group=d),e++,g}function a(p,f,o,m,v,d){const g=l(p,f,o,m,v,d);o.transmission>0?i.push(g):o.transparent===!0?r.push(g):t.push(g)}function c(p,f,o,m,v,d){const g=l(p,f,o,m,v,d);o.transmission>0?i.unshift(g):o.transparent===!0?r.unshift(g):t.unshift(g)}function h(p,f){t.length>1&&t.sort(p||md),i.length>1&&i.sort(f||Ca),r.length>1&&r.sort(f||Ca)}function u(){for(let p=e,f=s.length;p<f;p++){const o=s[p];if(o.id===null)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:c,finish:u,sort:h}}function gd(){let s=new WeakMap;function e(i,r){const n=s.get(i);let l;return n===void 0?(l=new Ra,s.set(i,[l])):r>=n.length?(l=new Ra,n.push(l)):l=n[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function vd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new He};break;case"SpotLight":t={position:new z,direction:new z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function xd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _d=0;function Sd(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yd(s,e){const t=new vd,i=xd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const n=new z,l=new Qe,a=new Qe;function c(u,p){let f=0,o=0,m=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let v=0,d=0,g=0,E=0,S=0,A=0,x=0,M=0,T=0,b=0,_=0;u.sort(Sd);const y=p===!0?Math.PI:1;for(let P=0,N=u.length;P<N;P++){const D=u[P],U=D.color,F=D.intensity,O=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*F*y,o+=U.g*F*y,m+=U.b*F*y;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(D.sh.coefficients[Y],F);_++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const K=D.shadow,Z=i.get(D);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[v]=Z,r.directionalShadowMap[v]=G,r.directionalShadowMatrix[v]=D.shadow.matrix,A++}r.directional[v]=Y,v++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(U).multiplyScalar(F*y),Y.distance=O,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,r.spot[g]=Y;const K=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,K.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[g]=K.matrix,D.castShadow){const Z=i.get(D);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[g]=Z,r.spotShadowMap[g]=G,M++}g++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(U).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=Y,E++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*y),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const K=D.shadow,Z=i.get(D);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[d]=Z,r.pointShadowMap[d]=G,r.pointShadowMatrix[d]=D.shadow.matrix,x++}r.point[d]=Y,d++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(F*y),Y.groundColor.copy(D.groundColor).multiplyScalar(F*y),r.hemi[S]=Y,S++}}E>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=o,r.ambient[2]=m;const R=r.hash;(R.directionalLength!==v||R.pointLength!==d||R.spotLength!==g||R.rectAreaLength!==E||R.hemiLength!==S||R.numDirectionalShadows!==A||R.numPointShadows!==x||R.numSpotShadows!==M||R.numSpotMaps!==T||R.numLightProbes!==_)&&(r.directional.length=v,r.spot.length=g,r.rectArea.length=E,r.point.length=d,r.hemi.length=S,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=M+T-b,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=_,R.directionalLength=v,R.pointLength=d,R.spotLength=g,R.rectAreaLength=E,R.hemiLength=S,R.numDirectionalShadows=A,R.numPointShadows=x,R.numSpotShadows=M,R.numSpotMaps=T,R.numLightProbes=_,r.version=_d++)}function h(u,p){let f=0,o=0,m=0,v=0,d=0;const g=p.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const A=u[E];if(A.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),f++}else if(A.isSpotLight){const x=r.spot[m];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const x=r.rectArea[v];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(g),a.identity(),l.copy(A.matrixWorld),l.premultiply(g),a.extractRotation(l),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const x=r.point[o];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(g),o++}else if(A.isHemisphereLight){const x=r.hemi[d];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(g),d++}}}return{setup:c,setupView:h,state:r}}function Pa(s,e){const t=new yd(s,e),i=[],r=[];function n(){i.length=0,r.length=0}function l(p){i.push(p)}function a(p){r.push(p)}function c(p){t.setup(i,p)}function h(p){t.setupView(i,p)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:h,pushLight:l,pushShadow:a}}function Md(s,e){let t=new WeakMap;function i(n,l=0){const a=t.get(n);let c;return a===void 0?(c=new Pa(s,e),t.set(n,[c])):l>=a.length?(c=new Pa(s,e),a.push(c)):c=a[l],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ed extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Td extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ad=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bd=`uniform sampler2D shadow_pass;
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
}`;function wd(s,e,t){let i=new es;const r=new Ve,n=new Ve,l=new ht,a=new Ed({depthPacking:_l}),c=new Td,h={},u=t.maxTextureSize,p={[fn]:Et,[Et]:fn,[Lt]:Lt},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Ad,fragmentShader:bd}),o=f.clone();o.defines.HORIZONTAL_PASS=1;const m=new Wt;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let g=this.type;this.render=function(M,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const _=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),P=s.state;P.setBlending(cn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=g!==Zt&&this.type===Zt,D=g===Zt&&this.type!==Zt;for(let U=0,F=M.length;U<F;U++){const O=M[U],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Y=G.getFrameExtents();if(r.multiply(Y),n.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(n.x=Math.floor(u/Y.x),r.x=n.x*Y.x,G.mapSize.x=n.x),r.y>u&&(n.y=Math.floor(u/Y.y),r.y=n.y*Y.y,G.mapSize.y=n.y)),G.map===null||N===!0||D===!0){const Z=this.type!==Zt?{minFilter:Ze,magFilter:Ze}:{};G.map!==null&&G.map.dispose(),G.map=new wn(r.x,r.y,Z),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const K=G.getViewportCount();for(let Z=0;Z<K;Z++){const j=G.getViewport(Z);l.set(n.x*j.x,n.y*j.y,n.x*j.z,n.y*j.w),P.viewport(l),G.updateMatrices(O,Z),i=G.getFrustum(),A(T,b,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Zt&&E(G,b),G.needsUpdate=!1}g=this.type,d.needsUpdate=!1,s.setRenderTarget(_,y,R)};function E(M,T){const b=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,o.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,o.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,b,f,v,null),o.uniforms.shadow_pass.value=M.mapPass.texture,o.uniforms.resolution.value=M.mapSize,o.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,b,o,v,null)}function S(M,T,b,_){let y=null;const R=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)y=R;else if(y=b.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=y.uuid,N=T.uuid;let D=h[P];D===void 0&&(D={},h[P]=D);let U=D[N];U===void 0&&(U=y.clone(),D[N]=U,T.addEventListener("dispose",x)),y=U}if(y.visible=T.visible,y.wireframe=T.wireframe,_===Zt?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:p[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const P=s.properties.get(y);P.light=b}return y}function A(M,T,b,_,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Zt)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const N=e.update(M),D=M.material;if(Array.isArray(D)){const U=N.groups;for(let F=0,O=U.length;F<O;F++){const G=U[F],Y=D[G.materialIndex];if(Y&&Y.visible){const K=S(M,Y,_,y);M.onBeforeShadow(s,M,T,b,N,K,G),s.renderBufferDirect(b,null,N,K,M,G),M.onAfterShadow(s,M,T,b,N,K,G)}}}else if(D.visible){const U=S(M,D,_,y);M.onBeforeShadow(s,M,T,b,N,U,null),s.renderBufferDirect(b,null,N,U,M,null),M.onAfterShadow(s,M,T,b,N,U,null)}}const P=M.children;for(let N=0,D=P.length;N<D;N++)A(P[N],T,b,_,y)}function x(M){M.target.removeEventListener("dispose",x);for(const b in h){const _=h[b],y=M.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function Cd(s,e,t){const i=t.isWebGL2;function r(){let I=!1;const oe=new ht;let le=null;const Te=new ht(0,0,0,0);return{setMask:function(Se){le!==Se&&!I&&(s.colorMask(Se,Se,Se,Se),le=Se)},setLocked:function(Se){I=Se},setClear:function(Se,Ye,Ke,lt,xt){xt===!0&&(Se*=lt,Ye*=lt,Ke*=lt),oe.set(Se,Ye,Ke,lt),Te.equals(oe)===!1&&(s.clearColor(Se,Ye,Ke,lt),Te.copy(oe))},reset:function(){I=!1,le=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,oe=null,le=null,Te=null;return{setTest:function(Se){Se?we(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!I&&(s.depthMask(Se),oe=Se)},setFunc:function(Se){if(le!==Se){switch(Se){case Ko:s.depthFunc(s.NEVER);break;case $o:s.depthFunc(s.ALWAYS);break;case jo:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Zo:s.depthFunc(s.EQUAL);break;case Jo:s.depthFunc(s.GEQUAL);break;case Qo:s.depthFunc(s.GREATER);break;case el:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Se}},setLocked:function(Se){I=Se},setClear:function(Se){Te!==Se&&(s.clearDepth(Se),Te=Se)},reset:function(){I=!1,oe=null,le=null,Te=null}}}function l(){let I=!1,oe=null,le=null,Te=null,Se=null,Ye=null,Ke=null,lt=null,xt=null;return{setTest:function($e){I||($e?we(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function($e){oe!==$e&&!I&&(s.stencilMask($e),oe=$e)},setFunc:function($e,_t,Vt){(le!==$e||Te!==_t||Se!==Vt)&&(s.stencilFunc($e,_t,Vt),le=$e,Te=_t,Se=Vt)},setOp:function($e,_t,Vt){(Ye!==$e||Ke!==_t||lt!==Vt)&&(s.stencilOp($e,_t,Vt),Ye=$e,Ke=_t,lt=Vt)},setLocked:function($e){I=$e},setClear:function($e){xt!==$e&&(s.clearStencil($e),xt=$e)},reset:function(){I=!1,oe=null,le=null,Te=null,Se=null,Ye=null,Ke=null,lt=null,xt=null}}}const a=new r,c=new n,h=new l,u=new WeakMap,p=new WeakMap;let f={},o={},m=new WeakMap,v=[],d=null,g=!1,E=null,S=null,A=null,x=null,M=null,T=null,b=null,_=new He(0,0,0),y=0,R=!1,P=null,N=null,D=null,U=null,F=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=Y>=2);let Z=null,j={};const k=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ne=new ht().fromArray(k),ae=new ht().fromArray($);function ue(I,oe,le,Te){const Se=new Uint8Array(4),Ye=s.createTexture();s.bindTexture(I,Ye),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<le;Ke++)i&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(oe+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Ye}const ge={};ge[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),we(s.DEPTH_TEST),c.setFunc($i),Ce(!1),L(hs),we(s.CULL_FACE),pe(cn);function we(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function ye(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function ze(I,oe){return o[I]!==oe?(s.bindFramebuffer(I,oe),o[I]=oe,i&&(I===s.DRAW_FRAMEBUFFER&&(o[s.FRAMEBUFFER]=oe),I===s.FRAMEBUFFER&&(o[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function H(I,oe){let le=v,Te=!1;if(I)if(le=m.get(oe),le===void 0&&(le=[],m.set(oe,le)),I.isWebGLMultipleRenderTargets){const Se=I.texture;if(le.length!==Se.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Ye=0,Ke=Se.length;Ye<Ke;Ye++)le[Ye]=s.COLOR_ATTACHMENT0+Ye;le.length=Se.length,Te=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Te=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function ot(I){return d!==I?(s.useProgram(I),d=I,!0):!1}const ve={[Mn]:s.FUNC_ADD,[Uo]:s.FUNC_SUBTRACT,[Io]:s.FUNC_REVERSE_SUBTRACT};if(i)ve[ms]=s.MIN,ve[gs]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ve[ms]=I.MIN_EXT,ve[gs]=I.MAX_EXT)}const xe={[No]:s.ZERO,[Fo]:s.ONE,[Oo]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[ko]:s.SRC_ALPHA_SATURATE,[Go]:s.DST_COLOR,[zo]:s.DST_ALPHA,[Bo]:s.ONE_MINUS_SRC_COLOR,[kr]:s.ONE_MINUS_SRC_ALPHA,[Vo]:s.ONE_MINUS_DST_COLOR,[Ho]:s.ONE_MINUS_DST_ALPHA,[Wo]:s.CONSTANT_COLOR,[Xo]:s.ONE_MINUS_CONSTANT_COLOR,[qo]:s.CONSTANT_ALPHA,[Yo]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(I,oe,le,Te,Se,Ye,Ke,lt,xt,$e){if(I===cn){g===!0&&(ye(s.BLEND),g=!1);return}if(g===!1&&(we(s.BLEND),g=!0),I!==Do){if(I!==E||$e!==R){if((S!==Mn||M!==Mn)&&(s.blendEquation(s.FUNC_ADD),S=Mn,M=Mn),$e)switch(I){case Kn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fs:s.blendFunc(s.ONE,s.ONE);break;case ds:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ps:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ds:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ps:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,x=null,T=null,b=null,_.set(0,0,0),y=0,E=I,R=$e}return}Se=Se||oe,Ye=Ye||le,Ke=Ke||Te,(oe!==S||Se!==M)&&(s.blendEquationSeparate(ve[oe],ve[Se]),S=oe,M=Se),(le!==A||Te!==x||Ye!==T||Ke!==b)&&(s.blendFuncSeparate(xe[le],xe[Te],xe[Ye],xe[Ke]),A=le,x=Te,T=Ye,b=Ke),(lt.equals(_)===!1||xt!==y)&&(s.blendColor(lt.r,lt.g,lt.b,xt),_.copy(lt),y=xt),E=I,R=!1}function qe(I,oe){I.side===Lt?ye(s.CULL_FACE):we(s.CULL_FACE);let le=I.side===Et;oe&&(le=!le),Ce(le),I.blending===Kn&&I.transparent===!1?pe(cn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Te=I.stencilWrite;h.setTest(Te),Te&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){P!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),P=I)}function L(I){I!==Ro?(we(s.CULL_FACE),I!==N&&(I===hs?s.cullFace(s.BACK):I===Po?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),N=I}function w(I){I!==D&&(G&&s.lineWidth(I),D=I)}function V(I,oe,le){I?(we(s.POLYGON_OFFSET_FILL),(U!==oe||F!==le)&&(s.polygonOffset(oe,le),U=oe,F=le)):ye(s.POLYGON_OFFSET_FILL)}function J(I){I?we(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Q(I){I===void 0&&(I=s.TEXTURE0+O-1),Z!==I&&(s.activeTexture(I),Z=I)}function te(I,oe,le){le===void 0&&(Z===null?le=s.TEXTURE0+O-1:le=Z);let Te=j[le];Te===void 0&&(Te={type:void 0,texture:void 0},j[le]=Te),(Te.type!==I||Te.texture!==oe)&&(Z!==le&&(s.activeTexture(le),Z=le),s.bindTexture(I,oe||ge[I]),Te.type=I,Te.texture=oe)}function de(){const I=j[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function ke(I){ae.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}function et(I,oe){let le=p.get(oe);le===void 0&&(le=new WeakMap,p.set(oe,le));let Te=le.get(I);Te===void 0&&(Te=s.getUniformBlockIndex(oe,I.name),le.set(I,Te))}function Ne(I,oe){const Te=p.get(oe).get(I);u.get(oe)!==Te&&(s.uniformBlockBinding(oe,Te,I.__bindingPointIndex),u.set(oe,Te))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Z=null,j={},o={},m=new WeakMap,v=[],d=null,g=!1,E=null,S=null,A=null,x=null,M=null,T=null,b=null,_=new He(0,0,0),y=0,R=!1,P=null,N=null,D=null,U=null,F=null,ne.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:we,disable:ye,bindFramebuffer:ze,drawBuffers:H,useProgram:ot,setBlending:pe,setMaterial:qe,setFlipSided:Ce,setCullFace:L,setLineWidth:w,setPolygonOffset:V,setScissorTest:J,activeTexture:Q,bindTexture:te,unbindTexture:de,compressedTexImage2D:se,compressedTexImage3D:he,texImage2D:_e,texImage3D:fe,updateUBOMapping:et,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:be,texSubImage2D:Ee,texSubImage3D:Ue,compressedTexSubImage2D:ee,compressedTexSubImage3D:We,scissor:Le,viewport:ke,reset:ie}}function Rd(s,e,t,i,r,n,l){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let p;const f=new WeakMap;let o=!1;try{o=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return o?new OffscreenCanvas(L,w):gi("canvas")}function v(L,w,V,J){let Q=1;if((L.width>J||L.height>J)&&(Q=J/Math.max(L.width,L.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const te=w?$r:Math.floor,de=te(Q*L.width),se=te(Q*L.height);p===void 0&&(p=m(de,se));const he=V?m(de,se):p;return he.width=de,he.height=se,he.getContext("2d").drawImage(L,0,0,de,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+de+"x"+se+")."),he}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function d(L){return qs(L.width)&&qs(L.height)}function g(L){return a?!1:L.wrapS!==Bt||L.wrapT!==Bt||L.minFilter!==Ze&&L.minFilter!==Pt}function E(L,w){return L.generateMipmaps&&w&&L.minFilter!==Ze&&L.minFilter!==Pt}function S(L){s.generateMipmap(L)}function A(L,w,V,J,Q=!1){if(a===!1)return w;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=w;if(w===s.RED&&(V===s.FLOAT&&(te=s.R32F),V===s.HALF_FLOAT&&(te=s.R16F),V===s.UNSIGNED_BYTE&&(te=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(te=s.R8UI),V===s.UNSIGNED_SHORT&&(te=s.R16UI),V===s.UNSIGNED_INT&&(te=s.R32UI),V===s.BYTE&&(te=s.R8I),V===s.SHORT&&(te=s.R16I),V===s.INT&&(te=s.R32I)),w===s.RG&&(V===s.FLOAT&&(te=s.RG32F),V===s.HALF_FLOAT&&(te=s.RG16F),V===s.UNSIGNED_BYTE&&(te=s.RG8)),w===s.RGBA){const de=Q?ji:Xe.getTransfer(J);V===s.FLOAT&&(te=s.RGBA32F),V===s.HALF_FLOAT&&(te=s.RGBA16F),V===s.UNSIGNED_BYTE&&(te=de===je?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(L,w,V){return E(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==Ze&&L.minFilter!==Pt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function M(L){return L===Ze||L===vs||L===lr?s.NEAREST:s.LINEAR}function T(L){const w=L.target;w.removeEventListener("dispose",T),_(w),w.isVideoTexture&&u.delete(w)}function b(L){const w=L.target;w.removeEventListener("dispose",b),R(w)}function _(L){const w=i.get(L);if(w.__webglInit===void 0)return;const V=L.source,J=f.get(V);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(L),Object.keys(J).length===0&&f.delete(V)}i.remove(L)}function y(L){const w=i.get(L);s.deleteTexture(w.__webglTexture);const V=L.source,J=f.get(V);delete J[w.__cacheKey],l.memory.textures--}function R(L){const w=L.texture,V=i.get(L),J=i.get(w);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),l.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(V.__webglFramebuffer[Q]))for(let te=0;te<V.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(V.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(V.__webglFramebuffer[Q]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[Q])}else{if(Array.isArray(V.__webglFramebuffer))for(let Q=0;Q<V.__webglFramebuffer.length;Q++)s.deleteFramebuffer(V.__webglFramebuffer[Q]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let Q=0;Q<V.__webglColorRenderbuffer.length;Q++)V.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Q=0,te=w.length;Q<te;Q++){const de=i.get(w[Q]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),l.memory.textures--),i.remove(w[Q])}i.remove(w),i.remove(L)}let P=0;function N(){P=0}function D(){const L=P;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),P+=1,L}function U(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function F(L,w){const V=i.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(V,L,w);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function O(L,w){const V=i.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function G(L,w){const V=i.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,w);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function Y(L,w){const V=i.get(L);if(L.version>0&&V.__version!==L.version){ae(V,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}const K={[Jn]:s.REPEAT,[Bt]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},Z={[Ze]:s.NEAREST,[vs]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[cl]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},j={[Ml]:s.NEVER,[Cl]:s.ALWAYS,[El]:s.LESS,[Qa]:s.LEQUAL,[Tl]:s.EQUAL,[wl]:s.GEQUAL,[Al]:s.GREATER,[bl]:s.NOTEQUAL};function k(L,w,V){if(V?(s.texParameteri(L,s.TEXTURE_WRAP_S,K[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,K[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,K[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Z[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Z[w.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==Bt||w.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,M(w.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Ze&&w.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ze||w.minFilter!==lr&&w.minFilter!==pi||w.type===ln&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===mi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function $(L,w){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));const J=w.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const te=U(w);if(te!==L.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,V=!0),Q[te].usedTimes++;const de=Q[L.__cacheKey];de!==void 0&&(Q[L.__cacheKey].usedTimes--,de.usedTimes===0&&y(w)),L.__cacheKey=te,L.__webglTexture=Q[te].texture}return V}function ne(L,w,V){let J=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=s.TEXTURE_3D);const Q=$(L,w),te=w.source;t.bindTexture(J,L.__webglTexture,s.TEXTURE0+V);const de=i.get(te);if(te.version!==de.__version||Q===!0){t.activeTexture(s.TEXTURE0+V);const se=Xe.getPrimaries(Xe.workingColorSpace),he=w.colorSpace===Dt?null:Xe.getPrimaries(w.colorSpace),Ee=w.colorSpace===Dt||se===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=g(w)&&d(w.image)===!1;let ee=v(w.image,Ue,!1,r.maxTextureSize);ee=Ce(w,ee);const We=d(ee)||a,Be=n.convert(w.format,w.colorSpace);let be=n.convert(w.type),_e=A(w.internalFormat,Be,be,w.colorSpace,w.isVideoTexture);k(J,w,We);let fe;const Le=w.mipmaps,ke=a&&w.isVideoTexture!==!0&&_e!==Za,et=de.__version===void 0||Q===!0,Ne=x(w,ee,We);if(w.isDepthTexture)_e=s.DEPTH_COMPONENT,a?w.type===ln?_e=s.DEPTH_COMPONENT32F:w.type===on?_e=s.DEPTH_COMPONENT24:w.type===Tn?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:w.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===An&&_e===s.DEPTH_COMPONENT&&w.type!==Jr&&w.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=on,be=n.convert(w.type)),w.format===Qn&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,w.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Tn,be=n.convert(w.type))),et&&(ke?t.texStorage2D(s.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,_e,ee.width,ee.height,0,Be,be,null));else if(w.isDataTexture)if(Le.length>0&&We){ke&&et&&t.texStorage2D(s.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let ie=0,I=Le.length;ie<I;ie++)fe=Le[ie],ke?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,Be,be,fe.data):t.texImage2D(s.TEXTURE_2D,ie,_e,fe.width,fe.height,0,Be,be,fe.data);w.generateMipmaps=!1}else ke?(et&&t.texStorage2D(s.TEXTURE_2D,Ne,_e,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,Be,be,ee.data)):t.texImage2D(s.TEXTURE_2D,0,_e,ee.width,ee.height,0,Be,be,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,_e,Le[0].width,Le[0].height,ee.depth);for(let ie=0,I=Le.length;ie<I;ie++)fe=Le[ie],w.format!==zt?Be!==null?ke?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ee.depth,Be,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,_e,fe.width,fe.height,ee.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ee.depth,Be,be,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,_e,fe.width,fe.height,ee.depth,0,Be,be,fe.data)}else{ke&&et&&t.texStorage2D(s.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let ie=0,I=Le.length;ie<I;ie++)fe=Le[ie],w.format!==zt?Be!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,Be,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,Be,be,fe.data):t.texImage2D(s.TEXTURE_2D,ie,_e,fe.width,fe.height,0,Be,be,fe.data)}else if(w.isDataArrayTexture)ke?(et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Be,be,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,Be,be,ee.data);else if(w.isData3DTexture)ke?(et&&t.texStorage3D(s.TEXTURE_3D,Ne,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Be,be,ee.data)):t.texImage3D(s.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,Be,be,ee.data);else if(w.isFramebufferTexture){if(et)if(ke)t.texStorage2D(s.TEXTURE_2D,Ne,_e,ee.width,ee.height);else{let ie=ee.width,I=ee.height;for(let oe=0;oe<Ne;oe++)t.texImage2D(s.TEXTURE_2D,oe,_e,ie,I,0,Be,be,null),ie>>=1,I>>=1}}else if(Le.length>0&&We){ke&&et&&t.texStorage2D(s.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let ie=0,I=Le.length;ie<I;ie++)fe=Le[ie],ke?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be,be,fe):t.texImage2D(s.TEXTURE_2D,ie,_e,Be,be,fe);w.generateMipmaps=!1}else ke?(et&&t.texStorage2D(s.TEXTURE_2D,Ne,_e,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,be,ee)):t.texImage2D(s.TEXTURE_2D,0,_e,Be,be,ee);E(w,We)&&S(J),de.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ae(L,w,V){if(w.image.length!==6)return;const J=$(L,w),Q=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);const te=i.get(Q);if(Q.version!==te.__version||J===!0){t.activeTexture(s.TEXTURE0+V);const de=Xe.getPrimaries(Xe.workingColorSpace),se=w.colorSpace===Dt?null:Xe.getPrimaries(w.colorSpace),he=w.colorSpace===Dt||de===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,Ue=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let ie=0;ie<6;ie++)!Ee&&!Ue?ee[ie]=v(w.image[ie],!1,!0,r.maxCubemapSize):ee[ie]=Ue?w.image[ie].image:w.image[ie],ee[ie]=Ce(w,ee[ie]);const We=ee[0],Be=d(We)||a,be=n.convert(w.format,w.colorSpace),_e=n.convert(w.type),fe=A(w.internalFormat,be,_e,w.colorSpace),Le=a&&w.isVideoTexture!==!0,ke=te.__version===void 0||J===!0;let et=x(w,We,Be);k(s.TEXTURE_CUBE_MAP,w,Be);let Ne;if(Ee){Le&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,et,fe,We.width,We.height);for(let ie=0;ie<6;ie++){Ne=ee[ie].mipmaps;for(let I=0;I<Ne.length;I++){const oe=Ne[I];w.format!==zt?be!==null?Le?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,oe.width,oe.height,be,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,oe.width,oe.height,be,_e,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,fe,oe.width,oe.height,0,be,_e,oe.data)}}}else{Ne=w.mipmaps,Le&&ke&&(Ne.length>0&&et++,t.texStorage2D(s.TEXTURE_CUBE_MAP,et,fe,ee[0].width,ee[0].height));for(let ie=0;ie<6;ie++)if(Ue){Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ee[ie].width,ee[ie].height,be,_e,ee[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,ee[ie].width,ee[ie].height,0,be,_e,ee[ie].data);for(let I=0;I<Ne.length;I++){const le=Ne[I].image[ie].image;Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,le.width,le.height,be,_e,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,fe,le.width,le.height,0,be,_e,le.data)}}else{Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,_e,ee[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,be,_e,ee[ie]);for(let I=0;I<Ne.length;I++){const oe=Ne[I];Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,be,_e,oe.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,fe,be,_e,oe.image[ie])}}}E(w,Be)&&S(s.TEXTURE_CUBE_MAP),te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ue(L,w,V,J,Q,te){const de=n.convert(V.format,V.colorSpace),se=n.convert(V.type),he=A(V.internalFormat,de,se,V.colorSpace);if(!i.get(w).__hasExternalTextures){const Ue=Math.max(1,w.width>>te),ee=Math.max(1,w.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,he,Ue,ee,w.depth,0,de,se,null):t.texImage2D(Q,te,he,Ue,ee,0,de,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),pe(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,i.get(V).__webglTexture,0,xe(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,i.get(V).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let J=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||pe(w)){const Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ln?J=s.DEPTH_COMPONENT32F:Q.type===on&&(J=s.DEPTH_COMPONENT24));const te=xe(w);pe(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,J,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,J,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const J=xe(w);V&&pe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,w.width,w.height):pe(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const J=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<J.length;Q++){const te=J[Q],de=n.convert(te.format,te.colorSpace),se=n.convert(te.type),he=A(te.internalFormat,de,se,te.colorSpace),Ee=xe(w);V&&pe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,w.width,w.height):pe(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,Q=xe(w);if(w.depthTexture.format===An)pe(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(w.depthTexture.format===Qn)pe(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ye(L){const w=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,L)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=s.createRenderbuffer(),ge(w.__webglDepthbuffer[J],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ge(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,w,V){const J=i.get(L);w!==void 0&&ue(J.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ye(L)}function H(L){const w=L.texture,V=i.get(L),J=i.get(w);L.addEventListener("dispose",b),L.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=w.version,l.memory.textures++);const Q=L.isWebGLCubeRenderTarget===!0,te=L.isWebGLMultipleRenderTargets===!0,de=d(L)||a;if(Q){V.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[se]=[];for(let he=0;he<w.mipmaps.length;he++)V.__webglFramebuffer[se][he]=s.createFramebuffer()}else V.__webglFramebuffer[se]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)V.__webglFramebuffer[se]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(te)if(r.drawBuffers){const se=L.texture;for(let he=0,Ee=se.length;he<Ee;he++){const Ue=i.get(se[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&pe(L)===!1){const se=te?w:[w];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Ee=se[he];V.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Ue=n.convert(Ee.format,Ee.colorSpace),ee=n.convert(Ee.type),We=A(Ee.internalFormat,Ue,ee,Ee.colorSpace,L.isXRRenderTarget===!0),Be=xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,We,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,V.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),k(s.TEXTURE_CUBE_MAP,w,de);for(let se=0;se<6;se++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)ue(V.__webglFramebuffer[se][he],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else ue(V.__webglFramebuffer[se],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);E(w,de)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const se=L.texture;for(let he=0,Ee=se.length;he<Ee;he++){const Ue=se[he],ee=i.get(Ue);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),k(s.TEXTURE_2D,Ue,de),ue(V.__webglFramebuffer,L,Ue,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),E(Ue,de)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?se=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,J.__webglTexture),k(se,w,de),a&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)ue(V.__webglFramebuffer[he],L,w,s.COLOR_ATTACHMENT0,se,he);else ue(V.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,se,0);E(w,de)&&S(se),t.unbindTexture()}L.depthBuffer&&ye(L)}function ot(L){const w=d(L)||a,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let J=0,Q=V.length;J<Q;J++){const te=V[J];if(E(te,w)){const de=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,se=i.get(te).__webglTexture;t.bindTexture(de,se),S(de),t.unbindTexture()}}}function ve(L){if(a&&L.samples>0&&pe(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,J=L.height;let Q=s.COLOR_BUFFER_BIT;const te=[],de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=i.get(L),he=L.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&te.push(de);const Ue=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ue===!1&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),he){const ee=i.get(w[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,V,J,0,0,V,J,Q,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);const Ue=i.get(w[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function xe(L){return Math.min(r.maxSamples,L.samples)}function pe(L){const w=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(L){const w=l.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ce(L,w){const V=L.colorSpace,J=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Yr||V!==en&&V!==Dt&&(Xe.getTransfer(V)===je?a===!1?e.has("EXT_sRGB")===!0&&J===zt?(L.format=Yr,L.minFilter=Pt,L.generateMipmaps=!1):w=to.sRGBToLinear(w):(J!==zt||Q!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pe}function Pd(s,e,t){const i=t.isWebGL2;function r(n,l=Dt){let a;const c=Xe.getTransfer(l);if(n===hn)return s.UNSIGNED_BYTE;if(n===qa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return s.BYTE;if(n===hl)return s.SHORT;if(n===Jr)return s.UNSIGNED_SHORT;if(n===Xa)return s.INT;if(n===on)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===mi)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===fl)return s.ALPHA;if(n===zt)return s.RGBA;if(n===dl)return s.LUMINANCE;if(n===pl)return s.LUMINANCE_ALPHA;if(n===An)return s.DEPTH_COMPONENT;if(n===Qn)return s.DEPTH_STENCIL;if(n===Yr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===ml)return s.RED;if(n===Ka)return s.RED_INTEGER;if(n===gl)return s.RG;if(n===$a)return s.RG_INTEGER;if(n===ja)return s.RGBA_INTEGER;if(n===cr||n===ur||n===hr||n===fr)if(c===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xs||n===_s||n===Ss||n===ys)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===xs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_s)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ss)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ys)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ms||n===Es)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ms)return c===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Es)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ts||n===As||n===bs||n===ws||n===Cs||n===Rs||n===Ps||n===Ls||n===Ds||n===Us||n===Is||n===Ns||n===Fs||n===Os)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ts)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===As)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bs)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ws)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cs)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rs)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ps)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ls)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ds)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Us)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Is)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ns)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fs)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Os)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===Bs||n===zs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===dr)return c===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===Hs||n===Gs||n===Vs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===dr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Hs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tn?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}return{convert:r}}class Ld extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,l=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,i),g=this._getHandJoint(h,v);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const u=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],f=u.position.distanceTo(p.position),o=.02,m=.005;h.inputState.pinching&&f>o+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=o-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=n!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ud extends ti{constructor(e,t){super();const i=this;let r=null,n=1,l=null,a="local-floor",c=1,h=null,u=null,p=null,f=null,o=null,m=null;const v=t.getContextAttributes();let d=null,g=null;const E=[],S=[],A=new Ve;let x=null;const M=new Ot;M.layers.enable(1),M.viewport=new ht;const T=new Ot;T.layers.enable(2),T.viewport=new ht;const b=[M,T],_=new Ld;_.layers.enable(1),_.layers.enable(2);let y=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=E[k];return $===void 0&&($=new Br,E[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=E[k];return $===void 0&&($=new Br,E[k]=$),$.getGripSpace()},this.getHand=function(k){let $=E[k];return $===void 0&&($=new Br,E[k]=$),$.getHandSpace()};function P(k){const $=S.indexOf(k.inputSource);if($===-1)return;const ne=E[$];ne!==void 0&&(ne.update(k.inputSource,k.frame,h||l),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function N(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",D);for(let k=0;k<E.length;k++){const $=S[k];$!==null&&(S[k]=null,E[k].disconnect($))}y=null,R=null,e.setRenderTarget(d),o=null,f=null,p=null,r=null,g=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){n=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(k){h=k},this.getBaseLayer=function(){return f!==null?f:o},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",N),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:n};o=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:o}),e.setPixelRatio(1),e.setSize(o.framebufferWidth,o.framebufferHeight,!1),g=new wn(o.framebufferWidth,o.framebufferHeight,{format:zt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,ne=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?Qn:An,ne=v.stencil?Tn:on);const ue={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:n};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new wn(f.textureWidth,f.textureHeight,{format:zt,type:hn,depthTexture:new po(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ge=e.properties.get(g);ge.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),h=null,l=await r.requestReferenceSpace(a),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(k){for(let $=0;$<k.removed.length;$++){const ne=k.removed[$],ae=S.indexOf(ne);ae>=0&&(S[ae]=null,E[ae].disconnect(ne))}for(let $=0;$<k.added.length;$++){const ne=k.added[$];let ae=S.indexOf(ne);if(ae===-1){for(let ge=0;ge<E.length;ge++)if(ge>=S.length){S.push(ne),ae=ge;break}else if(S[ge]===null){S[ge]=ne,ae=ge;break}if(ae===-1)break}const ue=E[ae];ue&&ue.connect(ne)}}const U=new z,F=new z;function O(k,$,ne){U.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);const ae=U.distanceTo(F),ue=$.projectionMatrix.elements,ge=ne.projectionMatrix.elements,we=ue[14]/(ue[10]-1),ye=ue[14]/(ue[10]+1),ze=(ue[9]+1)/ue[5],H=(ue[9]-1)/ue[5],ot=(ue[8]-1)/ue[0],ve=(ge[8]+1)/ge[0],xe=we*ot,pe=we*ve,qe=ae/(-ot+ve),Ce=qe*-ot;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ce),k.translateZ(qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const L=we+qe,w=ye+qe,V=xe-Ce,J=pe+(ae-Ce),Q=ze*ye/w*L,te=H*ye/w*L;k.projectionMatrix.makePerspective(V,J,Q,te,L,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function G(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.near=T.near=M.near=k.near,_.far=T.far=M.far=k.far,(y!==_.near||R!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,R=_.far);const $=k.parent,ne=_.cameras;G(_,$);for(let ae=0;ae<ne.length;ae++)G(ne[ae],$);ne.length===2?O(_,M,T):_.projectionMatrix.copy(M.projectionMatrix),Y(k,_,$)};function Y(k,$,ne){ne===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(ne.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Kr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&o===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),o!==null&&o.fixedFoveation!==void 0&&(o.fixedFoveation=k)};let K=null;function Z(k,$){if(u=$.getViewerPose(h||l),m=$,u!==null){const ne=u.views;o!==null&&(e.setRenderTargetFramebuffer(g,o.framebuffer),e.setRenderTarget(g));let ae=!1;ne.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let ue=0;ue<ne.length;ue++){const ge=ne[ue];let we=null;if(o!==null)we=o.getViewport(ge);else{const ze=p.getViewSubImage(f,ge);we=ze.viewport,ue===0&&(e.setRenderTargetTextures(g,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(g))}let ye=b[ue];ye===void 0&&(ye=new Ot,ye.layers.enable(ue),ye.viewport=new ht,b[ue]=ye),ye.matrix.fromArray(ge.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ge.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(we.x,we.y,we.width,we.height),ue===0&&(_.matrix.copy(ye.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(ye)}}for(let ne=0;ne<E.length;ne++){const ae=S[ne],ue=E[ne];ae!==null&&ue!==void 0&&ue.update(ae,$,h||l)}K&&K(k,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}const j=new fo;j.setAnimationLoop(Z),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Id(s,e){function t(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function i(d,g){g.color.getRGB(d.fogColor.value,co(s)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function r(d,g,E,S,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?n(d,g):g.isMeshToonMaterial?(n(d,g),p(d,g)):g.isMeshPhongMaterial?(n(d,g),u(d,g)):g.isMeshStandardMaterial?(n(d,g),f(d,g),g.isMeshPhysicalMaterial&&o(d,g,A)):g.isMeshMatcapMaterial?(n(d,g),m(d,g)):g.isMeshDepthMaterial?n(d,g):g.isMeshDistanceMaterial?(n(d,g),v(d,g)):g.isMeshNormalMaterial?n(d,g):g.isLineBasicMaterial?(l(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?c(d,g,E,S):g.isSpriteMaterial?h(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,t(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===Et&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,t(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===Et&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,t(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,t(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const E=e.get(g).envMap;if(E&&(d.envMap.value=E,d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap){d.lightMap.value=g.lightMap;const S=s._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=g.lightMapIntensity*S,t(g.lightMap,d.lightMapTransform)}g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,d.aoMapTransform))}function l(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function c(d,g,E,S){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*E,d.scale.value=S*.5,g.map&&(d.map.value=g.map,t(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function h(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function u(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function p(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function f(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,d.roughnessMapTransform)),e.get(g).envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function o(d,g,E){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Et&&d.clearcoatNormalScale.value.negate())),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function v(d,g){const E=e.get(g).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nd(s,e,t,i){let r={},n={},l=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,S){const A=S.program;i.uniformBlockBinding(E,A)}function h(E,S){let A=r[E.id];A===void 0&&(m(E),A=u(E),r[E.id]=A,E.addEventListener("dispose",d));const x=S.program;i.updateUBOMapping(E,x);const M=e.render.frame;n[E.id]!==M&&(f(E),n[E.id]=M)}function u(E){const S=p();E.__bindingPointIndex=S;const A=s.createBuffer(),x=E.__size,M=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,x,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,A),A}function p(){for(let E=0;E<a;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],A=E.uniforms,x=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let M=0,T=A.length;M<T;M++){const b=Array.isArray(A[M])?A[M]:[A[M]];for(let _=0,y=b.length;_<y;_++){const R=b[_];if(o(R,M,_,x)===!0){const P=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let U=0;U<N.length;U++){const F=N[U],O=v(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,P+D,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function o(E,S,A,x){const M=E.value,T=S+"_"+A;if(x[T]===void 0)return typeof M=="number"||typeof M=="boolean"?x[T]=M:x[T]=M.clone(),!0;{const b=x[T];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return x[T]=M,!0}else if(b.equals(M)===!1)return b.copy(M),!0}return!1}function m(E){const S=E.uniforms;let A=0;const x=16;for(let T=0,b=S.length;T<b;T++){const _=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,R=_.length;y<R;y++){const P=_[y],N=Array.isArray(P.value)?P.value:[P.value];for(let D=0,U=N.length;D<U;D++){const F=N[D],O=v(F),G=A%x;G!==0&&x-G<O.boundary&&(A+=x-G),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=O.storage}}}const M=A%x;return M>0&&(A+=x-M),E.__size=A,E.__cache={},this}function v(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){const S=E.target;S.removeEventListener("dispose",d);const A=l.indexOf(S.__bindingPointIndex);l.splice(A,1),s.deleteBuffer(r[S.id]),delete r[S.id],delete n[S.id]}function g(){for(const E in r)s.deleteBuffer(r[E]);l=[],r={},n={}}return{bind:c,update:h,dispose:g}}class So{constructor(e={}){const{canvas:t=Pl(),context:i=null,depth:r=!0,stencil:n=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=l;const o=new Uint32Array(4),m=new Int32Array(4);let v=null,d=null;const g=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=un,this.toneMappingExposure=1;const S=this;let A=!1,x=0,M=0,T=null,b=-1,_=null;const y=new ht,R=new ht;let P=null;const N=new He(0);let D=0,U=t.width,F=t.height,O=1,G=null,Y=null;const K=new ht(0,0,U,F),Z=new ht(0,0,U,F);let j=!1;const k=new es;let $=!1,ne=!1,ae=null;const ue=new Qe,ge=new Ve,we=new z,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?O:1}let H=i;function ot(C,B){for(let X=0;X<C.length;X++){const q=C[X],W=t.getContext(q,B);if(W!==null)return W}return null}try{const C={alpha:!0,depth:r,stencil:n,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",oe,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),H=ot(B,C),H===null)throw ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,xe,pe,qe,Ce,L,w,V,J,Q,te,de,se,he,Ee,Ue,ee,We,Be,be,_e,fe,Le,ke;function et(){ve=new Wh(H),xe=new Bh(H,ve,e),ve.init(xe),fe=new Pd(H,ve,xe),pe=new Cd(H,ve,xe),qe=new Yh(H),Ce=new pd,L=new Rd(H,ve,pe,Ce,xe,fe,qe),w=new Hh(S),V=new kh(S),J=new tc(H,xe),Le=new Fh(H,ve,J,xe),Q=new Xh(H,J,qe,Le),te=new Zh(H,Q,J,qe),Be=new jh(H,xe,L),Ue=new zh(Ce),de=new dd(S,w,V,ve,xe,Le,Ue),se=new Id(S,Ce),he=new gd,Ee=new Md(ve,xe),We=new Nh(S,w,V,pe,te,f,c),ee=new wd(S,te,xe),ke=new Nd(H,qe,xe,pe),be=new Oh(H,ve,qe,xe),_e=new qh(H,ve,qe,xe),qe.programs=de.programs,S.capabilities=xe,S.extensions=ve,S.properties=Ce,S.renderLists=he,S.shadowMap=ee,S.state=pe,S.info=qe}et();const Ne=new Ud(S,H);this.xr=Ne,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(U,F,!1))},this.getSize=function(C){return C.set(U,F)},this.setSize=function(C,B,X=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,F=B,t.width=Math.floor(C*O),t.height=Math.floor(B*O),X===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(U*O,F*O).floor()},this.setDrawingBufferSize=function(C,B,X){U=C,F=B,O=X,t.width=Math.floor(C*X),t.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,B,X,q){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,B,X,q),pe.viewport(y.copy(K).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,B,X,q){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,B,X,q),pe.scissor(R.copy(Z).multiplyScalar(O).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){pe.setScissorTest(j=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,B=!0,X=!0){let q=0;if(C){let W=!1;if(T!==null){const ce=T.texture.format;W=ce===ja||ce===$a||ce===Ka}if(W){const ce=T.texture.type,me=ce===hn||ce===on||ce===Jr||ce===Tn||ce===qa||ce===Ya,Me=We.getClearColor(),Ae=We.getClearAlpha(),Ie=Me.r,Re=Me.g,Pe=Me.b;me?(o[0]=Ie,o[1]=Re,o[2]=Pe,o[3]=Ae,H.clearBufferuiv(H.COLOR,0,o)):(m[0]=Ie,m[1]=Re,m[2]=Pe,m[3]=Ae,H.clearBufferiv(H.COLOR,0,m))}else q|=H.COLOR_BUFFER_BIT}B&&(q|=H.DEPTH_BUFFER_BIT),X&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),Ee.dispose(),Ce.dispose(),w.dispose(),V.dispose(),te.dispose(),Le.dispose(),ke.dispose(),de.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",xt),Ne.removeEventListener("sessionend",$e),ae&&(ae.dispose(),ae=null),_t.stop()};function ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=qe.autoReset,B=ee.enabled,X=ee.autoUpdate,q=ee.needsUpdate,W=ee.type;et(),qe.autoReset=C,ee.enabled=B,ee.autoUpdate=X,ee.needsUpdate=q,ee.type=W}function oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const B=C.target;B.removeEventListener("dispose",le),Te(B)}function Te(C){Se(C),Ce.remove(C)}function Se(C){const B=Ce.get(C).programs;B!==void 0&&(B.forEach(function(X){de.releaseProgram(X)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,q,W,ce){B===null&&(B=ye);const me=W.isMesh&&W.matrixWorld.determinant()<0,Me=Ao(C,B,X,q,W);pe.setMaterial(q,me);let Ae=X.index,Ie=1;if(q.wireframe===!0){if(Ae=Q.getWireframeAttribute(X),Ae===void 0)return;Ie=2}const Re=X.drawRange,Pe=X.attributes.position;let nt=Re.start*Ie,Tt=(Re.start+Re.count)*Ie;ce!==null&&(nt=Math.max(nt,ce.start*Ie),Tt=Math.min(Tt,(ce.start+ce.count)*Ie)),Ae!==null?(nt=Math.max(nt,0),Tt=Math.min(Tt,Ae.count)):Pe!=null&&(nt=Math.max(nt,0),Tt=Math.min(Tt,Pe.count));const ct=Tt-nt;if(ct<0||ct===1/0)return;Le.setup(W,q,Me,X,Ae);let Xt,Je=be;if(Ae!==null&&(Xt=J.get(Ae),Je=_e,Je.setIndex(Xt)),W.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*ze()),Je.setMode(H.LINES)):Je.setMode(H.TRIANGLES);else if(W.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),pe.setLineWidth(Fe*ze()),W.isLineSegments?Je.setMode(H.LINES):W.isLineLoop?Je.setMode(H.LINE_LOOP):Je.setMode(H.LINE_STRIP)}else W.isPoints?Je.setMode(H.POINTS):W.isSprite&&Je.setMode(H.TRIANGLES);if(W.isBatchedMesh)Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Je.renderInstances(nt,ct,W.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,rr=Math.min(X.instanceCount,Fe);Je.renderInstances(nt,ct,rr)}else Je.render(nt,ct)};function Ye(C,B,X){C.transparent===!0&&C.side===Lt&&C.forceSinglePass===!1?(C.side=Et,C.needsUpdate=!0,Mi(C,B,X),C.side=fn,C.needsUpdate=!0,Mi(C,B,X),C.side=Lt):Mi(C,B,X)}this.compile=function(C,B,X=null){X===null&&(X=C),d=Ee.get(X),d.init(),E.push(d),X.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(S._useLegacyLights);const q=new Set;return C.traverse(function(W){const ce=W.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const Me=ce[me];Ye(Me,X,W),q.add(Me)}else Ye(ce,X,W),q.add(ce)}),E.pop(),d=null,q},this.compileAsync=function(C,B,X=null){const q=this.compile(C,B,X);return new Promise(W=>{function ce(){if(q.forEach(function(me){Ce.get(me).currentProgram.isReady()&&q.delete(me)}),q.size===0){W(C);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ke=null;function lt(C){Ke&&Ke(C)}function xt(){_t.stop()}function $e(){_t.start()}const _t=new fo;_t.setAnimationLoop(lt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(C){Ke=C,Ne.setAnimationLoop(C),C===null?_t.stop():_t.start()},Ne.addEventListener("sessionstart",xt),Ne.addEventListener("sessionend",$e),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(B),B=Ne.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,B,T),d=Ee.get(C,E.length),d.init(),E.push(d),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,ne),v=he.get(C,g.length),v.init(),g.push(v),Vt(C,B,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(G,Y),this.info.render.frame++,$===!0&&Ue.beginShadows();const X=d.state.shadowsArray;if(ee.render(X,C,B),$===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(v,C),d.setupLights(S._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let W=0,ce=q.length;W<ce;W++){const me=q[W];ss(v,C,me,me.viewport)}}else ss(v,C,B);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(S,C,B),Le.resetDefaultState(),b=-1,_=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Vt(C,B,X,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){q&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const me=te.update(C),Me=C.material;Me.visible&&v.push(C,me,Me,X,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||k.intersectsObject(C))){const me=te.update(C),Me=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),we.copy(me.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){const Ae=me.groups;for(let Ie=0,Re=Ae.length;Ie<Re;Ie++){const Pe=Ae[Ie],nt=Me[Pe.materialIndex];nt&&nt.visible&&v.push(C,me,nt,X,we.z,Pe)}}else Me.visible&&v.push(C,me,Me,X,we.z,null)}}const ce=C.children;for(let me=0,Me=ce.length;me<Me;me++)Vt(ce[me],B,X,q)}function ss(C,B,X,q){const W=C.opaque,ce=C.transmissive,me=C.transparent;d.setupLightsView(X),$===!0&&Ue.setGlobalState(S.clippingPlanes,X),ce.length>0&&To(W,ce,B,X),q&&pe.viewport(y.copy(q)),W.length>0&&yi(W,B,X),ce.length>0&&yi(ce,B,X),me.length>0&&yi(me,B,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function To(C,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ce=xe.isWebGL2;ae===null&&(ae=new wn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?mi:hn,minFilter:pi,samples:ce?4:0})),S.getDrawingBufferSize(ge),ce?ae.setSize(ge.x,ge.y):ae.setSize($r(ge.x),$r(ge.y));const me=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(N),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();const Me=S.toneMapping;S.toneMapping=un,yi(C,X,q),L.updateMultisampleRenderTarget(ae),L.updateRenderTargetMipmap(ae);let Ae=!1;for(let Ie=0,Re=B.length;Ie<Re;Ie++){const Pe=B[Ie],nt=Pe.object,Tt=Pe.geometry,ct=Pe.material,Xt=Pe.group;if(ct.side===Lt&&nt.layers.test(q.layers)){const Je=ct.side;ct.side=Et,ct.needsUpdate=!0,as(nt,X,q,Tt,ct,Xt),ct.side=Je,ct.needsUpdate=!0,Ae=!0}}Ae===!0&&(L.updateMultisampleRenderTarget(ae),L.updateRenderTargetMipmap(ae)),S.setRenderTarget(me),S.setClearColor(N,D),S.toneMapping=Me}function yi(C,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ce=C.length;W<ce;W++){const me=C[W],Me=me.object,Ae=me.geometry,Ie=q===null?me.material:q,Re=me.group;Me.layers.test(X.layers)&&as(Me,B,X,Ae,Ie,Re)}}function as(C,B,X,q,W,ce){C.onBeforeRender(S,B,X,q,W,ce),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(S,B,X,q,C,ce),W.transparent===!0&&W.side===Lt&&W.forceSinglePass===!1?(W.side=Et,W.needsUpdate=!0,S.renderBufferDirect(X,B,q,W,C,ce),W.side=fn,W.needsUpdate=!0,S.renderBufferDirect(X,B,q,W,C,ce),W.side=Lt):S.renderBufferDirect(X,B,q,W,C,ce),C.onAfterRender(S,B,X,q,W,ce)}function Mi(C,B,X){B.isScene!==!0&&(B=ye);const q=Ce.get(C),W=d.state.lights,ce=d.state.shadowsArray,me=W.state.version,Me=de.getParameters(C,W.state,ce,B,X),Ae=de.getProgramCacheKey(Me);let Ie=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?V:w).get(C.envMap||q.environment),Ie===void 0&&(C.addEventListener("dispose",le),Ie=new Map,q.programs=Ie);let Re=Ie.get(Ae);if(Re!==void 0){if(q.currentProgram===Re&&q.lightsStateVersion===me)return ls(C,Me),Re}else Me.uniforms=de.getUniforms(C),C.onBuild(X,Me,S),C.onBeforeCompile(Me,S),Re=de.acquireProgram(Me,Ae),Ie.set(Ae,Re),q.uniforms=Me.uniforms;const Pe=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),ls(C,Me),q.needsLights=wo(C),q.lightsStateVersion=me,q.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Re,q.uniformsList=null,Re}function os(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Ki.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function ls(C,B){const X=Ce.get(C);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ao(C,B,X,q,W){B.isScene!==!0&&(B=ye),L.resetTextureUnits();const ce=B.fog,me=q.isMeshStandardMaterial?B.environment:null,Me=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:en,Ae=(q.isMeshStandardMaterial?V:w).get(q.envMap||me),Ie=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let ct=un;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ct=S.toneMapping);const Xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Je=Xt!==void 0?Xt.length:0,Fe=Ce.get(q),rr=d.state.lights;if($===!0&&(ne===!0||C!==_)){const Ct=C===_&&q.id===b;Ue.setState(q,C,Ct)}let tt=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rr.state.version||Fe.outputColorSpace!==Me||W.isBatchedMesh&&Fe.batching===!1||!W.isBatchedMesh&&Fe.batching===!0||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||W.isInstancedMesh&&Fe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Fe.instancingColor===!1&&W.instanceColor!==null||Fe.envMap!==Ae||q.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==Re||Fe.morphTargets!==Pe||Fe.morphNormals!==nt||Fe.morphColors!==Tt||Fe.toneMapping!==ct||xe.isWebGL2===!0&&Fe.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,Fe.__version=q.version);let pn=Fe.currentProgram;tt===!0&&(pn=Mi(q,B,W));let cs=!1,ri=!1,sr=!1;const pt=pn.getUniforms(),mn=Fe.uniforms;if(pe.useProgram(pn.program)&&(cs=!0,ri=!0,sr=!0),q.id!==b&&(b=q.id,ri=!0),cs||_!==C){pt.setValue(H,"projectionMatrix",C.projectionMatrix),pt.setValue(H,"viewMatrix",C.matrixWorldInverse);const Ct=pt.map.cameraPosition;Ct!==void 0&&Ct.setValue(H,we.setFromMatrixPosition(C.matrixWorld)),xe.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,ri=!0,sr=!0)}if(W.isSkinnedMesh){pt.setOptional(H,W,"bindMatrix"),pt.setOptional(H,W,"bindMatrixInverse");const Ct=W.skeleton;Ct&&(xe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(H,"boneTexture",Ct.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(pt.setOptional(H,W,"batchingTexture"),pt.setValue(H,"batchingTexture",W._matricesTexture,L));const ar=X.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&xe.isWebGL2===!0)&&Be.update(W,X,pn),(ri||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,pt.setValue(H,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=Ae,mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ri&&(pt.setValue(H,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&bo(mn,sr),ce&&q.fog===!0&&se.refreshFogUniforms(mn,ce),se.refreshMaterialUniforms(mn,q,O,F,ae),Ki.upload(H,os(Fe),mn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ki.upload(H,os(Fe),mn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(H,"center",W.center),pt.setValue(H,"modelViewMatrix",W.modelViewMatrix),pt.setValue(H,"normalMatrix",W.normalMatrix),pt.setValue(H,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ct=q.uniformsGroups;for(let or=0,Co=Ct.length;or<Co;or++)if(xe.isWebGL2){const us=Ct[or];ke.update(us,pn),ke.bind(us,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function bo(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function wo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,B,X){Ce.get(C.texture).__webglTexture=B,Ce.get(C.depthTexture).__webglTexture=X;const q=Ce.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const X=Ce.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,X=0){T=C,x=B,M=X;let q=!0,W=null,ce=!1,me=!1;if(C){const Ae=Ce.get(C);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):Ae.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ae.__hasExternalTextures&&L.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Re=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?W=Re[B][X]:W=Re[B],ce=!0):xe.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?W=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[X]:W=Re,y.copy(C.viewport),R.copy(C.scissor),P=C.scissorTest}else y.copy(K).multiplyScalar(O).floor(),R.copy(Z).multiplyScalar(O).floor(),P=j;if(pe.bindFramebuffer(H.FRAMEBUFFER,W)&&xe.drawBuffers&&q&&pe.drawBuffers(C,W),pe.viewport(y),pe.scissor(R),pe.setScissorTest(P),ce){const Ae=Ce.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,X)}else if(me){const Ae=Ce.get(C.texture),Ie=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Ie)}b=-1},this.readRenderTargetPixels=function(C,B,X,q,W,ce,me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){pe.bindFramebuffer(H.FRAMEBUFFER,Me);try{const Ae=C.texture,Ie=Ae.format,Re=Ae.type;if(Ie!==zt&&fe.convert(Ie)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===mi&&(ve.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Re!==hn&&fe.convert(Re)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===ln&&(xe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&X>=0&&X<=C.height-W&&H.readPixels(B,X,q,W,fe.convert(Ie),fe.convert(Re),ce)}finally{const Ae=T!==null?Ce.get(T).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,B,X=0){const q=Math.pow(2,-X),W=Math.floor(B.image.width*q),ce=Math.floor(B.image.height*q);L.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,C.x,C.y,W,ce),pe.unbindTexture()},this.copyTextureToTexture=function(C,B,X,q=0){const W=B.image.width,ce=B.image.height,me=fe.convert(X.format),Me=fe.convert(X.type);L.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,W,ce,me,Me,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,me,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,me,Me,B.image),q===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,B,X,q,W=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,me=C.max.y-C.min.y+1,Me=C.max.z-C.min.z+1,Ae=fe.convert(q.format),Ie=fe.convert(q.type);let Re;if(q.isData3DTexture)L.setTexture3D(q,0),Re=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)L.setTexture2DArray(q,0),Re=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Pe=H.getParameter(H.UNPACK_ROW_LENGTH),nt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Tt=H.getParameter(H.UNPACK_SKIP_PIXELS),ct=H.getParameter(H.UNPACK_SKIP_ROWS),Xt=H.getParameter(H.UNPACK_SKIP_IMAGES),Je=X.isCompressedTexture?X.mipmaps[W]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Je.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Je.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Re,W,B.x,B.y,B.z,ce,me,Me,Ae,Ie,Je.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Re,W,B.x,B.y,B.z,ce,me,Me,Ae,Je.data)):H.texSubImage3D(Re,W,B.x,B.y,B.z,ce,me,Me,Ae,Ie,Je),H.pixelStorei(H.UNPACK_ROW_LENGTH,Pe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,nt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ct),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt),W===0&&q.generateMipmaps&&H.generateMipmap(Re),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){x=0,M=0,T=null,pe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qr?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===tr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?bn:Ja}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bn?rt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fd extends So{}Fd.prototype.isWebGL1Renderer=!0;class Od extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class La extends wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xn=new Qe,Da=new Qe,Xi=[],Ua=new dn,Bd=new Qe,ui=new vt,hi=new ni;class zd extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Bd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xn),Ua.copy(e.boundingBox).applyMatrix4(Xn),this.boundingBox.union(Ua)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xn),hi.copy(e.boundingSphere).applyMatrix4(Xn),this.boundingSphere.union(hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ui.geometry=this.geometry,ui.material=this.material,ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hi.copy(this.boundingSphere),hi.applyMatrix4(i),e.ray.intersectsSphere(hi)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,Xn),Da.multiplyMatrices(i,Xn),ui.matrixWorld=Da,ui.raycast(e,Xi);for(let l=0,a=Xi.length;l<a;l++){const c=Xi[l];c.instanceId=n,c.object=this,t.push(c)}Xi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class yo extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new z,Na=new z,Fa=new Qe,zr=new ro,qi=new ni;class Hd extends ft{constructor(e=new Wt,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)Ia.fromBufferAttribute(t,r-1),Na.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ia.distanceTo(Na);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qi.copy(i.boundingSphere),qi.applyMatrix4(r),qi.radius+=n,e.ray.intersectsSphere(qi)===!1)return;Fa.copy(r).invert(),zr.copy(e.ray).applyMatrix4(Fa);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=new z,u=new z,p=new z,f=new z,o=this.isLineSegments?2:1,m=i.index,d=i.attributes.position;if(m!==null){const g=Math.max(0,l.start),E=Math.min(m.count,l.start+l.count);for(let S=g,A=E-1;S<A;S+=o){const x=m.getX(S),M=m.getX(S+1);if(h.fromBufferAttribute(d,x),u.fromBufferAttribute(d,M),zr.distanceSqToSegment(h,u,f,p)>c)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:p.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,l.start),E=Math.min(d.count,l.start+l.count);for(let S=g,A=E-1;S<A;S+=o){if(h.fromBufferAttribute(d,S),u.fromBufferAttribute(d,S+1),zr.distanceSqToSegment(h,u,f,p)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:p.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,l=r.length;n<l;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}const Oa=new z,Ba=new z;class Gd extends Hd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)Oa.fromBufferAttribute(t,r),Ba.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Oa.distanceTo(Ba);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vd extends dt{constructor(e,t,i,r,n,l,a,c,h){super(e,t,i,r,n,l,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}const za={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class kd{constructor(e,t,i){const r=this;let n=!1,l=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,n===!1&&r.onStart!==void 0&&r.onStart(u,l,a),n=!0},this.itemEnd=function(u){l++,r.onProgress!==void 0&&r.onProgress(u,l,a),l===a&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return h.push(u,p),this},this.removeHandler=function(u){const p=h.indexOf(u);return p!==-1&&h.splice(p,2),this},this.getHandler=function(u){for(let p=0,f=h.length;p<f;p+=2){const o=h[p],m=h[p+1];if(o.global&&(o.lastIndex=0),o.test(u))return m}return null}}}const Wd=new kd;class is{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xd extends is{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,l=za.get(e);if(l!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(l),n.manager.itemEnd(e)},0),l;const a=gi("img");function c(){u(),za.add(e,this),t&&t(this),n.manager.itemEnd(e)}function h(p){u(),r&&r(p),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class qd extends is{constructor(e){super(e)}load(e,t,i,r){const n=new dt,l=new Xd(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Mo extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Hr=new Qe,Ha=new z,Ga=new z;class Yd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ga),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kd extends Yd{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $d extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Kd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jd extends Mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zd extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Yi=new dn;class Jd extends Gd{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),n=new Wt;n.setIndex(new wt(i,1)),n.setAttribute("position",new wt(r,3)),super(n,new yo({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Yi.setFromObject(this.object),Yi.isEmpty())return;const t=Yi.min,i=Yi.max,r=this.geometry.attributes.position,n=r.array;n[0]=i.x,n[1]=i.y,n[2]=i.z,n[3]=t.x,n[4]=i.y,n[5]=i.z,n[6]=t.x,n[7]=t.y,n[8]=i.z,n[9]=i.x,n[10]=t.y,n[11]=i.z,n[12]=i.x,n[13]=i.y,n[14]=t.z,n[15]=t.x,n[16]=i.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=i.x,n[22]=t.y,n[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zr);class Qd{constructor(){const e=window.innerWidth/window.innerHeight,t=600;this.cam=new ts(t*e/-2,t*e/2,t/2,t/-2,1,1e3),this.cam.position.z=100,this.shakeIntensity=0,this.shakeTimer=0}resize(e,t){const i=e/t,r=600;this.cam.left=-r*i/2,this.cam.right=r*i/2,this.cam.top=r/2,this.cam.bottom=-r/2,this.cam.updateProjectionMatrix()}follow(e,t){this.cam.position.x+=(e.x-this.cam.position.x)*.1,this.cam.position.y+=(e.y-this.cam.position.y)*.1,this.shakeTimer>0&&(this.shakeTimer-=t,this.cam.position.x+=(Math.random()-.5)*this.shakeIntensity,this.cam.position.y+=(Math.random()-.5)*this.shakeIntensity)}shake(e=5,t=.2){this.shakeIntensity=e,this.shakeTimer=t}}class ep{constructor(){this.scene=new Od,this.camera=new Qd,this.renderer=new So({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(1118481),dt.DEFAULT_MAG_FILTER=Ze,dt.DEFAULT_MIN_FILTER=Ze}async init(){document.getElementById("game-container").appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this));const e=new jd(16777215,.5);this.scene.add(e);const t=new $d(16777215,.8);t.position.set(0,10,5),this.scene.add(t)}createBox(e,t,i,r,n){const l=document.createElement("canvas");l.width=64,l.height=64;const a=l.getContext("2d");a.fillStyle="#"+n.toString(16).padStart(6,"0"),a.fillRect(0,0,64,64);for(let f=0;f<200;f++)a.fillStyle=Math.random()>.5?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.1)",a.fillRect(Math.random()*64,Math.random()*64,4,4);a.fillStyle="rgba(20, 40, 20, 0.6)",a.fillRect(0,0,64,8);for(let f=0;f<16;f++)Math.random()>.5&&a.fillRect(f*4,8,4,4);const c=new Vd(l);c.magFilter=Ze,c.minFilter=Ze,c.wrapS=Jn,c.wrapT=Jn,c.repeat.set(i/64,r/64);const h=new Gt(i,r),u=new Ht({map:c,side:Lt}),p=new vt(h,u);return p.position.set(e,-t,0),this.scene.add(p),p}onWindowResize(){this.camera.resize(window.innerWidth,window.innerHeight),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera.cam)}}var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Eo={exports:{}};/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(s,e){(function(i,r){s.exports=r()})(Gr,function(){return function(t){var i={};function r(n){if(i[n])return i[n].exports;var l=i[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}return r.m=t,r.c=i,r.d=function(n,l,a){r.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:a})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,l){if(l&1&&(n=r(n)),l&8||l&4&&typeof n=="object"&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),l&2&&typeof n!="string")for(var c in n)r.d(a,c,(function(h){return n[h]}).bind(null,c));return a},r.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(l,"a",l),l},r.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},r.p="",r(r.s=20)}([function(t,i){var r={};t.exports=r,function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(l,a){var c,h;typeof a=="boolean"?(c=2,h=a):(c=1,h=!0);for(var u=c;u<arguments.length;u++){var p=arguments[u];if(p)for(var f in p)h&&p[f]&&p[f].constructor===Object&&(!l[f]||l[f].constructor===Object)?(l[f]=l[f]||{},r.extend(l[f],h,p[f])):l[f]=p[f]}return l},r.clone=function(l,a){return r.extend({},a,l)},r.keys=function(l){if(Object.keys)return Object.keys(l);var a=[];for(var c in l)a.push(c);return a},r.values=function(l){var a=[];if(Object.keys){for(var c=Object.keys(l),h=0;h<c.length;h++)a.push(l[c[h]]);return a}for(var u in l)a.push(l[u]);return a},r.get=function(l,a,c,h){a=a.split(".").slice(c,h);for(var u=0;u<a.length;u+=1)l=l[a[u]];return l},r.set=function(l,a,c,h,u){var p=a.split(".").slice(h,u);return r.get(l,a,0,-1)[p[p.length-1]]=c,c},r.shuffle=function(l){for(var a=l.length-1;a>0;a--){var c=Math.floor(r.random()*(a+1)),h=l[a];l[a]=l[c],l[c]=h}return l},r.choose=function(l){return l[Math.floor(r.random()*l.length)]},r.isElement=function(l){return typeof HTMLElement<"u"?l instanceof HTMLElement:!!(l&&l.nodeType&&l.nodeName)},r.isArray=function(l){return Object.prototype.toString.call(l)==="[object Array]"},r.isFunction=function(l){return typeof l=="function"},r.isPlainObject=function(l){return typeof l=="object"&&l.constructor===Object},r.isString=function(l){return toString.call(l)==="[object String]"},r.clamp=function(l,a,c){return l<a?a:l>c?c:l},r.sign=function(l){return l<0?-1:1},r.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(l,a){return l=typeof l<"u"?l:0,a=typeof a<"u"?a:1,l+n()*(a-l)};var n=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(l){return l=l.replace("#",""),l.length==3&&(l=l.charAt(0)+l.charAt(0)+l.charAt(1)+l.charAt(1)+l.charAt(2)+l.charAt(2)),parseInt(l,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var l=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[l]||(r.warn(l),r._warnedOnce[l]=!0)},r.deprecated=function(l,a,c){l[a]=r.chain(function(){r.warnOnce("🔅 deprecated 🔅",c)},l[a])},r.nextId=function(){return r._nextId++},r.indexOf=function(l,a){if(l.indexOf)return l.indexOf(a);for(var c=0;c<l.length;c++)if(l[c]===a)return c;return-1},r.map=function(l,a){if(l.map)return l.map(a);for(var c=[],h=0;h<l.length;h+=1)c.push(a(l[h]));return c},r.topologicalSort=function(l){var a=[],c=[],h=[];for(var u in l)!c[u]&&!h[u]&&r._topologicalSort(u,c,h,l,a);return a},r._topologicalSort=function(l,a,c,h,u){var p=h[l]||[];c[l]=!0;for(var f=0;f<p.length;f+=1){var o=p[f];c[o]||a[o]||r._topologicalSort(o,a,c,h,u)}c[l]=!1,a[l]=!0,u.push(l)},r.chain=function(){for(var l=[],a=0;a<arguments.length;a+=1){var c=arguments[a];c._chained?l.push.apply(l,c._chained):l.push(c)}var h=function(){for(var u,p=new Array(arguments.length),f=0,o=arguments.length;f<o;f++)p[f]=arguments[f];for(f=0;f<l.length;f+=1){var m=l[f].apply(u,p);typeof m<"u"&&(u=m)}return u};return h._chained=l,h},r.chainPathBefore=function(l,a,c){return r.set(l,a,r.chain(c,r.get(l,a)))},r.chainPathAfter=function(l,a,c){return r.set(l,a,r.chain(r.get(l,a),c))},r.setDecomp=function(l){r._decomp=l},r.getDecomp=function(){var l=r._decomp;try{!l&&typeof window<"u"&&(l=window.decomp),!l&&typeof Gr<"u"&&(l=Gr.decomp)}catch{l=null}return l}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){var l={min:{x:0,y:0},max:{x:0,y:0}};return n&&r.update(l,n),l},r.update=function(n,l,a){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var c=0;c<l.length;c++){var h=l[c];h.x>n.max.x&&(n.max.x=h.x),h.x<n.min.x&&(n.min.x=h.x),h.y>n.max.y&&(n.max.y=h.y),h.y<n.min.y&&(n.min.y=h.y)}a&&(a.x>0?n.max.x+=a.x:n.min.x+=a.x,a.y>0?n.max.y+=a.y:n.min.y+=a.y)},r.contains=function(n,l){return l.x>=n.min.x&&l.x<=n.max.x&&l.y>=n.min.y&&l.y<=n.max.y},r.overlaps=function(n,l){return n.min.x<=l.max.x&&n.max.x>=l.min.x&&n.max.y>=l.min.y&&n.min.y<=l.max.y},r.translate=function(n,l){n.min.x+=l.x,n.max.x+=l.x,n.min.y+=l.y,n.max.y+=l.y},r.shift=function(n,l){var a=n.max.x-n.min.x,c=n.max.y-n.min.y;n.min.x=l.x,n.max.x=l.x+a,n.min.y=l.y,n.max.y=l.y+c}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n,l){return{x:n||0,y:l||0}},r.clone=function(n){return{x:n.x,y:n.y}},r.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},r.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},r.rotate=function(n,l,a){var c=Math.cos(l),h=Math.sin(l);a||(a={});var u=n.x*c-n.y*h;return a.y=n.x*h+n.y*c,a.x=u,a},r.rotateAbout=function(n,l,a,c){var h=Math.cos(l),u=Math.sin(l);c||(c={});var p=a.x+((n.x-a.x)*h-(n.y-a.y)*u);return c.y=a.y+((n.x-a.x)*u+(n.y-a.y)*h),c.x=p,c},r.normalise=function(n){var l=r.magnitude(n);return l===0?{x:0,y:0}:{x:n.x/l,y:n.y/l}},r.dot=function(n,l){return n.x*l.x+n.y*l.y},r.cross=function(n,l){return n.x*l.y-n.y*l.x},r.cross3=function(n,l,a){return(l.x-n.x)*(a.y-n.y)-(l.y-n.y)*(a.x-n.x)},r.add=function(n,l,a){return a||(a={}),a.x=n.x+l.x,a.y=n.y+l.y,a},r.sub=function(n,l,a){return a||(a={}),a.x=n.x-l.x,a.y=n.y-l.y,a},r.mult=function(n,l){return{x:n.x*l,y:n.y*l}},r.div=function(n,l){return{x:n.x/l,y:n.y/l}},r.perp=function(n,l){return l=l===!0?-1:1,{x:l*-n.y,y:l*n.x}},r.neg=function(n){return{x:-n.x,y:-n.y}},r.angle=function(n,l){return Math.atan2(l.y-n.y,l.x-n.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}()},function(t,i,r){var n={};t.exports=n;var l=r(2),a=r(0);(function(){n.create=function(c,h){for(var u=[],p=0;p<c.length;p++){var f=c[p],o={x:f.x,y:f.y,index:p,body:h,isInternal:!1};u.push(o)}return u},n.fromPath=function(c,h){var u=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return c.replace(u,function(f,o,m){p.push({x:parseFloat(o),y:parseFloat(m)})}),n.create(p,h)},n.centre=function(c){for(var h=n.area(c,!0),u={x:0,y:0},p,f,o,m=0;m<c.length;m++)o=(m+1)%c.length,p=l.cross(c[m],c[o]),f=l.mult(l.add(c[m],c[o]),p),u=l.add(u,f);return l.div(u,6*h)},n.mean=function(c){for(var h={x:0,y:0},u=0;u<c.length;u++)h.x+=c[u].x,h.y+=c[u].y;return l.div(h,c.length)},n.area=function(c,h){for(var u=0,p=c.length-1,f=0;f<c.length;f++)u+=(c[p].x-c[f].x)*(c[p].y+c[f].y),p=f;return h?u/2:Math.abs(u)/2},n.inertia=function(c,h){for(var u=0,p=0,f=c,o,m,v=0;v<f.length;v++)m=(v+1)%f.length,o=Math.abs(l.cross(f[m],f[v])),u+=o*(l.dot(f[m],f[m])+l.dot(f[m],f[v])+l.dot(f[v],f[v])),p+=o;return h/6*(u/p)},n.translate=function(c,h,u){u=typeof u<"u"?u:1;var p=c.length,f=h.x*u,o=h.y*u,m;for(m=0;m<p;m++)c[m].x+=f,c[m].y+=o;return c},n.rotate=function(c,h,u){if(h!==0){var p=Math.cos(h),f=Math.sin(h),o=u.x,m=u.y,v=c.length,d,g,E,S;for(S=0;S<v;S++)d=c[S],g=d.x-o,E=d.y-m,d.x=o+(g*p-E*f),d.y=m+(g*f+E*p);return c}},n.contains=function(c,h){for(var u=h.x,p=h.y,f=c.length,o=c[f-1],m,v=0;v<f;v++){if(m=c[v],(u-o.x)*(m.y-o.y)+(p-o.y)*(o.x-m.x)>0)return!1;o=m}return!0},n.scale=function(c,h,u,p){if(h===1&&u===1)return c;p=p||n.centre(c);for(var f,o,m=0;m<c.length;m++)f=c[m],o=l.sub(f,p),c[m].x=p.x+o.x*h,c[m].y=p.y+o.y*u;return c},n.chamfer=function(c,h,u,p,f){typeof h=="number"?h=[h]:h=h||[8],u=typeof u<"u"?u:-1,p=p||2,f=f||14;for(var o=[],m=0;m<c.length;m++){var v=c[m-1>=0?m-1:c.length-1],d=c[m],g=c[(m+1)%c.length],E=h[m<h.length?m:h.length-1];if(E===0){o.push(d);continue}var S=l.normalise({x:d.y-v.y,y:v.x-d.x}),A=l.normalise({x:g.y-d.y,y:d.x-g.x}),x=Math.sqrt(2*Math.pow(E,2)),M=l.mult(a.clone(S),E),T=l.normalise(l.mult(l.add(S,A),.5)),b=l.sub(d,l.mult(T,x)),_=u;u===-1&&(_=Math.pow(E,.32)*1.75),_=a.clamp(_,p,f),_%2===1&&(_+=1);for(var y=Math.acos(l.dot(S,A)),R=y/_,P=0;P<_;P++)o.push(l.add(l.rotate(M,R*P),b))}return o},n.clockwiseSort=function(c){var h=n.mean(c);return c.sort(function(u,p){return l.angle(h,u)-l.angle(h,p)}),c},n.isConvex=function(c){var h=0,u=c.length,p,f,o,m;if(u<3)return null;for(p=0;p<u;p++)if(f=(p+1)%u,o=(p+2)%u,m=(c[f].x-c[p].x)*(c[o].y-c[f].y),m-=(c[f].y-c[p].y)*(c[o].x-c[f].x),m<0?h|=1:m>0&&(h|=2),h===3)return!1;return h!==0?!0:null},n.hull=function(c){var h=[],u=[],p,f;for(c=c.slice(0),c.sort(function(o,m){var v=o.x-m.x;return v!==0?v:o.y-m.y}),f=0;f<c.length;f+=1){for(p=c[f];u.length>=2&&l.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}for(f=c.length-1;f>=0;f-=1){for(p=c[f];h.length>=2&&l.cross3(h[h.length-2],h[h.length-1],p)<=0;)h.pop();h.push(p)}return h.pop(),u.pop(),h.concat(u)}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(2),c=r(7),h=r(0),u=r(1),p=r(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(o){var m={id:h.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:l.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},v=h.extend(m,o);return f(v,o),v},n.nextGroup=function(o){return o?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var f=function(o,m){m=m||{},n.set(o,{bounds:o.bounds||u.create(o.vertices),positionPrev:o.positionPrev||a.clone(o.position),anglePrev:o.anglePrev||o.angle,vertices:o.vertices,parts:o.parts||[o],isStatic:o.isStatic,isSleeping:o.isSleeping,parent:o.parent||o}),l.rotate(o.vertices,o.angle,o.position),p.rotate(o.axes,o.angle),u.update(o.bounds,o.vertices,o.velocity),n.set(o,{axes:m.axes||o.axes,area:m.area||o.area,mass:m.mass||o.mass,inertia:m.inertia||o.inertia});var v=o.isStatic?"#14151f":h.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),d=o.isStatic?"#555":"#ccc",g=o.isStatic&&o.render.fillStyle===null?1:0;o.render.fillStyle=o.render.fillStyle||v,o.render.strokeStyle=o.render.strokeStyle||d,o.render.lineWidth=o.render.lineWidth||g,o.render.sprite.xOffset+=-(o.bounds.min.x-o.position.x)/(o.bounds.max.x-o.bounds.min.x),o.render.sprite.yOffset+=-(o.bounds.min.y-o.position.y)/(o.bounds.max.y-o.bounds.min.y)};n.set=function(o,m,v){var d;typeof m=="string"&&(d=m,m={},m[d]=v);for(d in m)if(Object.prototype.hasOwnProperty.call(m,d))switch(v=m[d],d){case"isStatic":n.setStatic(o,v);break;case"isSleeping":c.set(o,v);break;case"mass":n.setMass(o,v);break;case"density":n.setDensity(o,v);break;case"inertia":n.setInertia(o,v);break;case"vertices":n.setVertices(o,v);break;case"position":n.setPosition(o,v);break;case"angle":n.setAngle(o,v);break;case"velocity":n.setVelocity(o,v);break;case"angularVelocity":n.setAngularVelocity(o,v);break;case"speed":n.setSpeed(o,v);break;case"angularSpeed":n.setAngularSpeed(o,v);break;case"parts":n.setParts(o,v);break;case"centre":n.setCentre(o,v);break;default:o[d]=v}},n.setStatic=function(o,m){for(var v=0;v<o.parts.length;v++){var d=o.parts[v];d.isStatic=m,m?(d._original={restitution:d.restitution,friction:d.friction,mass:d.mass,inertia:d.inertia,density:d.density,inverseMass:d.inverseMass,inverseInertia:d.inverseInertia},d.restitution=0,d.friction=1,d.mass=d.inertia=d.density=1/0,d.inverseMass=d.inverseInertia=0,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.anglePrev=d.angle,d.angularVelocity=0,d.speed=0,d.angularSpeed=0,d.motion=0):d._original&&(d.restitution=d._original.restitution,d.friction=d._original.friction,d.mass=d._original.mass,d.inertia=d._original.inertia,d.density=d._original.density,d.inverseMass=d._original.inverseMass,d.inverseInertia=d._original.inverseInertia,d._original=null)}},n.setMass=function(o,m){var v=o.inertia/(o.mass/6);o.inertia=v*(m/6),o.inverseInertia=1/o.inertia,o.mass=m,o.inverseMass=1/o.mass,o.density=o.mass/o.area},n.setDensity=function(o,m){n.setMass(o,m*o.area),o.density=m},n.setInertia=function(o,m){o.inertia=m,o.inverseInertia=1/o.inertia},n.setVertices=function(o,m){m[0].body===o?o.vertices=m:o.vertices=l.create(m,o),o.axes=p.fromVertices(o.vertices),o.area=l.area(o.vertices),n.setMass(o,o.density*o.area);var v=l.centre(o.vertices);l.translate(o.vertices,v,-1),n.setInertia(o,n._inertiaScale*l.inertia(o.vertices,o.mass)),l.translate(o.vertices,o.position),u.update(o.bounds,o.vertices,o.velocity)},n.setParts=function(o,m,v){var d;for(m=m.slice(0),o.parts.length=0,o.parts.push(o),o.parent=o,d=0;d<m.length;d++){var g=m[d];g!==o&&(g.parent=o,o.parts.push(g))}if(o.parts.length!==1){if(v=typeof v<"u"?v:!0,v){var E=[];for(d=0;d<m.length;d++)E=E.concat(m[d].vertices);l.clockwiseSort(E);var S=l.hull(E),A=l.centre(S);n.setVertices(o,S),l.translate(o.vertices,A)}var x=n._totalProperties(o);o.area=x.area,o.parent=o,o.position.x=x.centre.x,o.position.y=x.centre.y,o.positionPrev.x=x.centre.x,o.positionPrev.y=x.centre.y,n.setMass(o,x.mass),n.setInertia(o,x.inertia),n.setPosition(o,x.centre)}},n.setCentre=function(o,m,v){v?(o.positionPrev.x+=m.x,o.positionPrev.y+=m.y,o.position.x+=m.x,o.position.y+=m.y):(o.positionPrev.x=m.x-(o.position.x-o.positionPrev.x),o.positionPrev.y=m.y-(o.position.y-o.positionPrev.y),o.position.x=m.x,o.position.y=m.y)},n.setPosition=function(o,m,v){var d=a.sub(m,o.position);v?(o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.velocity.x=d.x,o.velocity.y=d.y,o.speed=a.magnitude(d)):(o.positionPrev.x+=d.x,o.positionPrev.y+=d.y);for(var g=0;g<o.parts.length;g++){var E=o.parts[g];E.position.x+=d.x,E.position.y+=d.y,l.translate(E.vertices,d),u.update(E.bounds,E.vertices,o.velocity)}},n.setAngle=function(o,m,v){var d=m-o.angle;v?(o.anglePrev=o.angle,o.angularVelocity=d,o.angularSpeed=Math.abs(d)):o.anglePrev+=d;for(var g=0;g<o.parts.length;g++){var E=o.parts[g];E.angle+=d,l.rotate(E.vertices,d,o.position),p.rotate(E.axes,d),u.update(E.bounds,E.vertices,o.velocity),g>0&&a.rotateAbout(E.position,d,o.position,E.position)}},n.setVelocity=function(o,m){var v=o.deltaTime/n._baseDelta;o.positionPrev.x=o.position.x-m.x*v,o.positionPrev.y=o.position.y-m.y*v,o.velocity.x=(o.position.x-o.positionPrev.x)/v,o.velocity.y=(o.position.y-o.positionPrev.y)/v,o.speed=a.magnitude(o.velocity)},n.getVelocity=function(o){var m=n._baseDelta/o.deltaTime;return{x:(o.position.x-o.positionPrev.x)*m,y:(o.position.y-o.positionPrev.y)*m}},n.getSpeed=function(o){return a.magnitude(n.getVelocity(o))},n.setSpeed=function(o,m){n.setVelocity(o,a.mult(a.normalise(n.getVelocity(o)),m))},n.setAngularVelocity=function(o,m){var v=o.deltaTime/n._baseDelta;o.anglePrev=o.angle-m*v,o.angularVelocity=(o.angle-o.anglePrev)/v,o.angularSpeed=Math.abs(o.angularVelocity)},n.getAngularVelocity=function(o){return(o.angle-o.anglePrev)*n._baseDelta/o.deltaTime},n.getAngularSpeed=function(o){return Math.abs(n.getAngularVelocity(o))},n.setAngularSpeed=function(o,m){n.setAngularVelocity(o,h.sign(n.getAngularVelocity(o))*m)},n.translate=function(o,m,v){n.setPosition(o,a.add(o.position,m),v)},n.rotate=function(o,m,v,d){if(!v)n.setAngle(o,o.angle+m,d);else{var g=Math.cos(m),E=Math.sin(m),S=o.position.x-v.x,A=o.position.y-v.y;n.setPosition(o,{x:v.x+(S*g-A*E),y:v.y+(S*E+A*g)},d),n.setAngle(o,o.angle+m,d)}},n.scale=function(o,m,v,d){var g=0,E=0;d=d||o.position;for(var S=0;S<o.parts.length;S++){var A=o.parts[S];l.scale(A.vertices,m,v,d),A.axes=p.fromVertices(A.vertices),A.area=l.area(A.vertices),n.setMass(A,o.density*A.area),l.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),n.setInertia(A,n._inertiaScale*l.inertia(A.vertices,A.mass)),l.translate(A.vertices,{x:A.position.x,y:A.position.y}),S>0&&(g+=A.area,E+=A.inertia),A.position.x=d.x+(A.position.x-d.x)*m,A.position.y=d.y+(A.position.y-d.y)*v,u.update(A.bounds,A.vertices,o.velocity)}o.parts.length>1&&(o.area=g,o.isStatic||(n.setMass(o,o.density*g),n.setInertia(o,E))),o.circleRadius&&(m===v?o.circleRadius*=m:o.circleRadius=null)},n.update=function(o,m){m=(typeof m<"u"?m:1e3/60)*o.timeScale;var v=m*m,d=n._timeCorrection?m/(o.deltaTime||m):1,g=1-o.frictionAir*(m/h._baseDelta),E=(o.position.x-o.positionPrev.x)*d,S=(o.position.y-o.positionPrev.y)*d;o.velocity.x=E*g+o.force.x/o.mass*v,o.velocity.y=S*g+o.force.y/o.mass*v,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.position.x+=o.velocity.x,o.position.y+=o.velocity.y,o.deltaTime=m,o.angularVelocity=(o.angle-o.anglePrev)*g*d+o.torque/o.inertia*v,o.anglePrev=o.angle,o.angle+=o.angularVelocity;for(var A=0;A<o.parts.length;A++){var x=o.parts[A];l.translate(x.vertices,o.velocity),A>0&&(x.position.x+=o.velocity.x,x.position.y+=o.velocity.y),o.angularVelocity!==0&&(l.rotate(x.vertices,o.angularVelocity,o.position),p.rotate(x.axes,o.angularVelocity),A>0&&a.rotateAbout(x.position,o.angularVelocity,o.position,x.position)),u.update(x.bounds,x.vertices,o.velocity)}},n.updateVelocities=function(o){var m=n._baseDelta/o.deltaTime,v=o.velocity;v.x=(o.position.x-o.positionPrev.x)*m,v.y=(o.position.y-o.positionPrev.y)*m,o.speed=Math.sqrt(v.x*v.x+v.y*v.y),o.angularVelocity=(o.angle-o.anglePrev)*m,o.angularSpeed=Math.abs(o.angularVelocity)},n.applyForce=function(o,m,v){var d={x:m.x-o.position.x,y:m.y-o.position.y};o.force.x+=v.x,o.force.y+=v.y,o.torque+=d.x*v.y-d.y*v.x},n._totalProperties=function(o){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},v=o.parts.length===1?0:1;v<o.parts.length;v++){var d=o.parts[v],g=d.mass!==1/0?d.mass:1;m.mass+=g,m.area+=d.area,m.inertia+=d.inertia,m.centre=a.add(m.centre,a.mult(d.position,g))}return m.centre=a.div(m.centre,m.mass),m}})()},function(t,i,r){var n={};t.exports=n;var l=r(0);(function(){n.on=function(a,c,h){for(var u=c.split(" "),p,f=0;f<u.length;f++)p=u[f],a.events=a.events||{},a.events[p]=a.events[p]||[],a.events[p].push(h);return h},n.off=function(a,c,h){if(!c){a.events={};return}typeof c=="function"&&(h=c,c=l.keys(a.events).join(" "));for(var u=c.split(" "),p=0;p<u.length;p++){var f=a.events[u[p]],o=[];if(h&&f)for(var m=0;m<f.length;m++)f[m]!==h&&o.push(f[m]);a.events[u[p]]=o}},n.trigger=function(a,c,h){var u,p,f,o,m=a.events;if(m&&l.keys(m).length>0){h||(h={}),u=c.split(" ");for(var v=0;v<u.length;v++)if(p=u[v],f=m[p],f){o=l.clone(h,!1),o.name=p,o.source=a;for(var d=0;d<f.length;d++)f[d].apply(a,[o])}}}})()},function(t,i,r){var n={};t.exports=n;var l=r(5),a=r(0),c=r(1),h=r(4);(function(){n.create=function(u){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},u)},n.setModified=function(u,p,f,o){if(u.isModified=p,p&&u.cache&&(u.cache.allBodies=null,u.cache.allConstraints=null,u.cache.allComposites=null),f&&u.parent&&n.setModified(u.parent,p,f,o),o)for(var m=0;m<u.composites.length;m++){var v=u.composites[m];n.setModified(v,p,f,o)}},n.add=function(u,p){var f=[].concat(p);l.trigger(u,"beforeAdd",{object:p});for(var o=0;o<f.length;o++){var m=f[o];switch(m.type){case"body":if(m.parent!==m){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(u,m);break;case"constraint":n.addConstraint(u,m);break;case"composite":n.addComposite(u,m);break;case"mouseConstraint":n.addConstraint(u,m.constraint);break}}return l.trigger(u,"afterAdd",{object:p}),u},n.remove=function(u,p,f){var o=[].concat(p);l.trigger(u,"beforeRemove",{object:p});for(var m=0;m<o.length;m++){var v=o[m];switch(v.type){case"body":n.removeBody(u,v,f);break;case"constraint":n.removeConstraint(u,v,f);break;case"composite":n.removeComposite(u,v,f);break;case"mouseConstraint":n.removeConstraint(u,v.constraint);break}}return l.trigger(u,"afterRemove",{object:p}),u},n.addComposite=function(u,p){return u.composites.push(p),p.parent=u,n.setModified(u,!0,!0,!1),u},n.removeComposite=function(u,p,f){var o=a.indexOf(u.composites,p);if(o!==-1&&n.removeCompositeAt(u,o),f)for(var m=0;m<u.composites.length;m++)n.removeComposite(u.composites[m],p,!0);return u},n.removeCompositeAt=function(u,p){return u.composites.splice(p,1),n.setModified(u,!0,!0,!1),u},n.addBody=function(u,p){return u.bodies.push(p),n.setModified(u,!0,!0,!1),u},n.removeBody=function(u,p,f){var o=a.indexOf(u.bodies,p);if(o!==-1&&n.removeBodyAt(u,o),f)for(var m=0;m<u.composites.length;m++)n.removeBody(u.composites[m],p,!0);return u},n.removeBodyAt=function(u,p){return u.bodies.splice(p,1),n.setModified(u,!0,!0,!1),u},n.addConstraint=function(u,p){return u.constraints.push(p),n.setModified(u,!0,!0,!1),u},n.removeConstraint=function(u,p,f){var o=a.indexOf(u.constraints,p);if(o!==-1&&n.removeConstraintAt(u,o),f)for(var m=0;m<u.composites.length;m++)n.removeConstraint(u.composites[m],p,!0);return u},n.removeConstraintAt=function(u,p){return u.constraints.splice(p,1),n.setModified(u,!0,!0,!1),u},n.clear=function(u,p,f){if(f)for(var o=0;o<u.composites.length;o++)n.clear(u.composites[o],p,!0);return p?u.bodies=u.bodies.filter(function(m){return m.isStatic}):u.bodies.length=0,u.constraints.length=0,u.composites.length=0,n.setModified(u,!0,!0,!1),u},n.allBodies=function(u){if(u.cache&&u.cache.allBodies)return u.cache.allBodies;for(var p=[].concat(u.bodies),f=0;f<u.composites.length;f++)p=p.concat(n.allBodies(u.composites[f]));return u.cache&&(u.cache.allBodies=p),p},n.allConstraints=function(u){if(u.cache&&u.cache.allConstraints)return u.cache.allConstraints;for(var p=[].concat(u.constraints),f=0;f<u.composites.length;f++)p=p.concat(n.allConstraints(u.composites[f]));return u.cache&&(u.cache.allConstraints=p),p},n.allComposites=function(u){if(u.cache&&u.cache.allComposites)return u.cache.allComposites;for(var p=[].concat(u.composites),f=0;f<u.composites.length;f++)p=p.concat(n.allComposites(u.composites[f]));return u.cache&&(u.cache.allComposites=p),p},n.get=function(u,p,f){var o,m;switch(f){case"body":o=n.allBodies(u);break;case"constraint":o=n.allConstraints(u);break;case"composite":o=n.allComposites(u).concat(u);break}return o?(m=o.filter(function(v){return v.id.toString()===p.toString()}),m.length===0?null:m[0]):null},n.move=function(u,p,f){return n.remove(u,p),n.add(f,p),u},n.rebase=function(u){for(var p=n.allBodies(u).concat(n.allConstraints(u)).concat(n.allComposites(u)),f=0;f<p.length;f++)p[f].id=a.nextId();return u},n.translate=function(u,p,f){for(var o=f?n.allBodies(u):u.bodies,m=0;m<o.length;m++)h.translate(o[m],p);return u},n.rotate=function(u,p,f,o){for(var m=Math.cos(p),v=Math.sin(p),d=o?n.allBodies(u):u.bodies,g=0;g<d.length;g++){var E=d[g],S=E.position.x-f.x,A=E.position.y-f.y;h.setPosition(E,{x:f.x+(S*m-A*v),y:f.y+(S*v+A*m)}),h.rotate(E,p)}return u},n.scale=function(u,p,f,o,m){for(var v=m?n.allBodies(u):u.bodies,d=0;d<v.length;d++){var g=v[d],E=g.position.x-o.x,S=g.position.y-o.y;h.setPosition(g,{x:o.x+E*p,y:o.y+S*f}),h.scale(g,p,f)}return u},n.bounds=function(u){for(var p=n.allBodies(u),f=[],o=0;o<p.length;o+=1){var m=p[o];f.push(m.bounds.min,m.bounds.max)}return c.create(f)}})()},function(t,i,r){var n={};t.exports=n;var l=r(4),a=r(5),c=r(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(h,u){for(var p=u/c._baseDelta,f=n._motionSleepThreshold,o=0;o<h.length;o++){var m=h[o],v=l.getSpeed(m),d=l.getAngularSpeed(m),g=v*v+d*d;if(m.force.x!==0||m.force.y!==0){n.set(m,!1);continue}var E=Math.min(m.motion,g),S=Math.max(m.motion,g);m.motion=n._minBias*E+(1-n._minBias)*S,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/p&&n.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},n.afterCollisions=function(h){for(var u=n._motionSleepThreshold,p=0;p<h.length;p++){var f=h[p];if(f.isActive){var o=f.collision,m=o.bodyA.parent,v=o.bodyB.parent;if(!(m.isSleeping&&v.isSleeping||m.isStatic||v.isStatic)&&(m.isSleeping||v.isSleeping)){var d=m.isSleeping&&!m.isStatic?m:v,g=d===m?v:m;!d.isStatic&&g.motion>u&&n.set(d,!1)}}}},n.set=function(h,u){var p=h.isSleeping;u?(h.isSleeping=!0,h.sleepCounter=h.sleepThreshold,h.positionImpulse.x=0,h.positionImpulse.y=0,h.positionPrev.x=h.position.x,h.positionPrev.y=h.position.y,h.anglePrev=h.angle,h.speed=0,h.angularSpeed=0,h.motion=0,p||a.trigger(h,"sleepStart")):(h.isSleeping=!1,h.sleepCounter=0,p&&a.trigger(h,"sleepEnd"))}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(9);(function(){var c=[],h={overlap:0,axis:null},u={overlap:0,axis:null};n.create=function(p,f){return{pair:null,collided:!1,bodyA:p,bodyB:f,parentA:p.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},n.collides=function(p,f,o){if(n._overlapAxes(h,p.vertices,f.vertices,p.axes),h.overlap<=0||(n._overlapAxes(u,f.vertices,p.vertices,f.axes),u.overlap<=0))return null;var m=o&&o.table[a.id(p,f)],v;m?v=m.collision:(v=n.create(p,f),v.collided=!0,v.bodyA=p.id<f.id?p:f,v.bodyB=p.id<f.id?f:p,v.parentA=v.bodyA.parent,v.parentB=v.bodyB.parent),p=v.bodyA,f=v.bodyB;var d;h.overlap<u.overlap?d=h:d=u;var g=v.normal,E=v.supports,S=d.axis,A=S.x,x=S.y;A*(f.position.x-p.position.x)+x*(f.position.y-p.position.y)<0?(g.x=A,g.y=x):(g.x=-A,g.y=-x),v.tangent.x=-g.y,v.tangent.y=g.x,v.depth=d.overlap,v.penetration.x=g.x*v.depth,v.penetration.y=g.y*v.depth;var M=n._findSupports(p,f,g,1),T=0;if(l.contains(p.vertices,M[0])&&(E[T++]=M[0]),l.contains(p.vertices,M[1])&&(E[T++]=M[1]),T<2){var b=n._findSupports(f,p,g,-1);l.contains(f.vertices,b[0])&&(E[T++]=b[0]),T<2&&l.contains(f.vertices,b[1])&&(E[T++]=b[1])}return T===0&&(E[T++]=M[0]),E.length=T,v},n._overlapAxes=function(p,f,o,m){var v=f.length,d=o.length,g=f[0].x,E=f[0].y,S=o[0].x,A=o[0].y,x=m.length,M=Number.MAX_VALUE,T=0,b,_,y,R,P,N;for(P=0;P<x;P++){var D=m[P],U=D.x,F=D.y,O=g*U+E*F,G=S*U+A*F,Y=O,K=G;for(N=1;N<v;N+=1)R=f[N].x*U+f[N].y*F,R>Y?Y=R:R<O&&(O=R);for(N=1;N<d;N+=1)R=o[N].x*U+o[N].y*F,R>K?K=R:R<G&&(G=R);if(_=Y-G,y=K-O,b=_<y?_:y,b<M&&(M=b,T=P,b<=0))break}p.axis=m[T],p.overlap=M},n._projectToAxis=function(p,f,o){for(var m=f[0].x*o.x+f[0].y*o.y,v=m,d=1;d<f.length;d+=1){var g=f[d].x*o.x+f[d].y*o.y;g>v?v=g:g<m&&(m=g)}p.min=m,p.max=v},n._findSupports=function(p,f,o,m){var v=f.vertices,d=v.length,g=p.position.x,E=p.position.y,S=o.x*m,A=o.y*m,x=Number.MAX_VALUE,M,T,b,_,y;for(y=0;y<d;y+=1)T=v[y],_=S*(g-T.x)+A*(E-T.y),_<x&&(x=_,M=T);return b=v[(d+M.index-1)%d],x=S*(g-b.x)+A*(E-b.y),T=v[(M.index+1)%d],S*(g-T.x)+A*(E-T.y)<x?(c[0]=M,c[1]=T,c):(c[0]=M,c[1]=b,c)}})()},function(t,i,r){var n={};t.exports=n;var l=r(16);(function(){n.create=function(a,c){var h=a.bodyA,u=a.bodyB,p={id:n.id(h,u),bodyA:h,bodyB:u,collision:a,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:h.isSensor||u.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(p,a,c),p},n.update=function(a,c,h){var u=a.contacts,p=c.supports,f=a.activeContacts,o=c.parentA,m=c.parentB,v=o.vertices.length;a.isActive=!0,a.timeUpdated=h,a.collision=c,a.separation=c.depth,a.inverseMass=o.inverseMass+m.inverseMass,a.friction=o.friction<m.friction?o.friction:m.friction,a.frictionStatic=o.frictionStatic>m.frictionStatic?o.frictionStatic:m.frictionStatic,a.restitution=o.restitution>m.restitution?o.restitution:m.restitution,a.slop=o.slop>m.slop?o.slop:m.slop,c.pair=a,f.length=0;for(var d=0;d<p.length;d++){var g=p[d],E=g.body===o?g.index:v+g.index,S=u[E];S?f.push(S):f.push(u[E]=l.create(g))}},n.setActive=function(a,c,h){c?(a.isActive=!0,a.timeUpdated=h):(a.isActive=!1,a.activeContacts.length=0)},n.id=function(a,c){return a.id<c.id?"A"+a.id+"B"+c.id:"A"+c.id+"B"+a.id}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(2),c=r(7),h=r(1),u=r(11),p=r(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(f){var o=f;o.bodyA&&!o.pointA&&(o.pointA={x:0,y:0}),o.bodyB&&!o.pointB&&(o.pointB={x:0,y:0});var m=o.bodyA?a.add(o.bodyA.position,o.pointA):o.pointA,v=o.bodyB?a.add(o.bodyB.position,o.pointB):o.pointB,d=a.magnitude(a.sub(m,v));o.length=typeof o.length<"u"?o.length:d,o.id=o.id||p.nextId(),o.label=o.label||"Constraint",o.type="constraint",o.stiffness=o.stiffness||(o.length>0?1:.7),o.damping=o.damping||0,o.angularStiffness=o.angularStiffness||0,o.angleA=o.bodyA?o.bodyA.angle:o.angleA,o.angleB=o.bodyB?o.bodyB.angle:o.angleB,o.plugin={};var g={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return o.length===0&&o.stiffness>.1?(g.type="pin",g.anchors=!1):o.stiffness<.9&&(g.type="spring"),o.render=p.extend(g,o.render),o},n.preSolveAll=function(f){for(var o=0;o<f.length;o+=1){var m=f[o],v=m.constraintImpulse;m.isStatic||v.x===0&&v.y===0&&v.angle===0||(m.position.x+=v.x,m.position.y+=v.y,m.angle+=v.angle)}},n.solveAll=function(f,o){for(var m=p.clamp(o/p._baseDelta,0,1),v=0;v<f.length;v+=1){var d=f[v],g=!d.bodyA||d.bodyA&&d.bodyA.isStatic,E=!d.bodyB||d.bodyB&&d.bodyB.isStatic;(g||E)&&n.solve(f[v],m)}for(v=0;v<f.length;v+=1)d=f[v],g=!d.bodyA||d.bodyA&&d.bodyA.isStatic,E=!d.bodyB||d.bodyB&&d.bodyB.isStatic,!g&&!E&&n.solve(f[v],m)},n.solve=function(f,o){var m=f.bodyA,v=f.bodyB,d=f.pointA,g=f.pointB;if(!(!m&&!v)){m&&!m.isStatic&&(a.rotate(d,m.angle-f.angleA,d),f.angleA=m.angle),v&&!v.isStatic&&(a.rotate(g,v.angle-f.angleB,g),f.angleB=v.angle);var E=d,S=g;if(m&&(E=a.add(m.position,d)),v&&(S=a.add(v.position,g)),!(!E||!S)){var A=a.sub(E,S),x=a.magnitude(A);x<n._minLength&&(x=n._minLength);var M=(x-f.length)/x,T=f.stiffness>=1||f.length===0,b=T?f.stiffness*o:f.stiffness*o*o,_=f.damping*o,y=a.mult(A,M*b),R=(m?m.inverseMass:0)+(v?v.inverseMass:0),P=(m?m.inverseInertia:0)+(v?v.inverseInertia:0),N=R+P,D,U,F,O,G;if(_>0){var Y=a.create();F=a.div(A,x),G=a.sub(v&&a.sub(v.position,v.positionPrev)||Y,m&&a.sub(m.position,m.positionPrev)||Y),O=a.dot(F,G)}m&&!m.isStatic&&(U=m.inverseMass/R,m.constraintImpulse.x-=y.x*U,m.constraintImpulse.y-=y.y*U,m.position.x-=y.x*U,m.position.y-=y.y*U,_>0&&(m.positionPrev.x-=_*F.x*O*U,m.positionPrev.y-=_*F.y*O*U),D=a.cross(d,y)/N*n._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=D,m.angle-=D),v&&!v.isStatic&&(U=v.inverseMass/R,v.constraintImpulse.x+=y.x*U,v.constraintImpulse.y+=y.y*U,v.position.x+=y.x*U,v.position.y+=y.y*U,_>0&&(v.positionPrev.x+=_*F.x*O*U,v.positionPrev.y+=_*F.y*O*U),D=a.cross(g,y)/N*n._torqueDampen*v.inverseInertia*(1-f.angularStiffness),v.constraintImpulse.angle+=D,v.angle+=D)}}},n.postSolveAll=function(f){for(var o=0;o<f.length;o++){var m=f[o],v=m.constraintImpulse;if(!(m.isStatic||v.x===0&&v.y===0&&v.angle===0)){c.set(m,!1);for(var d=0;d<m.parts.length;d++){var g=m.parts[d];l.translate(g.vertices,v),d>0&&(g.position.x+=v.x,g.position.y+=v.y),v.angle!==0&&(l.rotate(g.vertices,v.angle,m.position),u.rotate(g.axes,v.angle),d>0&&a.rotateAbout(g.position,v.angle,m.position,g.position)),h.update(g.bounds,g.vertices,m.velocity)}v.angle*=n._warming,v.x*=n._warming,v.y*=n._warming}}},n.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},n.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}}})()},function(t,i,r){var n={};t.exports=n;var l=r(2),a=r(0);(function(){n.fromVertices=function(c){for(var h={},u=0;u<c.length;u++){var p=(u+1)%c.length,f=l.normalise({x:c[p].y-c[u].y,y:c[u].x-c[p].x}),o=f.y===0?1/0:f.x/f.y;o=o.toFixed(3).toString(),h[o]=f}return a.values(h)},n.rotate=function(c,h){if(h!==0)for(var u=Math.cos(h),p=Math.sin(h),f=0;f<c.length;f++){var o=c[f],m;m=o.x*u-o.y*p,o.y=o.x*p+o.y*u,o.x=m}}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(0),c=r(4),h=r(1),u=r(2);(function(){n.rectangle=function(p,f,o,m,v){v=v||{};var d={label:"Rectangle Body",position:{x:p,y:f},vertices:l.fromPath("L 0 0 L "+o+" 0 L "+o+" "+m+" L 0 "+m)};if(v.chamfer){var g=v.chamfer;d.vertices=l.chamfer(d.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete v.chamfer}return c.create(a.extend({},d,v))},n.trapezoid=function(p,f,o,m,v,d){d=d||{},v*=.5;var g=(1-v*2)*o,E=o*v,S=E+g,A=S+E,x;v<.5?x="L 0 0 L "+E+" "+-m+" L "+S+" "+-m+" L "+A+" 0":x="L 0 0 L "+S+" "+-m+" L "+A+" 0";var M={label:"Trapezoid Body",position:{x:p,y:f},vertices:l.fromPath(x)};if(d.chamfer){var T=d.chamfer;M.vertices=l.chamfer(M.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete d.chamfer}return c.create(a.extend({},M,d))},n.circle=function(p,f,o,m,v){m=m||{};var d={label:"Circle Body",circleRadius:o};v=v||25;var g=Math.ceil(Math.max(10,Math.min(v,o)));return g%2===1&&(g+=1),n.polygon(p,f,g,o,a.extend({},d,m))},n.polygon=function(p,f,o,m,v){if(v=v||{},o<3)return n.circle(p,f,m,v);for(var d=2*Math.PI/o,g="",E=d*.5,S=0;S<o;S+=1){var A=E+S*d,x=Math.cos(A)*m,M=Math.sin(A)*m;g+="L "+x.toFixed(3)+" "+M.toFixed(3)+" "}var T={label:"Polygon Body",position:{x:p,y:f},vertices:l.fromPath(g)};if(v.chamfer){var b=v.chamfer;T.vertices=l.chamfer(T.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete v.chamfer}return c.create(a.extend({},T,v))},n.fromVertices=function(p,f,o,m,v,d,g,E){var S=a.getDecomp(),A,x,M,T,b,_,y,R,P,N,D;for(A=!!(S&&S.quickDecomp),m=m||{},M=[],v=typeof v<"u"?v:!1,d=typeof d<"u"?d:.01,g=typeof g<"u"?g:10,E=typeof E<"u"?E:.01,a.isArray(o[0])||(o=[o]),N=0;N<o.length;N+=1)if(_=o[N],T=l.isConvex(_),b=!T,b&&!A&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),T||!A)T?_=l.clockwiseSort(_):_=l.hull(_),M.push({position:{x:p,y:f},vertices:_});else{var U=_.map(function(ae){return[ae.x,ae.y]});S.makeCCW(U),d!==!1&&S.removeCollinearPoints(U,d),E!==!1&&S.removeDuplicatePoints&&S.removeDuplicatePoints(U,E);var F=S.quickDecomp(U);for(y=0;y<F.length;y++){var O=F[y],G=O.map(function(ae){return{x:ae[0],y:ae[1]}});g>0&&l.area(G)<g||M.push({position:l.centre(G),vertices:G})}}for(y=0;y<M.length;y++)M[y]=c.create(a.extend(M[y],m));if(v){var Y=5;for(y=0;y<M.length;y++){var K=M[y];for(R=y+1;R<M.length;R++){var Z=M[R];if(h.overlaps(K.bounds,Z.bounds)){var j=K.vertices,k=Z.vertices;for(P=0;P<K.vertices.length;P++)for(D=0;D<Z.vertices.length;D++){var $=u.magnitudeSquared(u.sub(j[(P+1)%j.length],k[D])),ne=u.magnitudeSquared(u.sub(j[P],k[(D+1)%k.length]));$<Y&&ne<Y&&(j[P].isInternal=!0,k[D].isInternal=!0)}}}}}return M.length>1?(x=c.create(a.extend({parts:M.slice(0)},m)),c.setPosition(x,{x:p,y:f}),x):M[0]}})()},function(t,i,r){var n={};t.exports=n;var l=r(0),a=r(8);(function(){n.create=function(c){var h={bodies:[],pairs:null};return l.extend(h,c)},n.setBodies=function(c,h){c.bodies=h.slice(0)},n.clear=function(c){c.bodies=[]},n.collisions=function(c){var h=[],u=c.pairs,p=c.bodies,f=p.length,o=n.canCollide,m=a.collides,v,d;for(p.sort(n._compareBoundsX),v=0;v<f;v++){var g=p[v],E=g.bounds,S=g.bounds.max.x,A=g.bounds.max.y,x=g.bounds.min.y,M=g.isStatic||g.isSleeping,T=g.parts.length,b=T===1;for(d=v+1;d<f;d++){var _=p[d],y=_.bounds;if(y.min.x>S)break;if(!(A<y.min.y||x>y.max.y)&&!(M&&(_.isStatic||_.isSleeping))&&o(g.collisionFilter,_.collisionFilter)){var R=_.parts.length;if(b&&R===1){var P=m(g,_,u);P&&h.push(P)}else for(var N=T>1?1:0,D=R>1?1:0,U=N;U<T;U++)for(var F=g.parts[U],E=F.bounds,O=D;O<R;O++){var G=_.parts[O],y=G.bounds;if(!(E.min.x>y.max.x||E.max.x<y.min.x||E.max.y<y.min.y||E.min.y>y.max.y)){var P=m(F,G,u);P&&h.push(P)}}}}}return h},n.canCollide=function(c,h){return c.group===h.group&&c.group!==0?c.group>0:(c.mask&h.category)!==0&&(h.mask&c.category)!==0},n._compareBoundsX=function(c,h){return c.bounds.min.x-h.bounds.min.x}})()},function(t,i,r){var n={};t.exports=n;var l=r(0);(function(){n.create=function(a){var c={};return a||l.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=a||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(h){var u=n._getRelativeMousePosition(h,c.element,c.pixelRatio),p=h.changedTouches;p&&(c.button=0,h.preventDefault()),c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=h},c.mousedown=function(h){var u=n._getRelativeMousePosition(h,c.element,c.pixelRatio),p=h.changedTouches;p?(c.button=0,h.preventDefault()):c.button=h.button,c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=h},c.mouseup=function(h){var u=n._getRelativeMousePosition(h,c.element,c.pixelRatio),p=h.changedTouches;p&&h.preventDefault(),c.button=-1,c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=h},c.mousewheel=function(h){c.wheelDelta=Math.max(-1,Math.min(1,h.wheelDelta||-h.detail)),h.preventDefault()},n.setElement(c,c.element),c},n.setElement=function(a,c){a.element=c,c.addEventListener("mousemove",a.mousemove),c.addEventListener("mousedown",a.mousedown),c.addEventListener("mouseup",a.mouseup),c.addEventListener("mousewheel",a.mousewheel),c.addEventListener("DOMMouseScroll",a.mousewheel),c.addEventListener("touchmove",a.mousemove),c.addEventListener("touchstart",a.mousedown),c.addEventListener("touchend",a.mouseup)},n.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},n.setOffset=function(a,c){a.offset.x=c.x,a.offset.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n.setScale=function(a,c){a.scale.x=c.x,a.scale.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n._getRelativeMousePosition=function(a,c,h){var u=c.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,o=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,m=a.changedTouches,v,d;return m?(v=m[0].pageX-u.left-f,d=m[0].pageY-u.top-o):(v=a.pageX-u.left-f,d=a.pageY-u.top-o),{x:v/(c.clientWidth/(c.width||c.clientWidth)*h),y:d/(c.clientHeight/(c.height||c.clientHeight)*h)}}})()},function(t,i,r){var n={};t.exports=n;var l=r(0);(function(){n._registry={},n.register=function(a){if(n.isPlugin(a)||l.warn("Plugin.register:",n.toString(a),"does not implement all required fields."),a.name in n._registry){var c=n._registry[a.name],h=n.versionParse(a.version).number,u=n.versionParse(c.version).number;h>u?(l.warn("Plugin.register:",n.toString(c),"was upgraded to",n.toString(a)),n._registry[a.name]=a):h<u?l.warn("Plugin.register:",n.toString(c),"can not be downgraded to",n.toString(a)):a!==c&&l.warn("Plugin.register:",n.toString(a),"is already registered to different plugin object")}else n._registry[a.name]=a;return a},n.resolve=function(a){return n._registry[n.dependencyParse(a).name]},n.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},n.isPlugin=function(a){return a&&a.name&&a.version&&a.install},n.isUsed=function(a,c){return a.used.indexOf(c)>-1},n.isFor=function(a,c){var h=a.for&&n.dependencyParse(a.for);return!a.for||c.name===h.name&&n.versionSatisfies(c.version,h.range)},n.use=function(a,c){if(a.uses=(a.uses||[]).concat(c||[]),a.uses.length===0){l.warn("Plugin.use:",n.toString(a),"does not specify any dependencies to install.");return}for(var h=n.dependencies(a),u=l.topologicalSort(h),p=[],f=0;f<u.length;f+=1)if(u[f]!==a.name){var o=n.resolve(u[f]);if(!o){p.push("❌ "+u[f]);continue}n.isUsed(a,o.name)||(n.isFor(o,a)||(l.warn("Plugin.use:",n.toString(o),"is for",o.for,"but installed on",n.toString(a)+"."),o._warned=!0),o.install?o.install(a):(l.warn("Plugin.use:",n.toString(o),"does not specify an install function."),o._warned=!0),o._warned?(p.push("🔶 "+n.toString(o)),delete o._warned):p.push("✅ "+n.toString(o)),a.used.push(o.name))}p.length>0&&l.info(p.join("  "))},n.dependencies=function(a,c){var h=n.dependencyParse(a),u=h.name;if(c=c||{},!(u in c)){a=n.resolve(a)||a,c[u]=l.map(a.uses||[],function(f){n.isPlugin(f)&&n.register(f);var o=n.dependencyParse(f),m=n.resolve(f);return m&&!n.versionSatisfies(m.version,o.range)?(l.warn("Plugin.dependencies:",n.toString(m),"does not satisfy",n.toString(o),"used by",n.toString(h)+"."),m._warned=!0,a._warned=!0):m||(l.warn("Plugin.dependencies:",n.toString(f),"used by",n.toString(h),"could not be resolved."),a._warned=!0),o.name});for(var p=0;p<c[u].length;p+=1)n.dependencies(c[u][p],c);return c}},n.dependencyParse=function(a){if(l.isString(a)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(a)||l.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},n.versionParse=function(a){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(a)||l.warn("Plugin.versionParse:",a,"is not a valid version or range.");var h=c.exec(a),u=Number(h[4]),p=Number(h[5]),f=Number(h[6]);return{isRange:!!(h[1]||h[2]),version:h[3],range:a,operator:h[1]||h[2]||"",major:u,minor:p,patch:f,parts:[u,p,f],prerelease:h[7],number:u*1e8+p*1e4+f}},n.versionSatisfies=function(a,c){c=c||"*";var h=n.versionParse(c),u=n.versionParse(a);if(h.isRange){if(h.operator==="*"||a==="*")return!0;if(h.operator===">")return u.number>h.number;if(h.operator===">=")return u.number>=h.number;if(h.operator==="~")return u.major===h.major&&u.minor===h.minor&&u.patch>=h.patch;if(h.operator==="^")return h.major>0?u.major===h.major&&u.number>=h.number:h.minor>0?u.minor===h.minor&&u.patch>=h.patch:u.patch===h.patch}return a===c||a==="*"}})()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,r){var n={};t.exports=n;var l=r(7),a=r(18),c=r(13),h=r(19),u=r(5),p=r(6),f=r(10),o=r(0),m=r(4);(function(){n.create=function(v){v=v||{};var d={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},g=o.extend(d,v);return g.world=v.world||p.create({label:"World"}),g.pairs=v.pairs||h.create(),g.detector=v.detector||c.create(),g.grid={buckets:[]},g.world.gravity=g.gravity,g.broadphase=g.grid,g.metrics={},g},n.update=function(v,d){var g=o.now(),E=v.world,S=v.detector,A=v.pairs,x=v.timing,M=x.timestamp,T;d=typeof d<"u"?d:o._baseDelta,d*=x.timeScale,x.timestamp+=d,x.lastDelta=d;var b={timestamp:x.timestamp,delta:d};u.trigger(v,"beforeUpdate",b);var _=p.allBodies(E),y=p.allConstraints(E);for(E.isModified&&(c.setBodies(S,_),p.setModified(E,!1,!1,!0)),v.enableSleeping&&l.update(_,d),n._bodiesApplyGravity(_,v.gravity),d>0&&n._bodiesUpdate(_,d),f.preSolveAll(_),T=0;T<v.constraintIterations;T++)f.solveAll(y,d);f.postSolveAll(_),S.pairs=v.pairs;var R=c.collisions(S);h.update(A,R,M),v.enableSleeping&&l.afterCollisions(A.list),A.collisionStart.length>0&&u.trigger(v,"collisionStart",{pairs:A.collisionStart});var P=o.clamp(20/v.positionIterations,0,1);for(a.preSolvePosition(A.list),T=0;T<v.positionIterations;T++)a.solvePosition(A.list,d,P);for(a.postSolvePosition(_),f.preSolveAll(_),T=0;T<v.constraintIterations;T++)f.solveAll(y,d);for(f.postSolveAll(_),a.preSolveVelocity(A.list),T=0;T<v.velocityIterations;T++)a.solveVelocity(A.list,d);return n._bodiesUpdateVelocities(_),A.collisionActive.length>0&&u.trigger(v,"collisionActive",{pairs:A.collisionActive}),A.collisionEnd.length>0&&u.trigger(v,"collisionEnd",{pairs:A.collisionEnd}),n._bodiesClearForces(_),u.trigger(v,"afterUpdate",b),v.timing.lastElapsed=o.now()-g,v},n.merge=function(v,d){if(o.extend(v,d),d.world){v.world=d.world,n.clear(v);for(var g=p.allBodies(v.world),E=0;E<g.length;E++){var S=g[E];l.set(S,!1),S.id=o.nextId()}}},n.clear=function(v){h.clear(v.pairs),c.clear(v.detector)},n._bodiesClearForces=function(v){for(var d=v.length,g=0;g<d;g++){var E=v[g];E.force.x=0,E.force.y=0,E.torque=0}},n._bodiesApplyGravity=function(v,d){var g=typeof d.scale<"u"?d.scale:.001,E=v.length;if(!(d.x===0&&d.y===0||g===0))for(var S=0;S<E;S++){var A=v[S];A.isStatic||A.isSleeping||(A.force.y+=A.mass*d.y*g,A.force.x+=A.mass*d.x*g)}},n._bodiesUpdate=function(v,d){for(var g=v.length,E=0;E<g;E++){var S=v[E];S.isStatic||S.isSleeping||m.update(S,d)}},n._bodiesUpdateVelocities=function(v){for(var d=v.length,g=0;g<d;g++)m.updateVelocities(v[g])}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(0),c=r(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(h){var u,p,f,o=h.length;for(u=0;u<o;u++)p=h[u],p.isActive&&(f=p.activeContacts.length,p.collision.parentA.totalContacts+=f,p.collision.parentB.totalContacts+=f)},n.solvePosition=function(h,u,p){var f,o,m,v,d,g,E,S,A=n._positionDampen*(p||1),x=a.clamp(u/a._baseDelta,0,1),M=h.length;for(f=0;f<M;f++)o=h[f],!(!o.isActive||o.isSensor)&&(m=o.collision,v=m.parentA,d=m.parentB,g=m.normal,o.separation=g.x*(d.positionImpulse.x+m.penetration.x-v.positionImpulse.x)+g.y*(d.positionImpulse.y+m.penetration.y-v.positionImpulse.y));for(f=0;f<M;f++)o=h[f],!(!o.isActive||o.isSensor)&&(m=o.collision,v=m.parentA,d=m.parentB,g=m.normal,S=o.separation-o.slop*x,(v.isStatic||d.isStatic)&&(S*=2),v.isStatic||v.isSleeping||(E=A/v.totalContacts,v.positionImpulse.x+=g.x*S*E,v.positionImpulse.y+=g.y*S*E),d.isStatic||d.isSleeping||(E=A/d.totalContacts,d.positionImpulse.x-=g.x*S*E,d.positionImpulse.y-=g.y*S*E))},n.postSolvePosition=function(h){for(var u=n._positionWarming,p=h.length,f=l.translate,o=c.update,m=0;m<p;m++){var v=h[m],d=v.positionImpulse,g=d.x,E=d.y,S=v.velocity;if(v.totalContacts=0,g!==0||E!==0){for(var A=0;A<v.parts.length;A++){var x=v.parts[A];f(x.vertices,d),o(x.bounds,x.vertices,S),x.position.x+=g,x.position.y+=E}v.positionPrev.x+=g,v.positionPrev.y+=E,g*S.x+E*S.y<0?(d.x=0,d.y=0):(d.x*=u,d.y*=u)}}},n.preSolveVelocity=function(h){var u=h.length,p,f;for(p=0;p<u;p++){var o=h[p];if(!(!o.isActive||o.isSensor)){var m=o.activeContacts,v=m.length,d=o.collision,g=d.parentA,E=d.parentB,S=d.normal,A=d.tangent;for(f=0;f<v;f++){var x=m[f],M=x.vertex,T=x.normalImpulse,b=x.tangentImpulse;if(T!==0||b!==0){var _=S.x*T+A.x*b,y=S.y*T+A.y*b;g.isStatic||g.isSleeping||(g.positionPrev.x+=_*g.inverseMass,g.positionPrev.y+=y*g.inverseMass,g.anglePrev+=g.inverseInertia*((M.x-g.position.x)*y-(M.y-g.position.y)*_)),E.isStatic||E.isSleeping||(E.positionPrev.x-=_*E.inverseMass,E.positionPrev.y-=y*E.inverseMass,E.anglePrev-=E.inverseInertia*((M.x-E.position.x)*y-(M.y-E.position.y)*_))}}}}},n.solveVelocity=function(h,u){var p=u/a._baseDelta,f=p*p,o=f*p,m=-n._restingThresh*p,v=n._restingThreshTangent,d=n._frictionNormalMultiplier*p,g=n._frictionMaxStatic,E=h.length,S,A,x,M;for(x=0;x<E;x++){var T=h[x];if(!(!T.isActive||T.isSensor)){var b=T.collision,_=b.parentA,y=b.parentB,R=_.velocity,P=y.velocity,N=b.normal.x,D=b.normal.y,U=b.tangent.x,F=b.tangent.y,O=T.activeContacts,G=O.length,Y=1/G,K=_.inverseMass+y.inverseMass,Z=T.friction*T.frictionStatic*d;for(R.x=_.position.x-_.positionPrev.x,R.y=_.position.y-_.positionPrev.y,P.x=y.position.x-y.positionPrev.x,P.y=y.position.y-y.positionPrev.y,_.angularVelocity=_.angle-_.anglePrev,y.angularVelocity=y.angle-y.anglePrev,M=0;M<G;M++){var j=O[M],k=j.vertex,$=k.x-_.position.x,ne=k.y-_.position.y,ae=k.x-y.position.x,ue=k.y-y.position.y,ge=R.x-ne*_.angularVelocity,we=R.y+$*_.angularVelocity,ye=P.x-ue*y.angularVelocity,ze=P.y+ae*y.angularVelocity,H=ge-ye,ot=we-ze,ve=N*H+D*ot,xe=U*H+F*ot,pe=T.separation+ve,qe=Math.min(pe,1);qe=pe<0?0:qe;var Ce=qe*Z;xe<-Ce||xe>Ce?(A=xe>0?xe:-xe,S=T.friction*(xe>0?1:-1)*o,S<-A?S=-A:S>A&&(S=A)):(S=xe,A=g);var L=$*D-ne*N,w=ae*D-ue*N,V=Y/(K+_.inverseInertia*L*L+y.inverseInertia*w*w),J=(1+T.restitution)*ve*V;if(S*=V,ve<m)j.normalImpulse=0;else{var Q=j.normalImpulse;j.normalImpulse+=J,j.normalImpulse>0&&(j.normalImpulse=0),J=j.normalImpulse-Q}if(xe<-v||xe>v)j.tangentImpulse=0;else{var te=j.tangentImpulse;j.tangentImpulse+=S,j.tangentImpulse<-A&&(j.tangentImpulse=-A),j.tangentImpulse>A&&(j.tangentImpulse=A),S=j.tangentImpulse-te}var de=N*J+U*S,se=D*J+F*S;_.isStatic||_.isSleeping||(_.positionPrev.x+=de*_.inverseMass,_.positionPrev.y+=se*_.inverseMass,_.anglePrev+=($*se-ne*de)*_.inverseInertia),y.isStatic||y.isSleeping||(y.positionPrev.x-=de*y.inverseMass,y.positionPrev.y-=se*y.inverseMass,y.anglePrev-=(ae*se-ue*de)*y.inverseInertia)}}}}})()},function(t,i,r){var n={};t.exports=n;var l=r(9),a=r(0);(function(){n.create=function(c){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},n.update=function(c,h,u){var p=c.list,f=p.length,o=c.table,m=h.length,v=c.collisionStart,d=c.collisionEnd,g=c.collisionActive,E,S,A,x;for(v.length=0,d.length=0,g.length=0,x=0;x<f;x++)p[x].confirmedActive=!1;for(x=0;x<m;x++)E=h[x],A=E.pair,A?(A.isActive?g.push(A):v.push(A),l.update(A,E,u),A.confirmedActive=!0):(A=l.create(E,u),o[A.id]=A,v.push(A),p.push(A));var M=[];for(f=p.length,x=0;x<f;x++)A=p[x],A.confirmedActive||(l.setActive(A,!1,u),d.push(A),!A.collision.bodyA.isSleeping&&!A.collision.bodyB.isSleeping&&M.push(x));for(x=0;x<M.length;x++)S=M[x]-x,A=p[S],p.splice(S,1),delete o[A.id]},n.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()},function(t,i,r){var n=t.exports=r(21);n.Axes=r(11),n.Bodies=r(12),n.Body=r(4),n.Bounds=r(1),n.Collision=r(8),n.Common=r(0),n.Composite=r(6),n.Composites=r(22),n.Constraint=r(10),n.Contact=r(16),n.Detector=r(13),n.Engine=r(17),n.Events=r(5),n.Grid=r(23),n.Mouse=r(14),n.MouseConstraint=r(24),n.Pair=r(9),n.Pairs=r(19),n.Plugin=r(15),n.Query=r(25),n.Render=r(26),n.Resolver=r(18),n.Runner=r(27),n.SAT=r(28),n.Sleeping=r(7),n.Svg=r(29),n.Vector=r(2),n.Vertices=r(3),n.World=r(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,i,r){var n={};t.exports=n;var l=r(15),a=r(0);(function(){n.name="matter-js",n.version="0.19.0",n.uses=[],n.used=[],n.use=function(){l.use(n,Array.prototype.slice.call(arguments))},n.before=function(c,h){return c=c.replace(/^Matter./,""),a.chainPathBefore(n,c,h)},n.after=function(c,h){return c=c.replace(/^Matter./,""),a.chainPathAfter(n,c,h)}})()},function(t,i,r){var n={};t.exports=n;var l=r(6),a=r(10),c=r(0),h=r(4),u=r(12),p=c.deprecated;(function(){n.stack=function(f,o,m,v,d,g,E){for(var S=l.create({label:"Stack"}),A=f,x=o,M,T=0,b=0;b<v;b++){for(var _=0,y=0;y<m;y++){var R=E(A,x,y,b,M,T);if(R){var P=R.bounds.max.y-R.bounds.min.y,N=R.bounds.max.x-R.bounds.min.x;P>_&&(_=P),h.translate(R,{x:N*.5,y:P*.5}),A=R.bounds.max.x+d,l.addBody(S,R),M=R,T+=1}else A+=d}x+=_+g,A=f}return S},n.chain=function(f,o,m,v,d,g){for(var E=f.bodies,S=1;S<E.length;S++){var A=E[S-1],x=E[S],M=A.bounds.max.y-A.bounds.min.y,T=A.bounds.max.x-A.bounds.min.x,b=x.bounds.max.y-x.bounds.min.y,_=x.bounds.max.x-x.bounds.min.x,y={bodyA:A,pointA:{x:T*o,y:M*m},bodyB:x,pointB:{x:_*v,y:b*d}},R=c.extend(y,g);l.addConstraint(f,a.create(R))}return f.label+=" Chain",f},n.mesh=function(f,o,m,v,d){var g=f.bodies,E,S,A,x,M;for(E=0;E<m;E++){for(S=1;S<o;S++)A=g[S-1+E*o],x=g[S+E*o],l.addConstraint(f,a.create(c.extend({bodyA:A,bodyB:x},d)));if(E>0)for(S=0;S<o;S++)A=g[S+(E-1)*o],x=g[S+E*o],l.addConstraint(f,a.create(c.extend({bodyA:A,bodyB:x},d))),v&&S>0&&(M=g[S-1+(E-1)*o],l.addConstraint(f,a.create(c.extend({bodyA:M,bodyB:x},d)))),v&&S<o-1&&(M=g[S+1+(E-1)*o],l.addConstraint(f,a.create(c.extend({bodyA:M,bodyB:x},d))))}return f.label+=" Mesh",f},n.pyramid=function(f,o,m,v,d,g,E){return n.stack(f,o,m,v,d,g,function(S,A,x,M,T,b){var _=Math.min(v,Math.ceil(m/2)),y=T?T.bounds.max.x-T.bounds.min.x:0;if(!(M>_)){M=_-M;var R=M,P=m-1-M;if(!(x<R||x>P)){b===1&&h.translate(T,{x:(x+(m%2===1?1:-1))*y,y:0});var N=T?x*y:0;return E(f+N+x*d,A,x,M,T,b)}}})},n.newtonsCradle=function(f,o,m,v,d){for(var g=l.create({label:"Newtons Cradle"}),E=0;E<m;E++){var S=1.9,A=u.circle(f+E*(v*S),o+d,v,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=a.create({pointA:{x:f+E*(v*S),y:o},bodyB:A});l.addBody(g,A),l.addConstraint(g,x)}return g},p(n,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),n.car=function(f,o,m,v,d){var g=h.nextGroup(!0),E=20,S=-m*.5+E,A=m*.5-E,x=0,M=l.create({label:"Car"}),T=u.rectangle(f,o,m,v,{collisionFilter:{group:g},chamfer:{radius:v*.5},density:2e-4}),b=u.circle(f+S,o+x,d,{collisionFilter:{group:g},friction:.8}),_=u.circle(f+A,o+x,d,{collisionFilter:{group:g},friction:.8}),y=a.create({bodyB:T,pointB:{x:S,y:x},bodyA:b,stiffness:1,length:0}),R=a.create({bodyB:T,pointB:{x:A,y:x},bodyA:_,stiffness:1,length:0});return l.addBody(M,T),l.addBody(M,b),l.addBody(M,_),l.addConstraint(M,y),l.addConstraint(M,R),M},p(n,"car","Composites.car ➤ moved to car example"),n.softBody=function(f,o,m,v,d,g,E,S,A,x){A=c.extend({inertia:1/0},A),x=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var M=n.stack(f,o,m,v,d,g,function(T,b){return u.circle(T,b,S,A)});return n.mesh(M,m,v,E,x),M.label="Soft Body",M},p(n,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,i,r){var n={};t.exports=n;var l=r(9),a=r(0),c=a.deprecated;(function(){n.create=function(h){var u={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(u,h)},n.update=function(h,u,p,f){var o,m,v,d=p.world,g=h.buckets,E,S,A=!1;for(o=0;o<u.length;o++){var x=u[o];if(!(x.isSleeping&&!f)&&!(d.bounds&&(x.bounds.max.x<d.bounds.min.x||x.bounds.min.x>d.bounds.max.x||x.bounds.max.y<d.bounds.min.y||x.bounds.min.y>d.bounds.max.y))){var M=n._getRegion(h,x);if(!x.region||M.id!==x.region.id||f){(!x.region||f)&&(x.region=M);var T=n._regionUnion(M,x.region);for(m=T.startCol;m<=T.endCol;m++)for(v=T.startRow;v<=T.endRow;v++){S=n._getBucketId(m,v),E=g[S];var b=m>=M.startCol&&m<=M.endCol&&v>=M.startRow&&v<=M.endRow,_=m>=x.region.startCol&&m<=x.region.endCol&&v>=x.region.startRow&&v<=x.region.endRow;!b&&_&&_&&E&&n._bucketRemoveBody(h,E,x),(x.region===M||b&&!_||f)&&(E||(E=n._createBucket(g,S)),n._bucketAddBody(h,E,x))}x.region=M,A=!0}}}A&&(h.pairsList=n._createActivePairsList(h))},c(n,"update","Grid.update ➤ replaced by Matter.Detector"),n.clear=function(h){h.buckets={},h.pairs={},h.pairsList=[]},c(n,"clear","Grid.clear ➤ replaced by Matter.Detector"),n._regionUnion=function(h,u){var p=Math.min(h.startCol,u.startCol),f=Math.max(h.endCol,u.endCol),o=Math.min(h.startRow,u.startRow),m=Math.max(h.endRow,u.endRow);return n._createRegion(p,f,o,m)},n._getRegion=function(h,u){var p=u.bounds,f=Math.floor(p.min.x/h.bucketWidth),o=Math.floor(p.max.x/h.bucketWidth),m=Math.floor(p.min.y/h.bucketHeight),v=Math.floor(p.max.y/h.bucketHeight);return n._createRegion(f,o,m,v)},n._createRegion=function(h,u,p,f){return{id:h+","+u+","+p+","+f,startCol:h,endCol:u,startRow:p,endRow:f}},n._getBucketId=function(h,u){return"C"+h+"R"+u},n._createBucket=function(h,u){var p=h[u]=[];return p},n._bucketAddBody=function(h,u,p){var f=h.pairs,o=l.id,m=u.length,v;for(v=0;v<m;v++){var d=u[v];if(!(p.id===d.id||p.isStatic&&d.isStatic)){var g=o(p,d),E=f[g];E?E[2]+=1:f[g]=[p,d,1]}}u.push(p)},n._bucketRemoveBody=function(h,u,p){var f=h.pairs,o=l.id,m;u.splice(a.indexOf(u,p),1);var v=u.length;for(m=0;m<v;m++){var d=f[o(p,u[m])];d&&(d[2]-=1)}},n._createActivePairsList=function(h){var u,p=h.pairs,f=a.keys(p),o=f.length,m=[],v;for(v=0;v<o;v++)u=p[f[v]],u[2]>0?m.push(u):delete p[f[v]];return m}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(7),c=r(14),h=r(5),u=r(13),p=r(10),f=r(6),o=r(0),m=r(1);(function(){n.create=function(v,d){var g=(v?v.mouse:null)||(d?d.mouse:null);g||(v&&v.render&&v.render.canvas?g=c.create(v.render.canvas):d&&d.element?g=c.create(d.element):(g=c.create(),o.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=p.create({label:"Mouse Constraint",pointA:g.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),S={type:"mouseConstraint",mouse:g,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},A=o.extend(S,d);return h.on(v,"beforeUpdate",function(){var x=f.allBodies(v.world);n.update(A,x),n._triggerEvents(A)}),A},n.update=function(v,d){var g=v.mouse,E=v.constraint,S=v.body;if(g.button===0){if(E.bodyB)a.set(E.bodyB,!1),E.pointA=g.position;else for(var A=0;A<d.length;A++)if(S=d[A],m.contains(S.bounds,g.position)&&u.canCollide(S.collisionFilter,v.collisionFilter))for(var x=S.parts.length>1?1:0;x<S.parts.length;x++){var M=S.parts[x];if(l.contains(M.vertices,g.position)){E.pointA=g.position,E.bodyB=v.body=S,E.pointB={x:g.position.x-S.position.x,y:g.position.y-S.position.y},E.angleB=S.angle,a.set(S,!1),h.trigger(v,"startdrag",{mouse:g,body:S});break}}}else E.bodyB=v.body=null,E.pointB=null,S&&h.trigger(v,"enddrag",{mouse:g,body:S})},n._triggerEvents=function(v){var d=v.mouse,g=d.sourceEvents;g.mousemove&&h.trigger(v,"mousemove",{mouse:d}),g.mousedown&&h.trigger(v,"mousedown",{mouse:d}),g.mouseup&&h.trigger(v,"mouseup",{mouse:d}),c.clearSourceEvents(d)}})()},function(t,i,r){var n={};t.exports=n;var l=r(2),a=r(8),c=r(1),h=r(12),u=r(3);(function(){n.collides=function(p,f){for(var o=[],m=f.length,v=p.bounds,d=a.collides,g=c.overlaps,E=0;E<m;E++){var S=f[E],A=S.parts.length,x=A===1?0:1;if(g(S.bounds,v))for(var M=x;M<A;M++){var T=S.parts[M];if(g(T.bounds,v)){var b=d(T,p);if(b){o.push(b);break}}}}return o},n.ray=function(p,f,o,m){m=m||1e-100;for(var v=l.angle(f,o),d=l.magnitude(l.sub(f,o)),g=(o.x+f.x)*.5,E=(o.y+f.y)*.5,S=h.rectangle(g,E,d,m,{angle:v}),A=n.collides(S,p),x=0;x<A.length;x+=1){var M=A[x];M.body=M.bodyB=M.bodyA}return A},n.region=function(p,f,o){for(var m=[],v=0;v<p.length;v++){var d=p[v],g=c.overlaps(d.bounds,f);(g&&!o||!g&&o)&&m.push(d)}return m},n.point=function(p,f){for(var o=[],m=0;m<p.length;m++){var v=p[m];if(c.contains(v.bounds,f))for(var d=v.parts.length===1?0:1;d<v.parts.length;d++){var g=v.parts[d];if(c.contains(g.bounds,f)&&u.contains(g.vertices,f)){o.push(v);break}}}return o}})()},function(t,i,r){var n={};t.exports=n;var l=r(4),a=r(0),c=r(6),h=r(1),u=r(5),p=r(2),f=r(14);(function(){var o,m;typeof window<"u"&&(o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(a.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(x){var M={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},T=a.extend(M,x);return T.canvas&&(T.canvas.width=T.options.width||T.canvas.width,T.canvas.height=T.options.height||T.canvas.height),T.mouse=x.mouse,T.engine=x.engine,T.canvas=T.canvas||g(T.options.width,T.options.height),T.context=T.canvas.getContext("2d"),T.textures={},T.bounds=T.bounds||{min:{x:0,y:0},max:{x:T.canvas.width,y:T.canvas.height}},T.controller=n,T.options.showBroadphase=!1,T.options.pixelRatio!==1&&n.setPixelRatio(T,T.options.pixelRatio),a.isElement(T.element)&&T.element.appendChild(T.canvas),T},n.run=function(x){(function M(T){x.frameRequestId=o(M),v(x,T),n.world(x,T),(x.options.showStats||x.options.showDebug)&&n.stats(x,x.context,T),(x.options.showPerformance||x.options.showDebug)&&n.performance(x,x.context,T)})()},n.stop=function(x){m(x.frameRequestId)},n.setPixelRatio=function(x,M){var T=x.options,b=x.canvas;M==="auto"&&(M=E(b)),T.pixelRatio=M,b.setAttribute("data-pixel-ratio",M),b.width=T.width*M,b.height=T.height*M,b.style.width=T.width+"px",b.style.height=T.height+"px"},n.lookAt=function(x,M,T,b){b=typeof b<"u"?b:!0,M=a.isArray(M)?M:[M],T=T||{x:0,y:0};for(var _={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},y=0;y<M.length;y+=1){var R=M[y],P=R.bounds?R.bounds.min:R.min||R.position||R,N=R.bounds?R.bounds.max:R.max||R.position||R;P&&N&&(P.x<_.min.x&&(_.min.x=P.x),N.x>_.max.x&&(_.max.x=N.x),P.y<_.min.y&&(_.min.y=P.y),N.y>_.max.y&&(_.max.y=N.y))}var D=_.max.x-_.min.x+2*T.x,U=_.max.y-_.min.y+2*T.y,F=x.canvas.height,O=x.canvas.width,G=O/F,Y=D/U,K=1,Z=1;Y>G?Z=Y/G:K=G/Y,x.options.hasBounds=!0,x.bounds.min.x=_.min.x,x.bounds.max.x=_.min.x+D*K,x.bounds.min.y=_.min.y,x.bounds.max.y=_.min.y+U*Z,b&&(x.bounds.min.x+=D*.5-D*K*.5,x.bounds.max.x+=D*.5-D*K*.5,x.bounds.min.y+=U*.5-U*Z*.5,x.bounds.max.y+=U*.5-U*Z*.5),x.bounds.min.x-=T.x,x.bounds.max.x-=T.x,x.bounds.min.y-=T.y,x.bounds.max.y-=T.y,x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),f.setOffset(x.mouse,x.bounds.min))},n.startViewTransform=function(x){var M=x.bounds.max.x-x.bounds.min.x,T=x.bounds.max.y-x.bounds.min.y,b=M/x.options.width,_=T/x.options.height;x.context.setTransform(x.options.pixelRatio/b,0,0,x.options.pixelRatio/_,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},n.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},n.world=function(x,M){var T=a.now(),b=x.engine,_=b.world,y=x.canvas,R=x.context,P=x.options,N=x.timing,D=c.allBodies(_),U=c.allConstraints(_),F=P.wireframes?P.wireframeBackground:P.background,O=[],G=[],Y,K={timestamp:b.timing.timestamp};if(u.trigger(x,"beforeRender",K),x.currentBackground!==F&&A(x,F),R.globalCompositeOperation="source-in",R.fillStyle="transparent",R.fillRect(0,0,y.width,y.height),R.globalCompositeOperation="source-over",P.hasBounds){for(Y=0;Y<D.length;Y++){var Z=D[Y];h.overlaps(Z.bounds,x.bounds)&&O.push(Z)}for(Y=0;Y<U.length;Y++){var j=U[Y],k=j.bodyA,$=j.bodyB,ne=j.pointA,ae=j.pointB;k&&(ne=p.add(k.position,j.pointA)),$&&(ae=p.add($.position,j.pointB)),!(!ne||!ae)&&(h.contains(x.bounds,ne)||h.contains(x.bounds,ae))&&G.push(j)}n.startViewTransform(x),x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),f.setOffset(x.mouse,x.bounds.min))}else G=U,O=D,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!P.wireframes||b.enableSleeping&&P.showSleeping?n.bodies(x,O,R):(P.showConvexHulls&&n.bodyConvexHulls(x,O,R),n.bodyWireframes(x,O,R)),P.showBounds&&n.bodyBounds(x,O,R),(P.showAxes||P.showAngleIndicator)&&n.bodyAxes(x,O,R),P.showPositions&&n.bodyPositions(x,O,R),P.showVelocity&&n.bodyVelocity(x,O,R),P.showIds&&n.bodyIds(x,O,R),P.showSeparations&&n.separations(x,b.pairs.list,R),P.showCollisions&&n.collisions(x,b.pairs.list,R),P.showVertexNumbers&&n.vertexNumbers(x,O,R),P.showMousePosition&&n.mousePosition(x,x.mouse,R),n.constraints(G,R),P.hasBounds&&n.endViewTransform(x),u.trigger(x,"afterRender",K),N.lastElapsed=a.now()-T},n.stats=function(x,M,T){for(var b=x.engine,_=b.world,y=c.allBodies(_),R=0,P=55,N=44,D=0,U=0,F=0;F<y.length;F+=1)R+=y[F].parts.length;var O={Part:R,Body:y.length,Cons:c.allConstraints(_).length,Comp:c.allComposites(_).length,Pair:b.pairs.list.length};M.fillStyle="#0e0f19",M.fillRect(D,U,P*5.5,N),M.font="12px Arial",M.textBaseline="top",M.textAlign="right";for(var G in O){var Y=O[G];M.fillStyle="#aaa",M.fillText(G,D+P,U+8),M.fillStyle="#eee",M.fillText(Y,D+P,U+26),D+=P}},n.performance=function(x,M){var T=x.engine,b=x.timing,_=b.deltaHistory,y=b.elapsedHistory,R=b.timestampElapsedHistory,P=b.engineDeltaHistory,N=b.engineElapsedHistory,D=T.timing.lastDelta,U=d(_),F=d(y),O=d(P),G=d(N),Y=d(R),K=Y/U||0,Z=1e3/U||0,j=4,k=12,$=60,ne=34,ae=10,ue=69;M.fillStyle="#0e0f19",M.fillRect(0,50,k*4+$*5+22,ne),n.status(M,ae,ue,$,j,_.length,Math.round(Z)+" fps",Z/n._goodFps,function(ge){return _[ge]/U-1}),n.status(M,ae+k+$,ue,$,j,P.length,D.toFixed(2)+" dt",n._goodDelta/D,function(ge){return P[ge]/O-1}),n.status(M,ae+(k+$)*2,ue,$,j,N.length,G.toFixed(2)+" ut",1-G/n._goodFps,function(ge){return N[ge]/G-1}),n.status(M,ae+(k+$)*3,ue,$,j,y.length,F.toFixed(2)+" rt",1-F/n._goodFps,function(ge){return y[ge]/F-1}),n.status(M,ae+(k+$)*4,ue,$,j,R.length,K.toFixed(2)+" x",K*K*K,function(ge){return(R[ge]/_[ge]/K||0)-1})},n.status=function(x,M,T,b,_,y,R,P,N){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(M,T+7,b,1),x.beginPath(),x.moveTo(M,T+7-_*a.clamp(.4*N(0),-2,2));for(var D=0;D<b;D+=1)x.lineTo(M+D,T+7-(D<y?_*a.clamp(.4*N(D),-2,2):0));x.stroke(),x.fillStyle="hsl("+a.clamp(25+95*P,0,120)+",100%,60%)",x.fillRect(M,T-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(R,M+b,T-5)},n.constraints=function(x,M){for(var T=M,b=0;b<x.length;b++){var _=x[b];if(!(!_.render.visible||!_.pointA||!_.pointB)){var y=_.bodyA,R=_.bodyB,P,N;if(y?P=p.add(y.position,_.pointA):P=_.pointA,_.render.type==="pin")T.beginPath(),T.arc(P.x,P.y,3,0,2*Math.PI),T.closePath();else{if(R?N=p.add(R.position,_.pointB):N=_.pointB,T.beginPath(),T.moveTo(P.x,P.y),_.render.type==="spring")for(var D=p.sub(N,P),U=p.perp(p.normalise(D)),F=Math.ceil(a.clamp(_.length/5,12,20)),O,G=1;G<F;G+=1)O=G%2===0?1:-1,T.lineTo(P.x+D.x*(G/F)+U.x*O*4,P.y+D.y*(G/F)+U.y*O*4);T.lineTo(N.x,N.y)}_.render.lineWidth&&(T.lineWidth=_.render.lineWidth,T.strokeStyle=_.render.strokeStyle,T.stroke()),_.render.anchors&&(T.fillStyle=_.render.strokeStyle,T.beginPath(),T.arc(P.x,P.y,3,0,2*Math.PI),T.arc(N.x,N.y,3,0,2*Math.PI),T.closePath(),T.fill())}}},n.bodies=function(x,M,T){var b=T;x.engine;var _=x.options,y=_.showInternalEdges||!_.wireframes,R,P,N,D;for(N=0;N<M.length;N++)if(R=M[N],!!R.render.visible){for(D=R.parts.length>1?1:0;D<R.parts.length;D++)if(P=R.parts[D],!!P.render.visible){if(_.showSleeping&&R.isSleeping?b.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(b.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!_.wireframes){var U=P.render.sprite,F=S(x,U.texture);b.translate(P.position.x,P.position.y),b.rotate(P.angle),b.drawImage(F,F.width*-U.xOffset*U.xScale,F.height*-U.yOffset*U.yScale,F.width*U.xScale,F.height*U.yScale),b.rotate(-P.angle),b.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)b.beginPath(),b.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(P.vertices[0].x,P.vertices[0].y);for(var O=1;O<P.vertices.length;O++)!P.vertices[O-1].isInternal||y?b.lineTo(P.vertices[O].x,P.vertices[O].y):b.moveTo(P.vertices[O].x,P.vertices[O].y),P.vertices[O].isInternal&&!y&&b.moveTo(P.vertices[(O+1)%P.vertices.length].x,P.vertices[(O+1)%P.vertices.length].y);b.lineTo(P.vertices[0].x,P.vertices[0].y),b.closePath()}_.wireframes?(b.lineWidth=1,b.strokeStyle="#bbb",b.stroke()):(b.fillStyle=P.render.fillStyle,P.render.lineWidth&&(b.lineWidth=P.render.lineWidth,b.strokeStyle=P.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},n.bodyWireframes=function(x,M,T){var b=T,_=x.options.showInternalEdges,y,R,P,N,D;for(b.beginPath(),P=0;P<M.length;P++)if(y=M[P],!!y.render.visible)for(D=y.parts.length>1?1:0;D<y.parts.length;D++){for(R=y.parts[D],b.moveTo(R.vertices[0].x,R.vertices[0].y),N=1;N<R.vertices.length;N++)!R.vertices[N-1].isInternal||_?b.lineTo(R.vertices[N].x,R.vertices[N].y):b.moveTo(R.vertices[N].x,R.vertices[N].y),R.vertices[N].isInternal&&!_&&b.moveTo(R.vertices[(N+1)%R.vertices.length].x,R.vertices[(N+1)%R.vertices.length].y);b.lineTo(R.vertices[0].x,R.vertices[0].y)}b.lineWidth=1,b.strokeStyle="#bbb",b.stroke()},n.bodyConvexHulls=function(x,M,T){var b=T,_,y,R;for(b.beginPath(),y=0;y<M.length;y++)if(_=M[y],!(!_.render.visible||_.parts.length===1)){for(b.moveTo(_.vertices[0].x,_.vertices[0].y),R=1;R<_.vertices.length;R++)b.lineTo(_.vertices[R].x,_.vertices[R].y);b.lineTo(_.vertices[0].x,_.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},n.vertexNumbers=function(x,M,T){var b=T,_,y,R;for(_=0;_<M.length;_++){var P=M[_].parts;for(R=P.length>1?1:0;R<P.length;R++){var N=P[R];for(y=0;y<N.vertices.length;y++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(_+"_"+y,N.position.x+(N.vertices[y].x-N.position.x)*.8,N.position.y+(N.vertices[y].y-N.position.y)*.8)}}},n.mousePosition=function(x,M,T){var b=T;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(M.position.x+"  "+M.position.y,M.position.x+5,M.position.y-5)},n.bodyBounds=function(x,M,T){var b=T;x.engine;var _=x.options;b.beginPath();for(var y=0;y<M.length;y++){var R=M[y];if(R.render.visible)for(var P=M[y].parts,N=P.length>1?1:0;N<P.length;N++){var D=P[N];b.rect(D.bounds.min.x,D.bounds.min.y,D.bounds.max.x-D.bounds.min.x,D.bounds.max.y-D.bounds.min.y)}}_.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},n.bodyAxes=function(x,M,T){var b=T;x.engine;var _=x.options,y,R,P,N;for(b.beginPath(),R=0;R<M.length;R++){var D=M[R],U=D.parts;if(D.render.visible)if(_.showAxes)for(P=U.length>1?1:0;P<U.length;P++)for(y=U[P],N=0;N<y.axes.length;N++){var F=y.axes[N];b.moveTo(y.position.x,y.position.y),b.lineTo(y.position.x+F.x*20,y.position.y+F.y*20)}else for(P=U.length>1?1:0;P<U.length;P++)for(y=U[P],N=0;N<y.axes.length;N++)b.moveTo(y.position.x,y.position.y),b.lineTo((y.vertices[0].x+y.vertices[y.vertices.length-1].x)/2,(y.vertices[0].y+y.vertices[y.vertices.length-1].y)/2)}_.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},n.bodyPositions=function(x,M,T){var b=T;x.engine;var _=x.options,y,R,P,N;for(b.beginPath(),P=0;P<M.length;P++)if(y=M[P],!!y.render.visible)for(N=0;N<y.parts.length;N++)R=y.parts[N],b.arc(R.position.x,R.position.y,3,0,2*Math.PI,!1),b.closePath();for(_.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),P=0;P<M.length;P++)y=M[P],y.render.visible&&(b.arc(y.positionPrev.x,y.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},n.bodyVelocity=function(x,M,T){var b=T;b.beginPath();for(var _=0;_<M.length;_++){var y=M[_];if(y.render.visible){var R=l.getVelocity(y);b.moveTo(y.position.x,y.position.y),b.lineTo(y.position.x+R.x,y.position.y+R.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},n.bodyIds=function(x,M,T){var b=T,_,y;for(_=0;_<M.length;_++)if(M[_].render.visible){var R=M[_].parts;for(y=R.length>1?1:0;y<R.length;y++){var P=R[y];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(P.id,P.position.x+10,P.position.y-10)}}},n.collisions=function(x,M,T){var b=T,_=x.options,y,R,P,N;for(b.beginPath(),P=0;P<M.length;P++)if(y=M[P],!!y.isActive)for(R=y.collision,N=0;N<y.activeContacts.length;N++){var D=y.activeContacts[N],U=D.vertex;b.rect(U.x-1.5,U.y-1.5,3.5,3.5)}for(_.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),P=0;P<M.length;P++)if(y=M[P],!!y.isActive&&(R=y.collision,y.activeContacts.length>0)){var F=y.activeContacts[0].vertex.x,O=y.activeContacts[0].vertex.y;y.activeContacts.length===2&&(F=(y.activeContacts[0].vertex.x+y.activeContacts[1].vertex.x)/2,O=(y.activeContacts[0].vertex.y+y.activeContacts[1].vertex.y)/2),R.bodyB===R.supports[0].body||R.bodyA.isStatic===!0?b.moveTo(F-R.normal.x*8,O-R.normal.y*8):b.moveTo(F+R.normal.x*8,O+R.normal.y*8),b.lineTo(F,O)}_.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},n.separations=function(x,M,T){var b=T,_=x.options,y,R,P,N,D;for(b.beginPath(),D=0;D<M.length;D++)if(y=M[D],!!y.isActive){R=y.collision,P=R.bodyA,N=R.bodyB;var U=1;!N.isStatic&&!P.isStatic&&(U=.5),N.isStatic&&(U=0),b.moveTo(N.position.x,N.position.y),b.lineTo(N.position.x-R.penetration.x*U,N.position.y-R.penetration.y*U),U=1,!N.isStatic&&!P.isStatic&&(U=.5),P.isStatic&&(U=0),b.moveTo(P.position.x,P.position.y),b.lineTo(P.position.x+R.penetration.x*U,P.position.y+R.penetration.y*U)}_.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},n.inspector=function(x,M){x.engine;var T=x.selected,b=x.render,_=b.options,y;if(_.hasBounds){var R=b.bounds.max.x-b.bounds.min.x,P=b.bounds.max.y-b.bounds.min.y,N=R/b.options.width,D=P/b.options.height;M.scale(1/N,1/D),M.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var U=0;U<T.length;U++){var F=T[U].data;switch(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.9)",M.setLineDash([1,2]),F.type){case"body":y=F.bounds,M.beginPath(),M.rect(Math.floor(y.min.x-3),Math.floor(y.min.y-3),Math.floor(y.max.x-y.min.x+6),Math.floor(y.max.y-y.min.y+6)),M.closePath(),M.stroke();break;case"constraint":var O=F.pointA;F.bodyA&&(O=F.pointB),M.beginPath(),M.arc(O.x,O.y,10,0,2*Math.PI),M.closePath(),M.stroke();break}M.setLineDash([]),M.translate(-.5,-.5)}x.selectStart!==null&&(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.6)",M.fillStyle="rgba(255,165,0,0.1)",y=x.selectBounds,M.beginPath(),M.rect(Math.floor(y.min.x),Math.floor(y.min.y),Math.floor(y.max.x-y.min.x),Math.floor(y.max.y-y.min.y)),M.closePath(),M.stroke(),M.fill(),M.translate(-.5,-.5)),_.hasBounds&&M.setTransform(1,0,0,1,0,0)};var v=function(x,M){var T=x.engine,b=x.timing,_=b.historySize,y=T.timing.timestamp;b.delta=M-b.lastTime||n._goodDelta,b.lastTime=M,b.timestampElapsed=y-b.lastTimestamp||0,b.lastTimestamp=y,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,_),b.engineDeltaHistory.unshift(T.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,_),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,_),b.engineElapsedHistory.unshift(T.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,_),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,_)},d=function(x){for(var M=0,T=0;T<x.length;T+=1)M+=x[T];return M/x.length||0},g=function(x,M){var T=document.createElement("canvas");return T.width=x,T.height=M,T.oncontextmenu=function(){return!1},T.onselectstart=function(){return!1},T},E=function(x){var M=x.getContext("2d"),T=window.devicePixelRatio||1,b=M.webkitBackingStorePixelRatio||M.mozBackingStorePixelRatio||M.msBackingStorePixelRatio||M.oBackingStorePixelRatio||M.backingStorePixelRatio||1;return T/b},S=function(x,M){var T=x.textures[M];return T||(T=x.textures[M]=new Image,T.src=M,T)},A=function(x,M){var T=M;/(jpg|gif|png)$/.test(M)&&(T="url("+M+")"),x.canvas.style.background=T,x.canvas.style.backgroundSize="contain",x.currentBackground=M}})()},function(t,i,r){var n={};t.exports=n;var l=r(5),a=r(17),c=r(0);(function(){var h,u;if(typeof window<"u"&&(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,u=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!h){var p;h=function(f){p=setTimeout(function(){f(c.now())},1e3/60)},u=function(){clearTimeout(p)}}n.create=function(f){var o={fps:60,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,frameRequestId:null,isFixed:!1,enabled:!0},m=c.extend(o,f);return m.delta=m.delta||1e3/m.fps,m.deltaMin=m.deltaMin||1e3/m.fps,m.deltaMax=m.deltaMax||1e3/(m.fps*.5),m.fps=1e3/m.delta,m},n.run=function(f,o){return typeof f.positionIterations<"u"&&(o=f,f=n.create()),function m(v){f.frameRequestId=h(m),v&&f.enabled&&n.tick(f,o,v)}(),f},n.tick=function(f,o,m){var v=o.timing,d;f.isFixed?d=f.delta:(d=m-f.timePrev||f.delta,f.timePrev=m,f.deltaHistory.push(d),f.deltaHistory=f.deltaHistory.slice(-f.deltaSampleSize),d=Math.min.apply(null,f.deltaHistory),d=d<f.deltaMin?f.deltaMin:d,d=d>f.deltaMax?f.deltaMax:d,f.delta=d);var g={timestamp:v.timestamp};l.trigger(f,"beforeTick",g),f.frameCounter+=1,m-f.counterTimestamp>=1e3&&(f.fps=f.frameCounter*((m-f.counterTimestamp)/1e3),f.counterTimestamp=m,f.frameCounter=0),l.trigger(f,"tick",g),l.trigger(f,"beforeUpdate",g),a.update(o,d),l.trigger(f,"afterUpdate",g),l.trigger(f,"afterTick",g)},n.stop=function(f){u(f.frameRequestId)},n.start=function(f,o){n.run(f,o)}})()},function(t,i,r){var n={};t.exports=n;var l=r(8),a=r(0),c=a.deprecated;(function(){n.collides=function(h,u){return l.collides(h,u)},c(n,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,i,r){var n={};t.exports=n,r(1);var l=r(0);(function(){n.pathToVertices=function(a,c){typeof window<"u"&&!("SVGPathSeg"in window)&&l.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var h,u,p,f,o,m,v,d,g,E,S=[],A,x,M=0,T=0,b=0;c=c||15;var _=function(R,P,N){var D=N%2===1&&N>1;if(!g||R!=g.x||P!=g.y){g&&D?(A=g.x,x=g.y):(A=0,x=0);var U={x:A+R,y:x+P};(D||!g)&&(g=U),S.push(U),T=A+R,b=x+P}},y=function(R){var P=R.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":T=R.x,b=R.y;break;case"H":T=R.x;break;case"V":b=R.y;break}_(T,b,R.pathSegType)}};for(n._svgPathToAbsolute(a),p=a.getTotalLength(),m=[],h=0;h<a.pathSegList.numberOfItems;h+=1)m.push(a.pathSegList.getItem(h));for(v=m.concat();M<p;){if(E=a.getPathSegAtLength(M),o=m[E],o!=d){for(;v.length&&v[0]!=o;)y(v.shift());d=o}switch(o.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=a.getPointAtLength(M),_(f.x,f.y,0);break}M+=c}for(h=0,u=v.length;h<u;++h)y(v[h]);return S},n._svgPathToAbsolute=function(a){for(var c,h,u,p,f,o,m=a.pathSegList,v=0,d=0,g=m.numberOfItems,E=0;E<g;++E){var S=m.getItem(E),A=S.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in S&&(v=S.x),"y"in S&&(d=S.y);else switch("x1"in S&&(u=v+S.x1),"x2"in S&&(f=v+S.x2),"y1"in S&&(p=d+S.y1),"y2"in S&&(o=d+S.y2),"x"in S&&(v+=S.x),"y"in S&&(d+=S.y),A){case"m":m.replaceItem(a.createSVGPathSegMovetoAbs(v,d),E);break;case"l":m.replaceItem(a.createSVGPathSegLinetoAbs(v,d),E);break;case"h":m.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(v),E);break;case"v":m.replaceItem(a.createSVGPathSegLinetoVerticalAbs(d),E);break;case"c":m.replaceItem(a.createSVGPathSegCurvetoCubicAbs(v,d,u,p,f,o),E);break;case"s":m.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(v,d,f,o),E);break;case"q":m.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(v,d,u,p),E);break;case"t":m.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(v,d),E);break;case"a":m.replaceItem(a.createSVGPathSegArcAbs(v,d,S.r1,S.r2,S.angle,S.largeArcFlag,S.sweepFlag),E);break;case"z":case"Z":v=c,d=h;break}(A=="M"||A=="m")&&(c=v,h=d)}}})()},function(t,i,r){var n={};t.exports=n;var l=r(6);r(0),function(){n.create=l.create,n.add=l.add,n.remove=l.remove,n.clear=l.clear,n.addComposite=l.addComposite,n.addBody=l.addBody,n.addConstraint=l.addConstraint}()}])})})(Eo);var Ge=Eo.exports;class tp{constructor(){this.engine=Ge.Engine.create(),this.engine.world.gravity.y=1.5}init(){}update(e){Ge.Engine.update(this.engine,e)}}class rs{constructor(e,t,i){this.sprite=e,this.assetManager=t,this.animationMap=i,this.currentState=null,this.frames=[],this.frameIndex=0,this.accumulator=0,this.fps=10,this.frameDuration=1/this.fps,this.isLooping=!0,this.isPlaying=!1,this.baseScale=.5}play(e,t=10,i=!0){if(this.currentState===e)return;const r=this.animationMap[e];if(!r||r.length===0){console.warn(`Animation state '${e}' not found or empty.`);return}this.currentState=e,this.frames=r,this.frameIndex=0,this.accumulator=0,this.fps=t,this.frameDuration=1/this.fps,this.isLooping=i,this.isPlaying=!0,this.applyCurrentFrame()}setFlipX(e){const t=e?-1:1;this.sprite.scale.x=Math.abs(this.sprite.scale.x)*t}update(e){!this.isPlaying||this.frames.length<=1||(this.accumulator+=e,this.accumulator>=this.frameDuration&&(this.accumulator-=this.frameDuration,this.frameIndex++,this.frameIndex>=this.frames.length&&(this.isLooping?this.frameIndex=0:(this.frameIndex=this.frames.length-1,this.isPlaying=!1)),this.applyCurrentFrame()))}applyCurrentFrame(){const e=this.frames[this.frameIndex],t=this.assetManager.getFrameMaterial(e);if(t){this.sprite.material=t;const i=this.assetManager.atlasMeta[e];if(i){const r=Math.sign(this.sprite.scale.x)||1;this.sprite.scale.set(i.width*this.baseScale*r,i.height*this.baseScale,1)}}}}class np{constructor(e,t,i,r){this.physics=e,this.scene=t,this.input=i,this.assetManager=r,this.body=null,this.sprite=null,this.animator=null,this.isGrounded=!1,this.health=100,this.isHurt=!1,this.hurtTimer=0,this.isAttacking=!1,this.attackTimer=0,this.direction=1,this.speed=4,this.jumpForce=-12}async init(e,t){this.body=Ge.Bodies.rectangle(e,t,40,80,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Ge.Composite.add(this.physics.engine.world,this.body);const i=new Gt(1,1);this.sprite=new vt(i,new Ht({transparent:!0})),this.scene.add(this.sprite);const r={idle:["entities/player.png"],run:["entities/player.png"],jump:["entities/player.png"],fall:["entities/player.png"],attack:["entities/player.png"],hurt:["entities/player.png"],death:["entities/player.png"]};this.animator=new rs(this.sprite,this.assetManager,r),this.animator.baseScale=.35,this.animator.play("idle",8)}update(e){if(!this.body)return;this.isGrounded=Math.abs(this.body.velocity.y)<.1;let t=0,i=!1;this.isHurt||(this.input.isDown("ArrowLeft")||this.input.isDown("KeyA")?(t=-1,i=!0,this.direction=-1,this.animator.setFlipX(!0)):(this.input.isDown("ArrowRight")||this.input.isDown("KeyD"))&&(t=1,i=!0,this.direction=1,this.animator.setFlipX(!1)),Ge.Body.setVelocity(this.body,{x:t*this.speed,y:this.body.velocity.y}),(this.input.isDown("ArrowUp")||this.input.isDown("KeyW")||this.input.isDown("Space"))&&this.isGrounded&&(Ge.Body.setVelocity(this.body,{x:this.body.velocity.x,y:this.jumpForce}),this.isGrounded=!1),this.input.isDown("KeyX")&&!this.isAttacking&&(this.isAttacking=!0,this.attackTimer=.3,Ge.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}))),this.isAttacking&&(this.attackTimer-=e,this.attackTimer<=0&&(this.isAttacking=!1)),this.isHurt&&(this.hurtTimer-=e,this.hurtTimer<=0&&(this.isHurt=!1));let r="idle",n=8;this.health<=0?r="death":this.isHurt?r="hurt":this.isAttacking?(r="attack",n=15):this.isGrounded?i&&(r="run",n=12):this.body.velocity.y<0?r="jump":r="fall",this.animator.play(r,n),this.animator.update(e),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y}takeDamage(e,t){this.isHurt||this.health<=0||(this.health-=e,this.isHurt=!0,this.hurtTimer=.5,Ge.Body.setVelocity(this.body,{x:t*5,y:-5}))}}class ip{constructor(e,t,i){this.physics=e,this.scene=t,this.assetManager=i,this.body=null,this.sprite=null,this.animator=null,this.speed=2,this.direction=1,this.isGrounded=!1,this.health=30,this.isHurt=!1,this.hurtTimer=0}async init(e,t){this.body=Ge.Bodies.rectangle(e,t,50,100,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Ge.Composite.add(this.physics.engine.world,this.body);const i=new Gt(1,1);this.sprite=new vt(i,new Ht({transparent:!0})),this.scene.add(this.sprite);const r={idle:["entities/villain.png"],run:["entities/villain.png"],attack:["entities/villain.png"],hurt:["entities/villain.png"],death:["entities/villain.png"]};this.animator=new rs(this.sprite,this.assetManager,r),this.animator.baseScale=.15,this.animator.play("idle",8)}update(e,t){if(!this.body||this.health<=0)return;if(this.isHurt)this.hurtTimer-=e,this.hurtTimer<=0&&(this.isHurt=!1);else{if(t){const r=t.position.x-this.body.position.x;Math.abs(r)>50?this.direction=Math.sign(r):this.direction=0}Ge.Body.setVelocity(this.body,{x:this.direction*this.speed,y:this.body.velocity.y})}let i="idle";this.health<=0?i="death":this.isHurt?i="hurt":this.direction!==0&&(i="run",this.animator.setFlipX(this.direction<0)),this.animator.play(i,8),this.animator.update(e),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y}takeDamage(e,t){this.isHurt||this.health<=0||(this.health-=e,this.isHurt=!0,this.hurtTimer=.5,Ge.Body.setVelocity(this.body,{x:t*5,y:-5}),this.health<=0&&(this.scene.remove(this.sprite),Ge.Composite.remove(this.physics.engine.world,this.body),this.body=null))}}class rp{constructor(){this.keys={},this.justPressed={},window.addEventListener("keydown",e=>{this.keys[e.code]||(this.justPressed[e.code]=!0),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}init(){}update(){this.justPressed={}}isDown(e){return this.keys[e]===!0}isJustPressed(e){return this.justPressed[e]===!0||this.keys[e]===!0}}class sp{constructor(e){this.scene=e,this.mesh=null,this.count=0,this.dummy=new ft}init(e){this.count=e;const t=new Zd,i=new Gt(2,2);t.index=i.index,t.attributes.position=i.attributes.position,t.attributes.uv=i.attributes.uv;const r=new Ht({color:65535,transparent:!0,opacity:.6});this.mesh=new zd(t,r,this.count);for(let n=0;n<this.count;n++){const l=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,c=(Math.random()-.5)*-50-10;this.dummy.position.set(l,a,c),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}this.scene.add(this.mesh)}update(e){if(!this.mesh)return;const t=Math.sin(e*.001)*.5;this.mesh.position.y+=.2,this.mesh.position.x+=t,this.mesh.updateMatrix()}}class ap{constructor(){this.textureLoader=new qd,this.atlasTexture=null,this.atlasMeta=null,this.materials=new Map}async init(){try{this.atlasTexture=await this.textureLoader.loadAsync("./web/characters_atlas.webp"),this.atlasTexture.magFilter=Ze,this.atlasTexture.minFilter=Ze,this.atlasTexture.colorSpace=rt;const e=await fetch("./atlas_meta.json");if(e.ok)this.atlasMeta=await e.json();else throw new Error(`Failed to load atlas_meta.json: ${e.statusText}`);return await this.loadExternalSprite("entities/player.png"),await this.loadExternalSprite("entities/villain.png"),!0}catch(e){console.error("Asset Manager Initialization Error:",e);const t=document.getElementById("debug-ui");throw t&&(t.innerHTML=`
                    <div style="color:red; background:black; padding:20px; border:2px solid red;">
                        LUMEN FAILED TO LOAD<br><br>
                        Error:<br>${e.message}<br><br>
                        Open browser console for details.
                    </div>
                `),e}}async loadExternalSprite(e){try{const t=await this.textureLoader.loadAsync("./web/"+e);t.magFilter=Ze,t.minFilter=Ze,t.colorSpace=rt,this.atlasMeta[e]={x:0,y:0,width:t.image.width,height:t.image.height};const i=new Ht({map:t,transparent:!0,alphaTest:.1,side:Lt});this.materials.set(e,i)}catch{console.warn("Failed to load external sprite:",e)}}getFrameMaterial(e){if(this.materials.has(e))return this.materials.get(e);const t=this.atlasMeta[e];if(!t)return console.warn(`Frame ${e} not found in atlas.`),null;const i=this.atlasTexture.clone();i.needsUpdate=!0;const r=this.atlasTexture.image.width,n=this.atlasTexture.image.height,l=t.x/r,a=1-(t.y+t.height)/n,c=t.width/r,h=t.height/n;i.offset.set(l,a),i.repeat.set(c,h);const u=new Ht({map:i,transparent:!0,alphaTest:.1,side:Lt});return this.materials.set(e,u),u}}class op{constructor(e){this.physics=e}checkMeleeHit(e,t,i,r){const n=e.body.position.x,l=e.body.position.y,a=t.body.position.x,c=t.body.position.y,h=a-n;return Math.sign(h)===Math.sign(r)&&Math.abs(h)<=i&&Math.abs(c-l)<60}}class lp{constructor(){this.lightPower=0,this.maxLightPower=2,this.hasBlueCore=!1,this.hasGreenCore=!1,this.onLightChanged=null}acquireCore(e){e==="blue"&&!this.hasBlueCore?(this.hasBlueCore=!0,this.lightPower=1,this.notify()):e==="green"&&!this.hasGreenCore&&(this.hasGreenCore=!0,this.lightPower=2,this.notify())}notify(){this.onLightChanged&&this.onLightChanged(this.lightPower)}}class cp{constructor(e,t,i,r="cold_blood"){this.physics=e,this.scene=t,this.assetManager=i,this.type=r,this.body=null,this.sprite=null,this.animator=null,this.speed=1.5,this.direction=-1,this.health=300,this.isHurt=!1,this.hurtTimer=0,this.state="idle",this.stateTimer=0,this.telegraphMesh=null}async init(e,t){this.body=Ge.Bodies.rectangle(e,t,100,150,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Ge.Composite.add(this.physics.engine.world,this.body);const i=new Gt(1,1);this.sprite=new vt(i,new Ht({transparent:!0})),this.scene.add(this.sprite);const r={idle:["entities/villain.png"],run:["entities/villain.png"],attack:["entities/villain.png"],hurt:["entities/villain.png"],death:["entities/villain.png"]};this.animator=new rs(this.sprite,this.assetManager,r),this.animator.baseScale=.25,this.animator.play("idle",8),this.telegraphMesh=new vt(new Gt(150,10),new Ht({color:16711680,transparent:!0,opacity:0})),this.scene.add(this.telegraphMesh)}update(e,t){if(!(!this.body||this.health<=0)){if(this.isHurt&&(this.hurtTimer-=e,this.hurtTimer<=0&&(this.isHurt=!1)),this.stateTimer-=e,this.stateTimer<=0&&this.transitionState(),this.state==="run"&&t){const i=t.position.x-this.body.position.x;Math.abs(i)>80&&(this.direction=Math.sign(i),Ge.Body.setVelocity(this.body,{x:this.direction*this.speed,y:this.body.velocity.y})),this.animator.play("run")}else this.state==="idle"?(Ge.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}),this.animator.play("idle")):this.state==="telegraph"?(Ge.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}),this.telegraphMesh.material.opacity=.5+Math.sin(Date.now()*.02)*.3):this.state==="attack"&&(this.telegraphMesh.material.opacity=0,this.animator.play("attack"));this.animator.setFlipX(this.direction<0),this.animator.update(e),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y,this.telegraphMesh.position.x=this.body.position.x+this.direction*75,this.telegraphMesh.position.y=-this.body.position.y-20}}transitionState(){this.state==="idle"?(this.state="run",this.stateTimer=3):this.state==="run"?(this.state="telegraph",this.stateTimer=1):this.state==="telegraph"?(this.state="attack",this.stateTimer=.5):(this.state="idle",this.stateTimer=1,this.telegraphMesh.material.opacity=0)}takeDamage(e,t){this.isHurt||this.health<=0||(this.health-=e,this.isHurt=!0,this.hurtTimer=.2,this.health<=0&&(this.scene.remove(this.sprite),this.scene.remove(this.telegraphMesh),Ge.Composite.remove(this.physics.engine.world,this.body),this.body=null))}}class up{constructor(e){this.game=e,this.currentBiome="dark"}loadLevel(e){this.currentBiome=e,this.game.environment&&this.game.environment.loadBiome(e).catch(i=>console.error("Failed to load biome visual:",i));for(let i of this.game.platforms)this.game.renderer.scene.remove(i.mesh),Ge.Composite.remove(this.game.physics.engine.world,i.body);this.game.platforms=[];for(let i of this.game.enemies)i.body&&Ge.Composite.remove(this.game.physics.engine.world,i.body),i.sprite&&this.game.renderer.scene.remove(i.sprite);this.game.enemies=[],this.game.boss&&(this.game.boss.body&&Ge.Composite.remove(this.game.physics.engine.world,this.game.boss.body),this.game.boss.sprite&&this.game.renderer.scene.remove(this.game.boss.sprite),this.game.boss.telegraphMesh&&this.game.renderer.scene.remove(this.game.boss.telegraphMesh),this.game.boss=null);let t=2236962;e==="ice"&&(t=8965375),e==="jungle"&&(t=2263074),this.createPlatform(400,500,2e3,40,t),this.createPlatform(600,380,200,20,t),this.createPlatform(900,300,200,20,t),this.createPlatform(1500,300,400,40,t),e==="dark"&&!this.game.light.hasBlueCore?(this.createCore(1e3,250,"blue"),this.spawnEnemy(600,300),this.spawnEnemy(900,200),this.game.ui.showDialogue(["Welcome to the Dark World.","The light has faded.","Find the Blue Core to restore the Ice."])):e==="ice"&&!this.game.light.hasGreenCore?(this.createCore(1200,200,"green"),this.spawnBoss(1e3,300,"cold_blood"),this.game.ui.showDialogue(["The Ice Biome.","Cold Blood guards the Green Core."])):e==="jungle"&&(this.spawnBoss(1e3,300,"overgrowth"),this.game.ui.showDialogue(["The Jungle.","Overgrowth stands in your way.","Defeat it to reveal the truth."]))}async spawnEnemy(e,t){const i=new ip(this.game.physics,this.game.renderer.scene,this.game.assets);await i.init(e,t),this.game.enemies.push(i)}async spawnBoss(e,t,i){this.game.boss=new cp(this.game.physics,this.game.renderer.scene,this.game.assets,i),await this.game.boss.init(e,t)}createPlatform(e,t,i,r,n){const l=Ge.Bodies.rectangle(e,t,i,r,{isStatic:!0});Ge.Composite.add(this.game.physics.engine.world,l);const a=this.game.renderer.createBox(e,t,i,r,n);this.game.platforms.push({body:l,mesh:a})}createCore(e,t,i){const r=i==="blue"?255:65280,n=Ge.Bodies.circle(e,t,20,{isStatic:!0,isSensor:!0,label:`core_${i}`});Ge.Composite.add(this.game.physics.engine.world,n);const l=this.game.renderer.createBox(e,t,40,40,r);this.game.platforms.push({body:n,mesh:l})}update(e){if(!e||!e.body)return;const t=e.body.position.x;this.currentBiome==="dark"&&t>1500?this.game.light.hasBlueCore&&(this.loadLevel("ice"),Ge.Body.setPosition(e.body,{x:100,y:300})):this.currentBiome==="ice"&&t>1500&&this.game.light.hasGreenCore&&(this.loadLevel("jungle"),Ge.Body.setPosition(e.body,{x:100,y:300}))}}class hp{constructor(){this.container=document.createElement("div"),this.container.id="ui-container",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100vw",height:"100vh",pointerEvents:"none",display:"flex",flexDirection:"column",justifyContent:"space-between",fontFamily:"monospace"}),document.body.appendChild(this.container),this.hud=document.createElement("div"),Object.assign(this.hud.style,{padding:"20px",fontSize:"24px",textShadow:"2px 2px 0 #000"}),this.container.appendChild(this.hud),this.dialogueBox=document.createElement("div"),Object.assign(this.dialogueBox.style,{margin:"20px auto",width:"80%",padding:"20px",backgroundColor:"#fff",color:"#000",border:"4px solid #000",borderRadius:"10px",boxShadow:"8px 8px 0 rgba(0,0,0,0.5)",fontSize:"2vw",fontWeight:"bold",display:"none",fontFamily:'"Comic Sans MS", "Chalkboard SE", sans-serif'}),this.container.appendChild(this.dialogueBox),this.overlay=document.createElement("div"),Object.assign(this.overlay.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.8)",display:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"4vw",color:"white"}),this.container.appendChild(this.overlay),this.queue=[],this.isTyping=!1,this.currentText="",this.isPaused=!1,this.isDead=!1,this.isVictory=!1}updateHUD(e,t){e&&(this.hud.innerHTML=`HEALTH: ${Math.max(0,e.health)}/100<br>LIGHT: ${t.lightPower}/2`,e.health<=0&&!this.isDead&&this.showDeathScreen())}showDeathScreen(){this.isDead=!0,this.overlay.style.display="flex",this.overlay.innerHTML=`<div>YOU DIED</div><div style="font-size:2vw; margin-top:20px;">Press 'R' to Restart</div>`}showVictoryScreen(){this.isVictory=!0,this.overlay.style.display="flex",this.overlay.innerHTML='<div>LIGHT RESTORED</div><div style="font-size:2vw; margin-top:20px;">The Dark World is safe.</div>'}togglePause(){this.isDead||this.isVictory||(this.isPaused=!this.isPaused,this.isPaused?(this.overlay.style.display="flex",this.overlay.innerHTML=`<div>PAUSED</div><div style="font-size:2vw; margin-top:20px;">Press 'ESC' or 'P' to Resume</div>`):this.overlay.style.display="none")}showDialogue(e){console.log("showDialogue called with:",e),this.queue.push(...e),!this.isTyping&&this.dialogueBox.style.display==="none"&&this.nextDialogue()}nextDialogue(){if(console.log("nextDialogue called. Queue length:",this.queue.length),this.queue.length===0){console.log("Queue empty. Hiding dialogue box."),this.dialogueBox.style.display="none";return}this.dialogueBox.style.display="block",this.currentText=this.queue.shift(),console.log("Showing text:",this.currentText),this.dialogueBox.innerHTML=this.currentText+" <br><span style='font-size:12px; color:gray'>(Press ENTER)</span>"}handleInput(e){(e.isDown("Escape")||e.isDown("KeyP"))&&!this.pausePressed?(this.pausePressed=!0,this.togglePause()):!e.isDown("Escape")&&!e.isDown("KeyP")&&(this.pausePressed=!1),e.isJustPressed("Enter")&&this.dialogueBox.style.display==="block"?this.enterPressed||(console.log("Enter pressed. Advancing dialogue."),this.enterPressed=!0,this.nextDialogue()):e.isJustPressed("Enter")||(this.enterPressed=!1)}}class fp{constructor(){this.context=null,this.sounds=new Map}init(){const e=window.AudioContext||window.webkitAudioContext;this.context=new e}playHit(){if(!this.context)return;const e=this.context.createOscillator(),t=this.context.createGain();e.connect(t),t.connect(this.context.destination),e.type="square",e.frequency.setValueAtTime(150,this.context.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.context.currentTime+.1),t.gain.setValueAtTime(.3,this.context.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.context.currentTime+.1),e.start(),e.stop(this.context.currentTime+.1)}playJump(){if(!this.context)return;const e=this.context.createOscillator(),t=this.context.createGain();e.connect(t),t.connect(this.context.destination),e.type="sine",e.frequency.setValueAtTime(300,this.context.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.context.currentTime+.15),t.gain.setValueAtTime(.2,this.context.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.context.currentTime+.15),e.start(),e.stop(this.context.currentTime+.15)}}class dp{constructor(e,t){this.scene=e,this.assets=t,this.layers=[],this.group=new fi,this.scene.add(this.group),this.parallaxRates={sky:.05,distant:.1,background:.25,midground:.45,foreground:1.1},this.currentBiome="dark",this.DEBUG_ENV=!1}async init(){try{const e=await fetch("./web/environments/asset_manifest.json");if(e.ok){const t=e.headers.get("content-type");if(t&&t.indexOf("application/json")!==-1)this.manifest=await e.json();else throw new Error("Manifest URL returned non-JSON content (likely a 404 fallback to index.html)")}else throw new Error(`Manifest fetch failed: ${e.status} ${e.statusText}`)}catch(e){console.warn("Failed to load environment manifest. Proceeding with blank background. Error:",e),this.manifest={assets:[]}}}async loadBiome(e){this.currentBiome=e;for(let r of this.layers)this.group.remove(r);this.layers=[];const t=(this.manifest.assets||[]).filter(r=>r.id.startsWith(e));if(e==="dark"?this.scene.background=new He(657946):e==="ice"?this.scene.background=new He(8965375):e==="jungle"&&(this.scene.background=new He(993818)),t.length===0)return;const i={dark_decor_1:{x:-800,y:150,z:-150,scaleY:400,parallax:.12}};for(const r of t)try{const n=`./web/environments/${r.url.replace("./","")}`,l=await this.assets.textureLoader.loadAsync(n);l.colorSpace=rt,l.minFilter=Ze,l.magFilter=Ze;let a=r.type==="background_layer";a&&(l.wrapS=Jn,l.repeat.set(4,1));let c=-300,h=0,u=1e3,p=0,f=r.parallax;if(r.id.includes("sky"))c=-500,h=300,u=2e3,f=.02;else if(r.id.includes("far"))c=-400,h=150,u=1500,f=.05;else if(r.id.includes("mid"))c=-200,h=50,u=1e3,f=.1;else if(r.id.includes("foreground"))c=-100,h=-50,u=1e3,f=.18;else if(r.id.includes("atmosphere"))c=50,h=0,u=1200,f=.08;else if(r.type==="decorative_object"){const E=i[r.id]||{x:0,y:0,z:-50,scaleY:500,parallax:.15};c=E.z,h=E.y,u=E.scaleY,p=E.x,f=E.parallax}const o=l.image.width/l.image.height,m=u*o,v=new Ht({map:l,transparent:!0,alphaTest:.1,depthWrite:!1}),d=a?new Gt(m*4,u):new Gt(m,u),g=new vt(d,v);if(g.position.set(p,h,c),g.userData={type:r.id,parallaxX:f,startX:p},this.group.add(g),this.layers.push(g),this.DEBUG_ENV){const E=new Jd(g,16711680);this.group.add(E),this.layers.push(E);const S=document.getElementById("env-debug-ui")||function(){const A=document.createElement("div");return A.id="env-debug-ui",A.style.position="absolute",A.style.top="10px",A.style.right="10px",A.style.color="lime",A.style.fontFamily="monospace",A.style.pointerEvents="none",A.style.background="rgba(0,0,0,0.7)",A.style.padding="10px",document.body.appendChild(A),A}();S.innerHTML+=`[${r.id.toUpperCase()}] z:${c} plx:${f}<br>`}}catch(n){console.error(`Failed to load asset ${r.id}:`,n)}}update(e){for(let t of this.layers){const i=t.type==="BoxHelper"?t.object:t,r=i.userData.parallaxX||0,n=i.userData.startX||0;i.position.x=n+e.x*(1-r),t.type==="BoxHelper"&&t.update()}}}class pp{constructor(){if(this.renderer=new ep,this.physics=new tp,this.input=new rp,this.assets=new ap,this.combat=new op(this.physics),this.light=new lp,this.ui=new hp,this.audio=new fp,this.levels=new up(this),this.environment=new dp(this.renderer.scene,this.assets),this.player=null,this.enemies=[],this.boss=null,this.platforms=[],this.particles=null,this.lastTime=performance.now(),this.frameCount=0,this.fps=0,this.lastFpsTime=this.lastTime,this.DEBUG_MODE=!1,!this.DEBUG_MODE){const e=document.getElementById("debug-ui");e&&(e.style.display="none")}}async init(){await this.renderer.init(),this.audio.init(),await this.assets.init(),this.physics.init(),this.input.init(),this.player=new np(this.physics,this.renderer.scene,this.input,this.assets),await this.player.init(100,300),await this.environment.init(),await this.environment.loadBiome("dark"),this.levels.loadLevel("dark"),this.particles=new sp(this.renderer.scene),this.particles.init(1e3),requestAnimationFrame(this.loop.bind(this)),console.log("Lumen Web Boot Complete")}loop(e){const t=(e-this.lastTime)/1e3;if(this.lastTime=e,this.frameCount++,e-this.lastFpsTime>=1e3&&(this.fps=this.frameCount,this.frameCount=0,this.lastFpsTime=e,this.updateDebug()),this.physics.update(1e3/60),this.player&&this.player.body){const i=this.player.body.bounds,r=Ge.Composite.allBodies(this.physics.engine.world);for(let n of r)if(n.isSensor&&n.label.startsWith("core_")&&Ge.Bounds.overlaps(i,n.bounds)){const l=n.label.split("_")[1];this.light.acquireCore(l),Ge.Composite.remove(this.physics.engine.world,n),n.label="collected",console.log(`Acquired ${l} core! LightPower is now ${this.light.lightPower}`)}}if(this.levels.update(this.player),this.ui.handleInput(this.input),this.ui.isDead&&this.input.isDown("KeyR")){window.location.reload();return}if(this.ui.isPaused||this.ui.isDead){this.renderer.render(),requestAnimationFrame(this.loop.bind(this));return}if(this.player){if(this.ui.dialogueBox.style.display==="block"?(Ge.Body.setVelocity(this.player.body,{x:0,y:this.player.body.velocity.y}),this.player.animator.play("idle"),this.player.animator.update(t),this.player.sprite.position.x=this.player.body.position.x,this.player.sprite.position.y=-this.player.body.position.y):(this.player.update(t),(this.player.input.isDown("ArrowUp")||this.player.input.isDown("KeyW")||this.player.input.isDown("Space"))&&this.player.isGrounded&&this.audio.playJump()),this.renderer.camera.follow(this.player.sprite.position,t),this.environment.update(this.renderer.camera.cam.position),this.ui.updateHUD(this.player,this.light),this.player.isAttacking){for(let i of this.enemies)i.health>0&&this.combat.checkMeleeHit(this.player,i,80,this.player.direction)&&(i.takeDamage(10,this.player.direction),this.audio.playHit(),this.renderer.camera.shake(2,.1));this.boss&&this.boss.health>0&&this.combat.checkMeleeHit(this.player,this.boss,120,this.player.direction)&&(this.boss.takeDamage(10,this.player.direction),this.audio.playHit(),this.renderer.camera.shake(4,.15))}for(let i of this.enemies)i.health>0&&!this.player.isHurt&&this.combat.checkMeleeHit(i,this.player,50,i.direction)&&(this.player.takeDamage(10,i.direction),this.audio.playHit(),this.renderer.camera.shake(5,.2));this.boss&&this.boss.health>0&&this.boss.state==="attack"&&!this.player.isHurt&&this.combat.checkMeleeHit(this.boss,this.player,150,this.boss.direction)&&(this.player.takeDamage(20,this.boss.direction),this.audio.playHit(),this.renderer.camera.shake(8,.3)),this.player.body.position.y>1500&&this.player.health>0&&(this.player.health=0)}for(let i=this.enemies.length-1;i>=0;i--){let r=this.enemies[i];r.update(t,this.player?this.player.body:null),r.body||this.enemies.splice(i,1)}this.boss&&this.boss.update(t,this.player?this.player.body:null),this.particles&&this.particles.update(e),this.renderer.render(),this.input.update(),requestAnimationFrame(this.loop.bind(this))}updateDebug(){if(!this.DEBUG_MODE)return;const e=document.getElementById("debug-ui");if(e&&this.player){const t=this.player.body.position,i=this.player.animator;e.innerHTML=`
                FPS: ${this.fps}<br>
                Biome: ${this.levels.currentBiome}<br>
                Player Pos: ${Math.round(t.x)}, ${Math.round(t.y)}<br>
                Player State: ${i?i.currentState:"none"}<br>
                Player Health: ${this.player.health}<br>
                Enemies: ${this.enemies.length}<br>
                Boss Health: ${this.boss?this.boss.health:0}<br>
                LightPower: ${this.light.lightPower}<br>
            `}}}document.addEventListener("DOMContentLoaded",async()=>{window.focus();try{await new pp().init()}catch(s){console.error("FATAL GAME INITIALIZATION ERROR:",s);const e=document.getElementById("game-container")||document.body;e.innerHTML=`
            <div style="
                position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;
                background-color: black; color: red; font-family: monospace;
                padding: 40px; box-sizing: border-box; z-index: 99999;
            ">
                <h1 style="border-bottom: 2px solid red; padding-bottom: 10px;">LUMEN FAILED TO START</h1>
                <h2 style="color: white; margin-top: 20px;">Error Details:</h2>
                <pre style="background: #220000; padding: 20px; border: 1px solid red; white-space: pre-wrap; font-size: 16px;">${s.stack||s.message||s}</pre>
                <p style="color: yellow; margin-top: 20px;">Please check the browser console and network tab for 404s or missing assets.</p>
            </div>
        `}});
