/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../components/non-bindable/non-bindable';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_IgnoreBindings {
  /*private*/ _eventHandler:Function;
  context:import0.IgnoreBindings;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.IgnoreBindings();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_IgnoreBindings_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_IgnoreBindings_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.IgnoreBindings>;
  _IgnoreBindings_0_3:Wrapper_IgnoreBindings;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_IgnoreBindings_Host0,renderType_IgnoreBindings_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ignore-bindings',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_IgnoreBindings0(this.viewUtils,this,0,this._el_0);
    this._IgnoreBindings_0_3 = new Wrapper_IgnoreBindings();
    this.compView_0.create(this._IgnoreBindings_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._IgnoreBindings_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.IgnoreBindings) && (0 === requestNodeIndex))) { return this._IgnoreBindings_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._IgnoreBindings_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const IgnoreBindingsNgFactory:import7.ComponentFactory<import0.IgnoreBindings> = new import7.ComponentFactory<import0.IgnoreBindings>('ignore-bindings',View_IgnoreBindings_Host0,import0.IgnoreBindings);
const styles_IgnoreBindings:any[] = ([] as any[]);
var renderType_IgnoreBindings:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_IgnoreBindings,{});
export class View_IgnoreBindings0 extends import1.AppView<import0.IgnoreBindings> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_IgnoreBindings0,renderType_IgnoreBindings,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_15 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Ignoring Bindings',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Ignored Binding:\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'ngNonBindable',''),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'{{10 * 10}}',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n    Executed Binding:\n    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_15:any = import3.inlineInterpolate(1,'',(10 * 10),'');
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_12,currVal_15);
      this._expr_15 = currVal_15;
    }
  }
}