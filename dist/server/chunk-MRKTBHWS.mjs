import './polyfills.server.mjs';
import{$ as W3,A as j,Aa as X1,B as N,C as e1,D as C,E as x2,F as d,G as h,H as T,I as q1,J as B3,K as E,L as A,M as R3,N as I3,O as i1,P as p,Q as O3,R as U3,S as r1,T as s1,U as n1,V as b2,W as W1,X as G3,Y as q3,Z as t1,a as k3,b as A3,c as D3,d as F3,e as _3,ea as j3,f as J2,g as C2,ga as j1,h as g2,ha as $1,i as I,j as u2,ja as $3,k as P3,ka as r2,l as i2,la as X3,m as b,ma as Y3,n as O,na as Q3,o as D,oa as K3,p as T3,pa as J3,q as Y,r as Z2,s as c1,sa as Z3,t as a1,u as F2,v as L2,w as E3,wa as c4,x as V,y as z,z as _2,za as a4}from"./chunk-5JPHIQWK.mjs";import{a as e2,b as M2}from"./chunk-VVCT4QZE.mjs";var Y1=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=b({type:c,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"container"],[1,"text-3xl","text-center","pt-4"]],template:function(r,s){r&1&&(d(0,"div",0)(1,"p",1),p(2,"HOME PAGE"),h()())}});let a=c;return a})();var l4=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(z(_2),z(F2))},c.\u0275dir=D({type:c});let a=c;return a})(),X6=(()=>{let c=class c extends l4{};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=a1(c)))(s||c)}})(),c.\u0275dir=D({type:c,features:[j]});let a=c;return a})(),J1=new u2("");var Y6={provide:J1,useExisting:C2(()=>$),multi:!0};function Q6(){let a=$1()?$1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var K6=new u2(""),$=(()=>{let c=class c extends l4{constructor(e,r,s){super(e,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Q6())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(z(_2),z(F2),z(K6,8))},c.\u0275dir=D({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&E("input",function(t){return s._handleInput(t.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(t){return s._compositionEnd(t.target.value)})},features:[b2([Y6]),j]});let a=c;return a})();function s2(a){return a==null||(typeof a=="string"||Array.isArray(a))&&a.length===0}function f4(a){return a!=null&&typeof a.length=="number"}var p1=new u2(""),Z1=new u2(""),J6=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_=class{static min(c){return Z6(c)}static max(c){return c0(c)}static required(c){return m4(c)}static requiredTrue(c){return a0(c)}static email(c){return e0(c)}static minLength(c){return i0(c)}static maxLength(c){return r0(c)}static pattern(c){return s0(c)}static nullValidator(c){return l1(c)}static compose(c){return H4(c)}static composeAsync(c){return V4(c)}};function Z6(a){return c=>{if(s2(c.value)||s2(a))return null;let i=parseFloat(c.value);return!isNaN(i)&&i<a?{min:{min:a,actual:c.value}}:null}}function c0(a){return c=>{if(s2(c.value)||s2(a))return null;let i=parseFloat(c.value);return!isNaN(i)&&i>a?{max:{max:a,actual:c.value}}:null}}function m4(a){return s2(a.value)?{required:!0}:null}function a0(a){return a.value===!0?null:{required:!0}}function e0(a){return s2(a.value)||J6.test(a.value)?null:{email:!0}}function i0(a){return c=>s2(c.value)||!f4(c.value)?null:c.value.length<a?{minlength:{requiredLength:a,actualLength:c.value.length}}:null}function r0(a){return c=>f4(c.value)&&c.value.length>a?{maxlength:{requiredLength:a,actualLength:c.value.length}}:null}function s0(a){if(!a)return l1;let c,i;return typeof a=="string"?(i="",a.charAt(0)!=="^"&&(i+="^"),i+=a,a.charAt(a.length-1)!=="$"&&(i+="$"),c=new RegExp(i)):(i=a.toString(),c=a),e=>{if(s2(e.value))return null;let r=e.value;return c.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function l1(a){return null}function h4(a){return a!=null}function u4(a){return W3(a)?k3(a):a}function v4(a){let c={};return a.forEach(i=>{c=i!=null?e2(e2({},c),i):c}),Object.keys(c).length===0?null:c}function d4(a,c){return c.map(i=>i(a))}function n0(a){return!a.validate}function p4(a){return a.map(c=>n0(c)?c:i=>c.validate(i))}function H4(a){if(!a)return null;let c=a.filter(h4);return c.length==0?null:function(i){return v4(d4(i,c))}}function z4(a){return a!=null?H4(p4(a)):null}function V4(a){if(!a)return null;let c=a.filter(h4);return c.length==0?null:function(i){let e=d4(i,c).map(u4);return D3(e).pipe(A3(v4))}}function M4(a){return a!=null?V4(p4(a)):null}function e4(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function C4(a){return a._rawValidators}function g4(a){return a._rawAsyncValidators}function Q1(a){return a?Array.isArray(a)?a:[a]:[]}function f1(a,c){return Array.isArray(a)?a.includes(c):a===c}function i4(a,c){let i=Q1(c);return Q1(a).forEach(r=>{f1(i,r)||i.push(r)}),i}function r4(a,c){return Q1(c).filter(i=>!f1(a,i))}var m1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=z4(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=M4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},v2=class extends m1{get formDirective(){return null}get path(){return null}},d2=class extends m1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},h1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},t0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},f7=M2(e2({},t0),{"[class.ng-submitted]":"isSubmitted"}),n2=(()=>{let c=class c extends h1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(z(d2,2))},c.\u0275dir=D({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&x2("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[j]});let a=c;return a})(),H1=(()=>{let c=class c extends h1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(z(v2,10))},c.\u0275dir=D({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&x2("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[j]});let a=c;return a})();var P2="VALID",o1="INVALID",y2="PENDING",T2="DISABLED";function L4(a){return(z1(a)?a.validators:a)||null}function o0(a){return Array.isArray(a)?z4(a):a||null}function x4(a,c){return(z1(c)?c.asyncValidators:a)||null}function l0(a){return Array.isArray(a)?M4(a):a||null}function z1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function f0(a,c,i){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new J2(1e3,"");if(!e[i])throw new J2(1001,"")}function m0(a,c,i){a._forEachChild((e,r)=>{if(i[r]===void 0)throw new J2(1002,"")})}var u1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===P2}get invalid(){return this.status===o1}get pending(){return this.status==y2}get disabled(){return this.status===T2}get enabled(){return this.status!==T2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(i4(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(i4(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(r4(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(r4(c,this._rawAsyncValidators))}hasValidator(c){return f1(this._rawValidators,c)}hasAsyncValidator(c){return f1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=y2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=T2,this.errors=null,this._forEachChild(e=>{e.disable(M2(e2({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M2(e2({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=P2,this._forEachChild(e=>{e.enable(M2(e2({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(M2(e2({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===P2||this.status===y2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T2:P2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=y2,this._hasOwnPendingAsyncValidator=!0;let i=u4(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new L2,this.statusChanges=new L2}_calculateStatus(){return this._allControlsDisabled()?T2:this.errors?o1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y2)?y2:this._anyControlsHaveStatus(o1)?o1:P2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){z1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=o0(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=l0(this._rawAsyncValidators)}},N2=class extends u1{constructor(c,i,e){super(L4(i),x4(e,i)),this.controls=c,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,i){return this.controls[c]?this.controls[c]:(this.controls[c]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(c,i,e={}){this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(c,i,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],i&&this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,i={}){m0(this,!0,c),Object.keys(c).forEach(e=>{f0(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(c,i={}){c!=null&&(Object.keys(c).forEach(e=>{let r=this.controls[e];r&&r.patchValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(c={},i={}){this._forEachChild((e,r)=>{e.reset(c?c[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(c,i,e)=>(c[e]=i.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(i,e)=>e._syncPendingControls()?!0:i);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(i=>{let e=this.controls[i];e&&c(e,i)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[i,e]of Object.entries(this.controls))if(this.contains(i)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(i,e,r)=>((e.enabled||this.disabled)&&(i[r]=e.value),i))}_reduceChildren(c,i){let e=c;return this._forEachChild((r,s)=>{e=i(e,r,s)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var V1=new u2("CallSetDisabledState",{providedIn:"root",factory:()=>M1}),M1="always";function b4(a,c){return[...c.path,a]}function K1(a,c,i=M1){c3(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),u0(a,c),d0(a,c),v0(a,c),h0(a,c)}function s4(a,c,i=!0){let e=()=>{};c.valueAccessor&&(c.valueAccessor.registerOnChange(e),c.valueAccessor.registerOnTouched(e)),d1(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function v1(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function h0(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function c3(a,c){let i=C4(a);c.validator!==null?a.setValidators(e4(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=g4(a);c.asyncValidator!==null?a.setAsyncValidators(e4(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();v1(c._rawValidators,r),v1(c._rawAsyncValidators,r)}function d1(a,c){let i=!1;if(a!==null){if(c.validator!==null){let r=C4(a);if(Array.isArray(r)&&r.length>0){let s=r.filter(n=>n!==c.validator);s.length!==r.length&&(i=!0,a.setValidators(s))}}if(c.asyncValidator!==null){let r=g4(a);if(Array.isArray(r)&&r.length>0){let s=r.filter(n=>n!==c.asyncValidator);s.length!==r.length&&(i=!0,a.setAsyncValidators(s))}}}let e=()=>{};return v1(c._rawValidators,e),v1(c._rawAsyncValidators,e),i}function u0(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&y4(a,c)})}function v0(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&y4(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function y4(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function d0(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function p0(a,c){a==null,c3(a,c)}function H0(a,c){return d1(a,c)}function N4(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function z0(a){return Object.getPrototypeOf(a.constructor)===X6}function V0(a,c){a._syncPendingControls(),c.forEach(i=>{let e=i.control;e.updateOn==="submit"&&e._pendingChange&&(i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function S4(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(s=>{s.constructor===$?i=s:z0(s)?e=s:r=s}),r||e||i||null}function M0(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function n4(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function t4(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var Q=class extends u1{constructor(c=null,i,e){super(L4(i),x4(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(t4(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){n4(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){n4(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){t4(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var C0=a=>a instanceof Q;var g0={provide:d2,useExisting:C2(()=>E2)},o4=Promise.resolve(),E2=(()=>{let c=class c extends d2{constructor(e,r,s,n,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new Q,this._registered=!1,this.name="",this.update=new L2,this._parent=e,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=S4(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),N4(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){K1(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){o4.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,s=r!==0&&j1(r);o4.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?b4(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(z(v2,9),z(p1,10),z(Z1,10),z(J1,10),z(j3,8),z(V1,8))},c.\u0275dir=D({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[i2.None,"disabled","isDisabled"],model:[i2.None,"ngModel","model"],options:[i2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[b2([g0]),j,Y]});let a=c;return a})(),C1=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=D({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var w4=new u2("");var L0={provide:v2,useExisting:C2(()=>B2)},B2=(()=>{let c=class c extends v2{constructor(e,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new L2,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(d1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let r=this.form.get(e.path);return K1(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){s4(e.control||null,e,!1),M0(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,V0(this.form,this.directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,s=this.form.get(e.path);r!==s&&(s4(r||null,e),C0(s)&&(K1(s,e,this.callSetDisabledState),e.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);p0(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let r=this.form.get(e.path);r&&H0(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){c3(this.form,this),this._oldForm&&d1(this._oldForm,this)}_checkFormPresent(){this.form}};c.\u0275fac=function(r){return new(r||c)(z(p1,10),z(Z1,10),z(V1,8))},c.\u0275dir=D({type:c,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&E("submit",function(t){return s.onSubmit(t)})("reset",function(){return s.onReset()})},inputs:{form:[i2.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[b2([L0]),j,Y]});let a=c;return a})();var x0={provide:d2,useExisting:C2(()=>R2)},R2=(()=>{let c=class c extends d2{set isDisabled(e){}constructor(e,r,s,n,t){super(),this._ngModelWarningConfig=t,this._added=!1,this.name=null,this.update=new L2,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=S4(this,n)}ngOnChanges(e){this._added||this._setUpControl(),N4(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return b4(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};c._ngModelWarningSentOnce=!1,c.\u0275fac=function(r){return new(r||c)(z(v2,13),z(p1,10),z(Z1,10),z(J1,10),z(w4,8))},c.\u0275dir=D({type:c,selectors:[["","formControlName",""]],inputs:{name:[i2.None,"formControlName","name"],isDisabled:[i2.None,"disabled","isDisabled"],model:[i2.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[b2([x0]),j,Y]});let a=c;return a})();var b0=(()=>{let c=class c{constructor(){this._validator=l1}ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):l1,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=D({type:c,features:[Y]});let a=c;return a})();var y0={provide:p1,useExisting:C2(()=>I2),multi:!0};var I2=(()=>{let c=class c extends b0{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=j1,this.createValidator=e=>m4}enabled(e){return e}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=a1(c)))(s||c)}})(),c.\u0275dir=D({type:c,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&e1("required",s._enabled?"":null)},inputs:{required:"required"},features:[b2([y0]),j]});let a=c;return a})();var k4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c}),c.\u0275inj=I({});let a=c;return a})();var A4=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:V1,useValue:e.callSetDisabledState??M1}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c}),c.\u0275inj=I({imports:[k4]});let a=c;return a})(),D4=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:w4,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:V1,useValue:e.callSetDisabledState??M1}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c}),c.\u0275inj=I({imports:[k4]});let a=c;return a})();function N0(a,c){a&1&&(d(0,"div"),p(1," Email is required "),h())}function S0(a,c){a&1&&(d(0,"div"),p(1," Email is not correct "),h())}function w0(a,c){if(a&1&&(d(0,"div",11),N(1,N0,2,0,"div",12)(2,S0,2,0,"div",12),h()),a&2){let i=A();V(),C("ngIf",i.userData.controls.email.hasError("required")),V(),C("ngIf",i.userData.controls.email.hasError("email"))}}function k0(a,c){a&1&&(d(0,"div"),p(1," Password is required "),h())}function A0(a,c){a&1&&(d(0,"div"),p(1," Password should be not less then 7 symbols "),h())}function D0(a,c){if(a&1&&(d(0,"div",11),N(1,k0,2,0,"div",12)(2,A0,2,0,"div",12),h()),a&2){let i=A();V(),C("ngIf",i.userData.controls.password.hasError("required")),V(),C("ngIf",i.userData.controls.password.hasError("minlength"))}}var F4=(()=>{let c=class c{constructor(){this.userData=new N2({email:new Q("",[_.required,_.email]),password:new Q("",[_.required,_.minLength(7)])})}onSubmit(){this.userData.valid?console.log(this.userData.value):console.log("Not Valid Data")}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=b({type:c,selectors:[["app-login"]],decls:18,vars:3,consts:[[1,"max-w-[500px]","border","mx-auto","p-5","flex","flex-col","gap-5","rounded-md","mt-10","bg-rose-50",3,"ngSubmit","formGroup"],[1,"text-center","font-bold","text-2xl"],[1,"flex","flex-col","w-2/3","mx-auto"],["for","email",1,"label-form"],["required","","formControlName","email","type","Email","id","email","placeholder","Enter e-mail...",1,"input","p-1","rounded-md","shadow-xl","animate-pulse"],["class","text-rose-800 text-xs mt-2",4,"ngIf"],["for","password",1,"label-form"],["required","","formControlName","password","type","password","id","Password","placeholder","Enter password...",1,"input","p-1","rounded-md","shadow-xl"],[1,"flex","gap-20","mx-auto"],[1,"btn-confirm","border","p-3","rounded-md","shadow-xl","transition-colors"],[1,"border","border-rose-800","p-3","rounded-md","shadow-xl","hover:bg-rose-800","hover:text-rose-100","transition-colors"],[1,"text-rose-800","text-xs","mt-2"],[4,"ngIf"]],template:function(r,s){r&1&&(d(0,"form",0),E("ngSubmit",function(){return s.onSubmit()}),d(1,"h1",1),p(2,"Login Form"),h(),d(3,"div",2)(4,"label",3),p(5,"Email"),h(),T(6,"input",4),N(7,w0,3,2,"div",5),h(),d(8,"div",2)(9,"label",6),p(10,"Password"),h(),T(11,"input",7),N(12,D0,3,2,"div",5),h(),d(13,"div",8)(14,"button",9),p(15," Confirm "),h(),d(16,"button",10),p(17," Cancel "),h()()()),r&2&&(C("formGroup",s.userData),V(7),C("ngIf",s.userData.controls.email.invalid&&(s.userData.controls.email.dirty||s.userData.controls.email.touched)),V(5),C("ngIf",s.userData.controls.password.invalid&&(s.userData.controls.password.dirty||s.userData.controls.password.touched)))},dependencies:[r2,C1,$,n2,H1,I2,B2,R2]});let a=c;return a})();function F0(a,c){a&1&&(d(0,"div"),p(1," Name is required "),h())}function _0(a,c){a&1&&(d(0,"div"),p(1," Password should be not less then 2 symbols "),h())}function P0(a,c){if(a&1&&(d(0,"div",12),N(1,F0,2,0,"div",13)(2,_0,2,0,"div",13),h()),a&2){let i=A();V(),C("ngIf",i.userData.controls.email.hasError("required")),V(),C("ngIf",i.userData.controls.email.hasError("minlength"))}}function T0(a,c){a&1&&(d(0,"div"),p(1," Email is required "),h())}function E0(a,c){a&1&&(d(0,"div"),p(1," Email is not correct "),h())}function B0(a,c){if(a&1&&(d(0,"div",12),N(1,T0,2,0,"div",13)(2,E0,2,0,"div",13),h()),a&2){let i=A();V(),C("ngIf",i.userData.controls.email.hasError("required")),V(),C("ngIf",i.userData.controls.email.hasError("email"))}}function R0(a,c){a&1&&(d(0,"div"),p(1," Password is required "),h())}function I0(a,c){a&1&&(d(0,"div"),p(1," Password should be not less then 7 symbols "),h())}function O0(a,c){if(a&1&&(d(0,"div",12),N(1,R0,2,0,"div",13)(2,I0,2,0,"div",13),h()),a&2){let i=A();V(),C("ngIf",i.userData.controls.password.hasError("required")),V(),C("ngIf",i.userData.controls.password.hasError("minlength"))}}var _4=(()=>{let c=class c{constructor(){this.userData=new N2({name:new Q("",[_.required,_.minLength(2)]),email:new Q("",[_.required,_.email]),password:new Q("",[_.required,_.minLength(7)])})}onSubmit(){this.userData.valid?console.log(this.userData.value):console.log("Not Valid Data")}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=b({type:c,selectors:[["app-signup"]],decls:23,vars:4,consts:[[1,"max-w-[500px]","border","mx-auto","p-5","flex","flex-col","gap-5","rounded-md","mt-10","bg-rose-50",3,"ngSubmit","formGroup"],[1,"text-center","font-bold","text-2xl"],[1,"flex","flex-col","w-2/3","mx-auto"],["for","email",1,"label-form"],["required","","formControlName","name","type","text","id","name","placeholder","Enter your name...",1,"input","p-1","rounded-md","shadow-xl","animate-pulse"],["class","text-rose-800 text-xs mt-2",4,"ngIf"],["required","","formControlName","email","type","Email","id","email","placeholder","Enter e-mail...",1,"input","p-1","rounded-md","shadow-xl","animate-pulse"],["for","password",1,"label-form"],["required","","formControlName","password","type","password","id","Password","placeholder","Enter password...",1,"input","p-1","rounded-md","shadow-xl"],[1,"flex","gap-20","mx-auto"],[1,"btn-confirm","border","p-3","rounded-md","shadow-xl","transition-colors"],[1,"border","border-rose-800","p-3","rounded-md","shadow-xl","hover:bg-rose-800","hover:text-rose-100","transition-colors"],[1,"text-rose-800","text-xs","mt-2"],[4,"ngIf"]],template:function(r,s){r&1&&(d(0,"form",0),E("ngSubmit",function(){return s.onSubmit()}),d(1,"h1",1),p(2,"Signup Form"),h(),d(3,"div",2)(4,"label",3),p(5,"Name"),h(),T(6,"input",4),N(7,P0,3,2,"div",5),h(),d(8,"div",2)(9,"label",3),p(10,"Email"),h(),T(11,"input",6),N(12,B0,3,2,"div",5),h(),d(13,"div",2)(14,"label",7),p(15,"Password"),h(),T(16,"input",8),N(17,O0,3,2,"div",5),h(),d(18,"div",9)(19,"button",10),p(20," Confirm "),h(),d(21,"button",11),p(22," Cancel "),h()()()),r&2&&(C("formGroup",s.userData),V(7),C("ngIf",s.userData.controls.name.invalid&&(s.userData.controls.name.dirty||s.userData.controls.email.touched)),V(5),C("ngIf",s.userData.controls.email.invalid&&(s.userData.controls.email.dirty||s.userData.controls.email.touched)),V(5),C("ngIf",s.userData.controls.password.invalid&&(s.userData.controls.password.dirty||s.userData.controls.password.touched)))},dependencies:[r2,C1,$,n2,H1,I2,B2,R2]});let a=c;return a})();var P4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=b({type:c,selectors:[["app-profile"]],decls:3,vars:0,consts:[[1,"container"],[1,"text-3xl","text-center","pt-4"]],template:function(r,s){r&1&&(d(0,"div",0)(1,"p",1),p(2,"PROFILE PAGE"),h()())}});let a=c;return a})();var L1=(()=>{let c=class c{constructor(e){this.http=e,this.todos=[]}fetchTodos(){return this.http.get("https://jsonplaceholder.typicode.com/todos?_limit=6").pipe(_3(e=>this.todos=e))}onToggle(e){let r=this.todos.findIndex(s=>s.id==e);this.todos[r].completed=!this.todos[r].completed}removeTodo(e){this.todos=this.todos.filter(r=>r.id!=e)}addTodo(e){this.todos.push(e)}};c.\u0275fac=function(r){return new(r||c)(P3(X3))},c.\u0275prov=g2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var E4=(()=>{let c=class c{constructor(e){this.todosService=e,this.title=""}addTodo(){let e={title:this.title,id:Date.now(),completed:!1};this.todosService.addTodo(e),this.title=""}};c.\u0275fac=function(r){return new(r||c)(z(L1))},c.\u0275cmp=b({type:c,selectors:[["app-todo-form"]],decls:5,vars:1,consts:[[1,"container"],[1,"flex","justify-center","m-auto","w-1/2"],["type","text","placeholder","Type your to-do item... ",1,"p-2","mt-5","w-2/3",3,"ngModelChange","keydown.enter","ngModel"],[1,"btn","bg-rose-800","hover:bg-rose-50","hover:text-rose-800","ml-5","mt-5","px-10","transition-colors",3,"click"]],template:function(r,s){r&1&&(d(0,"div",0)(1,"div",1)(2,"input",2),n1("ngModelChange",function(t){return s1(s.title,t)||(s.title=t),t}),E("keydown.enter",function(){return s.addTodo()}),h(),d(3,"button",3),E("click",function(){return s.addTodo()}),p(4," Add "),h()()()),r&2&&(V(2),r1("ngModel",s.title))},dependencies:[$,n2,E2]});let a=c;return a})();var B4=(()=>{let c=class c{transform(e,r=""){return r.trim()?e.filter(s=>s.title.toLowerCase().indexOf(r.toLowerCase())!=-1):e}};c.\u0275fac=function(r){return new(r||c)},c.\u0275pipe=T3({name:"todosFilter",type:c,pure:!0});let a=c;return a})();function q0(a,c){if(a&1){let i=q1();d(0,"li",8)(1,"div",9)(2,"span",9)(3,"input",10),E("change",function(){let r=Z2(i).$implicit,s=A(3);return c1(s.onChange(r.id))}),h(),d(4,"label",11)(5,"b"),p(6),h(),p(7),h()()(),d(8,"button",12),E("click",function(){let r=Z2(i).$implicit,s=A(3);return c1(s.removeTodo(r.id))}),p(9," x "),h()()}if(a&2){let i=c.$implicit,e=c.index;V(2),x2("done",i.completed),V(),C("checked",i.completed)("id","checkbox"+e),V(),C("for","checkbox"+e),V(2),O3(e+1),V(),U3(" ",i.title," ")}}function W0(a,c){if(a&1&&(d(0,"ul",6),N(1,q0,10,7,"li",7),G3(2,"todosFilter"),h()),a&2){let i=A(2);V(),C("ngForOf",q3(2,1,i.todosService.todos,i.searchStr))}}function j0(a,c){a&1&&(d(0,"p",13),p(1," Todos list is empty... "),h())}function $0(a,c){if(a&1){let i=q1();d(0,"div")(1,"div",2),T(2,"app-todo-form"),d(3,"div",3)(4,"input",4),n1("ngModelChange",function(r){Z2(i);let s=A();return s1(s.searchStr,r)||(s.searchStr=r),c1(r)}),h()(),N(5,W0,3,4,"ul",5)(6,j0,2,0,"ng-template",null,0,t1),h()()}if(a&2){let i=i1(7),e=A();V(4),r1("ngModel",e.searchStr),V(),C("ngIf",e.todosService.todos.length)("ngIfElse",i)}}function X0(a,c){a&1&&(d(0,"p"),p(1,"Loading..."),h())}var R4=(()=>{let c=class c{constructor(e){this.todosService=e,this.loading=!0,this.searchStr=""}ngOnInit(){this.todosService.fetchTodos().pipe(F3(2e3)).subscribe(()=>{this.loading=!1})}onChange(e){this.todosService.onToggle(e)}removeTodo(e){this.todosService.removeTodo(e)}};c.\u0275fac=function(r){return new(r||c)(z(L1))},c.\u0275cmp=b({type:c,selectors:[["app-todo"]],decls:2,vars:2,consts:[["noTodos",""],[4,"ngIf"],[1,"container"],[1,"filter"],["type","text","placeholder","Filter...",1,"input",3,"ngModelChange","ngModel"],["class","flex flex-col gap-2 text-rose-50",4,"ngIf","ngIfElse"],[1,"flex","flex-col","gap-2","text-rose-50"],["class","border border-rose-50 rounded-md px-2 py-3 flex justify-between align-center",4,"ngFor","ngForOf"],[1,"border","border-rose-50","rounded-md","px-2","py-3","flex","justify-between","align-center"],[1,"flex","items-center"],["type","checkbox",1,"w-4","h-4","accent-rose-800","rounded-full","border",3,"change","checked","id"],[1,"ms-2","text-sm","font-medium",3,"for"],[1,"btn","bg-rose-100","text-rose-800","transition-colors","w-6","h-6","font-bold","hover:text-rose-50","hover:bg-rose-800",3,"click"],[1,"text-rose-100","text-center","text-xl","font-bold"]],template:function(r,s){r&1&&N(0,$0,8,3,"div",1)(1,X0,2,0,"p",1),r&2&&(C("ngIf",!s.loading),V(),C("ngIf",s.loading))},dependencies:[$3,r2,$,n2,E2,E4,B4],styles:[".item-li[_ngcontent-%COMP%]{border:1px solid gray;border-radius:5px;padding:10px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}ul[_ngcontent-%COMP%]{width:600px;margin:50px auto}.done[_ngcontent-%COMP%]{text-decoration:line-through}.filter[_ngcontent-%COMP%]{width:600px;margin:50px auto}.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}"]});let a=c;return a})();var Y0=[{path:"",component:Y1,title:"Home"},{path:"login",component:F4,title:"Login"},{path:"signup",component:_4,title:"Signup"},{path:"profile",component:P4,title:"Profile"},{path:"todo",component:R4,title:"Todo"},{path:"**",component:Y1,redirectTo:""}],I4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c}),c.\u0275inj=I({imports:[X1.forRoot(Y0),X1]});let a=c;return a})();var O4={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]};function U4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function f(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?U4(Object(i),!0).forEach(function(e){y(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):U4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function P1(a){"@babel/helpers - typeof";return P1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},P1(a)}function Q0(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function G4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function K0(a,c,i){return c&&G4(a.prototype,c),i&&G4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function y(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function H3(a,c){return Z0(a)||a8(a,c)||v6(a,c)||i8()}function Y2(a){return J0(a)||c8(a)||v6(a)||e8()}function J0(a){if(Array.isArray(a))return n3(a)}function Z0(a){if(Array.isArray(a))return a}function c8(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function a8(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,t;try{for(i=i.call(a);!(r=(n=i.next()).done)&&(e.push(n.value),!(c&&e.length===c));r=!0);}catch(o){s=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw t}}return e}}function v6(a,c){if(a){if(typeof a=="string")return n3(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n3(a,c)}}function n3(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function e8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var q4=function(){},z3={},d6={},p6=null,H6={mark:q4,measure:q4};try{typeof window<"u"&&(z3=window),typeof document<"u"&&(d6=document),typeof MutationObserver<"u"&&(p6=MutationObserver),typeof performance<"u"&&(H6=performance)}catch{}var r8=z3.navigator||{},W4=r8.userAgent,j4=W4===void 0?"":W4,o2=z3,L=d6,$4=p6,x1=H6,k7=!!o2.document,c2=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",z6=~j4.indexOf("MSIE")||~j4.indexOf("Trident/"),b1,y1,N1,S1,w1,K="___FONT_AWESOME___",t3=16,V6="fa",M6="svg-inline--fa",z2="data-fa-i2svg",o3="data-fa-pseudo-element",s8="data-fa-pseudo-element-pending",V3="data-prefix",M3="data-icon",X4="fontawesome-i2svg",n8="async",t8=["HTML","HEAD","STYLE","SCRIPT"],C6=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),g="classic",x="sharp",C3=[g,x];function Q2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[g]}})}var q2=Q2((b1={},y(b1,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(b1,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),b1)),W2=Q2((y1={},y(y1,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(y1,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),y1)),j2=Q2((N1={},y(N1,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(N1,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),N1)),o8=Q2((S1={},y(S1,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(S1,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),S1)),l8=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,g6="fa-layers-text",f8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,m8=Q2((w1={},y(w1,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(w1,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),w1)),L6=[1,2,3,4,5,6,7,8,9,10],h8=L6.concat([11,12,13,14,15,16,17,18,19,20]),u8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$2=new Set;Object.keys(W2[g]).map($2.add.bind($2));Object.keys(W2[x]).map($2.add.bind($2));var v8=[].concat(C3,Y2($2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(L6.map(function(a){return"".concat(a,"x")})).concat(h8.map(function(a){return"w-".concat(a)})),U2=o2.FontAwesomeConfig||{};function d8(a){var c=L.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function p8(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}L&&typeof L.querySelector=="function"&&(Y4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Y4.forEach(function(a){var c=H3(a,2),i=c[0],e=c[1],r=p8(d8(i));r!=null&&(U2[e]=r)}));var Y4,x6={styleDefault:"solid",familyDefault:"classic",cssPrefix:V6,replacementClass:M6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};U2.familyPrefix&&(U2.cssPrefix=U2.familyPrefix);var A2=f(f({},x6),U2);A2.autoReplaceSvg||(A2.observeMutations=!1);var u={};Object.keys(x6).forEach(function(a){Object.defineProperty(u,a,{enumerable:!0,set:function(i){A2[a]=i,G2.forEach(function(e){return e(u)})},get:function(){return A2[a]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(c){A2.cssPrefix=c,G2.forEach(function(i){return i(u)})},get:function(){return A2.cssPrefix}});o2.FontAwesomeConfig=u;var G2=[];function H8(a){return G2.push(a),function(){G2.splice(G2.indexOf(a),1)}}var t2=t3,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function z8(a){if(!(!a||!c2)){var c=L.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=L.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return L.head.insertBefore(c,e),a}}var V8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function X2(){for(var a=12,c="";a-- >0;)c+=V8[Math.random()*62|0];return c}function D2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function g3(a){return a.classList?D2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function b6(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M8(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(b6(a[i]),'" ')},"").trim()}function B1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function L3(a){return a.size!==X.size||a.x!==X.x||a.y!==X.y||a.rotate!==X.rotate||a.flipX||a.flipY}function C8(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:m}}function g8(a){var c=a.transform,i=a.width,e=i===void 0?t3:i,r=a.height,s=r===void 0?t3:r,n=a.startCentered,t=n===void 0?!1:n,o="";return t&&z6?o+="translate(".concat(c.x/t2-e/2,"em, ").concat(c.y/t2-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/t2,"em), calc(-50% + ").concat(c.y/t2,"em)) "):o+="translate(".concat(c.x/t2,"em, ").concat(c.y/t2,"em) "),o+="scale(".concat(c.size/t2*(c.flipX?-1:1),", ").concat(c.size/t2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var L8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function y6(){var a=V6,c=M6,i=u.cssPrefix,e=u.replacementClass,r=L8;if(i!==a||e!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),n=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var Q4=!1;function e3(){u.autoAddCss&&!Q4&&(z8(y6()),Q4=!0)}var x8={mixout:function(){return{dom:{css:y6,insertCss:e3}}},hooks:function(){return{beforeDOMElementCreation:function(){e3()},beforeI2svg:function(){e3()}}}},J=o2||{};J[K]||(J[K]={});J[K].styles||(J[K].styles={});J[K].hooks||(J[K].hooks={});J[K].shims||(J[K].shims=[]);var G=J[K],N6=[],b8=function a(){L.removeEventListener("DOMContentLoaded",a),T1=1,N6.map(function(c){return c()})},T1=!1;c2&&(T1=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),T1||L.addEventListener("DOMContentLoaded",b8));function y8(a){c2&&(T1?setTimeout(a,0):N6.push(a))}function K2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,s=r===void 0?[]:r;return typeof a=="string"?b6(a):"<".concat(c," ").concat(M8(e),">").concat(s.map(K2).join(""),"</").concat(c,">")}function K4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var N8=function(c,i){return function(e,r,s,n){return c.call(i,e,r,s,n)}},i3=function(c,i,e,r){var s=Object.keys(c),n=s.length,t=r!==void 0?N8(i,r):i,o,m,l;for(e===void 0?(o=1,l=c[s[0]]):(o=0,l=e);o<n;o++)m=s[o],l=t(l,c[m],m,c);return l};function S8(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=a.charCodeAt(i++);(s&64512)==56320?c.push(((r&1023)<<10)+(s&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function l3(a){var c=S8(a);return c.length===1?c[0].toString(16):null}function w8(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function J4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function f3(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=J4(c);typeof G.hooks.addPack=="function"&&!r?G.hooks.addPack(a,J4(c)):G.styles[a]=f(f({},G.styles[a]||{}),s),a==="fas"&&f3("fa",c)}var k1,A1,D1,S2=G.styles,k8=G.shims,A8=(k1={},y(k1,g,Object.values(j2[g])),y(k1,x,Object.values(j2[x])),k1),x3=null,S6={},w6={},k6={},A6={},D6={},D8=(A1={},y(A1,g,Object.keys(q2[g])),y(A1,x,Object.keys(q2[x])),A1);function F8(a){return~v8.indexOf(a)}function _8(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!F8(r)?r:null}var F6=function(){var c=function(s){return i3(S2,function(n,t,o){return n[o]=i3(t,s,{}),n},{})};S6=c(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=n})}return r}),w6=c(function(r,s,n){if(r[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=n})}return r}),D6=c(function(r,s,n){var t=s[2];return r[n]=n,t.forEach(function(o){r[o]=n}),r});var i="far"in S2||u.autoFetchSvg,e=i3(k8,function(r,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!i&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});k6=e.names,A6=e.unicodes,x3=R1(u.styleDefault,{family:u.familyDefault})};H8(function(a){x3=R1(a.styleDefault,{family:u.familyDefault})});F6();function b3(a,c){return(S6[a]||{})[c]}function P8(a,c){return(w6[a]||{})[c]}function H2(a,c){return(D6[a]||{})[c]}function _6(a){return k6[a]||{prefix:null,iconName:null}}function T8(a){var c=A6[a],i=b3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function l2(){return x3}var y3=function(){return{prefix:null,iconName:null,rest:[]}};function R1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?g:i,r=q2[e][a],s=W2[e][a]||W2[e][r],n=a in G.styles?a:null;return s||n||null}var Z4=(D1={},y(D1,g,Object.keys(j2[g])),y(D1,x,Object.keys(j2[x])),D1);function I1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(c={},y(c,g,"".concat(u.cssPrefix,"-").concat(g)),y(c,x,"".concat(u.cssPrefix,"-").concat(x)),c),n=null,t=g;(a.includes(s[g])||a.some(function(m){return Z4[g].includes(m)}))&&(t=g),(a.includes(s[x])||a.some(function(m){return Z4[x].includes(m)}))&&(t=x);var o=a.reduce(function(m,l){var v=_8(u.cssPrefix,l);if(S2[l]?(l=A8[t].includes(l)?o8[t][l]:l,n=l,m.prefix=l):D8[t].indexOf(l)>-1?(n=l,m.prefix=R1(l,{family:t})):v?m.iconName=v:l!==u.replacementClass&&l!==s[g]&&l!==s[x]&&m.rest.push(l),!r&&m.prefix&&m.iconName){var H=n==="fa"?_6(m.iconName):{},M=H2(m.prefix,m.iconName);H.prefix&&(n=null),m.iconName=H.iconName||M||m.iconName,m.prefix=H.prefix||m.prefix,m.prefix==="far"&&!S2.far&&S2.fas&&!u.autoFetchSvg&&(m.prefix="fas")}return m},y3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===x&&(S2.fass||u.autoFetchSvg)&&(o.prefix="fass",o.iconName=H2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=l2()||"fas"),o}var E8=function(){function a(){Q0(this,a),this.definitions={}}return K0(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){i.definitions[t]=f(f({},i.definitions[t]||{}),n[t]),f3(t,n[t]);var o=j2[g][t];o&&f3(o,n[t]),F6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],t=n.prefix,o=n.iconName,m=n.icon,l=m[2];i[t]||(i[t]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(i[t][v]=m)}),i[t][o]=m}),i}}]),a}(),c6=[],w2={},k2={},B8=Object.keys(k2);function R8(a,c){var i=c.mixoutsTo;return c6=a,w2={},Object.keys(k2).forEach(function(e){B8.indexOf(e)===-1&&delete k2[e]}),c6.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),P1(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){i[n]||(i[n]={}),i[n][t]=r[n][t]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){w2[n]||(w2[n]=[]),w2[n].push(s[n])})}e.provides&&e.provides(k2)}),i}function m3(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=w2[a]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(e))}),c}function V2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=w2[a]||[];r.forEach(function(s){s.apply(null,i)})}function Z(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return k2[a]?k2[a].apply(null,c):void 0}function h3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||l2();if(c)return c=H2(i,c)||c,K4(P6.definitions,i,c)||K4(G.styles,i,c)}var P6=new E8,I8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,V2("noAuto")},O8={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return c2?(V2("beforeI2svg",c),Z("pseudoElements2svg",c),Z("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,y8(function(){G8({autoReplaceSvgRoot:i}),V2("watch",c)})}},U8={icon:function(c){if(c===null)return null;if(P1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:H2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=R1(c[0]);return{prefix:e,iconName:H2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(u.cssPrefix,"-"))>-1||c.match(l8))){var r=I1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||l2(),iconName:H2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var s=l2();return{prefix:s,iconName:H2(s,c)||c}}}},B={noAuto:I8,config:u,dom:O8,parse:U8,library:P6,findIconDefinition:h3,toHtml:K2},G8=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?L:i;(Object.keys(G.styles).length>0||u.autoFetchSvg)&&c2&&u.autoReplaceSvg&&B.dom.i2svg({node:e})};function O1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return K2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(c2){var e=L.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function q8(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,s=a.styles,n=a.transform;if(L3(n)&&i.found&&!e.found){var t=i.width,o=i.height,m={x:t/o/2,y:.5};r.style=B1(f(f({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function W8(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,s=a.symbol,n=s===!0?"".concat(c,"-").concat(u.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:n}),children:e}]}]}function N3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,s=a.iconName,n=a.transform,t=a.symbol,o=a.title,m=a.maskId,l=a.titleId,v=a.extra,H=a.watchable,M=H===void 0?!1:H,w=e.found?e:i,R=w.width,U=w.height,q=r==="fak",S=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(a2){return v.classes.indexOf(a2)===-1}).filter(function(a2){return a2!==""||!!a2}).concat(v.classes).join(" "),k={children:[],attributes:f(f({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:S,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(U)})},W=q&&!~v.classes.indexOf("fa-fw")?{width:"".concat(R/U*16*.0625,"em")}:{};M&&(k.attributes[z2]=""),o&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(l||X2())},children:[o]}),delete k.attributes.title);var P=f(f({},k),{},{prefix:r,iconName:s,main:i,mask:e,maskId:m,transform:n,symbol:t,styles:f(f({},W),v.styles)}),m2=e.found&&i.found?Z("generateAbstractMask",P)||{children:[],attributes:{}}:Z("generateAbstractIcon",P)||{children:[],attributes:{}},h2=m2.children,G1=m2.attributes;return P.children=h2,P.attributes=G1,t?W8(P):q8(P)}function a6(a){var c=a.content,i=a.width,e=a.height,r=a.transform,s=a.title,n=a.extra,t=a.watchable,o=t===void 0?!1:t,m=f(f(f({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(m[z2]="");var l=f({},n.styles);L3(r)&&(l.transform=g8({transform:r,startCentered:!0,width:i,height:e}),l["-webkit-transform"]=l.transform);var v=B1(l);v.length>0&&(m.style=v);var H=[];return H.push({tag:"span",attributes:m,children:[c]}),s&&H.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),H}function j8(a){var c=a.content,i=a.title,e=a.extra,r=f(f(f({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=B1(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[c]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var r3=G.styles;function u3(a){var c=a[0],i=a[1],e=a.slice(4),r=H3(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:i,icon:n}}var $8={found:!1,width:512,height:512};function X8(a,c){!C6&&!u.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function v3(a,c){var i=c;return c==="fa"&&u.styleDefault!==null&&(c=l2()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:Z("missingIconAbstract")||{}};if(i==="fa"){var n=_6(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&r3[c]&&r3[c][a]){var t=r3[c][a];return e(u3(t))}X8(a,c),e(f(f({},$8),{},{icon:u.showMissingIcons&&a?Z("missingIconAbstract")||{}:{}}))})}var e6=function(){},d3=u.measurePerformance&&x1&&x1.mark&&x1.measure?x1:{mark:e6,measure:e6},O2='FA "6.5.2"',Y8=function(c){return d3.mark("".concat(O2," ").concat(c," begins")),function(){return T6(c)}},T6=function(c){d3.mark("".concat(O2," ").concat(c," ends")),d3.measure("".concat(O2," ").concat(c),"".concat(O2," ").concat(c," begins"),"".concat(O2," ").concat(c," ends"))},S3={begin:Y8,end:T6},F1=function(){};function i6(a){var c=a.getAttribute?a.getAttribute(z2):null;return typeof c=="string"}function Q8(a){var c=a.getAttribute?a.getAttribute(V3):null,i=a.getAttribute?a.getAttribute(M3):null;return c&&i}function K8(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(u.replacementClass)}function J8(){if(u.autoReplaceSvg===!0)return _1.replace;var a=_1[u.autoReplaceSvg];return a||_1.replace}function Z8(a){return L.createElementNS("http://www.w3.org/2000/svg",a)}function c5(a){return L.createElement(a)}function E6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?Z8:c5:i;if(typeof a=="string")return L.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(n){r.setAttribute(n,a.attributes[n])});var s=a.children||[];return s.forEach(function(n){r.appendChild(E6(n,{ceFn:e}))}),r}function a5(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var _1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(E6(r),i)}),i.getAttribute(z2)===null&&u.keepOriginalSource){var e=L.createComment(a5(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~g3(i).indexOf(u.replacementClass))return _1.replace(c);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(t,o){return o===u.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(t){return K2(t)}).join(`
`);i.setAttribute(z2,""),i.innerHTML=n}};function r6(a){a()}function B6(a,c){var i=typeof c=="function"?c:F1;if(a.length===0)i();else{var e=r6;u.mutateApproach===n8&&(e=o2.requestAnimationFrame||r6),e(function(){var r=J8(),s=S3.begin("mutate");a.map(r),s(),i()})}}var w3=!1;function R6(){w3=!0}function p3(){w3=!1}var E1=null;function s6(a){if($4&&u.observeMutations){var c=a.treeCallback,i=c===void 0?F1:c,e=a.nodeCallback,r=e===void 0?F1:e,s=a.pseudoElementsCallback,n=s===void 0?F1:s,t=a.observeMutationsRoot,o=t===void 0?L:t;E1=new $4(function(m){if(!w3){var l=l2();D2(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!i6(v.addedNodes[0])&&(u.searchPseudoElements&&n(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&u.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&i6(v.target)&&~u8.indexOf(v.attributeName))if(v.attributeName==="class"&&Q8(v.target)){var H=I1(g3(v.target)),M=H.prefix,w=H.iconName;v.target.setAttribute(V3,M||l),w&&v.target.setAttribute(M3,w)}else K8(v.target)&&r(v.target)})}}),c2&&E1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function e5(){E1&&E1.disconnect()}function i5(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(e[n]=t.join(":").trim()),e},{})),i}function r5(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=I1(g3(a));return r.prefix||(r.prefix=l2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=P8(r.prefix,a.innerText)||b3(r.prefix,l3(a.innerText))),!r.iconName&&u.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function s5(a){var c=D2(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return u.autoA11y&&(i?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(e||X2()):(c["aria-hidden"]="true",c.focusable="false")),c}function n5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=r5(a),e=i.iconName,r=i.prefix,s=i.rest,n=s5(a),t=m3("parseNodeAttributes",{},a),o=c.styleParser?i5(a):[];return f({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var t5=G.styles;function I6(a){var c=u.autoReplaceSvg==="nest"?n6(a,{styleParser:!1}):n6(a);return~c.extra.classes.indexOf(g6)?Z("generateLayersText",a,c):Z("generateSvgReplacementMutation",a,c)}var f2=new Set;C3.map(function(a){f2.add("fa-".concat(a))});Object.keys(q2[g]).map(f2.add.bind(f2));Object.keys(q2[x]).map(f2.add.bind(f2));f2=Y2(f2);function t6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!c2)return Promise.resolve();var i=L.documentElement.classList,e=function(v){return i.add("".concat(X4,"-").concat(v))},r=function(v){return i.remove("".concat(X4,"-").concat(v))},s=u.autoFetchSvg?f2:C3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(t5));s.includes("fa")||s.push("fa");var n=[".".concat(g6,":not([").concat(z2,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(z2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=D2(a.querySelectorAll(n))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=S3.begin("onTree"),m=t.reduce(function(l,v){try{var H=I6(v);H&&l.push(H)}catch(M){C6||M.name==="MissingIcon"&&console.error(M)}return l},[]);return new Promise(function(l,v){Promise.all(m).then(function(H){B6(H,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(H){o(),v(H)})})}function o5(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;I6(a).then(function(i){i&&B6([i],c)})}function l5(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:h3(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:h3(r||{})),a(e,f(f({},i),{},{mask:r}))}}var f5=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?X:e,s=i.symbol,n=s===void 0?!1:s,t=i.mask,o=t===void 0?null:t,m=i.maskId,l=m===void 0?null:m,v=i.title,H=v===void 0?null:v,M=i.titleId,w=M===void 0?null:M,R=i.classes,U=R===void 0?[]:R,q=i.attributes,S=q===void 0?{}:q,k=i.styles,W=k===void 0?{}:k;if(c){var P=c.prefix,m2=c.iconName,h2=c.icon;return O1(f({type:"icon"},c),function(){return V2("beforeDOMElementCreation",{iconDefinition:c,params:i}),u.autoA11y&&(H?S["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(w||X2()):(S["aria-hidden"]="true",S.focusable="false")),N3({icons:{main:u3(h2),mask:o?u3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:m2,transform:f(f({},X),r),symbol:n,title:H,maskId:l,titleId:w,extra:{attributes:S,styles:W,classes:U}})})}},m5={mixout:function(){return{icon:l5(f5)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=t6,i.nodeCallback=o5,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?L:e,s=i.callback,n=s===void 0?function(){}:s;return t6(r,n)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,t=e.prefix,o=e.transform,m=e.symbol,l=e.mask,v=e.maskId,H=e.extra;return new Promise(function(M,w){Promise.all([v3(r,t),l.iconName?v3(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var U=H3(R,2),q=U[0],S=U[1];M([i,N3({icons:{main:q,mask:S},prefix:t,iconName:r,transform:o,symbol:m,maskId:v,title:s,titleId:n,extra:H,watchable:!0})])}).catch(w)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,t=i.styles,o=B1(t);o.length>0&&(r.style=o);var m;return L3(n)&&(m=Z("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:r}}}},h5={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return O1({type:"layer"},function(){V2("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(Y2(s)).join(" ")},children:n}]})}}}},u5={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,t=n===void 0?[]:n,o=e.attributes,m=o===void 0?{}:o,l=e.styles,v=l===void 0?{}:l;return O1({type:"counter",content:i},function(){return V2("beforeDOMElementCreation",{content:i,params:e}),j8({content:i.toString(),title:s,extra:{attributes:m,styles:v,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(Y2(t))}})})}}}},v5={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?X:r,n=e.title,t=n===void 0?null:n,o=e.classes,m=o===void 0?[]:o,l=e.attributes,v=l===void 0?{}:l,H=e.styles,M=H===void 0?{}:H;return O1({type:"text",content:i},function(){return V2("beforeDOMElementCreation",{content:i,params:e}),a6({content:i,transform:f(f({},X),s),title:t,extra:{attributes:v,styles:M,classes:["".concat(u.cssPrefix,"-layers-text")].concat(Y2(m))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,t=null,o=null;if(z6){var m=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();t=l.width/m,o=l.height/m}return u.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,a6({content:i.innerHTML,width:t,height:o,transform:s,title:r,extra:n,watchable:!0})])}}},d5=new RegExp('"',"ug"),o6=[1105920,1112319];function p5(a){var c=a.replace(d5,""),i=w8(c,0),e=i>=o6[0]&&i<=o6[1],r=c.length===2?c[0]===c[1]:!1;return{value:l3(r?c[0]:c),isSecondary:e||r}}function l6(a,c){var i="".concat(s8).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var s=D2(a.children),n=s.filter(function(h2){return h2.getAttribute(o3)===c})[0],t=o2.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(f8),m=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return a.removeChild(n),e();if(o&&l!=="none"&&l!==""){var v=t.getPropertyValue("content"),H=~["Sharp"].indexOf(o[2])?x:g,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?W2[H][o[2].toLowerCase()]:m8[H][m],w=p5(v),R=w.value,U=w.isSecondary,q=o[0].startsWith("FontAwesome"),S=b3(M,R),k=S;if(q){var W=T8(R);W.iconName&&W.prefix&&(S=W.iconName,M=W.prefix)}if(S&&!U&&(!n||n.getAttribute(V3)!==M||n.getAttribute(M3)!==k)){a.setAttribute(i,k),n&&a.removeChild(n);var P=n5(),m2=P.extra;m2.attributes[o3]=c,v3(S,M).then(function(h2){var G1=N3(f(f({},P),{},{icons:{main:h2,mask:y3()},prefix:M,iconName:k,extra:m2,watchable:!0})),a2=L.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(a2,a.firstChild):a.appendChild(a2),a2.outerHTML=G1.map(function($6){return K2($6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function H5(a){return Promise.all([l6(a,"::before"),l6(a,"::after")])}function z5(a){return a.parentNode!==document.head&&!~t8.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(o3)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function f6(a){if(c2)return new Promise(function(c,i){var e=D2(a.querySelectorAll("*")).filter(z5).map(H5),r=S3.begin("searchPseudoElements");R6(),Promise.all(e).then(function(){r(),p3(),c()}).catch(function(){r(),p3(),i()})})}var V5={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=f6,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?L:e;u.searchPseudoElements&&f6(r)}}},m6=!1,M5={mixout:function(){return{dom:{unwatch:function(){R6(),m6=!0}}}},hooks:function(){return{bootstrap:function(){s6(m3("mutationObserverCallbacks",{}))},noAuto:function(){e5()},watch:function(i){var e=i.observeMutationsRoot;m6?p3():s6(m3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},h6=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return e.flipX=!0,e;if(n&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(n){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},C5={mixout:function(){return{parse:{transform:function(i){return h6(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=h6(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(o," ").concat(m," ").concat(l)},H={transform:"translate(".concat(n/2*-1," -256)")},M={outer:t,inner:v,path:H};return{tag:"g",attributes:f({},M.outer),children:[{tag:"g",attributes:f({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),M.path)}]}]}}}},s3={x:0,y:0,width:"100%",height:"100%"};function u6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function g5(a){return a.tag==="g"?a.children:[a]}var L5={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?I1(r.split(" ").map(function(n){return n.trim()})):y3();return s.prefix||(s.prefix=l2()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,t=i.maskId,o=i.transform,m=s.width,l=s.icon,v=n.width,H=n.icon,M=C8({transform:o,containerWidth:v,iconWidth:m}),w={tag:"rect",attributes:f(f({},s3),{},{fill:"white"})},R=l.children?{children:l.children.map(u6)}:{},U={tag:"g",attributes:f({},M.inner),children:[u6(f({tag:l.tag,attributes:f(f({},l.attributes),M.path)},R))]},q={tag:"g",attributes:f({},M.outer),children:[U]},S="mask-".concat(t||X2()),k="clip-".concat(t||X2()),W={tag:"mask",attributes:f(f({},s3),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,q]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:g5(H)},W]};return e.push(P,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(S,")")},s3)}),{children:e,attributes:r}}}},x5={provides:function(c){var i=!1;o2.matchMedia&&(i=o2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=f(f({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:f(f({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:f(f({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},b5={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},y5=[x8,m5,h5,u5,v5,V5,M5,C5,L5,x5,b5];R8(y5,{mixoutsTo:B});var A7=B.noAuto,D7=B.config,F7=B.library,_7=B.dom,O6=B.parse,P7=B.findIconDefinition,T7=B.toHtml,U6=B.icon,E7=B.layer,N5=B.text,S5=B.counter;var w5=["*"],k5=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},A5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},D5=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},F5=a=>a.prefix!==void 0&&a.iconName!==void 0,_5=(a,c)=>F5(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},P5=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=g2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),T5=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=g2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),E5=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=D({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Y]});let a=c;return a})(),B5=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(z(_2),z(F2))},c.\u0275cmp=b({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Y,W1],ngContentSelectors:w5,decls:1,vars:0,template:function(r,s){r&1&&(R3(),I3(0))},encapsulation:2});let a=c;return a})(),G6=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,t){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){A5();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=_5(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(k5(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?O6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...D5(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=U6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(z(K3),z(P5),z(T5),z(E5,8),z(B5,8))},c.\u0275cmp=b({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(B3("innerHTML",s.renderedIconHTML,E3),e1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Y,W1],decls:0,vars:0,template:function(r,s){},encapsulation:2});let a=c;return a})();var q6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c}),c.\u0275inj=I({});let a=c;return a})();function O5(a,c){if(a&1&&(d(0,"nav",5)(1,"ul",6)(2,"li",7)(3,"a",8),p(4,"Home"),h()(),d(5,"li",7)(6,"a",9),p(7,"Profile"),h()(),d(8,"li",7)(9,"a",10),p(10,"To do list"),h()(),d(11,"li")(12,"button"),T(13,"fa-icon",11),h()()()()),a&2){let i=A();V(13),C("icon",i.logoutIcon)}}function U5(a,c){a&1&&(d(0,"ul",12)(1,"li",7)(2,"a",13),p(3,"Signup"),h()(),d(4,"li",7)(5,"a",14),p(6,"Login"),h()()())}var W6=(()=>{let c=class c{constructor(){this.isAuth=!0,this.logoutIcon=O4}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=b({type:c,selectors:[["app-header"]],decls:8,vars:2,consts:[["isNotAuth",""],[1,"container","mx-auto","grid","grid-cols-1","gap-5","justify-between","bg-zinc-900"],[1,"menu-header"],["href","",1,"logo","text-rose-50"],["class","flex justify-end",4,"ngIf","ngIfElse"],[1,"flex","justify-end"],[1,"flex","gap-10","menu","text-rose-50"],[1,"hover:text-rose-800","transition-colors"],["routerLink",""],["routerLink","profile"],["routerLink","todo"],[3,"icon"],[1,"flex","gap-10","menu"],["routerLink","signup"],["routerLink","login"]],template:function(r,s){if(r&1&&(d(0,"header")(1,"div",1)(2,"div",2)(3,"a",3),p(4,"Logo"),h(),N(5,O5,14,1,"nav",4)(6,U5,7,0,"ng-template",null,0,t1),h()()()),r&2){let n=i1(7);V(5),C("ngIf",s.isAuth)("ngIfElse",n)}},dependencies:[r2,a4,G6],styles:[".menu-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:15px;width:100%;color:#fff}.menu-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:bold;font-size:25px}.menu-header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{align-items:center}"]});let a=c;return a})();var U1=(()=>{let c=class c{constructor(){this.title="todo-angular"}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=b({type:c,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"min-h-full","bg-rose-400"]],template:function(r,s){r&1&&(d(0,"main",0),T(1,"app-header")(2,"router-outlet"),h())},dependencies:[c4,W6]});let a=c;return a})();var j6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c,bootstrap:[U1]}),c.\u0275inj=I({providers:[J3()],imports:[Q3,I4,q6,D4,Y3,A4]});let a=c;return a})();var q5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=O({type:c,bootstrap:[U1]}),c.\u0275inj=I({imports:[j6,Z3]});let a=c;return a})();export{q5 as a};
