/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../components/input-controls/input-controls';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import9 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/control_value_accessor';
import * as import18 from '@angular/forms/src/directives/ng_model';
import * as import19 from '@angular/forms/src/directives/ng_control';
import * as import20 from '@angular/forms/src/directives/ng_control_status';
import * as import21 from '@angular/common/src/directives/ng_if';
export class Wrapper_InputControls {
  /*private*/ _eventHandler:Function;
  context:import0.InputControls;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.InputControls();
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
var renderType_InputControls_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_InputControls_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.InputControls>;
  _InputControls_0_3:Wrapper_InputControls;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InputControls_Host0,renderType_InputControls_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'input-controls',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_InputControls0(this.viewUtils,this,0,this._el_0);
    this._InputControls_0_3 = new Wrapper_InputControls();
    this.compView_0.create(this._InputControls_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._InputControls_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.InputControls) && (0 === requestNodeIndex))) { return this._InputControls_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InputControls_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const InputControlsNgFactory:import7.ComponentFactory<import0.InputControls> = new import7.ComponentFactory<import0.InputControls>('input-controls',View_InputControls_Host0,import0.InputControls);
const styles_InputControls:any[] = ([] as any[]);
var renderType_InputControls:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_InputControls,{});
export class View_InputControls0 extends import1.AppView<import0.InputControls> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _DefaultValueAccessor_9_3:import8.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_9_4:any[];
  _NgModel_9_5:import9.Wrapper_NgModel;
  _NgControl_9_6:any;
  _NgControlStatus_9_7:import10.Wrapper_NgControlStatus;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _el_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _el_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _text_62:any;
  _text_63:any;
  _el_64:any;
  _text_65:any;
  _el_66:any;
  _text_67:any;
  _el_68:any;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  _text_72:any;
  _el_73:any;
  _text_74:any;
  _el_75:any;
  _text_76:any;
  _anchor_77:any;
  /*private*/ _vc_77:import11.ViewContainer;
  _TemplateRef_77_5:any;
  _NgIf_77_6:import12.Wrapper_NgIf;
  _text_78:any;
  _anchor_79:any;
  /*private*/ _vc_79:import11.ViewContainer;
  _TemplateRef_79_5:any;
  _NgIf_79_6:import12.Wrapper_NgIf;
  _text_80:any;
  _anchor_81:any;
  /*private*/ _vc_81:import11.ViewContainer;
  _TemplateRef_81_5:any;
  _NgIf_81_6:import12.Wrapper_NgIf;
  _text_82:any;
  _text_83:any;
  _text_84:any;
  _el_85:any;
  _el_86:any;
  _text_87:any;
  /*private*/ _expr_102:any;
  /*private*/ _expr_103:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InputControls0,renderType_InputControls,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_102 = import13.UNINITIALIZED;
    this._expr_103 = import13.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n            ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Input Controls',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n            ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','input-controls'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'"Two way bindings"',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n\n                ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_4,'input',new import3.InlineArray2(2,'id','name'),(null as any));
    this._DefaultValueAccessor_9_3 = new import8.Wrapper_DefaultValueAccessor(this.renderer,new import14.ElementRef(this._el_9));
    this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3.context];
    this._NgModel_9_5 = new import9.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_9_4);
    this._NgControl_9_6 = this._NgModel_9_5.context;
    this._NgControlStatus_9_7 = new import10.Wrapper_NgControlStatus(this._NgControl_9_6);
    this._text_10 = this.renderer.createText(this._el_4,'\n\n                ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_4,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n            ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','input-controls'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'Select a gender',(null as any));
    this._text_19 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_15,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n                    ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_20,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n                        ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'input',new import3.InlineArray8(6,'name','gender','type','radio','value','Male'),(null as any));
    this._text_25 = this.renderer.createText(this._el_22,'\n                        Male\n                    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_20,'\n                ',(null as any));
    this._text_27 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_15,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'\n                    ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_28,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'\n                        ',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,this._el_30,'input',new import3.InlineArray8(6,'name','gender','type','radio','value','Female'),(null as any));
    this._text_33 = this.renderer.createText(this._el_30,'\n                        Female\n                    ',(null as any));
    this._text_34 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._text_35 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_36 = import3.createRenderElement(this.renderer,this._el_15,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'\n                    Selected gender is ',(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,this._el_36,'strong',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_39 = this.renderer.createText(this._el_38,'',(null as any));
    this._text_40 = this.renderer.createText(this._el_36,'\n                ',(null as any));
    this._text_41 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._text_42 = this.renderer.createText(parentRenderNode,'\n\n            ',(null as any));
    this._el_43 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','input-controls'),(null as any));
    this._text_44 = this.renderer.createText(this._el_43,'\n                ',(null as any));
    this._el_45 = import3.createRenderElement(this.renderer,this._el_43,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'Select your programming skills',(null as any));
    this._text_47 = this.renderer.createText(this._el_43,'\n                ',(null as any));
    this._el_48 = import3.createRenderElement(this.renderer,this._el_43,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'\n                    ',(null as any));
    this._el_50 = import3.createRenderElement(this.renderer,this._el_48,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_51 = this.renderer.createText(this._el_50,'\n                        ',(null as any));
    this._el_52 = import3.createRenderElement(this.renderer,this._el_50,'input',new import3.InlineArray2(2,'type','checkbox'),(null as any));
    this._text_53 = this.renderer.createText(this._el_50,'\n                        Angular\n                    ',(null as any));
    this._text_54 = this.renderer.createText(this._el_48,'\n                ',(null as any));
    this._text_55 = this.renderer.createText(this._el_43,'\n                ',(null as any));
    this._el_56 = import3.createRenderElement(this.renderer,this._el_43,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_57 = this.renderer.createText(this._el_56,'\n                    ',(null as any));
    this._el_58 = import3.createRenderElement(this.renderer,this._el_56,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_59 = this.renderer.createText(this._el_58,'\n                        ',(null as any));
    this._el_60 = import3.createRenderElement(this.renderer,this._el_58,'input',new import3.InlineArray2(2,'type','checkbox'),(null as any));
    this._text_61 = this.renderer.createText(this._el_58,'\n                        JavaScript\n                    ',(null as any));
    this._text_62 = this.renderer.createText(this._el_56,'\n                ',(null as any));
    this._text_63 = this.renderer.createText(this._el_43,'\n                ',(null as any));
    this._el_64 = import3.createRenderElement(this.renderer,this._el_43,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_65 = this.renderer.createText(this._el_64,'\n                    ',(null as any));
    this._el_66 = import3.createRenderElement(this.renderer,this._el_64,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_67 = this.renderer.createText(this._el_66,'\n                        ',(null as any));
    this._el_68 = import3.createRenderElement(this.renderer,this._el_66,'input',new import3.InlineArray2(2,'type','checkbox'),(null as any));
    this._text_69 = this.renderer.createText(this._el_66,'\n                        C#\n                    ',(null as any));
    this._text_70 = this.renderer.createText(this._el_64,'\n                ',(null as any));
    this._text_71 = this.renderer.createText(this._el_43,'\n            ',(null as any));
    this._text_72 = this.renderer.createText(parentRenderNode,'\n\n            ',(null as any));
    this._el_73 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_74 = this.renderer.createText(this._el_73,'\n                Selected Skills:\n                ',(null as any));
    this._el_75 = import3.createRenderElement(this.renderer,this._el_73,'ul',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_76 = this.renderer.createText(this._el_75,'\n                    ',(null as any));
    this._anchor_77 = this.renderer.createTemplateAnchor(this._el_75,(null as any));
    this._vc_77 = new import11.ViewContainer(77,75,this,this._anchor_77);
    this._TemplateRef_77_5 = new import15.TemplateRef_(this,77,this._anchor_77);
    this._NgIf_77_6 = new import12.Wrapper_NgIf(this._vc_77.vcRef,this._TemplateRef_77_5);
    this._text_78 = this.renderer.createText(this._el_75,'\n                    ',(null as any));
    this._anchor_79 = this.renderer.createTemplateAnchor(this._el_75,(null as any));
    this._vc_79 = new import11.ViewContainer(79,75,this,this._anchor_79);
    this._TemplateRef_79_5 = new import15.TemplateRef_(this,79,this._anchor_79);
    this._NgIf_79_6 = new import12.Wrapper_NgIf(this._vc_79.vcRef,this._TemplateRef_79_5);
    this._text_80 = this.renderer.createText(this._el_75,'\n                    ',(null as any));
    this._anchor_81 = this.renderer.createTemplateAnchor(this._el_75,(null as any));
    this._vc_81 = new import11.ViewContainer(81,75,this,this._anchor_81);
    this._TemplateRef_81_5 = new import15.TemplateRef_(this,81,this._anchor_81);
    this._NgIf_81_6 = new import12.Wrapper_NgIf(this._vc_81.vcRef,this._TemplateRef_81_5);
    this._text_82 = this.renderer.createText(this._el_75,'\n                ',(null as any));
    this._text_83 = this.renderer.createText(this._el_73,'\n            ',(null as any));
    this._text_84 = this.renderer.createText(parentRenderNode,'\n\n            ',(null as any));
    this._el_85 = import3.createRenderElement(this.renderer,parentRenderNode,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_86 = import3.createRenderElement(this.renderer,this._el_85,'a',new import3.InlineArray2(2,'href','http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0'),(null as any));
    this._text_87 = this.renderer.createText(this._el_86,'Read more here',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_9));
    this._NgModel_9_5.subscribe(this,this.eventHandler(this.handleEvent_9),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_24,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_24));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_32,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_32));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_52,new import3.InlineArray2(2,'change',(null as any)),this.eventHandler(this.handleEvent_52));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_60,new import3.InlineArray2(2,'change',(null as any)),this.eventHandler(this.handleEvent_60));
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_68,new import3.InlineArray2(2,'change',(null as any)),this.eventHandler(this.handleEvent_68));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._text_40,
      this._text_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._el_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._text_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._el_66,
      this._text_67,
      this._el_68,
      this._text_69,
      this._text_70,
      this._text_71,
      this._text_72,
      this._el_73,
      this._text_74,
      this._el_75,
      this._text_76,
      this._anchor_77,
      this._text_78,
      this._anchor_79,
      this._text_80,
      this._anchor_81,
      this._text_82,
      this._text_83,
      this._text_84,
      this._el_85,
      this._el_86,
      this._text_87
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.DefaultValueAccessor) && (9 === requestNodeIndex))) { return this._DefaultValueAccessor_9_3.context; }
    if (((token === import17.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_9_4; }
    if (((token === import18.NgModel) && (9 === requestNodeIndex))) { return this._NgModel_9_5.context; }
    if (((token === import19.NgControl) && (9 === requestNodeIndex))) { return this._NgControl_9_6; }
    if (((token === import20.NgControlStatus) && (9 === requestNodeIndex))) { return this._NgControlStatus_9_7.context; }
    if (((token === import15.TemplateRef) && (77 === requestNodeIndex))) { return this._TemplateRef_77_5; }
    if (((token === import21.NgIf) && (77 === requestNodeIndex))) { return this._NgIf_77_6.context; }
    if (((token === import15.TemplateRef) && (79 === requestNodeIndex))) { return this._TemplateRef_79_5; }
    if (((token === import21.NgIf) && (79 === requestNodeIndex))) { return this._NgIf_79_6.context; }
    if (((token === import15.TemplateRef) && (81 === requestNodeIndex))) { return this._TemplateRef_81_5; }
    if (((token === import21.NgIf) && (81 === requestNodeIndex))) { return this._NgIf_81_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DefaultValueAccessor_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    const currVal_9_1_0:any = this.context.name;
    this._NgModel_9_5.check_model(currVal_9_1_0,throwOnChange,false);
    this._NgModel_9_5.ngDoCheck(this,this._el_9,throwOnChange);
    this._NgControlStatus_9_7.ngDoCheck(this,this._el_9,throwOnChange);
    const currVal_77_0_0:any = this.context.angular;
    this._NgIf_77_6.check_ngIf(currVal_77_0_0,throwOnChange,false);
    this._NgIf_77_6.ngDoCheck(this,this._anchor_77,throwOnChange);
    const currVal_79_0_0:any = this.context.javascript;
    this._NgIf_79_6.check_ngIf(currVal_79_0_0,throwOnChange,false);
    this._NgIf_79_6.ngDoCheck(this,this._anchor_79,throwOnChange);
    const currVal_81_0_0:any = this.context.csharp;
    this._NgIf_81_6.check_ngIf(currVal_81_0_0,throwOnChange,false);
    this._NgIf_81_6.ngDoCheck(this,this._anchor_81,throwOnChange);
    this._vc_77.detectChangesInNestedViews(throwOnChange);
    this._vc_79.detectChangesInNestedViews(throwOnChange);
    this._vc_81.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatus_9_7.checkHost(this,this,this._el_9,throwOnChange);
    const currVal_102:any = import3.inlineInterpolate(1,'Current Value: ',this.context.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_102,currVal_102)) {
      this.renderer.setText(this._text_12,currVal_102);
      this._expr_102 = currVal_102;
    }
    const currVal_103:any = import3.inlineInterpolate(1,'',this.context.gender,'');
    if (import3.checkBinding(throwOnChange,this._expr_103,currVal_103)) {
      this.renderer.setText(this._text_39,currVal_103);
      this._expr_103 = currVal_103;
    }
  }
  destroyInternal():void {
    this._vc_77.destroyNestedViews();
    this._vc_79.destroyNestedViews();
    this._vc_81.destroyNestedViews();
    this._NgModel_9_5.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 77)) { return new View_InputControls1(this.viewUtils,this,77,this._anchor_77,this._vc_77); }
    if ((nodeIndex == 79)) { return new View_InputControls2(this.viewUtils,this,79,this._anchor_79,this._vc_79); }
    if ((nodeIndex == 81)) { return new View_InputControls3(this.viewUtils,this,81,this._anchor_81,this._vc_81); }
    return (null as any);
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_9_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.name = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_24(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>(this.context.gender = this._el_24.value)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_32(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>(this.context.gender = this._el_32.value)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_52(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'change')) {
      const pd_sub_0:any = ((<any>(this.context.angular = this._el_52.checked)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_60(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'change')) {
      const pd_sub_0:any = ((<any>(this.context.javascript = this._el_60.checked)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_68(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'change')) {
      const pd_sub_0:any = ((<any>(this.context.csharp = this._el_68.checked)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_InputControls1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_InputControls1,renderType_InputControls,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Angular',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_InputControls2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_InputControls2,renderType_InputControls,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'JavaScript',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_InputControls3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_InputControls3,renderType_InputControls,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'C#',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}