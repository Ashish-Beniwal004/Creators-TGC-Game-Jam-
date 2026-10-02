(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="160",So=0,ls=1,Mo=2,Ia=1,yo=2,Yt=3,ln=0,Mt=1,Kt=2,sn=0,Yn=1,cs=2,us=3,fs=4,Eo=5,_n=100,To=101,Ao=102,hs=103,ds=104,wo=200,bo=201,Ro=202,Co=203,Br=204,zr=205,Po=206,Lo=207,Do=208,Uo=209,Io=210,No=211,Fo=212,Oo=213,Bo=214,zo=0,Go=1,Ho=2,Xi=3,Vo=4,ko=5,Wo=6,Xo=7,Zr=0,qo=1,Yo=2,an=0,Ko=1,Zo=2,$o=3,jo=4,Jo=5,Qo=6,Na=300,Zn=301,$n=302,Gr=303,Hr=304,$i=306,Vr=1e3,Nt=1001,kr=1002,ct=1003,ps=1004,sr=1005,Rt=1006,el=1007,ui=1008,on=1009,tl=1010,nl=1011,$r=1012,Fa=1013,nn=1014,rn=1015,fi=1016,Oa=1017,Ba=1018,Sn=1020,il=1021,Ft=1023,rl=1024,sl=1025,Mn=1026,jn=1027,al=1028,za=1029,ol=1030,Ga=1031,Ha=1033,ar=33776,or=33777,lr=33778,cr=33779,ms=35840,gs=35841,vs=35842,_s=35843,Va=36196,xs=37492,Ss=37496,Ms=37808,ys=37809,Es=37810,Ts=37811,As=37812,ws=37813,bs=37814,Rs=37815,Cs=37816,Ps=37817,Ls=37818,Ds=37819,Us=37820,Is=37821,ur=36492,Ns=36494,Fs=36495,ll=36283,Os=36284,Bs=36285,zs=36286,ka=3e3,yn=3001,cl=3200,ul=3201,Wa=0,fl=1,Ct="",ut="srgb",$t="srgb-linear",jr="display-p3",ji="display-p3-linear",qi="linear",Ze="srgb",Yi="rec709",Ki="p3",Rn=7680,Gs=519,hl=512,dl=513,pl=514,Xa=515,ml=516,gl=517,vl=518,_l=519,Hs=35044,Vs="300 es",Wr=1035,Zt=2e3,Zi=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let n=0,l=r.length;n<l;n++)r[n].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Xr=180/Math.PI;function di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dt[s&255]+dt[s>>8&255]+dt[s>>16&255]+dt[s>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function xl(s,e){return(s%e+e)%e}function hr(s,e,t){return(1-t)*s+t*e}function ks(s){return(s&s-1)===0&&s!==0}function qr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,l=this.y-e.y;return this.x=n*i-l*r+e.x,this.y=n*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,n,l,a,c,f){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,l,a,c,f)}set(e,t,i,r,n,l,a,c,f){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=n,u[5]=c,u[6]=i,u[7]=l,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,l=i[0],a=i[3],c=i[6],f=i[1],u=i[4],p=i[7],h=i[2],o=i[5],m=i[8],v=r[0],d=r[3],g=r[6],T=r[1],M=r[4],A=r[7],_=r[2],y=r[5],E=r[8];return n[0]=l*v+a*T+c*_,n[3]=l*d+a*M+c*y,n[6]=l*g+a*A+c*E,n[1]=f*v+u*T+p*_,n[4]=f*d+u*M+p*y,n[7]=f*g+u*A+p*E,n[2]=h*v+o*T+m*_,n[5]=h*d+o*M+m*y,n[8]=h*g+o*A+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],l=e[4],a=e[5],c=e[6],f=e[7],u=e[8];return t*l*u-t*a*f-i*n*u+i*a*c+r*n*f-r*l*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],l=e[4],a=e[5],c=e[6],f=e[7],u=e[8],p=u*l-a*f,h=a*c-u*n,o=f*n-l*c,m=t*p+i*h+r*o;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=p*v,e[1]=(r*f-u*i)*v,e[2]=(a*i-r*l)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*n-a*t)*v,e[6]=o*v,e[7]=(i*c-f*t)*v,e[8]=(l*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,l,a){const c=Math.cos(n),f=Math.sin(n);return this.set(i*c,i*f,-i*(c*l+f*a)+l+e,-r*f,r*c,-r*(-f*l+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dr.makeScale(e,t)),this}rotate(e){return this.premultiply(dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new Oe;function qa(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sl(){const s=hi("canvas");return s.style.display="block",s}const Ws={};function ci(s){s in Ws||(Ws[s]=!0,console.warn(s))}const Xs=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qs=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[$t]:{transfer:qi,primaries:Yi,toReference:s=>s,fromReference:s=>s},[ut]:{transfer:Ze,primaries:Yi,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ji]:{transfer:qi,primaries:Ki,toReference:s=>s.applyMatrix3(qs),fromReference:s=>s.applyMatrix3(Xs)},[jr]:{transfer:Ze,primaries:Ki,toReference:s=>s.convertSRGBToLinear().applyMatrix3(qs),fromReference:s=>s.applyMatrix3(Xs).convertLinearToSRGB()}},Ml=new Set([$t,ji]),We={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ml.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Si[e].toReference,r=Si[t].fromReference;return r(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Si[s].primaries},getTransfer:function(s){return s===Ct?qi:Si[s].transfer}};function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cn;class Ya{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cn===void 0&&(Cn=hi("canvas")),Cn.width=e.width,Cn.height=e.height;const i=Cn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let l=0;l<n.length;l++)n[l]=Kn(n[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yl=0;class Ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?n.push(mr(r[l].image)):n.push(mr(r[l]))}else n=mr(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let El=0;class mt extends Qn{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,i=Nt,r=Nt,n=Rt,l=ui,a=Ft,c=on,f=mt.DEFAULT_ANISOTROPY,u=Ct){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=di(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=l,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===yn?ut:Ct),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Na)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?yn:ka}set encoding(e){ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yn?ut:Ct}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Na;mt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*n,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*n,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*n,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const c=e.elements,f=c[0],u=c[4],p=c[8],h=c[1],o=c[5],m=c[9],v=c[2],d=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-v)<.01&&Math.abs(m-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+v)<.1&&Math.abs(m+d)<.1&&Math.abs(f+o+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(f+1)/2,A=(o+1)/2,_=(g+1)/2,y=(u+h)/4,E=(p+v)/4,w=(m+d)/4;return M>A&&M>_?M<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(M),r=y/i,n=E/i):A>_?A<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(A),i=y/r,n=w/r):_<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(_),i=E/n,r=w/n),this.set(i,r,n,t),this}let T=Math.sqrt((d-m)*(d-m)+(p-v)*(p-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-m)/T,this.y=(p-v)/T,this.z=(h-u)/T,this.w=Math.acos((f+o+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tl extends Qn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yn?ut:Ct),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Tl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Za extends mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,l,a){let c=i[r+0],f=i[r+1],u=i[r+2],p=i[r+3];const h=n[l+0],o=n[l+1],m=n[l+2],v=n[l+3];if(a===0){e[t+0]=c,e[t+1]=f,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=o,e[t+2]=m,e[t+3]=v;return}if(p!==v||c!==h||f!==o||u!==m){let d=1-a;const g=c*h+f*o+u*m+p*v,T=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const _=Math.sqrt(M),y=Math.atan2(_,g*T);d=Math.sin(d*y)/_,a=Math.sin(a*y)/_}const A=a*T;if(c=c*d+h*A,f=f*d+o*A,u=u*d+m*A,p=p*d+v*A,d===1-a){const _=1/Math.sqrt(c*c+f*f+u*u+p*p);c*=_,f*=_,u*=_,p*=_}}e[t]=c,e[t+1]=f,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,n,l){const a=i[r],c=i[r+1],f=i[r+2],u=i[r+3],p=n[l],h=n[l+1],o=n[l+2],m=n[l+3];return e[t]=a*m+u*p+c*o-f*h,e[t+1]=c*m+u*h+f*p-a*o,e[t+2]=f*m+u*o+a*h-c*p,e[t+3]=u*m-a*p-c*h-f*o,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,n=e._z,l=e._order,a=Math.cos,c=Math.sin,f=a(i/2),u=a(r/2),p=a(n/2),h=c(i/2),o=c(r/2),m=c(n/2);switch(l){case"XYZ":this._x=h*u*p+f*o*m,this._y=f*o*p-h*u*m,this._z=f*u*m+h*o*p,this._w=f*u*p-h*o*m;break;case"YXZ":this._x=h*u*p+f*o*m,this._y=f*o*p-h*u*m,this._z=f*u*m-h*o*p,this._w=f*u*p+h*o*m;break;case"ZXY":this._x=h*u*p-f*o*m,this._y=f*o*p+h*u*m,this._z=f*u*m+h*o*p,this._w=f*u*p-h*o*m;break;case"ZYX":this._x=h*u*p-f*o*m,this._y=f*o*p+h*u*m,this._z=f*u*m-h*o*p,this._w=f*u*p+h*o*m;break;case"YZX":this._x=h*u*p+f*o*m,this._y=f*o*p+h*u*m,this._z=f*u*m-h*o*p,this._w=f*u*p-h*o*m;break;case"XZY":this._x=h*u*p-f*o*m,this._y=f*o*p-h*u*m,this._z=f*u*m+h*o*p,this._w=f*u*p+h*o*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],l=t[1],a=t[5],c=t[9],f=t[2],u=t[6],p=t[10],h=i+a+p;if(h>0){const o=.5/Math.sqrt(h+1);this._w=.25/o,this._x=(u-c)*o,this._y=(n-f)*o,this._z=(l-r)*o}else if(i>a&&i>p){const o=2*Math.sqrt(1+i-a-p);this._w=(u-c)/o,this._x=.25*o,this._y=(r+l)/o,this._z=(n+f)/o}else if(a>p){const o=2*Math.sqrt(1+a-i-p);this._w=(n-f)/o,this._x=(r+l)/o,this._y=.25*o,this._z=(c+u)/o}else{const o=2*Math.sqrt(1+p-i-a);this._w=(l-r)/o,this._x=(n+f)/o,this._y=(c+u)/o,this._z=.25*o}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,l=e._w,a=t._x,c=t._y,f=t._z,u=t._w;return this._x=i*u+l*a+r*f-n*c,this._y=r*u+l*c+n*a-i*f,this._z=n*u+l*f+i*c-r*a,this._w=l*u-i*a-r*c-n*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=n,this;const c=1-a*a;if(c<=Number.EPSILON){const o=1-t;return this._w=o*l+t*this._w,this._x=o*i+t*this._x,this._y=o*r+t*this._y,this._z=o*n+t*this._z,this.normalize(),this}const f=Math.sqrt(c),u=Math.atan2(f,a),p=Math.sin((1-t)*u)/f,h=Math.sin(t*u)/f;return this._w=l*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=n*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ys.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ys.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,l=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*l,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*l,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,l=e.y,a=e.z,c=e.w,f=2*(l*r-a*i),u=2*(a*t-n*r),p=2*(n*i-l*t);return this.x=t+c*f+l*p-a*u,this.y=i+c*u+a*f-n*p,this.z=r+c*p+n*u-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,l=t.x,a=t.y,c=t.z;return this.x=r*c-n*a,this.y=n*l-i*c,this.z=i*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new X,Ys=new pi;class wn{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=n.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,Pt):Pt.fromBufferAttribute(n,l),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mi.copy(i.boundingBox)),Mi.applyMatrix4(e.matrixWorld),this.union(Mi)}const r=e.children;for(let n=0,l=r.length;n<l;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ii),yi.subVectors(this.max,ii),Pn.subVectors(e.a,ii),Ln.subVectors(e.b,ii),Dn.subVectors(e.c,ii),jt.subVectors(Ln,Pn),Jt.subVectors(Dn,Ln),hn.subVectors(Pn,Dn);let t=[0,-jt.z,jt.y,0,-Jt.z,Jt.y,0,-hn.z,hn.y,jt.z,0,-jt.x,Jt.z,0,-Jt.x,hn.z,0,-hn.x,-jt.y,jt.x,0,-Jt.y,Jt.x,0,-hn.y,hn.x,0];return!vr(t,Pn,Ln,Dn,yi)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,Pn,Ln,Dn,yi))?!1:(Ei.crossVectors(jt,Jt),t=[Ei.x,Ei.y,Ei.z],vr(t,Pn,Ln,Dn,yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vt=[new X,new X,new X,new X,new X,new X,new X,new X],Pt=new X,Mi=new wn,Pn=new X,Ln=new X,Dn=new X,jt=new X,Jt=new X,hn=new X,ii=new X,yi=new X,Ei=new X,dn=new X;function vr(s,e,t,i,r){for(let n=0,l=s.length-3;n<=l;n+=3){dn.fromArray(s,n);const a=r.x*Math.abs(dn.x)+r.y*Math.abs(dn.y)+r.z*Math.abs(dn.z),c=e.dot(dn),f=t.dot(dn),u=i.dot(dn);if(Math.max(-Math.max(c,f,u),Math.min(c,f,u))>a)return!1}return!0}const wl=new wn,ri=new X,_r=new X;class mi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wl.setFromPoints(e).getCenter(i);let r=0;for(let n=0,l=e.length;n<l;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ri.subVectors(e,this.center);const t=ri.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ri,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ri.copy(e.center).add(_r)),this.expandByPoint(ri.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new X,xr=new X,Ti=new X,Qt=new X,Sr=new X,Ai=new X,Mr=new X;class bl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.origin).addScaledVector(this.direction,t),kt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xr.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),Qt.copy(this.origin).sub(xr);const n=e.distanceTo(t)*.5,l=-this.direction.dot(Ti),a=Qt.dot(this.direction),c=-Qt.dot(Ti),f=Qt.lengthSq(),u=Math.abs(1-l*l);let p,h,o,m;if(u>0)if(p=l*c-a,h=l*a-c,m=n*u,p>=0)if(h>=-m)if(h<=m){const v=1/u;p*=v,h*=v,o=p*(p+l*h+2*a)+h*(l*p+h+2*c)+f}else h=n,p=Math.max(0,-(l*h+a)),o=-p*p+h*(h+2*c)+f;else h=-n,p=Math.max(0,-(l*h+a)),o=-p*p+h*(h+2*c)+f;else h<=-m?(p=Math.max(0,-(-l*n+a)),h=p>0?-n:Math.min(Math.max(-n,-c),n),o=-p*p+h*(h+2*c)+f):h<=m?(p=0,h=Math.min(Math.max(-n,-c),n),o=h*(h+2*c)+f):(p=Math.max(0,-(l*n+a)),h=p>0?n:Math.min(Math.max(-n,-c),n),o=-p*p+h*(h+2*c)+f);else h=l>0?-n:n,p=Math.max(0,-(l*h+a)),o=-p*p+h*(h+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(xr).addScaledVector(Ti,h),o}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const i=kt.dot(this.direction),r=kt.dot(kt)-i*i,n=e.radius*e.radius;if(r>n)return null;const l=Math.sqrt(n-r),a=i-l,c=i+l;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,l,a,c;const f=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return f>=0?(i=(e.min.x-h.x)*f,r=(e.max.x-h.x)*f):(i=(e.max.x-h.x)*f,r=(e.min.x-h.x)*f),u>=0?(n=(e.min.y-h.y)*u,l=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,l=(e.min.y-h.y)*u),i>l||n>r||((n>i||isNaN(i))&&(i=n),(l<r||isNaN(r))&&(r=l),p>=0?(a=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,i,r,n){Sr.subVectors(t,e),Ai.subVectors(i,e),Mr.crossVectors(Sr,Ai);let l=this.direction.dot(Mr),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;Qt.subVectors(this.origin,e);const c=a*this.direction.dot(Ai.crossVectors(Qt,Ai));if(c<0)return null;const f=a*this.direction.dot(Sr.cross(Qt));if(f<0||c+f>l)return null;const u=-a*Qt.dot(Mr);return u<0?null:this.at(u/l,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,r,n,l,a,c,f,u,p,h,o,m,v,d){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,l,a,c,f,u,p,h,o,m,v,d)}set(e,t,i,r,n,l,a,c,f,u,p,h,o,m,v,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=l,g[9]=a,g[13]=c,g[2]=f,g[6]=u,g[10]=p,g[14]=h,g[3]=o,g[7]=m,g[11]=v,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Un.setFromMatrixColumn(e,0).length(),n=1/Un.setFromMatrixColumn(e,1).length(),l=1/Un.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,l=Math.cos(i),a=Math.sin(i),c=Math.cos(r),f=Math.sin(r),u=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const h=l*u,o=l*p,m=a*u,v=a*p;t[0]=c*u,t[4]=-c*p,t[8]=f,t[1]=o+m*f,t[5]=h-v*f,t[9]=-a*c,t[2]=v-h*f,t[6]=m+o*f,t[10]=l*c}else if(e.order==="YXZ"){const h=c*u,o=c*p,m=f*u,v=f*p;t[0]=h+v*a,t[4]=m*a-o,t[8]=l*f,t[1]=l*p,t[5]=l*u,t[9]=-a,t[2]=o*a-m,t[6]=v+h*a,t[10]=l*c}else if(e.order==="ZXY"){const h=c*u,o=c*p,m=f*u,v=f*p;t[0]=h-v*a,t[4]=-l*p,t[8]=m+o*a,t[1]=o+m*a,t[5]=l*u,t[9]=v-h*a,t[2]=-l*f,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const h=l*u,o=l*p,m=a*u,v=a*p;t[0]=c*u,t[4]=m*f-o,t[8]=h*f+v,t[1]=c*p,t[5]=v*f+h,t[9]=o*f-m,t[2]=-f,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const h=l*c,o=l*f,m=a*c,v=a*f;t[0]=c*u,t[4]=v-h*p,t[8]=m*p+o,t[1]=p,t[5]=l*u,t[9]=-a*u,t[2]=-f*u,t[6]=o*p+m,t[10]=h-v*p}else if(e.order==="XZY"){const h=l*c,o=l*f,m=a*c,v=a*f;t[0]=c*u,t[4]=-p,t[8]=f*u,t[1]=h*p+v,t[5]=l*u,t[9]=o*p-m,t[2]=m*p-o,t[6]=a*u,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rl,e,Cl)}lookAt(e,t,i){const r=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),en.crossVectors(i,Et),en.lengthSq()===0&&(Math.abs(i.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),en.crossVectors(i,Et)),en.normalize(),wi.crossVectors(Et,en),r[0]=en.x,r[4]=wi.x,r[8]=Et.x,r[1]=en.y,r[5]=wi.y,r[9]=Et.y,r[2]=en.z,r[6]=wi.z,r[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,l=i[0],a=i[4],c=i[8],f=i[12],u=i[1],p=i[5],h=i[9],o=i[13],m=i[2],v=i[6],d=i[10],g=i[14],T=i[3],M=i[7],A=i[11],_=i[15],y=r[0],E=r[4],w=r[8],x=r[12],S=r[1],C=r[5],P=r[9],N=r[13],D=r[2],U=r[6],F=r[10],O=r[14],G=r[3],Y=r[7],K=r[11],j=r[15];return n[0]=l*y+a*S+c*D+f*G,n[4]=l*E+a*C+c*U+f*Y,n[8]=l*w+a*P+c*F+f*K,n[12]=l*x+a*N+c*O+f*j,n[1]=u*y+p*S+h*D+o*G,n[5]=u*E+p*C+h*U+o*Y,n[9]=u*w+p*P+h*F+o*K,n[13]=u*x+p*N+h*O+o*j,n[2]=m*y+v*S+d*D+g*G,n[6]=m*E+v*C+d*U+g*Y,n[10]=m*w+v*P+d*F+g*K,n[14]=m*x+v*N+d*O+g*j,n[3]=T*y+M*S+A*D+_*G,n[7]=T*E+M*C+A*U+_*Y,n[11]=T*w+M*P+A*F+_*K,n[15]=T*x+M*N+A*O+_*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],l=e[1],a=e[5],c=e[9],f=e[13],u=e[2],p=e[6],h=e[10],o=e[14],m=e[3],v=e[7],d=e[11],g=e[15];return m*(+n*c*p-r*f*p-n*a*h+i*f*h+r*a*o-i*c*o)+v*(+t*c*o-t*f*h+n*l*h-r*l*o+r*f*u-n*c*u)+d*(+t*f*p-t*a*o-n*l*p+i*l*o+n*a*u-i*f*u)+g*(-r*a*u-t*c*p+t*a*h+r*l*p-i*l*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],l=e[4],a=e[5],c=e[6],f=e[7],u=e[8],p=e[9],h=e[10],o=e[11],m=e[12],v=e[13],d=e[14],g=e[15],T=p*d*f-v*h*f+v*c*o-a*d*o-p*c*g+a*h*g,M=m*h*f-u*d*f-m*c*o+l*d*o+u*c*g-l*h*g,A=u*v*f-m*p*f+m*a*o-l*v*o-u*a*g+l*p*g,_=m*p*c-u*v*c-m*a*h+l*v*h+u*a*d-l*p*d,y=t*T+i*M+r*A+n*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=T*E,e[1]=(v*h*n-p*d*n-v*r*o+i*d*o+p*r*g-i*h*g)*E,e[2]=(a*d*n-v*c*n+v*r*f-i*d*f-a*r*g+i*c*g)*E,e[3]=(p*c*n-a*h*n-p*r*f+i*h*f+a*r*o-i*c*o)*E,e[4]=M*E,e[5]=(u*d*n-m*h*n+m*r*o-t*d*o-u*r*g+t*h*g)*E,e[6]=(m*c*n-l*d*n-m*r*f+t*d*f+l*r*g-t*c*g)*E,e[7]=(l*h*n-u*c*n+u*r*f-t*h*f-l*r*o+t*c*o)*E,e[8]=A*E,e[9]=(m*p*n-u*v*n-m*i*o+t*v*o+u*i*g-t*p*g)*E,e[10]=(l*v*n-m*a*n+m*i*f-t*v*f-l*i*g+t*a*g)*E,e[11]=(u*a*n-l*p*n-u*i*f+t*p*f+l*i*o-t*a*o)*E,e[12]=_*E,e[13]=(u*v*r-m*p*r+m*i*h-t*v*h-u*i*d+t*p*d)*E,e[14]=(m*a*r-l*v*r-m*i*c+t*v*c+l*i*d-t*a*d)*E,e[15]=(l*p*r-u*a*r+u*i*c-t*p*c-l*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,l=e.x,a=e.y,c=e.z,f=n*l,u=n*a;return this.set(f*l+i,f*a-r*c,f*c+r*a,0,f*a+r*c,u*a+i,u*c-r*l,0,f*c-r*a,u*c+r*l,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,l){return this.set(1,i,n,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,l=t._y,a=t._z,c=t._w,f=n+n,u=l+l,p=a+a,h=n*f,o=n*u,m=n*p,v=l*u,d=l*p,g=a*p,T=c*f,M=c*u,A=c*p,_=i.x,y=i.y,E=i.z;return r[0]=(1-(v+g))*_,r[1]=(o+A)*_,r[2]=(m-M)*_,r[3]=0,r[4]=(o-A)*y,r[5]=(1-(h+g))*y,r[6]=(d+T)*y,r[7]=0,r[8]=(m+M)*E,r[9]=(d-T)*E,r[10]=(1-(h+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Un.set(r[0],r[1],r[2]).length();const l=Un.set(r[4],r[5],r[6]).length(),a=Un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Lt.copy(this);const f=1/n,u=1/l,p=1/a;return Lt.elements[0]*=f,Lt.elements[1]*=f,Lt.elements[2]*=f,Lt.elements[4]*=u,Lt.elements[5]*=u,Lt.elements[6]*=u,Lt.elements[8]*=p,Lt.elements[9]*=p,Lt.elements[10]*=p,t.setFromRotationMatrix(Lt),i.x=n,i.y=l,i.z=a,this}makePerspective(e,t,i,r,n,l,a=Zt){const c=this.elements,f=2*n/(t-e),u=2*n/(i-r),p=(t+e)/(t-e),h=(i+r)/(i-r);let o,m;if(a===Zt)o=-(l+n)/(l-n),m=-2*l*n/(l-n);else if(a===Zi)o=-l/(l-n),m=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=o,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,n,l,a=Zt){const c=this.elements,f=1/(t-e),u=1/(i-r),p=1/(l-n),h=(t+e)*f,o=(i+r)*u;let m,v;if(a===Zt)m=(l+n)*p,v=-2*p;else if(a===Zi)m=n*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-o,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Un=new X,Lt=new Qe,Rl=new X(0,0,0),Cl=new X(1,1,1),en=new X,wi=new X,Et=new X,Ks=new Qe,Zs=new pi;class Ji{constructor(e=0,t=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],l=r[4],a=r[8],c=r[1],f=r[5],u=r[9],p=r[2],h=r[6],o=r[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,o),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,o),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,o),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,o),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(a,o));break;case"XZY":this._z=Math.asin(-St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,o),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ks.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ks,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zs.setFromEuler(this),this.setFromQuaternion(Zs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pl=0;const $s=new X,In=new pi,Wt=new Qe,bi=new X,si=new X,Ll=new X,Dl=new pi,js=new X(1,0,0),Js=new X(0,1,0),Qs=new X(0,0,1),Ul={type:"added"},Il={type:"removed"};class ft extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new X,t=new Ji,i=new pi,r=new X(1,1,1);function n(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Oe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(js,e)}rotateY(e){return this.rotateOnAxis(Js,e)}rotateZ(e){return this.rotateOnAxis(Qs,e)}translateOnAxis(e,t){return $s.copy(e).applyQuaternion(this.quaternion),this.position.add($s.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(js,e)}translateY(e){return this.translateOnAxis(Js,e)}translateZ(e){return this.translateOnAxis(Qs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bi.copy(e):bi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(si,bi,this.up):Wt.lookAt(bi,si,this.up),this.quaternion.setFromRotationMatrix(Wt),r&&(Wt.extractRotation(r.matrixWorld),In.setFromRotationMatrix(Wt),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ul)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Il)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let n=0,l=r.length;n<l;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,e,Ll),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,Dl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,l=r.length;n<l;n++){const a=r[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function n(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let f=0,u=c.length;f<u;f++){const p=c[f];n(e.shapes,p)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(n(e.materials,this.material[c]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(n(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),f=l(e.textures),u=l(e.images),p=l(e.shapes),h=l(e.skeletons),o=l(e.animations),m=l(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),o.length>0&&(i.animations=o),m.length>0&&(i.nodes=m)}return i.object=r,i;function l(a){const c=[];for(const f in a){const u=a[f];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ft.DEFAULT_UP=new X(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dt=new X,Xt=new X,yr=new X,qt=new X,Nn=new X,Fn=new X,ea=new X,Er=new X,Tr=new X,Ar=new X;let Ri=!1;class Ut{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dt.subVectors(e,t),r.cross(Dt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Dt.subVectors(r,t),Xt.subVectors(i,t),yr.subVectors(e,t);const l=Dt.dot(Dt),a=Dt.dot(Xt),c=Dt.dot(yr),f=Xt.dot(Xt),u=Xt.dot(yr),p=l*f-a*a;if(p===0)return n.set(0,0,0),null;const h=1/p,o=(f*c-a*u)*h,m=(l*u-a*c)*h;return n.set(1-o-m,m,o)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qt)===null?!1:qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,i,r,n,l,a,c){return Ri===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ri=!0),this.getInterpolation(e,t,i,r,n,l,a,c)}static getInterpolation(e,t,i,r,n,l,a,c){return this.getBarycoord(e,t,i,r,qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,qt.x),c.addScaledVector(l,qt.y),c.addScaledVector(a,qt.z),c)}static isFrontFacing(e,t,i,r){return Dt.subVectors(i,t),Xt.subVectors(e,t),Dt.cross(Xt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),Xt.subVectors(this.a,this.b),Dt.cross(Xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Ri===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ri=!0),Ut.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}getInterpolation(e,t,i,r,n){return Ut.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let l,a;Nn.subVectors(r,i),Fn.subVectors(n,i),Er.subVectors(e,i);const c=Nn.dot(Er),f=Fn.dot(Er);if(c<=0&&f<=0)return t.copy(i);Tr.subVectors(e,r);const u=Nn.dot(Tr),p=Fn.dot(Tr);if(u>=0&&p<=u)return t.copy(r);const h=c*p-u*f;if(h<=0&&c>=0&&u<=0)return l=c/(c-u),t.copy(i).addScaledVector(Nn,l);Ar.subVectors(e,n);const o=Nn.dot(Ar),m=Fn.dot(Ar);if(m>=0&&o<=m)return t.copy(n);const v=o*f-c*m;if(v<=0&&f>=0&&m<=0)return a=f/(f-m),t.copy(i).addScaledVector(Fn,a);const d=u*m-o*p;if(d<=0&&p-u>=0&&o-m>=0)return ea.subVectors(n,r),a=(p-u)/(p-u+(o-m)),t.copy(r).addScaledVector(ea,a);const g=1/(d+v+h);return l=v*g,a=h*g,t.copy(i).addScaledVector(Nn,l).addScaledVector(Fn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},Ci={h:0,s:0,l:0};function wr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=We.workingColorSpace){if(e=xl(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,l=2*i-n;this.r=wr(l,n,e+1/3),this.g=wr(l,n,e),this.b=wr(l,n,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],l=n.length;if(l===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=ja[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return We.fromWorkingColorSpace(pt.copy(this),e),Math.round(St(pt.r*255,0,255))*65536+Math.round(St(pt.g*255,0,255))*256+Math.round(St(pt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(pt.copy(this),t);const i=pt.r,r=pt.g,n=pt.b,l=Math.max(i,r,n),a=Math.min(i,r,n);let c,f;const u=(a+l)/2;if(a===l)c=0,f=0;else{const p=l-a;switch(f=u<=.5?p/(l+a):p/(2-l-a),l){case i:c=(r-n)/p+(r<n?6:0);break;case r:c=(n-i)/p+2;break;case n:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=ut){We.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,i=pt.g,r=pt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(tn),this.setHSL(tn.h+e,tn.s+t,tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(Ci);const i=hr(tn.h,Ci.h,t),r=hr(tn.s,Ci.s,t),n=hr(tn.l,Ci.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Ge;Ge.NAMES=ja;let Nl=0;class gi extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Yn,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=zr,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(i.blending=this.blending),this.side!==ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Br&&(i.blendSrc=this.blendSrc),this.blendDst!==zr&&(i.blendDst=this.blendDst),this.blendEquation!==_n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const l=[];for(const a in n){const c=n[a];delete c.metadata,l.push(c)}return l}if(t){const n=r(e.textures),l=r(e.images);n.length>0&&(i.textures=n),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new X,Pi=new He;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix3(e),this.setXY(t,Pi.x,Pi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hs&&(e.usage=this.usage),e}}class Ja extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qa extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fl=0;const bt=new Qe,br=new ft,On=new X,Tt=new wn,ai=new wn,ot=new X;class cn extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qa(e)?Qa:Ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Oe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bt.makeRotationFromQuaternion(e),this.applyMatrix4(bt),this}rotateX(e){return bt.makeRotationX(e),this.applyMatrix4(bt),this}rotateY(e){return bt.makeRotationY(e),this.applyMatrix4(bt),this}rotateZ(e){return bt.makeRotationZ(e),this.applyMatrix4(bt),this}translate(e,t,i){return bt.makeTranslation(e,t,i),this.applyMatrix4(bt),this}scale(e,t,i){return bt.makeScale(e,t,i),this.applyMatrix4(bt),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Tt.setFromBufferAttribute(n),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let n=0,l=t.length;n<l;n++){const a=t[n];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Tt.min,ai.min),Tt.expandByPoint(ot),ot.addVectors(Tt.max,ai.max),Tt.expandByPoint(ot)):(Tt.expandByPoint(ai.min),Tt.expandByPoint(ai.max))}Tt.getCenter(i);let r=0;for(let n=0,l=e.count;n<l;n++)ot.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(ot));if(t)for(let n=0,l=t.length;n<l;n++){const a=t[n],c=this.morphTargetsRelative;for(let f=0,u=a.count;f<u;f++)ot.fromBufferAttribute(a,f),c&&(On.fromBufferAttribute(e,f),ot.add(On)),r=Math.max(r,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,l=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,f=[],u=[];for(let S=0;S<a;S++)f[S]=new X,u[S]=new X;const p=new X,h=new X,o=new X,m=new He,v=new He,d=new He,g=new X,T=new X;function M(S,C,P){p.fromArray(r,S*3),h.fromArray(r,C*3),o.fromArray(r,P*3),m.fromArray(l,S*2),v.fromArray(l,C*2),d.fromArray(l,P*2),h.sub(p),o.sub(p),v.sub(m),d.sub(m);const N=1/(v.x*d.y-d.x*v.y);isFinite(N)&&(g.copy(h).multiplyScalar(d.y).addScaledVector(o,-v.y).multiplyScalar(N),T.copy(o).multiplyScalar(v.x).addScaledVector(h,-d.x).multiplyScalar(N),f[S].add(g),f[C].add(g),f[P].add(g),u[S].add(T),u[C].add(T),u[P].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let S=0,C=A.length;S<C;++S){const P=A[S],N=P.start,D=P.count;for(let U=N,F=N+D;U<F;U+=3)M(i[U+0],i[U+1],i[U+2])}const _=new X,y=new X,E=new X,w=new X;function x(S){E.fromArray(n,S*3),w.copy(E);const C=f[S];_.copy(C),_.sub(E.multiplyScalar(E.dot(C))).normalize(),y.crossVectors(w,C);const N=y.dot(u[S])<0?-1:1;c[S*4]=_.x,c[S*4+1]=_.y,c[S*4+2]=_.z,c[S*4+3]=N}for(let S=0,C=A.length;S<C;++S){const P=A[S],N=P.start,D=P.count;for(let U=N,F=N+D;U<F;U+=3)x(i[U+0]),x(i[U+1]),x(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,o=i.count;h<o;h++)i.setXYZ(h,0,0,0);const r=new X,n=new X,l=new X,a=new X,c=new X,f=new X,u=new X,p=new X;if(e)for(let h=0,o=e.count;h<o;h+=3){const m=e.getX(h+0),v=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,m),n.fromBufferAttribute(t,v),l.fromBufferAttribute(t,d),u.subVectors(l,n),p.subVectors(r,n),u.cross(p),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,d),a.add(u),c.add(u),f.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(d,f.x,f.y,f.z)}else for(let h=0,o=t.count;h<o;h+=3)r.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),l.fromBufferAttribute(t,h+2),u.subVectors(l,n),p.subVectors(r,n),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,c){const f=a.array,u=a.itemSize,p=a.normalized,h=new f.constructor(c.length*u);let o=0,m=0;for(let v=0,d=c.length;v<d;v++){a.isInterleavedBufferAttribute?o=c[v]*a.data.stride+a.offset:o=c[v]*u;for(let g=0;g<u;g++)h[m++]=f[o++]}return new Ot(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],f=e(c,i);t.setAttribute(a,f)}const n=this.morphAttributes;for(const a in n){const c=[],f=n[a];for(let u=0,p=f.length;u<p;u++){const h=f[u],o=e(h,i);c.push(o)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const f=l[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],u=[];for(let p=0,h=f.length;p<h;p++){const o=f[p];u.push(o.toJSON(e.data))}u.length>0&&(r[c]=u,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const f in r){const u=r[f];this.setAttribute(f,u.clone(t))}const n=e.morphAttributes;for(const f in n){const u=[],p=n[f];for(let h=0,o=p.length;h<o;h++)u.push(p[h].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,u=l.length;f<u;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ta=new Qe,pn=new bl,Li=new mi,na=new X,Bn=new X,zn=new X,Gn=new X,Rr=new X,Di=new X,Ui=new He,Ii=new He,Ni=new He,ia=new X,ra=new X,sa=new X,Fi=new X,Oi=new X;class At extends ft{constructor(e=new cn,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,l=r.length;n<l;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(n&&a){Di.set(0,0,0);for(let c=0,f=n.length;c<f;c++){const u=a[c],p=n[c];u!==0&&(Rr.fromBufferAttribute(p,e),l?Di.addScaledVector(Rr,u):Di.addScaledVector(Rr.sub(t),u))}t.add(Di)}return t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Li.copy(i.boundingSphere),Li.applyMatrix4(n),pn.copy(e.ray).recast(e.near),!(Li.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Li,na)===null||pn.origin.distanceToSquared(na)>(e.far-e.near)**2))&&(ta.copy(n).invert(),pn.copy(e.ray).applyMatrix4(ta),!(i.boundingBox!==null&&pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pn)))}_computeIntersections(e,t,i){let r;const n=this.geometry,l=this.material,a=n.index,c=n.attributes.position,f=n.attributes.uv,u=n.attributes.uv1,p=n.attributes.normal,h=n.groups,o=n.drawRange;if(a!==null)if(Array.isArray(l))for(let m=0,v=h.length;m<v;m++){const d=h[m],g=l[d.materialIndex],T=Math.max(d.start,o.start),M=Math.min(a.count,Math.min(d.start+d.count,o.start+o.count));for(let A=T,_=M;A<_;A+=3){const y=a.getX(A),E=a.getX(A+1),w=a.getX(A+2);r=Bi(this,g,e,i,f,u,p,y,E,w),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,o.start),v=Math.min(a.count,o.start+o.count);for(let d=m,g=v;d<g;d+=3){const T=a.getX(d),M=a.getX(d+1),A=a.getX(d+2);r=Bi(this,l,e,i,f,u,p,T,M,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let m=0,v=h.length;m<v;m++){const d=h[m],g=l[d.materialIndex],T=Math.max(d.start,o.start),M=Math.min(c.count,Math.min(d.start+d.count,o.start+o.count));for(let A=T,_=M;A<_;A+=3){const y=A,E=A+1,w=A+2;r=Bi(this,g,e,i,f,u,p,y,E,w),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let d=m,g=v;d<g;d+=3){const T=d,M=d+1,A=d+2;r=Bi(this,l,e,i,f,u,p,T,M,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Ol(s,e,t,i,r,n,l,a){let c;if(e.side===Mt?c=i.intersectTriangle(l,n,r,!0,a):c=i.intersectTriangle(r,n,l,e.side===ln,a),c===null)return null;Oi.copy(a),Oi.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Oi);return f<t.near||f>t.far?null:{distance:f,point:Oi.clone(),object:s}}function Bi(s,e,t,i,r,n,l,a,c,f){s.getVertexPosition(a,Bn),s.getVertexPosition(c,zn),s.getVertexPosition(f,Gn);const u=Ol(s,e,t,i,Bn,zn,Gn,Fi);if(u){r&&(Ui.fromBufferAttribute(r,a),Ii.fromBufferAttribute(r,c),Ni.fromBufferAttribute(r,f),u.uv=Ut.getInterpolation(Fi,Bn,zn,Gn,Ui,Ii,Ni,new He)),n&&(Ui.fromBufferAttribute(n,a),Ii.fromBufferAttribute(n,c),Ni.fromBufferAttribute(n,f),u.uv1=Ut.getInterpolation(Fi,Bn,zn,Gn,Ui,Ii,Ni,new He),u.uv2=u.uv1),l&&(ia.fromBufferAttribute(l,a),ra.fromBufferAttribute(l,c),sa.fromBufferAttribute(l,f),u.normal=Ut.getInterpolation(Fi,Bn,zn,Gn,ia,ra,sa,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:f,normal:new X,materialIndex:0};Ut.getNormal(Bn,zn,Gn,p.normal),u.face=p}return u}class bn extends cn{constructor(e=1,t=1,i=1,r=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:l};const a=this;r=Math.floor(r),n=Math.floor(n),l=Math.floor(l);const c=[],f=[],u=[],p=[];let h=0,o=0;m("z","y","x",-1,-1,i,t,e,l,n,0),m("z","y","x",1,-1,i,t,-e,l,n,1),m("x","z","y",1,1,e,i,t,r,l,2),m("x","z","y",1,-1,e,i,-t,r,l,3),m("x","y","z",1,-1,e,t,i,r,n,4),m("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new En(f,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(p,2));function m(v,d,g,T,M,A,_,y,E,w,x){const S=A/E,C=_/w,P=A/2,N=_/2,D=y/2,U=E+1,F=w+1;let O=0,G=0;const Y=new X;for(let K=0;K<F;K++){const j=K*C-N;for(let $=0;$<U;$++){const V=$*S-P;Y[v]=V*T,Y[d]=j*M,Y[g]=D,f.push(Y.x,Y.y,Y.z),Y[v]=0,Y[d]=0,Y[g]=y>0?1:-1,u.push(Y.x,Y.y,Y.z),p.push($/E),p.push(1-K/w),O+=1}}for(let K=0;K<w;K++)for(let j=0;j<E;j++){const $=h+j+U*K,V=h+j+U*(K+1),Z=h+(j+1)+U*(K+1),ne=h+(j+1)+U*K;c.push($,V,ne),c.push(V,Z,ne),G+=6}a.addGroup(o,G,x),o+=G,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jn(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _t(s){const e={};for(let t=0;t<s.length;t++){const i=Jn(s[t]);for(const r in i)e[r]=i[r]}return e}function Bl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function eo(s){return s.getRenderTarget()===null?s.outputColorSpace:We.workingColorSpace}const zl={clone:Jn,merge:_t};var Gl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gl,this.fragmentShader=Hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jn(e.uniforms),this.uniformsGroups=Bl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let to=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class It extends to{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,f=l.fullHeight;n+=l.offsetX*r/c,t-=l.offsetY*i/f,r*=l.width/c,i*=l.height/f}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hn=-90,Vn=1;class Vl extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new It(Hn,Vn,e,t);r.layers=this.layers,this.add(r);const n=new It(Hn,Vn,e,t);n.layers=this.layers,this.add(n);const l=new It(Hn,Vn,e,t);l.layers=this.layers,this.add(l);const a=new It(Hn,Vn,e,t);a.layers=this.layers,this.add(a);const c=new It(Hn,Vn,e,t);c.layers=this.layers,this.add(c);const f=new It(Hn,Vn,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,n,l,a,c]=t;for(const f of t)this.remove(f);if(e===Zt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zi)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,l,a,c,f,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),o=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,n),e.setRenderTarget(i,1,r),e.render(t,l),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(p,h,o),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class no extends mt{constructor(e,t,i,r,n,l,a,c,f,u){e=e!==void 0?e:[],t=t!==void 0?t:Zn,super(e,t,i,r,n,l,a,c,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kl extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yn?ut:Ct),this.texture=new no(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bn(5,5,5),n=new An({name:"CubemapFromEquirect",uniforms:Jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mt,blending:sn});n.uniforms.tEquirect.value=t;const l=new At(r,n),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Rt),new Vl(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(n)}}const Cr=new X,Wl=new X,Xl=new Oe;class gn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cr.subVectors(i,t).cross(Wl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xl.getNormalMatrix(e),r=this.coplanarPoint(Cr).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new mi,zi=new X;class Jr{constructor(e=new gn,t=new gn,i=new gn,r=new gn,n=new gn,l=new gn){this.planes=[e,t,i,r,n,l]}set(e,t,i,r,n,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zt){const i=this.planes,r=e.elements,n=r[0],l=r[1],a=r[2],c=r[3],f=r[4],u=r[5],p=r[6],h=r[7],o=r[8],m=r[9],v=r[10],d=r[11],g=r[12],T=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-n,h-f,d-o,A-g).normalize(),i[1].setComponents(c+n,h+f,d+o,A+g).normalize(),i[2].setComponents(c+l,h+u,d+m,A+T).normalize(),i[3].setComponents(c-l,h-u,d-m,A-T).normalize(),i[4].setComponents(c-a,h-p,d-v,A-M).normalize(),t===Zt)i[5].setComponents(c+a,h+p,d+v,A+M).normalize();else if(t===Zi)i[5].setComponents(a,p,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zi.x=r.normal.x>0?e.max.x:e.min.x,zi.y=r.normal.y>0?e.max.y:e.min.y,zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function io(){let s=null,e=!1,t=null,i=null;function r(n,l){t(n,l),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function ql(s,e){const t=e.isWebGL2,i=new WeakMap;function r(f,u){const p=f.array,h=f.usage,o=p.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,p,h),f.onUploadCallback();let v;if(p instanceof Float32Array)v=s.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=s.SHORT;else if(p instanceof Uint32Array)v=s.UNSIGNED_INT;else if(p instanceof Int32Array)v=s.INT;else if(p instanceof Int8Array)v=s.BYTE;else if(p instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:o}}function n(f,u,p){const h=u.array,o=u._updateRange,m=u.updateRanges;if(s.bindBuffer(p,f),o.count===-1&&m.length===0&&s.bufferSubData(p,0,h),m.length!==0){for(let v=0,d=m.length;v<d;v++){const g=m[v];t?s.bufferSubData(p,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):s.bufferSubData(p,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}o.count!==-1&&(t?s.bufferSubData(p,o.offset*h.BYTES_PER_ELEMENT,h,o.offset,o.count):s.bufferSubData(p,o.offset*h.BYTES_PER_ELEMENT,h.subarray(o.offset,o.offset+o.count)),o.count=-1),u.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const u=i.get(f);u&&(s.deleteBuffer(u.buffer),i.delete(f))}function c(f,u){if(f.isGLBufferAttribute){const h=i.get(f);(!h||h.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=i.get(f);if(p===void 0)i.set(f,r(f,u));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,f,u),p.version=f.version}}return{get:l,remove:a,update:c}}class vi extends cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,l=t/2,a=Math.floor(i),c=Math.floor(r),f=a+1,u=c+1,p=e/a,h=t/c,o=[],m=[],v=[],d=[];for(let g=0;g<u;g++){const T=g*h-l;for(let M=0;M<f;M++){const A=M*p-n;m.push(A,-T,0),v.push(0,0,1),d.push(M/a),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let T=0;T<a;T++){const M=T+f*g,A=T+f*(g+1),_=T+1+f*(g+1),y=T+1+f*g;o.push(M,A,y),o.push(A,_,y)}this.setIndex(o),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kl=`#ifdef USE_ALPHAHASH
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
#endif`,Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ql=`#ifdef USE_AOMAP
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
#endif`,ec=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tc=`#ifdef USE_BATCHING
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
#endif`,nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ic=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ac=`#ifdef USE_IRIDESCENCE
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
#endif`,oc=`#ifdef USE_BUMPMAP
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
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gc=`#define PI 3.141592653589793
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
} // validated`,vc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_c=`vec3 transformedNormal = objectNormal;
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
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ec="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tc=`
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
}`,Ac=`#ifdef USE_ENVMAP
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
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bc=`#ifdef USE_ENVMAP
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
#endif`,Rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
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
#endif`,Pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ic=`#ifdef USE_GRADIENTMAP
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
}`,Nc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zc=`uniform bool receiveShadow;
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
#endif`,Gc=`#ifdef USE_ENVMAP
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
#endif`,Hc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xc=`PhysicalMaterial material;
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
#endif`,qc=`struct PhysicalMaterial {
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
}`,Yc=`
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
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iu=`#if defined( USE_POINTS_UV )
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
#endif`,ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,au=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ou=`#ifdef USE_MORPHNORMALS
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
#endif`,lu=`#ifdef USE_MORPHTARGETS
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
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mu=`#ifdef USE_NORMALMAP
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
#endif`,gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lu=`float getShadowMask() {
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
}`,Du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gu=`#ifdef USE_TRANSMISSION
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
#endif`,Hu=`#ifdef USE_TRANSMISSION
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yu=`uniform sampler2D t2D;
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`#include <common>
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
}`,Qu=`#if DEPTH_PACKING == 3200
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
}`,ef=`#define DISTANCE
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
}`,tf=`#define DISTANCE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`uniform float scale;
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#include <common>
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#define LAMBERT
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
}`,uf=`#define LAMBERT
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
}`,ff=`#define MATCAP
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
}`,hf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,pf=`#define NORMAL
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
}`,mf=`#define PHONG
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
}`,gf=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,xf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,Mf=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,Tf=`uniform vec3 color;
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
}`,Af=`uniform float rotation;
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
}`,wf=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Yl,alphahash_pars_fragment:Kl,alphamap_fragment:Zl,alphamap_pars_fragment:$l,alphatest_fragment:jl,alphatest_pars_fragment:Jl,aomap_fragment:Ql,aomap_pars_fragment:ec,batching_pars_vertex:tc,batching_vertex:nc,begin_vertex:ic,beginnormal_vertex:rc,bsdfs:sc,iridescence_fragment:ac,bumpmap_pars_fragment:oc,clipping_planes_fragment:lc,clipping_planes_pars_fragment:cc,clipping_planes_pars_vertex:uc,clipping_planes_vertex:fc,color_fragment:hc,color_pars_fragment:dc,color_pars_vertex:pc,color_vertex:mc,common:gc,cube_uv_reflection_fragment:vc,defaultnormal_vertex:_c,displacementmap_pars_vertex:xc,displacementmap_vertex:Sc,emissivemap_fragment:Mc,emissivemap_pars_fragment:yc,colorspace_fragment:Ec,colorspace_pars_fragment:Tc,envmap_fragment:Ac,envmap_common_pars_fragment:wc,envmap_pars_fragment:bc,envmap_pars_vertex:Rc,envmap_physical_pars_fragment:Gc,envmap_vertex:Cc,fog_vertex:Pc,fog_pars_vertex:Lc,fog_fragment:Dc,fog_pars_fragment:Uc,gradientmap_pars_fragment:Ic,lightmap_fragment:Nc,lightmap_pars_fragment:Fc,lights_lambert_fragment:Oc,lights_lambert_pars_fragment:Bc,lights_pars_begin:zc,lights_toon_fragment:Hc,lights_toon_pars_fragment:Vc,lights_phong_fragment:kc,lights_phong_pars_fragment:Wc,lights_physical_fragment:Xc,lights_physical_pars_fragment:qc,lights_fragment_begin:Yc,lights_fragment_maps:Kc,lights_fragment_end:Zc,logdepthbuf_fragment:$c,logdepthbuf_pars_fragment:jc,logdepthbuf_pars_vertex:Jc,logdepthbuf_vertex:Qc,map_fragment:eu,map_pars_fragment:tu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:ru,metalnessmap_pars_fragment:su,morphcolor_vertex:au,morphnormal_vertex:ou,morphtarget_pars_vertex:lu,morphtarget_vertex:cu,normal_fragment_begin:uu,normal_fragment_maps:fu,normal_pars_fragment:hu,normal_pars_vertex:du,normal_vertex:pu,normalmap_pars_fragment:mu,clearcoat_normal_fragment_begin:gu,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:_u,iridescence_pars_fragment:xu,opaque_fragment:Su,packing:Mu,premultiplied_alpha_fragment:yu,project_vertex:Eu,dithering_fragment:Tu,dithering_pars_fragment:Au,roughnessmap_fragment:wu,roughnessmap_pars_fragment:bu,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Cu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Lu,skinbase_vertex:Du,skinning_pars_vertex:Uu,skinning_vertex:Iu,skinnormal_vertex:Nu,specularmap_fragment:Fu,specularmap_pars_fragment:Ou,tonemapping_fragment:Bu,tonemapping_pars_fragment:zu,transmission_fragment:Gu,transmission_pars_fragment:Hu,uv_pars_fragment:Vu,uv_pars_vertex:ku,uv_vertex:Wu,worldpos_vertex:Xu,background_vert:qu,background_frag:Yu,backgroundCube_vert:Ku,backgroundCube_frag:Zu,cube_vert:$u,cube_frag:ju,depth_vert:Ju,depth_frag:Qu,distanceRGBA_vert:ef,distanceRGBA_frag:tf,equirect_vert:nf,equirect_frag:rf,linedashed_vert:sf,linedashed_frag:af,meshbasic_vert:of,meshbasic_frag:lf,meshlambert_vert:cf,meshlambert_frag:uf,meshmatcap_vert:ff,meshmatcap_frag:hf,meshnormal_vert:df,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:vf,meshphysical_frag:_f,meshtoon_vert:xf,meshtoon_frag:Sf,points_vert:Mf,points_frag:yf,shadow_vert:Ef,shadow_frag:Tf,sprite_vert:Af,sprite_frag:wf},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},zt={basic:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:_t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:_t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:_t([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:_t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:_t([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:_t([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:_t([re.common,re.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:_t([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};zt.physical={uniforms:_t([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Gi={r:0,b:0,g:0};function bf(s,e,t,i,r,n,l){const a=new Ge(0);let c=n===!0?0:1,f,u,p=null,h=0,o=null;function m(d,g){let T=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,c):M&&M.isColor&&(v(M,1),T=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,l):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===$i)?(u===void 0&&(u=new At(new bn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Jn(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=We.getTransfer(M.colorSpace)!==Ze,(p!==M||h!==M.version||o!==s.toneMapping)&&(u.material.needsUpdate=!0,p=M,h=M.version,o=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(f===void 0&&(f=new At(new vi(2,2),new An({name:"BackgroundMaterial",uniforms:Jn(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=M,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=We.getTransfer(M.colorSpace)!==Ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),f.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||o!==s.toneMapping)&&(f.material.needsUpdate=!0,p=M,h=M.version,o=s.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null))}function v(d,g){d.getRGB(Gi,eo(s)),i.buffers.color.setClear(Gi.r,Gi.g,Gi.b,g,l)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),c=g,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,v(a,c)},render:m}}function Rf(s,e,t,i){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||n!==null,a={},c=d(null);let f=c,u=!1;function p(D,U,F,O,G){let Y=!1;if(l){const K=v(O,F,U);f!==K&&(f=K,o(f.object)),Y=g(D,O,F,G),Y&&T(D,O,F,G)}else{const K=U.wireframe===!0;(f.geometry!==O.id||f.program!==F.id||f.wireframe!==K)&&(f.geometry=O.id,f.program=F.id,f.wireframe=K,Y=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,w(D,U,F,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return i.isWebGL2?s.createVertexArray():n.createVertexArrayOES()}function o(D){return i.isWebGL2?s.bindVertexArray(D):n.bindVertexArrayOES(D)}function m(D){return i.isWebGL2?s.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function v(D,U,F){const O=F.wireframe===!0;let G=a[D.id];G===void 0&&(G={},a[D.id]=G);let Y=G[U.id];Y===void 0&&(Y={},G[U.id]=Y);let K=Y[O];return K===void 0&&(K=d(h()),Y[O]=K),K}function d(D){const U=[],F=[],O=[];for(let G=0;G<r;G++)U[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:O,object:D,attributes:{},index:null}}function g(D,U,F,O){const G=f.attributes,Y=U.attributes;let K=0;const j=F.getAttributes();for(const $ in j)if(j[$].location>=0){const Z=G[$];let ne=Y[$];if(ne===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;K++}return f.attributesNum!==K||f.index!==O}function T(D,U,F,O){const G={},Y=U.attributes;let K=0;const j=F.getAttributes();for(const $ in j)if(j[$].location>=0){let Z=Y[$];Z===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),G[$]=ne,K++}f.attributes=G,f.attributesNum=K,f.index=O}function M(){const D=f.newAttributes;for(let U=0,F=D.length;U<F;U++)D[U]=0}function A(D){_(D,0)}function _(D,U){const F=f.newAttributes,O=f.enabledAttributes,G=f.attributeDivisors;F[D]=1,O[D]===0&&(s.enableVertexAttribArray(D),O[D]=1),G[D]!==U&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),G[D]=U)}function y(){const D=f.newAttributes,U=f.enabledAttributes;for(let F=0,O=U.length;F<O;F++)U[F]!==D[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function E(D,U,F,O,G,Y,K){K===!0?s.vertexAttribIPointer(D,U,F,G,Y):s.vertexAttribPointer(D,U,F,O,G,Y)}function w(D,U,F,O){if(i.isWebGL2===!1&&(D.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const G=O.attributes,Y=F.getAttributes(),K=U.defaultAttributeValues;for(const j in Y){const $=Y[j];if($.location>=0){let V=G[j];if(V===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const Z=V.normalized,ne=V.itemSize,ae=t.get(V);if(ae===void 0)continue;const ue=ae.buffer,ge=ae.type,be=ae.bytesPerElement,Me=i.isWebGL2===!0&&(ge===s.INT||ge===s.UNSIGNED_INT||V.gpuType===Fa);if(V.isInterleavedBufferAttribute){const ze=V.data,z=ze.stride,rt=V.offset;if(ze.isInstancedInterleavedBuffer){for(let ve=0;ve<$.locationSize;ve++)_($.location+ve,ze.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ve=0;ve<$.locationSize;ve++)A($.location+ve);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ve=0;ve<$.locationSize;ve++)E($.location+ve,ne/$.locationSize,ge,Z,z*be,(rt+ne/$.locationSize*ve)*be,Me)}else{if(V.isInstancedBufferAttribute){for(let ze=0;ze<$.locationSize;ze++)_($.location+ze,V.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ze=0;ze<$.locationSize;ze++)A($.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ze=0;ze<$.locationSize;ze++)E($.location+ze,ne/$.locationSize,ge,Z,ne*be,ne/$.locationSize*ze*be,Me)}}else if(K!==void 0){const Z=K[j];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv($.location,Z);break;case 3:s.vertexAttrib3fv($.location,Z);break;case 4:s.vertexAttrib4fv($.location,Z);break;default:s.vertexAttrib1fv($.location,Z)}}}}y()}function x(){P();for(const D in a){const U=a[D];for(const F in U){const O=U[F];for(const G in O)m(O[G].object),delete O[G];delete U[F]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const F in U){const O=U[F];for(const G in O)m(O[G].object),delete O[G];delete U[F]}delete a[D.id]}function C(D){for(const U in a){const F=a[U];if(F[D.id]===void 0)continue;const O=F[D.id];for(const G in O)m(O[G].object),delete O[G];delete F[D.id]}}function P(){N(),u=!0,f!==c&&(f=c,o(f.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:P,resetDefaultState:N,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:A,disableUnusedAttributes:y}}function Cf(s,e,t,i){const r=i.isWebGL2;let n;function l(u){n=u}function a(u,p){s.drawArrays(n,u,p),t.update(p,n,1)}function c(u,p,h){if(h===0)return;let o,m;if(r)o=s,m="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",o===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}o[m](n,u,p,h),t.update(p,n,h)}function f(u,p,h){if(h===0)return;const o=e.get("WEBGL_multi_draw");if(o===null)for(let m=0;m<h;m++)this.render(u[m],p[m]);else{o.multiDrawArraysWEBGL(n,u,0,p,0,h);let m=0;for(let v=0;v<h;v++)m+=p[v];t.update(m,n,1)}}this.setMode=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=f}function Pf(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=n(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const f=l||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),o=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,A=l||e.has("OES_texture_float"),_=M&&A,y=l?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:o,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:A,floatVertexTextures:_,maxSamples:y}}function Lf(s){const e=this;let t=null,i=0,r=!1,n=!1;const l=new gn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const o=p.length!==0||h||i!==0||r;return r=h,i=p.length,o},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,o){const m=p.clippingPlanes,v=p.clipIntersection,d=p.clipShadows,g=s.get(p);if(!r||m===null||m.length===0||n&&!d)n?u(null):f();else{const T=n?0:i,M=T*4;let A=g.clippingState||null;c.value=A,A=u(m,h,M,o);for(let _=0;_!==M;++_)A[_]=t[_];g.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,o,m){const v=p!==null?p.length:0;let d=null;if(v!==0){if(d=c.value,m!==!0||d===null){const g=o+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(d===null||d.length<g)&&(d=new Float32Array(g));for(let M=0,A=o;M!==v;++M,A+=4)l.copy(p[M]).applyMatrix4(T,a),l.normal.toArray(d,A),d[A+3]=l.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function Df(s){let e=new WeakMap;function t(l,a){return a===Gr?l.mapping=Zn:a===Hr&&(l.mapping=$n),l}function i(l){if(l&&l.isTexture){const a=l.mapping;if(a===Gr||a===Hr)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const f=new kl(c.height/2);return f.fromEquirectangularTexture(s,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Qr extends to{constructor(e=-1,t=1,i=1,r=-1,n=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,l=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=f*this.view.offsetX,l=n+f*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,l,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xn=4,aa=[.125,.215,.35,.446,.526,.582],xn=20,Pr=new Qr,oa=new Ge;let Lr=null,Dr=0,Ur=0;const vn=(1+Math.sqrt(5))/2,kn=1/vn,la=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,vn,kn),new X(0,vn,-kn),new X(kn,0,vn),new X(-kn,0,vn),new X(vn,kn,0),new X(-vn,kn,0)];class ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Dr,Ur),e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:fi,format:Ft,colorSpace:$t,depthBuffer:!1},r=ua(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(n)),this._blurMaterial=If(n,e,t)}return r}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,r){const a=new It(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(oa),u.toneMapping=an,u.autoClear=!1;const o=new Qi({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),m=new At(new bn,o);let v=!1;const d=e.background;d?d.isColor&&(o.color.copy(d),e.background=null,v=!0):(o.color.copy(oa),v=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(a.up.set(0,c[g],0),a.lookAt(f[g],0,0)):T===1?(a.up.set(0,0,c[g]),a.lookAt(0,f[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,f[g]));const M=this._cubeSize;Hi(r,T*M,g>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zn||e.mapping===$n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fa());const n=r?this._cubemapMaterial:this._equirectMaterial,l=new At(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const c=this._cubeSize;Hi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(l,Pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=la[(r-1)%la.length];this._blur(e,r-1,r,n,l)}t.autoClear=i}_blur(e,t,i,r,n){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",n),this._halfBlur(l,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,l,a){const c=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new At(this._lodPlanes[r],f),h=f.uniforms,o=this._sizeLods[i]-1,m=isFinite(n)?Math.PI/(2*o):2*Math.PI/(2*xn-1),v=n/m,d=isFinite(n)?1+Math.floor(u*v):xn;d>xn&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xn}`);const g=[];let T=0;for(let E=0;E<xn;++E){const w=E/v,x=Math.exp(-w*w/2);g.push(x),E===0?T+=x:E<d&&(T+=2*x)}for(let E=0;E<g.length;E++)g[E]=g[E]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=g,h.latitudinal.value=l==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=m,h.mipInt.value=M-i;const A=this._sizeLods[r],_=3*A*(r>M-Xn?r-M+Xn:0),y=4*(this._cubeSize-A);Hi(t,_,y,3*A,2*A),c.setRenderTarget(t),c.render(p,Pr)}}function Uf(s){const e=[],t=[],i=[];let r=s;const n=s-Xn+1+aa.length;for(let l=0;l<n;l++){const a=Math.pow(2,r);t.push(a);let c=1/a;l>s-Xn?c=aa[l-s+Xn-1]:l===0&&(c=0),i.push(c);const f=1/(a-2),u=-f,p=1+f,h=[u,u,p,u,p,p,u,u,p,p,u,p],o=6,m=6,v=3,d=2,g=1,T=new Float32Array(v*m*o),M=new Float32Array(d*m*o),A=new Float32Array(g*m*o);for(let y=0;y<o;y++){const E=y%3*2/3-1,w=y>2?0:-1,x=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];T.set(x,v*m*y),M.set(h,d*m*y);const S=[y,y,y,y,y,y];A.set(S,g*m*y)}const _=new cn;_.setAttribute("position",new Ot(T,v)),_.setAttribute("uv",new Ot(M,d)),_.setAttribute("faceIndex",new Ot(A,g)),e.push(_),r>Xn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ua(s,e,t){const i=new Tn(s,e,t);return i.texture.mapping=$i,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hi(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function If(s,e,t){const i=new Float32Array(xn),r=new X(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:es(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function fa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:es(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ha(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function es(){return`

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
	`}function Nf(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,f=c===Gr||c===Hr,u=c===Zn||c===$n;if(f||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new ca(s)),p=f?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(f&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new ca(s));const h=f?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",n),h.texture}else return null}}}return a}function r(a){let c=0;const f=6;for(let u=0;u<f;u++)a[u]!==void 0&&c++;return c===f}function n(a){const c=a.target;c.removeEventListener("dispose",n);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function Ff(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Of(s,e,t,i){const r={},n=new WeakMap;function l(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const v=h.morphAttributes[m];for(let d=0,g=v.length;d<g;d++)e.remove(v[d])}h.removeEventListener("dispose",l),delete r[h.id];const o=n.get(h);o&&(e.remove(o),n.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",l),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const m in h)e.update(h[m],s.ARRAY_BUFFER);const o=p.morphAttributes;for(const m in o){const v=o[m];for(let d=0,g=v.length;d<g;d++)e.update(v[d],s.ARRAY_BUFFER)}}function f(p){const h=[],o=p.index,m=p.attributes.position;let v=0;if(o!==null){const T=o.array;v=o.version;for(let M=0,A=T.length;M<A;M+=3){const _=T[M+0],y=T[M+1],E=T[M+2];h.push(_,y,y,E,E,_)}}else if(m!==void 0){const T=m.array;v=m.version;for(let M=0,A=T.length/3-1;M<A;M+=3){const _=M+0,y=M+1,E=M+2;h.push(_,y,y,E,E,_)}}else return;const d=new(qa(h)?Qa:Ja)(h,1);d.version=v;const g=n.get(p);g&&e.remove(g),n.set(p,d)}function u(p){const h=n.get(p);if(h){const o=p.index;o!==null&&h.version<o.version&&f(p)}else f(p);return n.get(p)}return{get:a,update:c,getWireframeAttribute:u}}function Bf(s,e,t,i){const r=i.isWebGL2;let n;function l(o){n=o}let a,c;function f(o){a=o.type,c=o.bytesPerElement}function u(o,m){s.drawElements(n,m,a,o*c),t.update(m,n,1)}function p(o,m,v){if(v===0)return;let d,g;if(r)d=s,g="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](n,m,a,o*c,v),t.update(m,n,v)}function h(o,m,v){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<v;g++)this.render(o[g]/c,m[g]);else{d.multiDrawElementsWEBGL(n,m,0,a,o,0,v);let g=0;for(let T=0;T<v;T++)g+=m[T];t.update(g,n,1)}}this.setMode=l,this.setIndex=f,this.render=u,this.renderInstances=p,this.renderMultiDraw=h}function zf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,l,a){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=a*(n/3);break;case s.LINES:t.lines+=a*(n/2);break;case s.LINE_STRIP:t.lines+=a*(n-1);break;case s.LINE_LOOP:t.lines+=a*n;break;case s.POINTS:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gf(s,e){return s[0]-e[0]}function Hf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Vf(s,e,t){const i={},r=new Float32Array(8),n=new WeakMap,l=new lt,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function c(f,u,p){const h=f.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let d=n.get(u);if(d===void 0||d.count!==v){let U=function(){N.dispose(),n.delete(u),u.removeEventListener("dispose",U)};var o=U;d!==void 0&&d.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let x=0;M===!0&&(x=1),A===!0&&(x=2),_===!0&&(x=3);let S=u.attributes.position.count*x,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*C*4*v),N=new Za(P,S,C,v);N.type=rn,N.needsUpdate=!0;const D=x*4;for(let F=0;F<v;F++){const O=y[F],G=E[F],Y=w[F],K=S*C*4*F;for(let j=0;j<O.count;j++){const $=j*D;M===!0&&(l.fromBufferAttribute(O,j),P[K+$+0]=l.x,P[K+$+1]=l.y,P[K+$+2]=l.z,P[K+$+3]=0),A===!0&&(l.fromBufferAttribute(G,j),P[K+$+4]=l.x,P[K+$+5]=l.y,P[K+$+6]=l.z,P[K+$+7]=0),_===!0&&(l.fromBufferAttribute(Y,j),P[K+$+8]=l.x,P[K+$+9]=l.y,P[K+$+10]=l.z,P[K+$+11]=Y.itemSize===4?l.w:1)}}d={count:v,texture:N,size:new He(S,C)},n.set(u,d),u.addEventListener("dispose",U)}let g=0;for(let M=0;M<h.length;M++)g+=h[M];const T=u.morphTargetsRelative?1:1-g;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",h),p.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const m=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let A=0;A<m;A++)v[A]=[A,0];i[u.id]=v}for(let A=0;A<m;A++){const _=v[A];_[0]=A,_[1]=h[A]}v.sort(Hf);for(let A=0;A<8;A++)A<m&&v[A][1]?(a[A][0]=v[A][0],a[A][1]=v[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(Gf);const d=u.morphAttributes.position,g=u.morphAttributes.normal;let T=0;for(let A=0;A<8;A++){const _=a[A],y=_[0],E=_[1];y!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+A)!==d[y]&&u.setAttribute("morphTarget"+A,d[y]),g&&u.getAttribute("morphNormal"+A)!==g[y]&&u.setAttribute("morphNormal"+A,g[y]),r[A]=E,T+=E):(d&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),g&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const M=u.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",M),p.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:c}}function kf(s,e,t,i){let r=new WeakMap;function n(c){const f=i.render.frame,u=c.geometry,p=e.get(c,u);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==f&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==f&&(h.update(),r.set(h,f))}return p}function l(){r=new WeakMap}function a(c){const f=c.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:n,dispose:l}}class ro extends mt{constructor(e,t,i,r,n,l,a,c,f,u){if(u=u!==void 0?u:Mn,u!==Mn&&u!==jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mn&&(i=nn),i===void 0&&u===jn&&(i=Sn),super(null,r,n,l,a,c,u,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=c!==void 0?c:ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const so=new mt,ao=new ro(1,1);ao.compareFunction=Xa;const oo=new Za,lo=new Al,co=new no,da=[],pa=[],ma=new Float32Array(16),ga=new Float32Array(9),va=new Float32Array(4);function ei(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=da[r];if(n===void 0&&(n=new Float32Array(r),da[r]=n),e!==0){i.toArray(n,0);for(let l=1,a=0;l!==e;++l)a+=t,s[l].toArray(n,a)}return n}function nt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function it(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function er(s,e){let t=pa[e];t===void 0&&(t=new Int32Array(e),pa[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Wf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;s.uniform2fv(this.addr,e),it(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;s.uniform3fv(this.addr,e),it(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;s.uniform4fv(this.addr,e),it(t,e)}}function Kf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,i))return;va.set(i),s.uniformMatrix2fv(this.addr,!1,va),it(t,i)}}function Zf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,i))return;ga.set(i),s.uniformMatrix3fv(this.addr,!1,ga),it(t,i)}}function $f(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,i))return;ma.set(i),s.uniformMatrix4fv(this.addr,!1,ma),it(t,i)}}function jf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;s.uniform2iv(this.addr,e),it(t,e)}}function Qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;s.uniform3iv(this.addr,e),it(t,e)}}function eh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;s.uniform4iv(this.addr,e),it(t,e)}}function th(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;s.uniform2uiv(this.addr,e),it(t,e)}}function ih(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;s.uniform3uiv(this.addr,e),it(t,e)}}function rh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;s.uniform4uiv(this.addr,e),it(t,e)}}function sh(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);const n=this.type===s.SAMPLER_2D_SHADOW?ao:so;t.setTexture2D(e||n,r)}function ah(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lo,r)}function oh(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||co,r)}function lh(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||oo,r)}function ch(s){switch(s){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return Kf;case 35675:return Zf;case 35676:return $f;case 5124:case 35670:return jf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return eh;case 5125:return th;case 36294:return nh;case 36295:return ih;case 36296:return rh;case 35678:case 36198:case 36298:case 36306:case 35682:return sh;case 35679:case 36299:case 36307:return ah;case 35680:case 36300:case 36308:case 36293:return oh;case 36289:case 36303:case 36311:case 36292:return lh}}function uh(s,e){s.uniform1fv(this.addr,e)}function fh(s,e){const t=ei(e,this.size,2);s.uniform2fv(this.addr,t)}function hh(s,e){const t=ei(e,this.size,3);s.uniform3fv(this.addr,t)}function dh(s,e){const t=ei(e,this.size,4);s.uniform4fv(this.addr,t)}function ph(s,e){const t=ei(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mh(s,e){const t=ei(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gh(s,e){const t=ei(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vh(s,e){s.uniform1iv(this.addr,e)}function _h(s,e){s.uniform2iv(this.addr,e)}function xh(s,e){s.uniform3iv(this.addr,e)}function Sh(s,e){s.uniform4iv(this.addr,e)}function Mh(s,e){s.uniform1uiv(this.addr,e)}function yh(s,e){s.uniform2uiv(this.addr,e)}function Eh(s,e){s.uniform3uiv(this.addr,e)}function Th(s,e){s.uniform4uiv(this.addr,e)}function Ah(s,e,t){const i=this.cache,r=e.length,n=er(t,r);nt(i,n)||(s.uniform1iv(this.addr,n),it(i,n));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||so,n[l])}function wh(s,e,t){const i=this.cache,r=e.length,n=er(t,r);nt(i,n)||(s.uniform1iv(this.addr,n),it(i,n));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||lo,n[l])}function bh(s,e,t){const i=this.cache,r=e.length,n=er(t,r);nt(i,n)||(s.uniform1iv(this.addr,n),it(i,n));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||co,n[l])}function Rh(s,e,t){const i=this.cache,r=e.length,n=er(t,r);nt(i,n)||(s.uniform1iv(this.addr,n),it(i,n));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||oo,n[l])}function Ch(s){switch(s){case 5126:return uh;case 35664:return fh;case 35665:return hh;case 35666:return dh;case 35674:return ph;case 35675:return mh;case 35676:return gh;case 5124:case 35670:return vh;case 35667:case 35671:return _h;case 35668:case 35672:return xh;case 35669:case 35673:return Sh;case 5125:return Mh;case 36294:return yh;case 36295:return Eh;case 36296:return Th;case 35678:case 36198:case 36298:case 36306:case 35682:return Ah;case 35679:case 36299:case 36307:return wh;case 35680:case 36300:case 36308:case 36293:return bh;case 36289:case 36303:case 36311:case 36292:return Rh}}class Ph{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ch(t.type)}}class Lh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ch(t.type)}}class Dh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,l=r.length;n!==l;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function _a(s,e){s.seq.push(e),s.map[e.id]=e}function Uh(s,e,t){const i=s.name,r=i.length;for(Ir.lastIndex=0;;){const n=Ir.exec(i),l=Ir.lastIndex;let a=n[1];const c=n[2]==="]",f=n[3];if(c&&(a=a|0),f===void 0||f==="["&&l+2===r){_a(t,f===void 0?new Ph(a,s,e):new Lh(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new Dh(a),_a(t,p)),t=p}}}class Wi{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),l=e.getUniformLocation(t,n.name);Uh(n,l,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,l=t.length;n!==l;++n){const a=t[n],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function xa(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Ih=37297;let Nh=0;function Fh(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let l=r;l<n;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return i.join(`
`)}function Oh(s){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(s);let i;switch(e===t?i="":e===Ki&&t===Yi?i="LinearDisplayP3ToLinearSRGB":e===Yi&&t===Ki&&(i="LinearSRGBToLinearDisplayP3"),s){case $t:case ji:return[i,"LinearTransferOETF"];case ut:case jr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Sa(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const l=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Fh(s.getShaderSource(e),l)}else return r}function Bh(s,e){const t=Oh(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zh(s,e){let t;switch(e){case Ko:t="Linear";break;case Zo:t="Reinhard";break;case $o:t="OptimizedCineon";break;case jo:t="ACESFilmic";break;case Qo:t="AgX";break;case Jo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gh(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qn).join(`
`)}function Hh(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qn).join(`
`)}function Vh(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kh(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),l=n.name;let a=1;n.type===s.FLOAT_MAT2&&(a=2),n.type===s.FLOAT_MAT3&&(a=3),n.type===s.FLOAT_MAT4&&(a=4),t[l]={type:n.type,location:s.getAttribLocation(e,l),locationSize:a}}return t}function qn(s){return s!==""}function Ma(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ya(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yr(s){return s.replace(Wh,qh)}const Xh=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qh(s,e){let t=De[e];if(t===void 0){const i=Xh.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yr(t)}const Yh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ea(s){return s.replace(Yh,Kh)}function Kh(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Ta(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zh(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yt&&(e="SHADOWMAP_TYPE_VSM"),e}function $h(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zn:case $n:e="ENVMAP_TYPE_CUBE";break;case $i:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jh(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Jh(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zr:e="ENVMAP_BLENDING_MULTIPLY";break;case qo:e="ENVMAP_BLENDING_MIX";break;case Yo:e="ENVMAP_BLENDING_ADD";break}return e}function Qh(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ed(s,e,t,i){const r=s.getContext(),n=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=Zh(t),f=$h(t),u=jh(t),p=Jh(t),h=Qh(t),o=t.isWebGL2?"":Gh(t),m=Hh(t),v=Vh(n),d=r.createProgram();let g,T,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qn).join(`
`),g.length>0&&(g+=`
`),T=[o,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qn).join(`
`),T.length>0&&(T+=`
`)):(g=[Ta(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qn).join(`
`),T=[o,Ta(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?De.tonemapping_pars_fragment:"",t.toneMapping!==an?zh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Bh("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qn).join(`
`)),l=Yr(l),l=Ma(l,t),l=ya(l,t),a=Yr(a),a=Ma(a,t),a=ya(a,t),l=Ea(l),a=Ea(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const A=M+g+l,_=M+T+a,y=xa(r,r.VERTEX_SHADER,A),E=xa(r,r.FRAGMENT_SHADER,_);r.attachShader(d,y),r.attachShader(d,E),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function w(P){if(s.debug.checkShaderErrors){const N=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(y).trim(),U=r.getShaderInfoLog(E).trim();let F=!0,O=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,d,y,E);else{const G=Sa(r,y,"vertex"),Y=Sa(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:F,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:U,prefix:T}})}r.deleteShader(y),r.deleteShader(E),x=new Wi(r,d),S=kh(r,d)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(d,Ih)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nh++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=E,this}let td=0;class nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(n)===!1&&(l.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new id(e),t.set(e,i)),i}}class id{constructor(e){this.id=td++,this.code=e,this.usedTimes=0}}function rd(s,e,t,i,r,n,l){const a=new $a,c=new nd,f=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let o=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function d(x,S,C,P,N){const D=P.fog,U=N.geometry,F=x.isMeshStandardMaterial?P.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),G=O&&O.mapping===$i?O.image.height:null,Y=m[x.type];x.precision!==null&&(o=r.getMaxPrecision(x.precision),o!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",o,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=K!==void 0?K.length:0;let $=0;U.morphAttributes.position!==void 0&&($=1),U.morphAttributes.normal!==void 0&&($=2),U.morphAttributes.color!==void 0&&($=3);let V,Z,ne,ae;if(Y){const gt=zt[Y];V=gt.vertexShader,Z=gt.fragmentShader}else V=x.vertexShader,Z=x.fragmentShader,c.update(x),ne=c.getVertexShaderID(x),ae=c.getFragmentShaderID(x);const ue=s.getRenderTarget(),ge=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,Me=!!x.map,ze=!!x.matcap,z=!!O,rt=!!x.aoMap,ve=!!x.lightMap,_e=!!x.bumpMap,pe=!!x.normalMap,Xe=!!x.displacementMap,Re=!!x.emissiveMap,L=!!x.metalnessMap,b=!!x.roughnessMap,H=x.anisotropy>0,J=x.clearcoat>0,Q=x.iridescence>0,te=x.sheen>0,de=x.transmission>0,se=H&&!!x.anisotropyMap,fe=J&&!!x.clearcoatMap,Ee=J&&!!x.clearcoatNormalMap,Ue=J&&!!x.clearcoatRoughnessMap,ee=Q&&!!x.iridescenceMap,ke=Q&&!!x.iridescenceThicknessMap,Be=te&&!!x.sheenColorMap,we=te&&!!x.sheenRoughnessMap,xe=!!x.specularMap,he=!!x.specularColorMap,Le=!!x.specularIntensityMap,Ve=de&&!!x.transmissionMap,je=de&&!!x.thicknessMap,Ne=!!x.gradientMap,ie=!!x.alphaMap,I=x.alphaTest>0,oe=!!x.alphaHash,le=!!x.extensions,Te=!!U.attributes.uv1,Se=!!U.attributes.uv2,qe=!!U.attributes.uv3;let Ye=an;return x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ye=s.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Z,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:o,batching:be,instancing:ge,instancingColor:ge&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:$t,map:Me,matcap:ze,envMap:z,envMapMode:z&&O.mapping,envMapCubeUVHeight:G,aoMap:rt,lightMap:ve,bumpMap:_e,normalMap:pe,displacementMap:h&&Xe,emissiveMap:Re,normalMapObjectSpace:pe&&x.normalMapType===fl,normalMapTangentSpace:pe&&x.normalMapType===Wa,metalnessMap:L,roughnessMap:b,anisotropy:H,anisotropyMap:se,clearcoat:J,clearcoatMap:fe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ue,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:ke,sheen:te,sheenColorMap:Be,sheenRoughnessMap:we,specularMap:xe,specularColorMap:he,specularIntensityMap:Le,transmission:de,transmissionMap:Ve,thicknessMap:je,gradientMap:Ne,opaque:x.transparent===!1&&x.blending===Yn,alphaMap:ie,alphaTest:I,alphaHash:oe,combine:x.combine,mapUv:Me&&v(x.map.channel),aoMapUv:rt&&v(x.aoMap.channel),lightMapUv:ve&&v(x.lightMap.channel),bumpMapUv:_e&&v(x.bumpMap.channel),normalMapUv:pe&&v(x.normalMap.channel),displacementMapUv:Xe&&v(x.displacementMap.channel),emissiveMapUv:Re&&v(x.emissiveMap.channel),metalnessMapUv:L&&v(x.metalnessMap.channel),roughnessMapUv:b&&v(x.roughnessMap.channel),anisotropyMapUv:se&&v(x.anisotropyMap.channel),clearcoatMapUv:fe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(x.sheenRoughnessMap.channel),specularMapUv:xe&&v(x.specularMap.channel),specularColorMapUv:he&&v(x.specularColorMap.channel),specularIntensityMapUv:Le&&v(x.specularIntensityMap.channel),transmissionMapUv:Ve&&v(x.transmissionMap.channel),thicknessMapUv:je&&v(x.thicknessMap.channel),alphaMapUv:ie&&v(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:qe,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Me||ie),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kt,flipSided:x.side===Mt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:le&&x.extensions.derivatives===!0,extensionFragDepth:le&&x.extensions.fragDepth===!0,extensionDrawBuffers:le&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function g(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(T(S,x),M(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function T(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function A(x){const S=m[x.type];let C;if(S){const P=zt[S];C=zl.clone(P.uniforms)}else C=x.uniforms;return C}function _(x,S){let C;for(let P=0,N=f.length;P<N;P++){const D=f[P];if(D.cacheKey===S){C=D,++C.usedTimes;break}}return C===void 0&&(C=new ed(s,S,x,n),f.push(C)),C}function y(x){if(--x.usedTimes===0){const S=f.indexOf(x);f[S]=f[f.length-1],f.pop(),x.destroy()}}function E(x){c.remove(x)}function w(){c.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:A,acquireProgram:_,releaseProgram:y,releaseShaderCache:E,programs:f,dispose:w}}function sd(){let s=new WeakMap;function e(n){let l=s.get(n);return l===void 0&&(l={},s.set(n,l)),l}function t(n){s.delete(n)}function i(n,l,a){s.get(n)[l]=a}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ad(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Aa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wa(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function l(p,h,o,m,v,d){let g=s[e];return g===void 0?(g={id:p.id,object:p,geometry:h,material:o,groupOrder:m,renderOrder:p.renderOrder,z:v,group:d},s[e]=g):(g.id=p.id,g.object=p,g.geometry=h,g.material=o,g.groupOrder=m,g.renderOrder=p.renderOrder,g.z=v,g.group=d),e++,g}function a(p,h,o,m,v,d){const g=l(p,h,o,m,v,d);o.transmission>0?i.push(g):o.transparent===!0?r.push(g):t.push(g)}function c(p,h,o,m,v,d){const g=l(p,h,o,m,v,d);o.transmission>0?i.unshift(g):o.transparent===!0?r.unshift(g):t.unshift(g)}function f(p,h){t.length>1&&t.sort(p||ad),i.length>1&&i.sort(h||Aa),r.length>1&&r.sort(h||Aa)}function u(){for(let p=e,h=s.length;p<h;p++){const o=s[p];if(o.id===null)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:c,finish:u,sort:f}}function od(){let s=new WeakMap;function e(i,r){const n=s.get(i);let l;return n===void 0?(l=new wa,s.set(i,[l])):r>=n.length?(l=new wa,n.push(l)):l=n[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function ld(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ge};break;case"SpotLight":t={position:new X,direction:new X,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function cd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ud=0;function fd(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hd(s,e){const t=new ld,i=cd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new X);const n=new X,l=new Qe,a=new Qe;function c(u,p){let h=0,o=0,m=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let v=0,d=0,g=0,T=0,M=0,A=0,_=0,y=0,E=0,w=0,x=0;u.sort(fd);const S=p===!0?Math.PI:1;for(let P=0,N=u.length;P<N;P++){const D=u[P],U=D.color,F=D.intensity,O=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*F*S,o+=U.g*F*S,m+=U.b*F*S;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(D.sh.coefficients[Y],F);x++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const K=D.shadow,j=i.get(D);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.directionalShadow[v]=j,r.directionalShadowMap[v]=G,r.directionalShadowMatrix[v]=D.shadow.matrix,A++}r.directional[v]=Y,v++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(U).multiplyScalar(F*S),Y.distance=O,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,r.spot[g]=Y;const K=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,K.updateMatrices(D),D.castShadow&&w++),r.spotLightMatrix[g]=K.matrix,D.castShadow){const j=i.get(D);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.spotShadow[g]=j,r.spotShadowMap[g]=G,y++}g++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(U).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=Y,T++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const K=D.shadow,j=i.get(D);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,r.pointShadow[d]=j,r.pointShadowMap[d]=G,r.pointShadowMatrix[d]=D.shadow.matrix,_++}r.point[d]=Y,d++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(F*S),Y.groundColor.copy(D.groundColor).multiplyScalar(F*S),r.hemi[M]=Y,M++}}T>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=o,r.ambient[2]=m;const C=r.hash;(C.directionalLength!==v||C.pointLength!==d||C.spotLength!==g||C.rectAreaLength!==T||C.hemiLength!==M||C.numDirectionalShadows!==A||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==x)&&(r.directional.length=v,r.spot.length=g,r.rectArea.length=T,r.point.length=d,r.hemi.length=M,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=y+E-w,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=x,C.directionalLength=v,C.pointLength=d,C.spotLength=g,C.rectAreaLength=T,C.hemiLength=M,C.numDirectionalShadows=A,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=x,r.version=ud++)}function f(u,p){let h=0,o=0,m=0,v=0,d=0;const g=p.matrixWorldInverse;for(let T=0,M=u.length;T<M;T++){const A=u[T];if(A.isDirectionalLight){const _=r.directional[h];_.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),h++}else if(A.isSpotLight){const _=r.spot[m];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const _=r.rectArea[v];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),a.identity(),l.copy(A.matrixWorld),l.premultiply(g),a.extractRotation(l),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const _=r.point[o];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),o++}else if(A.isHemisphereLight){const _=r.hemi[d];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(g),d++}}}return{setup:c,setupView:f,state:r}}function ba(s,e){const t=new hd(s,e),i=[],r=[];function n(){i.length=0,r.length=0}function l(p){i.push(p)}function a(p){r.push(p)}function c(p){t.setup(i,p)}function f(p){t.setupView(i,p)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:f,pushLight:l,pushShadow:a}}function dd(s,e){let t=new WeakMap;function i(n,l=0){const a=t.get(n);let c;return a===void 0?(c=new ba(s,e),t.set(n,[c])):l>=a.length?(c=new ba(s,e),a.push(c)):c=a[l],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class pd extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class md extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vd=`uniform sampler2D shadow_pass;
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
}`;function _d(s,e,t){let i=new Jr;const r=new He,n=new He,l=new lt,a=new pd({depthPacking:ul}),c=new md,f={},u=t.maxTextureSize,p={[ln]:Mt,[Mt]:ln,[Kt]:Kt},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:gd,fragmentShader:vd}),o=h.clone();o.defines.HORIZONTAL_PASS=1;const m=new cn;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(m,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let g=this.type;this.render=function(y,E,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const x=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(sn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=g!==Yt&&this.type===Yt,D=g===Yt&&this.type!==Yt;for(let U=0,F=y.length;U<F;U++){const O=y[U],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Y=G.getFrameExtents();if(r.multiply(Y),n.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(n.x=Math.floor(u/Y.x),r.x=n.x*Y.x,G.mapSize.x=n.x),r.y>u&&(n.y=Math.floor(u/Y.y),r.y=n.y*Y.y,G.mapSize.y=n.y)),G.map===null||N===!0||D===!0){const j=this.type!==Yt?{minFilter:ct,magFilter:ct}:{};G.map!==null&&G.map.dispose(),G.map=new Tn(r.x,r.y,j),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const K=G.getViewportCount();for(let j=0;j<K;j++){const $=G.getViewport(j);l.set(n.x*$.x,n.y*$.y,n.x*$.z,n.y*$.w),P.viewport(l),G.updateMatrices(O,j),i=G.getFrustum(),A(E,w,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Yt&&T(G,w),G.needsUpdate=!1}g=this.type,d.needsUpdate=!1,s.setRenderTarget(x,S,C)};function T(y,E){const w=e.update(v);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,o.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,o.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Tn(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(E,null,w,h,v,null),o.uniforms.shadow_pass.value=y.mapPass.texture,o.uniforms.resolution.value=y.mapSize,o.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(E,null,w,o,v,null)}function M(y,E,w,x){let S=null;const C=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)S=C;else if(S=w.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const P=S.uuid,N=E.uuid;let D=f[P];D===void 0&&(D={},f[P]=D);let U=D[N];U===void 0&&(U=S.clone(),D[N]=U,E.addEventListener("dispose",_)),S=U}if(S.visible=E.visible,S.wireframe=E.wireframe,x===Yt?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:p[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=s.properties.get(S);P.light=w}return S}function A(y,E,w,x,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Yt)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const N=e.update(y),D=y.material;if(Array.isArray(D)){const U=N.groups;for(let F=0,O=U.length;F<O;F++){const G=U[F],Y=D[G.materialIndex];if(Y&&Y.visible){const K=M(y,Y,x,S);y.onBeforeShadow(s,y,E,w,N,K,G),s.renderBufferDirect(w,null,N,K,y,G),y.onAfterShadow(s,y,E,w,N,K,G)}}}else if(D.visible){const U=M(y,D,x,S);y.onBeforeShadow(s,y,E,w,N,U,null),s.renderBufferDirect(w,null,N,U,y,null),y.onAfterShadow(s,y,E,w,N,U,null)}}const P=y.children;for(let N=0,D=P.length;N<D;N++)A(P[N],E,w,x,S)}function _(y){y.target.removeEventListener("dispose",_);for(const w in f){const x=f[w],S=y.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function xd(s,e,t){const i=t.isWebGL2;function r(){let I=!1;const oe=new lt;let le=null;const Te=new lt(0,0,0,0);return{setMask:function(Se){le!==Se&&!I&&(s.colorMask(Se,Se,Se,Se),le=Se)},setLocked:function(Se){I=Se},setClear:function(Se,qe,Ye,st,gt){gt===!0&&(Se*=st,qe*=st,Ye*=st),oe.set(Se,qe,Ye,st),Te.equals(oe)===!1&&(s.clearColor(Se,qe,Ye,st),Te.copy(oe))},reset:function(){I=!1,le=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,oe=null,le=null,Te=null;return{setTest:function(Se){Se?be(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!I&&(s.depthMask(Se),oe=Se)},setFunc:function(Se){if(le!==Se){switch(Se){case zo:s.depthFunc(s.NEVER);break;case Go:s.depthFunc(s.ALWAYS);break;case Ho:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case Vo:s.depthFunc(s.EQUAL);break;case ko:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Se}},setLocked:function(Se){I=Se},setClear:function(Se){Te!==Se&&(s.clearDepth(Se),Te=Se)},reset:function(){I=!1,oe=null,le=null,Te=null}}}function l(){let I=!1,oe=null,le=null,Te=null,Se=null,qe=null,Ye=null,st=null,gt=null;return{setTest:function(Ke){I||(Ke?be(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!I&&(s.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,vt,Bt){(le!==Ke||Te!==vt||Se!==Bt)&&(s.stencilFunc(Ke,vt,Bt),le=Ke,Te=vt,Se=Bt)},setOp:function(Ke,vt,Bt){(qe!==Ke||Ye!==vt||st!==Bt)&&(s.stencilOp(Ke,vt,Bt),qe=Ke,Ye=vt,st=Bt)},setLocked:function(Ke){I=Ke},setClear:function(Ke){gt!==Ke&&(s.clearStencil(Ke),gt=Ke)},reset:function(){I=!1,oe=null,le=null,Te=null,Se=null,qe=null,Ye=null,st=null,gt=null}}}const a=new r,c=new n,f=new l,u=new WeakMap,p=new WeakMap;let h={},o={},m=new WeakMap,v=[],d=null,g=!1,T=null,M=null,A=null,_=null,y=null,E=null,w=null,x=new Ge(0,0,0),S=0,C=!1,P=null,N=null,D=null,U=null,F=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=Y>=2);let j=null,$={};const V=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ne=new lt().fromArray(V),ae=new lt().fromArray(Z);function ue(I,oe,le,Te){const Se=new Uint8Array(4),qe=s.createTexture();s.bindTexture(I,qe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<le;Ye++)i&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(oe+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return qe}const ge={};ge[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),be(s.DEPTH_TEST),c.setFunc(Xi),Re(!1),L(ls),be(s.CULL_FACE),pe(sn);function be(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Me(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function ze(I,oe){return o[I]!==oe?(s.bindFramebuffer(I,oe),o[I]=oe,i&&(I===s.DRAW_FRAMEBUFFER&&(o[s.FRAMEBUFFER]=oe),I===s.FRAMEBUFFER&&(o[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function z(I,oe){let le=v,Te=!1;if(I)if(le=m.get(oe),le===void 0&&(le=[],m.set(oe,le)),I.isWebGLMultipleRenderTargets){const Se=I.texture;if(le.length!==Se.length||le[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ye=Se.length;qe<Ye;qe++)le[qe]=s.COLOR_ATTACHMENT0+qe;le.length=Se.length,Te=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Te=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function rt(I){return d!==I?(s.useProgram(I),d=I,!0):!1}const ve={[_n]:s.FUNC_ADD,[To]:s.FUNC_SUBTRACT,[Ao]:s.FUNC_REVERSE_SUBTRACT};if(i)ve[hs]=s.MIN,ve[ds]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ve[hs]=I.MIN_EXT,ve[ds]=I.MAX_EXT)}const _e={[wo]:s.ZERO,[bo]:s.ONE,[Ro]:s.SRC_COLOR,[Br]:s.SRC_ALPHA,[Io]:s.SRC_ALPHA_SATURATE,[Do]:s.DST_COLOR,[Po]:s.DST_ALPHA,[Co]:s.ONE_MINUS_SRC_COLOR,[zr]:s.ONE_MINUS_SRC_ALPHA,[Uo]:s.ONE_MINUS_DST_COLOR,[Lo]:s.ONE_MINUS_DST_ALPHA,[No]:s.CONSTANT_COLOR,[Fo]:s.ONE_MINUS_CONSTANT_COLOR,[Oo]:s.CONSTANT_ALPHA,[Bo]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(I,oe,le,Te,Se,qe,Ye,st,gt,Ke){if(I===sn){g===!0&&(Me(s.BLEND),g=!1);return}if(g===!1&&(be(s.BLEND),g=!0),I!==Eo){if(I!==T||Ke!==C){if((M!==_n||y!==_n)&&(s.blendEquation(s.FUNC_ADD),M=_n,y=_n),Ke)switch(I){case Yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cs:s.blendFunc(s.ONE,s.ONE);break;case us:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fs:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case us:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fs:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,_=null,E=null,w=null,x.set(0,0,0),S=0,T=I,C=Ke}return}Se=Se||oe,qe=qe||le,Ye=Ye||Te,(oe!==M||Se!==y)&&(s.blendEquationSeparate(ve[oe],ve[Se]),M=oe,y=Se),(le!==A||Te!==_||qe!==E||Ye!==w)&&(s.blendFuncSeparate(_e[le],_e[Te],_e[qe],_e[Ye]),A=le,_=Te,E=qe,w=Ye),(st.equals(x)===!1||gt!==S)&&(s.blendColor(st.r,st.g,st.b,gt),x.copy(st),S=gt),T=I,C=!1}function Xe(I,oe){I.side===Kt?Me(s.CULL_FACE):be(s.CULL_FACE);let le=I.side===Mt;oe&&(le=!le),Re(le),I.blending===Yn&&I.transparent===!1?pe(sn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Te=I.stencilWrite;f.setTest(Te),Te&&(f.setMask(I.stencilWriteMask),f.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),f.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),H(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){P!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),P=I)}function L(I){I!==So?(be(s.CULL_FACE),I!==N&&(I===ls?s.cullFace(s.BACK):I===Mo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),N=I}function b(I){I!==D&&(G&&s.lineWidth(I),D=I)}function H(I,oe,le){I?(be(s.POLYGON_OFFSET_FILL),(U!==oe||F!==le)&&(s.polygonOffset(oe,le),U=oe,F=le)):Me(s.POLYGON_OFFSET_FILL)}function J(I){I?be(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Q(I){I===void 0&&(I=s.TEXTURE0+O-1),j!==I&&(s.activeTexture(I),j=I)}function te(I,oe,le){le===void 0&&(j===null?le=s.TEXTURE0+O-1:le=j);let Te=$[le];Te===void 0&&(Te={type:void 0,texture:void 0},$[le]=Te),(Te.type!==I||Te.texture!==oe)&&(j!==le&&(s.activeTexture(le),j=le),s.bindTexture(I,oe||ge[I]),Te.type=I,Te.texture=oe)}function de(){const I=$[j];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Ve(I){ae.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}function je(I,oe){let le=p.get(oe);le===void 0&&(le=new WeakMap,p.set(oe,le));let Te=le.get(I);Te===void 0&&(Te=s.getUniformBlockIndex(oe,I.name),le.set(I,Te))}function Ne(I,oe){const Te=p.get(oe).get(I);u.get(oe)!==Te&&(s.uniformBlockBinding(oe,Te,I.__bindingPointIndex),u.set(oe,Te))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,$={},o={},m=new WeakMap,v=[],d=null,g=!1,T=null,M=null,A=null,_=null,y=null,E=null,w=null,x=new Ge(0,0,0),S=0,C=!1,P=null,N=null,D=null,U=null,F=null,ne.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:be,disable:Me,bindFramebuffer:ze,drawBuffers:z,useProgram:rt,setBlending:pe,setMaterial:Xe,setFlipSided:Re,setCullFace:L,setLineWidth:b,setPolygonOffset:H,setScissorTest:J,activeTexture:Q,bindTexture:te,unbindTexture:de,compressedTexImage2D:se,compressedTexImage3D:fe,texImage2D:xe,texImage3D:he,updateUBOMapping:je,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:we,texSubImage2D:Ee,texSubImage3D:Ue,compressedTexSubImage2D:ee,compressedTexSubImage3D:ke,scissor:Le,viewport:Ve,reset:ie}}function Sd(s,e,t,i,r,n,l){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let p;const h=new WeakMap;let o=!1;try{o=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,b){return o?new OffscreenCanvas(L,b):hi("canvas")}function v(L,b,H,J){let Q=1;if((L.width>J||L.height>J)&&(Q=J/Math.max(L.width,L.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const te=b?qr:Math.floor,de=te(Q*L.width),se=te(Q*L.height);p===void 0&&(p=m(de,se));const fe=H?m(de,se):p;return fe.width=de,fe.height=se,fe.getContext("2d").drawImage(L,0,0,de,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+de+"x"+se+")."),fe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function d(L){return ks(L.width)&&ks(L.height)}function g(L){return a?!1:L.wrapS!==Nt||L.wrapT!==Nt||L.minFilter!==ct&&L.minFilter!==Rt}function T(L,b){return L.generateMipmaps&&b&&L.minFilter!==ct&&L.minFilter!==Rt}function M(L){s.generateMipmap(L)}function A(L,b,H,J,Q=!1){if(a===!1)return b;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=b;if(b===s.RED&&(H===s.FLOAT&&(te=s.R32F),H===s.HALF_FLOAT&&(te=s.R16F),H===s.UNSIGNED_BYTE&&(te=s.R8)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.R8UI),H===s.UNSIGNED_SHORT&&(te=s.R16UI),H===s.UNSIGNED_INT&&(te=s.R32UI),H===s.BYTE&&(te=s.R8I),H===s.SHORT&&(te=s.R16I),H===s.INT&&(te=s.R32I)),b===s.RG&&(H===s.FLOAT&&(te=s.RG32F),H===s.HALF_FLOAT&&(te=s.RG16F),H===s.UNSIGNED_BYTE&&(te=s.RG8)),b===s.RGBA){const de=Q?qi:We.getTransfer(J);H===s.FLOAT&&(te=s.RGBA32F),H===s.HALF_FLOAT&&(te=s.RGBA16F),H===s.UNSIGNED_BYTE&&(te=de===Ze?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(L,b,H){return T(L,H)===!0||L.isFramebufferTexture&&L.minFilter!==ct&&L.minFilter!==Rt?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function y(L){return L===ct||L===ps||L===sr?s.NEAREST:s.LINEAR}function E(L){const b=L.target;b.removeEventListener("dispose",E),x(b),b.isVideoTexture&&u.delete(b)}function w(L){const b=L.target;b.removeEventListener("dispose",w),C(b)}function x(L){const b=i.get(L);if(b.__webglInit===void 0)return;const H=L.source,J=h.get(H);if(J){const Q=J[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(L),Object.keys(J).length===0&&h.delete(H)}i.remove(L)}function S(L){const b=i.get(L);s.deleteTexture(b.__webglTexture);const H=L.source,J=h.get(H);delete J[b.__cacheKey],l.memory.textures--}function C(L){const b=L.texture,H=i.get(L),J=i.get(b);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),l.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let te=0;te<H.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(H.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)s.deleteFramebuffer(H.__webglFramebuffer[Q]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Q=0,te=b.length;Q<te;Q++){const de=i.get(b[Q]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),l.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(L)}let P=0;function N(){P=0}function D(){const L=P;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),P+=1,L}function U(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function F(L,b){const H=i.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,L,b);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function O(L,b){const H=i.get(L);if(L.version>0&&H.__version!==L.version){ne(H,L,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function G(L,b){const H=i.get(L);if(L.version>0&&H.__version!==L.version){ne(H,L,b);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const H=i.get(L);if(L.version>0&&H.__version!==L.version){ae(H,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}const K={[Vr]:s.REPEAT,[Nt]:s.CLAMP_TO_EDGE,[kr]:s.MIRRORED_REPEAT},j={[ct]:s.NEAREST,[ps]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Rt]:s.LINEAR,[el]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},$={[hl]:s.NEVER,[_l]:s.ALWAYS,[dl]:s.LESS,[Xa]:s.LEQUAL,[pl]:s.EQUAL,[vl]:s.GEQUAL,[ml]:s.GREATER,[gl]:s.NOTEQUAL};function V(L,b,H){if(H?(s.texParameteri(L,s.TEXTURE_WRAP_S,K[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,K[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,K[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,j[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,j[b.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Nt||b.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,y(b.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,y(b.minFilter)),b.minFilter!==ct&&b.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===ct||b.minFilter!==sr&&b.minFilter!==ui||b.type===rn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===fi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Z(L,b){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",E));const J=b.source;let Q=h.get(J);Q===void 0&&(Q={},h.set(J,Q));const te=U(b);if(te!==L.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,H=!0),Q[te].usedTimes++;const de=Q[L.__cacheKey];de!==void 0&&(Q[L.__cacheKey].usedTimes--,de.usedTimes===0&&S(b)),L.__cacheKey=te,L.__webglTexture=Q[te].texture}return H}function ne(L,b,H){let J=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=s.TEXTURE_3D);const Q=Z(L,b),te=b.source;t.bindTexture(J,L.__webglTexture,s.TEXTURE0+H);const de=i.get(te);if(te.version!==de.__version||Q===!0){t.activeTexture(s.TEXTURE0+H);const se=We.getPrimaries(We.workingColorSpace),fe=b.colorSpace===Ct?null:We.getPrimaries(b.colorSpace),Ee=b.colorSpace===Ct||se===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=g(b)&&d(b.image)===!1;let ee=v(b.image,Ue,!1,r.maxTextureSize);ee=Re(b,ee);const ke=d(ee)||a,Be=n.convert(b.format,b.colorSpace);let we=n.convert(b.type),xe=A(b.internalFormat,Be,we,b.colorSpace,b.isVideoTexture);V(J,b,ke);let he;const Le=b.mipmaps,Ve=a&&b.isVideoTexture!==!0&&xe!==Va,je=de.__version===void 0||Q===!0,Ne=_(b,ee,ke);if(b.isDepthTexture)xe=s.DEPTH_COMPONENT,a?b.type===rn?xe=s.DEPTH_COMPONENT32F:b.type===nn?xe=s.DEPTH_COMPONENT24:b.type===Sn?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:b.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Mn&&xe===s.DEPTH_COMPONENT&&b.type!==$r&&b.type!==nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=nn,we=n.convert(b.type)),b.format===jn&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,b.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Sn,we=n.convert(b.type))),je&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,xe,ee.width,ee.height,0,Be,we,null));else if(b.isDataTexture)if(Le.length>0&&ke){Ve&&je&&t.texStorage2D(s.TEXTURE_2D,Ne,xe,Le[0].width,Le[0].height);for(let ie=0,I=Le.length;ie<I;ie++)he=Le[ie],Ve?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,he.width,he.height,Be,we,he.data):t.texImage2D(s.TEXTURE_2D,ie,xe,he.width,he.height,0,Be,we,he.data);b.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(s.TEXTURE_2D,Ne,xe,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,Be,we,ee.data)):t.texImage2D(s.TEXTURE_2D,0,xe,ee.width,ee.height,0,Be,we,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,xe,Le[0].width,Le[0].height,ee.depth);for(let ie=0,I=Le.length;ie<I;ie++)he=Le[ie],b.format!==Ft?Be!==null?Ve?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,ee.depth,Be,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,xe,he.width,he.height,ee.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,ee.depth,Be,we,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,xe,he.width,he.height,ee.depth,0,Be,we,he.data)}else{Ve&&je&&t.texStorage2D(s.TEXTURE_2D,Ne,xe,Le[0].width,Le[0].height);for(let ie=0,I=Le.length;ie<I;ie++)he=Le[ie],b.format!==Ft?Be!==null?Ve?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,he.width,he.height,Be,he.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,he.width,he.height,Be,we,he.data):t.texImage2D(s.TEXTURE_2D,ie,xe,he.width,he.height,0,Be,we,he.data)}else if(b.isDataArrayTexture)Ve?(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,xe,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Be,we,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,Be,we,ee.data);else if(b.isData3DTexture)Ve?(je&&t.texStorage3D(s.TEXTURE_3D,Ne,xe,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Be,we,ee.data)):t.texImage3D(s.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,Be,we,ee.data);else if(b.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(s.TEXTURE_2D,Ne,xe,ee.width,ee.height);else{let ie=ee.width,I=ee.height;for(let oe=0;oe<Ne;oe++)t.texImage2D(s.TEXTURE_2D,oe,xe,ie,I,0,Be,we,null),ie>>=1,I>>=1}}else if(Le.length>0&&ke){Ve&&je&&t.texStorage2D(s.TEXTURE_2D,Ne,xe,Le[0].width,Le[0].height);for(let ie=0,I=Le.length;ie<I;ie++)he=Le[ie],Ve?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be,we,he):t.texImage2D(s.TEXTURE_2D,ie,xe,Be,we,he);b.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(s.TEXTURE_2D,Ne,xe,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,we,ee)):t.texImage2D(s.TEXTURE_2D,0,xe,Be,we,ee);T(b,ke)&&M(J),de.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ae(L,b,H){if(b.image.length!==6)return;const J=Z(L,b),Q=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+H);const te=i.get(Q);if(Q.version!==te.__version||J===!0){t.activeTexture(s.TEXTURE0+H);const de=We.getPrimaries(We.workingColorSpace),se=b.colorSpace===Ct?null:We.getPrimaries(b.colorSpace),fe=b.colorSpace===Ct||de===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Ue=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let ie=0;ie<6;ie++)!Ee&&!Ue?ee[ie]=v(b.image[ie],!1,!0,r.maxCubemapSize):ee[ie]=Ue?b.image[ie].image:b.image[ie],ee[ie]=Re(b,ee[ie]);const ke=ee[0],Be=d(ke)||a,we=n.convert(b.format,b.colorSpace),xe=n.convert(b.type),he=A(b.internalFormat,we,xe,b.colorSpace),Le=a&&b.isVideoTexture!==!0,Ve=te.__version===void 0||J===!0;let je=_(b,ke,Be);V(s.TEXTURE_CUBE_MAP,b,Be);let Ne;if(Ee){Le&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,je,he,ke.width,ke.height);for(let ie=0;ie<6;ie++){Ne=ee[ie].mipmaps;for(let I=0;I<Ne.length;I++){const oe=Ne[I];b.format!==Ft?we!==null?Le?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,oe.width,oe.height,we,xe,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,he,oe.width,oe.height,0,we,xe,oe.data)}}}else{Ne=b.mipmaps,Le&&Ve&&(Ne.length>0&&je++,t.texStorage2D(s.TEXTURE_CUBE_MAP,je,he,ee[0].width,ee[0].height));for(let ie=0;ie<6;ie++)if(Ue){Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ee[ie].width,ee[ie].height,we,xe,ee[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,he,ee[ie].width,ee[ie].height,0,we,xe,ee[ie].data);for(let I=0;I<Ne.length;I++){const le=Ne[I].image[ie].image;Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,le.width,le.height,we,xe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,he,le.width,le.height,0,we,xe,le.data)}}else{Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,xe,ee[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,he,we,xe,ee[ie]);for(let I=0;I<Ne.length;I++){const oe=Ne[I];Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,we,xe,oe.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,he,we,xe,oe.image[ie])}}}T(b,Be)&&M(s.TEXTURE_CUBE_MAP),te.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ue(L,b,H,J,Q,te){const de=n.convert(H.format,H.colorSpace),se=n.convert(H.type),fe=A(H.internalFormat,de,se,H.colorSpace);if(!i.get(b).__hasExternalTextures){const Ue=Math.max(1,b.width>>te),ee=Math.max(1,b.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,fe,Ue,ee,b.depth,0,de,se,null):t.texImage2D(Q,te,fe,Ue,ee,0,de,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),pe(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,i.get(H).__webglTexture,0,_e(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,i.get(H).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let J=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||pe(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===rn?J=s.DEPTH_COMPONENT32F:Q.type===nn&&(J=s.DEPTH_COMPONENT24));const te=_e(b);pe(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,J,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,J,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const J=_e(b);H&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,b.width,b.height):pe(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const J=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<J.length;Q++){const te=J[Q],de=n.convert(te.format,te.colorSpace),se=n.convert(te.type),fe=A(te.internalFormat,de,se,te.colorSpace),Ee=_e(b);H&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,fe,b.width,b.height):pe(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const J=i.get(b.depthTexture).__webglTexture,Q=_e(b);if(b.depthTexture.format===Mn)pe(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(b.depthTexture.format===jn)pe(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Me(L){const b=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(b.__webglFramebuffer,L)}else if(H){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]=s.createRenderbuffer(),ge(b.__webglDepthbuffer[J],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),ge(b.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,b,H){const J=i.get(L);b!==void 0&&ue(J.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Me(L)}function z(L){const b=L.texture,H=i.get(L),J=i.get(b);L.addEventListener("dispose",w),L.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=b.version,l.memory.textures++);const Q=L.isWebGLCubeRenderTarget===!0,te=L.isWebGLMultipleRenderTargets===!0,de=d(L)||a;if(Q){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let fe=0;fe<b.mipmaps.length;fe++)H.__webglFramebuffer[se][fe]=s.createFramebuffer()}else H.__webglFramebuffer[se]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)H.__webglFramebuffer[se]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(te)if(r.drawBuffers){const se=L.texture;for(let fe=0,Ee=se.length;fe<Ee;fe++){const Ue=i.get(se[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&pe(L)===!1){const se=te?b:[b];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Ee=se[fe];H.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const Ue=n.convert(Ee.format,Ee.colorSpace),ee=n.convert(Ee.type),ke=A(Ee.internalFormat,Ue,ee,Ee.colorSpace,L.isXRRenderTarget===!0),Be=_e(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,ke,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),V(s.TEXTURE_CUBE_MAP,b,de);for(let se=0;se<6;se++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)ue(H.__webglFramebuffer[se][fe],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else ue(H.__webglFramebuffer[se],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);T(b,de)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const se=L.texture;for(let fe=0,Ee=se.length;fe<Ee;fe++){const Ue=se[fe],ee=i.get(Ue);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),V(s.TEXTURE_2D,Ue,de),ue(H.__webglFramebuffer,L,Ue,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),T(Ue,de)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?se=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,J.__webglTexture),V(se,b,de),a&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)ue(H.__webglFramebuffer[fe],L,b,s.COLOR_ATTACHMENT0,se,fe);else ue(H.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,se,0);T(b,de)&&M(se),t.unbindTexture()}L.depthBuffer&&Me(L)}function rt(L){const b=d(L)||a,H=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let J=0,Q=H.length;J<Q;J++){const te=H[J];if(T(te,b)){const de=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,se=i.get(te).__webglTexture;t.bindTexture(de,se),M(de),t.unbindTexture()}}}function ve(L){if(a&&L.samples>0&&pe(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],H=L.width,J=L.height;let Q=s.COLOR_BUFFER_BIT;const te=[],de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=i.get(L),fe=L.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&te.push(de);const Ue=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ue===!1&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),fe){const ee=i.get(b[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,H,J,0,0,H,J,Q,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);const Ue=i.get(b[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function _e(L){return Math.min(r.maxSamples,L.samples)}function pe(L){const b=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(L){const b=l.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Re(L,b){const H=L.colorSpace,J=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Wr||H!==$t&&H!==Ct&&(We.getTransfer(H)===Ze?a===!1?e.has("EXT_sRGB")===!0&&J===Ft?(L.format=Wr,L.minFilter=Rt,L.generateMipmaps=!1):b=Ya.sRGBToLinear(b):(J!==Ft||Q!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=ze,this.setupRenderTarget=z,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pe}function Md(s,e,t){const i=t.isWebGL2;function r(n,l=Ct){let a;const c=We.getTransfer(l);if(n===on)return s.UNSIGNED_BYTE;if(n===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return s.BYTE;if(n===nl)return s.SHORT;if(n===$r)return s.UNSIGNED_SHORT;if(n===Fa)return s.INT;if(n===nn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===fi)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===il)return s.ALPHA;if(n===Ft)return s.RGBA;if(n===rl)return s.LUMINANCE;if(n===sl)return s.LUMINANCE_ALPHA;if(n===Mn)return s.DEPTH_COMPONENT;if(n===jn)return s.DEPTH_STENCIL;if(n===Wr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===al)return s.RED;if(n===za)return s.RED_INTEGER;if(n===ol)return s.RG;if(n===Ga)return s.RG_INTEGER;if(n===Ha)return s.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(c===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ms||n===gs||n===vs||n===_s)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ms)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_s)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===xs||n===Ss)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===xs)return c===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ss)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ms||n===ys||n===Es||n===Ts||n===As||n===ws||n===bs||n===Rs||n===Cs||n===Ps||n===Ls||n===Ds||n===Us||n===Is)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ms)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ys)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Es)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ts)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===As)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ws)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bs)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rs)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cs)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ps)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ls)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ds)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Us)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Is)return c===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===Ns||n===Fs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ur)return c===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ns)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===Os||n===Bs||n===zs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ur)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Os)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sn?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}return{convert:r}}class yd extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ed={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,l=null;const a=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,i),g=this._getHandJoint(f,v);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const u=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],h=u.position.distanceTo(p.position),o=.02,m=.005;f.inputState.pinching&&h>o+m?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=o-m&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ed)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=n!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Td extends Qn{constructor(e,t){super();const i=this;let r=null,n=1,l=null,a="local-floor",c=1,f=null,u=null,p=null,h=null,o=null,m=null;const v=t.getContextAttributes();let d=null,g=null;const T=[],M=[],A=new He;let _=null;const y=new It;y.layers.enable(1),y.viewport=new lt;const E=new It;E.layers.enable(2),E.viewport=new lt;const w=[y,E],x=new yd;x.layers.enable(1),x.layers.enable(2);let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=T[V];return Z===void 0&&(Z=new Nr,T[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=T[V];return Z===void 0&&(Z=new Nr,T[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=T[V];return Z===void 0&&(Z=new Nr,T[V]=Z),Z.getHandSpace()};function P(V){const Z=M.indexOf(V.inputSource);if(Z===-1)return;const ne=T[Z];ne!==void 0&&(ne.update(V.inputSource,V.frame,f||l),ne.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",D);for(let V=0;V<T.length;V++){const Z=M[V];Z!==null&&(M[V]=null,T[V].disconnect(Z))}S=null,C=null,e.setRenderTarget(d),o=null,h=null,p=null,r=null,g=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){n=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(V){f=V},this.getBaseLayer=function(){return h!==null?h:o},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",N),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:n};o=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:o}),e.setPixelRatio(1),e.setSize(o.framebufferWidth,o.framebufferHeight,!1),g=new Tn(o.framebufferWidth,o.framebufferHeight,{format:Ft,type:on,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,ne=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?jn:Mn,ne=v.stencil?Sn:nn);const ue={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:n};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Tn(h.textureWidth,h.textureHeight,{format:Ft,type:on,depthTexture:new ro(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ge=e.properties.get(g);ge.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),f=null,l=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(V){for(let Z=0;Z<V.removed.length;Z++){const ne=V.removed[Z],ae=M.indexOf(ne);ae>=0&&(M[ae]=null,T[ae].disconnect(ne))}for(let Z=0;Z<V.added.length;Z++){const ne=V.added[Z];let ae=M.indexOf(ne);if(ae===-1){for(let ge=0;ge<T.length;ge++)if(ge>=M.length){M.push(ne),ae=ge;break}else if(M[ge]===null){M[ge]=ne,ae=ge;break}if(ae===-1)break}const ue=T[ae];ue&&ue.connect(ne)}}const U=new X,F=new X;function O(V,Z,ne){U.setFromMatrixPosition(Z.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);const ae=U.distanceTo(F),ue=Z.projectionMatrix.elements,ge=ne.projectionMatrix.elements,be=ue[14]/(ue[10]-1),Me=ue[14]/(ue[10]+1),ze=(ue[9]+1)/ue[5],z=(ue[9]-1)/ue[5],rt=(ue[8]-1)/ue[0],ve=(ge[8]+1)/ge[0],_e=be*rt,pe=be*ve,Xe=ae/(-rt+ve),Re=Xe*-rt;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Re),V.translateZ(Xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const L=be+Xe,b=Me+Xe,H=_e-Re,J=pe+(ae-Re),Q=ze*Me/b*L,te=z*Me/b*L;V.projectionMatrix.makePerspective(H,J,Q,te,L,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function G(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.near=E.near=y.near=V.near,x.far=E.far=y.far=V.far,(S!==x.near||C!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,C=x.far);const Z=V.parent,ne=x.cameras;G(x,Z);for(let ae=0;ae<ne.length;ae++)G(ne[ae],Z);ne.length===2?O(x,y,E):x.projectionMatrix.copy(y.projectionMatrix),Y(V,x,Z)};function Y(V,Z,ne){ne===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ne.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Xr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&o===null))return c},this.setFoveation=function(V){c=V,h!==null&&(h.fixedFoveation=V),o!==null&&o.fixedFoveation!==void 0&&(o.fixedFoveation=V)};let K=null;function j(V,Z){if(u=Z.getViewerPose(f||l),m=Z,u!==null){const ne=u.views;o!==null&&(e.setRenderTargetFramebuffer(g,o.framebuffer),e.setRenderTarget(g));let ae=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let ue=0;ue<ne.length;ue++){const ge=ne[ue];let be=null;if(o!==null)be=o.getViewport(ge);else{const ze=p.getViewSubImage(h,ge);be=ze.viewport,ue===0&&(e.setRenderTargetTextures(g,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(g))}let Me=w[ue];Me===void 0&&(Me=new It,Me.layers.enable(ue),Me.viewport=new lt,w[ue]=Me),Me.matrix.fromArray(ge.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ge.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(be.x,be.y,be.width,be.height),ue===0&&(x.matrix.copy(Me.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Me)}}for(let ne=0;ne<T.length;ne++){const ae=M[ne],ue=T[ne];ae!==null&&ue!==void 0&&ue.update(ae,Z,f||l)}K&&K(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),m=null}const $=new io;$.setAnimationLoop(j),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}function Ad(s,e){function t(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function i(d,g){g.color.getRGB(d.fogColor.value,eo(s)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function r(d,g,T,M,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?n(d,g):g.isMeshToonMaterial?(n(d,g),p(d,g)):g.isMeshPhongMaterial?(n(d,g),u(d,g)):g.isMeshStandardMaterial?(n(d,g),h(d,g),g.isMeshPhysicalMaterial&&o(d,g,A)):g.isMeshMatcapMaterial?(n(d,g),m(d,g)):g.isMeshDepthMaterial?n(d,g):g.isMeshDistanceMaterial?(n(d,g),v(d,g)):g.isMeshNormalMaterial?n(d,g):g.isLineBasicMaterial?(l(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?c(d,g,T,M):g.isSpriteMaterial?f(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,t(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===Mt&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,t(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===Mt&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,t(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,t(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const T=e.get(g).envMap;if(T&&(d.envMap.value=T,d.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap){d.lightMap.value=g.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=g.lightMapIntensity*M,t(g.lightMap,d.lightMapTransform)}g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,d.aoMapTransform))}function l(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function c(d,g,T,M){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*T,d.scale.value=M*.5,g.map&&(d.map.value=g.map,t(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function f(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function u(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function p(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function h(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,d.roughnessMapTransform)),e.get(g).envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function o(d,g,T){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mt&&d.clearcoatNormalScale.value.negate())),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function v(d,g){const T=e.get(g).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wd(s,e,t,i){let r={},n={},l=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,M){const A=M.program;i.uniformBlockBinding(T,A)}function f(T,M){let A=r[T.id];A===void 0&&(m(T),A=u(T),r[T.id]=A,T.addEventListener("dispose",d));const _=M.program;i.updateUBOMapping(T,_);const y=e.render.frame;n[T.id]!==y&&(h(T),n[T.id]=y)}function u(T){const M=p();T.__bindingPointIndex=M;const A=s.createBuffer(),_=T.__size,y=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,_,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,A),A}function p(){for(let T=0;T<a;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=r[T.id],A=T.uniforms,_=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,E=A.length;y<E;y++){const w=Array.isArray(A[y])?A[y]:[A[y]];for(let x=0,S=w.length;x<S;x++){const C=w[x];if(o(C,y,x,_)===!0){const P=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let U=0;U<N.length;U++){const F=N[U],O=v(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,P+D,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function o(T,M,A,_){const y=T.value,E=M+"_"+A;if(_[E]===void 0)return typeof y=="number"||typeof y=="boolean"?_[E]=y:_[E]=y.clone(),!0;{const w=_[E];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return _[E]=y,!0}else if(w.equals(y)===!1)return w.copy(y),!0}return!1}function m(T){const M=T.uniforms;let A=0;const _=16;for(let E=0,w=M.length;E<w;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,C=x.length;S<C;S++){const P=x[S],N=Array.isArray(P.value)?P.value:[P.value];for(let D=0,U=N.length;D<U;D++){const F=N[D],O=v(F),G=A%_;G!==0&&_-G<O.boundary&&(A+=_-G),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=O.storage}}}const y=A%_;return y>0&&(A+=_-y),T.__size=A,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function d(T){const M=T.target;M.removeEventListener("dispose",d);const A=l.indexOf(M.__bindingPointIndex);l.splice(A,1),s.deleteBuffer(r[M.id]),delete r[M.id],delete n[M.id]}function g(){for(const T in r)s.deleteBuffer(r[T]);l=[],r={},n={}}return{bind:c,update:f,dispose:g}}class uo{constructor(e={}){const{canvas:t=Sl(),context:i=null,depth:r=!0,stencil:n=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=l;const o=new Uint32Array(4),m=new Int32Array(4);let v=null,d=null;const g=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const M=this;let A=!1,_=0,y=0,E=null,w=-1,x=null;const S=new lt,C=new lt;let P=null;const N=new Ge(0);let D=0,U=t.width,F=t.height,O=1,G=null,Y=null;const K=new lt(0,0,U,F),j=new lt(0,0,U,F);let $=!1;const V=new Jr;let Z=!1,ne=!1,ae=null;const ue=new Qe,ge=new He,be=new X,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return E===null?O:1}let z=i;function rt(R,B){for(let W=0;W<R.length;W++){const q=R[W],k=t.getContext(q,B);if(k!==null)return k}return null}try{const R={alpha:!0,depth:r,stencil:n,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",oe,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&B.shift(),z=rt(B,R),z===null)throw rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,_e,pe,Xe,Re,L,b,H,J,Q,te,de,se,fe,Ee,Ue,ee,ke,Be,we,xe,he,Le,Ve;function je(){ve=new Ff(z),_e=new Pf(z,ve,e),ve.init(_e),he=new Md(z,ve,_e),pe=new xd(z,ve,_e),Xe=new zf(z),Re=new sd,L=new Sd(z,ve,pe,Re,_e,he,Xe),b=new Df(M),H=new Nf(M),J=new ql(z,_e),Le=new Rf(z,ve,J,_e),Q=new Of(z,J,Xe,Le),te=new kf(z,Q,J,Xe),Be=new Vf(z,_e,L),Ue=new Lf(Re),de=new rd(M,b,H,ve,_e,Le,Ue),se=new Ad(M,Re),fe=new od,Ee=new dd(ve,_e),ke=new bf(M,b,H,pe,te,h,c),ee=new _d(M,te,_e),Ve=new wd(z,Xe,_e,pe),we=new Cf(z,ve,Xe,_e),xe=new Bf(z,ve,Xe,_e),Xe.programs=de.programs,M.capabilities=_e,M.extensions=ve,M.properties=Re,M.renderLists=fe,M.shadowMap=ee,M.state=pe,M.info=Xe}je();const Ne=new Td(M,z);this.xr=Ne,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(U,F,!1))},this.getSize=function(R){return R.set(U,F)},this.setSize=function(R,B,W=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,F=B,t.width=Math.floor(R*O),t.height=Math.floor(B*O),W===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(U*O,F*O).floor()},this.setDrawingBufferSize=function(R,B,W){U=R,F=B,O=W,t.width=Math.floor(R*W),t.height=Math.floor(B*W),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,B,W,q){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,B,W,q),pe.viewport(S.copy(K).multiplyScalar(O).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,B,W,q){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,B,W,q),pe.scissor(C.copy(j).multiplyScalar(O).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(R){pe.setScissorTest($=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(R=!0,B=!0,W=!0){let q=0;if(R){let k=!1;if(E!==null){const ce=E.texture.format;k=ce===Ha||ce===Ga||ce===za}if(k){const ce=E.texture.type,me=ce===on||ce===nn||ce===$r||ce===Sn||ce===Oa||ce===Ba,ye=ke.getClearColor(),Ae=ke.getClearAlpha(),Ie=ye.r,Ce=ye.g,Pe=ye.b;me?(o[0]=Ie,o[1]=Ce,o[2]=Pe,o[3]=Ae,z.clearBufferuiv(z.COLOR,0,o)):(m[0]=Ie,m[1]=Ce,m[2]=Pe,m[3]=Ae,z.clearBufferiv(z.COLOR,0,m))}else q|=z.COLOR_BUFFER_BIT}B&&(q|=z.DEPTH_BUFFER_BIT),W&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),fe.dispose(),Ee.dispose(),Re.dispose(),b.dispose(),H.dispose(),te.dispose(),Le.dispose(),Ve.dispose(),de.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",gt),Ne.removeEventListener("sessionend",Ke),ae&&(ae.dispose(),ae=null),vt.stop()};function ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=Xe.autoReset,B=ee.enabled,W=ee.autoUpdate,q=ee.needsUpdate,k=ee.type;je(),Xe.autoReset=R,ee.enabled=B,ee.autoUpdate=W,ee.needsUpdate=q,ee.type=k}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){const B=R.target;B.removeEventListener("dispose",le),Te(B)}function Te(R){Se(R),Re.remove(R)}function Se(R){const B=Re.get(R).programs;B!==void 0&&(B.forEach(function(W){de.releaseProgram(W)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,W,q,k,ce){B===null&&(B=Me);const me=k.isMesh&&k.matrixWorld.determinant()<0,ye=go(R,B,W,q,k);pe.setMaterial(q,me);let Ae=W.index,Ie=1;if(q.wireframe===!0){if(Ae=Q.getWireframeAttribute(W),Ae===void 0)return;Ie=2}const Ce=W.drawRange,Pe=W.attributes.position;let et=Ce.start*Ie,yt=(Ce.start+Ce.count)*Ie;ce!==null&&(et=Math.max(et,ce.start*Ie),yt=Math.min(yt,(ce.start+ce.count)*Ie)),Ae!==null?(et=Math.max(et,0),yt=Math.min(yt,Ae.count)):Pe!=null&&(et=Math.max(et,0),yt=Math.min(yt,Pe.count));const at=yt-et;if(at<0||at===1/0)return;Le.setup(k,q,ye,W,Ae);let Ht,$e=we;if(Ae!==null&&(Ht=J.get(Ae),$e=xe,$e.setIndex(Ht)),k.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*ze()),$e.setMode(z.LINES)):$e.setMode(z.TRIANGLES);else if(k.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),pe.setLineWidth(Fe*ze()),k.isLineSegments?$e.setMode(z.LINES):k.isLineLoop?$e.setMode(z.LINE_LOOP):$e.setMode(z.LINE_STRIP)}else k.isPoints?$e.setMode(z.POINTS):k.isSprite&&$e.setMode(z.TRIANGLES);if(k.isBatchedMesh)$e.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)$e.renderInstances(et,at,k.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tr=Math.min(W.instanceCount,Fe);$e.renderInstances(et,at,tr)}else $e.render(et,at)};function qe(R,B,W){R.transparent===!0&&R.side===Kt&&R.forceSinglePass===!1?(R.side=Mt,R.needsUpdate=!0,xi(R,B,W),R.side=ln,R.needsUpdate=!0,xi(R,B,W),R.side=Kt):xi(R,B,W)}this.compile=function(R,B,W=null){W===null&&(W=R),d=Ee.get(W),d.init(),T.push(d),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),R!==W&&R.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(M._useLegacyLights);const q=new Set;return R.traverse(function(k){const ce=k.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const ye=ce[me];qe(ye,W,k),q.add(ye)}else qe(ce,W,k),q.add(ce)}),T.pop(),d=null,q},this.compileAsync=function(R,B,W=null){const q=this.compile(R,B,W);return new Promise(k=>{function ce(){if(q.forEach(function(me){Re.get(me).currentProgram.isReady()&&q.delete(me)}),q.size===0){k(R);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function st(R){Ye&&Ye(R)}function gt(){vt.stop()}function Ke(){vt.start()}const vt=new io;vt.setAnimationLoop(st),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(R){Ye=R,Ne.setAnimationLoop(R),R===null?vt.stop():vt.start()},Ne.addEventListener("sessionstart",gt),Ne.addEventListener("sessionend",Ke),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(B),B=Ne.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,B,E),d=Ee.get(R,T.length),d.init(),T.push(d),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,Z=Ue.init(this.clippingPlanes,ne),v=fe.get(R,g.length),v.init(),g.push(v),Bt(R,B,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,Y),this.info.render.frame++,Z===!0&&Ue.beginShadows();const W=d.state.shadowsArray;if(ee.render(W,R,B),Z===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(v,R),d.setupLights(M._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let k=0,ce=q.length;k<ce;k++){const me=q[k];ns(v,R,me,me.viewport)}}else ns(v,R,B);E!==null&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(M,R,B),Le.resetDefaultState(),w=-1,x=null,T.pop(),T.length>0?d=T[T.length-1]:d=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Bt(R,B,W,q){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){q&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const me=te.update(R),ye=R.material;ye.visible&&v.push(R,me,ye,W,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){const me=te.update(R),ye=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),be.copy(me.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(ue)),Array.isArray(ye)){const Ae=me.groups;for(let Ie=0,Ce=Ae.length;Ie<Ce;Ie++){const Pe=Ae[Ie],et=ye[Pe.materialIndex];et&&et.visible&&v.push(R,me,et,W,be.z,Pe)}}else ye.visible&&v.push(R,me,ye,W,be.z,null)}}const ce=R.children;for(let me=0,ye=ce.length;me<ye;me++)Bt(ce[me],B,W,q)}function ns(R,B,W,q){const k=R.opaque,ce=R.transmissive,me=R.transparent;d.setupLightsView(W),Z===!0&&Ue.setGlobalState(M.clippingPlanes,W),ce.length>0&&mo(k,ce,B,W),q&&pe.viewport(S.copy(q)),k.length>0&&_i(k,B,W),ce.length>0&&_i(ce,B,W),me.length>0&&_i(me,B,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function mo(R,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ce=_e.isWebGL2;ae===null&&(ae=new Tn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?fi:on,minFilter:ui,samples:ce?4:0})),M.getDrawingBufferSize(ge),ce?ae.setSize(ge.x,ge.y):ae.setSize(qr(ge.x),qr(ge.y));const me=M.getRenderTarget();M.setRenderTarget(ae),M.getClearColor(N),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();const ye=M.toneMapping;M.toneMapping=an,_i(R,W,q),L.updateMultisampleRenderTarget(ae),L.updateRenderTargetMipmap(ae);let Ae=!1;for(let Ie=0,Ce=B.length;Ie<Ce;Ie++){const Pe=B[Ie],et=Pe.object,yt=Pe.geometry,at=Pe.material,Ht=Pe.group;if(at.side===Kt&&et.layers.test(q.layers)){const $e=at.side;at.side=Mt,at.needsUpdate=!0,is(et,W,q,yt,at,Ht),at.side=$e,at.needsUpdate=!0,Ae=!0}}Ae===!0&&(L.updateMultisampleRenderTarget(ae),L.updateRenderTargetMipmap(ae)),M.setRenderTarget(me),M.setClearColor(N,D),M.toneMapping=ye}function _i(R,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ce=R.length;k<ce;k++){const me=R[k],ye=me.object,Ae=me.geometry,Ie=q===null?me.material:q,Ce=me.group;ye.layers.test(W.layers)&&is(ye,B,W,Ae,Ie,Ce)}}function is(R,B,W,q,k,ce){R.onBeforeRender(M,B,W,q,k,ce),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(M,B,W,q,R,ce),k.transparent===!0&&k.side===Kt&&k.forceSinglePass===!1?(k.side=Mt,k.needsUpdate=!0,M.renderBufferDirect(W,B,q,k,R,ce),k.side=ln,k.needsUpdate=!0,M.renderBufferDirect(W,B,q,k,R,ce),k.side=Kt):M.renderBufferDirect(W,B,q,k,R,ce),R.onAfterRender(M,B,W,q,k,ce)}function xi(R,B,W){B.isScene!==!0&&(B=Me);const q=Re.get(R),k=d.state.lights,ce=d.state.shadowsArray,me=k.state.version,ye=de.getParameters(R,k.state,ce,B,W),Ae=de.getProgramCacheKey(ye);let Ie=q.programs;q.environment=R.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(R.isMeshStandardMaterial?H:b).get(R.envMap||q.environment),Ie===void 0&&(R.addEventListener("dispose",le),Ie=new Map,q.programs=Ie);let Ce=Ie.get(Ae);if(Ce!==void 0){if(q.currentProgram===Ce&&q.lightsStateVersion===me)return ss(R,ye),Ce}else ye.uniforms=de.getUniforms(R),R.onBuild(W,ye,M),R.onBeforeCompile(ye,M),Ce=de.acquireProgram(ye,Ae),Ie.set(Ae,Ce),q.uniforms=ye.uniforms;const Pe=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),ss(R,ye),q.needsLights=_o(R),q.lightsStateVersion=me,q.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ce,q.uniformsList=null,Ce}function rs(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=Wi.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function ss(R,B){const W=Re.get(R);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function go(R,B,W,q,k){B.isScene!==!0&&(B=Me),L.resetTextureUnits();const ce=B.fog,me=q.isMeshStandardMaterial?B.environment:null,ye=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:$t,Ae=(q.isMeshStandardMaterial?H:b).get(q.envMap||me),Ie=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ce=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color;let at=an;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(at=M.toneMapping);const Ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=Ht!==void 0?Ht.length:0,Fe=Re.get(q),tr=d.state.lights;if(Z===!0&&(ne===!0||R!==x)){const wt=R===x&&q.id===w;Ue.setState(q,R,wt)}let Je=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==tr.state.version||Fe.outputColorSpace!==ye||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||Fe.envMap!==Ae||q.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==Ce||Fe.morphTargets!==Pe||Fe.morphNormals!==et||Fe.morphColors!==yt||Fe.toneMapping!==at||_e.isWebGL2===!0&&Fe.morphTargetsCount!==$e)&&(Je=!0):(Je=!0,Fe.__version=q.version);let un=Fe.currentProgram;Je===!0&&(un=xi(q,B,k));let as=!1,ti=!1,nr=!1;const ht=un.getUniforms(),fn=Fe.uniforms;if(pe.useProgram(un.program)&&(as=!0,ti=!0,nr=!0),q.id!==w&&(w=q.id,ti=!0),as||x!==R){ht.setValue(z,"projectionMatrix",R.projectionMatrix),ht.setValue(z,"viewMatrix",R.matrixWorldInverse);const wt=ht.map.cameraPosition;wt!==void 0&&wt.setValue(z,be.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),x!==R&&(x=R,ti=!0,nr=!0)}if(k.isSkinnedMesh){ht.setOptional(z,k,"bindMatrix"),ht.setOptional(z,k,"bindMatrixInverse");const wt=k.skeleton;wt&&(_e.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),ht.setValue(z,"boneTexture",wt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(ht.setOptional(z,k,"batchingTexture"),ht.setValue(z,"batchingTexture",k._matricesTexture,L));const ir=W.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0&&_e.isWebGL2===!0)&&Be.update(k,W,un),(ti||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,ht.setValue(z,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(fn.envMap.value=Ae,fn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ti&&(ht.setValue(z,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&vo(fn,nr),ce&&q.fog===!0&&se.refreshFogUniforms(fn,ce),se.refreshMaterialUniforms(fn,q,O,F,ae),Wi.upload(z,rs(Fe),fn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Wi.upload(z,rs(Fe),fn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(z,"center",k.center),ht.setValue(z,"modelViewMatrix",k.modelViewMatrix),ht.setValue(z,"normalMatrix",k.normalMatrix),ht.setValue(z,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const wt=q.uniformsGroups;for(let rr=0,xo=wt.length;rr<xo;rr++)if(_e.isWebGL2){const os=wt[rr];Ve.update(os,un),Ve.bind(os,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function vo(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function _o(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,B,W){Re.get(R.texture).__webglTexture=B,Re.get(R.depthTexture).__webglTexture=W;const q=Re.get(R);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,B){const W=Re.get(R);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,W=0){E=R,_=B,y=W;let q=!0,k=null,ce=!1,me=!1;if(R){const Ae=Re.get(R);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Ae.__webglFramebuffer===void 0?L.setupRenderTarget(R):Ae.__hasExternalTextures&&L.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Ce=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ce[B])?k=Ce[B][W]:k=Ce[B],ce=!0):_e.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?k=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[W]:k=Ce,S.copy(R.viewport),C.copy(R.scissor),P=R.scissorTest}else S.copy(K).multiplyScalar(O).floor(),C.copy(j).multiplyScalar(O).floor(),P=$;if(pe.bindFramebuffer(z.FRAMEBUFFER,k)&&_e.drawBuffers&&q&&pe.drawBuffers(R,k),pe.viewport(S),pe.scissor(C),pe.setScissorTest(P),ce){const Ae=Re.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,W)}else if(me){const Ae=Re.get(R.texture),Ie=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Ie)}w=-1},this.readRenderTargetPixels=function(R,B,W,q,k,ce,me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){pe.bindFramebuffer(z.FRAMEBUFFER,ye);try{const Ae=R.texture,Ie=Ae.format,Ce=Ae.type;if(Ie!==Ft&&he.convert(Ie)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ce===fi&&(ve.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ce!==on&&he.convert(Ce)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===rn&&(_e.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-q&&W>=0&&W<=R.height-k&&z.readPixels(B,W,q,k,he.convert(Ie),he.convert(Ce),ce)}finally{const Ae=E!==null?Re.get(E).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(R,B,W=0){const q=Math.pow(2,-W),k=Math.floor(B.image.width*q),ce=Math.floor(B.image.height*q);L.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,R.x,R.y,k,ce),pe.unbindTexture()},this.copyTextureToTexture=function(R,B,W,q=0){const k=B.image.width,ce=B.image.height,me=he.convert(W.format),ye=he.convert(W.type);L.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,R.x,R.y,k,ce,me,ye,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,me,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,R.x,R.y,me,ye,B.image),q===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(R,B,W,q,k=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=R.max.x-R.min.x+1,me=R.max.y-R.min.y+1,ye=R.max.z-R.min.z+1,Ae=he.convert(q.format),Ie=he.convert(q.type);let Ce;if(q.isData3DTexture)L.setTexture3D(q,0),Ce=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)L.setTexture2DArray(q,0),Ce=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Pe=z.getParameter(z.UNPACK_ROW_LENGTH),et=z.getParameter(z.UNPACK_IMAGE_HEIGHT),yt=z.getParameter(z.UNPACK_SKIP_PIXELS),at=z.getParameter(z.UNPACK_SKIP_ROWS),Ht=z.getParameter(z.UNPACK_SKIP_IMAGES),$e=W.isCompressedTexture?W.mipmaps[k]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,$e.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$e.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Ce,k,B.x,B.y,B.z,ce,me,ye,Ae,Ie,$e.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ce,k,B.x,B.y,B.z,ce,me,ye,Ae,$e.data)):z.texSubImage3D(Ce,k,B.x,B.y,B.z,ce,me,ye,Ae,Ie,$e),z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,et),z.pixelStorei(z.UNPACK_SKIP_PIXELS,yt),z.pixelStorei(z.UNPACK_SKIP_ROWS,at),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ht),k===0&&q.generateMipmaps&&z.generateMipmap(Ce),pe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),pe.unbindTexture()},this.resetState=function(){_=0,y=0,E=null,pe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jr?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===ji?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?yn:ka}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yn?ut:$t}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bd extends uo{}bd.prototype.isWebGL1Renderer=!0;class Rd extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ra extends Ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wn=new Qe,Ca=new Qe,ki=[],Pa=new wn,Cd=new Qe,oi=new At,li=new mi;class Pd extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ra(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Cd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wn),Pa.copy(e.boundingBox).applyMatrix4(Wn),this.boundingBox.union(Pa)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wn),li.copy(e.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(li)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(oi.geometry=this.geometry,oi.material=this.material,oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),li.copy(this.boundingSphere),li.applyMatrix4(i),e.ray.intersectsSphere(li)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,Wn),Ca.multiplyMatrices(i,Wn),oi.matrixWorld=Ca,oi.raycast(e,ki);for(let l=0,a=ki.length;l<a;l++){const c=ki[l];c.instanceId=n,c.object=this,t.push(c)}ki.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ra(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fo extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const La={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ld{constructor(e,t,i){const r=this;let n=!1,l=0,a=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,n===!1&&r.onStart!==void 0&&r.onStart(u,l,a),n=!0},this.itemEnd=function(u){l++,r.onProgress!==void 0&&r.onProgress(u,l,a),l===a&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return f.push(u,p),this},this.removeHandler=function(u){const p=f.indexOf(u);return p!==-1&&f.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=f.length;p<h;p+=2){const o=f[p],m=f[p+1];if(o.global&&(o.lastIndex=0),o.test(u))return m}return null}}}const Dd=new Ld;class ts{constructor(e){this.manager=e!==void 0?e:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ts.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ud extends ts{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,l=La.get(e);if(l!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(l),n.manager.itemEnd(e)},0),l;const a=hi("img");function c(){u(),La.add(e,this),t&&t(this),n.manager.itemEnd(e)}function f(p){u(),r&&r(p),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class Id extends ts{constructor(e){super(e)}load(e,t,i,r){const n=new mt,l=new Ud(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class ho extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fr=new Qe,Da=new X,Ua=new X;class Nd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Da.setFromMatrixPosition(e.matrixWorld),t.position.copy(Da),Ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ua),t.updateMatrixWorld(),Fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fd extends Nd{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Od extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bd extends ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zd extends cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);class Gd{constructor(){const e=window.innerWidth/window.innerHeight,t=600;this.cam=new Qr(t*e/-2,t*e/2,t/2,t/-2,1,1e3),this.cam.position.z=100}resize(e,t){const i=e/t,r=600;this.cam.left=-r*i/2,this.cam.right=r*i/2,this.cam.top=r/2,this.cam.bottom=-r/2,this.cam.updateProjectionMatrix()}follow(e){this.cam.position.x+=(e.x-this.cam.position.x)*.1,this.cam.position.y+=(e.y-this.cam.position.y)*.1}}class Hd{constructor(){this.scene=new Rd,this.camera=new Gd,this.renderer=new uo({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(1118481),mt.DEFAULT_MAG_FILTER=ct,mt.DEFAULT_MIN_FILTER=ct}async init(){document.getElementById("game-container").appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this));const e=new Bd(16777215,.5);this.scene.add(e);const t=new Od(16777215,.8);t.position.set(0,10,5),this.scene.add(t)}createBox(e,t,i,r,n){const l=new bn(i,r,10),a=new fo({color:n}),c=new At(l,a);return c.position.set(e,-t,0),this.scene.add(c),c}onWindowResize(){this.camera.resize(window.innerWidth,window.innerHeight),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera.cam)}}var Or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},po={exports:{}};/*!
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
 */(function(s,e){(function(i,r){s.exports=r()})(Or,function(){return function(t){var i={};function r(n){if(i[n])return i[n].exports;var l=i[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}return r.m=t,r.c=i,r.d=function(n,l,a){r.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:a})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,l){if(l&1&&(n=r(n)),l&8||l&4&&typeof n=="object"&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),l&2&&typeof n!="string")for(var c in n)r.d(a,c,(function(f){return n[f]}).bind(null,c));return a},r.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(l,"a",l),l},r.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},r.p="",r(r.s=20)}([function(t,i){var r={};t.exports=r,function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(l,a){var c,f;typeof a=="boolean"?(c=2,f=a):(c=1,f=!0);for(var u=c;u<arguments.length;u++){var p=arguments[u];if(p)for(var h in p)f&&p[h]&&p[h].constructor===Object&&(!l[h]||l[h].constructor===Object)?(l[h]=l[h]||{},r.extend(l[h],f,p[h])):l[h]=p[h]}return l},r.clone=function(l,a){return r.extend({},a,l)},r.keys=function(l){if(Object.keys)return Object.keys(l);var a=[];for(var c in l)a.push(c);return a},r.values=function(l){var a=[];if(Object.keys){for(var c=Object.keys(l),f=0;f<c.length;f++)a.push(l[c[f]]);return a}for(var u in l)a.push(l[u]);return a},r.get=function(l,a,c,f){a=a.split(".").slice(c,f);for(var u=0;u<a.length;u+=1)l=l[a[u]];return l},r.set=function(l,a,c,f,u){var p=a.split(".").slice(f,u);return r.get(l,a,0,-1)[p[p.length-1]]=c,c},r.shuffle=function(l){for(var a=l.length-1;a>0;a--){var c=Math.floor(r.random()*(a+1)),f=l[a];l[a]=l[c],l[c]=f}return l},r.choose=function(l){return l[Math.floor(r.random()*l.length)]},r.isElement=function(l){return typeof HTMLElement<"u"?l instanceof HTMLElement:!!(l&&l.nodeType&&l.nodeName)},r.isArray=function(l){return Object.prototype.toString.call(l)==="[object Array]"},r.isFunction=function(l){return typeof l=="function"},r.isPlainObject=function(l){return typeof l=="object"&&l.constructor===Object},r.isString=function(l){return toString.call(l)==="[object String]"},r.clamp=function(l,a,c){return l<a?a:l>c?c:l},r.sign=function(l){return l<0?-1:1},r.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(l,a){return l=typeof l<"u"?l:0,a=typeof a<"u"?a:1,l+n()*(a-l)};var n=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(l){return l=l.replace("#",""),l.length==3&&(l=l.charAt(0)+l.charAt(0)+l.charAt(1)+l.charAt(1)+l.charAt(2)+l.charAt(2)),parseInt(l,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var l=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[l]||(r.warn(l),r._warnedOnce[l]=!0)},r.deprecated=function(l,a,c){l[a]=r.chain(function(){r.warnOnce("🔅 deprecated 🔅",c)},l[a])},r.nextId=function(){return r._nextId++},r.indexOf=function(l,a){if(l.indexOf)return l.indexOf(a);for(var c=0;c<l.length;c++)if(l[c]===a)return c;return-1},r.map=function(l,a){if(l.map)return l.map(a);for(var c=[],f=0;f<l.length;f+=1)c.push(a(l[f]));return c},r.topologicalSort=function(l){var a=[],c=[],f=[];for(var u in l)!c[u]&&!f[u]&&r._topologicalSort(u,c,f,l,a);return a},r._topologicalSort=function(l,a,c,f,u){var p=f[l]||[];c[l]=!0;for(var h=0;h<p.length;h+=1){var o=p[h];c[o]||a[o]||r._topologicalSort(o,a,c,f,u)}c[l]=!1,a[l]=!0,u.push(l)},r.chain=function(){for(var l=[],a=0;a<arguments.length;a+=1){var c=arguments[a];c._chained?l.push.apply(l,c._chained):l.push(c)}var f=function(){for(var u,p=new Array(arguments.length),h=0,o=arguments.length;h<o;h++)p[h]=arguments[h];for(h=0;h<l.length;h+=1){var m=l[h].apply(u,p);typeof m<"u"&&(u=m)}return u};return f._chained=l,f},r.chainPathBefore=function(l,a,c){return r.set(l,a,r.chain(c,r.get(l,a)))},r.chainPathAfter=function(l,a,c){return r.set(l,a,r.chain(r.get(l,a),c))},r.setDecomp=function(l){r._decomp=l},r.getDecomp=function(){var l=r._decomp;try{!l&&typeof window<"u"&&(l=window.decomp),!l&&typeof Or<"u"&&(l=Or.decomp)}catch{l=null}return l}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){var l={min:{x:0,y:0},max:{x:0,y:0}};return n&&r.update(l,n),l},r.update=function(n,l,a){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var c=0;c<l.length;c++){var f=l[c];f.x>n.max.x&&(n.max.x=f.x),f.x<n.min.x&&(n.min.x=f.x),f.y>n.max.y&&(n.max.y=f.y),f.y<n.min.y&&(n.min.y=f.y)}a&&(a.x>0?n.max.x+=a.x:n.min.x+=a.x,a.y>0?n.max.y+=a.y:n.min.y+=a.y)},r.contains=function(n,l){return l.x>=n.min.x&&l.x<=n.max.x&&l.y>=n.min.y&&l.y<=n.max.y},r.overlaps=function(n,l){return n.min.x<=l.max.x&&n.max.x>=l.min.x&&n.max.y>=l.min.y&&n.min.y<=l.max.y},r.translate=function(n,l){n.min.x+=l.x,n.max.x+=l.x,n.min.y+=l.y,n.max.y+=l.y},r.shift=function(n,l){var a=n.max.x-n.min.x,c=n.max.y-n.min.y;n.min.x=l.x,n.max.x=l.x+a,n.min.y=l.y,n.max.y=l.y+c}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n,l){return{x:n||0,y:l||0}},r.clone=function(n){return{x:n.x,y:n.y}},r.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},r.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},r.rotate=function(n,l,a){var c=Math.cos(l),f=Math.sin(l);a||(a={});var u=n.x*c-n.y*f;return a.y=n.x*f+n.y*c,a.x=u,a},r.rotateAbout=function(n,l,a,c){var f=Math.cos(l),u=Math.sin(l);c||(c={});var p=a.x+((n.x-a.x)*f-(n.y-a.y)*u);return c.y=a.y+((n.x-a.x)*u+(n.y-a.y)*f),c.x=p,c},r.normalise=function(n){var l=r.magnitude(n);return l===0?{x:0,y:0}:{x:n.x/l,y:n.y/l}},r.dot=function(n,l){return n.x*l.x+n.y*l.y},r.cross=function(n,l){return n.x*l.y-n.y*l.x},r.cross3=function(n,l,a){return(l.x-n.x)*(a.y-n.y)-(l.y-n.y)*(a.x-n.x)},r.add=function(n,l,a){return a||(a={}),a.x=n.x+l.x,a.y=n.y+l.y,a},r.sub=function(n,l,a){return a||(a={}),a.x=n.x-l.x,a.y=n.y-l.y,a},r.mult=function(n,l){return{x:n.x*l,y:n.y*l}},r.div=function(n,l){return{x:n.x/l,y:n.y/l}},r.perp=function(n,l){return l=l===!0?-1:1,{x:l*-n.y,y:l*n.x}},r.neg=function(n){return{x:-n.x,y:-n.y}},r.angle=function(n,l){return Math.atan2(l.y-n.y,l.x-n.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}()},function(t,i,r){var n={};t.exports=n;var l=r(2),a=r(0);(function(){n.create=function(c,f){for(var u=[],p=0;p<c.length;p++){var h=c[p],o={x:h.x,y:h.y,index:p,body:f,isInternal:!1};u.push(o)}return u},n.fromPath=function(c,f){var u=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return c.replace(u,function(h,o,m){p.push({x:parseFloat(o),y:parseFloat(m)})}),n.create(p,f)},n.centre=function(c){for(var f=n.area(c,!0),u={x:0,y:0},p,h,o,m=0;m<c.length;m++)o=(m+1)%c.length,p=l.cross(c[m],c[o]),h=l.mult(l.add(c[m],c[o]),p),u=l.add(u,h);return l.div(u,6*f)},n.mean=function(c){for(var f={x:0,y:0},u=0;u<c.length;u++)f.x+=c[u].x,f.y+=c[u].y;return l.div(f,c.length)},n.area=function(c,f){for(var u=0,p=c.length-1,h=0;h<c.length;h++)u+=(c[p].x-c[h].x)*(c[p].y+c[h].y),p=h;return f?u/2:Math.abs(u)/2},n.inertia=function(c,f){for(var u=0,p=0,h=c,o,m,v=0;v<h.length;v++)m=(v+1)%h.length,o=Math.abs(l.cross(h[m],h[v])),u+=o*(l.dot(h[m],h[m])+l.dot(h[m],h[v])+l.dot(h[v],h[v])),p+=o;return f/6*(u/p)},n.translate=function(c,f,u){u=typeof u<"u"?u:1;var p=c.length,h=f.x*u,o=f.y*u,m;for(m=0;m<p;m++)c[m].x+=h,c[m].y+=o;return c},n.rotate=function(c,f,u){if(f!==0){var p=Math.cos(f),h=Math.sin(f),o=u.x,m=u.y,v=c.length,d,g,T,M;for(M=0;M<v;M++)d=c[M],g=d.x-o,T=d.y-m,d.x=o+(g*p-T*h),d.y=m+(g*h+T*p);return c}},n.contains=function(c,f){for(var u=f.x,p=f.y,h=c.length,o=c[h-1],m,v=0;v<h;v++){if(m=c[v],(u-o.x)*(m.y-o.y)+(p-o.y)*(o.x-m.x)>0)return!1;o=m}return!0},n.scale=function(c,f,u,p){if(f===1&&u===1)return c;p=p||n.centre(c);for(var h,o,m=0;m<c.length;m++)h=c[m],o=l.sub(h,p),c[m].x=p.x+o.x*f,c[m].y=p.y+o.y*u;return c},n.chamfer=function(c,f,u,p,h){typeof f=="number"?f=[f]:f=f||[8],u=typeof u<"u"?u:-1,p=p||2,h=h||14;for(var o=[],m=0;m<c.length;m++){var v=c[m-1>=0?m-1:c.length-1],d=c[m],g=c[(m+1)%c.length],T=f[m<f.length?m:f.length-1];if(T===0){o.push(d);continue}var M=l.normalise({x:d.y-v.y,y:v.x-d.x}),A=l.normalise({x:g.y-d.y,y:d.x-g.x}),_=Math.sqrt(2*Math.pow(T,2)),y=l.mult(a.clone(M),T),E=l.normalise(l.mult(l.add(M,A),.5)),w=l.sub(d,l.mult(E,_)),x=u;u===-1&&(x=Math.pow(T,.32)*1.75),x=a.clamp(x,p,h),x%2===1&&(x+=1);for(var S=Math.acos(l.dot(M,A)),C=S/x,P=0;P<x;P++)o.push(l.add(l.rotate(y,C*P),w))}return o},n.clockwiseSort=function(c){var f=n.mean(c);return c.sort(function(u,p){return l.angle(f,u)-l.angle(f,p)}),c},n.isConvex=function(c){var f=0,u=c.length,p,h,o,m;if(u<3)return null;for(p=0;p<u;p++)if(h=(p+1)%u,o=(p+2)%u,m=(c[h].x-c[p].x)*(c[o].y-c[h].y),m-=(c[h].y-c[p].y)*(c[o].x-c[h].x),m<0?f|=1:m>0&&(f|=2),f===3)return!1;return f!==0?!0:null},n.hull=function(c){var f=[],u=[],p,h;for(c=c.slice(0),c.sort(function(o,m){var v=o.x-m.x;return v!==0?v:o.y-m.y}),h=0;h<c.length;h+=1){for(p=c[h];u.length>=2&&l.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}for(h=c.length-1;h>=0;h-=1){for(p=c[h];f.length>=2&&l.cross3(f[f.length-2],f[f.length-1],p)<=0;)f.pop();f.push(p)}return f.pop(),u.pop(),f.concat(u)}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(2),c=r(7),f=r(0),u=r(1),p=r(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(o){var m={id:f.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:l.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},v=f.extend(m,o);return h(v,o),v},n.nextGroup=function(o){return o?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var h=function(o,m){m=m||{},n.set(o,{bounds:o.bounds||u.create(o.vertices),positionPrev:o.positionPrev||a.clone(o.position),anglePrev:o.anglePrev||o.angle,vertices:o.vertices,parts:o.parts||[o],isStatic:o.isStatic,isSleeping:o.isSleeping,parent:o.parent||o}),l.rotate(o.vertices,o.angle,o.position),p.rotate(o.axes,o.angle),u.update(o.bounds,o.vertices,o.velocity),n.set(o,{axes:m.axes||o.axes,area:m.area||o.area,mass:m.mass||o.mass,inertia:m.inertia||o.inertia});var v=o.isStatic?"#14151f":f.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),d=o.isStatic?"#555":"#ccc",g=o.isStatic&&o.render.fillStyle===null?1:0;o.render.fillStyle=o.render.fillStyle||v,o.render.strokeStyle=o.render.strokeStyle||d,o.render.lineWidth=o.render.lineWidth||g,o.render.sprite.xOffset+=-(o.bounds.min.x-o.position.x)/(o.bounds.max.x-o.bounds.min.x),o.render.sprite.yOffset+=-(o.bounds.min.y-o.position.y)/(o.bounds.max.y-o.bounds.min.y)};n.set=function(o,m,v){var d;typeof m=="string"&&(d=m,m={},m[d]=v);for(d in m)if(Object.prototype.hasOwnProperty.call(m,d))switch(v=m[d],d){case"isStatic":n.setStatic(o,v);break;case"isSleeping":c.set(o,v);break;case"mass":n.setMass(o,v);break;case"density":n.setDensity(o,v);break;case"inertia":n.setInertia(o,v);break;case"vertices":n.setVertices(o,v);break;case"position":n.setPosition(o,v);break;case"angle":n.setAngle(o,v);break;case"velocity":n.setVelocity(o,v);break;case"angularVelocity":n.setAngularVelocity(o,v);break;case"speed":n.setSpeed(o,v);break;case"angularSpeed":n.setAngularSpeed(o,v);break;case"parts":n.setParts(o,v);break;case"centre":n.setCentre(o,v);break;default:o[d]=v}},n.setStatic=function(o,m){for(var v=0;v<o.parts.length;v++){var d=o.parts[v];d.isStatic=m,m?(d._original={restitution:d.restitution,friction:d.friction,mass:d.mass,inertia:d.inertia,density:d.density,inverseMass:d.inverseMass,inverseInertia:d.inverseInertia},d.restitution=0,d.friction=1,d.mass=d.inertia=d.density=1/0,d.inverseMass=d.inverseInertia=0,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.anglePrev=d.angle,d.angularVelocity=0,d.speed=0,d.angularSpeed=0,d.motion=0):d._original&&(d.restitution=d._original.restitution,d.friction=d._original.friction,d.mass=d._original.mass,d.inertia=d._original.inertia,d.density=d._original.density,d.inverseMass=d._original.inverseMass,d.inverseInertia=d._original.inverseInertia,d._original=null)}},n.setMass=function(o,m){var v=o.inertia/(o.mass/6);o.inertia=v*(m/6),o.inverseInertia=1/o.inertia,o.mass=m,o.inverseMass=1/o.mass,o.density=o.mass/o.area},n.setDensity=function(o,m){n.setMass(o,m*o.area),o.density=m},n.setInertia=function(o,m){o.inertia=m,o.inverseInertia=1/o.inertia},n.setVertices=function(o,m){m[0].body===o?o.vertices=m:o.vertices=l.create(m,o),o.axes=p.fromVertices(o.vertices),o.area=l.area(o.vertices),n.setMass(o,o.density*o.area);var v=l.centre(o.vertices);l.translate(o.vertices,v,-1),n.setInertia(o,n._inertiaScale*l.inertia(o.vertices,o.mass)),l.translate(o.vertices,o.position),u.update(o.bounds,o.vertices,o.velocity)},n.setParts=function(o,m,v){var d;for(m=m.slice(0),o.parts.length=0,o.parts.push(o),o.parent=o,d=0;d<m.length;d++){var g=m[d];g!==o&&(g.parent=o,o.parts.push(g))}if(o.parts.length!==1){if(v=typeof v<"u"?v:!0,v){var T=[];for(d=0;d<m.length;d++)T=T.concat(m[d].vertices);l.clockwiseSort(T);var M=l.hull(T),A=l.centre(M);n.setVertices(o,M),l.translate(o.vertices,A)}var _=n._totalProperties(o);o.area=_.area,o.parent=o,o.position.x=_.centre.x,o.position.y=_.centre.y,o.positionPrev.x=_.centre.x,o.positionPrev.y=_.centre.y,n.setMass(o,_.mass),n.setInertia(o,_.inertia),n.setPosition(o,_.centre)}},n.setCentre=function(o,m,v){v?(o.positionPrev.x+=m.x,o.positionPrev.y+=m.y,o.position.x+=m.x,o.position.y+=m.y):(o.positionPrev.x=m.x-(o.position.x-o.positionPrev.x),o.positionPrev.y=m.y-(o.position.y-o.positionPrev.y),o.position.x=m.x,o.position.y=m.y)},n.setPosition=function(o,m,v){var d=a.sub(m,o.position);v?(o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.velocity.x=d.x,o.velocity.y=d.y,o.speed=a.magnitude(d)):(o.positionPrev.x+=d.x,o.positionPrev.y+=d.y);for(var g=0;g<o.parts.length;g++){var T=o.parts[g];T.position.x+=d.x,T.position.y+=d.y,l.translate(T.vertices,d),u.update(T.bounds,T.vertices,o.velocity)}},n.setAngle=function(o,m,v){var d=m-o.angle;v?(o.anglePrev=o.angle,o.angularVelocity=d,o.angularSpeed=Math.abs(d)):o.anglePrev+=d;for(var g=0;g<o.parts.length;g++){var T=o.parts[g];T.angle+=d,l.rotate(T.vertices,d,o.position),p.rotate(T.axes,d),u.update(T.bounds,T.vertices,o.velocity),g>0&&a.rotateAbout(T.position,d,o.position,T.position)}},n.setVelocity=function(o,m){var v=o.deltaTime/n._baseDelta;o.positionPrev.x=o.position.x-m.x*v,o.positionPrev.y=o.position.y-m.y*v,o.velocity.x=(o.position.x-o.positionPrev.x)/v,o.velocity.y=(o.position.y-o.positionPrev.y)/v,o.speed=a.magnitude(o.velocity)},n.getVelocity=function(o){var m=n._baseDelta/o.deltaTime;return{x:(o.position.x-o.positionPrev.x)*m,y:(o.position.y-o.positionPrev.y)*m}},n.getSpeed=function(o){return a.magnitude(n.getVelocity(o))},n.setSpeed=function(o,m){n.setVelocity(o,a.mult(a.normalise(n.getVelocity(o)),m))},n.setAngularVelocity=function(o,m){var v=o.deltaTime/n._baseDelta;o.anglePrev=o.angle-m*v,o.angularVelocity=(o.angle-o.anglePrev)/v,o.angularSpeed=Math.abs(o.angularVelocity)},n.getAngularVelocity=function(o){return(o.angle-o.anglePrev)*n._baseDelta/o.deltaTime},n.getAngularSpeed=function(o){return Math.abs(n.getAngularVelocity(o))},n.setAngularSpeed=function(o,m){n.setAngularVelocity(o,f.sign(n.getAngularVelocity(o))*m)},n.translate=function(o,m,v){n.setPosition(o,a.add(o.position,m),v)},n.rotate=function(o,m,v,d){if(!v)n.setAngle(o,o.angle+m,d);else{var g=Math.cos(m),T=Math.sin(m),M=o.position.x-v.x,A=o.position.y-v.y;n.setPosition(o,{x:v.x+(M*g-A*T),y:v.y+(M*T+A*g)},d),n.setAngle(o,o.angle+m,d)}},n.scale=function(o,m,v,d){var g=0,T=0;d=d||o.position;for(var M=0;M<o.parts.length;M++){var A=o.parts[M];l.scale(A.vertices,m,v,d),A.axes=p.fromVertices(A.vertices),A.area=l.area(A.vertices),n.setMass(A,o.density*A.area),l.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),n.setInertia(A,n._inertiaScale*l.inertia(A.vertices,A.mass)),l.translate(A.vertices,{x:A.position.x,y:A.position.y}),M>0&&(g+=A.area,T+=A.inertia),A.position.x=d.x+(A.position.x-d.x)*m,A.position.y=d.y+(A.position.y-d.y)*v,u.update(A.bounds,A.vertices,o.velocity)}o.parts.length>1&&(o.area=g,o.isStatic||(n.setMass(o,o.density*g),n.setInertia(o,T))),o.circleRadius&&(m===v?o.circleRadius*=m:o.circleRadius=null)},n.update=function(o,m){m=(typeof m<"u"?m:1e3/60)*o.timeScale;var v=m*m,d=n._timeCorrection?m/(o.deltaTime||m):1,g=1-o.frictionAir*(m/f._baseDelta),T=(o.position.x-o.positionPrev.x)*d,M=(o.position.y-o.positionPrev.y)*d;o.velocity.x=T*g+o.force.x/o.mass*v,o.velocity.y=M*g+o.force.y/o.mass*v,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.position.x+=o.velocity.x,o.position.y+=o.velocity.y,o.deltaTime=m,o.angularVelocity=(o.angle-o.anglePrev)*g*d+o.torque/o.inertia*v,o.anglePrev=o.angle,o.angle+=o.angularVelocity;for(var A=0;A<o.parts.length;A++){var _=o.parts[A];l.translate(_.vertices,o.velocity),A>0&&(_.position.x+=o.velocity.x,_.position.y+=o.velocity.y),o.angularVelocity!==0&&(l.rotate(_.vertices,o.angularVelocity,o.position),p.rotate(_.axes,o.angularVelocity),A>0&&a.rotateAbout(_.position,o.angularVelocity,o.position,_.position)),u.update(_.bounds,_.vertices,o.velocity)}},n.updateVelocities=function(o){var m=n._baseDelta/o.deltaTime,v=o.velocity;v.x=(o.position.x-o.positionPrev.x)*m,v.y=(o.position.y-o.positionPrev.y)*m,o.speed=Math.sqrt(v.x*v.x+v.y*v.y),o.angularVelocity=(o.angle-o.anglePrev)*m,o.angularSpeed=Math.abs(o.angularVelocity)},n.applyForce=function(o,m,v){var d={x:m.x-o.position.x,y:m.y-o.position.y};o.force.x+=v.x,o.force.y+=v.y,o.torque+=d.x*v.y-d.y*v.x},n._totalProperties=function(o){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},v=o.parts.length===1?0:1;v<o.parts.length;v++){var d=o.parts[v],g=d.mass!==1/0?d.mass:1;m.mass+=g,m.area+=d.area,m.inertia+=d.inertia,m.centre=a.add(m.centre,a.mult(d.position,g))}return m.centre=a.div(m.centre,m.mass),m}})()},function(t,i,r){var n={};t.exports=n;var l=r(0);(function(){n.on=function(a,c,f){for(var u=c.split(" "),p,h=0;h<u.length;h++)p=u[h],a.events=a.events||{},a.events[p]=a.events[p]||[],a.events[p].push(f);return f},n.off=function(a,c,f){if(!c){a.events={};return}typeof c=="function"&&(f=c,c=l.keys(a.events).join(" "));for(var u=c.split(" "),p=0;p<u.length;p++){var h=a.events[u[p]],o=[];if(f&&h)for(var m=0;m<h.length;m++)h[m]!==f&&o.push(h[m]);a.events[u[p]]=o}},n.trigger=function(a,c,f){var u,p,h,o,m=a.events;if(m&&l.keys(m).length>0){f||(f={}),u=c.split(" ");for(var v=0;v<u.length;v++)if(p=u[v],h=m[p],h){o=l.clone(f,!1),o.name=p,o.source=a;for(var d=0;d<h.length;d++)h[d].apply(a,[o])}}}})()},function(t,i,r){var n={};t.exports=n;var l=r(5),a=r(0),c=r(1),f=r(4);(function(){n.create=function(u){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},u)},n.setModified=function(u,p,h,o){if(u.isModified=p,p&&u.cache&&(u.cache.allBodies=null,u.cache.allConstraints=null,u.cache.allComposites=null),h&&u.parent&&n.setModified(u.parent,p,h,o),o)for(var m=0;m<u.composites.length;m++){var v=u.composites[m];n.setModified(v,p,h,o)}},n.add=function(u,p){var h=[].concat(p);l.trigger(u,"beforeAdd",{object:p});for(var o=0;o<h.length;o++){var m=h[o];switch(m.type){case"body":if(m.parent!==m){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(u,m);break;case"constraint":n.addConstraint(u,m);break;case"composite":n.addComposite(u,m);break;case"mouseConstraint":n.addConstraint(u,m.constraint);break}}return l.trigger(u,"afterAdd",{object:p}),u},n.remove=function(u,p,h){var o=[].concat(p);l.trigger(u,"beforeRemove",{object:p});for(var m=0;m<o.length;m++){var v=o[m];switch(v.type){case"body":n.removeBody(u,v,h);break;case"constraint":n.removeConstraint(u,v,h);break;case"composite":n.removeComposite(u,v,h);break;case"mouseConstraint":n.removeConstraint(u,v.constraint);break}}return l.trigger(u,"afterRemove",{object:p}),u},n.addComposite=function(u,p){return u.composites.push(p),p.parent=u,n.setModified(u,!0,!0,!1),u},n.removeComposite=function(u,p,h){var o=a.indexOf(u.composites,p);if(o!==-1&&n.removeCompositeAt(u,o),h)for(var m=0;m<u.composites.length;m++)n.removeComposite(u.composites[m],p,!0);return u},n.removeCompositeAt=function(u,p){return u.composites.splice(p,1),n.setModified(u,!0,!0,!1),u},n.addBody=function(u,p){return u.bodies.push(p),n.setModified(u,!0,!0,!1),u},n.removeBody=function(u,p,h){var o=a.indexOf(u.bodies,p);if(o!==-1&&n.removeBodyAt(u,o),h)for(var m=0;m<u.composites.length;m++)n.removeBody(u.composites[m],p,!0);return u},n.removeBodyAt=function(u,p){return u.bodies.splice(p,1),n.setModified(u,!0,!0,!1),u},n.addConstraint=function(u,p){return u.constraints.push(p),n.setModified(u,!0,!0,!1),u},n.removeConstraint=function(u,p,h){var o=a.indexOf(u.constraints,p);if(o!==-1&&n.removeConstraintAt(u,o),h)for(var m=0;m<u.composites.length;m++)n.removeConstraint(u.composites[m],p,!0);return u},n.removeConstraintAt=function(u,p){return u.constraints.splice(p,1),n.setModified(u,!0,!0,!1),u},n.clear=function(u,p,h){if(h)for(var o=0;o<u.composites.length;o++)n.clear(u.composites[o],p,!0);return p?u.bodies=u.bodies.filter(function(m){return m.isStatic}):u.bodies.length=0,u.constraints.length=0,u.composites.length=0,n.setModified(u,!0,!0,!1),u},n.allBodies=function(u){if(u.cache&&u.cache.allBodies)return u.cache.allBodies;for(var p=[].concat(u.bodies),h=0;h<u.composites.length;h++)p=p.concat(n.allBodies(u.composites[h]));return u.cache&&(u.cache.allBodies=p),p},n.allConstraints=function(u){if(u.cache&&u.cache.allConstraints)return u.cache.allConstraints;for(var p=[].concat(u.constraints),h=0;h<u.composites.length;h++)p=p.concat(n.allConstraints(u.composites[h]));return u.cache&&(u.cache.allConstraints=p),p},n.allComposites=function(u){if(u.cache&&u.cache.allComposites)return u.cache.allComposites;for(var p=[].concat(u.composites),h=0;h<u.composites.length;h++)p=p.concat(n.allComposites(u.composites[h]));return u.cache&&(u.cache.allComposites=p),p},n.get=function(u,p,h){var o,m;switch(h){case"body":o=n.allBodies(u);break;case"constraint":o=n.allConstraints(u);break;case"composite":o=n.allComposites(u).concat(u);break}return o?(m=o.filter(function(v){return v.id.toString()===p.toString()}),m.length===0?null:m[0]):null},n.move=function(u,p,h){return n.remove(u,p),n.add(h,p),u},n.rebase=function(u){for(var p=n.allBodies(u).concat(n.allConstraints(u)).concat(n.allComposites(u)),h=0;h<p.length;h++)p[h].id=a.nextId();return u},n.translate=function(u,p,h){for(var o=h?n.allBodies(u):u.bodies,m=0;m<o.length;m++)f.translate(o[m],p);return u},n.rotate=function(u,p,h,o){for(var m=Math.cos(p),v=Math.sin(p),d=o?n.allBodies(u):u.bodies,g=0;g<d.length;g++){var T=d[g],M=T.position.x-h.x,A=T.position.y-h.y;f.setPosition(T,{x:h.x+(M*m-A*v),y:h.y+(M*v+A*m)}),f.rotate(T,p)}return u},n.scale=function(u,p,h,o,m){for(var v=m?n.allBodies(u):u.bodies,d=0;d<v.length;d++){var g=v[d],T=g.position.x-o.x,M=g.position.y-o.y;f.setPosition(g,{x:o.x+T*p,y:o.y+M*h}),f.scale(g,p,h)}return u},n.bounds=function(u){for(var p=n.allBodies(u),h=[],o=0;o<p.length;o+=1){var m=p[o];h.push(m.bounds.min,m.bounds.max)}return c.create(h)}})()},function(t,i,r){var n={};t.exports=n;var l=r(4),a=r(5),c=r(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(f,u){for(var p=u/c._baseDelta,h=n._motionSleepThreshold,o=0;o<f.length;o++){var m=f[o],v=l.getSpeed(m),d=l.getAngularSpeed(m),g=v*v+d*d;if(m.force.x!==0||m.force.y!==0){n.set(m,!1);continue}var T=Math.min(m.motion,g),M=Math.max(m.motion,g);m.motion=n._minBias*T+(1-n._minBias)*M,m.sleepThreshold>0&&m.motion<h?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/p&&n.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},n.afterCollisions=function(f){for(var u=n._motionSleepThreshold,p=0;p<f.length;p++){var h=f[p];if(h.isActive){var o=h.collision,m=o.bodyA.parent,v=o.bodyB.parent;if(!(m.isSleeping&&v.isSleeping||m.isStatic||v.isStatic)&&(m.isSleeping||v.isSleeping)){var d=m.isSleeping&&!m.isStatic?m:v,g=d===m?v:m;!d.isStatic&&g.motion>u&&n.set(d,!1)}}}},n.set=function(f,u){var p=f.isSleeping;u?(f.isSleeping=!0,f.sleepCounter=f.sleepThreshold,f.positionImpulse.x=0,f.positionImpulse.y=0,f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.anglePrev=f.angle,f.speed=0,f.angularSpeed=0,f.motion=0,p||a.trigger(f,"sleepStart")):(f.isSleeping=!1,f.sleepCounter=0,p&&a.trigger(f,"sleepEnd"))}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(9);(function(){var c=[],f={overlap:0,axis:null},u={overlap:0,axis:null};n.create=function(p,h){return{pair:null,collided:!1,bodyA:p,bodyB:h,parentA:p.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},n.collides=function(p,h,o){if(n._overlapAxes(f,p.vertices,h.vertices,p.axes),f.overlap<=0||(n._overlapAxes(u,h.vertices,p.vertices,h.axes),u.overlap<=0))return null;var m=o&&o.table[a.id(p,h)],v;m?v=m.collision:(v=n.create(p,h),v.collided=!0,v.bodyA=p.id<h.id?p:h,v.bodyB=p.id<h.id?h:p,v.parentA=v.bodyA.parent,v.parentB=v.bodyB.parent),p=v.bodyA,h=v.bodyB;var d;f.overlap<u.overlap?d=f:d=u;var g=v.normal,T=v.supports,M=d.axis,A=M.x,_=M.y;A*(h.position.x-p.position.x)+_*(h.position.y-p.position.y)<0?(g.x=A,g.y=_):(g.x=-A,g.y=-_),v.tangent.x=-g.y,v.tangent.y=g.x,v.depth=d.overlap,v.penetration.x=g.x*v.depth,v.penetration.y=g.y*v.depth;var y=n._findSupports(p,h,g,1),E=0;if(l.contains(p.vertices,y[0])&&(T[E++]=y[0]),l.contains(p.vertices,y[1])&&(T[E++]=y[1]),E<2){var w=n._findSupports(h,p,g,-1);l.contains(h.vertices,w[0])&&(T[E++]=w[0]),E<2&&l.contains(h.vertices,w[1])&&(T[E++]=w[1])}return E===0&&(T[E++]=y[0]),T.length=E,v},n._overlapAxes=function(p,h,o,m){var v=h.length,d=o.length,g=h[0].x,T=h[0].y,M=o[0].x,A=o[0].y,_=m.length,y=Number.MAX_VALUE,E=0,w,x,S,C,P,N;for(P=0;P<_;P++){var D=m[P],U=D.x,F=D.y,O=g*U+T*F,G=M*U+A*F,Y=O,K=G;for(N=1;N<v;N+=1)C=h[N].x*U+h[N].y*F,C>Y?Y=C:C<O&&(O=C);for(N=1;N<d;N+=1)C=o[N].x*U+o[N].y*F,C>K?K=C:C<G&&(G=C);if(x=Y-G,S=K-O,w=x<S?x:S,w<y&&(y=w,E=P,w<=0))break}p.axis=m[E],p.overlap=y},n._projectToAxis=function(p,h,o){for(var m=h[0].x*o.x+h[0].y*o.y,v=m,d=1;d<h.length;d+=1){var g=h[d].x*o.x+h[d].y*o.y;g>v?v=g:g<m&&(m=g)}p.min=m,p.max=v},n._findSupports=function(p,h,o,m){var v=h.vertices,d=v.length,g=p.position.x,T=p.position.y,M=o.x*m,A=o.y*m,_=Number.MAX_VALUE,y,E,w,x,S;for(S=0;S<d;S+=1)E=v[S],x=M*(g-E.x)+A*(T-E.y),x<_&&(_=x,y=E);return w=v[(d+y.index-1)%d],_=M*(g-w.x)+A*(T-w.y),E=v[(y.index+1)%d],M*(g-E.x)+A*(T-E.y)<_?(c[0]=y,c[1]=E,c):(c[0]=y,c[1]=w,c)}})()},function(t,i,r){var n={};t.exports=n;var l=r(16);(function(){n.create=function(a,c){var f=a.bodyA,u=a.bodyB,p={id:n.id(f,u),bodyA:f,bodyB:u,collision:a,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:f.isSensor||u.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(p,a,c),p},n.update=function(a,c,f){var u=a.contacts,p=c.supports,h=a.activeContacts,o=c.parentA,m=c.parentB,v=o.vertices.length;a.isActive=!0,a.timeUpdated=f,a.collision=c,a.separation=c.depth,a.inverseMass=o.inverseMass+m.inverseMass,a.friction=o.friction<m.friction?o.friction:m.friction,a.frictionStatic=o.frictionStatic>m.frictionStatic?o.frictionStatic:m.frictionStatic,a.restitution=o.restitution>m.restitution?o.restitution:m.restitution,a.slop=o.slop>m.slop?o.slop:m.slop,c.pair=a,h.length=0;for(var d=0;d<p.length;d++){var g=p[d],T=g.body===o?g.index:v+g.index,M=u[T];M?h.push(M):h.push(u[T]=l.create(g))}},n.setActive=function(a,c,f){c?(a.isActive=!0,a.timeUpdated=f):(a.isActive=!1,a.activeContacts.length=0)},n.id=function(a,c){return a.id<c.id?"A"+a.id+"B"+c.id:"A"+c.id+"B"+a.id}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(2),c=r(7),f=r(1),u=r(11),p=r(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(h){var o=h;o.bodyA&&!o.pointA&&(o.pointA={x:0,y:0}),o.bodyB&&!o.pointB&&(o.pointB={x:0,y:0});var m=o.bodyA?a.add(o.bodyA.position,o.pointA):o.pointA,v=o.bodyB?a.add(o.bodyB.position,o.pointB):o.pointB,d=a.magnitude(a.sub(m,v));o.length=typeof o.length<"u"?o.length:d,o.id=o.id||p.nextId(),o.label=o.label||"Constraint",o.type="constraint",o.stiffness=o.stiffness||(o.length>0?1:.7),o.damping=o.damping||0,o.angularStiffness=o.angularStiffness||0,o.angleA=o.bodyA?o.bodyA.angle:o.angleA,o.angleB=o.bodyB?o.bodyB.angle:o.angleB,o.plugin={};var g={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return o.length===0&&o.stiffness>.1?(g.type="pin",g.anchors=!1):o.stiffness<.9&&(g.type="spring"),o.render=p.extend(g,o.render),o},n.preSolveAll=function(h){for(var o=0;o<h.length;o+=1){var m=h[o],v=m.constraintImpulse;m.isStatic||v.x===0&&v.y===0&&v.angle===0||(m.position.x+=v.x,m.position.y+=v.y,m.angle+=v.angle)}},n.solveAll=function(h,o){for(var m=p.clamp(o/p._baseDelta,0,1),v=0;v<h.length;v+=1){var d=h[v],g=!d.bodyA||d.bodyA&&d.bodyA.isStatic,T=!d.bodyB||d.bodyB&&d.bodyB.isStatic;(g||T)&&n.solve(h[v],m)}for(v=0;v<h.length;v+=1)d=h[v],g=!d.bodyA||d.bodyA&&d.bodyA.isStatic,T=!d.bodyB||d.bodyB&&d.bodyB.isStatic,!g&&!T&&n.solve(h[v],m)},n.solve=function(h,o){var m=h.bodyA,v=h.bodyB,d=h.pointA,g=h.pointB;if(!(!m&&!v)){m&&!m.isStatic&&(a.rotate(d,m.angle-h.angleA,d),h.angleA=m.angle),v&&!v.isStatic&&(a.rotate(g,v.angle-h.angleB,g),h.angleB=v.angle);var T=d,M=g;if(m&&(T=a.add(m.position,d)),v&&(M=a.add(v.position,g)),!(!T||!M)){var A=a.sub(T,M),_=a.magnitude(A);_<n._minLength&&(_=n._minLength);var y=(_-h.length)/_,E=h.stiffness>=1||h.length===0,w=E?h.stiffness*o:h.stiffness*o*o,x=h.damping*o,S=a.mult(A,y*w),C=(m?m.inverseMass:0)+(v?v.inverseMass:0),P=(m?m.inverseInertia:0)+(v?v.inverseInertia:0),N=C+P,D,U,F,O,G;if(x>0){var Y=a.create();F=a.div(A,_),G=a.sub(v&&a.sub(v.position,v.positionPrev)||Y,m&&a.sub(m.position,m.positionPrev)||Y),O=a.dot(F,G)}m&&!m.isStatic&&(U=m.inverseMass/C,m.constraintImpulse.x-=S.x*U,m.constraintImpulse.y-=S.y*U,m.position.x-=S.x*U,m.position.y-=S.y*U,x>0&&(m.positionPrev.x-=x*F.x*O*U,m.positionPrev.y-=x*F.y*O*U),D=a.cross(d,S)/N*n._torqueDampen*m.inverseInertia*(1-h.angularStiffness),m.constraintImpulse.angle-=D,m.angle-=D),v&&!v.isStatic&&(U=v.inverseMass/C,v.constraintImpulse.x+=S.x*U,v.constraintImpulse.y+=S.y*U,v.position.x+=S.x*U,v.position.y+=S.y*U,x>0&&(v.positionPrev.x+=x*F.x*O*U,v.positionPrev.y+=x*F.y*O*U),D=a.cross(g,S)/N*n._torqueDampen*v.inverseInertia*(1-h.angularStiffness),v.constraintImpulse.angle+=D,v.angle+=D)}}},n.postSolveAll=function(h){for(var o=0;o<h.length;o++){var m=h[o],v=m.constraintImpulse;if(!(m.isStatic||v.x===0&&v.y===0&&v.angle===0)){c.set(m,!1);for(var d=0;d<m.parts.length;d++){var g=m.parts[d];l.translate(g.vertices,v),d>0&&(g.position.x+=v.x,g.position.y+=v.y),v.angle!==0&&(l.rotate(g.vertices,v.angle,m.position),u.rotate(g.axes,v.angle),d>0&&a.rotateAbout(g.position,v.angle,m.position,g.position)),f.update(g.bounds,g.vertices,m.velocity)}v.angle*=n._warming,v.x*=n._warming,v.y*=n._warming}}},n.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},n.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}}})()},function(t,i,r){var n={};t.exports=n;var l=r(2),a=r(0);(function(){n.fromVertices=function(c){for(var f={},u=0;u<c.length;u++){var p=(u+1)%c.length,h=l.normalise({x:c[p].y-c[u].y,y:c[u].x-c[p].x}),o=h.y===0?1/0:h.x/h.y;o=o.toFixed(3).toString(),f[o]=h}return a.values(f)},n.rotate=function(c,f){if(f!==0)for(var u=Math.cos(f),p=Math.sin(f),h=0;h<c.length;h++){var o=c[h],m;m=o.x*u-o.y*p,o.y=o.x*p+o.y*u,o.x=m}}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(0),c=r(4),f=r(1),u=r(2);(function(){n.rectangle=function(p,h,o,m,v){v=v||{};var d={label:"Rectangle Body",position:{x:p,y:h},vertices:l.fromPath("L 0 0 L "+o+" 0 L "+o+" "+m+" L 0 "+m)};if(v.chamfer){var g=v.chamfer;d.vertices=l.chamfer(d.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete v.chamfer}return c.create(a.extend({},d,v))},n.trapezoid=function(p,h,o,m,v,d){d=d||{},v*=.5;var g=(1-v*2)*o,T=o*v,M=T+g,A=M+T,_;v<.5?_="L 0 0 L "+T+" "+-m+" L "+M+" "+-m+" L "+A+" 0":_="L 0 0 L "+M+" "+-m+" L "+A+" 0";var y={label:"Trapezoid Body",position:{x:p,y:h},vertices:l.fromPath(_)};if(d.chamfer){var E=d.chamfer;y.vertices=l.chamfer(y.vertices,E.radius,E.quality,E.qualityMin,E.qualityMax),delete d.chamfer}return c.create(a.extend({},y,d))},n.circle=function(p,h,o,m,v){m=m||{};var d={label:"Circle Body",circleRadius:o};v=v||25;var g=Math.ceil(Math.max(10,Math.min(v,o)));return g%2===1&&(g+=1),n.polygon(p,h,g,o,a.extend({},d,m))},n.polygon=function(p,h,o,m,v){if(v=v||{},o<3)return n.circle(p,h,m,v);for(var d=2*Math.PI/o,g="",T=d*.5,M=0;M<o;M+=1){var A=T+M*d,_=Math.cos(A)*m,y=Math.sin(A)*m;g+="L "+_.toFixed(3)+" "+y.toFixed(3)+" "}var E={label:"Polygon Body",position:{x:p,y:h},vertices:l.fromPath(g)};if(v.chamfer){var w=v.chamfer;E.vertices=l.chamfer(E.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete v.chamfer}return c.create(a.extend({},E,v))},n.fromVertices=function(p,h,o,m,v,d,g,T){var M=a.getDecomp(),A,_,y,E,w,x,S,C,P,N,D;for(A=!!(M&&M.quickDecomp),m=m||{},y=[],v=typeof v<"u"?v:!1,d=typeof d<"u"?d:.01,g=typeof g<"u"?g:10,T=typeof T<"u"?T:.01,a.isArray(o[0])||(o=[o]),N=0;N<o.length;N+=1)if(x=o[N],E=l.isConvex(x),w=!E,w&&!A&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),E||!A)E?x=l.clockwiseSort(x):x=l.hull(x),y.push({position:{x:p,y:h},vertices:x});else{var U=x.map(function(ae){return[ae.x,ae.y]});M.makeCCW(U),d!==!1&&M.removeCollinearPoints(U,d),T!==!1&&M.removeDuplicatePoints&&M.removeDuplicatePoints(U,T);var F=M.quickDecomp(U);for(S=0;S<F.length;S++){var O=F[S],G=O.map(function(ae){return{x:ae[0],y:ae[1]}});g>0&&l.area(G)<g||y.push({position:l.centre(G),vertices:G})}}for(S=0;S<y.length;S++)y[S]=c.create(a.extend(y[S],m));if(v){var Y=5;for(S=0;S<y.length;S++){var K=y[S];for(C=S+1;C<y.length;C++){var j=y[C];if(f.overlaps(K.bounds,j.bounds)){var $=K.vertices,V=j.vertices;for(P=0;P<K.vertices.length;P++)for(D=0;D<j.vertices.length;D++){var Z=u.magnitudeSquared(u.sub($[(P+1)%$.length],V[D])),ne=u.magnitudeSquared(u.sub($[P],V[(D+1)%V.length]));Z<Y&&ne<Y&&($[P].isInternal=!0,V[D].isInternal=!0)}}}}}return y.length>1?(_=c.create(a.extend({parts:y.slice(0)},m)),c.setPosition(_,{x:p,y:h}),_):y[0]}})()},function(t,i,r){var n={};t.exports=n;var l=r(0),a=r(8);(function(){n.create=function(c){var f={bodies:[],pairs:null};return l.extend(f,c)},n.setBodies=function(c,f){c.bodies=f.slice(0)},n.clear=function(c){c.bodies=[]},n.collisions=function(c){var f=[],u=c.pairs,p=c.bodies,h=p.length,o=n.canCollide,m=a.collides,v,d;for(p.sort(n._compareBoundsX),v=0;v<h;v++){var g=p[v],T=g.bounds,M=g.bounds.max.x,A=g.bounds.max.y,_=g.bounds.min.y,y=g.isStatic||g.isSleeping,E=g.parts.length,w=E===1;for(d=v+1;d<h;d++){var x=p[d],S=x.bounds;if(S.min.x>M)break;if(!(A<S.min.y||_>S.max.y)&&!(y&&(x.isStatic||x.isSleeping))&&o(g.collisionFilter,x.collisionFilter)){var C=x.parts.length;if(w&&C===1){var P=m(g,x,u);P&&f.push(P)}else for(var N=E>1?1:0,D=C>1?1:0,U=N;U<E;U++)for(var F=g.parts[U],T=F.bounds,O=D;O<C;O++){var G=x.parts[O],S=G.bounds;if(!(T.min.x>S.max.x||T.max.x<S.min.x||T.max.y<S.min.y||T.min.y>S.max.y)){var P=m(F,G,u);P&&f.push(P)}}}}}return f},n.canCollide=function(c,f){return c.group===f.group&&c.group!==0?c.group>0:(c.mask&f.category)!==0&&(f.mask&c.category)!==0},n._compareBoundsX=function(c,f){return c.bounds.min.x-f.bounds.min.x}})()},function(t,i,r){var n={};t.exports=n;var l=r(0);(function(){n.create=function(a){var c={};return a||l.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=a||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(f){var u=n._getRelativeMousePosition(f,c.element,c.pixelRatio),p=f.changedTouches;p&&(c.button=0,f.preventDefault()),c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=f},c.mousedown=function(f){var u=n._getRelativeMousePosition(f,c.element,c.pixelRatio),p=f.changedTouches;p?(c.button=0,f.preventDefault()):c.button=f.button,c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=f},c.mouseup=function(f){var u=n._getRelativeMousePosition(f,c.element,c.pixelRatio),p=f.changedTouches;p&&f.preventDefault(),c.button=-1,c.absolute.x=u.x,c.absolute.y=u.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=f},c.mousewheel=function(f){c.wheelDelta=Math.max(-1,Math.min(1,f.wheelDelta||-f.detail)),f.preventDefault()},n.setElement(c,c.element),c},n.setElement=function(a,c){a.element=c,c.addEventListener("mousemove",a.mousemove),c.addEventListener("mousedown",a.mousedown),c.addEventListener("mouseup",a.mouseup),c.addEventListener("mousewheel",a.mousewheel),c.addEventListener("DOMMouseScroll",a.mousewheel),c.addEventListener("touchmove",a.mousemove),c.addEventListener("touchstart",a.mousedown),c.addEventListener("touchend",a.mouseup)},n.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},n.setOffset=function(a,c){a.offset.x=c.x,a.offset.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n.setScale=function(a,c){a.scale.x=c.x,a.scale.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n._getRelativeMousePosition=function(a,c,f){var u=c.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,o=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,m=a.changedTouches,v,d;return m?(v=m[0].pageX-u.left-h,d=m[0].pageY-u.top-o):(v=a.pageX-u.left-h,d=a.pageY-u.top-o),{x:v/(c.clientWidth/(c.width||c.clientWidth)*f),y:d/(c.clientHeight/(c.height||c.clientHeight)*f)}}})()},function(t,i,r){var n={};t.exports=n;var l=r(0);(function(){n._registry={},n.register=function(a){if(n.isPlugin(a)||l.warn("Plugin.register:",n.toString(a),"does not implement all required fields."),a.name in n._registry){var c=n._registry[a.name],f=n.versionParse(a.version).number,u=n.versionParse(c.version).number;f>u?(l.warn("Plugin.register:",n.toString(c),"was upgraded to",n.toString(a)),n._registry[a.name]=a):f<u?l.warn("Plugin.register:",n.toString(c),"can not be downgraded to",n.toString(a)):a!==c&&l.warn("Plugin.register:",n.toString(a),"is already registered to different plugin object")}else n._registry[a.name]=a;return a},n.resolve=function(a){return n._registry[n.dependencyParse(a).name]},n.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},n.isPlugin=function(a){return a&&a.name&&a.version&&a.install},n.isUsed=function(a,c){return a.used.indexOf(c)>-1},n.isFor=function(a,c){var f=a.for&&n.dependencyParse(a.for);return!a.for||c.name===f.name&&n.versionSatisfies(c.version,f.range)},n.use=function(a,c){if(a.uses=(a.uses||[]).concat(c||[]),a.uses.length===0){l.warn("Plugin.use:",n.toString(a),"does not specify any dependencies to install.");return}for(var f=n.dependencies(a),u=l.topologicalSort(f),p=[],h=0;h<u.length;h+=1)if(u[h]!==a.name){var o=n.resolve(u[h]);if(!o){p.push("❌ "+u[h]);continue}n.isUsed(a,o.name)||(n.isFor(o,a)||(l.warn("Plugin.use:",n.toString(o),"is for",o.for,"but installed on",n.toString(a)+"."),o._warned=!0),o.install?o.install(a):(l.warn("Plugin.use:",n.toString(o),"does not specify an install function."),o._warned=!0),o._warned?(p.push("🔶 "+n.toString(o)),delete o._warned):p.push("✅ "+n.toString(o)),a.used.push(o.name))}p.length>0&&l.info(p.join("  "))},n.dependencies=function(a,c){var f=n.dependencyParse(a),u=f.name;if(c=c||{},!(u in c)){a=n.resolve(a)||a,c[u]=l.map(a.uses||[],function(h){n.isPlugin(h)&&n.register(h);var o=n.dependencyParse(h),m=n.resolve(h);return m&&!n.versionSatisfies(m.version,o.range)?(l.warn("Plugin.dependencies:",n.toString(m),"does not satisfy",n.toString(o),"used by",n.toString(f)+"."),m._warned=!0,a._warned=!0):m||(l.warn("Plugin.dependencies:",n.toString(h),"used by",n.toString(f),"could not be resolved."),a._warned=!0),o.name});for(var p=0;p<c[u].length;p+=1)n.dependencies(c[u][p],c);return c}},n.dependencyParse=function(a){if(l.isString(a)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(a)||l.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},n.versionParse=function(a){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(a)||l.warn("Plugin.versionParse:",a,"is not a valid version or range.");var f=c.exec(a),u=Number(f[4]),p=Number(f[5]),h=Number(f[6]);return{isRange:!!(f[1]||f[2]),version:f[3],range:a,operator:f[1]||f[2]||"",major:u,minor:p,patch:h,parts:[u,p,h],prerelease:f[7],number:u*1e8+p*1e4+h}},n.versionSatisfies=function(a,c){c=c||"*";var f=n.versionParse(c),u=n.versionParse(a);if(f.isRange){if(f.operator==="*"||a==="*")return!0;if(f.operator===">")return u.number>f.number;if(f.operator===">=")return u.number>=f.number;if(f.operator==="~")return u.major===f.major&&u.minor===f.minor&&u.patch>=f.patch;if(f.operator==="^")return f.major>0?u.major===f.major&&u.number>=f.number:f.minor>0?u.minor===f.minor&&u.patch>=f.patch:u.patch===f.patch}return a===c||a==="*"}})()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,r){var n={};t.exports=n;var l=r(7),a=r(18),c=r(13),f=r(19),u=r(5),p=r(6),h=r(10),o=r(0),m=r(4);(function(){n.create=function(v){v=v||{};var d={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},g=o.extend(d,v);return g.world=v.world||p.create({label:"World"}),g.pairs=v.pairs||f.create(),g.detector=v.detector||c.create(),g.grid={buckets:[]},g.world.gravity=g.gravity,g.broadphase=g.grid,g.metrics={},g},n.update=function(v,d){var g=o.now(),T=v.world,M=v.detector,A=v.pairs,_=v.timing,y=_.timestamp,E;d=typeof d<"u"?d:o._baseDelta,d*=_.timeScale,_.timestamp+=d,_.lastDelta=d;var w={timestamp:_.timestamp,delta:d};u.trigger(v,"beforeUpdate",w);var x=p.allBodies(T),S=p.allConstraints(T);for(T.isModified&&(c.setBodies(M,x),p.setModified(T,!1,!1,!0)),v.enableSleeping&&l.update(x,d),n._bodiesApplyGravity(x,v.gravity),d>0&&n._bodiesUpdate(x,d),h.preSolveAll(x),E=0;E<v.constraintIterations;E++)h.solveAll(S,d);h.postSolveAll(x),M.pairs=v.pairs;var C=c.collisions(M);f.update(A,C,y),v.enableSleeping&&l.afterCollisions(A.list),A.collisionStart.length>0&&u.trigger(v,"collisionStart",{pairs:A.collisionStart});var P=o.clamp(20/v.positionIterations,0,1);for(a.preSolvePosition(A.list),E=0;E<v.positionIterations;E++)a.solvePosition(A.list,d,P);for(a.postSolvePosition(x),h.preSolveAll(x),E=0;E<v.constraintIterations;E++)h.solveAll(S,d);for(h.postSolveAll(x),a.preSolveVelocity(A.list),E=0;E<v.velocityIterations;E++)a.solveVelocity(A.list,d);return n._bodiesUpdateVelocities(x),A.collisionActive.length>0&&u.trigger(v,"collisionActive",{pairs:A.collisionActive}),A.collisionEnd.length>0&&u.trigger(v,"collisionEnd",{pairs:A.collisionEnd}),n._bodiesClearForces(x),u.trigger(v,"afterUpdate",w),v.timing.lastElapsed=o.now()-g,v},n.merge=function(v,d){if(o.extend(v,d),d.world){v.world=d.world,n.clear(v);for(var g=p.allBodies(v.world),T=0;T<g.length;T++){var M=g[T];l.set(M,!1),M.id=o.nextId()}}},n.clear=function(v){f.clear(v.pairs),c.clear(v.detector)},n._bodiesClearForces=function(v){for(var d=v.length,g=0;g<d;g++){var T=v[g];T.force.x=0,T.force.y=0,T.torque=0}},n._bodiesApplyGravity=function(v,d){var g=typeof d.scale<"u"?d.scale:.001,T=v.length;if(!(d.x===0&&d.y===0||g===0))for(var M=0;M<T;M++){var A=v[M];A.isStatic||A.isSleeping||(A.force.y+=A.mass*d.y*g,A.force.x+=A.mass*d.x*g)}},n._bodiesUpdate=function(v,d){for(var g=v.length,T=0;T<g;T++){var M=v[T];M.isStatic||M.isSleeping||m.update(M,d)}},n._bodiesUpdateVelocities=function(v){for(var d=v.length,g=0;g<d;g++)m.updateVelocities(v[g])}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(0),c=r(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(f){var u,p,h,o=f.length;for(u=0;u<o;u++)p=f[u],p.isActive&&(h=p.activeContacts.length,p.collision.parentA.totalContacts+=h,p.collision.parentB.totalContacts+=h)},n.solvePosition=function(f,u,p){var h,o,m,v,d,g,T,M,A=n._positionDampen*(p||1),_=a.clamp(u/a._baseDelta,0,1),y=f.length;for(h=0;h<y;h++)o=f[h],!(!o.isActive||o.isSensor)&&(m=o.collision,v=m.parentA,d=m.parentB,g=m.normal,o.separation=g.x*(d.positionImpulse.x+m.penetration.x-v.positionImpulse.x)+g.y*(d.positionImpulse.y+m.penetration.y-v.positionImpulse.y));for(h=0;h<y;h++)o=f[h],!(!o.isActive||o.isSensor)&&(m=o.collision,v=m.parentA,d=m.parentB,g=m.normal,M=o.separation-o.slop*_,(v.isStatic||d.isStatic)&&(M*=2),v.isStatic||v.isSleeping||(T=A/v.totalContacts,v.positionImpulse.x+=g.x*M*T,v.positionImpulse.y+=g.y*M*T),d.isStatic||d.isSleeping||(T=A/d.totalContacts,d.positionImpulse.x-=g.x*M*T,d.positionImpulse.y-=g.y*M*T))},n.postSolvePosition=function(f){for(var u=n._positionWarming,p=f.length,h=l.translate,o=c.update,m=0;m<p;m++){var v=f[m],d=v.positionImpulse,g=d.x,T=d.y,M=v.velocity;if(v.totalContacts=0,g!==0||T!==0){for(var A=0;A<v.parts.length;A++){var _=v.parts[A];h(_.vertices,d),o(_.bounds,_.vertices,M),_.position.x+=g,_.position.y+=T}v.positionPrev.x+=g,v.positionPrev.y+=T,g*M.x+T*M.y<0?(d.x=0,d.y=0):(d.x*=u,d.y*=u)}}},n.preSolveVelocity=function(f){var u=f.length,p,h;for(p=0;p<u;p++){var o=f[p];if(!(!o.isActive||o.isSensor)){var m=o.activeContacts,v=m.length,d=o.collision,g=d.parentA,T=d.parentB,M=d.normal,A=d.tangent;for(h=0;h<v;h++){var _=m[h],y=_.vertex,E=_.normalImpulse,w=_.tangentImpulse;if(E!==0||w!==0){var x=M.x*E+A.x*w,S=M.y*E+A.y*w;g.isStatic||g.isSleeping||(g.positionPrev.x+=x*g.inverseMass,g.positionPrev.y+=S*g.inverseMass,g.anglePrev+=g.inverseInertia*((y.x-g.position.x)*S-(y.y-g.position.y)*x)),T.isStatic||T.isSleeping||(T.positionPrev.x-=x*T.inverseMass,T.positionPrev.y-=S*T.inverseMass,T.anglePrev-=T.inverseInertia*((y.x-T.position.x)*S-(y.y-T.position.y)*x))}}}}},n.solveVelocity=function(f,u){var p=u/a._baseDelta,h=p*p,o=h*p,m=-n._restingThresh*p,v=n._restingThreshTangent,d=n._frictionNormalMultiplier*p,g=n._frictionMaxStatic,T=f.length,M,A,_,y;for(_=0;_<T;_++){var E=f[_];if(!(!E.isActive||E.isSensor)){var w=E.collision,x=w.parentA,S=w.parentB,C=x.velocity,P=S.velocity,N=w.normal.x,D=w.normal.y,U=w.tangent.x,F=w.tangent.y,O=E.activeContacts,G=O.length,Y=1/G,K=x.inverseMass+S.inverseMass,j=E.friction*E.frictionStatic*d;for(C.x=x.position.x-x.positionPrev.x,C.y=x.position.y-x.positionPrev.y,P.x=S.position.x-S.positionPrev.x,P.y=S.position.y-S.positionPrev.y,x.angularVelocity=x.angle-x.anglePrev,S.angularVelocity=S.angle-S.anglePrev,y=0;y<G;y++){var $=O[y],V=$.vertex,Z=V.x-x.position.x,ne=V.y-x.position.y,ae=V.x-S.position.x,ue=V.y-S.position.y,ge=C.x-ne*x.angularVelocity,be=C.y+Z*x.angularVelocity,Me=P.x-ue*S.angularVelocity,ze=P.y+ae*S.angularVelocity,z=ge-Me,rt=be-ze,ve=N*z+D*rt,_e=U*z+F*rt,pe=E.separation+ve,Xe=Math.min(pe,1);Xe=pe<0?0:Xe;var Re=Xe*j;_e<-Re||_e>Re?(A=_e>0?_e:-_e,M=E.friction*(_e>0?1:-1)*o,M<-A?M=-A:M>A&&(M=A)):(M=_e,A=g);var L=Z*D-ne*N,b=ae*D-ue*N,H=Y/(K+x.inverseInertia*L*L+S.inverseInertia*b*b),J=(1+E.restitution)*ve*H;if(M*=H,ve<m)$.normalImpulse=0;else{var Q=$.normalImpulse;$.normalImpulse+=J,$.normalImpulse>0&&($.normalImpulse=0),J=$.normalImpulse-Q}if(_e<-v||_e>v)$.tangentImpulse=0;else{var te=$.tangentImpulse;$.tangentImpulse+=M,$.tangentImpulse<-A&&($.tangentImpulse=-A),$.tangentImpulse>A&&($.tangentImpulse=A),M=$.tangentImpulse-te}var de=N*J+U*M,se=D*J+F*M;x.isStatic||x.isSleeping||(x.positionPrev.x+=de*x.inverseMass,x.positionPrev.y+=se*x.inverseMass,x.anglePrev+=(Z*se-ne*de)*x.inverseInertia),S.isStatic||S.isSleeping||(S.positionPrev.x-=de*S.inverseMass,S.positionPrev.y-=se*S.inverseMass,S.anglePrev-=(ae*se-ue*de)*S.inverseInertia)}}}}})()},function(t,i,r){var n={};t.exports=n;var l=r(9),a=r(0);(function(){n.create=function(c){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},n.update=function(c,f,u){var p=c.list,h=p.length,o=c.table,m=f.length,v=c.collisionStart,d=c.collisionEnd,g=c.collisionActive,T,M,A,_;for(v.length=0,d.length=0,g.length=0,_=0;_<h;_++)p[_].confirmedActive=!1;for(_=0;_<m;_++)T=f[_],A=T.pair,A?(A.isActive?g.push(A):v.push(A),l.update(A,T,u),A.confirmedActive=!0):(A=l.create(T,u),o[A.id]=A,v.push(A),p.push(A));var y=[];for(h=p.length,_=0;_<h;_++)A=p[_],A.confirmedActive||(l.setActive(A,!1,u),d.push(A),!A.collision.bodyA.isSleeping&&!A.collision.bodyB.isSleeping&&y.push(_));for(_=0;_<y.length;_++)M=y[_]-_,A=p[M],p.splice(M,1),delete o[A.id]},n.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()},function(t,i,r){var n=t.exports=r(21);n.Axes=r(11),n.Bodies=r(12),n.Body=r(4),n.Bounds=r(1),n.Collision=r(8),n.Common=r(0),n.Composite=r(6),n.Composites=r(22),n.Constraint=r(10),n.Contact=r(16),n.Detector=r(13),n.Engine=r(17),n.Events=r(5),n.Grid=r(23),n.Mouse=r(14),n.MouseConstraint=r(24),n.Pair=r(9),n.Pairs=r(19),n.Plugin=r(15),n.Query=r(25),n.Render=r(26),n.Resolver=r(18),n.Runner=r(27),n.SAT=r(28),n.Sleeping=r(7),n.Svg=r(29),n.Vector=r(2),n.Vertices=r(3),n.World=r(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,i,r){var n={};t.exports=n;var l=r(15),a=r(0);(function(){n.name="matter-js",n.version="0.19.0",n.uses=[],n.used=[],n.use=function(){l.use(n,Array.prototype.slice.call(arguments))},n.before=function(c,f){return c=c.replace(/^Matter./,""),a.chainPathBefore(n,c,f)},n.after=function(c,f){return c=c.replace(/^Matter./,""),a.chainPathAfter(n,c,f)}})()},function(t,i,r){var n={};t.exports=n;var l=r(6),a=r(10),c=r(0),f=r(4),u=r(12),p=c.deprecated;(function(){n.stack=function(h,o,m,v,d,g,T){for(var M=l.create({label:"Stack"}),A=h,_=o,y,E=0,w=0;w<v;w++){for(var x=0,S=0;S<m;S++){var C=T(A,_,S,w,y,E);if(C){var P=C.bounds.max.y-C.bounds.min.y,N=C.bounds.max.x-C.bounds.min.x;P>x&&(x=P),f.translate(C,{x:N*.5,y:P*.5}),A=C.bounds.max.x+d,l.addBody(M,C),y=C,E+=1}else A+=d}_+=x+g,A=h}return M},n.chain=function(h,o,m,v,d,g){for(var T=h.bodies,M=1;M<T.length;M++){var A=T[M-1],_=T[M],y=A.bounds.max.y-A.bounds.min.y,E=A.bounds.max.x-A.bounds.min.x,w=_.bounds.max.y-_.bounds.min.y,x=_.bounds.max.x-_.bounds.min.x,S={bodyA:A,pointA:{x:E*o,y:y*m},bodyB:_,pointB:{x:x*v,y:w*d}},C=c.extend(S,g);l.addConstraint(h,a.create(C))}return h.label+=" Chain",h},n.mesh=function(h,o,m,v,d){var g=h.bodies,T,M,A,_,y;for(T=0;T<m;T++){for(M=1;M<o;M++)A=g[M-1+T*o],_=g[M+T*o],l.addConstraint(h,a.create(c.extend({bodyA:A,bodyB:_},d)));if(T>0)for(M=0;M<o;M++)A=g[M+(T-1)*o],_=g[M+T*o],l.addConstraint(h,a.create(c.extend({bodyA:A,bodyB:_},d))),v&&M>0&&(y=g[M-1+(T-1)*o],l.addConstraint(h,a.create(c.extend({bodyA:y,bodyB:_},d)))),v&&M<o-1&&(y=g[M+1+(T-1)*o],l.addConstraint(h,a.create(c.extend({bodyA:y,bodyB:_},d))))}return h.label+=" Mesh",h},n.pyramid=function(h,o,m,v,d,g,T){return n.stack(h,o,m,v,d,g,function(M,A,_,y,E,w){var x=Math.min(v,Math.ceil(m/2)),S=E?E.bounds.max.x-E.bounds.min.x:0;if(!(y>x)){y=x-y;var C=y,P=m-1-y;if(!(_<C||_>P)){w===1&&f.translate(E,{x:(_+(m%2===1?1:-1))*S,y:0});var N=E?_*S:0;return T(h+N+_*d,A,_,y,E,w)}}})},n.newtonsCradle=function(h,o,m,v,d){for(var g=l.create({label:"Newtons Cradle"}),T=0;T<m;T++){var M=1.9,A=u.circle(h+T*(v*M),o+d,v,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),_=a.create({pointA:{x:h+T*(v*M),y:o},bodyB:A});l.addBody(g,A),l.addConstraint(g,_)}return g},p(n,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),n.car=function(h,o,m,v,d){var g=f.nextGroup(!0),T=20,M=-m*.5+T,A=m*.5-T,_=0,y=l.create({label:"Car"}),E=u.rectangle(h,o,m,v,{collisionFilter:{group:g},chamfer:{radius:v*.5},density:2e-4}),w=u.circle(h+M,o+_,d,{collisionFilter:{group:g},friction:.8}),x=u.circle(h+A,o+_,d,{collisionFilter:{group:g},friction:.8}),S=a.create({bodyB:E,pointB:{x:M,y:_},bodyA:w,stiffness:1,length:0}),C=a.create({bodyB:E,pointB:{x:A,y:_},bodyA:x,stiffness:1,length:0});return l.addBody(y,E),l.addBody(y,w),l.addBody(y,x),l.addConstraint(y,S),l.addConstraint(y,C),y},p(n,"car","Composites.car ➤ moved to car example"),n.softBody=function(h,o,m,v,d,g,T,M,A,_){A=c.extend({inertia:1/0},A),_=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},_);var y=n.stack(h,o,m,v,d,g,function(E,w){return u.circle(E,w,M,A)});return n.mesh(y,m,v,T,_),y.label="Soft Body",y},p(n,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,i,r){var n={};t.exports=n;var l=r(9),a=r(0),c=a.deprecated;(function(){n.create=function(f){var u={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(u,f)},n.update=function(f,u,p,h){var o,m,v,d=p.world,g=f.buckets,T,M,A=!1;for(o=0;o<u.length;o++){var _=u[o];if(!(_.isSleeping&&!h)&&!(d.bounds&&(_.bounds.max.x<d.bounds.min.x||_.bounds.min.x>d.bounds.max.x||_.bounds.max.y<d.bounds.min.y||_.bounds.min.y>d.bounds.max.y))){var y=n._getRegion(f,_);if(!_.region||y.id!==_.region.id||h){(!_.region||h)&&(_.region=y);var E=n._regionUnion(y,_.region);for(m=E.startCol;m<=E.endCol;m++)for(v=E.startRow;v<=E.endRow;v++){M=n._getBucketId(m,v),T=g[M];var w=m>=y.startCol&&m<=y.endCol&&v>=y.startRow&&v<=y.endRow,x=m>=_.region.startCol&&m<=_.region.endCol&&v>=_.region.startRow&&v<=_.region.endRow;!w&&x&&x&&T&&n._bucketRemoveBody(f,T,_),(_.region===y||w&&!x||h)&&(T||(T=n._createBucket(g,M)),n._bucketAddBody(f,T,_))}_.region=y,A=!0}}}A&&(f.pairsList=n._createActivePairsList(f))},c(n,"update","Grid.update ➤ replaced by Matter.Detector"),n.clear=function(f){f.buckets={},f.pairs={},f.pairsList=[]},c(n,"clear","Grid.clear ➤ replaced by Matter.Detector"),n._regionUnion=function(f,u){var p=Math.min(f.startCol,u.startCol),h=Math.max(f.endCol,u.endCol),o=Math.min(f.startRow,u.startRow),m=Math.max(f.endRow,u.endRow);return n._createRegion(p,h,o,m)},n._getRegion=function(f,u){var p=u.bounds,h=Math.floor(p.min.x/f.bucketWidth),o=Math.floor(p.max.x/f.bucketWidth),m=Math.floor(p.min.y/f.bucketHeight),v=Math.floor(p.max.y/f.bucketHeight);return n._createRegion(h,o,m,v)},n._createRegion=function(f,u,p,h){return{id:f+","+u+","+p+","+h,startCol:f,endCol:u,startRow:p,endRow:h}},n._getBucketId=function(f,u){return"C"+f+"R"+u},n._createBucket=function(f,u){var p=f[u]=[];return p},n._bucketAddBody=function(f,u,p){var h=f.pairs,o=l.id,m=u.length,v;for(v=0;v<m;v++){var d=u[v];if(!(p.id===d.id||p.isStatic&&d.isStatic)){var g=o(p,d),T=h[g];T?T[2]+=1:h[g]=[p,d,1]}}u.push(p)},n._bucketRemoveBody=function(f,u,p){var h=f.pairs,o=l.id,m;u.splice(a.indexOf(u,p),1);var v=u.length;for(m=0;m<v;m++){var d=h[o(p,u[m])];d&&(d[2]-=1)}},n._createActivePairsList=function(f){var u,p=f.pairs,h=a.keys(p),o=h.length,m=[],v;for(v=0;v<o;v++)u=p[h[v]],u[2]>0?m.push(u):delete p[h[v]];return m}})()},function(t,i,r){var n={};t.exports=n;var l=r(3),a=r(7),c=r(14),f=r(5),u=r(13),p=r(10),h=r(6),o=r(0),m=r(1);(function(){n.create=function(v,d){var g=(v?v.mouse:null)||(d?d.mouse:null);g||(v&&v.render&&v.render.canvas?g=c.create(v.render.canvas):d&&d.element?g=c.create(d.element):(g=c.create(),o.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var T=p.create({label:"Mouse Constraint",pointA:g.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),M={type:"mouseConstraint",mouse:g,element:null,body:null,constraint:T,collisionFilter:{category:1,mask:4294967295,group:0}},A=o.extend(M,d);return f.on(v,"beforeUpdate",function(){var _=h.allBodies(v.world);n.update(A,_),n._triggerEvents(A)}),A},n.update=function(v,d){var g=v.mouse,T=v.constraint,M=v.body;if(g.button===0){if(T.bodyB)a.set(T.bodyB,!1),T.pointA=g.position;else for(var A=0;A<d.length;A++)if(M=d[A],m.contains(M.bounds,g.position)&&u.canCollide(M.collisionFilter,v.collisionFilter))for(var _=M.parts.length>1?1:0;_<M.parts.length;_++){var y=M.parts[_];if(l.contains(y.vertices,g.position)){T.pointA=g.position,T.bodyB=v.body=M,T.pointB={x:g.position.x-M.position.x,y:g.position.y-M.position.y},T.angleB=M.angle,a.set(M,!1),f.trigger(v,"startdrag",{mouse:g,body:M});break}}}else T.bodyB=v.body=null,T.pointB=null,M&&f.trigger(v,"enddrag",{mouse:g,body:M})},n._triggerEvents=function(v){var d=v.mouse,g=d.sourceEvents;g.mousemove&&f.trigger(v,"mousemove",{mouse:d}),g.mousedown&&f.trigger(v,"mousedown",{mouse:d}),g.mouseup&&f.trigger(v,"mouseup",{mouse:d}),c.clearSourceEvents(d)}})()},function(t,i,r){var n={};t.exports=n;var l=r(2),a=r(8),c=r(1),f=r(12),u=r(3);(function(){n.collides=function(p,h){for(var o=[],m=h.length,v=p.bounds,d=a.collides,g=c.overlaps,T=0;T<m;T++){var M=h[T],A=M.parts.length,_=A===1?0:1;if(g(M.bounds,v))for(var y=_;y<A;y++){var E=M.parts[y];if(g(E.bounds,v)){var w=d(E,p);if(w){o.push(w);break}}}}return o},n.ray=function(p,h,o,m){m=m||1e-100;for(var v=l.angle(h,o),d=l.magnitude(l.sub(h,o)),g=(o.x+h.x)*.5,T=(o.y+h.y)*.5,M=f.rectangle(g,T,d,m,{angle:v}),A=n.collides(M,p),_=0;_<A.length;_+=1){var y=A[_];y.body=y.bodyB=y.bodyA}return A},n.region=function(p,h,o){for(var m=[],v=0;v<p.length;v++){var d=p[v],g=c.overlaps(d.bounds,h);(g&&!o||!g&&o)&&m.push(d)}return m},n.point=function(p,h){for(var o=[],m=0;m<p.length;m++){var v=p[m];if(c.contains(v.bounds,h))for(var d=v.parts.length===1?0:1;d<v.parts.length;d++){var g=v.parts[d];if(c.contains(g.bounds,h)&&u.contains(g.vertices,h)){o.push(v);break}}}return o}})()},function(t,i,r){var n={};t.exports=n;var l=r(4),a=r(0),c=r(6),f=r(1),u=r(5),p=r(2),h=r(14);(function(){var o,m;typeof window<"u"&&(o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(_){window.setTimeout(function(){_(a.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(_){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!_.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},E=a.extend(y,_);return E.canvas&&(E.canvas.width=E.options.width||E.canvas.width,E.canvas.height=E.options.height||E.canvas.height),E.mouse=_.mouse,E.engine=_.engine,E.canvas=E.canvas||g(E.options.width,E.options.height),E.context=E.canvas.getContext("2d"),E.textures={},E.bounds=E.bounds||{min:{x:0,y:0},max:{x:E.canvas.width,y:E.canvas.height}},E.controller=n,E.options.showBroadphase=!1,E.options.pixelRatio!==1&&n.setPixelRatio(E,E.options.pixelRatio),a.isElement(E.element)&&E.element.appendChild(E.canvas),E},n.run=function(_){(function y(E){_.frameRequestId=o(y),v(_,E),n.world(_,E),(_.options.showStats||_.options.showDebug)&&n.stats(_,_.context,E),(_.options.showPerformance||_.options.showDebug)&&n.performance(_,_.context,E)})()},n.stop=function(_){m(_.frameRequestId)},n.setPixelRatio=function(_,y){var E=_.options,w=_.canvas;y==="auto"&&(y=T(w)),E.pixelRatio=y,w.setAttribute("data-pixel-ratio",y),w.width=E.width*y,w.height=E.height*y,w.style.width=E.width+"px",w.style.height=E.height+"px"},n.lookAt=function(_,y,E,w){w=typeof w<"u"?w:!0,y=a.isArray(y)?y:[y],E=E||{x:0,y:0};for(var x={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},S=0;S<y.length;S+=1){var C=y[S],P=C.bounds?C.bounds.min:C.min||C.position||C,N=C.bounds?C.bounds.max:C.max||C.position||C;P&&N&&(P.x<x.min.x&&(x.min.x=P.x),N.x>x.max.x&&(x.max.x=N.x),P.y<x.min.y&&(x.min.y=P.y),N.y>x.max.y&&(x.max.y=N.y))}var D=x.max.x-x.min.x+2*E.x,U=x.max.y-x.min.y+2*E.y,F=_.canvas.height,O=_.canvas.width,G=O/F,Y=D/U,K=1,j=1;Y>G?j=Y/G:K=G/Y,_.options.hasBounds=!0,_.bounds.min.x=x.min.x,_.bounds.max.x=x.min.x+D*K,_.bounds.min.y=x.min.y,_.bounds.max.y=x.min.y+U*j,w&&(_.bounds.min.x+=D*.5-D*K*.5,_.bounds.max.x+=D*.5-D*K*.5,_.bounds.min.y+=U*.5-U*j*.5,_.bounds.max.y+=U*.5-U*j*.5),_.bounds.min.x-=E.x,_.bounds.max.x-=E.x,_.bounds.min.y-=E.y,_.bounds.max.y-=E.y,_.mouse&&(h.setScale(_.mouse,{x:(_.bounds.max.x-_.bounds.min.x)/_.canvas.width,y:(_.bounds.max.y-_.bounds.min.y)/_.canvas.height}),h.setOffset(_.mouse,_.bounds.min))},n.startViewTransform=function(_){var y=_.bounds.max.x-_.bounds.min.x,E=_.bounds.max.y-_.bounds.min.y,w=y/_.options.width,x=E/_.options.height;_.context.setTransform(_.options.pixelRatio/w,0,0,_.options.pixelRatio/x,0,0),_.context.translate(-_.bounds.min.x,-_.bounds.min.y)},n.endViewTransform=function(_){_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0)},n.world=function(_,y){var E=a.now(),w=_.engine,x=w.world,S=_.canvas,C=_.context,P=_.options,N=_.timing,D=c.allBodies(x),U=c.allConstraints(x),F=P.wireframes?P.wireframeBackground:P.background,O=[],G=[],Y,K={timestamp:w.timing.timestamp};if(u.trigger(_,"beforeRender",K),_.currentBackground!==F&&A(_,F),C.globalCompositeOperation="source-in",C.fillStyle="transparent",C.fillRect(0,0,S.width,S.height),C.globalCompositeOperation="source-over",P.hasBounds){for(Y=0;Y<D.length;Y++){var j=D[Y];f.overlaps(j.bounds,_.bounds)&&O.push(j)}for(Y=0;Y<U.length;Y++){var $=U[Y],V=$.bodyA,Z=$.bodyB,ne=$.pointA,ae=$.pointB;V&&(ne=p.add(V.position,$.pointA)),Z&&(ae=p.add(Z.position,$.pointB)),!(!ne||!ae)&&(f.contains(_.bounds,ne)||f.contains(_.bounds,ae))&&G.push($)}n.startViewTransform(_),_.mouse&&(h.setScale(_.mouse,{x:(_.bounds.max.x-_.bounds.min.x)/_.options.width,y:(_.bounds.max.y-_.bounds.min.y)/_.options.height}),h.setOffset(_.mouse,_.bounds.min))}else G=U,O=D,_.options.pixelRatio!==1&&_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0);!P.wireframes||w.enableSleeping&&P.showSleeping?n.bodies(_,O,C):(P.showConvexHulls&&n.bodyConvexHulls(_,O,C),n.bodyWireframes(_,O,C)),P.showBounds&&n.bodyBounds(_,O,C),(P.showAxes||P.showAngleIndicator)&&n.bodyAxes(_,O,C),P.showPositions&&n.bodyPositions(_,O,C),P.showVelocity&&n.bodyVelocity(_,O,C),P.showIds&&n.bodyIds(_,O,C),P.showSeparations&&n.separations(_,w.pairs.list,C),P.showCollisions&&n.collisions(_,w.pairs.list,C),P.showVertexNumbers&&n.vertexNumbers(_,O,C),P.showMousePosition&&n.mousePosition(_,_.mouse,C),n.constraints(G,C),P.hasBounds&&n.endViewTransform(_),u.trigger(_,"afterRender",K),N.lastElapsed=a.now()-E},n.stats=function(_,y,E){for(var w=_.engine,x=w.world,S=c.allBodies(x),C=0,P=55,N=44,D=0,U=0,F=0;F<S.length;F+=1)C+=S[F].parts.length;var O={Part:C,Body:S.length,Cons:c.allConstraints(x).length,Comp:c.allComposites(x).length,Pair:w.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(D,U,P*5.5,N),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var G in O){var Y=O[G];y.fillStyle="#aaa",y.fillText(G,D+P,U+8),y.fillStyle="#eee",y.fillText(Y,D+P,U+26),D+=P}},n.performance=function(_,y){var E=_.engine,w=_.timing,x=w.deltaHistory,S=w.elapsedHistory,C=w.timestampElapsedHistory,P=w.engineDeltaHistory,N=w.engineElapsedHistory,D=E.timing.lastDelta,U=d(x),F=d(S),O=d(P),G=d(N),Y=d(C),K=Y/U||0,j=1e3/U||0,$=4,V=12,Z=60,ne=34,ae=10,ue=69;y.fillStyle="#0e0f19",y.fillRect(0,50,V*4+Z*5+22,ne),n.status(y,ae,ue,Z,$,x.length,Math.round(j)+" fps",j/n._goodFps,function(ge){return x[ge]/U-1}),n.status(y,ae+V+Z,ue,Z,$,P.length,D.toFixed(2)+" dt",n._goodDelta/D,function(ge){return P[ge]/O-1}),n.status(y,ae+(V+Z)*2,ue,Z,$,N.length,G.toFixed(2)+" ut",1-G/n._goodFps,function(ge){return N[ge]/G-1}),n.status(y,ae+(V+Z)*3,ue,Z,$,S.length,F.toFixed(2)+" rt",1-F/n._goodFps,function(ge){return S[ge]/F-1}),n.status(y,ae+(V+Z)*4,ue,Z,$,C.length,K.toFixed(2)+" x",K*K*K,function(ge){return(C[ge]/x[ge]/K||0)-1})},n.status=function(_,y,E,w,x,S,C,P,N){_.strokeStyle="#888",_.fillStyle="#444",_.lineWidth=1,_.fillRect(y,E+7,w,1),_.beginPath(),_.moveTo(y,E+7-x*a.clamp(.4*N(0),-2,2));for(var D=0;D<w;D+=1)_.lineTo(y+D,E+7-(D<S?x*a.clamp(.4*N(D),-2,2):0));_.stroke(),_.fillStyle="hsl("+a.clamp(25+95*P,0,120)+",100%,60%)",_.fillRect(y,E-7,4,4),_.font="12px Arial",_.textBaseline="middle",_.textAlign="right",_.fillStyle="#eee",_.fillText(C,y+w,E-5)},n.constraints=function(_,y){for(var E=y,w=0;w<_.length;w++){var x=_[w];if(!(!x.render.visible||!x.pointA||!x.pointB)){var S=x.bodyA,C=x.bodyB,P,N;if(S?P=p.add(S.position,x.pointA):P=x.pointA,x.render.type==="pin")E.beginPath(),E.arc(P.x,P.y,3,0,2*Math.PI),E.closePath();else{if(C?N=p.add(C.position,x.pointB):N=x.pointB,E.beginPath(),E.moveTo(P.x,P.y),x.render.type==="spring")for(var D=p.sub(N,P),U=p.perp(p.normalise(D)),F=Math.ceil(a.clamp(x.length/5,12,20)),O,G=1;G<F;G+=1)O=G%2===0?1:-1,E.lineTo(P.x+D.x*(G/F)+U.x*O*4,P.y+D.y*(G/F)+U.y*O*4);E.lineTo(N.x,N.y)}x.render.lineWidth&&(E.lineWidth=x.render.lineWidth,E.strokeStyle=x.render.strokeStyle,E.stroke()),x.render.anchors&&(E.fillStyle=x.render.strokeStyle,E.beginPath(),E.arc(P.x,P.y,3,0,2*Math.PI),E.arc(N.x,N.y,3,0,2*Math.PI),E.closePath(),E.fill())}}},n.bodies=function(_,y,E){var w=E;_.engine;var x=_.options,S=x.showInternalEdges||!x.wireframes,C,P,N,D;for(N=0;N<y.length;N++)if(C=y[N],!!C.render.visible){for(D=C.parts.length>1?1:0;D<C.parts.length;D++)if(P=C.parts[D],!!P.render.visible){if(x.showSleeping&&C.isSleeping?w.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(w.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!x.wireframes){var U=P.render.sprite,F=M(_,U.texture);w.translate(P.position.x,P.position.y),w.rotate(P.angle),w.drawImage(F,F.width*-U.xOffset*U.xScale,F.height*-U.yOffset*U.yScale,F.width*U.xScale,F.height*U.yScale),w.rotate(-P.angle),w.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)w.beginPath(),w.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{w.beginPath(),w.moveTo(P.vertices[0].x,P.vertices[0].y);for(var O=1;O<P.vertices.length;O++)!P.vertices[O-1].isInternal||S?w.lineTo(P.vertices[O].x,P.vertices[O].y):w.moveTo(P.vertices[O].x,P.vertices[O].y),P.vertices[O].isInternal&&!S&&w.moveTo(P.vertices[(O+1)%P.vertices.length].x,P.vertices[(O+1)%P.vertices.length].y);w.lineTo(P.vertices[0].x,P.vertices[0].y),w.closePath()}x.wireframes?(w.lineWidth=1,w.strokeStyle="#bbb",w.stroke()):(w.fillStyle=P.render.fillStyle,P.render.lineWidth&&(w.lineWidth=P.render.lineWidth,w.strokeStyle=P.render.strokeStyle,w.stroke()),w.fill())}w.globalAlpha=1}}},n.bodyWireframes=function(_,y,E){var w=E,x=_.options.showInternalEdges,S,C,P,N,D;for(w.beginPath(),P=0;P<y.length;P++)if(S=y[P],!!S.render.visible)for(D=S.parts.length>1?1:0;D<S.parts.length;D++){for(C=S.parts[D],w.moveTo(C.vertices[0].x,C.vertices[0].y),N=1;N<C.vertices.length;N++)!C.vertices[N-1].isInternal||x?w.lineTo(C.vertices[N].x,C.vertices[N].y):w.moveTo(C.vertices[N].x,C.vertices[N].y),C.vertices[N].isInternal&&!x&&w.moveTo(C.vertices[(N+1)%C.vertices.length].x,C.vertices[(N+1)%C.vertices.length].y);w.lineTo(C.vertices[0].x,C.vertices[0].y)}w.lineWidth=1,w.strokeStyle="#bbb",w.stroke()},n.bodyConvexHulls=function(_,y,E){var w=E,x,S,C;for(w.beginPath(),S=0;S<y.length;S++)if(x=y[S],!(!x.render.visible||x.parts.length===1)){for(w.moveTo(x.vertices[0].x,x.vertices[0].y),C=1;C<x.vertices.length;C++)w.lineTo(x.vertices[C].x,x.vertices[C].y);w.lineTo(x.vertices[0].x,x.vertices[0].y)}w.lineWidth=1,w.strokeStyle="rgba(255,255,255,0.2)",w.stroke()},n.vertexNumbers=function(_,y,E){var w=E,x,S,C;for(x=0;x<y.length;x++){var P=y[x].parts;for(C=P.length>1?1:0;C<P.length;C++){var N=P[C];for(S=0;S<N.vertices.length;S++)w.fillStyle="rgba(255,255,255,0.2)",w.fillText(x+"_"+S,N.position.x+(N.vertices[S].x-N.position.x)*.8,N.position.y+(N.vertices[S].y-N.position.y)*.8)}}},n.mousePosition=function(_,y,E){var w=E;w.fillStyle="rgba(255,255,255,0.8)",w.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},n.bodyBounds=function(_,y,E){var w=E;_.engine;var x=_.options;w.beginPath();for(var S=0;S<y.length;S++){var C=y[S];if(C.render.visible)for(var P=y[S].parts,N=P.length>1?1:0;N<P.length;N++){var D=P[N];w.rect(D.bounds.min.x,D.bounds.min.y,D.bounds.max.x-D.bounds.min.x,D.bounds.max.y-D.bounds.min.y)}}x.wireframes?w.strokeStyle="rgba(255,255,255,0.08)":w.strokeStyle="rgba(0,0,0,0.1)",w.lineWidth=1,w.stroke()},n.bodyAxes=function(_,y,E){var w=E;_.engine;var x=_.options,S,C,P,N;for(w.beginPath(),C=0;C<y.length;C++){var D=y[C],U=D.parts;if(D.render.visible)if(x.showAxes)for(P=U.length>1?1:0;P<U.length;P++)for(S=U[P],N=0;N<S.axes.length;N++){var F=S.axes[N];w.moveTo(S.position.x,S.position.y),w.lineTo(S.position.x+F.x*20,S.position.y+F.y*20)}else for(P=U.length>1?1:0;P<U.length;P++)for(S=U[P],N=0;N<S.axes.length;N++)w.moveTo(S.position.x,S.position.y),w.lineTo((S.vertices[0].x+S.vertices[S.vertices.length-1].x)/2,(S.vertices[0].y+S.vertices[S.vertices.length-1].y)/2)}x.wireframes?(w.strokeStyle="indianred",w.lineWidth=1):(w.strokeStyle="rgba(255, 255, 255, 0.4)",w.globalCompositeOperation="overlay",w.lineWidth=2),w.stroke(),w.globalCompositeOperation="source-over"},n.bodyPositions=function(_,y,E){var w=E;_.engine;var x=_.options,S,C,P,N;for(w.beginPath(),P=0;P<y.length;P++)if(S=y[P],!!S.render.visible)for(N=0;N<S.parts.length;N++)C=S.parts[N],w.arc(C.position.x,C.position.y,3,0,2*Math.PI,!1),w.closePath();for(x.wireframes?w.fillStyle="indianred":w.fillStyle="rgba(0,0,0,0.5)",w.fill(),w.beginPath(),P=0;P<y.length;P++)S=y[P],S.render.visible&&(w.arc(S.positionPrev.x,S.positionPrev.y,2,0,2*Math.PI,!1),w.closePath());w.fillStyle="rgba(255,165,0,0.8)",w.fill()},n.bodyVelocity=function(_,y,E){var w=E;w.beginPath();for(var x=0;x<y.length;x++){var S=y[x];if(S.render.visible){var C=l.getVelocity(S);w.moveTo(S.position.x,S.position.y),w.lineTo(S.position.x+C.x,S.position.y+C.y)}}w.lineWidth=3,w.strokeStyle="cornflowerblue",w.stroke()},n.bodyIds=function(_,y,E){var w=E,x,S;for(x=0;x<y.length;x++)if(y[x].render.visible){var C=y[x].parts;for(S=C.length>1?1:0;S<C.length;S++){var P=C[S];w.font="12px Arial",w.fillStyle="rgba(255,255,255,0.5)",w.fillText(P.id,P.position.x+10,P.position.y-10)}}},n.collisions=function(_,y,E){var w=E,x=_.options,S,C,P,N;for(w.beginPath(),P=0;P<y.length;P++)if(S=y[P],!!S.isActive)for(C=S.collision,N=0;N<S.activeContacts.length;N++){var D=S.activeContacts[N],U=D.vertex;w.rect(U.x-1.5,U.y-1.5,3.5,3.5)}for(x.wireframes?w.fillStyle="rgba(255,255,255,0.7)":w.fillStyle="orange",w.fill(),w.beginPath(),P=0;P<y.length;P++)if(S=y[P],!!S.isActive&&(C=S.collision,S.activeContacts.length>0)){var F=S.activeContacts[0].vertex.x,O=S.activeContacts[0].vertex.y;S.activeContacts.length===2&&(F=(S.activeContacts[0].vertex.x+S.activeContacts[1].vertex.x)/2,O=(S.activeContacts[0].vertex.y+S.activeContacts[1].vertex.y)/2),C.bodyB===C.supports[0].body||C.bodyA.isStatic===!0?w.moveTo(F-C.normal.x*8,O-C.normal.y*8):w.moveTo(F+C.normal.x*8,O+C.normal.y*8),w.lineTo(F,O)}x.wireframes?w.strokeStyle="rgba(255,165,0,0.7)":w.strokeStyle="orange",w.lineWidth=1,w.stroke()},n.separations=function(_,y,E){var w=E,x=_.options,S,C,P,N,D;for(w.beginPath(),D=0;D<y.length;D++)if(S=y[D],!!S.isActive){C=S.collision,P=C.bodyA,N=C.bodyB;var U=1;!N.isStatic&&!P.isStatic&&(U=.5),N.isStatic&&(U=0),w.moveTo(N.position.x,N.position.y),w.lineTo(N.position.x-C.penetration.x*U,N.position.y-C.penetration.y*U),U=1,!N.isStatic&&!P.isStatic&&(U=.5),P.isStatic&&(U=0),w.moveTo(P.position.x,P.position.y),w.lineTo(P.position.x+C.penetration.x*U,P.position.y+C.penetration.y*U)}x.wireframes?w.strokeStyle="rgba(255,165,0,0.5)":w.strokeStyle="orange",w.stroke()},n.inspector=function(_,y){_.engine;var E=_.selected,w=_.render,x=w.options,S;if(x.hasBounds){var C=w.bounds.max.x-w.bounds.min.x,P=w.bounds.max.y-w.bounds.min.y,N=C/w.options.width,D=P/w.options.height;y.scale(1/N,1/D),y.translate(-w.bounds.min.x,-w.bounds.min.y)}for(var U=0;U<E.length;U++){var F=E[U].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),F.type){case"body":S=F.bounds,y.beginPath(),y.rect(Math.floor(S.min.x-3),Math.floor(S.min.y-3),Math.floor(S.max.x-S.min.x+6),Math.floor(S.max.y-S.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var O=F.pointA;F.bodyA&&(O=F.pointB),y.beginPath(),y.arc(O.x,O.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}_.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",S=_.selectBounds,y.beginPath(),y.rect(Math.floor(S.min.x),Math.floor(S.min.y),Math.floor(S.max.x-S.min.x),Math.floor(S.max.y-S.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),x.hasBounds&&y.setTransform(1,0,0,1,0,0)};var v=function(_,y){var E=_.engine,w=_.timing,x=w.historySize,S=E.timing.timestamp;w.delta=y-w.lastTime||n._goodDelta,w.lastTime=y,w.timestampElapsed=S-w.lastTimestamp||0,w.lastTimestamp=S,w.deltaHistory.unshift(w.delta),w.deltaHistory.length=Math.min(w.deltaHistory.length,x),w.engineDeltaHistory.unshift(E.timing.lastDelta),w.engineDeltaHistory.length=Math.min(w.engineDeltaHistory.length,x),w.timestampElapsedHistory.unshift(w.timestampElapsed),w.timestampElapsedHistory.length=Math.min(w.timestampElapsedHistory.length,x),w.engineElapsedHistory.unshift(E.timing.lastElapsed),w.engineElapsedHistory.length=Math.min(w.engineElapsedHistory.length,x),w.elapsedHistory.unshift(w.lastElapsed),w.elapsedHistory.length=Math.min(w.elapsedHistory.length,x)},d=function(_){for(var y=0,E=0;E<_.length;E+=1)y+=_[E];return y/_.length||0},g=function(_,y){var E=document.createElement("canvas");return E.width=_,E.height=y,E.oncontextmenu=function(){return!1},E.onselectstart=function(){return!1},E},T=function(_){var y=_.getContext("2d"),E=window.devicePixelRatio||1,w=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return E/w},M=function(_,y){var E=_.textures[y];return E||(E=_.textures[y]=new Image,E.src=y,E)},A=function(_,y){var E=y;/(jpg|gif|png)$/.test(y)&&(E="url("+y+")"),_.canvas.style.background=E,_.canvas.style.backgroundSize="contain",_.currentBackground=y}})()},function(t,i,r){var n={};t.exports=n;var l=r(5),a=r(17),c=r(0);(function(){var f,u;if(typeof window<"u"&&(f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,u=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!f){var p;f=function(h){p=setTimeout(function(){h(c.now())},1e3/60)},u=function(){clearTimeout(p)}}n.create=function(h){var o={fps:60,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,frameRequestId:null,isFixed:!1,enabled:!0},m=c.extend(o,h);return m.delta=m.delta||1e3/m.fps,m.deltaMin=m.deltaMin||1e3/m.fps,m.deltaMax=m.deltaMax||1e3/(m.fps*.5),m.fps=1e3/m.delta,m},n.run=function(h,o){return typeof h.positionIterations<"u"&&(o=h,h=n.create()),function m(v){h.frameRequestId=f(m),v&&h.enabled&&n.tick(h,o,v)}(),h},n.tick=function(h,o,m){var v=o.timing,d;h.isFixed?d=h.delta:(d=m-h.timePrev||h.delta,h.timePrev=m,h.deltaHistory.push(d),h.deltaHistory=h.deltaHistory.slice(-h.deltaSampleSize),d=Math.min.apply(null,h.deltaHistory),d=d<h.deltaMin?h.deltaMin:d,d=d>h.deltaMax?h.deltaMax:d,h.delta=d);var g={timestamp:v.timestamp};l.trigger(h,"beforeTick",g),h.frameCounter+=1,m-h.counterTimestamp>=1e3&&(h.fps=h.frameCounter*((m-h.counterTimestamp)/1e3),h.counterTimestamp=m,h.frameCounter=0),l.trigger(h,"tick",g),l.trigger(h,"beforeUpdate",g),a.update(o,d),l.trigger(h,"afterUpdate",g),l.trigger(h,"afterTick",g)},n.stop=function(h){u(h.frameRequestId)},n.start=function(h,o){n.run(h,o)}})()},function(t,i,r){var n={};t.exports=n;var l=r(8),a=r(0),c=a.deprecated;(function(){n.collides=function(f,u){return l.collides(f,u)},c(n,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,i,r){var n={};t.exports=n,r(1);var l=r(0);(function(){n.pathToVertices=function(a,c){typeof window<"u"&&!("SVGPathSeg"in window)&&l.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var f,u,p,h,o,m,v,d,g,T,M=[],A,_,y=0,E=0,w=0;c=c||15;var x=function(C,P,N){var D=N%2===1&&N>1;if(!g||C!=g.x||P!=g.y){g&&D?(A=g.x,_=g.y):(A=0,_=0);var U={x:A+C,y:_+P};(D||!g)&&(g=U),M.push(U),E=A+C,w=_+P}},S=function(C){var P=C.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":E=C.x,w=C.y;break;case"H":E=C.x;break;case"V":w=C.y;break}x(E,w,C.pathSegType)}};for(n._svgPathToAbsolute(a),p=a.getTotalLength(),m=[],f=0;f<a.pathSegList.numberOfItems;f+=1)m.push(a.pathSegList.getItem(f));for(v=m.concat();y<p;){if(T=a.getPathSegAtLength(y),o=m[T],o!=d){for(;v.length&&v[0]!=o;)S(v.shift());d=o}switch(o.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=a.getPointAtLength(y),x(h.x,h.y,0);break}y+=c}for(f=0,u=v.length;f<u;++f)S(v[f]);return M},n._svgPathToAbsolute=function(a){for(var c,f,u,p,h,o,m=a.pathSegList,v=0,d=0,g=m.numberOfItems,T=0;T<g;++T){var M=m.getItem(T),A=M.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in M&&(v=M.x),"y"in M&&(d=M.y);else switch("x1"in M&&(u=v+M.x1),"x2"in M&&(h=v+M.x2),"y1"in M&&(p=d+M.y1),"y2"in M&&(o=d+M.y2),"x"in M&&(v+=M.x),"y"in M&&(d+=M.y),A){case"m":m.replaceItem(a.createSVGPathSegMovetoAbs(v,d),T);break;case"l":m.replaceItem(a.createSVGPathSegLinetoAbs(v,d),T);break;case"h":m.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(v),T);break;case"v":m.replaceItem(a.createSVGPathSegLinetoVerticalAbs(d),T);break;case"c":m.replaceItem(a.createSVGPathSegCurvetoCubicAbs(v,d,u,p,h,o),T);break;case"s":m.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(v,d,h,o),T);break;case"q":m.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(v,d,u,p),T);break;case"t":m.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(v,d),T);break;case"a":m.replaceItem(a.createSVGPathSegArcAbs(v,d,M.r1,M.r2,M.angle,M.largeArcFlag,M.sweepFlag),T);break;case"z":case"Z":v=c,d=f;break}(A=="M"||A=="m")&&(c=v,f=d)}}})()},function(t,i,r){var n={};t.exports=n;var l=r(6);r(0),function(){n.create=l.create,n.add=l.add,n.remove=l.remove,n.clear=l.clear,n.addComposite=l.addComposite,n.addBody=l.addBody,n.addConstraint=l.addConstraint}()}])})})(po);var Gt=po.exports;class Vd{constructor(){this.engine=Gt.Engine.create(),this.engine.world.gravity.y=1.5}init(){}update(e){Gt.Engine.update(this.engine,e)}}class kd{constructor(e,t,i){this.physics=e,this.scene=t,this.input=i,this.body=null,this.sprite=null,this.material=null,this.isGrounded=!1,this.speed=4,this.jumpForce=-12}async init(e,t){this.body=Gt.Bodies.rectangle(e,t,40,80,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Gt.Composite.add(this.physics.engine.world,this.body);const i=new Id;try{const r=await i.loadAsync("/web/Gemini_Generated_Image_1en0xl1en0xl1en0_000.webp");this.material=new Qi({map:r,transparent:!0,alphaTest:.1});const n=new vi(80,80);this.sprite=new At(n,this.material),this.scene.add(this.sprite)}catch(r){console.error("Failed to load player sprite, using fallback block",r);const n=new bn(40,80,10);this.material=new fo({color:65280}),this.sprite=new At(n,this.material),this.scene.add(this.sprite)}}update(){this.isGrounded=Math.abs(this.body.velocity.y)<.1;let e=0;this.input.isDown("ArrowLeft")||this.input.isDown("KeyA")?(e=-1,this.sprite.scale.x=-1):(this.input.isDown("ArrowRight")||this.input.isDown("KeyD"))&&(e=1,this.sprite.scale.x=1),Gt.Body.setVelocity(this.body,{x:e*this.speed,y:this.body.velocity.y}),(this.input.isDown("ArrowUp")||this.input.isDown("KeyW")||this.input.isDown("Space"))&&this.isGrounded&&Gt.Body.setVelocity(this.body,{x:this.body.velocity.x,y:this.jumpForce}),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y}}class Wd{constructor(){this.keys={},window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}init(){}update(){}isDown(e){return this.keys[e]===!0}}class Xd{constructor(e){this.scene=e,this.mesh=null,this.count=0,this.dummy=new ft}init(e){this.count=e;const t=new zd,i=new vi(2,2);t.index=i.index,t.attributes.position=i.attributes.position,t.attributes.uv=i.attributes.uv;const r=new Qi({color:65535,transparent:!0,opacity:.6});this.mesh=new Pd(t,r,this.count);for(let n=0;n<this.count;n++){const l=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,c=(Math.random()-.5)*-50-10;this.dummy.position.set(l,a,c),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}this.scene.add(this.mesh)}update(e){if(!this.mesh)return;const t=Math.sin(e*.001)*.5;this.mesh.position.y+=.2,this.mesh.position.x+=t,this.mesh.updateMatrix()}}class qd{constructor(){this.renderer=new Hd,this.physics=new Vd,this.input=new Wd,this.player=null,this.platforms=[],this.particles=null,this.lastTime=performance.now(),this.frameCount=0,this.fps=0,this.lastFpsTime=this.lastTime}async init(){await this.renderer.init(),this.physics.init(),this.input.init(),this.createLevel(),this.player=new kd(this.physics,this.renderer.scene,this.input),await this.player.init(100,300),this.particles=new Xd(this.renderer.scene),this.particles.init(1e3),requestAnimationFrame(this.loop.bind(this)),console.log("Lumen Web Boot Complete")}createLevel(){const e=Gt.Bodies.rectangle(400,500,1e3,40,{isStatic:!0});Gt.Composite.add(this.physics.engine.world,e),this.renderer.createBox(400,500,1e3,40,2236962);const t=Gt.Bodies.rectangle(600,380,200,20,{isStatic:!0});Gt.Composite.add(this.physics.engine.world,t),this.renderer.createBox(600,380,200,20,3355443),this.platforms.push(e,t)}loop(e){(e-this.lastTime)/1e3,this.lastTime=e,this.frameCount++,e-this.lastFpsTime>=1e3&&(this.fps=this.frameCount,this.frameCount=0,this.lastFpsTime=e,this.updateDebug()),this.input.update(),this.physics.update(1e3/60),this.player&&(this.player.update(),this.renderer.camera.follow(this.player.sprite.position)),this.particles&&this.particles.update(e),this.renderer.render(),requestAnimationFrame(this.loop.bind(this))}updateDebug(){const e=document.getElementById("debug-ui");if(e&&this.player){const t=this.player.body.position;e.innerHTML=`
                FPS: ${this.fps}<br>
                Player Pos: ${Math.round(t.x)}, ${Math.round(t.y)}<br>
                Grounded: ${this.player.isGrounded}
            `}}}document.addEventListener("DOMContentLoaded",()=>{new qd().init()});
