(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="160",Uo=0,pr=1,Io=2,qa=1,No=2,Zt=3,fn=0,Et=1,Ut=2,cn=0,Kn=1,mr=2,gr=3,vr=4,Fo=5,Mn=100,Oo=101,Bo=102,_r=103,xr=104,Ho=200,zo=201,Go=202,Vo=203,Ws=204,Xs=205,ko=206,Wo=207,Xo=208,qo=209,Yo=210,$o=211,Ko=212,jo=213,Zo=214,Jo=0,Qo=1,el=2,ji=3,tl=4,nl=5,il=6,sl=7,Ya=0,rl=1,al=2,hn=0,ol=1,ll=2,cl=3,hl=4,ul=5,fl=6,$a=300,Zn=301,Jn=302,qs=303,Ys=304,ts=306,Qn=1e3,Ht=1001,$s=1002,Ze=1003,yr=1004,cs=1005,Lt=1006,dl=1007,gi=1008,un=1009,pl=1010,ml=1011,er=1012,Ka=1013,on=1014,ln=1015,vi=1016,ja=1017,Za=1018,Tn=1020,gl=1021,zt=1023,vl=1024,_l=1025,An=1026,ei=1027,xl=1028,Ja=1029,yl=1030,Qa=1031,eo=1033,hs=33776,us=33777,fs=33778,ds=33779,Sr=35840,Mr=35841,Er=35842,Tr=35843,to=36196,Ar=37492,br=37496,wr=37808,Cr=37809,Rr=37810,Pr=37811,Lr=37812,Dr=37813,Ur=37814,Ir=37815,Nr=37816,Fr=37817,Or=37818,Br=37819,Hr=37820,zr=37821,ps=36492,Gr=36494,Vr=36495,Sl=36283,kr=36284,Wr=36285,Xr=36286,no=3e3,bn=3001,Ml=3200,El=3201,Tl=0,Al=1,It="",rt="srgb",en="srgb-linear",tr="display-p3",ns="display-p3-linear",Zi="linear",je="srgb",Ji="rec709",Qi="p3",Pn=7680,qr=519,bl=512,wl=513,Cl=514,io=515,Rl=516,Pl=517,Ll=518,Dl=519,Yr=35044,$r="300 es",Ks=1035,Jt=2e3,es=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let n=0,o=s.length;n<o;n++)s[n].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,js=180/Math.PI;function xi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function Ul(r,e){return(r%e+e)%e}function gs(r,e,t){return(1-t)*r+t*e}function Kr(r){return(r&r-1)===0&&r!==0}function Zs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*s+e.x,this.y=n*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,s,n,o,a,c,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,o,a,c,u)}set(e,t,i,s,n,o,a,c,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=n,h[5]=c,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],l=i[5],m=i[8],v=s[0],d=s[3],g=s[6],E=s[1],y=s[4],A=s[7],_=s[2],M=s[5],T=s[8];return n[0]=o*v+a*E+c*_,n[3]=o*d+a*y+c*M,n[6]=o*g+a*A+c*T,n[1]=u*v+h*E+p*_,n[4]=u*d+h*y+p*M,n[7]=u*g+h*A+p*T,n[2]=f*v+l*E+m*_,n[5]=f*d+l*y+m*M,n[8]=f*g+l*A+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-i*n*h+i*a*c+s*n*u-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],p=h*o-a*u,f=a*c-h*n,l=u*n-o*c,m=t*p+i*f+s*l;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=p*v,e[1]=(s*u-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*n-a*t)*v,e[6]=l*v,e[7]=(i*c-u*t)*v,e[8]=(o*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,o,a){const c=Math.cos(n),u=Math.sin(n);return this.set(i*c,i*u,-i*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new Be;function so(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _i(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Il(){const r=_i("canvas");return r.style.display="block",r}const jr={};function mi(r){r in jr||(jr[r]=!0,console.warn(r))}const Zr=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jr=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ti={[en]:{transfer:Zi,primaries:Ji,toReference:r=>r,fromReference:r=>r},[rt]:{transfer:je,primaries:Ji,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ns]:{transfer:Zi,primaries:Qi,toReference:r=>r.applyMatrix3(Jr),fromReference:r=>r.applyMatrix3(Zr)},[tr]:{transfer:je,primaries:Qi,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Jr),fromReference:r=>r.applyMatrix3(Zr).convertLinearToSRGB()}},Nl=new Set([en,ns]),Xe={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Nl.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Ti[e].toReference,s=Ti[t].fromReference;return s(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ti[r].primaries},getTransfer:function(r){return r===It?Zi:Ti[r].transfer}};function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ln;class ro{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ln===void 0&&(Ln=_i("canvas")),Ln.width=e.width,Ln.height=e.height;const i=Ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ln}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_i("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let o=0;o<n.length;o++)n[o]=jn(n[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fl=0;class ao{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?n.push(xs(s[o].image)):n.push(xs(s[o]))}else n=xs(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function xs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ro.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;class pt extends ni{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,i=Ht,s=Ht,n=Lt,o=gi,a=zt,c=un,u=pt.DEFAULT_ANISOTROPY,h=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=xi(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bn?rt:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?bn:no}set encoding(e){mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bn?rt:It}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=$a;pt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,s=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],l=c[5],m=c[9],v=c[2],d=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(m-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(m+d)<.1&&Math.abs(u+l+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,A=(l+1)/2,_=(g+1)/2,M=(h+f)/4,T=(p+v)/4,b=(m+d)/4;return y>A&&y>_?y<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(y),s=M/i,n=T/i):A>_?A<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(A),i=M/s,n=b/s):_<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(_),i=T/n,s=b/n),this.set(i,s,n,t),this}let E=Math.sqrt((d-m)*(d-m)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(d-m)/E,this.y=(p-v)/E,this.z=(f-h)/E,this.w=Math.acos((u+l+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends ni{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bn?rt:It),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Bl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oo extends pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hl extends pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,o,a){let c=i[s+0],u=i[s+1],h=i[s+2],p=i[s+3];const f=n[o+0],l=n[o+1],m=n[o+2],v=n[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=l,e[t+2]=m,e[t+3]=v;return}if(p!==v||c!==f||u!==l||h!==m){let d=1-a;const g=c*f+u*l+h*m+p*v,E=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const _=Math.sqrt(y),M=Math.atan2(_,g*E);d=Math.sin(d*M)/_,a=Math.sin(a*M)/_}const A=a*E;if(c=c*d+f*A,u=u*d+l*A,h=h*d+m*A,p=p*d+v*A,d===1-a){const _=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=_,u*=_,h*=_,p*=_}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,n,o){const a=i[s],c=i[s+1],u=i[s+2],h=i[s+3],p=n[o],f=n[o+1],l=n[o+2],m=n[o+3];return e[t]=a*m+h*p+c*l-u*f,e[t+1]=c*m+h*f+u*p-a*l,e[t+2]=u*m+h*l+a*f-c*p,e[t+3]=h*m-a*p-c*f-u*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(i/2),h=a(s/2),p=a(n/2),f=c(i/2),l=c(s/2),m=c(n/2);switch(o){case"XYZ":this._x=f*h*p+u*l*m,this._y=u*l*p-f*h*m,this._z=u*h*m+f*l*p,this._w=u*h*p-f*l*m;break;case"YXZ":this._x=f*h*p+u*l*m,this._y=u*l*p-f*h*m,this._z=u*h*m-f*l*p,this._w=u*h*p+f*l*m;break;case"ZXY":this._x=f*h*p-u*l*m,this._y=u*l*p+f*h*m,this._z=u*h*m+f*l*p,this._w=u*h*p-f*l*m;break;case"ZYX":this._x=f*h*p-u*l*m,this._y=u*l*p+f*h*m,this._z=u*h*m-f*l*p,this._w=u*h*p+f*l*m;break;case"YZX":this._x=f*h*p+u*l*m,this._y=u*l*p+f*h*m,this._z=u*h*m-f*l*p,this._w=u*h*p-f*l*m;break;case"XZY":this._x=f*h*p-u*l*m,this._y=u*l*p-f*h*m,this._z=u*h*m+f*l*p,this._w=u*h*p+f*l*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=i+a+p;if(f>0){const l=.5/Math.sqrt(f+1);this._w=.25/l,this._x=(h-c)*l,this._y=(n-u)*l,this._z=(o-s)*l}else if(i>a&&i>p){const l=2*Math.sqrt(1+i-a-p);this._w=(h-c)/l,this._x=.25*l,this._y=(s+o)/l,this._z=(n+u)/l}else if(a>p){const l=2*Math.sqrt(1+a-i-p);this._w=(n-u)/l,this._x=(s+o)/l,this._y=.25*l,this._z=(c+h)/l}else{const l=2*Math.sqrt(1+p-i-a);this._w=(o-s)/l,this._x=(n+u)/l,this._y=(c+h)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=i*h+o*a+s*u-n*c,this._y=s*h+o*c+n*a-i*u,this._z=n*h+o*u+i*c-s*a,this._w=o*h-i*a-s*c-n*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,n=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=n,this;const c=1-a*a;if(c<=Number.EPSILON){const l=1-t;return this._w=l*o+t*this._w,this._x=l*i+t*this._x,this._y=l*s+t*this._y,this._z=l*n+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),p=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*p+this._w*f,this._x=i*p+this._x*f,this._y=s*p+this._y*f,this._z=n*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(n),i*Math.cos(n),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*i),h=2*(a*t-n*s),p=2*(n*i-o*t);return this.x=t+c*u+o*p-a*h,this.y=i+c*h+a*u-n*p,this.z=s+c*p+n*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-n*a,this.y=n*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new H,Qr=new yi;class dn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=n.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(n,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ai.copy(i.boundingBox)),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const s=e.children;for(let n=0,o=s.length;n<o;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oi),bi.subVectors(this.max,oi),Dn.subVectors(e.a,oi),Un.subVectors(e.b,oi),In.subVectors(e.c,oi),tn.subVectors(Un,Dn),nn.subVectors(In,Un),gn.subVectors(Dn,In);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-gn.z,gn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,gn.z,0,-gn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-gn.y,gn.x,0];return!Ss(t,Dn,Un,In,bi)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,Dn,Un,In,bi))?!1:(wi.crossVectors(tn,nn),t=[wi.x,wi.y,wi.z],Ss(t,Dn,Un,In,bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new H,new H,new H,new H,new H,new H,new H,new H],Nt=new H,Ai=new dn,Dn=new H,Un=new H,In=new H,tn=new H,nn=new H,gn=new H,oi=new H,bi=new H,wi=new H,vn=new H;function Ss(r,e,t,i,s){for(let n=0,o=r.length-3;n<=o;n+=3){vn.fromArray(r,n);const a=s.x*Math.abs(vn.x)+s.y*Math.abs(vn.y)+s.z*Math.abs(vn.z),c=e.dot(vn),u=t.dot(vn),h=i.dot(vn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const zl=new dn,li=new H,Ms=new H;class ii{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zl.setFromPoints(e).getCenter(i);let s=0;for(let n=0,o=e.length;n<o;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;li.subVectors(e,this.center);const t=li.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(li,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(li.copy(e.center).add(Ms)),this.expandByPoint(li.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new H,Es=new H,Ci=new H,sn=new H,Ts=new H,Ri=new H,As=new H;class lo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Es.copy(e).add(t).multiplyScalar(.5),Ci.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(Es);const n=e.distanceTo(t)*.5,o=-this.direction.dot(Ci),a=sn.dot(this.direction),c=-sn.dot(Ci),u=sn.lengthSq(),h=Math.abs(1-o*o);let p,f,l,m;if(h>0)if(p=o*c-a,f=o*a-c,m=n*h,p>=0)if(f>=-m)if(f<=m){const v=1/h;p*=v,f*=v,l=p*(p+o*f+2*a)+f*(o*p+f+2*c)+u}else f=n,p=Math.max(0,-(o*f+a)),l=-p*p+f*(f+2*c)+u;else f=-n,p=Math.max(0,-(o*f+a)),l=-p*p+f*(f+2*c)+u;else f<=-m?(p=Math.max(0,-(-o*n+a)),f=p>0?-n:Math.min(Math.max(-n,-c),n),l=-p*p+f*(f+2*c)+u):f<=m?(p=0,f=Math.min(Math.max(-n,-c),n),l=f*(f+2*c)+u):(p=Math.max(0,-(o*n+a)),f=p>0?n:Math.min(Math.max(-n,-c),n),l=-p*p+f*(f+2*c)+u);else f=o>0?-n:n,p=Math.max(0,-(o*f+a)),l=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Es).addScaledVector(Ci,f),l}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const i=Yt.dot(this.direction),s=Yt.dot(Yt)-i*i,n=e.radius*e.radius;if(s>n)return null;const o=Math.sqrt(n-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(n=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(n=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||n>s||((n>i||isNaN(i))&&(i=n),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,i,s,n){Ts.subVectors(t,e),Ri.subVectors(i,e),As.crossVectors(Ts,Ri);let o=this.direction.dot(As),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);const c=a*this.direction.dot(Ri.crossVectors(sn,Ri));if(c<0)return null;const u=a*this.direction.dot(Ts.cross(sn));if(u<0||c+u>o)return null;const h=-a*sn.dot(As);return h<0?null:this.at(h/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,s,n,o,a,c,u,h,p,f,l,m,v,d){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,o,a,c,u,h,p,f,l,m,v,d)}set(e,t,i,s,n,o,a,c,u,h,p,f,l,m,v,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=n,g[5]=o,g[9]=a,g[13]=c,g[2]=u,g[6]=h,g[10]=p,g[14]=f,g[3]=l,g[7]=m,g[11]=v,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Nn.setFromMatrixColumn(e,0).length(),n=1/Nn.setFromMatrixColumn(e,1).length(),o=1/Nn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),u=Math.sin(s),h=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const f=o*h,l=o*p,m=a*h,v=a*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=l+m*u,t[5]=f-v*u,t[9]=-a*c,t[2]=v-f*u,t[6]=m+l*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,l=c*p,m=u*h,v=u*p;t[0]=f+v*a,t[4]=m*a-l,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=l*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,l=c*p,m=u*h,v=u*p;t[0]=f-v*a,t[4]=-o*p,t[8]=m+l*a,t[1]=l+m*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,l=o*p,m=a*h,v=a*p;t[0]=c*h,t[4]=m*u-l,t[8]=f*u+v,t[1]=c*p,t[5]=v*u+f,t[9]=l*u-m,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,l=o*u,m=a*c,v=a*u;t[0]=c*h,t[4]=v-f*p,t[8]=m*p+l,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=l*p+m,t[10]=f-v*p}else if(e.order==="XZY"){const f=o*c,l=o*u,m=a*c,v=a*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+v,t[5]=o*h,t[9]=l*p-m,t[2]=m*p-l,t[6]=a*h,t[10]=v*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gl,e,Vl)}lookAt(e,t,i){const s=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),rn.crossVectors(i,At),rn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),rn.crossVectors(i,At)),rn.normalize(),Pi.crossVectors(At,rn),s[0]=rn.x,s[4]=Pi.x,s[8]=At.x,s[1]=rn.y,s[5]=Pi.y,s[9]=At.y,s[2]=rn.z,s[6]=Pi.z,s[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],l=i[13],m=i[2],v=i[6],d=i[10],g=i[14],E=i[3],y=i[7],A=i[11],_=i[15],M=s[0],T=s[4],b=s[8],x=s[12],S=s[1],R=s[5],P=s[9],N=s[13],D=s[2],U=s[6],F=s[10],O=s[14],G=s[3],Y=s[7],$=s[11],Z=s[15];return n[0]=o*M+a*S+c*D+u*G,n[4]=o*T+a*R+c*U+u*Y,n[8]=o*b+a*P+c*F+u*$,n[12]=o*x+a*N+c*O+u*Z,n[1]=h*M+p*S+f*D+l*G,n[5]=h*T+p*R+f*U+l*Y,n[9]=h*b+p*P+f*F+l*$,n[13]=h*x+p*N+f*O+l*Z,n[2]=m*M+v*S+d*D+g*G,n[6]=m*T+v*R+d*U+g*Y,n[10]=m*b+v*P+d*F+g*$,n[14]=m*x+v*N+d*O+g*Z,n[3]=E*M+y*S+A*D+_*G,n[7]=E*T+y*R+A*U+_*Y,n[11]=E*b+y*P+A*F+_*$,n[15]=E*x+y*N+A*O+_*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],l=e[14],m=e[3],v=e[7],d=e[11],g=e[15];return m*(+n*c*p-s*u*p-n*a*f+i*u*f+s*a*l-i*c*l)+v*(+t*c*l-t*u*f+n*o*f-s*o*l+s*u*h-n*c*h)+d*(+t*u*p-t*a*l-n*o*p+i*o*l+n*a*h-i*u*h)+g*(-s*a*h-t*c*p+t*a*f+s*o*p-i*o*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],l=e[11],m=e[12],v=e[13],d=e[14],g=e[15],E=p*d*u-v*f*u+v*c*l-a*d*l-p*c*g+a*f*g,y=m*f*u-h*d*u-m*c*l+o*d*l+h*c*g-o*f*g,A=h*v*u-m*p*u+m*a*l-o*v*l-h*a*g+o*p*g,_=m*p*c-h*v*c-m*a*f+o*v*f+h*a*d-o*p*d,M=t*E+i*y+s*A+n*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=E*T,e[1]=(v*f*n-p*d*n-v*s*l+i*d*l+p*s*g-i*f*g)*T,e[2]=(a*d*n-v*c*n+v*s*u-i*d*u-a*s*g+i*c*g)*T,e[3]=(p*c*n-a*f*n-p*s*u+i*f*u+a*s*l-i*c*l)*T,e[4]=y*T,e[5]=(h*d*n-m*f*n+m*s*l-t*d*l-h*s*g+t*f*g)*T,e[6]=(m*c*n-o*d*n-m*s*u+t*d*u+o*s*g-t*c*g)*T,e[7]=(o*f*n-h*c*n+h*s*u-t*f*u-o*s*l+t*c*l)*T,e[8]=A*T,e[9]=(m*p*n-h*v*n-m*i*l+t*v*l+h*i*g-t*p*g)*T,e[10]=(o*v*n-m*a*n+m*i*u-t*v*u-o*i*g+t*a*g)*T,e[11]=(h*a*n-o*p*n-h*i*u+t*p*u+o*i*l-t*a*l)*T,e[12]=_*T,e[13]=(h*v*s-m*p*s+m*i*f-t*v*f-h*i*d+t*p*d)*T,e[14]=(m*a*s-o*v*s-m*i*c+t*v*c+o*i*d-t*a*d)*T,e[15]=(o*p*s-h*a*s+h*i*c-t*p*c-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,o=e.x,a=e.y,c=e.z,u=n*o,h=n*a;return this.set(u*o+i,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+i,h*c-s*o,0,u*c-s*a,h*c+s*o,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,o){return this.set(1,i,n,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,o=t._y,a=t._z,c=t._w,u=n+n,h=o+o,p=a+a,f=n*u,l=n*h,m=n*p,v=o*h,d=o*p,g=a*p,E=c*u,y=c*h,A=c*p,_=i.x,M=i.y,T=i.z;return s[0]=(1-(v+g))*_,s[1]=(l+A)*_,s[2]=(m-y)*_,s[3]=0,s[4]=(l-A)*M,s[5]=(1-(f+g))*M,s[6]=(d+E)*M,s[7]=0,s[8]=(m+y)*T,s[9]=(d-E)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let n=Nn.set(s[0],s[1],s[2]).length();const o=Nn.set(s[4],s[5],s[6]).length(),a=Nn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],Ft.copy(this);const u=1/n,h=1/o,p=1/a;return Ft.elements[0]*=u,Ft.elements[1]*=u,Ft.elements[2]*=u,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=p,Ft.elements[9]*=p,Ft.elements[10]*=p,t.setFromRotationMatrix(Ft),i.x=n,i.y=o,i.z=a,this}makePerspective(e,t,i,s,n,o,a=Jt){const c=this.elements,u=2*n/(t-e),h=2*n/(i-s),p=(t+e)/(t-e),f=(i+s)/(i-s);let l,m;if(a===Jt)l=-(o+n)/(o-n),m=-2*o*n/(o-n);else if(a===es)l=-o/(o-n),m=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,n,o,a=Jt){const c=this.elements,u=1/(t-e),h=1/(i-s),p=1/(o-n),f=(t+e)*u,l=(i+s)*h;let m,v;if(a===Jt)m=(o+n)*p,v=-2*p;else if(a===es)m=n*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-l,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Nn=new H,Ft=new Qe,Gl=new H(0,0,0),Vl=new H(1,1,1),rn=new H,Pi=new H,At=new H,ea=new Qe,ta=new yi;class is{constructor(e=0,t=0,i=0,s=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],p=s[2],f=s[6],l=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,l),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,l),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,l),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(a,l));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-h,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ea,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ta.setFromEuler(this),this.setFromQuaternion(ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kl=0;const na=new H,Fn=new yi,$t=new Qe,Li=new H,ci=new H,Wl=new H,Xl=new yi,ia=new H(1,0,0),sa=new H(0,1,0),ra=new H(0,0,1),ql={type:"added"},Yl={type:"removed"};class dt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new H,t=new is,i=new yi,s=new H(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Be}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(ia,e)}rotateY(e){return this.rotateOnAxis(sa,e)}rotateZ(e){return this.rotateOnAxis(ra,e)}translateOnAxis(e,t){return na.copy(e).applyQuaternion(this.quaternion),this.position.add(na.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ia,e)}translateY(e){return this.translateOnAxis(sa,e)}translateZ(e){return this.translateOnAxis(ra,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Li.copy(e):Li.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(ci,Li,this.up):$t.lookAt(Li,ci,this.up),this.quaternion.setFromRotationMatrix($t),s&&($t.extractRotation(s.matrixWorld),Fn.setFromRotationMatrix($t),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ql)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,o=s.length;n<o;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,Xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let n=0,o=s.length;n<o;n++){const a=s[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];n(e.shapes,p)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(n(e.materials,this.material[c]));s.material=a}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(n(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),l=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),l.length>0&&(i.animations=l),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}dt.DEFAULT_UP=new H(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new H,Kt=new H,bs=new H,jt=new H,On=new H,Bn=new H,aa=new H,ws=new H,Cs=new H,Rs=new H;let Di=!1;class Bt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ot.subVectors(e,t),s.cross(Ot);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){Ot.subVectors(s,t),Kt.subVectors(i,t),bs.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(Kt),c=Ot.dot(bs),u=Kt.dot(Kt),h=Kt.dot(bs),p=o*u-a*a;if(p===0)return n.set(0,0,0),null;const f=1/p,l=(u*c-a*h)*f,m=(o*h-a*c)*f;return n.set(1-l-m,m,l)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,i,s,n,o,a,c){return Di===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Di=!0),this.getInterpolation(e,t,i,s,n,o,a,c)}static getInterpolation(e,t,i,s,n,o,a,c){return this.getBarycoord(e,t,i,s,jt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,jt.x),c.addScaledVector(o,jt.y),c.addScaledVector(a,jt.z),c)}static isFrontFacing(e,t,i,s){return Ot.subVectors(i,t),Kt.subVectors(e,t),Ot.cross(Kt).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ot.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,n){return Di===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Di=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}getInterpolation(e,t,i,s,n){return Bt.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let o,a;On.subVectors(s,i),Bn.subVectors(n,i),ws.subVectors(e,i);const c=On.dot(ws),u=Bn.dot(ws);if(c<=0&&u<=0)return t.copy(i);Cs.subVectors(e,s);const h=On.dot(Cs),p=Bn.dot(Cs);if(h>=0&&p<=h)return t.copy(s);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(On,o);Rs.subVectors(e,n);const l=On.dot(Rs),m=Bn.dot(Rs);if(m>=0&&l<=m)return t.copy(n);const v=l*u-c*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector(Bn,a);const d=h*m-l*p;if(d<=0&&p-h>=0&&l-m>=0)return aa.subVectors(n,s),a=(p-h)/(p-h+(l-m)),t.copy(s).addScaledVector(aa,a);const g=1/(d+v+f);return o=v*g,a=f*g,t.copy(i).addScaledVector(On,o).addScaledVector(Bn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Ps(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=Ul(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=Ps(o,n,e+1/3),this.g=Ps(o,n,e),this.b=Ps(o,n,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=rt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],o=n.length;if(o===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const i=ho[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return Xe.fromWorkingColorSpace(vt.copy(this),e),Math.round(Mt(vt.r*255,0,255))*65536+Math.round(Mt(vt.g*255,0,255))*256+Math.round(Mt(vt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,s=vt.g,n=vt.b,o=Math.max(i,s,n),a=Math.min(i,s,n);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:c=(s-n)/p+(s<n?6:0);break;case s:c=(n-i)/p+2;break;case n:c=(i-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=rt){Xe.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,s=vt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Ui);const i=gs(an.h,Ui.h,t),s=gs(an.s,Ui.s,t),n=gs(an.l,Ui.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ge;Ge.NAMES=ho;let $l=0;class Si extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Kn,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ws,this.blendDst=Xs,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pn,this.stencilZFail=Pn,this.stencilZPass=Pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(i.blending=this.blending),this.side!==fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ws&&(i.blendSrc=this.blendSrc),this.blendDst!==Xs&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const o=[];for(const a in n){const c=n[a];delete c.metadata,o.push(c)}return o}if(t){const n=s(e.textures),o=s(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ct extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new H,Ii=new Ve;class wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ii.fromBufferAttribute(this,t),Ii.applyMatrix3(e),this.setXY(t,Ii.x,Ii.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),e}}class uo extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fo extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kl=0;const Pt=new Qe,Ls=new dt,Hn=new H,bt=new dn,hi=new dn,ut=new H;class Wt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(so(e)?fo:uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Be().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,i){return Pt.makeTranslation(e,t,i),this.applyMatrix4(Pt),this}scale(e,t,i){return Pt.makeScale(e,t,i),this.applyMatrix4(Pt),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];bt.setFromBufferAttribute(n),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(bt.min,hi.min),bt.expandByPoint(ut),ut.addVectors(bt.max,hi.max),bt.expandByPoint(ut)):(bt.expandByPoint(hi.min),bt.expandByPoint(hi.max))}bt.getCenter(i);let s=0;for(let n=0,o=e.count;n<o;n++)ut.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(ut));if(t)for(let n=0,o=t.length;n<o;n++){const a=t[n],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)ut.fromBufferAttribute(a,u),c&&(Hn.fromBufferAttribute(e,u),ut.add(Hn)),s=Math.max(s,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,n=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let S=0;S<a;S++)u[S]=new H,h[S]=new H;const p=new H,f=new H,l=new H,m=new Ve,v=new Ve,d=new Ve,g=new H,E=new H;function y(S,R,P){p.fromArray(s,S*3),f.fromArray(s,R*3),l.fromArray(s,P*3),m.fromArray(o,S*2),v.fromArray(o,R*2),d.fromArray(o,P*2),f.sub(p),l.sub(p),v.sub(m),d.sub(m);const N=1/(v.x*d.y-d.x*v.y);isFinite(N)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(l,-v.y).multiplyScalar(N),E.copy(l).multiplyScalar(v.x).addScaledVector(f,-d.x).multiplyScalar(N),u[S].add(g),u[R].add(g),u[P].add(g),h[S].add(E),h[R].add(E),h[P].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let S=0,R=A.length;S<R;++S){const P=A[S],N=P.start,D=P.count;for(let U=N,F=N+D;U<F;U+=3)y(i[U+0],i[U+1],i[U+2])}const _=new H,M=new H,T=new H,b=new H;function x(S){T.fromArray(n,S*3),b.copy(T);const R=u[S];_.copy(R),_.sub(T.multiplyScalar(T.dot(R))).normalize(),M.crossVectors(b,R);const N=M.dot(h[S])<0?-1:1;c[S*4]=_.x,c[S*4+1]=_.y,c[S*4+2]=_.z,c[S*4+3]=N}for(let S=0,R=A.length;S<R;++S){const P=A[S],N=P.start,D=P.count;for(let U=N,F=N+D;U<F;U+=3)x(i[U+0]),x(i[U+1]),x(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,l=i.count;f<l;f++)i.setXYZ(f,0,0,0);const s=new H,n=new H,o=new H,a=new H,c=new H,u=new H,h=new H,p=new H;if(e)for(let f=0,l=e.count;f<l;f+=3){const m=e.getX(f+0),v=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,m),n.fromBufferAttribute(t,v),o.fromBufferAttribute(t,d),h.subVectors(o,n),p.subVectors(s,n),h.cross(p),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,d),a.add(h),c.add(h),u.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(d,u.x,u.y,u.z)}else for(let f=0,l=t.count;f<l;f+=3)s.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,n),p.subVectors(s,n),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,p=a.normalized,f=new u.constructor(c.length*h);let l=0,m=0;for(let v=0,d=c.length;v<d;v++){a.isInterleavedBufferAttribute?l=c[v]*a.data.stride+a.offset:l=c[v]*h;for(let g=0;g<h;g++)f[m++]=u[l++]}return new wt(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=e(c,i);t.setAttribute(a,u)}const n=this.morphAttributes;for(const a in n){const c=[],u=n[a];for(let h=0,p=u.length;h<p;h++){const f=u[h],l=e(f,i);c.push(l)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let n=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const l=u[p];h.push(l.toJSON(e.data))}h.length>0&&(s[c]=h,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const n=e.morphAttributes;for(const u in n){const h=[],p=n[u];for(let f=0,l=p.length;f<l;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oa=new Qe,_n=new lo,Ni=new ii,la=new H,zn=new H,Gn=new H,Vn=new H,Ds=new H,Fi=new H,Oi=new Ve,Bi=new Ve,Hi=new Ve,ca=new H,ha=new H,ua=new H,zi=new H,Gi=new H;class ft extends dt{constructor(e=new Wt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=s.length;n<o;n++){const a=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(n&&a){Fi.set(0,0,0);for(let c=0,u=n.length;c<u;c++){const h=a[c],p=n[c];h!==0&&(Ds.fromBufferAttribute(p,e),o?Fi.addScaledVector(Ds,h):Fi.addScaledVector(Ds.sub(t),h))}t.add(Fi)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ni.copy(i.boundingSphere),Ni.applyMatrix4(n),_n.copy(e.ray).recast(e.near),!(Ni.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Ni,la)===null||_n.origin.distanceToSquared(la)>(e.far-e.near)**2))&&(oa.copy(n).invert(),_n.copy(e.ray).applyMatrix4(oa),!(i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,i){let s;const n=this.geometry,o=this.material,a=n.index,c=n.attributes.position,u=n.attributes.uv,h=n.attributes.uv1,p=n.attributes.normal,f=n.groups,l=n.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const d=f[m],g=o[d.materialIndex],E=Math.max(d.start,l.start),y=Math.min(a.count,Math.min(d.start+d.count,l.start+l.count));for(let A=E,_=y;A<_;A+=3){const M=a.getX(A),T=a.getX(A+1),b=a.getX(A+2);s=Vi(this,g,e,i,u,h,p,M,T,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,l.start),v=Math.min(a.count,l.start+l.count);for(let d=m,g=v;d<g;d+=3){const E=a.getX(d),y=a.getX(d+1),A=a.getX(d+2);s=Vi(this,o,e,i,u,h,p,E,y,A),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const d=f[m],g=o[d.materialIndex],E=Math.max(d.start,l.start),y=Math.min(c.count,Math.min(d.start+d.count,l.start+l.count));for(let A=E,_=y;A<_;A+=3){const M=A,T=A+1,b=A+2;s=Vi(this,g,e,i,u,h,p,M,T,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,l.start),v=Math.min(c.count,l.start+l.count);for(let d=m,g=v;d<g;d+=3){const E=d,y=d+1,A=d+2;s=Vi(this,o,e,i,u,h,p,E,y,A),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function jl(r,e,t,i,s,n,o,a){let c;if(e.side===Et?c=i.intersectTriangle(o,n,s,!0,a):c=i.intersectTriangle(s,n,o,e.side===fn,a),c===null)return null;Gi.copy(a),Gi.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Gi);return u<t.near||u>t.far?null:{distance:u,point:Gi.clone(),object:r}}function Vi(r,e,t,i,s,n,o,a,c,u){r.getVertexPosition(a,zn),r.getVertexPosition(c,Gn),r.getVertexPosition(u,Vn);const h=jl(r,e,t,i,zn,Gn,Vn,zi);if(h){s&&(Oi.fromBufferAttribute(s,a),Bi.fromBufferAttribute(s,c),Hi.fromBufferAttribute(s,u),h.uv=Bt.getInterpolation(zi,zn,Gn,Vn,Oi,Bi,Hi,new Ve)),n&&(Oi.fromBufferAttribute(n,a),Bi.fromBufferAttribute(n,c),Hi.fromBufferAttribute(n,u),h.uv1=Bt.getInterpolation(zi,zn,Gn,Vn,Oi,Bi,Hi,new Ve),h.uv2=h.uv1),o&&(ca.fromBufferAttribute(o,a),ha.fromBufferAttribute(o,c),ua.fromBufferAttribute(o,u),h.normal=Bt.getInterpolation(zi,zn,Gn,Vn,ca,ha,ua,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:u,normal:new H,materialIndex:0};Bt.getNormal(zn,Gn,Vn,p.normal),h.face=p}return h}class Rn extends Wt{constructor(e=1,t=1,i=1,s=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:o};const a=this;s=Math.floor(s),n=Math.floor(n),o=Math.floor(o);const c=[],u=[],h=[],p=[];let f=0,l=0;m("z","y","x",-1,-1,i,t,e,o,n,0),m("z","y","x",1,-1,i,t,-e,o,n,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,n,4),m("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(p,2));function m(v,d,g,E,y,A,_,M,T,b,x){const S=A/T,R=_/b,P=A/2,N=_/2,D=M/2,U=T+1,F=b+1;let O=0,G=0;const Y=new H;for(let $=0;$<F;$++){const Z=$*R-N;for(let j=0;j<U;j++){const k=j*S-P;Y[v]=k*E,Y[d]=Z*y,Y[g]=D,u.push(Y.x,Y.y,Y.z),Y[v]=0,Y[d]=0,Y[g]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(j/T),p.push(1-$/b),O+=1}}for(let $=0;$<b;$++)for(let Z=0;Z<T;Z++){const j=f+Z+U*$,k=f+Z+U*($+1),K=f+(Z+1)+U*($+1),ne=f+(Z+1)+U*$;c.push(j,k,ne),c.push(k,K,ne),G+=6}a.addGroup(l,G,x),l+=G,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function yt(r){const e={};for(let t=0;t<r.length;t++){const i=ti(r[t]);for(const s in i)e[s]=i[s]}return e}function Zl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function po(r){return r.getRenderTarget()===null?r.outputColorSpace:Xe.workingColorSpace}const Jl={clone:ti,merge:yt};var Ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ql,this.fragmentShader=ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=Zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let mo=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Jt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Dt extends mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;n+=o.offsetX*s/c,t-=o.offsetY*i/u,s*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kn=-90,Wn=1;class tc extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(kn,Wn,e,t);s.layers=this.layers,this.add(s);const n=new Dt(kn,Wn,e,t);n.layers=this.layers,this.add(n);const o=new Dt(kn,Wn,e,t);o.layers=this.layers,this.add(o);const a=new Dt(kn,Wn,e,t);a.layers=this.layers,this.add(a);const c=new Dt(kn,Wn,e,t);c.layers=this.layers,this.add(c);const u=new Dt(kn,Wn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,n,o,a,c]=t;for(const u of t)this.remove(u);if(e===Jt)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===es)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,o,a,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,n),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(p,f,l),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class go extends pt{constructor(e,t,i,s,n,o,a,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Zn,super(e,t,i,s,n,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nc extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bn?rt:It),this.texture=new go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),n=new Cn({name:"CubemapFromEquirect",uniforms:ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:cn});n.uniforms.tEquirect.value=t;const o=new ft(s,n),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Lt),new tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(n)}}const Us=new H,ic=new H,sc=new Be;class yn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Us.subVectors(i,t).cross(ic.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Us),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sc.getNormalMatrix(e),s=this.coplanarPoint(Us).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new ii,ki=new H;class nr{constructor(e=new yn,t=new yn,i=new yn,s=new yn,n=new yn,o=new yn){this.planes=[e,t,i,s,n,o]}set(e,t,i,s,n,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(n),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jt){const i=this.planes,s=e.elements,n=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],p=s[6],f=s[7],l=s[8],m=s[9],v=s[10],d=s[11],g=s[12],E=s[13],y=s[14],A=s[15];if(i[0].setComponents(c-n,f-u,d-l,A-g).normalize(),i[1].setComponents(c+n,f+u,d+l,A+g).normalize(),i[2].setComponents(c+o,f+h,d+m,A+E).normalize(),i[3].setComponents(c-o,f-h,d-m,A-E).normalize(),i[4].setComponents(c-a,f-p,d-v,A-y).normalize(),t===Jt)i[5].setComponents(c+a,f+p,d+v,A+y).normalize();else if(t===es)i[5].setComponents(a,p,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(e){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ki.x=s.normal.x>0?e.max.x:e.min.x,ki.y=s.normal.y>0?e.max.y:e.min.y,ki.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vo(){let r=null,e=!1,t=null,i=null;function s(n,o){t(n,o),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function rc(r,e){const t=e.isWebGL2,i=new WeakMap;function s(u,h){const p=u.array,f=u.usage,l=p.byteLength,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,p,f),u.onUploadCallback();let v;if(p instanceof Float32Array)v=r.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=r.SHORT;else if(p instanceof Uint32Array)v=r.UNSIGNED_INT;else if(p instanceof Int32Array)v=r.INT;else if(p instanceof Int8Array)v=r.BYTE;else if(p instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:l}}function n(u,h,p){const f=h.array,l=h._updateRange,m=h.updateRanges;if(r.bindBuffer(p,u),l.count===-1&&m.length===0&&r.bufferSubData(p,0,f),m.length!==0){for(let v=0,d=m.length;v<d;v++){const g=m[v];t?r.bufferSubData(p,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count):r.bufferSubData(p,g.start*f.BYTES_PER_ELEMENT,f.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}l.count!==-1&&(t?r.bufferSubData(p,l.offset*f.BYTES_PER_ELEMENT,f,l.offset,l.count):r.bufferSubData(p,l.offset*f.BYTES_PER_ELEMENT,f.subarray(l.offset,l.offset+l.count)),l.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(r.deleteBuffer(h.buffer),i.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);if(p===void 0)i.set(u,s(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,u,h),p.version=u.version}}return{get:o,remove:a,update:c}}class Gt extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),u=a+1,h=c+1,p=e/a,f=t/c,l=[],m=[],v=[],d=[];for(let g=0;g<h;g++){const E=g*f-o;for(let y=0;y<u;y++){const A=y*p-n;m.push(A,-E,0),v.push(0,0,1),d.push(y/a),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<a;E++){const y=E+u*g,A=E+u*(g+1),_=E+1+u*(g+1),M=E+1+u*g;l.push(y,A,M),l.push(A,_,M)}this.setIndex(l),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.widthSegments,e.heightSegments)}}var ac=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oc=`#ifdef USE_ALPHAHASH
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
#endif`,lc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fc=`#ifdef USE_AOMAP
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
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pc=`#ifdef USE_BATCHING
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
#endif`,mc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_c=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xc=`#ifdef USE_IRIDESCENCE
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
#endif`,yc=`#ifdef USE_BUMPMAP
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
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rc=`#define PI 3.141592653589793
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
} // validated`,Pc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lc=`vec3 transformedNormal = objectNormal;
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
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oc=`
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
}`,Bc=`#ifdef USE_ENVMAP
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
#endif`,Hc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zc=`#ifdef USE_ENVMAP
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
#endif`,Gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vc=`#ifdef USE_ENVMAP
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
#endif`,kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yc=`#ifdef USE_GRADIENTMAP
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
}`,$c=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jc=`uniform bool receiveShadow;
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
#endif`,Qc=`#ifdef USE_ENVMAP
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
#endif`,eh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sh=`PhysicalMaterial material;
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
#endif`,rh=`struct PhysicalMaterial {
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
}`,ah=`
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
#endif`,oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gh=`#if defined( USE_POINTS_UV )
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
#endif`,vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yh=`#ifdef USE_MORPHNORMALS
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
#endif`,Sh=`#ifdef USE_MORPHTARGETS
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
#endif`,Mh=`#ifdef USE_MORPHTARGETS
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
#endif`,Eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Th=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ch=`#ifdef USE_NORMALMAP
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
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ih=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wh=`float getShadowMask() {
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
}`,Xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qh=`#ifdef USE_SKINNING
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
#endif`,Yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
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
#endif`,Kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qh=`#ifdef USE_TRANSMISSION
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
#endif`,eu=`#ifdef USE_TRANSMISSION
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
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ru=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,au=`uniform sampler2D t2D;
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
}`,ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`#include <common>
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
}`,fu=`#if DEPTH_PACKING == 3200
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
}`,du=`#define DISTANCE
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
}`,pu=`#define DISTANCE
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`uniform float scale;
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
}`,_u=`uniform vec3 diffuse;
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
}`,xu=`#include <common>
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
}`,yu=`uniform vec3 diffuse;
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
}`,Su=`#define LAMBERT
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
}`,Mu=`#define LAMBERT
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
}`,Eu=`#define MATCAP
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
}`,Tu=`#define MATCAP
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
}`,Au=`#define NORMAL
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
}`,bu=`#define NORMAL
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
}`,wu=`#define PHONG
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
}`,Cu=`#define PHONG
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
}`,Ru=`#define STANDARD
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
}`,Pu=`#define STANDARD
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
}`,Lu=`#define TOON
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
}`,Du=`#define TOON
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
}`,Uu=`uniform float size;
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
}`,Iu=`uniform vec3 diffuse;
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
}`,Nu=`#include <common>
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
}`,Fu=`uniform vec3 color;
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
}`,Ou=`uniform float rotation;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:ac,alphahash_pars_fragment:oc,alphamap_fragment:lc,alphamap_pars_fragment:cc,alphatest_fragment:hc,alphatest_pars_fragment:uc,aomap_fragment:fc,aomap_pars_fragment:dc,batching_pars_vertex:pc,batching_vertex:mc,begin_vertex:gc,beginnormal_vertex:vc,bsdfs:_c,iridescence_fragment:xc,bumpmap_pars_fragment:yc,clipping_planes_fragment:Sc,clipping_planes_pars_fragment:Mc,clipping_planes_pars_vertex:Ec,clipping_planes_vertex:Tc,color_fragment:Ac,color_pars_fragment:bc,color_pars_vertex:wc,color_vertex:Cc,common:Rc,cube_uv_reflection_fragment:Pc,defaultnormal_vertex:Lc,displacementmap_pars_vertex:Dc,displacementmap_vertex:Uc,emissivemap_fragment:Ic,emissivemap_pars_fragment:Nc,colorspace_fragment:Fc,colorspace_pars_fragment:Oc,envmap_fragment:Bc,envmap_common_pars_fragment:Hc,envmap_pars_fragment:zc,envmap_pars_vertex:Gc,envmap_physical_pars_fragment:Qc,envmap_vertex:Vc,fog_vertex:kc,fog_pars_vertex:Wc,fog_fragment:Xc,fog_pars_fragment:qc,gradientmap_pars_fragment:Yc,lightmap_fragment:$c,lightmap_pars_fragment:Kc,lights_lambert_fragment:jc,lights_lambert_pars_fragment:Zc,lights_pars_begin:Jc,lights_toon_fragment:eh,lights_toon_pars_fragment:th,lights_phong_fragment:nh,lights_phong_pars_fragment:ih,lights_physical_fragment:sh,lights_physical_pars_fragment:rh,lights_fragment_begin:ah,lights_fragment_maps:oh,lights_fragment_end:lh,logdepthbuf_fragment:ch,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:uh,logdepthbuf_vertex:fh,map_fragment:dh,map_pars_fragment:ph,map_particle_fragment:mh,map_particle_pars_fragment:gh,metalnessmap_fragment:vh,metalnessmap_pars_fragment:_h,morphcolor_vertex:xh,morphnormal_vertex:yh,morphtarget_pars_vertex:Sh,morphtarget_vertex:Mh,normal_fragment_begin:Eh,normal_fragment_maps:Th,normal_pars_fragment:Ah,normal_pars_vertex:bh,normal_vertex:wh,normalmap_pars_fragment:Ch,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Ph,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Dh,opaque_fragment:Uh,packing:Ih,premultiplied_alpha_fragment:Nh,project_vertex:Fh,dithering_fragment:Oh,dithering_pars_fragment:Bh,roughnessmap_fragment:Hh,roughnessmap_pars_fragment:zh,shadowmap_pars_fragment:Gh,shadowmap_pars_vertex:Vh,shadowmap_vertex:kh,shadowmask_pars_fragment:Wh,skinbase_vertex:Xh,skinning_pars_vertex:qh,skinning_vertex:Yh,skinnormal_vertex:$h,specularmap_fragment:Kh,specularmap_pars_fragment:jh,tonemapping_fragment:Zh,tonemapping_pars_fragment:Jh,transmission_fragment:Qh,transmission_pars_fragment:eu,uv_pars_fragment:tu,uv_pars_vertex:nu,uv_vertex:iu,worldpos_vertex:su,background_vert:ru,background_frag:au,backgroundCube_vert:ou,backgroundCube_frag:lu,cube_vert:cu,cube_frag:hu,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:du,distanceRGBA_frag:pu,equirect_vert:mu,equirect_frag:gu,linedashed_vert:vu,linedashed_frag:_u,meshbasic_vert:xu,meshbasic_frag:yu,meshlambert_vert:Su,meshlambert_frag:Mu,meshmatcap_vert:Eu,meshmatcap_frag:Tu,meshnormal_vert:Au,meshnormal_frag:bu,meshphong_vert:wu,meshphong_frag:Cu,meshphysical_vert:Ru,meshphysical_frag:Pu,meshtoon_vert:Lu,meshtoon_frag:Du,points_vert:Uu,points_frag:Iu,shadow_vert:Nu,shadow_frag:Fu,sprite_vert:Ou,sprite_frag:Bu},se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},kt={basic:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:yt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:yt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:yt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:yt([se.common,se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:yt([se.lights,se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};kt.physical={uniforms:yt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Wi={r:0,b:0,g:0};function Hu(r,e,t,i,s,n,o){const a=new Ge(0);let c=n===!0?0:1,u,h,p=null,f=0,l=null;function m(d,g){let E=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,c):y&&y.isColor&&(v(y,1),E=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ts)?(h===void 0&&(h=new ft(new Rn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ti(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(y.colorSpace)!==je,(p!==y||f!==y.version||l!==r.toneMapping)&&(h.material.needsUpdate=!0,p=y,f=y.version,l=r.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new ft(new Gt(2,2),new Cn({name:"BackgroundMaterial",uniforms:ti(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(y.colorSpace)!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||f!==y.version||l!==r.toneMapping)&&(u.material.needsUpdate=!0,p=y,f=y.version,l=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null))}function v(d,g){d.getRGB(Wi,po(r)),i.buffers.color.setClear(Wi.r,Wi.g,Wi.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),c=g,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,v(a,c)},render:m}}function zu(r,e,t,i){const s=r.getParameter(r.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,a={},c=d(null);let u=c,h=!1;function p(D,U,F,O,G){let Y=!1;if(o){const $=v(O,F,U);u!==$&&(u=$,l(u.object)),Y=g(D,O,F,G),Y&&E(D,O,F,G)}else{const $=U.wireframe===!0;(u.geometry!==O.id||u.program!==F.id||u.wireframe!==$)&&(u.geometry=O.id,u.program=F.id,u.wireframe=$,Y=!0)}G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,b(D,U,F,O),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function f(){return i.isWebGL2?r.createVertexArray():n.createVertexArrayOES()}function l(D){return i.isWebGL2?r.bindVertexArray(D):n.bindVertexArrayOES(D)}function m(D){return i.isWebGL2?r.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function v(D,U,F){const O=F.wireframe===!0;let G=a[D.id];G===void 0&&(G={},a[D.id]=G);let Y=G[U.id];Y===void 0&&(Y={},G[U.id]=Y);let $=Y[O];return $===void 0&&($=d(f()),Y[O]=$),$}function d(D){const U=[],F=[],O=[];for(let G=0;G<s;G++)U[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:O,object:D,attributes:{},index:null}}function g(D,U,F,O){const G=u.attributes,Y=U.attributes;let $=0;const Z=F.getAttributes();for(const j in Z)if(Z[j].location>=0){const K=G[j];let ne=Y[j];if(ne===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;$++}return u.attributesNum!==$||u.index!==O}function E(D,U,F,O){const G={},Y=U.attributes;let $=0;const Z=F.getAttributes();for(const j in Z)if(Z[j].location>=0){let K=Y[j];K===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),G[j]=ne,$++}u.attributes=G,u.attributesNum=$,u.index=O}function y(){const D=u.newAttributes;for(let U=0,F=D.length;U<F;U++)D[U]=0}function A(D){_(D,0)}function _(D,U){const F=u.newAttributes,O=u.enabledAttributes,G=u.attributeDivisors;F[D]=1,O[D]===0&&(r.enableVertexAttribArray(D),O[D]=1),G[D]!==U&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),G[D]=U)}function M(){const D=u.newAttributes,U=u.enabledAttributes;for(let F=0,O=U.length;F<O;F++)U[F]!==D[F]&&(r.disableVertexAttribArray(F),U[F]=0)}function T(D,U,F,O,G,Y,$){$===!0?r.vertexAttribIPointer(D,U,F,G,Y):r.vertexAttribPointer(D,U,F,O,G,Y)}function b(D,U,F,O){if(i.isWebGL2===!1&&(D.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=O.attributes,Y=F.getAttributes(),$=U.defaultAttributeValues;for(const Z in Y){const j=Y[Z];if(j.location>=0){let k=G[Z];if(k===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){const K=k.normalized,ne=k.itemSize,ae=t.get(k);if(ae===void 0)continue;const he=ae.buffer,ge=ae.type,Ce=ae.bytesPerElement,Se=i.isWebGL2===!0&&(ge===r.INT||ge===r.UNSIGNED_INT||k.gpuType===Ka);if(k.isInterleavedBufferAttribute){const ze=k.data,z=ze.stride,lt=k.offset;if(ze.isInstancedInterleavedBuffer){for(let ve=0;ve<j.locationSize;ve++)_(j.location+ve,ze.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ve=0;ve<j.locationSize;ve++)A(j.location+ve);r.bindBuffer(r.ARRAY_BUFFER,he);for(let ve=0;ve<j.locationSize;ve++)T(j.location+ve,ne/j.locationSize,ge,K,z*Ce,(lt+ne/j.locationSize*ve)*Ce,Se)}else{if(k.isInstancedBufferAttribute){for(let ze=0;ze<j.locationSize;ze++)_(j.location+ze,k.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ze=0;ze<j.locationSize;ze++)A(j.location+ze);r.bindBuffer(r.ARRAY_BUFFER,he);for(let ze=0;ze<j.locationSize;ze++)T(j.location+ze,ne/j.locationSize,ge,K,ne*Ce,ne/j.locationSize*ze*Ce,Se)}}else if($!==void 0){const K=$[Z];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(j.location,K);break;case 3:r.vertexAttrib3fv(j.location,K);break;case 4:r.vertexAttrib4fv(j.location,K);break;default:r.vertexAttrib1fv(j.location,K)}}}}M()}function x(){P();for(const D in a){const U=a[D];for(const F in U){const O=U[F];for(const G in O)m(O[G].object),delete O[G];delete U[F]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const F in U){const O=U[F];for(const G in O)m(O[G].object),delete O[G];delete U[F]}delete a[D.id]}function R(D){for(const U in a){const F=a[U];if(F[D.id]===void 0)continue;const O=F[D.id];for(const G in O)m(O[G].object),delete O[G];delete F[D.id]}}function P(){N(),h=!0,u!==c&&(u=c,l(u.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:P,resetDefaultState:N,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:A,disableUnusedAttributes:M}}function Gu(r,e,t,i){const s=i.isWebGL2;let n;function o(h){n=h}function a(h,p){r.drawArrays(n,h,p),t.update(p,n,1)}function c(h,p,f){if(f===0)return;let l,m;if(s)l=r,m="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",l===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}l[m](n,h,p,f),t.update(p,n,f)}function u(h,p,f){if(f===0)return;const l=e.get("WEBGL_multi_draw");if(l===null)for(let m=0;m<f;m++)this.render(h[m],p[m]);else{l.multiDrawArraysWEBGL(n,h,0,p,0,f);let m=0;for(let v=0;v<f;v++)m+=p[v];t.update(m,n,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function Vu(r,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=n(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,A=o||e.has("OES_texture_float"),_=y&&A,M=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:l,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:_,maxSamples:M}}function ku(r){const e=this;let t=null,i=0,s=!1,n=!1;const o=new yn,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const l=p.length!==0||f||i!==0||s;return s=f,i=p.length,l},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,l){const m=p.clippingPlanes,v=p.clipIntersection,d=p.clipShadows,g=r.get(p);if(!s||m===null||m.length===0||n&&!d)n?h(null):u();else{const E=n?0:i,y=E*4;let A=g.clippingState||null;c.value=A,A=h(m,f,y,l);for(let _=0;_!==y;++_)A[_]=t[_];g.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,l,m){const v=p!==null?p.length:0;let d=null;if(v!==0){if(d=c.value,m!==!0||d===null){const g=l+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<g)&&(d=new Float32Array(g));for(let y=0,A=l;y!==v;++y,A+=4)o.copy(p[y]).applyMatrix4(E,a),o.normal.toArray(d,A),d[A+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function Wu(r){let e=new WeakMap;function t(o,a){return a===qs?o.mapping=Zn:a===Ys&&(o.mapping=Jn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qs||a===Ys)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new nc(c.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class ir extends mo{constructor(e=-1,t=1,i=1,s=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=u*this.view.offsetX,o=n+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(n,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yn=4,fa=[.125,.215,.35,.446,.526,.582],En=20,Is=new ir,da=new Ge;let Ns=null,Fs=0,Os=0;const Sn=(1+Math.sqrt(5))/2,Xn=1/Sn,pa=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Sn,Xn),new H(0,Sn,-Xn),new H(Xn,0,Sn),new H(-Xn,0,Sn),new H(Sn,Xn,0),new H(-Sn,Xn,0)];class ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,s,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Fs,Os),e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===Jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:vi,format:zt,colorSpace:en,depthBuffer:!1},s=ga(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ga(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xu(n)),this._blurMaterial=qu(n,e,t)}return s}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,i,s){const a=new Dt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(da),h.toneMapping=hn,h.autoClear=!1;const l=new Ct({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),m=new ft(new Rn,l);let v=!1;const d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,v=!0):(l.color.copy(da),v=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(a.up.set(0,c[g],0),a.lookAt(u[g],0,0)):E===1?(a.up.set(0,0,c[g]),a.lookAt(0,u[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,u[g]));const y=this._cubeSize;Xi(s,E*y,g>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zn||e.mapping===Jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=va());const n=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const c=this._cubeSize;Xi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Is)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const n=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pa[(s-1)%pa.length];this._blur(e,s-1,s,n,o)}t.autoClear=i}_blur(e,t,i,s,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",n),this._halfBlur(o,e,i,i,s,"longitudinal",n)}_halfBlur(e,t,i,s,n,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new ft(this._lodPlanes[s],u),f=u.uniforms,l=this._sizeLods[i]-1,m=isFinite(n)?Math.PI/(2*l):2*Math.PI/(2*En-1),v=n/m,d=isFinite(n)?1+Math.floor(h*v):En;d>En&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const g=[];let E=0;for(let T=0;T<En;++T){const b=T/v,x=Math.exp(-b*b/2);g.push(x),T===0?E+=x:T<d&&(E+=2*x)}for(let T=0;T<g.length;T++)g[T]=g[T]/E;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const A=this._sizeLods[s],_=3*A*(s>y-Yn?s-y+Yn:0),M=4*(this._cubeSize-A);Xi(t,_,M,3*A,2*A),c.setRenderTarget(t),c.render(p,Is)}}function Xu(r){const e=[],t=[],i=[];let s=r;const n=r-Yn+1+fa.length;for(let o=0;o<n;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>r-Yn?c=fa[o-r+Yn-1]:o===0&&(c=0),i.push(c);const u=1/(a-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],l=6,m=6,v=3,d=2,g=1,E=new Float32Array(v*m*l),y=new Float32Array(d*m*l),A=new Float32Array(g*m*l);for(let M=0;M<l;M++){const T=M%3*2/3-1,b=M>2?0:-1,x=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];E.set(x,v*m*M),y.set(f,d*m*M);const S=[M,M,M,M,M,M];A.set(S,g*m*M)}const _=new Wt;_.setAttribute("position",new wt(E,v)),_.setAttribute("uv",new wt(y,d)),_.setAttribute("faceIndex",new wt(A,g)),e.push(_),s>Yn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ga(r,e,t){const i=new wn(r,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xi(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function qu(r,e,t){const i=new Float32Array(En),s=new H(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function va(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function _a(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function sr(){return`

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
	`}function Yu(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===qs||c===Ys,h=c===Zn||c===Jn;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new ma(r)),p=u?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||h&&p&&s(p)){t===null&&(t=new ma(r));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",n),f.texture}else return null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function n(a){const c=a.target;c.removeEventListener("dispose",n);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $u(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ku(r,e,t,i){const s={},n=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let d=0,g=v.length;d<g;d++)e.remove(v[d])}f.removeEventListener("dispose",o),delete s[f.id];const l=n.get(f);l&&(e.remove(l),n.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],r.ARRAY_BUFFER);const l=p.morphAttributes;for(const m in l){const v=l[m];for(let d=0,g=v.length;d<g;d++)e.update(v[d],r.ARRAY_BUFFER)}}function u(p){const f=[],l=p.index,m=p.attributes.position;let v=0;if(l!==null){const E=l.array;v=l.version;for(let y=0,A=E.length;y<A;y+=3){const _=E[y+0],M=E[y+1],T=E[y+2];f.push(_,M,M,T,T,_)}}else if(m!==void 0){const E=m.array;v=m.version;for(let y=0,A=E.length/3-1;y<A;y+=3){const _=y+0,M=y+1,T=y+2;f.push(_,M,M,T,T,_)}}else return;const d=new(so(f)?fo:uo)(f,1);d.version=v;const g=n.get(p);g&&e.remove(g),n.set(p,d)}function h(p){const f=n.get(p);if(f){const l=p.index;l!==null&&f.version<l.version&&u(p)}else u(p);return n.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function ju(r,e,t,i){const s=i.isWebGL2;let n;function o(l){n=l}let a,c;function u(l){a=l.type,c=l.bytesPerElement}function h(l,m){r.drawElements(n,m,a,l*c),t.update(m,n,1)}function p(l,m,v){if(v===0)return;let d,g;if(s)d=r,g="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](n,m,a,l*c,v),t.update(m,n,v)}function f(l,m,v){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<v;g++)this.render(l[g]/c,m[g]);else{d.multiDrawElementsWEBGL(n,m,0,a,l,0,v);let g=0;for(let E=0;E<v;E++)g+=m[E];t.update(g,n,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=f}function Zu(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(n/3);break;case r.LINES:t.lines+=a*(n/2);break;case r.LINE_STRIP:t.lines+=a*(n-1);break;case r.LINE_LOOP:t.lines+=a*n;break;case r.POINTS:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ju(r,e){return r[0]-e[0]}function Qu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ef(r,e,t){const i={},s=new Float32Array(8),n=new WeakMap,o=new Je,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,h,p){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let d=n.get(h);if(d===void 0||d.count!==v){let U=function(){N.dispose(),n.delete(h),h.removeEventListener("dispose",U)};var l=U;d!==void 0&&d.texture.dispose();const y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let x=0;y===!0&&(x=1),A===!0&&(x=2),_===!0&&(x=3);let S=h.attributes.position.count*x,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*R*4*v),N=new oo(P,S,R,v);N.type=ln,N.needsUpdate=!0;const D=x*4;for(let F=0;F<v;F++){const O=M[F],G=T[F],Y=b[F],$=S*R*4*F;for(let Z=0;Z<O.count;Z++){const j=Z*D;y===!0&&(o.fromBufferAttribute(O,Z),P[$+j+0]=o.x,P[$+j+1]=o.y,P[$+j+2]=o.z,P[$+j+3]=0),A===!0&&(o.fromBufferAttribute(G,Z),P[$+j+4]=o.x,P[$+j+5]=o.y,P[$+j+6]=o.z,P[$+j+7]=0),_===!0&&(o.fromBufferAttribute(Y,Z),P[$+j+8]=o.x,P[$+j+9]=o.y,P[$+j+10]=o.z,P[$+j+11]=Y.itemSize===4?o.w:1)}}d={count:v,texture:N,size:new Ve(S,R)},n.set(h,d),h.addEventListener("dispose",U)}let g=0;for(let y=0;y<f.length;y++)g+=f[y];const E=h.morphTargetsRelative?1:1-g;p.getUniforms().setValue(r,"morphTargetBaseInfluence",E),p.getUniforms().setValue(r,"morphTargetInfluences",f),p.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const m=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let A=0;A<m;A++)v[A]=[A,0];i[h.id]=v}for(let A=0;A<m;A++){const _=v[A];_[0]=A,_[1]=f[A]}v.sort(Qu);for(let A=0;A<8;A++)A<m&&v[A][1]?(a[A][0]=v[A][0],a[A][1]=v[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(Ju);const d=h.morphAttributes.position,g=h.morphAttributes.normal;let E=0;for(let A=0;A<8;A++){const _=a[A],M=_[0],T=_[1];M!==Number.MAX_SAFE_INTEGER&&T?(d&&h.getAttribute("morphTarget"+A)!==d[M]&&h.setAttribute("morphTarget"+A,d[M]),g&&h.getAttribute("morphNormal"+A)!==g[M]&&h.setAttribute("morphNormal"+A,g[M]),s[A]=T,E+=T):(d&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),g&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}const y=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",y),p.getUniforms().setValue(r,"morphTargetInfluences",s)}}return{update:c}}function tf(r,e,t,i){let s=new WeakMap;function n(c){const u=i.render.frame,h=c.geometry,p=e.get(c,h);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return p}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:n,dispose:o}}class _o extends pt{constructor(e,t,i,s,n,o,a,c,u,h){if(h=h!==void 0?h:An,h!==An&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===An&&(i=on),i===void 0&&h===ei&&(i=Tn),super(null,s,n,o,a,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xo=new pt,yo=new _o(1,1);yo.compareFunction=io;const So=new oo,Mo=new Hl,Eo=new go,xa=[],ya=[],Sa=new Float32Array(16),Ma=new Float32Array(9),Ea=new Float32Array(4);function si(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let n=xa[s];if(n===void 0&&(n=new Float32Array(s),xa[s]=n),e!==0){i.toArray(n,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(n,a)}return n}function at(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ot(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ss(r,e){let t=ya[e];t===void 0&&(t=new Int32Array(e),ya[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function nf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2fv(this.addr,e),ot(t,e)}}function rf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;r.uniform3fv(this.addr,e),ot(t,e)}}function af(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4fv(this.addr,e),ot(t,e)}}function of(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Ea.set(i),r.uniformMatrix2fv(this.addr,!1,Ea),ot(t,i)}}function lf(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Ma.set(i),r.uniformMatrix3fv(this.addr,!1,Ma),ot(t,i)}}function cf(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Sa.set(i),r.uniformMatrix4fv(this.addr,!1,Sa),ot(t,i)}}function hf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function uf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2iv(this.addr,e),ot(t,e)}}function ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3iv(this.addr,e),ot(t,e)}}function df(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4iv(this.addr,e),ot(t,e)}}function pf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2uiv(this.addr,e),ot(t,e)}}function gf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3uiv(this.addr,e),ot(t,e)}}function vf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4uiv(this.addr,e),ot(t,e)}}function _f(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);const n=this.type===r.SAMPLER_2D_SHADOW?yo:xo;t.setTexture2D(e||n,s)}function xf(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mo,s)}function yf(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Eo,s)}function Sf(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||So,s)}function Mf(r){switch(r){case 5126:return nf;case 35664:return sf;case 35665:return rf;case 35666:return af;case 35674:return of;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return hf;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return df;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Sf}}function Ef(r,e){r.uniform1fv(this.addr,e)}function Tf(r,e){const t=si(e,this.size,2);r.uniform2fv(this.addr,t)}function Af(r,e){const t=si(e,this.size,3);r.uniform3fv(this.addr,t)}function bf(r,e){const t=si(e,this.size,4);r.uniform4fv(this.addr,t)}function wf(r,e){const t=si(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cf(r,e){const t=si(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Rf(r,e){const t=si(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pf(r,e){r.uniform1iv(this.addr,e)}function Lf(r,e){r.uniform2iv(this.addr,e)}function Df(r,e){r.uniform3iv(this.addr,e)}function Uf(r,e){r.uniform4iv(this.addr,e)}function If(r,e){r.uniform1uiv(this.addr,e)}function Nf(r,e){r.uniform2uiv(this.addr,e)}function Ff(r,e){r.uniform3uiv(this.addr,e)}function Of(r,e){r.uniform4uiv(this.addr,e)}function Bf(r,e,t){const i=this.cache,s=e.length,n=ss(t,s);at(i,n)||(r.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xo,n[o])}function Hf(r,e,t){const i=this.cache,s=e.length,n=ss(t,s);at(i,n)||(r.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mo,n[o])}function zf(r,e,t){const i=this.cache,s=e.length,n=ss(t,s);at(i,n)||(r.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Eo,n[o])}function Gf(r,e,t){const i=this.cache,s=e.length,n=ss(t,s);at(i,n)||(r.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||So,n[o])}function Vf(r){switch(r){case 5126:return Ef;case 35664:return Tf;case 35665:return Af;case 35666:return bf;case 35674:return wf;case 35675:return Cf;case 35676:return Rf;case 5124:case 35670:return Pf;case 35667:case 35671:return Lf;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return If;case 36294:return Nf;case 36295:return Ff;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Gf}}class kf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mf(t.type)}}class Wf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vf(t.type)}}class Xf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let n=0,o=s.length;n!==o;++n){const a=s[n];a.setValue(e,t[a.id],i)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Ta(r,e){r.seq.push(e),r.map[e.id]=e}function qf(r,e,t){const i=r.name,s=i.length;for(Bs.lastIndex=0;;){const n=Bs.exec(i),o=Bs.lastIndex;let a=n[1];const c=n[2]==="]",u=n[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Ta(t,u===void 0?new kf(a,r,e):new Wf(a,r,e));break}else{let p=t.map[a];p===void 0&&(p=new Xf(a),Ta(t,p)),t=p}}}class Ki{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const n=e.getActiveUniform(t,s),o=e.getUniformLocation(t,n.name);qf(n,o,this)}}setValue(e,t,i,s){const n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,o=t.length;n!==o;++n){const a=t[n],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,n=e.length;s!==n;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Aa(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Yf=37297;let $f=0;function Kf(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=s;o<n;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function jf(r){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(r);let i;switch(e===t?i="":e===Qi&&t===Ji?i="LinearDisplayP3ToLinearSRGB":e===Ji&&t===Qi&&(i="LinearSRGBToLinearDisplayP3"),r){case en:case ns:return[i,"LinearTransferOETF"];case rt:case tr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function ba(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(i&&s==="")return"";const n=/ERROR: 0:(\d+)/.exec(s);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+Kf(r.getShaderSource(e),o)}else return s}function Zf(r,e){const t=jf(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jf(r,e){let t;switch(e){case ol:t="Linear";break;case ll:t="Reinhard";break;case cl:t="OptimizedCineon";break;case hl:t="ACESFilmic";break;case fl:t="AgX";break;case ul:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($n).join(`
`)}function ed(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($n).join(`
`)}function td(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nd(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=r.getActiveAttrib(e,s),o=n.name;let a=1;n.type===r.FLOAT_MAT2&&(a=2),n.type===r.FLOAT_MAT3&&(a=3),n.type===r.FLOAT_MAT4&&(a=4),t[o]={type:n.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function $n(r){return r!==""}function wa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ca(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const id=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(r){return r.replace(id,rd)}const sd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rd(r,e){let t=Ue[e];if(t===void 0){const i=sd.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Js(t)}const ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ra(r){return r.replace(ad,od)}function od(r,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function Pa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ld(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===No?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function cd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zn:case Jn:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Jn:e="ENVMAP_MODE_REFRACTION";break}return e}function ud(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case rl:e="ENVMAP_BLENDING_MIX";break;case al:e="ENVMAP_BLENDING_ADD";break}return e}function fd(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dd(r,e,t,i){const s=r.getContext(),n=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ld(t),u=cd(t),h=hd(t),p=ud(t),f=fd(t),l=t.isWebGL2?"":Qf(t),m=ed(t),v=td(n),d=s.createProgram();let g,E,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($n).join(`
`),g.length>0&&(g+=`
`),E=[l,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($n).join(`
`),E.length>0&&(E+=`
`)):(g=[Pa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),E=[l,Pa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==hn?Jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Zf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($n).join(`
`)),o=Js(o),o=wa(o,t),o=Ca(o,t),a=Js(a),a=wa(a,t),a=Ca(a,t),o=Ra(o),a=Ra(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const A=y+g+o,_=y+E+a,M=Aa(s,s.VERTEX_SHADER,A),T=Aa(s,s.FRAGMENT_SHADER,_);s.attachShader(d,M),s.attachShader(d,T),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function b(P){if(r.debug.checkShaderErrors){const N=s.getProgramInfoLog(d).trim(),D=s.getShaderInfoLog(M).trim(),U=s.getShaderInfoLog(T).trim();let F=!0,O=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,d,M,T);else{const G=ba(s,M,"vertex"),Y=ba(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:F,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:U,prefix:E}})}s.deleteShader(M),s.deleteShader(T),x=new Ki(s,d),S=nd(s,d)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(d,Yf)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$f++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=T,this}let pd=0;class md{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gd(e),t.set(e,i)),i}}class gd{constructor(e){this.id=pd++,this.code=e,this.usedTimes=0}}function vd(r,e,t,i,s,n,o){const a=new co,c=new md,u=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,f=s.vertexTextures;let l=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function d(x,S,R,P,N){const D=P.fog,U=N.geometry,F=x.isMeshStandardMaterial?P.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),G=O&&O.mapping===ts?O.image.height:null,Y=m[x.type];x.precision!==null&&(l=s.getMaxPrecision(x.precision),l!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",l,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Z=$!==void 0?$.length:0;let j=0;U.morphAttributes.position!==void 0&&(j=1),U.morphAttributes.normal!==void 0&&(j=2),U.morphAttributes.color!==void 0&&(j=3);let k,K,ne,ae;if(Y){const _t=kt[Y];k=_t.vertexShader,K=_t.fragmentShader}else k=x.vertexShader,K=x.fragmentShader,c.update(x),ne=c.getVertexShaderID(x),ae=c.getFragmentShaderID(x);const he=r.getRenderTarget(),ge=N.isInstancedMesh===!0,Ce=N.isBatchedMesh===!0,Se=!!x.map,ze=!!x.matcap,z=!!O,lt=!!x.aoMap,ve=!!x.lightMap,_e=!!x.bumpMap,pe=!!x.normalMap,qe=!!x.displacementMap,Re=!!x.emissiveMap,L=!!x.metalnessMap,w=!!x.roughnessMap,V=x.anisotropy>0,J=x.clearcoat>0,Q=x.iridescence>0,te=x.sheen>0,de=x.transmission>0,re=V&&!!x.anisotropyMap,ue=J&&!!x.clearcoatMap,Ee=J&&!!x.clearcoatNormalMap,Ie=J&&!!x.clearcoatRoughnessMap,ee=Q&&!!x.iridescenceMap,We=Q&&!!x.iridescenceThicknessMap,He=te&&!!x.sheenColorMap,we=te&&!!x.sheenRoughnessMap,xe=!!x.specularMap,fe=!!x.specularColorMap,De=!!x.specularIntensityMap,ke=de&&!!x.transmissionMap,tt=de&&!!x.thicknessMap,Fe=!!x.gradientMap,ie=!!x.alphaMap,I=x.alphaTest>0,oe=!!x.alphaHash,le=!!x.extensions,Te=!!U.attributes.uv1,ye=!!U.attributes.uv2,Ye=!!U.attributes.uv3;let $e=hn;return x.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&($e=r.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:k,fragmentShader:K,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:l,batching:Ce,instancing:ge,instancingColor:ge&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:en,map:Se,matcap:ze,envMap:z,envMapMode:z&&O.mapping,envMapCubeUVHeight:G,aoMap:lt,lightMap:ve,bumpMap:_e,normalMap:pe,displacementMap:f&&qe,emissiveMap:Re,normalMapObjectSpace:pe&&x.normalMapType===Al,normalMapTangentSpace:pe&&x.normalMapType===Tl,metalnessMap:L,roughnessMap:w,anisotropy:V,anisotropyMap:re,clearcoat:J,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ie,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:We,sheen:te,sheenColorMap:He,sheenRoughnessMap:we,specularMap:xe,specularColorMap:fe,specularIntensityMap:De,transmission:de,transmissionMap:ke,thicknessMap:tt,gradientMap:Fe,opaque:x.transparent===!1&&x.blending===Kn,alphaMap:ie,alphaTest:I,alphaHash:oe,combine:x.combine,mapUv:Se&&v(x.map.channel),aoMapUv:lt&&v(x.aoMap.channel),lightMapUv:ve&&v(x.lightMap.channel),bumpMapUv:_e&&v(x.bumpMap.channel),normalMapUv:pe&&v(x.normalMap.channel),displacementMapUv:qe&&v(x.displacementMap.channel),emissiveMapUv:Re&&v(x.emissiveMap.channel),metalnessMapUv:L&&v(x.metalnessMap.channel),roughnessMapUv:w&&v(x.roughnessMap.channel),anisotropyMapUv:re&&v(x.anisotropyMap.channel),clearcoatMapUv:ue&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(x.sheenRoughnessMap.channel),specularMapUv:xe&&v(x.specularMap.channel),specularColorMapUv:fe&&v(x.specularColorMap.channel),specularIntensityMapUv:De&&v(x.specularIntensityMap.channel),transmissionMapUv:ke&&v(x.transmissionMap.channel),thicknessMapUv:tt&&v(x.thicknessMap.channel),alphaMapUv:ie&&v(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:ye,vertexUv3s:Ye,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Se||ie),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===Et,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:le&&x.extensions.derivatives===!0,extensionFragDepth:le&&x.extensions.fragDepth===!0,extensionDrawBuffers:le&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function g(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(E(S,x),y(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function E(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function A(x){const S=m[x.type];let R;if(S){const P=kt[S];R=Jl.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,S){let R;for(let P=0,N=u.length;P<N;P++){const D=u[P];if(D.cacheKey===S){R=D,++R.usedTimes;break}}return R===void 0&&(R=new dd(r,S,x,n),u.push(R)),R}function M(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function T(x){c.remove(x)}function b(){c.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:A,acquireProgram:_,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:b}}function _d(){let r=new WeakMap;function e(n){let o=r.get(n);return o===void 0&&(o={},r.set(n,o)),o}function t(n){r.delete(n)}function i(n,o,a){r.get(n)[o]=a}function s(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function xd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function La(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Da(){const r=[];let e=0;const t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function o(p,f,l,m,v,d){let g=r[e];return g===void 0?(g={id:p.id,object:p,geometry:f,material:l,groupOrder:m,renderOrder:p.renderOrder,z:v,group:d},r[e]=g):(g.id=p.id,g.object=p,g.geometry=f,g.material=l,g.groupOrder=m,g.renderOrder=p.renderOrder,g.z=v,g.group=d),e++,g}function a(p,f,l,m,v,d){const g=o(p,f,l,m,v,d);l.transmission>0?i.push(g):l.transparent===!0?s.push(g):t.push(g)}function c(p,f,l,m,v,d){const g=o(p,f,l,m,v,d);l.transmission>0?i.unshift(g):l.transparent===!0?s.unshift(g):t.unshift(g)}function u(p,f){t.length>1&&t.sort(p||xd),i.length>1&&i.sort(f||La),s.length>1&&s.sort(f||La)}function h(){for(let p=e,f=r.length;p<f;p++){const l=r[p];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:a,unshift:c,finish:h,sort:u}}function yd(){let r=new WeakMap;function e(i,s){const n=r.get(i);let o;return n===void 0?(o=new Da,r.set(i,[o])):s>=n.length?(o=new Da,n.push(o)):o=n[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Sd(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ge};break;case"SpotLight":t={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function Md(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ed=0;function Td(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ad(r,e){const t=new Sd,i=Md(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new H);const n=new H,o=new Qe,a=new Qe;function c(h,p){let f=0,l=0,m=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let v=0,d=0,g=0,E=0,y=0,A=0,_=0,M=0,T=0,b=0,x=0;h.sort(Td);const S=p===!0?Math.PI:1;for(let P=0,N=h.length;P<N;P++){const D=h[P],U=D.color,F=D.intensity,O=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*F*S,l+=U.g*F*S,m+=U.b*F*S;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(D.sh.coefficients[Y],F);x++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const $=D.shadow,Z=i.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.directionalShadow[v]=Z,s.directionalShadowMap[v]=G,s.directionalShadowMatrix[v]=D.shadow.matrix,A++}s.directional[v]=Y,v++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(U).multiplyScalar(F*S),Y.distance=O,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,s.spot[g]=Y;const $=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,$.updateMatrices(D),D.castShadow&&b++),s.spotLightMatrix[g]=$.matrix,D.castShadow){const Z=i.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.spotShadow[g]=Z,s.spotShadowMap[g]=G,M++}g++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(U).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),s.rectArea[E]=Y,E++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const $=D.shadow,Z=i.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,s.pointShadow[d]=Z,s.pointShadowMap[d]=G,s.pointShadowMatrix[d]=D.shadow.matrix,_++}s.point[d]=Y,d++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(F*S),Y.groundColor.copy(D.groundColor).multiplyScalar(F*S),s.hemi[y]=Y,y++}}E>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=l,s.ambient[2]=m;const R=s.hash;(R.directionalLength!==v||R.pointLength!==d||R.spotLength!==g||R.rectAreaLength!==E||R.hemiLength!==y||R.numDirectionalShadows!==A||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==T||R.numLightProbes!==x)&&(s.directional.length=v,s.spot.length=g,s.rectArea.length=E,s.point.length=d,s.hemi.length=y,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=_,s.pointShadowMap.length=_,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=_,s.spotLightMatrix.length=M+T-b,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=b,s.numLightProbes=x,R.directionalLength=v,R.pointLength=d,R.spotLength=g,R.rectAreaLength=E,R.hemiLength=y,R.numDirectionalShadows=A,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=T,R.numLightProbes=x,s.version=Ed++)}function u(h,p){let f=0,l=0,m=0,v=0,d=0;const g=p.matrixWorldInverse;for(let E=0,y=h.length;E<y;E++){const A=h[E];if(A.isDirectionalLight){const _=s.directional[f];_.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),f++}else if(A.isSpotLight){const _=s.spot[m];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const _=s.rectArea[v];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),a.identity(),o.copy(A.matrixWorld),o.premultiply(g),a.extractRotation(o),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const _=s.point[l];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),l++}else if(A.isHemisphereLight){const _=s.hemi[d];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(g),d++}}}return{setup:c,setupView:u,state:s}}function Ua(r,e){const t=new Ad(r,e),i=[],s=[];function n(){i.length=0,s.length=0}function o(p){i.push(p)}function a(p){s.push(p)}function c(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:n,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function bd(r,e){let t=new WeakMap;function i(n,o=0){const a=t.get(n);let c;return a===void 0?(c=new Ua(r,e),t.set(n,[c])):o>=a.length?(c=new Ua(r,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class wd extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cd extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pd=`uniform sampler2D shadow_pass;
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
}`;function Ld(r,e,t){let i=new nr;const s=new Ve,n=new Ve,o=new Je,a=new wd({depthPacking:El}),c=new Cd,u={},h=t.maxTextureSize,p={[fn]:Et,[Et]:fn,[Ut]:Ut},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Rd,fragmentShader:Pd}),l=f.clone();l.defines.HORIZONTAL_PASS=1;const m=new Wt;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ft(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let g=this.type;this.render=function(M,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const x=r.getRenderTarget(),S=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),P=r.state;P.setBlending(cn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=g!==Zt&&this.type===Zt,D=g===Zt&&this.type!==Zt;for(let U=0,F=M.length;U<F;U++){const O=M[U],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Y=G.getFrameExtents();if(s.multiply(Y),n.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(n.x=Math.floor(h/Y.x),s.x=n.x*Y.x,G.mapSize.x=n.x),s.y>h&&(n.y=Math.floor(h/Y.y),s.y=n.y*Y.y,G.mapSize.y=n.y)),G.map===null||N===!0||D===!0){const Z=this.type!==Zt?{minFilter:Ze,magFilter:Ze}:{};G.map!==null&&G.map.dispose(),G.map=new wn(s.x,s.y,Z),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const $=G.getViewportCount();for(let Z=0;Z<$;Z++){const j=G.getViewport(Z);o.set(n.x*j.x,n.y*j.y,n.x*j.z,n.y*j.w),P.viewport(o),G.updateMatrices(O,Z),i=G.getFrustum(),A(T,b,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Zt&&E(G,b),G.needsUpdate=!1}g=this.type,d.needsUpdate=!1,r.setRenderTarget(x,S,R)};function E(M,T){const b=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,l.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,l.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,b,f,v,null),l.uniforms.shadow_pass.value=M.mapPass.texture,l.uniforms.resolution.value=M.mapSize,l.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,b,l,v,null)}function y(M,T,b,x){let S=null;const R=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)S=R;else if(S=b.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=S.uuid,N=T.uuid;let D=u[P];D===void 0&&(D={},u[P]=D);let U=D[N];U===void 0&&(U=S.clone(),D[N]=U,T.addEventListener("dispose",_)),S=U}if(S.visible=T.visible,S.wireframe=T.wireframe,x===Zt?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:p[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=r.properties.get(S);P.light=b}return S}function A(M,T,b,x,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Zt)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const N=e.update(M),D=M.material;if(Array.isArray(D)){const U=N.groups;for(let F=0,O=U.length;F<O;F++){const G=U[F],Y=D[G.materialIndex];if(Y&&Y.visible){const $=y(M,Y,x,S);M.onBeforeShadow(r,M,T,b,N,$,G),r.renderBufferDirect(b,null,N,$,M,G),M.onAfterShadow(r,M,T,b,N,$,G)}}}else if(D.visible){const U=y(M,D,x,S);M.onBeforeShadow(r,M,T,b,N,U,null),r.renderBufferDirect(b,null,N,U,M,null),M.onAfterShadow(r,M,T,b,N,U,null)}}const P=M.children;for(let N=0,D=P.length;N<D;N++)A(P[N],T,b,x,S)}function _(M){M.target.removeEventListener("dispose",_);for(const b in u){const x=u[b],S=M.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function Dd(r,e,t){const i=t.isWebGL2;function s(){let I=!1;const oe=new Je;let le=null;const Te=new Je(0,0,0,0);return{setMask:function(ye){le!==ye&&!I&&(r.colorMask(ye,ye,ye,ye),le=ye)},setLocked:function(ye){I=ye},setClear:function(ye,Ye,$e,ct,_t){_t===!0&&(ye*=ct,Ye*=ct,$e*=ct),oe.set(ye,Ye,$e,ct),Te.equals(oe)===!1&&(r.clearColor(ye,Ye,$e,ct),Te.copy(oe))},reset:function(){I=!1,le=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,oe=null,le=null,Te=null;return{setTest:function(ye){ye?Ce(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ye){oe!==ye&&!I&&(r.depthMask(ye),oe=ye)},setFunc:function(ye){if(le!==ye){switch(ye){case Jo:r.depthFunc(r.NEVER);break;case Qo:r.depthFunc(r.ALWAYS);break;case el:r.depthFunc(r.LESS);break;case ji:r.depthFunc(r.LEQUAL);break;case tl:r.depthFunc(r.EQUAL);break;case nl:r.depthFunc(r.GEQUAL);break;case il:r.depthFunc(r.GREATER);break;case sl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=ye}},setLocked:function(ye){I=ye},setClear:function(ye){Te!==ye&&(r.clearDepth(ye),Te=ye)},reset:function(){I=!1,oe=null,le=null,Te=null}}}function o(){let I=!1,oe=null,le=null,Te=null,ye=null,Ye=null,$e=null,ct=null,_t=null;return{setTest:function(Ke){I||(Ke?Ce(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!I&&(r.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,xt,Vt){(le!==Ke||Te!==xt||ye!==Vt)&&(r.stencilFunc(Ke,xt,Vt),le=Ke,Te=xt,ye=Vt)},setOp:function(Ke,xt,Vt){(Ye!==Ke||$e!==xt||ct!==Vt)&&(r.stencilOp(Ke,xt,Vt),Ye=Ke,$e=xt,ct=Vt)},setLocked:function(Ke){I=Ke},setClear:function(Ke){_t!==Ke&&(r.clearStencil(Ke),_t=Ke)},reset:function(){I=!1,oe=null,le=null,Te=null,ye=null,Ye=null,$e=null,ct=null,_t=null}}}const a=new s,c=new n,u=new o,h=new WeakMap,p=new WeakMap;let f={},l={},m=new WeakMap,v=[],d=null,g=!1,E=null,y=null,A=null,_=null,M=null,T=null,b=null,x=new Ge(0,0,0),S=0,R=!1,P=null,N=null,D=null,U=null,F=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),G=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=Y>=2);let Z=null,j={};const k=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),ne=new Je().fromArray(k),ae=new Je().fromArray(K);function he(I,oe,le,Te){const ye=new Uint8Array(4),Ye=r.createTexture();r.bindTexture(I,Ye),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<le;$e++)i&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(oe,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(oe+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return Ye}const ge={};ge[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ce(r.DEPTH_TEST),c.setFunc(ji),Re(!1),L(pr),Ce(r.CULL_FACE),pe(cn);function Ce(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Se(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function ze(I,oe){return l[I]!==oe?(r.bindFramebuffer(I,oe),l[I]=oe,i&&(I===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=oe),I===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=oe)),!0):!1}function z(I,oe){let le=v,Te=!1;if(I)if(le=m.get(oe),le===void 0&&(le=[],m.set(oe,le)),I.isWebGLMultipleRenderTargets){const ye=I.texture;if(le.length!==ye.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Ye=0,$e=ye.length;Ye<$e;Ye++)le[Ye]=r.COLOR_ATTACHMENT0+Ye;le.length=ye.length,Te=!0}}else le[0]!==r.COLOR_ATTACHMENT0&&(le[0]=r.COLOR_ATTACHMENT0,Te=!0);else le[0]!==r.BACK&&(le[0]=r.BACK,Te=!0);Te&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function lt(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const ve={[Mn]:r.FUNC_ADD,[Oo]:r.FUNC_SUBTRACT,[Bo]:r.FUNC_REVERSE_SUBTRACT};if(i)ve[_r]=r.MIN,ve[xr]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ve[_r]=I.MIN_EXT,ve[xr]=I.MAX_EXT)}const _e={[Ho]:r.ZERO,[zo]:r.ONE,[Go]:r.SRC_COLOR,[Ws]:r.SRC_ALPHA,[Yo]:r.SRC_ALPHA_SATURATE,[Xo]:r.DST_COLOR,[ko]:r.DST_ALPHA,[Vo]:r.ONE_MINUS_SRC_COLOR,[Xs]:r.ONE_MINUS_SRC_ALPHA,[qo]:r.ONE_MINUS_DST_COLOR,[Wo]:r.ONE_MINUS_DST_ALPHA,[$o]:r.CONSTANT_COLOR,[Ko]:r.ONE_MINUS_CONSTANT_COLOR,[jo]:r.CONSTANT_ALPHA,[Zo]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(I,oe,le,Te,ye,Ye,$e,ct,_t,Ke){if(I===cn){g===!0&&(Se(r.BLEND),g=!1);return}if(g===!1&&(Ce(r.BLEND),g=!0),I!==Fo){if(I!==E||Ke!==R){if((y!==Mn||M!==Mn)&&(r.blendEquation(r.FUNC_ADD),y=Mn,M=Mn),Ke)switch(I){case Kn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mr:r.blendFunc(r.ONE,r.ONE);break;case gr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vr:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Kn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vr:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,_=null,T=null,b=null,x.set(0,0,0),S=0,E=I,R=Ke}return}ye=ye||oe,Ye=Ye||le,$e=$e||Te,(oe!==y||ye!==M)&&(r.blendEquationSeparate(ve[oe],ve[ye]),y=oe,M=ye),(le!==A||Te!==_||Ye!==T||$e!==b)&&(r.blendFuncSeparate(_e[le],_e[Te],_e[Ye],_e[$e]),A=le,_=Te,T=Ye,b=$e),(ct.equals(x)===!1||_t!==S)&&(r.blendColor(ct.r,ct.g,ct.b,_t),x.copy(ct),S=_t),E=I,R=!1}function qe(I,oe){I.side===Ut?Se(r.CULL_FACE):Ce(r.CULL_FACE);let le=I.side===Et;oe&&(le=!le),Re(le),I.blending===Kn&&I.transparent===!1?pe(cn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Te=I.stencilWrite;u.setTest(Te),Te&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){P!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),P=I)}function L(I){I!==Uo?(Ce(r.CULL_FACE),I!==N&&(I===pr?r.cullFace(r.BACK):I===Io?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),N=I}function w(I){I!==D&&(G&&r.lineWidth(I),D=I)}function V(I,oe,le){I?(Ce(r.POLYGON_OFFSET_FILL),(U!==oe||F!==le)&&(r.polygonOffset(oe,le),U=oe,F=le)):Se(r.POLYGON_OFFSET_FILL)}function J(I){I?Ce(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function Q(I){I===void 0&&(I=r.TEXTURE0+O-1),Z!==I&&(r.activeTexture(I),Z=I)}function te(I,oe,le){le===void 0&&(Z===null?le=r.TEXTURE0+O-1:le=Z);let Te=j[le];Te===void 0&&(Te={type:void 0,texture:void 0},j[le]=Te),(Te.type!==I||Te.texture!==oe)&&(Z!==le&&(r.activeTexture(le),Z=le),r.bindTexture(I,oe||ge[I]),Te.type=I,Te.texture=oe)}function de(){const I=j[Z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){ne.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function ke(I){ae.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}function tt(I,oe){let le=p.get(oe);le===void 0&&(le=new WeakMap,p.set(oe,le));let Te=le.get(I);Te===void 0&&(Te=r.getUniformBlockIndex(oe,I.name),le.set(I,Te))}function Fe(I,oe){const Te=p.get(oe).get(I);h.get(oe)!==Te&&(r.uniformBlockBinding(oe,Te,I.__bindingPointIndex),h.set(oe,Te))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Z=null,j={},l={},m=new WeakMap,v=[],d=null,g=!1,E=null,y=null,A=null,_=null,M=null,T=null,b=null,x=new Ge(0,0,0),S=0,R=!1,P=null,N=null,D=null,U=null,F=null,ne.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Ce,disable:Se,bindFramebuffer:ze,drawBuffers:z,useProgram:lt,setBlending:pe,setMaterial:qe,setFlipSided:Re,setCullFace:L,setLineWidth:w,setPolygonOffset:V,setScissorTest:J,activeTexture:Q,bindTexture:te,unbindTexture:de,compressedTexImage2D:re,compressedTexImage3D:ue,texImage2D:xe,texImage3D:fe,updateUBOMapping:tt,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:we,texSubImage2D:Ee,texSubImage3D:Ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:We,scissor:De,viewport:ke,reset:ie}}function Ud(r,e,t,i,s,n,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const f=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return l?new OffscreenCanvas(L,w):_i("canvas")}function v(L,w,V,J){let Q=1;if((L.width>J||L.height>J)&&(Q=J/Math.max(L.width,L.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const te=w?Zs:Math.floor,de=te(Q*L.width),re=te(Q*L.height);p===void 0&&(p=m(de,re));const ue=V?m(de,re):p;return ue.width=de,ue.height=re,ue.getContext("2d").drawImage(L,0,0,de,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+de+"x"+re+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function d(L){return Kr(L.width)&&Kr(L.height)}function g(L){return a?!1:L.wrapS!==Ht||L.wrapT!==Ht||L.minFilter!==Ze&&L.minFilter!==Lt}function E(L,w){return L.generateMipmaps&&w&&L.minFilter!==Ze&&L.minFilter!==Lt}function y(L){r.generateMipmap(L)}function A(L,w,V,J,Q=!1){if(a===!1)return w;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=w;if(w===r.RED&&(V===r.FLOAT&&(te=r.R32F),V===r.HALF_FLOAT&&(te=r.R16F),V===r.UNSIGNED_BYTE&&(te=r.R8)),w===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(te=r.R8UI),V===r.UNSIGNED_SHORT&&(te=r.R16UI),V===r.UNSIGNED_INT&&(te=r.R32UI),V===r.BYTE&&(te=r.R8I),V===r.SHORT&&(te=r.R16I),V===r.INT&&(te=r.R32I)),w===r.RG&&(V===r.FLOAT&&(te=r.RG32F),V===r.HALF_FLOAT&&(te=r.RG16F),V===r.UNSIGNED_BYTE&&(te=r.RG8)),w===r.RGBA){const de=Q?Zi:Xe.getTransfer(J);V===r.FLOAT&&(te=r.RGBA32F),V===r.HALF_FLOAT&&(te=r.RGBA16F),V===r.UNSIGNED_BYTE&&(te=de===je?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(L,w,V){return E(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==Ze&&L.minFilter!==Lt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function M(L){return L===Ze||L===yr||L===cs?r.NEAREST:r.LINEAR}function T(L){const w=L.target;w.removeEventListener("dispose",T),x(w),w.isVideoTexture&&h.delete(w)}function b(L){const w=L.target;w.removeEventListener("dispose",b),R(w)}function x(L){const w=i.get(L);if(w.__webglInit===void 0)return;const V=L.source,J=f.get(V);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(L),Object.keys(J).length===0&&f.delete(V)}i.remove(L)}function S(L){const w=i.get(L);r.deleteTexture(w.__webglTexture);const V=L.source,J=f.get(V);delete J[w.__cacheKey],o.memory.textures--}function R(L){const w=L.texture,V=i.get(L),J=i.get(w);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(V.__webglFramebuffer[Q]))for(let te=0;te<V.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(V.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(V.__webglFramebuffer[Q]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[Q])}else{if(Array.isArray(V.__webglFramebuffer))for(let Q=0;Q<V.__webglFramebuffer.length;Q++)r.deleteFramebuffer(V.__webglFramebuffer[Q]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let Q=0;Q<V.__webglColorRenderbuffer.length;Q++)V.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Q=0,te=w.length;Q<te;Q++){const de=i.get(w[Q]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(w[Q])}i.remove(w),i.remove(L)}let P=0;function N(){P=0}function D(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function U(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function F(L,w){const V=i.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(V,L,w);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+w)}function O(L,w){const V=i.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+w)}function G(L,w){const V=i.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,w);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+w)}function Y(L,w){const V=i.get(L);if(L.version>0&&V.__version!==L.version){ae(V,L,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+w)}const $={[Qn]:r.REPEAT,[Ht]:r.CLAMP_TO_EDGE,[$s]:r.MIRRORED_REPEAT},Z={[Ze]:r.NEAREST,[yr]:r.NEAREST_MIPMAP_NEAREST,[cs]:r.NEAREST_MIPMAP_LINEAR,[Lt]:r.LINEAR,[dl]:r.LINEAR_MIPMAP_NEAREST,[gi]:r.LINEAR_MIPMAP_LINEAR},j={[bl]:r.NEVER,[Dl]:r.ALWAYS,[wl]:r.LESS,[io]:r.LEQUAL,[Cl]:r.EQUAL,[Ll]:r.GEQUAL,[Rl]:r.GREATER,[Pl]:r.NOTEQUAL};function k(L,w,V){if(V?(r.texParameteri(L,r.TEXTURE_WRAP_S,$[w.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,$[w.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,$[w.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Z[w.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Z[w.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Ht||w.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,M(w.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Ze&&w.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ze||w.minFilter!==cs&&w.minFilter!==gi||w.type===ln&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function K(L,w){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));const J=w.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const te=U(w);if(te!==L.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[te].usedTimes++;const de=Q[L.__cacheKey];de!==void 0&&(Q[L.__cacheKey].usedTimes--,de.usedTimes===0&&S(w)),L.__cacheKey=te,L.__webglTexture=Q[te].texture}return V}function ne(L,w,V){let J=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=r.TEXTURE_3D);const Q=K(L,w),te=w.source;t.bindTexture(J,L.__webglTexture,r.TEXTURE0+V);const de=i.get(te);if(te.version!==de.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const re=Xe.getPrimaries(Xe.workingColorSpace),ue=w.colorSpace===It?null:Xe.getPrimaries(w.colorSpace),Ee=w.colorSpace===It||re===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=g(w)&&d(w.image)===!1;let ee=v(w.image,Ie,!1,s.maxTextureSize);ee=Re(w,ee);const We=d(ee)||a,He=n.convert(w.format,w.colorSpace);let we=n.convert(w.type),xe=A(w.internalFormat,He,we,w.colorSpace,w.isVideoTexture);k(J,w,We);let fe;const De=w.mipmaps,ke=a&&w.isVideoTexture!==!0&&xe!==to,tt=de.__version===void 0||Q===!0,Fe=_(w,ee,We);if(w.isDepthTexture)xe=r.DEPTH_COMPONENT,a?w.type===ln?xe=r.DEPTH_COMPONENT32F:w.type===on?xe=r.DEPTH_COMPONENT24:w.type===Tn?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:w.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===An&&xe===r.DEPTH_COMPONENT&&w.type!==er&&w.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=on,we=n.convert(w.type)),w.format===ei&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,w.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Tn,we=n.convert(w.type))),tt&&(ke?t.texStorage2D(r.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,xe,ee.width,ee.height,0,He,we,null));else if(w.isDataTexture)if(De.length>0&&We){ke&&tt&&t.texStorage2D(r.TEXTURE_2D,Fe,xe,De[0].width,De[0].height);for(let ie=0,I=De.length;ie<I;ie++)fe=De[ie],ke?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,He,we,fe.data):t.texImage2D(r.TEXTURE_2D,ie,xe,fe.width,fe.height,0,He,we,fe.data);w.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(r.TEXTURE_2D,Fe,xe,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,He,we,ee.data)):t.texImage2D(r.TEXTURE_2D,0,xe,ee.width,ee.height,0,He,we,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,xe,De[0].width,De[0].height,ee.depth);for(let ie=0,I=De.length;ie<I;ie++)fe=De[ie],w.format!==zt?He!==null?ke?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ee.depth,He,fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,xe,fe.width,fe.height,ee.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ee.depth,He,we,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,xe,fe.width,fe.height,ee.depth,0,He,we,fe.data)}else{ke&&tt&&t.texStorage2D(r.TEXTURE_2D,Fe,xe,De[0].width,De[0].height);for(let ie=0,I=De.length;ie<I;ie++)fe=De[ie],w.format!==zt?He!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,He,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,He,we,fe.data):t.texImage2D(r.TEXTURE_2D,ie,xe,fe.width,fe.height,0,He,we,fe.data)}else if(w.isDataArrayTexture)ke?(tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,xe,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,He,we,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,He,we,ee.data);else if(w.isData3DTexture)ke?(tt&&t.texStorage3D(r.TEXTURE_3D,Fe,xe,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,He,we,ee.data)):t.texImage3D(r.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,He,we,ee.data);else if(w.isFramebufferTexture){if(tt)if(ke)t.texStorage2D(r.TEXTURE_2D,Fe,xe,ee.width,ee.height);else{let ie=ee.width,I=ee.height;for(let oe=0;oe<Fe;oe++)t.texImage2D(r.TEXTURE_2D,oe,xe,ie,I,0,He,we,null),ie>>=1,I>>=1}}else if(De.length>0&&We){ke&&tt&&t.texStorage2D(r.TEXTURE_2D,Fe,xe,De[0].width,De[0].height);for(let ie=0,I=De.length;ie<I;ie++)fe=De[ie],ke?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,He,we,fe):t.texImage2D(r.TEXTURE_2D,ie,xe,He,we,fe);w.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(r.TEXTURE_2D,Fe,xe,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,we,ee)):t.texImage2D(r.TEXTURE_2D,0,xe,He,we,ee);E(w,We)&&y(J),de.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ae(L,w,V){if(w.image.length!==6)return;const J=K(L,w),Q=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+V);const te=i.get(Q);if(Q.version!==te.__version||J===!0){t.activeTexture(r.TEXTURE0+V);const de=Xe.getPrimaries(Xe.workingColorSpace),re=w.colorSpace===It?null:Xe.getPrimaries(w.colorSpace),ue=w.colorSpace===It||de===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,Ie=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let ie=0;ie<6;ie++)!Ee&&!Ie?ee[ie]=v(w.image[ie],!1,!0,s.maxCubemapSize):ee[ie]=Ie?w.image[ie].image:w.image[ie],ee[ie]=Re(w,ee[ie]);const We=ee[0],He=d(We)||a,we=n.convert(w.format,w.colorSpace),xe=n.convert(w.type),fe=A(w.internalFormat,we,xe,w.colorSpace),De=a&&w.isVideoTexture!==!0,ke=te.__version===void 0||J===!0;let tt=_(w,We,He);k(r.TEXTURE_CUBE_MAP,w,He);let Fe;if(Ee){De&&ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,fe,We.width,We.height);for(let ie=0;ie<6;ie++){Fe=ee[ie].mipmaps;for(let I=0;I<Fe.length;I++){const oe=Fe[I];w.format!==zt?we!==null?De?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,oe.width,oe.height,we,xe,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,fe,oe.width,oe.height,0,we,xe,oe.data)}}}else{Fe=w.mipmaps,De&&ke&&(Fe.length>0&&tt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,fe,ee[0].width,ee[0].height));for(let ie=0;ie<6;ie++)if(Ie){De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ee[ie].width,ee[ie].height,we,xe,ee[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,ee[ie].width,ee[ie].height,0,we,xe,ee[ie].data);for(let I=0;I<Fe.length;I++){const le=Fe[I].image[ie].image;De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,le.width,le.height,we,xe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,fe,le.width,le.height,0,we,xe,le.data)}}else{De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,xe,ee[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,we,xe,ee[ie]);for(let I=0;I<Fe.length;I++){const oe=Fe[I];De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,we,xe,oe.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,fe,we,xe,oe.image[ie])}}}E(w,He)&&y(r.TEXTURE_CUBE_MAP),te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function he(L,w,V,J,Q,te){const de=n.convert(V.format,V.colorSpace),re=n.convert(V.type),ue=A(V.internalFormat,de,re,V.colorSpace);if(!i.get(w).__hasExternalTextures){const Ie=Math.max(1,w.width>>te),ee=Math.max(1,w.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ue,Ie,ee,w.depth,0,de,re,null):t.texImage2D(Q,te,ue,Ie,ee,0,de,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),pe(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,i.get(V).__webglTexture,0,_e(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,i.get(V).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(L,w,V){if(r.bindRenderbuffer(r.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let J=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||pe(w)){const Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ln?J=r.DEPTH_COMPONENT32F:Q.type===on&&(J=r.DEPTH_COMPONENT24));const te=_e(w);pe(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,J,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,J,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const J=_e(w);V&&pe(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,w.width,w.height):pe(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const J=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<J.length;Q++){const te=J[Q],de=n.convert(te.format,te.colorSpace),re=n.convert(te.type),ue=A(te.internalFormat,de,re,te.colorSpace),Ee=_e(w);V&&pe(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ue,w.width,w.height):pe(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ue,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ue,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,Q=_e(w);if(w.depthTexture.format===An)pe(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(w.depthTexture.format===ei)pe(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Se(L){const w=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,L)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=r.createRenderbuffer(),ge(w.__webglDepthbuffer[J],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),ge(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(L,w,V){const J=i.get(L);w!==void 0&&he(J.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Se(L)}function z(L){const w=L.texture,V=i.get(L),J=i.get(w);L.addEventListener("dispose",b),L.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=w.version,o.memory.textures++);const Q=L.isWebGLCubeRenderTarget===!0,te=L.isWebGLMultipleRenderTargets===!0,de=d(L)||a;if(Q){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let ue=0;ue<w.mipmaps.length;ue++)V.__webglFramebuffer[re][ue]=r.createFramebuffer()}else V.__webglFramebuffer[re]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<w.mipmaps.length;re++)V.__webglFramebuffer[re]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(te)if(s.drawBuffers){const re=L.texture;for(let ue=0,Ee=re.length;ue<Ee;ue++){const Ie=i.get(re[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&pe(L)===!1){const re=te?w:[w];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const Ee=re[ue];V.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ie=n.convert(Ee.format,Ee.colorSpace),ee=n.convert(Ee.type),We=A(Ee.internalFormat,Ie,ee,Ee.colorSpace,L.isXRRenderTarget===!0),He=_e(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,We,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),k(r.TEXTURE_CUBE_MAP,w,de);for(let re=0;re<6;re++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)he(V.__webglFramebuffer[re][ue],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else he(V.__webglFramebuffer[re],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);E(w,de)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const re=L.texture;for(let ue=0,Ee=re.length;ue<Ee;ue++){const Ie=re[ue],ee=i.get(Ie);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),k(r.TEXTURE_2D,Ie,de),he(V.__webglFramebuffer,L,Ie,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),E(Ie,de)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?re=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,J.__webglTexture),k(re,w,de),a&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)he(V.__webglFramebuffer[ue],L,w,r.COLOR_ATTACHMENT0,re,ue);else he(V.__webglFramebuffer,L,w,r.COLOR_ATTACHMENT0,re,0);E(w,de)&&y(re),t.unbindTexture()}L.depthBuffer&&Se(L)}function lt(L){const w=d(L)||a,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let J=0,Q=V.length;J<Q;J++){const te=V[J];if(E(te,w)){const de=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,re=i.get(te).__webglTexture;t.bindTexture(de,re),y(de),t.unbindTexture()}}}function ve(L){if(a&&L.samples>0&&pe(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,J=L.height;let Q=r.COLOR_BUFFER_BIT;const te=[],de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=i.get(L),ue=L.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){te.push(r.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&te.push(de);const Ie=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ie===!1&&(L.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,re.__webglColorRenderbuffer[Ee]),Ie===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[de]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[de])),ue){const ee=i.get(w[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,V,J,0,0,V,J,Q,r.NEAREST),u&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,re.__webglColorRenderbuffer[Ee]);const Ie=i.get(w[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function _e(L){return Math.min(s.maxSamples,L.samples)}function pe(L){const w=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(L){const w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function Re(L,w){const V=L.colorSpace,J=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Ks||V!==en&&V!==It&&(Xe.getTransfer(V)===je?a===!1?e.has("EXT_sRGB")===!0&&J===zt?(L.format=Ks,L.minFilter=Lt,L.generateMipmaps=!1):w=ro.sRGBToLinear(w):(J!==zt||Q!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=ze,this.setupRenderTarget=z,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=he,this.useMultisampledRTT=pe}function Id(r,e,t){const i=t.isWebGL2;function s(n,o=It){let a;const c=Xe.getTransfer(o);if(n===un)return r.UNSIGNED_BYTE;if(n===ja)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return r.BYTE;if(n===ml)return r.SHORT;if(n===er)return r.UNSIGNED_SHORT;if(n===Ka)return r.INT;if(n===on)return r.UNSIGNED_INT;if(n===ln)return r.FLOAT;if(n===vi)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===gl)return r.ALPHA;if(n===zt)return r.RGBA;if(n===vl)return r.LUMINANCE;if(n===_l)return r.LUMINANCE_ALPHA;if(n===An)return r.DEPTH_COMPONENT;if(n===ei)return r.DEPTH_STENCIL;if(n===Ks)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===xl)return r.RED;if(n===Ja)return r.RED_INTEGER;if(n===yl)return r.RG;if(n===Qa)return r.RG_INTEGER;if(n===eo)return r.RGBA_INTEGER;if(n===hs||n===us||n===fs||n===ds)if(c===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sr||n===Mr||n===Er||n===Tr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Sr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Er)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ar||n===br)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ar)return c===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===br)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wr||n===Cr||n===Rr||n===Pr||n===Lr||n===Dr||n===Ur||n===Ir||n===Nr||n===Fr||n===Or||n===Br||n===Hr||n===zr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===wr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ur)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ir)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Or)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Br)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zr)return c===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ps||n===Gr||n===Vr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ps)return c===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===kr||n===Wr||n===Xr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ps)return a.COMPRESSED_RED_RGTC1_EXT;if(n===kr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tn?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}return{convert:s}}class Nd extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,i),g=this._getHandJoint(u,v);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),l=.02,m=.005;u.inputState.pinching&&f>l+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=l-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=n!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Od extends ni{constructor(e,t){super();const i=this;let s=null,n=1,o=null,a="local-floor",c=1,u=null,h=null,p=null,f=null,l=null,m=null;const v=t.getContextAttributes();let d=null,g=null;const E=[],y=[],A=new Ve;let _=null;const M=new Dt;M.layers.enable(1),M.viewport=new Je;const T=new Dt;T.layers.enable(2),T.viewport=new Je;const b=[M,T],x=new Nd;x.layers.enable(1),x.layers.enable(2);let S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=E[k];return K===void 0&&(K=new Hs,E[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=E[k];return K===void 0&&(K=new Hs,E[k]=K),K.getGripSpace()},this.getHand=function(k){let K=E[k];return K===void 0&&(K=new Hs,E[k]=K),K.getHandSpace()};function P(k){const K=y.indexOf(k.inputSource);if(K===-1)return;const ne=E[K];ne!==void 0&&(ne.update(k.inputSource,k.frame,u||o),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function N(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",D);for(let k=0;k<E.length;k++){const K=y[k];K!==null&&(y[k]=null,E[k].disconnect(K))}S=null,R=null,e.setRenderTarget(d),l=null,f=null,p=null,s=null,g=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){n=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return f!==null?f:l},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",N),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:n};l=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),g=new wn(l.framebufferWidth,l.framebufferHeight,{format:zt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,ne=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?ei:An,ne=v.stencil?Tn:on);const he={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:n};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer(he),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new wn(f.textureWidth,f.textureHeight,{format:zt,type:un,depthTexture:new _o(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ge=e.properties.get(g);ge.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(k){for(let K=0;K<k.removed.length;K++){const ne=k.removed[K],ae=y.indexOf(ne);ae>=0&&(y[ae]=null,E[ae].disconnect(ne))}for(let K=0;K<k.added.length;K++){const ne=k.added[K];let ae=y.indexOf(ne);if(ae===-1){for(let ge=0;ge<E.length;ge++)if(ge>=y.length){y.push(ne),ae=ge;break}else if(y[ge]===null){y[ge]=ne,ae=ge;break}if(ae===-1)break}const he=E[ae];he&&he.connect(ne)}}const U=new H,F=new H;function O(k,K,ne){U.setFromMatrixPosition(K.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);const ae=U.distanceTo(F),he=K.projectionMatrix.elements,ge=ne.projectionMatrix.elements,Ce=he[14]/(he[10]-1),Se=he[14]/(he[10]+1),ze=(he[9]+1)/he[5],z=(he[9]-1)/he[5],lt=(he[8]-1)/he[0],ve=(ge[8]+1)/ge[0],_e=Ce*lt,pe=Ce*ve,qe=ae/(-lt+ve),Re=qe*-lt;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Re),k.translateZ(qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const L=Ce+qe,w=Se+qe,V=_e-Re,J=pe+(ae-Re),Q=ze*Se/w*L,te=z*Se/w*L;k.projectionMatrix.makePerspective(V,J,Q,te,L,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function G(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;x.near=T.near=M.near=k.near,x.far=T.far=M.far=k.far,(S!==x.near||R!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,R=x.far);const K=k.parent,ne=x.cameras;G(x,K);for(let ae=0;ae<ne.length;ae++)G(ne[ae],K);ne.length===2?O(x,M,T):x.projectionMatrix.copy(M.projectionMatrix),Y(k,x,K)};function Y(k,K,ne){ne===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(ne.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=js*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&l===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=k)};let $=null;function Z(k,K){if(h=K.getViewerPose(u||o),m=K,h!==null){const ne=h.views;l!==null&&(e.setRenderTargetFramebuffer(g,l.framebuffer),e.setRenderTarget(g));let ae=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let he=0;he<ne.length;he++){const ge=ne[he];let Ce=null;if(l!==null)Ce=l.getViewport(ge);else{const ze=p.getViewSubImage(f,ge);Ce=ze.viewport,he===0&&(e.setRenderTargetTextures(g,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(g))}let Se=b[he];Se===void 0&&(Se=new Dt,Se.layers.enable(he),Se.viewport=new Je,b[he]=Se),Se.matrix.fromArray(ge.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ge.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),he===0&&(x.matrix.copy(Se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Se)}}for(let ne=0;ne<E.length;ne++){const ae=y[ne],he=E[ne];ae!==null&&he!==void 0&&he.update(ae,K,u||o)}$&&$(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}const j=new vo;j.setAnimationLoop(Z),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function Bd(r,e){function t(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function i(d,g){g.color.getRGB(d.fogColor.value,po(r)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function s(d,g,E,y,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?n(d,g):g.isMeshToonMaterial?(n(d,g),p(d,g)):g.isMeshPhongMaterial?(n(d,g),h(d,g)):g.isMeshStandardMaterial?(n(d,g),f(d,g),g.isMeshPhysicalMaterial&&l(d,g,A)):g.isMeshMatcapMaterial?(n(d,g),m(d,g)):g.isMeshDepthMaterial?n(d,g):g.isMeshDistanceMaterial?(n(d,g),v(d,g)):g.isMeshNormalMaterial?n(d,g):g.isLineBasicMaterial?(o(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?c(d,g,E,y):g.isSpriteMaterial?u(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,t(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===Et&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,t(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===Et&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,t(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,t(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const E=e.get(g).envMap;if(E&&(d.envMap.value=E,d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap){d.lightMap.value=g.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=g.lightMapIntensity*y,t(g.lightMap,d.lightMapTransform)}g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,d.aoMapTransform))}function o(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function c(d,g,E,y){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*E,d.scale.value=y*.5,g.map&&(d.map.value=g.map,t(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function u(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function h(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function p(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function f(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,d.roughnessMapTransform)),e.get(g).envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function l(d,g,E){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Et&&d.clearcoatNormalScale.value.negate())),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function v(d,g){const E=e.get(g).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hd(r,e,t,i){let s={},n={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,y){const A=y.program;i.uniformBlockBinding(E,A)}function u(E,y){let A=s[E.id];A===void 0&&(m(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",d));const _=y.program;i.updateUBOMapping(E,_);const M=e.render.frame;n[E.id]!==M&&(f(E),n[E.id]=M)}function h(E){const y=p();E.__bindingPointIndex=y;const A=r.createBuffer(),_=E.__size,M=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,_,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,A),A}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],A=E.uniforms,_=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,T=A.length;M<T;M++){const b=Array.isArray(A[M])?A[M]:[A[M]];for(let x=0,S=b.length;x<S;x++){const R=b[x];if(l(R,M,x,_)===!0){const P=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let U=0;U<N.length;U++){const F=N[U],O=v(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,P+D,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function l(E,y,A,_){const M=E.value,T=y+"_"+A;if(_[T]===void 0)return typeof M=="number"||typeof M=="boolean"?_[T]=M:_[T]=M.clone(),!0;{const b=_[T];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return _[T]=M,!0}else if(b.equals(M)===!1)return b.copy(M),!0}return!1}function m(E){const y=E.uniforms;let A=0;const _=16;for(let T=0,b=y.length;T<b;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,R=x.length;S<R;S++){const P=x[S],N=Array.isArray(P.value)?P.value:[P.value];for(let D=0,U=N.length;D<U;D++){const F=N[D],O=v(F),G=A%_;G!==0&&_-G<O.boundary&&(A+=_-G),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=O.storage}}}const M=A%_;return M>0&&(A+=_-M),E.__size=A,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function d(E){const y=E.target;y.removeEventListener("dispose",d);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),r.deleteBuffer(s[y.id]),delete s[y.id],delete n[y.id]}function g(){for(const E in s)r.deleteBuffer(s[E]);o=[],s={},n={}}return{bind:c,update:u,dispose:g}}class To{constructor(e={}){const{canvas:t=Il(),context:i=null,depth:s=!0,stencil:n=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const l=new Uint32Array(4),m=new Int32Array(4);let v=null,d=null;const g=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const y=this;let A=!1,_=0,M=0,T=null,b=-1,x=null;const S=new Je,R=new Je;let P=null;const N=new Ge(0);let D=0,U=t.width,F=t.height,O=1,G=null,Y=null;const $=new Je(0,0,U,F),Z=new Je(0,0,U,F);let j=!1;const k=new nr;let K=!1,ne=!1,ae=null;const he=new Qe,ge=new Ve,Ce=new H,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?O:1}let z=i;function lt(C,B){for(let X=0;X<C.length;X++){const q=C[X],W=t.getContext(q,B);if(W!==null)return W}return null}try{const C={alpha:!0,depth:s,stencil:n,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qs}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",oe,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),z=lt(B,C),z===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,_e,pe,qe,Re,L,w,V,J,Q,te,de,re,ue,Ee,Ie,ee,We,He,we,xe,fe,De,ke;function tt(){ve=new $u(z),_e=new Vu(z,ve,e),ve.init(_e),fe=new Id(z,ve,_e),pe=new Dd(z,ve,_e),qe=new Zu(z),Re=new _d,L=new Ud(z,ve,pe,Re,_e,fe,qe),w=new Wu(y),V=new Yu(y),J=new rc(z,_e),De=new zu(z,ve,J,_e),Q=new Ku(z,J,qe,De),te=new tf(z,Q,J,qe),He=new ef(z,_e,L),Ie=new ku(Re),de=new vd(y,w,V,ve,_e,De,Ie),re=new Bd(y,Re),ue=new yd,Ee=new bd(ve,_e),We=new Hu(y,w,V,pe,te,f,c),ee=new Ld(y,te,_e),ke=new Hd(z,qe,_e,pe),we=new Gu(z,ve,qe,_e),xe=new ju(z,ve,qe,_e),qe.programs=de.programs,y.capabilities=_e,y.extensions=ve,y.properties=Re,y.renderLists=ue,y.shadowMap=ee,y.state=pe,y.info=qe}tt();const Fe=new Od(y,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(U,F,!1))},this.getSize=function(C){return C.set(U,F)},this.setSize=function(C,B,X=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,F=B,t.width=Math.floor(C*O),t.height=Math.floor(B*O),X===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(U*O,F*O).floor()},this.setDrawingBufferSize=function(C,B,X){U=C,F=B,O=X,t.width=Math.floor(C*X),t.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,B,X,q){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,B,X,q),pe.viewport(S.copy($).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,B,X,q){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,B,X,q),pe.scissor(R.copy(Z).multiplyScalar(O).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){pe.setScissorTest(j=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,B=!0,X=!0){let q=0;if(C){let W=!1;if(T!==null){const ce=T.texture.format;W=ce===eo||ce===Qa||ce===Ja}if(W){const ce=T.texture.type,me=ce===un||ce===on||ce===er||ce===Tn||ce===ja||ce===Za,Me=We.getClearColor(),be=We.getClearAlpha(),Ne=Me.r,Pe=Me.g,Le=Me.b;me?(l[0]=Ne,l[1]=Pe,l[2]=Le,l[3]=be,z.clearBufferuiv(z.COLOR,0,l)):(m[0]=Ne,m[1]=Pe,m[2]=Le,m[3]=be,z.clearBufferiv(z.COLOR,0,m))}else q|=z.COLOR_BUFFER_BIT}B&&(q|=z.DEPTH_BUFFER_BIT),X&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Ee.dispose(),Re.dispose(),w.dispose(),V.dispose(),te.dispose(),De.dispose(),ke.dispose(),de.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",_t),Fe.removeEventListener("sessionend",Ke),ae&&(ae.dispose(),ae=null),xt.stop()};function ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=qe.autoReset,B=ee.enabled,X=ee.autoUpdate,q=ee.needsUpdate,W=ee.type;tt(),qe.autoReset=C,ee.enabled=B,ee.autoUpdate=X,ee.needsUpdate=q,ee.type=W}function oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const B=C.target;B.removeEventListener("dispose",le),Te(B)}function Te(C){ye(C),Re.remove(C)}function ye(C){const B=Re.get(C).programs;B!==void 0&&(B.forEach(function(X){de.releaseProgram(X)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,q,W,ce){B===null&&(B=Se);const me=W.isMesh&&W.matrixWorld.determinant()<0,Me=Ro(C,B,X,q,W);pe.setMaterial(q,me);let be=X.index,Ne=1;if(q.wireframe===!0){if(be=Q.getWireframeAttribute(X),be===void 0)return;Ne=2}const Pe=X.drawRange,Le=X.attributes.position;let it=Pe.start*Ne,Tt=(Pe.start+Pe.count)*Ne;ce!==null&&(it=Math.max(it,ce.start*Ne),Tt=Math.min(Tt,(ce.start+ce.count)*Ne)),be!==null?(it=Math.max(it,0),Tt=Math.min(Tt,be.count)):Le!=null&&(it=Math.max(it,0),Tt=Math.min(Tt,Le.count));const ht=Tt-it;if(ht<0||ht===1/0)return;De.setup(W,q,Me,X,be);let Xt,et=we;if(be!==null&&(Xt=J.get(be),et=xe,et.setIndex(Xt)),W.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*ze()),et.setMode(z.LINES)):et.setMode(z.TRIANGLES);else if(W.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),pe.setLineWidth(Oe*ze()),W.isLineSegments?et.setMode(z.LINES):W.isLineLoop?et.setMode(z.LINE_LOOP):et.setMode(z.LINE_STRIP)}else W.isPoints?et.setMode(z.POINTS):W.isSprite&&et.setMode(z.TRIANGLES);if(W.isBatchedMesh)et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)et.renderInstances(it,ht,W.count);else if(X.isInstancedBufferGeometry){const Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,rs=Math.min(X.instanceCount,Oe);et.renderInstances(it,ht,rs)}else et.render(it,ht)};function Ye(C,B,X){C.transparent===!0&&C.side===Ut&&C.forceSinglePass===!1?(C.side=Et,C.needsUpdate=!0,Ei(C,B,X),C.side=fn,C.needsUpdate=!0,Ei(C,B,X),C.side=Ut):Ei(C,B,X)}this.compile=function(C,B,X=null){X===null&&(X=C),d=Ee.get(X),d.init(),E.push(d),X.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(y._useLegacyLights);const q=new Set;return C.traverse(function(W){const ce=W.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const Me=ce[me];Ye(Me,X,W),q.add(Me)}else Ye(ce,X,W),q.add(ce)}),E.pop(),d=null,q},this.compileAsync=function(C,B,X=null){const q=this.compile(C,B,X);return new Promise(W=>{function ce(){if(q.forEach(function(me){Re.get(me).currentProgram.isReady()&&q.delete(me)}),q.size===0){W(C);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let $e=null;function ct(C){$e&&$e(C)}function _t(){xt.stop()}function Ke(){xt.start()}const xt=new vo;xt.setAnimationLoop(ct),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(C){$e=C,Fe.setAnimationLoop(C),C===null?xt.stop():xt.start()},Fe.addEventListener("sessionstart",_t),Fe.addEventListener("sessionend",Ke),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(B),B=Fe.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,B,T),d=Ee.get(C,E.length),d.init(),E.push(d),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(he),ne=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,ne),v=ue.get(C,g.length),v.init(),g.push(v),Vt(C,B,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(G,Y),this.info.render.frame++,K===!0&&Ie.beginShadows();const X=d.state.shadowsArray;if(ee.render(X,C,B),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(v,C),d.setupLights(y._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let W=0,ce=q.length;W<ce;W++){const me=q[W];lr(v,C,me,me.viewport)}}else lr(v,C,B);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(y,C,B),De.resetDefaultState(),b=-1,x=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Vt(C,B,X,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){q&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const me=te.update(C),Me=C.material;Me.visible&&v.push(C,me,Me,X,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||k.intersectsObject(C))){const me=te.update(C),Me=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ce.copy(me.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(Me)){const be=me.groups;for(let Ne=0,Pe=be.length;Ne<Pe;Ne++){const Le=be[Ne],it=Me[Le.materialIndex];it&&it.visible&&v.push(C,me,it,X,Ce.z,Le)}}else Me.visible&&v.push(C,me,Me,X,Ce.z,null)}}const ce=C.children;for(let me=0,Me=ce.length;me<Me;me++)Vt(ce[me],B,X,q)}function lr(C,B,X,q){const W=C.opaque,ce=C.transmissive,me=C.transparent;d.setupLightsView(X),K===!0&&Ie.setGlobalState(y.clippingPlanes,X),ce.length>0&&Co(W,ce,B,X),q&&pe.viewport(S.copy(q)),W.length>0&&Mi(W,B,X),ce.length>0&&Mi(ce,B,X),me.length>0&&Mi(me,B,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Co(C,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ce=_e.isWebGL2;ae===null&&(ae=new wn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?vi:un,minFilter:gi,samples:ce?4:0})),y.getDrawingBufferSize(ge),ce?ae.setSize(ge.x,ge.y):ae.setSize(Zs(ge.x),Zs(ge.y));const me=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(N),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Me=y.toneMapping;y.toneMapping=hn,Mi(C,X,q),L.updateMultisampleRenderTarget(ae),L.updateRenderTargetMipmap(ae);let be=!1;for(let Ne=0,Pe=B.length;Ne<Pe;Ne++){const Le=B[Ne],it=Le.object,Tt=Le.geometry,ht=Le.material,Xt=Le.group;if(ht.side===Ut&&it.layers.test(q.layers)){const et=ht.side;ht.side=Et,ht.needsUpdate=!0,cr(it,X,q,Tt,ht,Xt),ht.side=et,ht.needsUpdate=!0,be=!0}}be===!0&&(L.updateMultisampleRenderTarget(ae),L.updateRenderTargetMipmap(ae)),y.setRenderTarget(me),y.setClearColor(N,D),y.toneMapping=Me}function Mi(C,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ce=C.length;W<ce;W++){const me=C[W],Me=me.object,be=me.geometry,Ne=q===null?me.material:q,Pe=me.group;Me.layers.test(X.layers)&&cr(Me,B,X,be,Ne,Pe)}}function cr(C,B,X,q,W,ce){C.onBeforeRender(y,B,X,q,W,ce),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(y,B,X,q,C,ce),W.transparent===!0&&W.side===Ut&&W.forceSinglePass===!1?(W.side=Et,W.needsUpdate=!0,y.renderBufferDirect(X,B,q,W,C,ce),W.side=fn,W.needsUpdate=!0,y.renderBufferDirect(X,B,q,W,C,ce),W.side=Ut):y.renderBufferDirect(X,B,q,W,C,ce),C.onAfterRender(y,B,X,q,W,ce)}function Ei(C,B,X){B.isScene!==!0&&(B=Se);const q=Re.get(C),W=d.state.lights,ce=d.state.shadowsArray,me=W.state.version,Me=de.getParameters(C,W.state,ce,B,X),be=de.getProgramCacheKey(Me);let Ne=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?V:w).get(C.envMap||q.environment),Ne===void 0&&(C.addEventListener("dispose",le),Ne=new Map,q.programs=Ne);let Pe=Ne.get(be);if(Pe!==void 0){if(q.currentProgram===Pe&&q.lightsStateVersion===me)return ur(C,Me),Pe}else Me.uniforms=de.getUniforms(C),C.onBuild(X,Me,y),C.onBeforeCompile(Me,y),Pe=de.acquireProgram(Me,be),Ne.set(be,Pe),q.uniforms=Me.uniforms;const Le=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=Ie.uniform),ur(C,Me),q.needsLights=Lo(C),q.lightsStateVersion=me,q.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Pe,q.uniformsList=null,Pe}function hr(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Ki.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function ur(C,B){const X=Re.get(C);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ro(C,B,X,q,W){B.isScene!==!0&&(B=Se),L.resetTextureUnits();const ce=B.fog,me=q.isMeshStandardMaterial?B.environment:null,Me=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:en,be=(q.isMeshStandardMaterial?V:w).get(q.envMap||me),Ne=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let ht=hn;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ht=y.toneMapping);const Xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=Xt!==void 0?Xt.length:0,Oe=Re.get(q),rs=d.state.lights;if(K===!0&&(ne===!0||C!==x)){const Rt=C===x&&q.id===b;Ie.setState(q,C,Rt)}let nt=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rs.state.version||Oe.outputColorSpace!==Me||W.isBatchedMesh&&Oe.batching===!1||!W.isBatchedMesh&&Oe.batching===!0||W.isInstancedMesh&&Oe.instancing===!1||!W.isInstancedMesh&&Oe.instancing===!0||W.isSkinnedMesh&&Oe.skinning===!1||!W.isSkinnedMesh&&Oe.skinning===!0||W.isInstancedMesh&&Oe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Oe.instancingColor===!1&&W.instanceColor!==null||Oe.envMap!==be||q.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ie.numPlanes||Oe.numIntersection!==Ie.numIntersection)||Oe.vertexAlphas!==Ne||Oe.vertexTangents!==Pe||Oe.morphTargets!==Le||Oe.morphNormals!==it||Oe.morphColors!==Tt||Oe.toneMapping!==ht||_e.isWebGL2===!0&&Oe.morphTargetsCount!==et)&&(nt=!0):(nt=!0,Oe.__version=q.version);let pn=Oe.currentProgram;nt===!0&&(pn=Ei(q,B,W));let fr=!1,ri=!1,as=!1;const mt=pn.getUniforms(),mn=Oe.uniforms;if(pe.useProgram(pn.program)&&(fr=!0,ri=!0,as=!0),q.id!==b&&(b=q.id,ri=!0),fr||x!==C){mt.setValue(z,"projectionMatrix",C.projectionMatrix),mt.setValue(z,"viewMatrix",C.matrixWorldInverse);const Rt=mt.map.cameraPosition;Rt!==void 0&&Rt.setValue(z,Ce.setFromMatrixPosition(C.matrixWorld)),_e.logarithmicDepthBuffer&&mt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,ri=!0,as=!0)}if(W.isSkinnedMesh){mt.setOptional(z,W,"bindMatrix"),mt.setOptional(z,W,"bindMatrixInverse");const Rt=W.skeleton;Rt&&(_e.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),mt.setValue(z,"boneTexture",Rt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(mt.setOptional(z,W,"batchingTexture"),mt.setValue(z,"batchingTexture",W._matricesTexture,L));const os=X.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&_e.isWebGL2===!0)&&He.update(W,X,pn),(ri||Oe.receiveShadow!==W.receiveShadow)&&(Oe.receiveShadow=W.receiveShadow,mt.setValue(z,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=be,mn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ri&&(mt.setValue(z,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&Po(mn,as),ce&&q.fog===!0&&re.refreshFogUniforms(mn,ce),re.refreshMaterialUniforms(mn,q,O,F,ae),Ki.upload(z,hr(Oe),mn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ki.upload(z,hr(Oe),mn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(z,"center",W.center),mt.setValue(z,"modelViewMatrix",W.modelViewMatrix),mt.setValue(z,"normalMatrix",W.normalMatrix),mt.setValue(z,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Rt=q.uniformsGroups;for(let ls=0,Do=Rt.length;ls<Do;ls++)if(_e.isWebGL2){const dr=Rt[ls];ke.update(dr,pn),ke.bind(dr,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function Po(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Lo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,B,X){Re.get(C.texture).__webglTexture=B,Re.get(C.depthTexture).__webglTexture=X;const q=Re.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const X=Re.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,X=0){T=C,_=B,M=X;let q=!0,W=null,ce=!1,me=!1;if(C){const be=Re.get(C);be.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):be.__webglFramebuffer===void 0?L.setupRenderTarget(C):be.__hasExternalTextures&&L.rebindTextures(C,Re.get(C.texture).__webglTexture,Re.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Pe=Re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?W=Pe[B][X]:W=Pe[B],ce=!0):_e.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?W=Re.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[X]:W=Pe,S.copy(C.viewport),R.copy(C.scissor),P=C.scissorTest}else S.copy($).multiplyScalar(O).floor(),R.copy(Z).multiplyScalar(O).floor(),P=j;if(pe.bindFramebuffer(z.FRAMEBUFFER,W)&&_e.drawBuffers&&q&&pe.drawBuffers(C,W),pe.viewport(S),pe.scissor(R),pe.setScissorTest(P),ce){const be=Re.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,X)}else if(me){const be=Re.get(C.texture),Ne=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.__webglTexture,X||0,Ne)}b=-1},this.readRenderTargetPixels=function(C,B,X,q,W,ce,me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){pe.bindFramebuffer(z.FRAMEBUFFER,Me);try{const be=C.texture,Ne=be.format,Pe=be.type;if(Ne!==zt&&fe.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===vi&&(ve.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Pe!==un&&fe.convert(Pe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ln&&(_e.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&X>=0&&X<=C.height-W&&z.readPixels(B,X,q,W,fe.convert(Ne),fe.convert(Pe),ce)}finally{const be=T!==null?Re.get(T).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,B,X=0){const q=Math.pow(2,-X),W=Math.floor(B.image.width*q),ce=Math.floor(B.image.height*q);L.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,C.x,C.y,W,ce),pe.unbindTexture()},this.copyTextureToTexture=function(C,B,X,q=0){const W=B.image.width,ce=B.image.height,me=fe.convert(X.format),Me=fe.convert(X.type);L.setTexture2D(X,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,C.x,C.y,W,ce,me,Me,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,me,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,C.x,C.y,me,Me,B.image),q===0&&X.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,B,X,q,W=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,me=C.max.y-C.min.y+1,Me=C.max.z-C.min.z+1,be=fe.convert(q.format),Ne=fe.convert(q.type);let Pe;if(q.isData3DTexture)L.setTexture3D(q,0),Pe=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)L.setTexture2DArray(q,0),Pe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Le=z.getParameter(z.UNPACK_ROW_LENGTH),it=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Tt=z.getParameter(z.UNPACK_SKIP_PIXELS),ht=z.getParameter(z.UNPACK_SKIP_ROWS),Xt=z.getParameter(z.UNPACK_SKIP_IMAGES),et=X.isCompressedTexture?X.mipmaps[W]:X.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,et.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,et.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,C.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,C.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(Pe,W,B.x,B.y,B.z,ce,me,Me,be,Ne,et.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Pe,W,B.x,B.y,B.z,ce,me,Me,be,et.data)):z.texSubImage3D(Pe,W,B.x,B.y,B.z,ce,me,Me,be,Ne,et),z.pixelStorei(z.UNPACK_ROW_LENGTH,Le),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt),W===0&&q.generateMipmaps&&z.generateMipmap(Pe),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){_=0,M=0,T=null,pe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tr?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?bn:no}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bn?rt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zd extends To{}zd.prototype.isWebGL1Renderer=!0;class Gd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ia extends wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qn=new Qe,Na=new Qe,qi=[],Fa=new dn,Vd=new Qe,ui=new ft,fi=new ii;class kd extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Fa.copy(e.boundingBox).applyMatrix4(qn),this.boundingBox.union(Fa)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),fi.copy(e.boundingSphere).applyMatrix4(qn),this.boundingSphere.union(fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ui.geometry=this.geometry,ui.material=this.material,ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fi.copy(this.boundingSphere),fi.applyMatrix4(i),e.ray.intersectsSphere(fi)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,qn),Na.multiplyMatrices(i,qn),ui.matrixWorld=Na,ui.raycast(e,qi);for(let o=0,a=qi.length;o<a;o++){const c=qi[o];c.instanceId=n,c.object=this,t.push(c)}qi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ao extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new H,Ba=new H,Ha=new Qe,zs=new lo,Yi=new ii;class Wd extends dt{constructor(e=new Wt,t=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Oa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yi.copy(i.boundingSphere),Yi.applyMatrix4(s),Yi.radius+=n,e.ray.intersectsSphere(Yi)===!1)return;Ha.copy(s).invert(),zs.copy(e.ray).applyMatrix4(Ha);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=new H,h=new H,p=new H,f=new H,l=this.isLineSegments?2:1,m=i.index,d=i.attributes.position;if(m!==null){const g=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let y=g,A=E-1;y<A;y+=l){const _=m.getX(y),M=m.getX(y+1);if(u.fromBufferAttribute(d,_),h.fromBufferAttribute(d,M),zs.distanceSqToSegment(u,h,f,p)>c)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),E=Math.min(d.count,o.start+o.count);for(let y=g,A=E-1;y<A;y+=l){if(u.fromBufferAttribute(d,y),h.fromBufferAttribute(d,y+1),zs.distanceSqToSegment(u,h,f,p)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=s.length;n<o;n++){const a=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}const za=new H,Ga=new H;class Xd extends Wd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)za.fromBufferAttribute(t,s),Ga.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+za.distanceTo(Ga);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends pt{constructor(e,t,i,s,n,o,a,c,u){super(e,t,i,s,n,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Va={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yd{constructor(e,t,i){const s=this;let n=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,n===!1&&s.onStart!==void 0&&s.onStart(h,o,a),n=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){const p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){const l=u[p],m=u[p+1];if(l.global&&(l.lastIndex=0),l.test(h))return m}return null}}}const $d=new Yd;class rr{constructor(e){this.manager=e!==void 0?e:$d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";class Kd extends rr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=Va.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const a=_i("img");function c(){h(),Va.add(e,this),t&&t(this),n.manager.itemEnd(e)}function u(p){h(),s&&s(p),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class jd extends rr{constructor(e){super(e)}load(e,t,i,s){const n=new pt,o=new Kd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}}class ar extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gs=new Qe,ka=new H,Wa=new H;class bo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xa=new Qe,di=new H,Vs=new H;class Zd extends bo{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),di.setFromMatrixPosition(e.matrixWorld),i.position.copy(di),Vs.copy(i.position),Vs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vs),i.updateMatrixWorld(),s.makeTranslation(-di.x,-di.y,-di.z),Xa.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}class Jd extends ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qd extends bo{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ep extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Qd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tp extends ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class np extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const $i=new dn;class ip extends Xd{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),n=new Wt;n.setIndex(new wt(i,1)),n.setAttribute("position",new wt(s,3)),super(n,new Ao({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&$i.setFromObject(this.object),$i.isEmpty())return;const t=$i.min,i=$i.max,s=this.geometry.attributes.position,n=s.array;n[0]=i.x,n[1]=i.y,n[2]=i.z,n[3]=t.x,n[4]=i.y,n[5]=i.z,n[6]=t.x,n[7]=t.y,n[8]=i.z,n[9]=i.x,n[10]=t.y,n[11]=i.z,n[12]=i.x,n[13]=i.y,n[14]=t.z,n[15]=t.x,n[16]=i.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=i.x,n[22]=t.y,n[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);class sp{constructor(){const e=window.innerWidth/window.innerHeight,t=600;this.cam=new ir(t*e/-2,t*e/2,t/2,t/-2,1,1e3),this.cam.position.z=100,this.shakeIntensity=0,this.shakeTimer=0}resize(e,t){const i=e/t,s=600;this.cam.left=-s*i/2,this.cam.right=s*i/2,this.cam.top=s/2,this.cam.bottom=-s/2,this.cam.updateProjectionMatrix()}follow(e,t){this.cam.position.x+=(e.x-this.cam.position.x)*.1,this.cam.position.y+=(e.y-this.cam.position.y)*.1,this.shakeTimer>0&&(this.shakeTimer-=t,this.cam.position.x+=(Math.random()-.5)*this.shakeIntensity,this.cam.position.y+=(Math.random()-.5)*this.shakeIntensity)}shake(e=5,t=.2){this.shakeIntensity=e,this.shakeTimer=t}}class rp{constructor(){this.scene=new Gd,this.camera=new sp,this.renderer=new To({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(1118481),pt.DEFAULT_MAG_FILTER=Ze,pt.DEFAULT_MIN_FILTER=Ze}async init(){document.getElementById("game-container").appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this));const e=new tp(16777215,.5);this.scene.add(e);const t=new ep(16777215,.8);t.position.set(0,10,5),this.scene.add(t)}createBox(e,t,i,s,n){const o=document.createElement("canvas");o.width=64,o.height=64;const a=o.getContext("2d");a.fillStyle="#"+n.toString(16).padStart(6,"0"),a.fillRect(0,0,64,64);for(let f=0;f<200;f++)a.fillStyle=Math.random()>.5?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.1)",a.fillRect(Math.random()*64,Math.random()*64,4,4);a.fillStyle="rgba(20, 40, 20, 0.6)",a.fillRect(0,0,64,8);for(let f=0;f<16;f++)Math.random()>.5&&a.fillRect(f*4,8,4,4);const c=new qd(o);c.magFilter=Ze,c.minFilter=Ze,c.wrapS=Qn,c.wrapT=Qn,c.repeat.set(i/64,s/64);const u=new Gt(i,s),h=new Ct({map:c,side:Ut}),p=new ft(u,h);return p.position.set(e,-t,0),this.scene.add(p),p}onWindowResize(){this.camera.resize(window.innerWidth,window.innerHeight),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera.cam)}}var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wo={exports:{}};/*!
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
 */(function(r,e){(function(i,s){r.exports=s()})(ks,function(){return function(t){var i={};function s(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=i,s.d=function(n,o,a){s.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:a})},s.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,o){if(o&1&&(n=s(n)),o&8||o&4&&typeof n=="object"&&n&&n.__esModule)return n;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),o&2&&typeof n!="string")for(var c in n)s.d(a,c,(function(u){return n[u]}).bind(null,c));return a},s.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(o,"a",o),o},s.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},s.p="",s(s.s=20)}([function(t,i){var s={};t.exports=s,function(){s._baseDelta=1e3/60,s._nextId=0,s._seed=0,s._nowStartTime=+new Date,s._warnedOnce={},s._decomp=null,s.extend=function(o,a){var c,u;typeof a=="boolean"?(c=2,u=a):(c=1,u=!0);for(var h=c;h<arguments.length;h++){var p=arguments[h];if(p)for(var f in p)u&&p[f]&&p[f].constructor===Object&&(!o[f]||o[f].constructor===Object)?(o[f]=o[f]||{},s.extend(o[f],u,p[f])):o[f]=p[f]}return o},s.clone=function(o,a){return s.extend({},a,o)},s.keys=function(o){if(Object.keys)return Object.keys(o);var a=[];for(var c in o)a.push(c);return a},s.values=function(o){var a=[];if(Object.keys){for(var c=Object.keys(o),u=0;u<c.length;u++)a.push(o[c[u]]);return a}for(var h in o)a.push(o[h]);return a},s.get=function(o,a,c,u){a=a.split(".").slice(c,u);for(var h=0;h<a.length;h+=1)o=o[a[h]];return o},s.set=function(o,a,c,u,h){var p=a.split(".").slice(u,h);return s.get(o,a,0,-1)[p[p.length-1]]=c,c},s.shuffle=function(o){for(var a=o.length-1;a>0;a--){var c=Math.floor(s.random()*(a+1)),u=o[a];o[a]=o[c],o[c]=u}return o},s.choose=function(o){return o[Math.floor(s.random()*o.length)]},s.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},s.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},s.isFunction=function(o){return typeof o=="function"},s.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},s.isString=function(o){return toString.call(o)==="[object String]"},s.clamp=function(o,a,c){return o<a?a:o>c?c:o},s.sign=function(o){return o<0?-1:1},s.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-s._nowStartTime},s.random=function(o,a){return o=typeof o<"u"?o:0,a=typeof a<"u"?a:1,o+n()*(a-o)};var n=function(){return s._seed=(s._seed*9301+49297)%233280,s._seed/233280};s.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},s.logLevel=1,s.log=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.info=function(){console&&s.logLevel>0&&s.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warn=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");s._warnedOnce[o]||(s.warn(o),s._warnedOnce[o]=!0)},s.deprecated=function(o,a,c){o[a]=s.chain(function(){s.warnOnce("🔅 deprecated 🔅",c)},o[a])},s.nextId=function(){return s._nextId++},s.indexOf=function(o,a){if(o.indexOf)return o.indexOf(a);for(var c=0;c<o.length;c++)if(o[c]===a)return c;return-1},s.map=function(o,a){if(o.map)return o.map(a);for(var c=[],u=0;u<o.length;u+=1)c.push(a(o[u]));return c},s.topologicalSort=function(o){var a=[],c=[],u=[];for(var h in o)!c[h]&&!u[h]&&s._topologicalSort(h,c,u,o,a);return a},s._topologicalSort=function(o,a,c,u,h){var p=u[o]||[];c[o]=!0;for(var f=0;f<p.length;f+=1){var l=p[f];c[l]||a[l]||s._topologicalSort(l,a,c,u,h)}c[o]=!1,a[o]=!0,h.push(o)},s.chain=function(){for(var o=[],a=0;a<arguments.length;a+=1){var c=arguments[a];c._chained?o.push.apply(o,c._chained):o.push(c)}var u=function(){for(var h,p=new Array(arguments.length),f=0,l=arguments.length;f<l;f++)p[f]=arguments[f];for(f=0;f<o.length;f+=1){var m=o[f].apply(h,p);typeof m<"u"&&(h=m)}return h};return u._chained=o,u},s.chainPathBefore=function(o,a,c){return s.set(o,a,s.chain(c,s.get(o,a)))},s.chainPathAfter=function(o,a,c){return s.set(o,a,s.chain(s.get(o,a),c))},s.setDecomp=function(o){s._decomp=o},s.getDecomp=function(){var o=s._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof ks<"u"&&(o=ks.decomp)}catch{o=null}return o}}()},function(t,i){var s={};t.exports=s,function(){s.create=function(n){var o={min:{x:0,y:0},max:{x:0,y:0}};return n&&s.update(o,n),o},s.update=function(n,o,a){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var c=0;c<o.length;c++){var u=o[c];u.x>n.max.x&&(n.max.x=u.x),u.x<n.min.x&&(n.min.x=u.x),u.y>n.max.y&&(n.max.y=u.y),u.y<n.min.y&&(n.min.y=u.y)}a&&(a.x>0?n.max.x+=a.x:n.min.x+=a.x,a.y>0?n.max.y+=a.y:n.min.y+=a.y)},s.contains=function(n,o){return o.x>=n.min.x&&o.x<=n.max.x&&o.y>=n.min.y&&o.y<=n.max.y},s.overlaps=function(n,o){return n.min.x<=o.max.x&&n.max.x>=o.min.x&&n.max.y>=o.min.y&&n.min.y<=o.max.y},s.translate=function(n,o){n.min.x+=o.x,n.max.x+=o.x,n.min.y+=o.y,n.max.y+=o.y},s.shift=function(n,o){var a=n.max.x-n.min.x,c=n.max.y-n.min.y;n.min.x=o.x,n.max.x=o.x+a,n.min.y=o.y,n.max.y=o.y+c}}()},function(t,i){var s={};t.exports=s,function(){s.create=function(n,o){return{x:n||0,y:o||0}},s.clone=function(n){return{x:n.x,y:n.y}},s.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},s.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},s.rotate=function(n,o,a){var c=Math.cos(o),u=Math.sin(o);a||(a={});var h=n.x*c-n.y*u;return a.y=n.x*u+n.y*c,a.x=h,a},s.rotateAbout=function(n,o,a,c){var u=Math.cos(o),h=Math.sin(o);c||(c={});var p=a.x+((n.x-a.x)*u-(n.y-a.y)*h);return c.y=a.y+((n.x-a.x)*h+(n.y-a.y)*u),c.x=p,c},s.normalise=function(n){var o=s.magnitude(n);return o===0?{x:0,y:0}:{x:n.x/o,y:n.y/o}},s.dot=function(n,o){return n.x*o.x+n.y*o.y},s.cross=function(n,o){return n.x*o.y-n.y*o.x},s.cross3=function(n,o,a){return(o.x-n.x)*(a.y-n.y)-(o.y-n.y)*(a.x-n.x)},s.add=function(n,o,a){return a||(a={}),a.x=n.x+o.x,a.y=n.y+o.y,a},s.sub=function(n,o,a){return a||(a={}),a.x=n.x-o.x,a.y=n.y-o.y,a},s.mult=function(n,o){return{x:n.x*o,y:n.y*o}},s.div=function(n,o){return{x:n.x/o,y:n.y/o}},s.perp=function(n,o){return o=o===!0?-1:1,{x:o*-n.y,y:o*n.x}},s.neg=function(n){return{x:-n.x,y:-n.y}},s.angle=function(n,o){return Math.atan2(o.y-n.y,o.x-n.x)},s._temp=[s.create(),s.create(),s.create(),s.create(),s.create(),s.create()]}()},function(t,i,s){var n={};t.exports=n;var o=s(2),a=s(0);(function(){n.create=function(c,u){for(var h=[],p=0;p<c.length;p++){var f=c[p],l={x:f.x,y:f.y,index:p,body:u,isInternal:!1};h.push(l)}return h},n.fromPath=function(c,u){var h=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return c.replace(h,function(f,l,m){p.push({x:parseFloat(l),y:parseFloat(m)})}),n.create(p,u)},n.centre=function(c){for(var u=n.area(c,!0),h={x:0,y:0},p,f,l,m=0;m<c.length;m++)l=(m+1)%c.length,p=o.cross(c[m],c[l]),f=o.mult(o.add(c[m],c[l]),p),h=o.add(h,f);return o.div(h,6*u)},n.mean=function(c){for(var u={x:0,y:0},h=0;h<c.length;h++)u.x+=c[h].x,u.y+=c[h].y;return o.div(u,c.length)},n.area=function(c,u){for(var h=0,p=c.length-1,f=0;f<c.length;f++)h+=(c[p].x-c[f].x)*(c[p].y+c[f].y),p=f;return u?h/2:Math.abs(h)/2},n.inertia=function(c,u){for(var h=0,p=0,f=c,l,m,v=0;v<f.length;v++)m=(v+1)%f.length,l=Math.abs(o.cross(f[m],f[v])),h+=l*(o.dot(f[m],f[m])+o.dot(f[m],f[v])+o.dot(f[v],f[v])),p+=l;return u/6*(h/p)},n.translate=function(c,u,h){h=typeof h<"u"?h:1;var p=c.length,f=u.x*h,l=u.y*h,m;for(m=0;m<p;m++)c[m].x+=f,c[m].y+=l;return c},n.rotate=function(c,u,h){if(u!==0){var p=Math.cos(u),f=Math.sin(u),l=h.x,m=h.y,v=c.length,d,g,E,y;for(y=0;y<v;y++)d=c[y],g=d.x-l,E=d.y-m,d.x=l+(g*p-E*f),d.y=m+(g*f+E*p);return c}},n.contains=function(c,u){for(var h=u.x,p=u.y,f=c.length,l=c[f-1],m,v=0;v<f;v++){if(m=c[v],(h-l.x)*(m.y-l.y)+(p-l.y)*(l.x-m.x)>0)return!1;l=m}return!0},n.scale=function(c,u,h,p){if(u===1&&h===1)return c;p=p||n.centre(c);for(var f,l,m=0;m<c.length;m++)f=c[m],l=o.sub(f,p),c[m].x=p.x+l.x*u,c[m].y=p.y+l.y*h;return c},n.chamfer=function(c,u,h,p,f){typeof u=="number"?u=[u]:u=u||[8],h=typeof h<"u"?h:-1,p=p||2,f=f||14;for(var l=[],m=0;m<c.length;m++){var v=c[m-1>=0?m-1:c.length-1],d=c[m],g=c[(m+1)%c.length],E=u[m<u.length?m:u.length-1];if(E===0){l.push(d);continue}var y=o.normalise({x:d.y-v.y,y:v.x-d.x}),A=o.normalise({x:g.y-d.y,y:d.x-g.x}),_=Math.sqrt(2*Math.pow(E,2)),M=o.mult(a.clone(y),E),T=o.normalise(o.mult(o.add(y,A),.5)),b=o.sub(d,o.mult(T,_)),x=h;h===-1&&(x=Math.pow(E,.32)*1.75),x=a.clamp(x,p,f),x%2===1&&(x+=1);for(var S=Math.acos(o.dot(y,A)),R=S/x,P=0;P<x;P++)l.push(o.add(o.rotate(M,R*P),b))}return l},n.clockwiseSort=function(c){var u=n.mean(c);return c.sort(function(h,p){return o.angle(u,h)-o.angle(u,p)}),c},n.isConvex=function(c){var u=0,h=c.length,p,f,l,m;if(h<3)return null;for(p=0;p<h;p++)if(f=(p+1)%h,l=(p+2)%h,m=(c[f].x-c[p].x)*(c[l].y-c[f].y),m-=(c[f].y-c[p].y)*(c[l].x-c[f].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},n.hull=function(c){var u=[],h=[],p,f;for(c=c.slice(0),c.sort(function(l,m){var v=l.x-m.x;return v!==0?v:l.y-m.y}),f=0;f<c.length;f+=1){for(p=c[f];h.length>=2&&o.cross3(h[h.length-2],h[h.length-1],p)<=0;)h.pop();h.push(p)}for(f=c.length-1;f>=0;f-=1){for(p=c[f];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}return u.pop(),h.pop(),u.concat(h)}})()},function(t,i,s){var n={};t.exports=n;var o=s(3),a=s(2),c=s(7),u=s(0),h=s(1),p=s(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(l){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},v=u.extend(m,l);return f(v,l),v},n.nextGroup=function(l){return l?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var f=function(l,m){m=m||{},n.set(l,{bounds:l.bounds||h.create(l.vertices),positionPrev:l.positionPrev||a.clone(l.position),anglePrev:l.anglePrev||l.angle,vertices:l.vertices,parts:l.parts||[l],isStatic:l.isStatic,isSleeping:l.isSleeping,parent:l.parent||l}),o.rotate(l.vertices,l.angle,l.position),p.rotate(l.axes,l.angle),h.update(l.bounds,l.vertices,l.velocity),n.set(l,{axes:m.axes||l.axes,area:m.area||l.area,mass:m.mass||l.mass,inertia:m.inertia||l.inertia});var v=l.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),d=l.isStatic?"#555":"#ccc",g=l.isStatic&&l.render.fillStyle===null?1:0;l.render.fillStyle=l.render.fillStyle||v,l.render.strokeStyle=l.render.strokeStyle||d,l.render.lineWidth=l.render.lineWidth||g,l.render.sprite.xOffset+=-(l.bounds.min.x-l.position.x)/(l.bounds.max.x-l.bounds.min.x),l.render.sprite.yOffset+=-(l.bounds.min.y-l.position.y)/(l.bounds.max.y-l.bounds.min.y)};n.set=function(l,m,v){var d;typeof m=="string"&&(d=m,m={},m[d]=v);for(d in m)if(Object.prototype.hasOwnProperty.call(m,d))switch(v=m[d],d){case"isStatic":n.setStatic(l,v);break;case"isSleeping":c.set(l,v);break;case"mass":n.setMass(l,v);break;case"density":n.setDensity(l,v);break;case"inertia":n.setInertia(l,v);break;case"vertices":n.setVertices(l,v);break;case"position":n.setPosition(l,v);break;case"angle":n.setAngle(l,v);break;case"velocity":n.setVelocity(l,v);break;case"angularVelocity":n.setAngularVelocity(l,v);break;case"speed":n.setSpeed(l,v);break;case"angularSpeed":n.setAngularSpeed(l,v);break;case"parts":n.setParts(l,v);break;case"centre":n.setCentre(l,v);break;default:l[d]=v}},n.setStatic=function(l,m){for(var v=0;v<l.parts.length;v++){var d=l.parts[v];d.isStatic=m,m?(d._original={restitution:d.restitution,friction:d.friction,mass:d.mass,inertia:d.inertia,density:d.density,inverseMass:d.inverseMass,inverseInertia:d.inverseInertia},d.restitution=0,d.friction=1,d.mass=d.inertia=d.density=1/0,d.inverseMass=d.inverseInertia=0,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.anglePrev=d.angle,d.angularVelocity=0,d.speed=0,d.angularSpeed=0,d.motion=0):d._original&&(d.restitution=d._original.restitution,d.friction=d._original.friction,d.mass=d._original.mass,d.inertia=d._original.inertia,d.density=d._original.density,d.inverseMass=d._original.inverseMass,d.inverseInertia=d._original.inverseInertia,d._original=null)}},n.setMass=function(l,m){var v=l.inertia/(l.mass/6);l.inertia=v*(m/6),l.inverseInertia=1/l.inertia,l.mass=m,l.inverseMass=1/l.mass,l.density=l.mass/l.area},n.setDensity=function(l,m){n.setMass(l,m*l.area),l.density=m},n.setInertia=function(l,m){l.inertia=m,l.inverseInertia=1/l.inertia},n.setVertices=function(l,m){m[0].body===l?l.vertices=m:l.vertices=o.create(m,l),l.axes=p.fromVertices(l.vertices),l.area=o.area(l.vertices),n.setMass(l,l.density*l.area);var v=o.centre(l.vertices);o.translate(l.vertices,v,-1),n.setInertia(l,n._inertiaScale*o.inertia(l.vertices,l.mass)),o.translate(l.vertices,l.position),h.update(l.bounds,l.vertices,l.velocity)},n.setParts=function(l,m,v){var d;for(m=m.slice(0),l.parts.length=0,l.parts.push(l),l.parent=l,d=0;d<m.length;d++){var g=m[d];g!==l&&(g.parent=l,l.parts.push(g))}if(l.parts.length!==1){if(v=typeof v<"u"?v:!0,v){var E=[];for(d=0;d<m.length;d++)E=E.concat(m[d].vertices);o.clockwiseSort(E);var y=o.hull(E),A=o.centre(y);n.setVertices(l,y),o.translate(l.vertices,A)}var _=n._totalProperties(l);l.area=_.area,l.parent=l,l.position.x=_.centre.x,l.position.y=_.centre.y,l.positionPrev.x=_.centre.x,l.positionPrev.y=_.centre.y,n.setMass(l,_.mass),n.setInertia(l,_.inertia),n.setPosition(l,_.centre)}},n.setCentre=function(l,m,v){v?(l.positionPrev.x+=m.x,l.positionPrev.y+=m.y,l.position.x+=m.x,l.position.y+=m.y):(l.positionPrev.x=m.x-(l.position.x-l.positionPrev.x),l.positionPrev.y=m.y-(l.position.y-l.positionPrev.y),l.position.x=m.x,l.position.y=m.y)},n.setPosition=function(l,m,v){var d=a.sub(m,l.position);v?(l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.velocity.x=d.x,l.velocity.y=d.y,l.speed=a.magnitude(d)):(l.positionPrev.x+=d.x,l.positionPrev.y+=d.y);for(var g=0;g<l.parts.length;g++){var E=l.parts[g];E.position.x+=d.x,E.position.y+=d.y,o.translate(E.vertices,d),h.update(E.bounds,E.vertices,l.velocity)}},n.setAngle=function(l,m,v){var d=m-l.angle;v?(l.anglePrev=l.angle,l.angularVelocity=d,l.angularSpeed=Math.abs(d)):l.anglePrev+=d;for(var g=0;g<l.parts.length;g++){var E=l.parts[g];E.angle+=d,o.rotate(E.vertices,d,l.position),p.rotate(E.axes,d),h.update(E.bounds,E.vertices,l.velocity),g>0&&a.rotateAbout(E.position,d,l.position,E.position)}},n.setVelocity=function(l,m){var v=l.deltaTime/n._baseDelta;l.positionPrev.x=l.position.x-m.x*v,l.positionPrev.y=l.position.y-m.y*v,l.velocity.x=(l.position.x-l.positionPrev.x)/v,l.velocity.y=(l.position.y-l.positionPrev.y)/v,l.speed=a.magnitude(l.velocity)},n.getVelocity=function(l){var m=n._baseDelta/l.deltaTime;return{x:(l.position.x-l.positionPrev.x)*m,y:(l.position.y-l.positionPrev.y)*m}},n.getSpeed=function(l){return a.magnitude(n.getVelocity(l))},n.setSpeed=function(l,m){n.setVelocity(l,a.mult(a.normalise(n.getVelocity(l)),m))},n.setAngularVelocity=function(l,m){var v=l.deltaTime/n._baseDelta;l.anglePrev=l.angle-m*v,l.angularVelocity=(l.angle-l.anglePrev)/v,l.angularSpeed=Math.abs(l.angularVelocity)},n.getAngularVelocity=function(l){return(l.angle-l.anglePrev)*n._baseDelta/l.deltaTime},n.getAngularSpeed=function(l){return Math.abs(n.getAngularVelocity(l))},n.setAngularSpeed=function(l,m){n.setAngularVelocity(l,u.sign(n.getAngularVelocity(l))*m)},n.translate=function(l,m,v){n.setPosition(l,a.add(l.position,m),v)},n.rotate=function(l,m,v,d){if(!v)n.setAngle(l,l.angle+m,d);else{var g=Math.cos(m),E=Math.sin(m),y=l.position.x-v.x,A=l.position.y-v.y;n.setPosition(l,{x:v.x+(y*g-A*E),y:v.y+(y*E+A*g)},d),n.setAngle(l,l.angle+m,d)}},n.scale=function(l,m,v,d){var g=0,E=0;d=d||l.position;for(var y=0;y<l.parts.length;y++){var A=l.parts[y];o.scale(A.vertices,m,v,d),A.axes=p.fromVertices(A.vertices),A.area=o.area(A.vertices),n.setMass(A,l.density*A.area),o.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),n.setInertia(A,n._inertiaScale*o.inertia(A.vertices,A.mass)),o.translate(A.vertices,{x:A.position.x,y:A.position.y}),y>0&&(g+=A.area,E+=A.inertia),A.position.x=d.x+(A.position.x-d.x)*m,A.position.y=d.y+(A.position.y-d.y)*v,h.update(A.bounds,A.vertices,l.velocity)}l.parts.length>1&&(l.area=g,l.isStatic||(n.setMass(l,l.density*g),n.setInertia(l,E))),l.circleRadius&&(m===v?l.circleRadius*=m:l.circleRadius=null)},n.update=function(l,m){m=(typeof m<"u"?m:1e3/60)*l.timeScale;var v=m*m,d=n._timeCorrection?m/(l.deltaTime||m):1,g=1-l.frictionAir*(m/u._baseDelta),E=(l.position.x-l.positionPrev.x)*d,y=(l.position.y-l.positionPrev.y)*d;l.velocity.x=E*g+l.force.x/l.mass*v,l.velocity.y=y*g+l.force.y/l.mass*v,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.position.x+=l.velocity.x,l.position.y+=l.velocity.y,l.deltaTime=m,l.angularVelocity=(l.angle-l.anglePrev)*g*d+l.torque/l.inertia*v,l.anglePrev=l.angle,l.angle+=l.angularVelocity;for(var A=0;A<l.parts.length;A++){var _=l.parts[A];o.translate(_.vertices,l.velocity),A>0&&(_.position.x+=l.velocity.x,_.position.y+=l.velocity.y),l.angularVelocity!==0&&(o.rotate(_.vertices,l.angularVelocity,l.position),p.rotate(_.axes,l.angularVelocity),A>0&&a.rotateAbout(_.position,l.angularVelocity,l.position,_.position)),h.update(_.bounds,_.vertices,l.velocity)}},n.updateVelocities=function(l){var m=n._baseDelta/l.deltaTime,v=l.velocity;v.x=(l.position.x-l.positionPrev.x)*m,v.y=(l.position.y-l.positionPrev.y)*m,l.speed=Math.sqrt(v.x*v.x+v.y*v.y),l.angularVelocity=(l.angle-l.anglePrev)*m,l.angularSpeed=Math.abs(l.angularVelocity)},n.applyForce=function(l,m,v){var d={x:m.x-l.position.x,y:m.y-l.position.y};l.force.x+=v.x,l.force.y+=v.y,l.torque+=d.x*v.y-d.y*v.x},n._totalProperties=function(l){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},v=l.parts.length===1?0:1;v<l.parts.length;v++){var d=l.parts[v],g=d.mass!==1/0?d.mass:1;m.mass+=g,m.area+=d.area,m.inertia+=d.inertia,m.centre=a.add(m.centre,a.mult(d.position,g))}return m.centre=a.div(m.centre,m.mass),m}})()},function(t,i,s){var n={};t.exports=n;var o=s(0);(function(){n.on=function(a,c,u){for(var h=c.split(" "),p,f=0;f<h.length;f++)p=h[f],a.events=a.events||{},a.events[p]=a.events[p]||[],a.events[p].push(u);return u},n.off=function(a,c,u){if(!c){a.events={};return}typeof c=="function"&&(u=c,c=o.keys(a.events).join(" "));for(var h=c.split(" "),p=0;p<h.length;p++){var f=a.events[h[p]],l=[];if(u&&f)for(var m=0;m<f.length;m++)f[m]!==u&&l.push(f[m]);a.events[h[p]]=l}},n.trigger=function(a,c,u){var h,p,f,l,m=a.events;if(m&&o.keys(m).length>0){u||(u={}),h=c.split(" ");for(var v=0;v<h.length;v++)if(p=h[v],f=m[p],f){l=o.clone(u,!1),l.name=p,l.source=a;for(var d=0;d<f.length;d++)f[d].apply(a,[l])}}}})()},function(t,i,s){var n={};t.exports=n;var o=s(5),a=s(0),c=s(1),u=s(4);(function(){n.create=function(h){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},h)},n.setModified=function(h,p,f,l){if(h.isModified=p,p&&h.cache&&(h.cache.allBodies=null,h.cache.allConstraints=null,h.cache.allComposites=null),f&&h.parent&&n.setModified(h.parent,p,f,l),l)for(var m=0;m<h.composites.length;m++){var v=h.composites[m];n.setModified(v,p,f,l)}},n.add=function(h,p){var f=[].concat(p);o.trigger(h,"beforeAdd",{object:p});for(var l=0;l<f.length;l++){var m=f[l];switch(m.type){case"body":if(m.parent!==m){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(h,m);break;case"constraint":n.addConstraint(h,m);break;case"composite":n.addComposite(h,m);break;case"mouseConstraint":n.addConstraint(h,m.constraint);break}}return o.trigger(h,"afterAdd",{object:p}),h},n.remove=function(h,p,f){var l=[].concat(p);o.trigger(h,"beforeRemove",{object:p});for(var m=0;m<l.length;m++){var v=l[m];switch(v.type){case"body":n.removeBody(h,v,f);break;case"constraint":n.removeConstraint(h,v,f);break;case"composite":n.removeComposite(h,v,f);break;case"mouseConstraint":n.removeConstraint(h,v.constraint);break}}return o.trigger(h,"afterRemove",{object:p}),h},n.addComposite=function(h,p){return h.composites.push(p),p.parent=h,n.setModified(h,!0,!0,!1),h},n.removeComposite=function(h,p,f){var l=a.indexOf(h.composites,p);if(l!==-1&&n.removeCompositeAt(h,l),f)for(var m=0;m<h.composites.length;m++)n.removeComposite(h.composites[m],p,!0);return h},n.removeCompositeAt=function(h,p){return h.composites.splice(p,1),n.setModified(h,!0,!0,!1),h},n.addBody=function(h,p){return h.bodies.push(p),n.setModified(h,!0,!0,!1),h},n.removeBody=function(h,p,f){var l=a.indexOf(h.bodies,p);if(l!==-1&&n.removeBodyAt(h,l),f)for(var m=0;m<h.composites.length;m++)n.removeBody(h.composites[m],p,!0);return h},n.removeBodyAt=function(h,p){return h.bodies.splice(p,1),n.setModified(h,!0,!0,!1),h},n.addConstraint=function(h,p){return h.constraints.push(p),n.setModified(h,!0,!0,!1),h},n.removeConstraint=function(h,p,f){var l=a.indexOf(h.constraints,p);if(l!==-1&&n.removeConstraintAt(h,l),f)for(var m=0;m<h.composites.length;m++)n.removeConstraint(h.composites[m],p,!0);return h},n.removeConstraintAt=function(h,p){return h.constraints.splice(p,1),n.setModified(h,!0,!0,!1),h},n.clear=function(h,p,f){if(f)for(var l=0;l<h.composites.length;l++)n.clear(h.composites[l],p,!0);return p?h.bodies=h.bodies.filter(function(m){return m.isStatic}):h.bodies.length=0,h.constraints.length=0,h.composites.length=0,n.setModified(h,!0,!0,!1),h},n.allBodies=function(h){if(h.cache&&h.cache.allBodies)return h.cache.allBodies;for(var p=[].concat(h.bodies),f=0;f<h.composites.length;f++)p=p.concat(n.allBodies(h.composites[f]));return h.cache&&(h.cache.allBodies=p),p},n.allConstraints=function(h){if(h.cache&&h.cache.allConstraints)return h.cache.allConstraints;for(var p=[].concat(h.constraints),f=0;f<h.composites.length;f++)p=p.concat(n.allConstraints(h.composites[f]));return h.cache&&(h.cache.allConstraints=p),p},n.allComposites=function(h){if(h.cache&&h.cache.allComposites)return h.cache.allComposites;for(var p=[].concat(h.composites),f=0;f<h.composites.length;f++)p=p.concat(n.allComposites(h.composites[f]));return h.cache&&(h.cache.allComposites=p),p},n.get=function(h,p,f){var l,m;switch(f){case"body":l=n.allBodies(h);break;case"constraint":l=n.allConstraints(h);break;case"composite":l=n.allComposites(h).concat(h);break}return l?(m=l.filter(function(v){return v.id.toString()===p.toString()}),m.length===0?null:m[0]):null},n.move=function(h,p,f){return n.remove(h,p),n.add(f,p),h},n.rebase=function(h){for(var p=n.allBodies(h).concat(n.allConstraints(h)).concat(n.allComposites(h)),f=0;f<p.length;f++)p[f].id=a.nextId();return h},n.translate=function(h,p,f){for(var l=f?n.allBodies(h):h.bodies,m=0;m<l.length;m++)u.translate(l[m],p);return h},n.rotate=function(h,p,f,l){for(var m=Math.cos(p),v=Math.sin(p),d=l?n.allBodies(h):h.bodies,g=0;g<d.length;g++){var E=d[g],y=E.position.x-f.x,A=E.position.y-f.y;u.setPosition(E,{x:f.x+(y*m-A*v),y:f.y+(y*v+A*m)}),u.rotate(E,p)}return h},n.scale=function(h,p,f,l,m){for(var v=m?n.allBodies(h):h.bodies,d=0;d<v.length;d++){var g=v[d],E=g.position.x-l.x,y=g.position.y-l.y;u.setPosition(g,{x:l.x+E*p,y:l.y+y*f}),u.scale(g,p,f)}return h},n.bounds=function(h){for(var p=n.allBodies(h),f=[],l=0;l<p.length;l+=1){var m=p[l];f.push(m.bounds.min,m.bounds.max)}return c.create(f)}})()},function(t,i,s){var n={};t.exports=n;var o=s(4),a=s(5),c=s(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(u,h){for(var p=h/c._baseDelta,f=n._motionSleepThreshold,l=0;l<u.length;l++){var m=u[l],v=o.getSpeed(m),d=o.getAngularSpeed(m),g=v*v+d*d;if(m.force.x!==0||m.force.y!==0){n.set(m,!1);continue}var E=Math.min(m.motion,g),y=Math.max(m.motion,g);m.motion=n._minBias*E+(1-n._minBias)*y,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/p&&n.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},n.afterCollisions=function(u){for(var h=n._motionSleepThreshold,p=0;p<u.length;p++){var f=u[p];if(f.isActive){var l=f.collision,m=l.bodyA.parent,v=l.bodyB.parent;if(!(m.isSleeping&&v.isSleeping||m.isStatic||v.isStatic)&&(m.isSleeping||v.isSleeping)){var d=m.isSleeping&&!m.isStatic?m:v,g=d===m?v:m;!d.isStatic&&g.motion>h&&n.set(d,!1)}}}},n.set=function(u,h){var p=u.isSleeping;h?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,p||a.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,p&&a.trigger(u,"sleepEnd"))}})()},function(t,i,s){var n={};t.exports=n;var o=s(3),a=s(9);(function(){var c=[],u={overlap:0,axis:null},h={overlap:0,axis:null};n.create=function(p,f){return{pair:null,collided:!1,bodyA:p,bodyB:f,parentA:p.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},n.collides=function(p,f,l){if(n._overlapAxes(u,p.vertices,f.vertices,p.axes),u.overlap<=0||(n._overlapAxes(h,f.vertices,p.vertices,f.axes),h.overlap<=0))return null;var m=l&&l.table[a.id(p,f)],v;m?v=m.collision:(v=n.create(p,f),v.collided=!0,v.bodyA=p.id<f.id?p:f,v.bodyB=p.id<f.id?f:p,v.parentA=v.bodyA.parent,v.parentB=v.bodyB.parent),p=v.bodyA,f=v.bodyB;var d;u.overlap<h.overlap?d=u:d=h;var g=v.normal,E=v.supports,y=d.axis,A=y.x,_=y.y;A*(f.position.x-p.position.x)+_*(f.position.y-p.position.y)<0?(g.x=A,g.y=_):(g.x=-A,g.y=-_),v.tangent.x=-g.y,v.tangent.y=g.x,v.depth=d.overlap,v.penetration.x=g.x*v.depth,v.penetration.y=g.y*v.depth;var M=n._findSupports(p,f,g,1),T=0;if(o.contains(p.vertices,M[0])&&(E[T++]=M[0]),o.contains(p.vertices,M[1])&&(E[T++]=M[1]),T<2){var b=n._findSupports(f,p,g,-1);o.contains(f.vertices,b[0])&&(E[T++]=b[0]),T<2&&o.contains(f.vertices,b[1])&&(E[T++]=b[1])}return T===0&&(E[T++]=M[0]),E.length=T,v},n._overlapAxes=function(p,f,l,m){var v=f.length,d=l.length,g=f[0].x,E=f[0].y,y=l[0].x,A=l[0].y,_=m.length,M=Number.MAX_VALUE,T=0,b,x,S,R,P,N;for(P=0;P<_;P++){var D=m[P],U=D.x,F=D.y,O=g*U+E*F,G=y*U+A*F,Y=O,$=G;for(N=1;N<v;N+=1)R=f[N].x*U+f[N].y*F,R>Y?Y=R:R<O&&(O=R);for(N=1;N<d;N+=1)R=l[N].x*U+l[N].y*F,R>$?$=R:R<G&&(G=R);if(x=Y-G,S=$-O,b=x<S?x:S,b<M&&(M=b,T=P,b<=0))break}p.axis=m[T],p.overlap=M},n._projectToAxis=function(p,f,l){for(var m=f[0].x*l.x+f[0].y*l.y,v=m,d=1;d<f.length;d+=1){var g=f[d].x*l.x+f[d].y*l.y;g>v?v=g:g<m&&(m=g)}p.min=m,p.max=v},n._findSupports=function(p,f,l,m){var v=f.vertices,d=v.length,g=p.position.x,E=p.position.y,y=l.x*m,A=l.y*m,_=Number.MAX_VALUE,M,T,b,x,S;for(S=0;S<d;S+=1)T=v[S],x=y*(g-T.x)+A*(E-T.y),x<_&&(_=x,M=T);return b=v[(d+M.index-1)%d],_=y*(g-b.x)+A*(E-b.y),T=v[(M.index+1)%d],y*(g-T.x)+A*(E-T.y)<_?(c[0]=M,c[1]=T,c):(c[0]=M,c[1]=b,c)}})()},function(t,i,s){var n={};t.exports=n;var o=s(16);(function(){n.create=function(a,c){var u=a.bodyA,h=a.bodyB,p={id:n.id(u,h),bodyA:u,bodyB:h,collision:a,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:u.isSensor||h.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(p,a,c),p},n.update=function(a,c,u){var h=a.contacts,p=c.supports,f=a.activeContacts,l=c.parentA,m=c.parentB,v=l.vertices.length;a.isActive=!0,a.timeUpdated=u,a.collision=c,a.separation=c.depth,a.inverseMass=l.inverseMass+m.inverseMass,a.friction=l.friction<m.friction?l.friction:m.friction,a.frictionStatic=l.frictionStatic>m.frictionStatic?l.frictionStatic:m.frictionStatic,a.restitution=l.restitution>m.restitution?l.restitution:m.restitution,a.slop=l.slop>m.slop?l.slop:m.slop,c.pair=a,f.length=0;for(var d=0;d<p.length;d++){var g=p[d],E=g.body===l?g.index:v+g.index,y=h[E];y?f.push(y):f.push(h[E]=o.create(g))}},n.setActive=function(a,c,u){c?(a.isActive=!0,a.timeUpdated=u):(a.isActive=!1,a.activeContacts.length=0)},n.id=function(a,c){return a.id<c.id?"A"+a.id+"B"+c.id:"A"+c.id+"B"+a.id}})()},function(t,i,s){var n={};t.exports=n;var o=s(3),a=s(2),c=s(7),u=s(1),h=s(11),p=s(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(f){var l=f;l.bodyA&&!l.pointA&&(l.pointA={x:0,y:0}),l.bodyB&&!l.pointB&&(l.pointB={x:0,y:0});var m=l.bodyA?a.add(l.bodyA.position,l.pointA):l.pointA,v=l.bodyB?a.add(l.bodyB.position,l.pointB):l.pointB,d=a.magnitude(a.sub(m,v));l.length=typeof l.length<"u"?l.length:d,l.id=l.id||p.nextId(),l.label=l.label||"Constraint",l.type="constraint",l.stiffness=l.stiffness||(l.length>0?1:.7),l.damping=l.damping||0,l.angularStiffness=l.angularStiffness||0,l.angleA=l.bodyA?l.bodyA.angle:l.angleA,l.angleB=l.bodyB?l.bodyB.angle:l.angleB,l.plugin={};var g={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return l.length===0&&l.stiffness>.1?(g.type="pin",g.anchors=!1):l.stiffness<.9&&(g.type="spring"),l.render=p.extend(g,l.render),l},n.preSolveAll=function(f){for(var l=0;l<f.length;l+=1){var m=f[l],v=m.constraintImpulse;m.isStatic||v.x===0&&v.y===0&&v.angle===0||(m.position.x+=v.x,m.position.y+=v.y,m.angle+=v.angle)}},n.solveAll=function(f,l){for(var m=p.clamp(l/p._baseDelta,0,1),v=0;v<f.length;v+=1){var d=f[v],g=!d.bodyA||d.bodyA&&d.bodyA.isStatic,E=!d.bodyB||d.bodyB&&d.bodyB.isStatic;(g||E)&&n.solve(f[v],m)}for(v=0;v<f.length;v+=1)d=f[v],g=!d.bodyA||d.bodyA&&d.bodyA.isStatic,E=!d.bodyB||d.bodyB&&d.bodyB.isStatic,!g&&!E&&n.solve(f[v],m)},n.solve=function(f,l){var m=f.bodyA,v=f.bodyB,d=f.pointA,g=f.pointB;if(!(!m&&!v)){m&&!m.isStatic&&(a.rotate(d,m.angle-f.angleA,d),f.angleA=m.angle),v&&!v.isStatic&&(a.rotate(g,v.angle-f.angleB,g),f.angleB=v.angle);var E=d,y=g;if(m&&(E=a.add(m.position,d)),v&&(y=a.add(v.position,g)),!(!E||!y)){var A=a.sub(E,y),_=a.magnitude(A);_<n._minLength&&(_=n._minLength);var M=(_-f.length)/_,T=f.stiffness>=1||f.length===0,b=T?f.stiffness*l:f.stiffness*l*l,x=f.damping*l,S=a.mult(A,M*b),R=(m?m.inverseMass:0)+(v?v.inverseMass:0),P=(m?m.inverseInertia:0)+(v?v.inverseInertia:0),N=R+P,D,U,F,O,G;if(x>0){var Y=a.create();F=a.div(A,_),G=a.sub(v&&a.sub(v.position,v.positionPrev)||Y,m&&a.sub(m.position,m.positionPrev)||Y),O=a.dot(F,G)}m&&!m.isStatic&&(U=m.inverseMass/R,m.constraintImpulse.x-=S.x*U,m.constraintImpulse.y-=S.y*U,m.position.x-=S.x*U,m.position.y-=S.y*U,x>0&&(m.positionPrev.x-=x*F.x*O*U,m.positionPrev.y-=x*F.y*O*U),D=a.cross(d,S)/N*n._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=D,m.angle-=D),v&&!v.isStatic&&(U=v.inverseMass/R,v.constraintImpulse.x+=S.x*U,v.constraintImpulse.y+=S.y*U,v.position.x+=S.x*U,v.position.y+=S.y*U,x>0&&(v.positionPrev.x+=x*F.x*O*U,v.positionPrev.y+=x*F.y*O*U),D=a.cross(g,S)/N*n._torqueDampen*v.inverseInertia*(1-f.angularStiffness),v.constraintImpulse.angle+=D,v.angle+=D)}}},n.postSolveAll=function(f){for(var l=0;l<f.length;l++){var m=f[l],v=m.constraintImpulse;if(!(m.isStatic||v.x===0&&v.y===0&&v.angle===0)){c.set(m,!1);for(var d=0;d<m.parts.length;d++){var g=m.parts[d];o.translate(g.vertices,v),d>0&&(g.position.x+=v.x,g.position.y+=v.y),v.angle!==0&&(o.rotate(g.vertices,v.angle,m.position),h.rotate(g.axes,v.angle),d>0&&a.rotateAbout(g.position,v.angle,m.position,g.position)),u.update(g.bounds,g.vertices,m.velocity)}v.angle*=n._warming,v.x*=n._warming,v.y*=n._warming}}},n.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},n.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}}})()},function(t,i,s){var n={};t.exports=n;var o=s(2),a=s(0);(function(){n.fromVertices=function(c){for(var u={},h=0;h<c.length;h++){var p=(h+1)%c.length,f=o.normalise({x:c[p].y-c[h].y,y:c[h].x-c[p].x}),l=f.y===0?1/0:f.x/f.y;l=l.toFixed(3).toString(),u[l]=f}return a.values(u)},n.rotate=function(c,u){if(u!==0)for(var h=Math.cos(u),p=Math.sin(u),f=0;f<c.length;f++){var l=c[f],m;m=l.x*h-l.y*p,l.y=l.x*p+l.y*h,l.x=m}}})()},function(t,i,s){var n={};t.exports=n;var o=s(3),a=s(0),c=s(4),u=s(1),h=s(2);(function(){n.rectangle=function(p,f,l,m,v){v=v||{};var d={label:"Rectangle Body",position:{x:p,y:f},vertices:o.fromPath("L 0 0 L "+l+" 0 L "+l+" "+m+" L 0 "+m)};if(v.chamfer){var g=v.chamfer;d.vertices=o.chamfer(d.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete v.chamfer}return c.create(a.extend({},d,v))},n.trapezoid=function(p,f,l,m,v,d){d=d||{},v*=.5;var g=(1-v*2)*l,E=l*v,y=E+g,A=y+E,_;v<.5?_="L 0 0 L "+E+" "+-m+" L "+y+" "+-m+" L "+A+" 0":_="L 0 0 L "+y+" "+-m+" L "+A+" 0";var M={label:"Trapezoid Body",position:{x:p,y:f},vertices:o.fromPath(_)};if(d.chamfer){var T=d.chamfer;M.vertices=o.chamfer(M.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete d.chamfer}return c.create(a.extend({},M,d))},n.circle=function(p,f,l,m,v){m=m||{};var d={label:"Circle Body",circleRadius:l};v=v||25;var g=Math.ceil(Math.max(10,Math.min(v,l)));return g%2===1&&(g+=1),n.polygon(p,f,g,l,a.extend({},d,m))},n.polygon=function(p,f,l,m,v){if(v=v||{},l<3)return n.circle(p,f,m,v);for(var d=2*Math.PI/l,g="",E=d*.5,y=0;y<l;y+=1){var A=E+y*d,_=Math.cos(A)*m,M=Math.sin(A)*m;g+="L "+_.toFixed(3)+" "+M.toFixed(3)+" "}var T={label:"Polygon Body",position:{x:p,y:f},vertices:o.fromPath(g)};if(v.chamfer){var b=v.chamfer;T.vertices=o.chamfer(T.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete v.chamfer}return c.create(a.extend({},T,v))},n.fromVertices=function(p,f,l,m,v,d,g,E){var y=a.getDecomp(),A,_,M,T,b,x,S,R,P,N,D;for(A=!!(y&&y.quickDecomp),m=m||{},M=[],v=typeof v<"u"?v:!1,d=typeof d<"u"?d:.01,g=typeof g<"u"?g:10,E=typeof E<"u"?E:.01,a.isArray(l[0])||(l=[l]),N=0;N<l.length;N+=1)if(x=l[N],T=o.isConvex(x),b=!T,b&&!A&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),T||!A)T?x=o.clockwiseSort(x):x=o.hull(x),M.push({position:{x:p,y:f},vertices:x});else{var U=x.map(function(ae){return[ae.x,ae.y]});y.makeCCW(U),d!==!1&&y.removeCollinearPoints(U,d),E!==!1&&y.removeDuplicatePoints&&y.removeDuplicatePoints(U,E);var F=y.quickDecomp(U);for(S=0;S<F.length;S++){var O=F[S],G=O.map(function(ae){return{x:ae[0],y:ae[1]}});g>0&&o.area(G)<g||M.push({position:o.centre(G),vertices:G})}}for(S=0;S<M.length;S++)M[S]=c.create(a.extend(M[S],m));if(v){var Y=5;for(S=0;S<M.length;S++){var $=M[S];for(R=S+1;R<M.length;R++){var Z=M[R];if(u.overlaps($.bounds,Z.bounds)){var j=$.vertices,k=Z.vertices;for(P=0;P<$.vertices.length;P++)for(D=0;D<Z.vertices.length;D++){var K=h.magnitudeSquared(h.sub(j[(P+1)%j.length],k[D])),ne=h.magnitudeSquared(h.sub(j[P],k[(D+1)%k.length]));K<Y&&ne<Y&&(j[P].isInternal=!0,k[D].isInternal=!0)}}}}}return M.length>1?(_=c.create(a.extend({parts:M.slice(0)},m)),c.setPosition(_,{x:p,y:f}),_):M[0]}})()},function(t,i,s){var n={};t.exports=n;var o=s(0),a=s(8);(function(){n.create=function(c){var u={bodies:[],pairs:null};return o.extend(u,c)},n.setBodies=function(c,u){c.bodies=u.slice(0)},n.clear=function(c){c.bodies=[]},n.collisions=function(c){var u=[],h=c.pairs,p=c.bodies,f=p.length,l=n.canCollide,m=a.collides,v,d;for(p.sort(n._compareBoundsX),v=0;v<f;v++){var g=p[v],E=g.bounds,y=g.bounds.max.x,A=g.bounds.max.y,_=g.bounds.min.y,M=g.isStatic||g.isSleeping,T=g.parts.length,b=T===1;for(d=v+1;d<f;d++){var x=p[d],S=x.bounds;if(S.min.x>y)break;if(!(A<S.min.y||_>S.max.y)&&!(M&&(x.isStatic||x.isSleeping))&&l(g.collisionFilter,x.collisionFilter)){var R=x.parts.length;if(b&&R===1){var P=m(g,x,h);P&&u.push(P)}else for(var N=T>1?1:0,D=R>1?1:0,U=N;U<T;U++)for(var F=g.parts[U],E=F.bounds,O=D;O<R;O++){var G=x.parts[O],S=G.bounds;if(!(E.min.x>S.max.x||E.max.x<S.min.x||E.max.y<S.min.y||E.min.y>S.max.y)){var P=m(F,G,h);P&&u.push(P)}}}}}return u},n.canCollide=function(c,u){return c.group===u.group&&c.group!==0?c.group>0:(c.mask&u.category)!==0&&(u.mask&c.category)!==0},n._compareBoundsX=function(c,u){return c.bounds.min.x-u.bounds.min.x}})()},function(t,i,s){var n={};t.exports=n;var o=s(0);(function(){n.create=function(a){var c={};return a||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=a||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(u){var h=n._getRelativeMousePosition(u,c.element,c.pixelRatio),p=u.changedTouches;p&&(c.button=0,u.preventDefault()),c.absolute.x=h.x,c.absolute.y=h.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=u},c.mousedown=function(u){var h=n._getRelativeMousePosition(u,c.element,c.pixelRatio),p=u.changedTouches;p?(c.button=0,u.preventDefault()):c.button=u.button,c.absolute.x=h.x,c.absolute.y=h.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=u},c.mouseup=function(u){var h=n._getRelativeMousePosition(u,c.element,c.pixelRatio),p=u.changedTouches;p&&u.preventDefault(),c.button=-1,c.absolute.x=h.x,c.absolute.y=h.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=u},c.mousewheel=function(u){c.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault()},n.setElement(c,c.element),c},n.setElement=function(a,c){a.element=c,c.addEventListener("mousemove",a.mousemove),c.addEventListener("mousedown",a.mousedown),c.addEventListener("mouseup",a.mouseup),c.addEventListener("mousewheel",a.mousewheel),c.addEventListener("DOMMouseScroll",a.mousewheel),c.addEventListener("touchmove",a.mousemove),c.addEventListener("touchstart",a.mousedown),c.addEventListener("touchend",a.mouseup)},n.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},n.setOffset=function(a,c){a.offset.x=c.x,a.offset.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n.setScale=function(a,c){a.scale.x=c.x,a.scale.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n._getRelativeMousePosition=function(a,c,u){var h=c.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,l=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,m=a.changedTouches,v,d;return m?(v=m[0].pageX-h.left-f,d=m[0].pageY-h.top-l):(v=a.pageX-h.left-f,d=a.pageY-h.top-l),{x:v/(c.clientWidth/(c.width||c.clientWidth)*u),y:d/(c.clientHeight/(c.height||c.clientHeight)*u)}}})()},function(t,i,s){var n={};t.exports=n;var o=s(0);(function(){n._registry={},n.register=function(a){if(n.isPlugin(a)||o.warn("Plugin.register:",n.toString(a),"does not implement all required fields."),a.name in n._registry){var c=n._registry[a.name],u=n.versionParse(a.version).number,h=n.versionParse(c.version).number;u>h?(o.warn("Plugin.register:",n.toString(c),"was upgraded to",n.toString(a)),n._registry[a.name]=a):u<h?o.warn("Plugin.register:",n.toString(c),"can not be downgraded to",n.toString(a)):a!==c&&o.warn("Plugin.register:",n.toString(a),"is already registered to different plugin object")}else n._registry[a.name]=a;return a},n.resolve=function(a){return n._registry[n.dependencyParse(a).name]},n.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},n.isPlugin=function(a){return a&&a.name&&a.version&&a.install},n.isUsed=function(a,c){return a.used.indexOf(c)>-1},n.isFor=function(a,c){var u=a.for&&n.dependencyParse(a.for);return!a.for||c.name===u.name&&n.versionSatisfies(c.version,u.range)},n.use=function(a,c){if(a.uses=(a.uses||[]).concat(c||[]),a.uses.length===0){o.warn("Plugin.use:",n.toString(a),"does not specify any dependencies to install.");return}for(var u=n.dependencies(a),h=o.topologicalSort(u),p=[],f=0;f<h.length;f+=1)if(h[f]!==a.name){var l=n.resolve(h[f]);if(!l){p.push("❌ "+h[f]);continue}n.isUsed(a,l.name)||(n.isFor(l,a)||(o.warn("Plugin.use:",n.toString(l),"is for",l.for,"but installed on",n.toString(a)+"."),l._warned=!0),l.install?l.install(a):(o.warn("Plugin.use:",n.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(p.push("🔶 "+n.toString(l)),delete l._warned):p.push("✅ "+n.toString(l)),a.used.push(l.name))}p.length>0&&o.info(p.join("  "))},n.dependencies=function(a,c){var u=n.dependencyParse(a),h=u.name;if(c=c||{},!(h in c)){a=n.resolve(a)||a,c[h]=o.map(a.uses||[],function(f){n.isPlugin(f)&&n.register(f);var l=n.dependencyParse(f),m=n.resolve(f);return m&&!n.versionSatisfies(m.version,l.range)?(o.warn("Plugin.dependencies:",n.toString(m),"does not satisfy",n.toString(l),"used by",n.toString(u)+"."),m._warned=!0,a._warned=!0):m||(o.warn("Plugin.dependencies:",n.toString(f),"used by",n.toString(u),"could not be resolved."),a._warned=!0),l.name});for(var p=0;p<c[h].length;p+=1)n.dependencies(c[h][p],c);return c}},n.dependencyParse=function(a){if(o.isString(a)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(a)||o.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},n.versionParse=function(a){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(a)||o.warn("Plugin.versionParse:",a,"is not a valid version or range.");var u=c.exec(a),h=Number(u[4]),p=Number(u[5]),f=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:a,operator:u[1]||u[2]||"",major:h,minor:p,patch:f,parts:[h,p,f],prerelease:u[7],number:h*1e8+p*1e4+f}},n.versionSatisfies=function(a,c){c=c||"*";var u=n.versionParse(c),h=n.versionParse(a);if(u.isRange){if(u.operator==="*"||a==="*")return!0;if(u.operator===">")return h.number>u.number;if(u.operator===">=")return h.number>=u.number;if(u.operator==="~")return h.major===u.major&&h.minor===u.minor&&h.patch>=u.patch;if(u.operator==="^")return u.major>0?h.major===u.major&&h.number>=u.number:u.minor>0?h.minor===u.minor&&h.patch>=u.patch:h.patch===u.patch}return a===c||a==="*"}})()},function(t,i){var s={};t.exports=s,function(){s.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,s){var n={};t.exports=n;var o=s(7),a=s(18),c=s(13),u=s(19),h=s(5),p=s(6),f=s(10),l=s(0),m=s(4);(function(){n.create=function(v){v=v||{};var d={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},g=l.extend(d,v);return g.world=v.world||p.create({label:"World"}),g.pairs=v.pairs||u.create(),g.detector=v.detector||c.create(),g.grid={buckets:[]},g.world.gravity=g.gravity,g.broadphase=g.grid,g.metrics={},g},n.update=function(v,d){var g=l.now(),E=v.world,y=v.detector,A=v.pairs,_=v.timing,M=_.timestamp,T;d=typeof d<"u"?d:l._baseDelta,d*=_.timeScale,_.timestamp+=d,_.lastDelta=d;var b={timestamp:_.timestamp,delta:d};h.trigger(v,"beforeUpdate",b);var x=p.allBodies(E),S=p.allConstraints(E);for(E.isModified&&(c.setBodies(y,x),p.setModified(E,!1,!1,!0)),v.enableSleeping&&o.update(x,d),n._bodiesApplyGravity(x,v.gravity),d>0&&n._bodiesUpdate(x,d),f.preSolveAll(x),T=0;T<v.constraintIterations;T++)f.solveAll(S,d);f.postSolveAll(x),y.pairs=v.pairs;var R=c.collisions(y);u.update(A,R,M),v.enableSleeping&&o.afterCollisions(A.list),A.collisionStart.length>0&&h.trigger(v,"collisionStart",{pairs:A.collisionStart});var P=l.clamp(20/v.positionIterations,0,1);for(a.preSolvePosition(A.list),T=0;T<v.positionIterations;T++)a.solvePosition(A.list,d,P);for(a.postSolvePosition(x),f.preSolveAll(x),T=0;T<v.constraintIterations;T++)f.solveAll(S,d);for(f.postSolveAll(x),a.preSolveVelocity(A.list),T=0;T<v.velocityIterations;T++)a.solveVelocity(A.list,d);return n._bodiesUpdateVelocities(x),A.collisionActive.length>0&&h.trigger(v,"collisionActive",{pairs:A.collisionActive}),A.collisionEnd.length>0&&h.trigger(v,"collisionEnd",{pairs:A.collisionEnd}),n._bodiesClearForces(x),h.trigger(v,"afterUpdate",b),v.timing.lastElapsed=l.now()-g,v},n.merge=function(v,d){if(l.extend(v,d),d.world){v.world=d.world,n.clear(v);for(var g=p.allBodies(v.world),E=0;E<g.length;E++){var y=g[E];o.set(y,!1),y.id=l.nextId()}}},n.clear=function(v){u.clear(v.pairs),c.clear(v.detector)},n._bodiesClearForces=function(v){for(var d=v.length,g=0;g<d;g++){var E=v[g];E.force.x=0,E.force.y=0,E.torque=0}},n._bodiesApplyGravity=function(v,d){var g=typeof d.scale<"u"?d.scale:.001,E=v.length;if(!(d.x===0&&d.y===0||g===0))for(var y=0;y<E;y++){var A=v[y];A.isStatic||A.isSleeping||(A.force.y+=A.mass*d.y*g,A.force.x+=A.mass*d.x*g)}},n._bodiesUpdate=function(v,d){for(var g=v.length,E=0;E<g;E++){var y=v[E];y.isStatic||y.isSleeping||m.update(y,d)}},n._bodiesUpdateVelocities=function(v){for(var d=v.length,g=0;g<d;g++)m.updateVelocities(v[g])}})()},function(t,i,s){var n={};t.exports=n;var o=s(3),a=s(0),c=s(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(u){var h,p,f,l=u.length;for(h=0;h<l;h++)p=u[h],p.isActive&&(f=p.activeContacts.length,p.collision.parentA.totalContacts+=f,p.collision.parentB.totalContacts+=f)},n.solvePosition=function(u,h,p){var f,l,m,v,d,g,E,y,A=n._positionDampen*(p||1),_=a.clamp(h/a._baseDelta,0,1),M=u.length;for(f=0;f<M;f++)l=u[f],!(!l.isActive||l.isSensor)&&(m=l.collision,v=m.parentA,d=m.parentB,g=m.normal,l.separation=g.x*(d.positionImpulse.x+m.penetration.x-v.positionImpulse.x)+g.y*(d.positionImpulse.y+m.penetration.y-v.positionImpulse.y));for(f=0;f<M;f++)l=u[f],!(!l.isActive||l.isSensor)&&(m=l.collision,v=m.parentA,d=m.parentB,g=m.normal,y=l.separation-l.slop*_,(v.isStatic||d.isStatic)&&(y*=2),v.isStatic||v.isSleeping||(E=A/v.totalContacts,v.positionImpulse.x+=g.x*y*E,v.positionImpulse.y+=g.y*y*E),d.isStatic||d.isSleeping||(E=A/d.totalContacts,d.positionImpulse.x-=g.x*y*E,d.positionImpulse.y-=g.y*y*E))},n.postSolvePosition=function(u){for(var h=n._positionWarming,p=u.length,f=o.translate,l=c.update,m=0;m<p;m++){var v=u[m],d=v.positionImpulse,g=d.x,E=d.y,y=v.velocity;if(v.totalContacts=0,g!==0||E!==0){for(var A=0;A<v.parts.length;A++){var _=v.parts[A];f(_.vertices,d),l(_.bounds,_.vertices,y),_.position.x+=g,_.position.y+=E}v.positionPrev.x+=g,v.positionPrev.y+=E,g*y.x+E*y.y<0?(d.x=0,d.y=0):(d.x*=h,d.y*=h)}}},n.preSolveVelocity=function(u){var h=u.length,p,f;for(p=0;p<h;p++){var l=u[p];if(!(!l.isActive||l.isSensor)){var m=l.activeContacts,v=m.length,d=l.collision,g=d.parentA,E=d.parentB,y=d.normal,A=d.tangent;for(f=0;f<v;f++){var _=m[f],M=_.vertex,T=_.normalImpulse,b=_.tangentImpulse;if(T!==0||b!==0){var x=y.x*T+A.x*b,S=y.y*T+A.y*b;g.isStatic||g.isSleeping||(g.positionPrev.x+=x*g.inverseMass,g.positionPrev.y+=S*g.inverseMass,g.anglePrev+=g.inverseInertia*((M.x-g.position.x)*S-(M.y-g.position.y)*x)),E.isStatic||E.isSleeping||(E.positionPrev.x-=x*E.inverseMass,E.positionPrev.y-=S*E.inverseMass,E.anglePrev-=E.inverseInertia*((M.x-E.position.x)*S-(M.y-E.position.y)*x))}}}}},n.solveVelocity=function(u,h){var p=h/a._baseDelta,f=p*p,l=f*p,m=-n._restingThresh*p,v=n._restingThreshTangent,d=n._frictionNormalMultiplier*p,g=n._frictionMaxStatic,E=u.length,y,A,_,M;for(_=0;_<E;_++){var T=u[_];if(!(!T.isActive||T.isSensor)){var b=T.collision,x=b.parentA,S=b.parentB,R=x.velocity,P=S.velocity,N=b.normal.x,D=b.normal.y,U=b.tangent.x,F=b.tangent.y,O=T.activeContacts,G=O.length,Y=1/G,$=x.inverseMass+S.inverseMass,Z=T.friction*T.frictionStatic*d;for(R.x=x.position.x-x.positionPrev.x,R.y=x.position.y-x.positionPrev.y,P.x=S.position.x-S.positionPrev.x,P.y=S.position.y-S.positionPrev.y,x.angularVelocity=x.angle-x.anglePrev,S.angularVelocity=S.angle-S.anglePrev,M=0;M<G;M++){var j=O[M],k=j.vertex,K=k.x-x.position.x,ne=k.y-x.position.y,ae=k.x-S.position.x,he=k.y-S.position.y,ge=R.x-ne*x.angularVelocity,Ce=R.y+K*x.angularVelocity,Se=P.x-he*S.angularVelocity,ze=P.y+ae*S.angularVelocity,z=ge-Se,lt=Ce-ze,ve=N*z+D*lt,_e=U*z+F*lt,pe=T.separation+ve,qe=Math.min(pe,1);qe=pe<0?0:qe;var Re=qe*Z;_e<-Re||_e>Re?(A=_e>0?_e:-_e,y=T.friction*(_e>0?1:-1)*l,y<-A?y=-A:y>A&&(y=A)):(y=_e,A=g);var L=K*D-ne*N,w=ae*D-he*N,V=Y/($+x.inverseInertia*L*L+S.inverseInertia*w*w),J=(1+T.restitution)*ve*V;if(y*=V,ve<m)j.normalImpulse=0;else{var Q=j.normalImpulse;j.normalImpulse+=J,j.normalImpulse>0&&(j.normalImpulse=0),J=j.normalImpulse-Q}if(_e<-v||_e>v)j.tangentImpulse=0;else{var te=j.tangentImpulse;j.tangentImpulse+=y,j.tangentImpulse<-A&&(j.tangentImpulse=-A),j.tangentImpulse>A&&(j.tangentImpulse=A),y=j.tangentImpulse-te}var de=N*J+U*y,re=D*J+F*y;x.isStatic||x.isSleeping||(x.positionPrev.x+=de*x.inverseMass,x.positionPrev.y+=re*x.inverseMass,x.anglePrev+=(K*re-ne*de)*x.inverseInertia),S.isStatic||S.isSleeping||(S.positionPrev.x-=de*S.inverseMass,S.positionPrev.y-=re*S.inverseMass,S.anglePrev-=(ae*re-he*de)*S.inverseInertia)}}}}})()},function(t,i,s){var n={};t.exports=n;var o=s(9),a=s(0);(function(){n.create=function(c){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},n.update=function(c,u,h){var p=c.list,f=p.length,l=c.table,m=u.length,v=c.collisionStart,d=c.collisionEnd,g=c.collisionActive,E,y,A,_;for(v.length=0,d.length=0,g.length=0,_=0;_<f;_++)p[_].confirmedActive=!1;for(_=0;_<m;_++)E=u[_],A=E.pair,A?(A.isActive?g.push(A):v.push(A),o.update(A,E,h),A.confirmedActive=!0):(A=o.create(E,h),l[A.id]=A,v.push(A),p.push(A));var M=[];for(f=p.length,_=0;_<f;_++)A=p[_],A.confirmedActive||(o.setActive(A,!1,h),d.push(A),!A.collision.bodyA.isSleeping&&!A.collision.bodyB.isSleeping&&M.push(_));for(_=0;_<M.length;_++)y=M[_]-_,A=p[y],p.splice(y,1),delete l[A.id]},n.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()},function(t,i,s){var n=t.exports=s(21);n.Axes=s(11),n.Bodies=s(12),n.Body=s(4),n.Bounds=s(1),n.Collision=s(8),n.Common=s(0),n.Composite=s(6),n.Composites=s(22),n.Constraint=s(10),n.Contact=s(16),n.Detector=s(13),n.Engine=s(17),n.Events=s(5),n.Grid=s(23),n.Mouse=s(14),n.MouseConstraint=s(24),n.Pair=s(9),n.Pairs=s(19),n.Plugin=s(15),n.Query=s(25),n.Render=s(26),n.Resolver=s(18),n.Runner=s(27),n.SAT=s(28),n.Sleeping=s(7),n.Svg=s(29),n.Vector=s(2),n.Vertices=s(3),n.World=s(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,i,s){var n={};t.exports=n;var o=s(15),a=s(0);(function(){n.name="matter-js",n.version="0.19.0",n.uses=[],n.used=[],n.use=function(){o.use(n,Array.prototype.slice.call(arguments))},n.before=function(c,u){return c=c.replace(/^Matter./,""),a.chainPathBefore(n,c,u)},n.after=function(c,u){return c=c.replace(/^Matter./,""),a.chainPathAfter(n,c,u)}})()},function(t,i,s){var n={};t.exports=n;var o=s(6),a=s(10),c=s(0),u=s(4),h=s(12),p=c.deprecated;(function(){n.stack=function(f,l,m,v,d,g,E){for(var y=o.create({label:"Stack"}),A=f,_=l,M,T=0,b=0;b<v;b++){for(var x=0,S=0;S<m;S++){var R=E(A,_,S,b,M,T);if(R){var P=R.bounds.max.y-R.bounds.min.y,N=R.bounds.max.x-R.bounds.min.x;P>x&&(x=P),u.translate(R,{x:N*.5,y:P*.5}),A=R.bounds.max.x+d,o.addBody(y,R),M=R,T+=1}else A+=d}_+=x+g,A=f}return y},n.chain=function(f,l,m,v,d,g){for(var E=f.bodies,y=1;y<E.length;y++){var A=E[y-1],_=E[y],M=A.bounds.max.y-A.bounds.min.y,T=A.bounds.max.x-A.bounds.min.x,b=_.bounds.max.y-_.bounds.min.y,x=_.bounds.max.x-_.bounds.min.x,S={bodyA:A,pointA:{x:T*l,y:M*m},bodyB:_,pointB:{x:x*v,y:b*d}},R=c.extend(S,g);o.addConstraint(f,a.create(R))}return f.label+=" Chain",f},n.mesh=function(f,l,m,v,d){var g=f.bodies,E,y,A,_,M;for(E=0;E<m;E++){for(y=1;y<l;y++)A=g[y-1+E*l],_=g[y+E*l],o.addConstraint(f,a.create(c.extend({bodyA:A,bodyB:_},d)));if(E>0)for(y=0;y<l;y++)A=g[y+(E-1)*l],_=g[y+E*l],o.addConstraint(f,a.create(c.extend({bodyA:A,bodyB:_},d))),v&&y>0&&(M=g[y-1+(E-1)*l],o.addConstraint(f,a.create(c.extend({bodyA:M,bodyB:_},d)))),v&&y<l-1&&(M=g[y+1+(E-1)*l],o.addConstraint(f,a.create(c.extend({bodyA:M,bodyB:_},d))))}return f.label+=" Mesh",f},n.pyramid=function(f,l,m,v,d,g,E){return n.stack(f,l,m,v,d,g,function(y,A,_,M,T,b){var x=Math.min(v,Math.ceil(m/2)),S=T?T.bounds.max.x-T.bounds.min.x:0;if(!(M>x)){M=x-M;var R=M,P=m-1-M;if(!(_<R||_>P)){b===1&&u.translate(T,{x:(_+(m%2===1?1:-1))*S,y:0});var N=T?_*S:0;return E(f+N+_*d,A,_,M,T,b)}}})},n.newtonsCradle=function(f,l,m,v,d){for(var g=o.create({label:"Newtons Cradle"}),E=0;E<m;E++){var y=1.9,A=h.circle(f+E*(v*y),l+d,v,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),_=a.create({pointA:{x:f+E*(v*y),y:l},bodyB:A});o.addBody(g,A),o.addConstraint(g,_)}return g},p(n,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),n.car=function(f,l,m,v,d){var g=u.nextGroup(!0),E=20,y=-m*.5+E,A=m*.5-E,_=0,M=o.create({label:"Car"}),T=h.rectangle(f,l,m,v,{collisionFilter:{group:g},chamfer:{radius:v*.5},density:2e-4}),b=h.circle(f+y,l+_,d,{collisionFilter:{group:g},friction:.8}),x=h.circle(f+A,l+_,d,{collisionFilter:{group:g},friction:.8}),S=a.create({bodyB:T,pointB:{x:y,y:_},bodyA:b,stiffness:1,length:0}),R=a.create({bodyB:T,pointB:{x:A,y:_},bodyA:x,stiffness:1,length:0});return o.addBody(M,T),o.addBody(M,b),o.addBody(M,x),o.addConstraint(M,S),o.addConstraint(M,R),M},p(n,"car","Composites.car ➤ moved to car example"),n.softBody=function(f,l,m,v,d,g,E,y,A,_){A=c.extend({inertia:1/0},A),_=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},_);var M=n.stack(f,l,m,v,d,g,function(T,b){return h.circle(T,b,y,A)});return n.mesh(M,m,v,E,_),M.label="Soft Body",M},p(n,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,i,s){var n={};t.exports=n;var o=s(9),a=s(0),c=a.deprecated;(function(){n.create=function(u){var h={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(h,u)},n.update=function(u,h,p,f){var l,m,v,d=p.world,g=u.buckets,E,y,A=!1;for(l=0;l<h.length;l++){var _=h[l];if(!(_.isSleeping&&!f)&&!(d.bounds&&(_.bounds.max.x<d.bounds.min.x||_.bounds.min.x>d.bounds.max.x||_.bounds.max.y<d.bounds.min.y||_.bounds.min.y>d.bounds.max.y))){var M=n._getRegion(u,_);if(!_.region||M.id!==_.region.id||f){(!_.region||f)&&(_.region=M);var T=n._regionUnion(M,_.region);for(m=T.startCol;m<=T.endCol;m++)for(v=T.startRow;v<=T.endRow;v++){y=n._getBucketId(m,v),E=g[y];var b=m>=M.startCol&&m<=M.endCol&&v>=M.startRow&&v<=M.endRow,x=m>=_.region.startCol&&m<=_.region.endCol&&v>=_.region.startRow&&v<=_.region.endRow;!b&&x&&x&&E&&n._bucketRemoveBody(u,E,_),(_.region===M||b&&!x||f)&&(E||(E=n._createBucket(g,y)),n._bucketAddBody(u,E,_))}_.region=M,A=!0}}}A&&(u.pairsList=n._createActivePairsList(u))},c(n,"update","Grid.update ➤ replaced by Matter.Detector"),n.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},c(n,"clear","Grid.clear ➤ replaced by Matter.Detector"),n._regionUnion=function(u,h){var p=Math.min(u.startCol,h.startCol),f=Math.max(u.endCol,h.endCol),l=Math.min(u.startRow,h.startRow),m=Math.max(u.endRow,h.endRow);return n._createRegion(p,f,l,m)},n._getRegion=function(u,h){var p=h.bounds,f=Math.floor(p.min.x/u.bucketWidth),l=Math.floor(p.max.x/u.bucketWidth),m=Math.floor(p.min.y/u.bucketHeight),v=Math.floor(p.max.y/u.bucketHeight);return n._createRegion(f,l,m,v)},n._createRegion=function(u,h,p,f){return{id:u+","+h+","+p+","+f,startCol:u,endCol:h,startRow:p,endRow:f}},n._getBucketId=function(u,h){return"C"+u+"R"+h},n._createBucket=function(u,h){var p=u[h]=[];return p},n._bucketAddBody=function(u,h,p){var f=u.pairs,l=o.id,m=h.length,v;for(v=0;v<m;v++){var d=h[v];if(!(p.id===d.id||p.isStatic&&d.isStatic)){var g=l(p,d),E=f[g];E?E[2]+=1:f[g]=[p,d,1]}}h.push(p)},n._bucketRemoveBody=function(u,h,p){var f=u.pairs,l=o.id,m;h.splice(a.indexOf(h,p),1);var v=h.length;for(m=0;m<v;m++){var d=f[l(p,h[m])];d&&(d[2]-=1)}},n._createActivePairsList=function(u){var h,p=u.pairs,f=a.keys(p),l=f.length,m=[],v;for(v=0;v<l;v++)h=p[f[v]],h[2]>0?m.push(h):delete p[f[v]];return m}})()},function(t,i,s){var n={};t.exports=n;var o=s(3),a=s(7),c=s(14),u=s(5),h=s(13),p=s(10),f=s(6),l=s(0),m=s(1);(function(){n.create=function(v,d){var g=(v?v.mouse:null)||(d?d.mouse:null);g||(v&&v.render&&v.render.canvas?g=c.create(v.render.canvas):d&&d.element?g=c.create(d.element):(g=c.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=p.create({label:"Mouse Constraint",pointA:g.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),y={type:"mouseConstraint",mouse:g,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},A=l.extend(y,d);return u.on(v,"beforeUpdate",function(){var _=f.allBodies(v.world);n.update(A,_),n._triggerEvents(A)}),A},n.update=function(v,d){var g=v.mouse,E=v.constraint,y=v.body;if(g.button===0){if(E.bodyB)a.set(E.bodyB,!1),E.pointA=g.position;else for(var A=0;A<d.length;A++)if(y=d[A],m.contains(y.bounds,g.position)&&h.canCollide(y.collisionFilter,v.collisionFilter))for(var _=y.parts.length>1?1:0;_<y.parts.length;_++){var M=y.parts[_];if(o.contains(M.vertices,g.position)){E.pointA=g.position,E.bodyB=v.body=y,E.pointB={x:g.position.x-y.position.x,y:g.position.y-y.position.y},E.angleB=y.angle,a.set(y,!1),u.trigger(v,"startdrag",{mouse:g,body:y});break}}}else E.bodyB=v.body=null,E.pointB=null,y&&u.trigger(v,"enddrag",{mouse:g,body:y})},n._triggerEvents=function(v){var d=v.mouse,g=d.sourceEvents;g.mousemove&&u.trigger(v,"mousemove",{mouse:d}),g.mousedown&&u.trigger(v,"mousedown",{mouse:d}),g.mouseup&&u.trigger(v,"mouseup",{mouse:d}),c.clearSourceEvents(d)}})()},function(t,i,s){var n={};t.exports=n;var o=s(2),a=s(8),c=s(1),u=s(12),h=s(3);(function(){n.collides=function(p,f){for(var l=[],m=f.length,v=p.bounds,d=a.collides,g=c.overlaps,E=0;E<m;E++){var y=f[E],A=y.parts.length,_=A===1?0:1;if(g(y.bounds,v))for(var M=_;M<A;M++){var T=y.parts[M];if(g(T.bounds,v)){var b=d(T,p);if(b){l.push(b);break}}}}return l},n.ray=function(p,f,l,m){m=m||1e-100;for(var v=o.angle(f,l),d=o.magnitude(o.sub(f,l)),g=(l.x+f.x)*.5,E=(l.y+f.y)*.5,y=u.rectangle(g,E,d,m,{angle:v}),A=n.collides(y,p),_=0;_<A.length;_+=1){var M=A[_];M.body=M.bodyB=M.bodyA}return A},n.region=function(p,f,l){for(var m=[],v=0;v<p.length;v++){var d=p[v],g=c.overlaps(d.bounds,f);(g&&!l||!g&&l)&&m.push(d)}return m},n.point=function(p,f){for(var l=[],m=0;m<p.length;m++){var v=p[m];if(c.contains(v.bounds,f))for(var d=v.parts.length===1?0:1;d<v.parts.length;d++){var g=v.parts[d];if(c.contains(g.bounds,f)&&h.contains(g.vertices,f)){l.push(v);break}}}return l}})()},function(t,i,s){var n={};t.exports=n;var o=s(4),a=s(0),c=s(6),u=s(1),h=s(5),p=s(2),f=s(14);(function(){var l,m;typeof window<"u"&&(l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(_){window.setTimeout(function(){_(a.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(_){var M={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!_.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},T=a.extend(M,_);return T.canvas&&(T.canvas.width=T.options.width||T.canvas.width,T.canvas.height=T.options.height||T.canvas.height),T.mouse=_.mouse,T.engine=_.engine,T.canvas=T.canvas||g(T.options.width,T.options.height),T.context=T.canvas.getContext("2d"),T.textures={},T.bounds=T.bounds||{min:{x:0,y:0},max:{x:T.canvas.width,y:T.canvas.height}},T.controller=n,T.options.showBroadphase=!1,T.options.pixelRatio!==1&&n.setPixelRatio(T,T.options.pixelRatio),a.isElement(T.element)&&T.element.appendChild(T.canvas),T},n.run=function(_){(function M(T){_.frameRequestId=l(M),v(_,T),n.world(_,T),(_.options.showStats||_.options.showDebug)&&n.stats(_,_.context,T),(_.options.showPerformance||_.options.showDebug)&&n.performance(_,_.context,T)})()},n.stop=function(_){m(_.frameRequestId)},n.setPixelRatio=function(_,M){var T=_.options,b=_.canvas;M==="auto"&&(M=E(b)),T.pixelRatio=M,b.setAttribute("data-pixel-ratio",M),b.width=T.width*M,b.height=T.height*M,b.style.width=T.width+"px",b.style.height=T.height+"px"},n.lookAt=function(_,M,T,b){b=typeof b<"u"?b:!0,M=a.isArray(M)?M:[M],T=T||{x:0,y:0};for(var x={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},S=0;S<M.length;S+=1){var R=M[S],P=R.bounds?R.bounds.min:R.min||R.position||R,N=R.bounds?R.bounds.max:R.max||R.position||R;P&&N&&(P.x<x.min.x&&(x.min.x=P.x),N.x>x.max.x&&(x.max.x=N.x),P.y<x.min.y&&(x.min.y=P.y),N.y>x.max.y&&(x.max.y=N.y))}var D=x.max.x-x.min.x+2*T.x,U=x.max.y-x.min.y+2*T.y,F=_.canvas.height,O=_.canvas.width,G=O/F,Y=D/U,$=1,Z=1;Y>G?Z=Y/G:$=G/Y,_.options.hasBounds=!0,_.bounds.min.x=x.min.x,_.bounds.max.x=x.min.x+D*$,_.bounds.min.y=x.min.y,_.bounds.max.y=x.min.y+U*Z,b&&(_.bounds.min.x+=D*.5-D*$*.5,_.bounds.max.x+=D*.5-D*$*.5,_.bounds.min.y+=U*.5-U*Z*.5,_.bounds.max.y+=U*.5-U*Z*.5),_.bounds.min.x-=T.x,_.bounds.max.x-=T.x,_.bounds.min.y-=T.y,_.bounds.max.y-=T.y,_.mouse&&(f.setScale(_.mouse,{x:(_.bounds.max.x-_.bounds.min.x)/_.canvas.width,y:(_.bounds.max.y-_.bounds.min.y)/_.canvas.height}),f.setOffset(_.mouse,_.bounds.min))},n.startViewTransform=function(_){var M=_.bounds.max.x-_.bounds.min.x,T=_.bounds.max.y-_.bounds.min.y,b=M/_.options.width,x=T/_.options.height;_.context.setTransform(_.options.pixelRatio/b,0,0,_.options.pixelRatio/x,0,0),_.context.translate(-_.bounds.min.x,-_.bounds.min.y)},n.endViewTransform=function(_){_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0)},n.world=function(_,M){var T=a.now(),b=_.engine,x=b.world,S=_.canvas,R=_.context,P=_.options,N=_.timing,D=c.allBodies(x),U=c.allConstraints(x),F=P.wireframes?P.wireframeBackground:P.background,O=[],G=[],Y,$={timestamp:b.timing.timestamp};if(h.trigger(_,"beforeRender",$),_.currentBackground!==F&&A(_,F),R.globalCompositeOperation="source-in",R.fillStyle="transparent",R.fillRect(0,0,S.width,S.height),R.globalCompositeOperation="source-over",P.hasBounds){for(Y=0;Y<D.length;Y++){var Z=D[Y];u.overlaps(Z.bounds,_.bounds)&&O.push(Z)}for(Y=0;Y<U.length;Y++){var j=U[Y],k=j.bodyA,K=j.bodyB,ne=j.pointA,ae=j.pointB;k&&(ne=p.add(k.position,j.pointA)),K&&(ae=p.add(K.position,j.pointB)),!(!ne||!ae)&&(u.contains(_.bounds,ne)||u.contains(_.bounds,ae))&&G.push(j)}n.startViewTransform(_),_.mouse&&(f.setScale(_.mouse,{x:(_.bounds.max.x-_.bounds.min.x)/_.options.width,y:(_.bounds.max.y-_.bounds.min.y)/_.options.height}),f.setOffset(_.mouse,_.bounds.min))}else G=U,O=D,_.options.pixelRatio!==1&&_.context.setTransform(_.options.pixelRatio,0,0,_.options.pixelRatio,0,0);!P.wireframes||b.enableSleeping&&P.showSleeping?n.bodies(_,O,R):(P.showConvexHulls&&n.bodyConvexHulls(_,O,R),n.bodyWireframes(_,O,R)),P.showBounds&&n.bodyBounds(_,O,R),(P.showAxes||P.showAngleIndicator)&&n.bodyAxes(_,O,R),P.showPositions&&n.bodyPositions(_,O,R),P.showVelocity&&n.bodyVelocity(_,O,R),P.showIds&&n.bodyIds(_,O,R),P.showSeparations&&n.separations(_,b.pairs.list,R),P.showCollisions&&n.collisions(_,b.pairs.list,R),P.showVertexNumbers&&n.vertexNumbers(_,O,R),P.showMousePosition&&n.mousePosition(_,_.mouse,R),n.constraints(G,R),P.hasBounds&&n.endViewTransform(_),h.trigger(_,"afterRender",$),N.lastElapsed=a.now()-T},n.stats=function(_,M,T){for(var b=_.engine,x=b.world,S=c.allBodies(x),R=0,P=55,N=44,D=0,U=0,F=0;F<S.length;F+=1)R+=S[F].parts.length;var O={Part:R,Body:S.length,Cons:c.allConstraints(x).length,Comp:c.allComposites(x).length,Pair:b.pairs.list.length};M.fillStyle="#0e0f19",M.fillRect(D,U,P*5.5,N),M.font="12px Arial",M.textBaseline="top",M.textAlign="right";for(var G in O){var Y=O[G];M.fillStyle="#aaa",M.fillText(G,D+P,U+8),M.fillStyle="#eee",M.fillText(Y,D+P,U+26),D+=P}},n.performance=function(_,M){var T=_.engine,b=_.timing,x=b.deltaHistory,S=b.elapsedHistory,R=b.timestampElapsedHistory,P=b.engineDeltaHistory,N=b.engineElapsedHistory,D=T.timing.lastDelta,U=d(x),F=d(S),O=d(P),G=d(N),Y=d(R),$=Y/U||0,Z=1e3/U||0,j=4,k=12,K=60,ne=34,ae=10,he=69;M.fillStyle="#0e0f19",M.fillRect(0,50,k*4+K*5+22,ne),n.status(M,ae,he,K,j,x.length,Math.round(Z)+" fps",Z/n._goodFps,function(ge){return x[ge]/U-1}),n.status(M,ae+k+K,he,K,j,P.length,D.toFixed(2)+" dt",n._goodDelta/D,function(ge){return P[ge]/O-1}),n.status(M,ae+(k+K)*2,he,K,j,N.length,G.toFixed(2)+" ut",1-G/n._goodFps,function(ge){return N[ge]/G-1}),n.status(M,ae+(k+K)*3,he,K,j,S.length,F.toFixed(2)+" rt",1-F/n._goodFps,function(ge){return S[ge]/F-1}),n.status(M,ae+(k+K)*4,he,K,j,R.length,$.toFixed(2)+" x",$*$*$,function(ge){return(R[ge]/x[ge]/$||0)-1})},n.status=function(_,M,T,b,x,S,R,P,N){_.strokeStyle="#888",_.fillStyle="#444",_.lineWidth=1,_.fillRect(M,T+7,b,1),_.beginPath(),_.moveTo(M,T+7-x*a.clamp(.4*N(0),-2,2));for(var D=0;D<b;D+=1)_.lineTo(M+D,T+7-(D<S?x*a.clamp(.4*N(D),-2,2):0));_.stroke(),_.fillStyle="hsl("+a.clamp(25+95*P,0,120)+",100%,60%)",_.fillRect(M,T-7,4,4),_.font="12px Arial",_.textBaseline="middle",_.textAlign="right",_.fillStyle="#eee",_.fillText(R,M+b,T-5)},n.constraints=function(_,M){for(var T=M,b=0;b<_.length;b++){var x=_[b];if(!(!x.render.visible||!x.pointA||!x.pointB)){var S=x.bodyA,R=x.bodyB,P,N;if(S?P=p.add(S.position,x.pointA):P=x.pointA,x.render.type==="pin")T.beginPath(),T.arc(P.x,P.y,3,0,2*Math.PI),T.closePath();else{if(R?N=p.add(R.position,x.pointB):N=x.pointB,T.beginPath(),T.moveTo(P.x,P.y),x.render.type==="spring")for(var D=p.sub(N,P),U=p.perp(p.normalise(D)),F=Math.ceil(a.clamp(x.length/5,12,20)),O,G=1;G<F;G+=1)O=G%2===0?1:-1,T.lineTo(P.x+D.x*(G/F)+U.x*O*4,P.y+D.y*(G/F)+U.y*O*4);T.lineTo(N.x,N.y)}x.render.lineWidth&&(T.lineWidth=x.render.lineWidth,T.strokeStyle=x.render.strokeStyle,T.stroke()),x.render.anchors&&(T.fillStyle=x.render.strokeStyle,T.beginPath(),T.arc(P.x,P.y,3,0,2*Math.PI),T.arc(N.x,N.y,3,0,2*Math.PI),T.closePath(),T.fill())}}},n.bodies=function(_,M,T){var b=T;_.engine;var x=_.options,S=x.showInternalEdges||!x.wireframes,R,P,N,D;for(N=0;N<M.length;N++)if(R=M[N],!!R.render.visible){for(D=R.parts.length>1?1:0;D<R.parts.length;D++)if(P=R.parts[D],!!P.render.visible){if(x.showSleeping&&R.isSleeping?b.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(b.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!x.wireframes){var U=P.render.sprite,F=y(_,U.texture);b.translate(P.position.x,P.position.y),b.rotate(P.angle),b.drawImage(F,F.width*-U.xOffset*U.xScale,F.height*-U.yOffset*U.yScale,F.width*U.xScale,F.height*U.yScale),b.rotate(-P.angle),b.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)b.beginPath(),b.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(P.vertices[0].x,P.vertices[0].y);for(var O=1;O<P.vertices.length;O++)!P.vertices[O-1].isInternal||S?b.lineTo(P.vertices[O].x,P.vertices[O].y):b.moveTo(P.vertices[O].x,P.vertices[O].y),P.vertices[O].isInternal&&!S&&b.moveTo(P.vertices[(O+1)%P.vertices.length].x,P.vertices[(O+1)%P.vertices.length].y);b.lineTo(P.vertices[0].x,P.vertices[0].y),b.closePath()}x.wireframes?(b.lineWidth=1,b.strokeStyle="#bbb",b.stroke()):(b.fillStyle=P.render.fillStyle,P.render.lineWidth&&(b.lineWidth=P.render.lineWidth,b.strokeStyle=P.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},n.bodyWireframes=function(_,M,T){var b=T,x=_.options.showInternalEdges,S,R,P,N,D;for(b.beginPath(),P=0;P<M.length;P++)if(S=M[P],!!S.render.visible)for(D=S.parts.length>1?1:0;D<S.parts.length;D++){for(R=S.parts[D],b.moveTo(R.vertices[0].x,R.vertices[0].y),N=1;N<R.vertices.length;N++)!R.vertices[N-1].isInternal||x?b.lineTo(R.vertices[N].x,R.vertices[N].y):b.moveTo(R.vertices[N].x,R.vertices[N].y),R.vertices[N].isInternal&&!x&&b.moveTo(R.vertices[(N+1)%R.vertices.length].x,R.vertices[(N+1)%R.vertices.length].y);b.lineTo(R.vertices[0].x,R.vertices[0].y)}b.lineWidth=1,b.strokeStyle="#bbb",b.stroke()},n.bodyConvexHulls=function(_,M,T){var b=T,x,S,R;for(b.beginPath(),S=0;S<M.length;S++)if(x=M[S],!(!x.render.visible||x.parts.length===1)){for(b.moveTo(x.vertices[0].x,x.vertices[0].y),R=1;R<x.vertices.length;R++)b.lineTo(x.vertices[R].x,x.vertices[R].y);b.lineTo(x.vertices[0].x,x.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},n.vertexNumbers=function(_,M,T){var b=T,x,S,R;for(x=0;x<M.length;x++){var P=M[x].parts;for(R=P.length>1?1:0;R<P.length;R++){var N=P[R];for(S=0;S<N.vertices.length;S++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(x+"_"+S,N.position.x+(N.vertices[S].x-N.position.x)*.8,N.position.y+(N.vertices[S].y-N.position.y)*.8)}}},n.mousePosition=function(_,M,T){var b=T;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(M.position.x+"  "+M.position.y,M.position.x+5,M.position.y-5)},n.bodyBounds=function(_,M,T){var b=T;_.engine;var x=_.options;b.beginPath();for(var S=0;S<M.length;S++){var R=M[S];if(R.render.visible)for(var P=M[S].parts,N=P.length>1?1:0;N<P.length;N++){var D=P[N];b.rect(D.bounds.min.x,D.bounds.min.y,D.bounds.max.x-D.bounds.min.x,D.bounds.max.y-D.bounds.min.y)}}x.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},n.bodyAxes=function(_,M,T){var b=T;_.engine;var x=_.options,S,R,P,N;for(b.beginPath(),R=0;R<M.length;R++){var D=M[R],U=D.parts;if(D.render.visible)if(x.showAxes)for(P=U.length>1?1:0;P<U.length;P++)for(S=U[P],N=0;N<S.axes.length;N++){var F=S.axes[N];b.moveTo(S.position.x,S.position.y),b.lineTo(S.position.x+F.x*20,S.position.y+F.y*20)}else for(P=U.length>1?1:0;P<U.length;P++)for(S=U[P],N=0;N<S.axes.length;N++)b.moveTo(S.position.x,S.position.y),b.lineTo((S.vertices[0].x+S.vertices[S.vertices.length-1].x)/2,(S.vertices[0].y+S.vertices[S.vertices.length-1].y)/2)}x.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},n.bodyPositions=function(_,M,T){var b=T;_.engine;var x=_.options,S,R,P,N;for(b.beginPath(),P=0;P<M.length;P++)if(S=M[P],!!S.render.visible)for(N=0;N<S.parts.length;N++)R=S.parts[N],b.arc(R.position.x,R.position.y,3,0,2*Math.PI,!1),b.closePath();for(x.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),P=0;P<M.length;P++)S=M[P],S.render.visible&&(b.arc(S.positionPrev.x,S.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},n.bodyVelocity=function(_,M,T){var b=T;b.beginPath();for(var x=0;x<M.length;x++){var S=M[x];if(S.render.visible){var R=o.getVelocity(S);b.moveTo(S.position.x,S.position.y),b.lineTo(S.position.x+R.x,S.position.y+R.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},n.bodyIds=function(_,M,T){var b=T,x,S;for(x=0;x<M.length;x++)if(M[x].render.visible){var R=M[x].parts;for(S=R.length>1?1:0;S<R.length;S++){var P=R[S];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(P.id,P.position.x+10,P.position.y-10)}}},n.collisions=function(_,M,T){var b=T,x=_.options,S,R,P,N;for(b.beginPath(),P=0;P<M.length;P++)if(S=M[P],!!S.isActive)for(R=S.collision,N=0;N<S.activeContacts.length;N++){var D=S.activeContacts[N],U=D.vertex;b.rect(U.x-1.5,U.y-1.5,3.5,3.5)}for(x.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),P=0;P<M.length;P++)if(S=M[P],!!S.isActive&&(R=S.collision,S.activeContacts.length>0)){var F=S.activeContacts[0].vertex.x,O=S.activeContacts[0].vertex.y;S.activeContacts.length===2&&(F=(S.activeContacts[0].vertex.x+S.activeContacts[1].vertex.x)/2,O=(S.activeContacts[0].vertex.y+S.activeContacts[1].vertex.y)/2),R.bodyB===R.supports[0].body||R.bodyA.isStatic===!0?b.moveTo(F-R.normal.x*8,O-R.normal.y*8):b.moveTo(F+R.normal.x*8,O+R.normal.y*8),b.lineTo(F,O)}x.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},n.separations=function(_,M,T){var b=T,x=_.options,S,R,P,N,D;for(b.beginPath(),D=0;D<M.length;D++)if(S=M[D],!!S.isActive){R=S.collision,P=R.bodyA,N=R.bodyB;var U=1;!N.isStatic&&!P.isStatic&&(U=.5),N.isStatic&&(U=0),b.moveTo(N.position.x,N.position.y),b.lineTo(N.position.x-R.penetration.x*U,N.position.y-R.penetration.y*U),U=1,!N.isStatic&&!P.isStatic&&(U=.5),P.isStatic&&(U=0),b.moveTo(P.position.x,P.position.y),b.lineTo(P.position.x+R.penetration.x*U,P.position.y+R.penetration.y*U)}x.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},n.inspector=function(_,M){_.engine;var T=_.selected,b=_.render,x=b.options,S;if(x.hasBounds){var R=b.bounds.max.x-b.bounds.min.x,P=b.bounds.max.y-b.bounds.min.y,N=R/b.options.width,D=P/b.options.height;M.scale(1/N,1/D),M.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var U=0;U<T.length;U++){var F=T[U].data;switch(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.9)",M.setLineDash([1,2]),F.type){case"body":S=F.bounds,M.beginPath(),M.rect(Math.floor(S.min.x-3),Math.floor(S.min.y-3),Math.floor(S.max.x-S.min.x+6),Math.floor(S.max.y-S.min.y+6)),M.closePath(),M.stroke();break;case"constraint":var O=F.pointA;F.bodyA&&(O=F.pointB),M.beginPath(),M.arc(O.x,O.y,10,0,2*Math.PI),M.closePath(),M.stroke();break}M.setLineDash([]),M.translate(-.5,-.5)}_.selectStart!==null&&(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.6)",M.fillStyle="rgba(255,165,0,0.1)",S=_.selectBounds,M.beginPath(),M.rect(Math.floor(S.min.x),Math.floor(S.min.y),Math.floor(S.max.x-S.min.x),Math.floor(S.max.y-S.min.y)),M.closePath(),M.stroke(),M.fill(),M.translate(-.5,-.5)),x.hasBounds&&M.setTransform(1,0,0,1,0,0)};var v=function(_,M){var T=_.engine,b=_.timing,x=b.historySize,S=T.timing.timestamp;b.delta=M-b.lastTime||n._goodDelta,b.lastTime=M,b.timestampElapsed=S-b.lastTimestamp||0,b.lastTimestamp=S,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,x),b.engineDeltaHistory.unshift(T.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,x),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,x),b.engineElapsedHistory.unshift(T.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,x),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,x)},d=function(_){for(var M=0,T=0;T<_.length;T+=1)M+=_[T];return M/_.length||0},g=function(_,M){var T=document.createElement("canvas");return T.width=_,T.height=M,T.oncontextmenu=function(){return!1},T.onselectstart=function(){return!1},T},E=function(_){var M=_.getContext("2d"),T=window.devicePixelRatio||1,b=M.webkitBackingStorePixelRatio||M.mozBackingStorePixelRatio||M.msBackingStorePixelRatio||M.oBackingStorePixelRatio||M.backingStorePixelRatio||1;return T/b},y=function(_,M){var T=_.textures[M];return T||(T=_.textures[M]=new Image,T.src=M,T)},A=function(_,M){var T=M;/(jpg|gif|png)$/.test(M)&&(T="url("+M+")"),_.canvas.style.background=T,_.canvas.style.backgroundSize="contain",_.currentBackground=M}})()},function(t,i,s){var n={};t.exports=n;var o=s(5),a=s(17),c=s(0);(function(){var u,h;if(typeof window<"u"&&(u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,h=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!u){var p;u=function(f){p=setTimeout(function(){f(c.now())},1e3/60)},h=function(){clearTimeout(p)}}n.create=function(f){var l={fps:60,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,frameRequestId:null,isFixed:!1,enabled:!0},m=c.extend(l,f);return m.delta=m.delta||1e3/m.fps,m.deltaMin=m.deltaMin||1e3/m.fps,m.deltaMax=m.deltaMax||1e3/(m.fps*.5),m.fps=1e3/m.delta,m},n.run=function(f,l){return typeof f.positionIterations<"u"&&(l=f,f=n.create()),function m(v){f.frameRequestId=u(m),v&&f.enabled&&n.tick(f,l,v)}(),f},n.tick=function(f,l,m){var v=l.timing,d;f.isFixed?d=f.delta:(d=m-f.timePrev||f.delta,f.timePrev=m,f.deltaHistory.push(d),f.deltaHistory=f.deltaHistory.slice(-f.deltaSampleSize),d=Math.min.apply(null,f.deltaHistory),d=d<f.deltaMin?f.deltaMin:d,d=d>f.deltaMax?f.deltaMax:d,f.delta=d);var g={timestamp:v.timestamp};o.trigger(f,"beforeTick",g),f.frameCounter+=1,m-f.counterTimestamp>=1e3&&(f.fps=f.frameCounter*((m-f.counterTimestamp)/1e3),f.counterTimestamp=m,f.frameCounter=0),o.trigger(f,"tick",g),o.trigger(f,"beforeUpdate",g),a.update(l,d),o.trigger(f,"afterUpdate",g),o.trigger(f,"afterTick",g)},n.stop=function(f){h(f.frameRequestId)},n.start=function(f,l){n.run(f,l)}})()},function(t,i,s){var n={};t.exports=n;var o=s(8),a=s(0),c=a.deprecated;(function(){n.collides=function(u,h){return o.collides(u,h)},c(n,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,i,s){var n={};t.exports=n,s(1);var o=s(0);(function(){n.pathToVertices=function(a,c){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,h,p,f,l,m,v,d,g,E,y=[],A,_,M=0,T=0,b=0;c=c||15;var x=function(R,P,N){var D=N%2===1&&N>1;if(!g||R!=g.x||P!=g.y){g&&D?(A=g.x,_=g.y):(A=0,_=0);var U={x:A+R,y:_+P};(D||!g)&&(g=U),y.push(U),T=A+R,b=_+P}},S=function(R){var P=R.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":T=R.x,b=R.y;break;case"H":T=R.x;break;case"V":b=R.y;break}x(T,b,R.pathSegType)}};for(n._svgPathToAbsolute(a),p=a.getTotalLength(),m=[],u=0;u<a.pathSegList.numberOfItems;u+=1)m.push(a.pathSegList.getItem(u));for(v=m.concat();M<p;){if(E=a.getPathSegAtLength(M),l=m[E],l!=d){for(;v.length&&v[0]!=l;)S(v.shift());d=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=a.getPointAtLength(M),x(f.x,f.y,0);break}M+=c}for(u=0,h=v.length;u<h;++u)S(v[u]);return y},n._svgPathToAbsolute=function(a){for(var c,u,h,p,f,l,m=a.pathSegList,v=0,d=0,g=m.numberOfItems,E=0;E<g;++E){var y=m.getItem(E),A=y.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in y&&(v=y.x),"y"in y&&(d=y.y);else switch("x1"in y&&(h=v+y.x1),"x2"in y&&(f=v+y.x2),"y1"in y&&(p=d+y.y1),"y2"in y&&(l=d+y.y2),"x"in y&&(v+=y.x),"y"in y&&(d+=y.y),A){case"m":m.replaceItem(a.createSVGPathSegMovetoAbs(v,d),E);break;case"l":m.replaceItem(a.createSVGPathSegLinetoAbs(v,d),E);break;case"h":m.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(v),E);break;case"v":m.replaceItem(a.createSVGPathSegLinetoVerticalAbs(d),E);break;case"c":m.replaceItem(a.createSVGPathSegCurvetoCubicAbs(v,d,h,p,f,l),E);break;case"s":m.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(v,d,f,l),E);break;case"q":m.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(v,d,h,p),E);break;case"t":m.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(v,d),E);break;case"a":m.replaceItem(a.createSVGPathSegArcAbs(v,d,y.r1,y.r2,y.angle,y.largeArcFlag,y.sweepFlag),E);break;case"z":case"Z":v=c,d=u;break}(A=="M"||A=="m")&&(c=v,u=d)}}})()},function(t,i,s){var n={};t.exports=n;var o=s(6);s(0),function(){n.create=o.create,n.add=o.add,n.remove=o.remove,n.clear=o.clear,n.addComposite=o.addComposite,n.addBody=o.addBody,n.addConstraint=o.addConstraint}()}])})})(wo);var Ae=wo.exports;class ap{constructor(){this.engine=Ae.Engine.create(),this.engine.world.gravity.y=1.5}init(){}update(e){Ae.Engine.update(this.engine,e)}}class or{constructor(e,t,i){this.sprite=e,this.assetManager=t,this.animationMap=i,this.currentState=null,this.frames=[],this.frameIndex=0,this.accumulator=0,this.fps=10,this.frameDuration=1/this.fps,this.isLooping=!0,this.isPlaying=!1,this.baseScale=.5}play(e,t=10,i=!0){if(this.currentState===e)return;const s=this.animationMap[e];if(!s||s.length===0){console.warn(`Animation state '${e}' not found or empty.`);return}this.currentState=e,this.frames=s,this.frameIndex=0,this.accumulator=0,this.fps=t,this.frameDuration=1/this.fps,this.isLooping=i,this.isPlaying=!0,this.applyCurrentFrame()}setFlipX(e){const t=e?-1:1;this.sprite.scale.x=Math.abs(this.sprite.scale.x)*t}update(e){!this.isPlaying||this.frames.length<=1||(this.accumulator+=e,this.accumulator>=this.frameDuration&&(this.accumulator-=this.frameDuration,this.frameIndex++,this.frameIndex>=this.frames.length&&(this.isLooping?this.frameIndex=0:(this.frameIndex=this.frames.length-1,this.isPlaying=!1)),this.applyCurrentFrame()))}applyCurrentFrame(){const e=this.frames[this.frameIndex],t=this.assetManager.getFrameMaterial(e);if(t){this.sprite.material=t;const i=this.assetManager.atlasMeta[e];if(i){const s=Math.sign(this.sprite.scale.x)||1;this.sprite.scale.set(i.width*this.baseScale*s,i.height*this.baseScale,1)}}}}class op{constructor(e,t,i,s){this.physics=e,this.scene=t,this.input=i,this.assetManager=s,this.body=null,this.sprite=null,this.animator=null,this.isGrounded=!1,this.health=100,this.isHurt=!1,this.hurtTimer=0,this.isAttacking=!1,this.attackTimer=0,this.isBlocking=!1,this.direction=1,this.speed=4,this.jumpForce=-12}async init(e,t){this.body=Ae.Bodies.rectangle(e,t,40,80,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Ae.Composite.add(this.physics.engine.world,this.body);const i=new Gt(1,1);this.sprite=new ft(i,new Ct({transparent:!0})),this.scene.add(this.sprite);const s={idle:["entities/player_frames/player_frame_0.png"],run:["entities/player_frames/player_frame_0.png","entities/player_frames/player_frame_1.png","entities/player_frames/player_frame_2.png","entities/player_frames/player_frame_3.png","entities/player_frames/player_frame_5.png","entities/player_frames/player_frame_20.png"],jump:["entities/player_frames/player_frame_5.png"],fall:["entities/player_frames/player_frame_2.png"],attack:["entities/player_frames/player_frame_12.png","entities/player_frames/player_frame_17.png","entities/player_frames/player_frame_6.png","entities/player_frames/player_frame_21.png","entities/player_frames/player_frame_25.png"],hurt:["entities/player_frames/player_frame_28.png"],death:["entities/player_frames/player_frame_36.png"]};this.animator=new or(this.sprite,this.assetManager,s),this.animator.baseScale=.35,this.animator.play("idle",8)}update(e){if(!this.body)return;this.isGrounded=Math.abs(this.body.velocity.y)<.1;let t=0,i=!1;if(!this.isHurt){this.isBlocking=this.input.isDown("KeyC")&&!this.isAttacking;const o=this.isBlocking?this.speed*.3:this.speed;this.input.isDown("ArrowLeft")||this.input.isDown("KeyA")?(t=-1,i=!0,this.direction=-1,this.animator.setFlipX(!0)):(this.input.isDown("ArrowRight")||this.input.isDown("KeyD"))&&(t=1,i=!0,this.direction=1,this.animator.setFlipX(!1)),Ae.Body.setVelocity(this.body,{x:t*o,y:this.body.velocity.y}),(this.input.isDown("ArrowUp")||this.input.isDown("KeyW")||this.input.isDown("Space"))&&this.isGrounded&&(Ae.Body.setVelocity(this.body,{x:this.body.velocity.x,y:this.jumpForce}),this.isGrounded=!1),this.input.isJustPressed("KeyX")&&!this.isAttacking&&!this.isBlocking&&(this.isAttacking=!0,this.attackTimer=.3,Ae.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}))}this.isAttacking&&(this.attackTimer-=e,this.attackTimer<=0&&(this.isAttacking=!1)),this.isHurt&&(this.hurtTimer-=e,this.hurtTimer<=0&&(this.isHurt=!1));let s="idle",n=8;this.health<=0?s="death":this.isHurt?s="hurt":this.isAttacking?(s="attack",n=15):this.isGrounded?i&&(s="run",n=12):this.body.velocity.y<0?s="jump":s="fall",this.animator.play(s,n),this.animator.update(e),this.isHurt&&this.sprite.material?this.sprite.material.color.setHex(16733525):this.isBlocking&&this.sprite.material?this.sprite.material.color.setHex(5614335):this.sprite.material&&this.sprite.material.color.setHex(16777215),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y}takeDamage(e,t){if(!(this.isHurt||this.health<=0)){if(this.isBlocking){this.health-=Math.floor(e/4),Ae.Body.setVelocity(this.body,{x:t*2,y:0});return}this.health-=e,this.isHurt=!0,this.hurtTimer=.5,this.isAttacking=!1,Ae.Body.setVelocity(this.body,{x:t*5,y:-5})}}reset(){this.health=100,this.isHurt=!1,this.hurtTimer=0,this.isAttacking=!1,this.attackTimer=0,this.isBlocking=!1,Ae.Body.setVelocity(this.body,{x:0,y:0})}canDealDamage(){return this.isAttacking&&this.animator.currentState==="attack"?this.animator.frameIndex>=2:!1}}class lp{constructor(e,t,i){this.physics=e,this.scene=t,this.assetManager=i,this.body=null,this.sprite=null,this.animator=null,this.speed=2,this.direction=1,this.isGrounded=!1,this.health=30,this.isHurt=!1,this.hurtTimer=0,this.isAttacking=!1,this.attackTimer=0,this.attackCooldown=0}async init(e,t){this.body=Ae.Bodies.rectangle(e,t,50,100,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Ae.Composite.add(this.physics.engine.world,this.body);const i=new Gt(1,1);this.sprite=new ft(i,new Ct({transparent:!0})),this.scene.add(this.sprite);const s={idle:["entities/villain_frames_4x4/villain_0_0.png","entities/villain_frames_4x4/villain_0_1.png","entities/villain_frames_4x4/villain_0_2.png","entities/villain_frames_4x4/villain_0_3.png"],run:["entities/villain_frames_4x4/villain_1_0.png","entities/villain_frames_4x4/villain_1_1.png","entities/villain_frames_4x4/villain_1_2.png","entities/villain_frames_4x4/villain_1_3.png"],attack:["entities/villain_frames_4x4/villain_2_0.png","entities/villain_frames_4x4/villain_2_1.png","entities/villain_frames_4x4/villain_2_2.png","entities/villain_frames_4x4/villain_2_3.png"],hurt:["entities/villain_frames_4x4/villain_3_0.png"],death:["entities/villain_frames_4x4/villain_3_2.png","entities/villain_frames_4x4/villain_3_3.png"]};this.animator=new or(this.sprite,this.assetManager,s),this.animator.baseScale=.3,this.animator.play("idle",8)}update(e,t){if(!this.body||this.health<=0)return;if(this.isHurt)this.hurtTimer-=e,this.hurtTimer<=0&&(this.isHurt=!1);else if(this.isAttacking)this.attackTimer-=e,this.attackTimer<=0&&(this.isAttacking=!1),Ae.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y});else if(this.attackCooldown>0&&(this.attackCooldown-=e),t){const s=t.position.x-this.body.position.x;Math.abs(s)>70?(this.direction=Math.sign(s),Ae.Body.setVelocity(this.body,{x:this.direction*this.speed,y:this.body.velocity.y})):(this.direction=Math.sign(s)||this.direction,Ae.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}),this.attackCooldown<=0&&(this.isAttacking=!0,this.attackTimer=.5,this.attackCooldown=1.5))}let i="idle";this.health<=0?i="death":this.isHurt?i="hurt":this.isAttacking?(i="attack",this.animator.setFlipX(this.direction<0)):Math.abs(this.body.velocity.x)>.1&&(i="run",this.animator.setFlipX(this.direction<0)),this.animator.play(i,8),this.animator.update(e),this.isHurt&&this.sprite.material?this.sprite.material.color.setHex(16733525):this.sprite.material&&this.sprite.material.color.setHex(16777215),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y}takeDamage(e,t){this.isHurt||this.health<=0||(this.health-=e,this.isHurt=!0,this.hurtTimer=.5,this.isAttacking=!1,Ae.Body.setVelocity(this.body,{x:t*5,y:-5}),this.health<=0&&(this.scene.remove(this.sprite),Ae.Composite.remove(this.physics.engine.world,this.body),this.body=null))}canDealDamage(){return this.isAttacking?this.attackTimer<=.3&&this.attackTimer>=.1:!1}}class cp{constructor(){this.keys={},this.justPressed={},window.addEventListener("keydown",e=>{this.keys[e.code]||(this.justPressed[e.code]=!0),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}init(){}update(){this.justPressed={}}isDown(e){return this.keys[e]===!0}isJustPressed(e){return this.justPressed[e]===!0}}class hp{constructor(e){this.scene=e,this.mesh=null,this.count=0,this.dummy=new dt}init(e){this.count=e;const t=new np,i=new Gt(2,2);t.index=i.index,t.attributes.position=i.attributes.position,t.attributes.uv=i.attributes.uv;const s=new Ct({color:65535,transparent:!0,opacity:.6});this.mesh=new kd(t,s,this.count);for(let n=0;n<this.count;n++){const o=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,c=(Math.random()-.5)*-50-10;this.dummy.position.set(o,a,c),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}this.scene.add(this.mesh)}update(e){if(!this.mesh)return;const t=Math.sin(e*.001)*.5;this.mesh.position.y+=.2,this.mesh.position.x+=t,this.mesh.updateMatrix()}}class up{constructor(){this.textureLoader=new jd,this.atlasTexture=null,this.atlasMeta=null,this.materials=new Map}async init(){try{this.atlasTexture=await this.textureLoader.loadAsync("./web/characters_atlas.webp"),this.atlasTexture.magFilter=Ze,this.atlasTexture.minFilter=Ze,this.atlasTexture.colorSpace=rt;const e=await fetch("./atlas_meta.json");if(e.ok)this.atlasMeta=await e.json();else throw new Error(`Failed to load atlas_meta.json: ${e.statusText}`);await this.loadExternalSprite("entities/villain_cleaned.png");for(let i=0;i<4;i++)for(let s=0;s<4;s++)await this.loadExternalSprite(`entities/villain_frames_4x4/villain_${i}_${s}.png`);const t=[0,1,2,3,5,6,12,17,20,21,25,28,36];for(let i of t)await this.loadExternalSprite(`entities/player_frames/player_frame_${i}.png`);return!0}catch(e){console.error("Asset Manager Initialization Error:",e);const t=document.getElementById("debug-ui");throw t&&(t.innerHTML=`
                    <div style="color:red; background:black; padding:20px; border:2px solid red;">
                        LUMEN FAILED TO LOAD<br><br>
                        Error:<br>${e.message}<br><br>
                        Open browser console for details.
                    </div>
                `),e}}async loadExternalSprite(e){try{const t=await this.textureLoader.loadAsync("./web/"+e);t.magFilter=Ze,t.minFilter=Ze,t.colorSpace=rt,this.atlasMeta[e]={x:0,y:0,width:t.image.width,height:t.image.height};const i=new Ct({map:t,transparent:!0,alphaTest:.1,side:Ut});this.materials.set(e,i)}catch{console.warn("Failed to load external sprite:",e)}}getFrameMaterial(e){if(this.materials.has(e))return this.materials.get(e);const t=this.atlasMeta[e];if(!t)return console.warn(`Frame ${e} not found in atlas.`),null;const i=this.atlasTexture.clone();i.needsUpdate=!0;const s=this.atlasTexture.image.width,n=this.atlasTexture.image.height,o=t.x/s,a=1-(t.y+t.height)/n,c=t.width/s,u=t.height/n;i.offset.set(o,a),i.repeat.set(c,u);const h=new Ct({map:i,transparent:!0,alphaTest:.1,side:Ut});return this.materials.set(e,h),h}}class fp{constructor(e){this.physics=e}checkMeleeHit(e,t,i,s){const n=e.body.position.x,o=e.body.position.y,a=t.body.position.x,c=t.body.position.y,u=a-n,h=Math.sign(u)===Math.sign(s)||Math.abs(u)<50;return console.log(`CombatCheck: Attacker Dir: ${s}, Dist: ${u}, sameDir: ${h}, dy: ${c}, ay: ${o}`),h&&Math.abs(u)<=i&&Math.abs(c-o)<100?(console.log("HIT TRUE!"),!0):!1}}class dp{constructor(){this.lightPower=0,this.maxLightPower=2,this.hasBlueCore=!1,this.hasGreenCore=!1,this.onLightChanged=null}acquireCore(e){e==="blue"&&!this.hasBlueCore?(this.hasBlueCore=!0,this.lightPower=1,this.notify()):e==="green"&&!this.hasGreenCore&&(this.hasGreenCore=!0,this.lightPower=2,this.notify())}notify(){this.onLightChanged&&this.onLightChanged(this.lightPower)}}class pp{constructor(e,t,i,s="cold_blood"){this.physics=e,this.scene=t,this.assetManager=i,this.type=s,this.body=null,this.sprite=null,this.animator=null,this.speed=1.5,this.direction=-1,this.health=300,this.isHurt=!1,this.hurtTimer=0,this.state="idle",this.stateTimer=0,this.telegraphMesh=null}async init(e,t){this.body=Ae.Bodies.rectangle(e,t,100,150,{inertia:1/0,friction:.05,frictionAir:.02,restitution:0}),Ae.Composite.add(this.physics.engine.world,this.body);const i=new Gt(1,1);this.sprite=new ft(i,new Ct({transparent:!0})),this.scene.add(this.sprite);const s={idle:["entities/villain_frames_4x4/villain_0_0.png","entities/villain_frames_4x4/villain_0_1.png","entities/villain_frames_4x4/villain_0_2.png","entities/villain_frames_4x4/villain_0_3.png"],run:["entities/villain_frames_4x4/villain_1_0.png","entities/villain_frames_4x4/villain_1_1.png","entities/villain_frames_4x4/villain_1_2.png","entities/villain_frames_4x4/villain_1_3.png"],attack:["entities/villain_frames_4x4/villain_2_0.png","entities/villain_frames_4x4/villain_2_1.png","entities/villain_frames_4x4/villain_2_2.png","entities/villain_frames_4x4/villain_2_3.png"],hurt:["entities/villain_frames_4x4/villain_3_0.png"],death:["entities/villain_frames_4x4/villain_3_2.png","entities/villain_frames_4x4/villain_3_3.png"]};this.animator=new or(this.sprite,this.assetManager,s),this.animator.baseScale=.25,this.animator.play("idle",8),this.telegraphMesh=new ft(new Gt(150,10),new Ct({color:16711680,transparent:!0,opacity:0})),this.scene.add(this.telegraphMesh)}update(e,t){if(!(!this.body||this.health<=0)){if(this.isHurt&&(this.hurtTimer-=e,this.hurtTimer<=0&&(this.isHurt=!1)),this.stateTimer-=e,this.stateTimer<=0&&this.transitionState(),this.state==="run"&&t){const i=t.position.x-this.body.position.x;Math.abs(i)>80?(this.direction=Math.sign(i),Ae.Body.setVelocity(this.body,{x:this.direction*this.speed,y:this.body.velocity.y}),this.animator.play("run")):(Ae.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}),this.stateTimer>0&&(this.state="telegraph",this.stateTimer=1))}else this.state==="idle"?(Ae.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}),this.animator.play("idle")):this.state==="telegraph"?(Ae.Body.setVelocity(this.body,{x:0,y:this.body.velocity.y}),this.telegraphMesh.material.opacity=.5+Math.sin(Date.now()*.02)*.3):this.state==="attack"&&(this.telegraphMesh.material.opacity=0,this.animator.play("attack"));this.animator.setFlipX(this.direction<0),this.animator.update(e),this.isHurt&&this.sprite.material?this.sprite.material.color.setHex(16733525):this.sprite.material&&this.sprite.material.color.setHex(16777215),this.sprite.position.x=this.body.position.x,this.sprite.position.y=-this.body.position.y,this.telegraphMesh.position.x=this.body.position.x+this.direction*75,this.telegraphMesh.position.y=-this.body.position.y-20}}transitionState(){this.state==="idle"?(this.state="run",this.stateTimer=3):this.state==="run"?(this.state="telegraph",this.stateTimer=1):this.state==="telegraph"?(this.state="attack",this.stateTimer=.5):(this.state="idle",this.stateTimer=1,this.telegraphMesh.material.opacity=0)}takeDamage(e,t){this.isHurt||this.health<=0||(this.health-=e,this.isHurt=!0,this.hurtTimer=.2,this.health<=0&&(this.scene.remove(this.sprite),this.scene.remove(this.telegraphMesh),Ae.Composite.remove(this.physics.engine.world,this.body),this.body=null))}canDealDamage(){return this.state!=="attack"?!1:this.stateTimer<=.4&&this.stateTimer>=.2}}class mp{constructor(e,t,i,s,n){this.physics=e,this.scene=t,this.biomeId=n,this.x=i,this.y=s,this.isActivated=!1,this.body=Ae.Bodies.rectangle(i,s,60,100,{isStatic:!0,isSensor:!0,label:"checkpoint"}),Ae.Composite.add(this.physics.engine.world,this.body);const o=new Rn(40,80,10);this.material=new Ct({color:5592405,transparent:!0,opacity:.8}),this.mesh=new ft(o,this.material),this.mesh.position.set(i,-s,-5),this.scene.add(this.mesh),this.light=new Jd(16711680,0,150),this.light.position.set(i,-s+20,10),this.scene.add(this.light)}activate(){this.isActivated||(this.isActivated=!0,this.material.color.setHex(65280),this.light.color.setHex(65280),this.light.intensity=2)}destroy(){Ae.Composite.remove(this.physics.engine.world,this.body),this.scene.remove(this.mesh),this.scene.remove(this.light)}}class gp{constructor(e,t,i,s,n){this.physics=e,this.scene=t,this.targetBiome=n,this.isUnlocked=!1,this.body=Ae.Bodies.rectangle(i,s,40,150,{isStatic:!0,label:"gate"}),Ae.Composite.add(this.physics.engine.world,this.body);const o=new Rn(40,150,10);this.material=new Ct({color:16711680,transparent:!0,opacity:.6}),this.mesh=new ft(o,this.material),this.mesh.position.set(i,-s,-5),this.scene.add(this.mesh)}unlock(){this.isUnlocked||(this.isUnlocked=!0,this.body.isSensor=!0,this.material.color.setHex(255),this.material.opacity=.2)}destroy(){Ae.Composite.remove(this.physics.engine.world,this.body),this.scene.remove(this.mesh)}}class vp{constructor(e){this.game=e,this.currentBiome="dark"}loadLevel(e){this.currentBiome=e,this.game.environment&&this.game.environment.loadBiome(e).catch(s=>console.error("Failed to load biome visual:",s));for(let s of this.game.platforms)this.game.renderer.scene.remove(s.mesh),Ae.Composite.remove(this.game.physics.engine.world,s.body);this.game.platforms=[];for(let s of this.game.enemies)s.body&&Ae.Composite.remove(this.game.physics.engine.world,s.body),s.sprite&&this.game.renderer.scene.remove(s.sprite);this.game.enemies=[],this.game.boss&&(this.game.boss.body&&Ae.Composite.remove(this.game.physics.engine.world,this.game.boss.body),this.game.boss.sprite&&this.game.renderer.scene.remove(this.game.boss.sprite),this.game.boss.telegraphMesh&&this.game.renderer.scene.remove(this.game.boss.telegraphMesh),this.game.boss=null),this.checkpoint&&(this.checkpoint.destroy(),this.checkpoint=null),this.gate&&(this.gate.destroy(),this.gate=null);let t=2236962;e==="ice"&&(t=8965375),e==="jungle"&&(t=2263074),e==="dark"?(this.createPlatform(300,500,600,40,t),this.createPlatform(675,400,150,20,t),this.createPlatform(1e3,500,500,40,t),this.createPlatform(1150,350,200,20,t),this.createPlatform(1600,500,600,40,t),this.game.light.hasBlueCore||this.createCore(1150,250,"blue"),this.spawnEnemy(1e3,400),this.spawnEnemy(1150,250),this.game.ui.showDialogue(["Welcome to the Dark World.","The light has faded.","Find the Blue Core to restore the Ice."])):e==="ice"?(this.createPlatform(200,500,600,40,t),this.createPlatform(550,400,150,20,t),this.createPlatform(900,600,800,40,t),this.createPlatform(1250,400,150,20,t),this.createPlatform(1600,500,600,40,t),this.game.light.hasGreenCore||this.createCore(900,450,"green"),this.spawnBoss(900,500,"cold_blood"),this.game.ui.showDialogue(["The Ice Biome.","Cold Blood guards the Green Core.","Prepare for battle."])):e==="jungle"&&(this.createPlatform(200,500,400,40,t),this.createPlatform(450,380,150,20,t),this.createPlatform(700,260,150,20,t),this.createPlatform(1100,260,600,40,t),this.createPlatform(1600,500,400,40,t),this.createPlatform(1350,380,150,20,t),this.spawnBoss(1100,150,"overgrowth"),this.game.ui.showDialogue(["The Jungle.","Overgrowth stands in your way.","Defeat it to reveal the truth."])),this.checkpoint=new mp(this.game.physics,this.game.renderer.scene,100,400,e);let i=null;e==="dark"?i="ice":e==="ice"&&(i="jungle"),i&&(this.gate=new gp(this.game.physics,this.game.renderer.scene,1500,420,i))}async spawnEnemy(e,t){const i=new lp(this.game.physics,this.game.renderer.scene,this.game.assets);await i.init(e,t),this.game.enemies.push(i)}async spawnBoss(e,t,i){this.game.boss=new pp(this.game.physics,this.game.renderer.scene,this.game.assets,i),await this.game.boss.init(e,t)}createPlatform(e,t,i,s,n){const o=Ae.Bodies.rectangle(e,t,i,s,{isStatic:!0});Ae.Composite.add(this.game.physics.engine.world,o);const a=this.game.renderer.createBox(e,t,i,s,n);this.game.platforms.push({body:o,mesh:a})}createCore(e,t,i){const s=i==="blue"?255:65280,n=Ae.Bodies.circle(e,t,20,{isStatic:!0,isSensor:!0,label:`core_${i}`});Ae.Composite.add(this.game.physics.engine.world,n);const o=this.game.renderer.createBox(e,t,40,40,s);this.game.platforms.push({body:n,mesh:o})}update(e){if(!(!e||!e.body||this.game.ui.isDead)){if(this.checkpoint&&!this.checkpoint.isActivated&&Ae.Bounds.overlaps(e.body.bounds,this.checkpoint.body.bounds)&&(this.checkpoint.activate(),this.game.respawnPoint={x:this.checkpoint.x,y:this.checkpoint.y-50,biome:this.checkpoint.biomeId},this.game.ui.showDialogue(["Checkpoint Reached.","Progress Saved."])),this.gate&&!this.gate.isUnlocked){const t=this.game.enemies.length,i=this.game.boss&&this.game.boss.health>0;t===0&&!i&&(this.gate.unlock(),this.game.ui.showDialogue(["PATH UNLOCKED"]))}if(this.gate&&Ae.Bounds.overlaps(e.body.bounds,this.gate.body.bounds)){if(this.gate.isUnlocked)this.loadLevel(this.gate.targetBiome),Ae.Body.setPosition(e.body,{x:100,y:300});else if(!this.gate.messageShown){const t=this.game.enemies.length;this.game.ui.showDialogue(["BIOME NOT CLEARED.",`${t} ENEMIES REMAIN.`]),this.gate.messageShown=!0,setTimeout(()=>{this.gate&&(this.gate.messageShown=!1)},5e3)}}}}}class _p{constructor(){this.container=document.createElement("div"),this.container.id="ui-container",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100vw",height:"100vh",pointerEvents:"none",display:"flex",flexDirection:"column",justifyContent:"space-between",fontFamily:"monospace"}),document.body.appendChild(this.container),this.hud=document.createElement("div"),Object.assign(this.hud.style,{padding:"20px",fontSize:"24px",textShadow:"2px 2px 0 #000"}),this.container.appendChild(this.hud),this.dialogueBox=document.createElement("div"),Object.assign(this.dialogueBox.style,{margin:"20px auto",width:"80%",padding:"20px",backgroundColor:"#fff",color:"#000",border:"4px solid #000",borderRadius:"10px",boxShadow:"8px 8px 0 rgba(0,0,0,0.5)",fontSize:"2vw",fontWeight:"bold",display:"none",fontFamily:'"Comic Sans MS", "Chalkboard SE", sans-serif'}),this.container.appendChild(this.dialogueBox),this.overlay=document.createElement("div"),Object.assign(this.overlay.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.8)",display:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"4vw",color:"white"}),this.container.appendChild(this.overlay),this.queue=[],this.isTyping=!1,this.currentText="",this.isPaused=!1,this.isDead=!1,this.isVictory=!1}updateHUD(e,t){e&&(this.hud.innerHTML=`HEALTH: ${Math.max(0,e.health)}/100<br>LIGHT: ${t.lightPower}/2`,e.health<=0&&!this.isDead&&this.showDeathScreen())}showDeathScreen(){this.isDead=!0,this.overlay.style.display="flex",this.overlay.innerHTML=`<div>YOU DIED</div><div style="font-size:2vw; margin-top:20px;">Press 'R' to Restart</div>`}showVictoryScreen(){this.isVictory=!0,this.overlay.style.display="flex",this.overlay.innerHTML='<div>LIGHT RESTORED</div><div style="font-size:2vw; margin-top:20px;">The Dark World is safe.</div>'}togglePause(){this.isDead||this.isVictory||(this.isPaused=!this.isPaused,this.isPaused?(this.overlay.style.display="flex",this.overlay.innerHTML=`
                <div style="text-align: center; border: 4px solid #fff; padding: 40px; background: rgba(0,0,0,0.9); border-radius: 10px;">
                    <div style="font-size: 5vw; margin-bottom: 30px;">PAUSED</div>
                    <div style="font-size: 2vw; text-align: left; margin: 0 auto; width: fit-content; line-height: 1.5;">
                        <span style="color: #aaa;">P</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Resume<br><br>
                        <span style="color: #aaa;">A / D</span> &nbsp;&nbsp; Move<br>
                        <span style="color: #aaa;">SPACE</span> &nbsp;&nbsp; Jump<br>
                        <span style="color: #aaa;">X</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Attack<br>
                        <span style="color: #aaa;">C</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Block<br><br>
                        <span style="color: #aaa;">ENTER</span> &nbsp;&nbsp; Continue Dialogue<br>
                        <span style="color: #aaa;">R</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Restart<br>
                    </div>
                    <div style="font-size: 1.5vw; margin-top: 30px; color: #888;">Press P to Resume</div>
                </div>
            `):this.overlay.style.display="none")}showDialogue(e){console.log("showDialogue called with:",e),this.queue.push(...e),!this.isTyping&&this.dialogueBox.style.display==="none"&&this.nextDialogue()}nextDialogue(){if(console.log("nextDialogue called. Queue length:",this.queue.length),this.queue.length===0){console.log("Queue empty. Hiding dialogue box."),this.dialogueBox.style.display="none";return}this.dialogueBox.style.display="block",this.currentText=this.queue.shift(),console.log("Showing text:",this.currentText),this.dialogueBox.innerHTML=this.currentText+" <br><span style='font-size:12px; color:gray'>(Press ENTER)</span>"}handleInput(e){(e.isJustPressed("Escape")||e.isJustPressed("KeyP"))&&this.togglePause(),e.isJustPressed("Enter")&&this.dialogueBox.style.display==="block"?this.enterPressed||(console.log("Enter pressed. Advancing dialogue."),this.enterPressed=!0,this.nextDialogue()):e.isJustPressed("Enter")||(this.enterPressed=!1)}}class xp{constructor(){this.context=null,this.sounds=new Map}init(){const e=window.AudioContext||window.webkitAudioContext;this.context=new e}playHit(){if(!this.context)return;const e=this.context.createOscillator(),t=this.context.createGain();e.connect(t),t.connect(this.context.destination),e.type="square",e.frequency.setValueAtTime(150,this.context.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.context.currentTime+.1),t.gain.setValueAtTime(.3,this.context.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.context.currentTime+.1),e.start(),e.stop(this.context.currentTime+.1)}playJump(){if(!this.context)return;const e=this.context.createOscillator(),t=this.context.createGain();e.connect(t),t.connect(this.context.destination),e.type="sine",e.frequency.setValueAtTime(300,this.context.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.context.currentTime+.15),t.gain.setValueAtTime(.2,this.context.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.context.currentTime+.15),e.start(),e.stop(this.context.currentTime+.15)}}class yp{constructor(e,t){this.scene=e,this.assets=t,this.layers=[],this.group=new pi,this.scene.add(this.group),this.parallaxRates={sky:.05,distant:.1,background:.25,midground:.45,foreground:1.1},this.currentBiome="dark",this.DEBUG_ENV=!1}async init(){try{const e=await fetch("./web/environments/asset_manifest.json");if(e.ok){const t=e.headers.get("content-type");if(t&&t.indexOf("application/json")!==-1)this.manifest=await e.json();else throw new Error("Manifest URL returned non-JSON content (likely a 404 fallback to index.html)")}else throw new Error(`Manifest fetch failed: ${e.status} ${e.statusText}`)}catch(e){console.warn("Failed to load environment manifest. Proceeding with blank background. Error:",e),this.manifest={assets:[]}}}async loadBiome(e){this.currentBiome=e;for(let s of this.layers)this.group.remove(s);this.layers=[];const t=(this.manifest.assets||[]).filter(s=>s.id.startsWith(e));if(e==="dark"?this.scene.background=new Ge(657946):e==="ice"?this.scene.background=new Ge(8965375):e==="jungle"&&(this.scene.background=new Ge(993818)),t.length===0)return;const i={dark_decor_1:{x:-800,y:150,z:-150,scaleY:400,parallax:.12}};for(const s of t)try{const n=`./web/environments/${s.url.replace("./","")}`,o=await this.assets.textureLoader.loadAsync(n);o.colorSpace=rt,o.minFilter=Ze,o.magFilter=Ze;let a=s.type==="background_layer";a&&(o.wrapS=Qn,o.repeat.set(4,1));let c=-300,u=0,h=1e3,p=0,f=s.parallax;if(s.id.includes("sky"))c=-500,u=300,h=2e3,f=.02;else if(s.id.includes("far"))c=-400,u=150,h=1500,f=.05;else if(s.id.includes("mid"))c=-200,u=50,h=1e3,f=.1;else if(s.id.includes("foreground"))c=-100,u=-50,h=1e3,f=.18;else if(s.id.includes("atmosphere"))c=50,u=0,h=1200,f=.08;else if(s.type==="decorative_object"){const E=i[s.id]||{x:0,y:0,z:-50,scaleY:500,parallax:.15};c=E.z,u=E.y,h=E.scaleY,p=E.x,f=E.parallax}const l=o.image.width/o.image.height,m=h*l,v=new Ct({map:o,transparent:!0,alphaTest:.1,depthWrite:!1}),d=a?new Gt(m*4,h):new Gt(m,h),g=new ft(d,v);if(g.position.set(p,u,c),g.userData={type:s.id,parallaxX:f,startX:p},this.group.add(g),this.layers.push(g),this.DEBUG_ENV){const E=new ip(g,16711680);this.group.add(E),this.layers.push(E);const y=document.getElementById("env-debug-ui")||function(){const A=document.createElement("div");return A.id="env-debug-ui",A.style.position="absolute",A.style.top="10px",A.style.right="10px",A.style.color="lime",A.style.fontFamily="monospace",A.style.pointerEvents="none",A.style.background="rgba(0,0,0,0.7)",A.style.padding="10px",document.body.appendChild(A),A}();y.innerHTML+=`[${s.id.toUpperCase()}] z:${c} plx:${f}<br>`}}catch(n){console.error(`Failed to load asset ${s.id}:`,n)}}update(e){for(let t of this.layers){const i=t.type==="BoxHelper"?t.object:t,s=i.userData.parallaxX||0,n=i.userData.startX||0;i.position.x=n+e.x*(1-s),t.type==="BoxHelper"&&t.update()}}}class Sp{constructor(){if(this.renderer=new rp,this.physics=new ap,this.input=new cp,this.assets=new up,this.combat=new fp(this.physics),this.light=new dp,this.ui=new _p,this.audio=new xp,this.levels=new vp(this),this.environment=new yp(this.renderer.scene,this.assets),this.player=null,this.enemies=[],this.boss=null,this.platforms=[],this.particles=null,this.lastTime=performance.now(),this.frameCount=0,this.fps=0,this.lastFpsTime=this.lastTime,this.DEBUG_MODE=!1,!this.DEBUG_MODE){const e=document.getElementById("debug-ui");e&&(e.style.display="none")}}async init(){await this.renderer.init(),this.audio.init(),await this.assets.init(),this.physics.init(),this.input.init(),this.player=new op(this.physics,this.renderer.scene,this.input,this.assets),await this.player.init(100,300),await this.environment.init(),await this.environment.loadBiome("dark"),this.levels.loadLevel("dark"),this.particles=new hp(this.renderer.scene),this.particles.init(1e3),requestAnimationFrame(this.loop.bind(this)),console.log("Lumen Web Boot Complete")}loop(e){const t=(e-this.lastTime)/1e3;this.lastTime=e,this.frameCount++,e-this.lastFpsTime>=1e3&&(this.fps=this.frameCount,this.frameCount=0,this.lastFpsTime=e,this.updateDebug());const i=this.ui.dialogueBox.style.display==="block";if(i||this.physics.update(1e3/60),this.player&&this.player.body){const s=this.player.body.bounds,n=Ae.Composite.allBodies(this.physics.engine.world);for(let o of n)if(o.isSensor&&o.label.startsWith("core_")&&Ae.Bounds.overlaps(s,o.bounds)){const a=o.label.split("_")[1];this.light.acquireCore(a),Ae.Composite.remove(this.physics.engine.world,o),o.label="collected",console.log(`Acquired ${a} core! LightPower is now ${this.light.lightPower}`)}}if(this.levels.update(this.player),this.ui.handleInput(this.input),this.ui.isDead&&this.input.isJustPressed("KeyR")){this.ui.isDead=!1,this.ui.overlay.style.display="none",this.player.reset(),this.respawnPoint?(this.levels.loadLevel(this.respawnPoint.biome),Ae.Body.setPosition(this.player.body,{x:this.respawnPoint.x,y:this.respawnPoint.y}),this.levels.checkpoint&&this.levels.checkpoint.activate()):(this.levels.loadLevel("dark"),Ae.Body.setPosition(this.player.body,{x:100,y:300}));return}if(this.ui.isPaused||this.ui.isDead){this.renderer.render(),this.input.update(),requestAnimationFrame(this.loop.bind(this));return}if(this.player){if(i?(Ae.Body.setVelocity(this.player.body,{x:0,y:this.player.body.velocity.y}),this.player.animator.play("idle"),this.player.animator.update(t),this.player.sprite.position.x=this.player.body.position.x,this.player.sprite.position.y=-this.player.body.position.y):(this.player.update(t),(this.player.input.isDown("ArrowUp")||this.player.input.isDown("KeyW")||this.player.input.isDown("Space"))&&this.player.isGrounded&&this.audio.playJump()),this.renderer.camera.follow(this.player.sprite.position,t),this.environment.update(this.renderer.camera.cam.position),this.ui.updateHUD(this.player,this.light),!i){if(this.player.canDealDamage()){for(let s of this.enemies)s.health>0&&this.combat.checkMeleeHit(this.player,s,80,this.player.direction)&&(s.takeDamage(10,this.player.direction),this.audio.playHit(),this.renderer.camera.shake(2,.1));this.boss&&this.boss.health>0&&this.combat.checkMeleeHit(this.player,this.boss,120,this.player.direction)&&(this.boss.takeDamage(10,this.player.direction),this.audio.playHit(),this.renderer.camera.shake(4,.15))}for(let s of this.enemies)s.health>0&&s.canDealDamage()&&!this.player.isHurt&&this.combat.checkMeleeHit(s,this.player,80,s.direction)&&(this.player.takeDamage(10,s.direction),this.audio.playHit(),this.renderer.camera.shake(5,.2));this.boss&&this.boss.health>0&&this.boss.canDealDamage()&&!this.player.isHurt&&this.combat.checkMeleeHit(this.boss,this.player,150,this.boss.direction)&&(this.player.takeDamage(20,this.boss.direction),this.audio.playHit(),this.renderer.camera.shake(8,.3))}this.player.body.position.y>1500&&this.player.health>0&&(this.player.health=0)}for(let s=this.enemies.length-1;s>=0;s--){let n=this.enemies[s];i||n.update(t,this.player?this.player.body:null),n.body||this.enemies.splice(s,1)}this.boss&&!i&&this.boss.update(t,this.player?this.player.body:null),this.particles&&this.particles.update(e),this.renderer.render(),this.input.update(),requestAnimationFrame(this.loop.bind(this))}updateDebug(){if(!this.DEBUG_MODE)return;const e=document.getElementById("debug-ui");if(e&&this.player){const t=this.player.body.position,i=this.player.animator;e.innerHTML=`
                FPS: ${this.fps}<br>
                Biome: ${this.levels.currentBiome}<br>
                Player Pos: ${Math.round(t.x)}, ${Math.round(t.y)}<br>
                Player State: ${i?i.currentState:"none"}<br>
                Player Health: ${this.player.health}<br>
                Enemies: ${this.enemies.length}<br>
                Boss Health: ${this.boss?this.boss.health:0}<br>
                LightPower: ${this.light.lightPower}<br>
            `}}}document.addEventListener("DOMContentLoaded",async()=>{window.focus();try{await new Sp().init()}catch(r){console.error("FATAL GAME INITIALIZATION ERROR:",r);const e=document.getElementById("game-container")||document.body;e.innerHTML=`
            <div style="
                position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;
                background-color: black; color: red; font-family: monospace;
                padding: 40px; box-sizing: border-box; z-index: 99999;
            ">
                <h1 style="border-bottom: 2px solid red; padding-bottom: 10px;">LUMEN FAILED TO START</h1>
                <h2 style="color: white; margin-top: 20px;">Error Details:</h2>
                <pre style="background: #220000; padding: 20px; border: 1px solid red; white-space: pre-wrap; font-size: 16px;">${r.stack||r.message||r}</pre>
                <p style="color: yellow; margin-top: 20px;">Please check the browser console and network tab for 404s or missing assets.</p>
            </div>
        `}});
