(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{605:function(t,e,n){t.exports=n.p+"img/b2fcd3e.jpg"},612:function(t,e,n){"use strict";n(53);e.a=function(t,e){var n=null;return function(){clearTimeout(n);var o=arguments,r=this;n=setTimeout(function(){t.apply(r,o)},e)}}},615:function(t,e,n){var content=n(714);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("208bf48e",content,!0,{sourceMap:!1})},618:function(t,e,n){var content=n(779);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("230028ca",content,!0,{sourceMap:!1})},619:function(t,e,n){var content=n(781);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("431a131f",content,!0,{sourceMap:!1})},620:function(t,e,n){var content=n(783);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("18b2c7cf",content,!0,{sourceMap:!1})},621:function(t,e,n){var content=n(785);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("e8cdcfb2",content,!0,{sourceMap:!1})},624:function(t,e,n){var content=n(791);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3271a356",content,!0,{sourceMap:!1})},625:function(t,e,n){var content=n(793);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("cd107338",content,!0,{sourceMap:!1})},626:function(t,e,n){var content=n(795);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("369259b4",content,!0,{sourceMap:!1})},681:function(t,e,n){"use strict";var o=n(9),r=n(13),c={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/LayoutItems/WebImageContextMenu/getContextMenu"})),methods:{openStartMenuAnimations:function(){this.$store.dispatch("StartMenus/StartMenu/openStartMenu",{name:"StartMenuAnimations"})},copyItem:function(){this.$store.commit("Layout/COPY_ITEM")},deleteItem:function(){this.$store.commit("Layout/DELETE_ITEM")}}},l=n(5),d=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"copy"},on:{click:this.copyItem}},[e("div",[this._v("Copy")])]),this._v(" "),e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"delete"},on:{click:this.deleteItem}},[e("div",[this._v("Delete")])])],1)},[],!1,null,null,null).exports,m=(n(14),n(4)),h={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/LayoutItems/TextfieldContextMenu/getContextMenu"})),methods:{openStartMenuAnimations:function(){this.$store.dispatch("StartMenus/StartMenu/openStartMenu",{name:"StartMenuAnimations"})},copyItem:function(){this.$store.commit("Layout/COPY_ITEM")},deleteItem:function(){var t=Object(m.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.commit("Layout/DELETE_ITEM");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},x=(n(792),Object(l.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"copy"},on:{click:this.copyItem}},[e("div",[this._v("Copy")])]),this._v(" "),e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"delete"},on:{click:this.deleteItem}},[e("div",[this._v("Delete")])])],1)},[],!1,null,null,null).exports),f={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/LayoutItems/ChartContextMenu/getContextMenu"})),methods:{openStartMenuAnimations:function(){this.$store.dispatch("StartMenus/StartMenu/openStartMenu",{name:"StartMenuAnimations"})},copyItem:function(){this.$store.commit("Layout/COPY_ITEM")},deleteItem:function(){this.$store.commit("Layout/DELETE_ITEM")}}},C=Object(l.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"copy"},on:{click:this.copyItem}},[e("div",[this._v("Copy")])]),this._v(" "),e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"delete"},on:{click:this.deleteItem}},[e("div",[this._v("Delete")])])],1)},[],!1,null,null,null).exports,v={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/SidebarScrollerContextMenu/getContextMenu"})),methods:{copyItem:function(){this.$store.commit("Layout/COPY_LAYOUT_ITEM")},deleteItem:function(){this.$store.commit("Layout/DELETE_LAYOUT_ITEM",this.contextMenu)}}},M=Object(l.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("aside",{directives:[{name:"show",rawName:"v-show",value:this.contextMenu.activated,expression:"contextMenu.activated"}],ref:"contextMenu",staticClass:"context-menu",style:{top:this.contextMenu.style.top,left:this.contextMenu.style.left}},[e("ul",{staticClass:"menu-list"},[e("li",[e("ul",{staticClass:"context-menu-list"},[e("li",{staticClass:"context-menu-item",on:{click:this.deleteItem}},[e("a",[this._v("Delete")])])])])])])])},[],!1,null,null,null).exports,y={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/LayoutItems/WebVideoContextMenu/getContextMenu"})),methods:{openStartMenuAnimations:function(){this.$store.dispatch("StartMenus/StartMenu/openStartMenu",{name:"StartMenuAnimations"})},copyItem:function(){this.$store.commit("Layout/COPY_ITEM")},deleteItem:function(){this.$store.commit("Layout/DELETE_ITEM")}}},_=Object(l.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"copy"},on:{click:this.copyItem}},[e("div",[this._v("Copy")])]),this._v(" "),e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"delete"},on:{click:this.deleteItem}},[e("div",[this._v("Delete")])])],1)},[],!1,null,null,null).exports,I={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/LayoutItems/TableContextMenu/getContextMenu"})),methods:{openStartMenuAnimations:function(){this.$store.dispatch("StartMenus/StartMenu/openStartMenu",{name:"StartMenuAnimations"})},copyItem:function(){this.$store.commit("Layout/COPY_ITEM")},deleteItem:function(){this.$store.commit("Layout/DELETE_ITEM")}}},T=Object(l.a)(I,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"copy"},on:{click:this.copyItem}},[e("div",[this._v("Copy")])]),this._v(" "),e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"delete"},on:{click:this.deleteItem}},[e("div",[this._v("Delete")])])],1)},[],!1,null,null,null).exports,L={data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/LayoutItems/Interact/ButtonContextMenu/getContextMenu"})),methods:{openStartMenuAnimations:function(){this.$store.dispatch("StartMenus/StartMenu/openStartMenu",{name:"StartMenuAnimations"})},copyItem:function(){this.$store.commit("Layout/COPY_ITEM")},deleteItem:function(){this.$store.commit("Layout/DELETE_ITEM")}}},E={components:{WebImageContextMenu:d,TextfieldContextMenu:x,ChartContextMenu:C,SidebarScrollerContextMenu:M,WebVideoContextMenu:_,TableContextMenu:T,ButtonContextMenu:Object(l.a)(L,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"copy"},on:{click:this.copyItem}},[e("div",[this._v("Copy")])]),this._v(" "),e("el-menu-item",{staticClass:"contextmenu-item",attrs:{index:"delete"},on:{click:this.deleteItem}},[e("div",[this._v("Delete")])])],1)},[],!1,null,null,null).exports},data:function(){return{}},computed:Object(o.a)({},Object(r.b)({contextMenu:"ContextMenus/ContextMenu/getContextMenu"})),methods:{showContextMenu:function(t){document.getElementById("div-context-menu");this.$refs.contextMenu.style.left=t.pageX+"px",this.$refs.contextMenu.style.top=t.pageY+"px"}}},S=(n(794),Object(l.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("el-menu",{directives:[{name:"show",rawName:"v-show",value:this.contextMenu.activated,expression:"contextMenu.activated"}],staticClass:"context-menu",style:{top:this.contextMenu.style.top,left:this.contextMenu.style.left}},[e(this.contextMenu.name,{tag:"component"})],1)},[],!1,null,null,null));e.a=S.exports},682:function(t,e,n){"use strict";n(601);var o={props:{color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1},width:{type:Number,default:300,required:!1},height:{type:Number,default:200,required:!1}}},r=n(5),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:this.width,heigth:this.height,viewBox:"0 0 746.652 375.068"}},[e("path",{attrs:{d:"M 282.8425903320313 374.5683288574219 C 279.0109558105469 374.5683288574219 275.2759399414063 373.8414916992188 271.7413940429688 372.4081420898438 C 268.0823059082031 370.92431640625 264.7990417480469 368.7438659667969 261.982666015625 365.9275817871094 L 21.56657791137695 125.5114974975586 C 18.75048637390137 122.6953201293945 16.57030487060547 119.4121398925781 15.08648681640625 115.7531356811523 C 13.65321445465088 112.2185897827148 12.92648696899414 108.4836807250977 12.92648696899414 104.6520462036133 C 12.92648696899414 100.8204116821289 13.65321445465088 97.08541107177734 15.08648681640625 93.55086517333984 C 16.57030487060547 89.89186096191406 18.75048637390137 86.60868072509766 21.56657791137695 83.79258728027344 L 261.982666015625 -156.6244049072266 C 264.7989501953125 -159.4405059814453 268.0823059082031 -161.6206817626953 271.7413940429688 -163.1045074462891 C 275.2759399414063 -164.5377655029297 279.0109558105469 -165.2644958496094 282.8425903320313 -165.2644958496094 C 286.6742248535156 -165.2644958496094 290.4092102050781 -164.5377655029297 293.9437561035156 -163.1045074462891 C 297.6028442382813 -161.6206817626953 300.8861999511719 -159.4405059814453 303.7024841308594 -156.6244049072266 L 365.9275817871094 -94.39840698242188 C 368.7438659667969 -91.58232116699219 370.9242248535156 -88.29913330078125 372.4081115722656 -84.64004516601563 C 373.8414916992188 -81.1055908203125 374.5682983398438 -77.37068176269531 374.5682983398438 -73.53895568847656 C 374.5682983398438 -69.70732116699219 373.8414916992188 -65.972412109375 372.4081115722656 -62.43786239624023 C 370.9242248535156 -58.77877426147461 368.7438659667969 -55.49559020996094 365.9275817871094 -52.67950057983398 L 278.9497680664063 34.29822540283203 L 278.0962219238281 35.15177154541016 L 279.3033142089844 35.15177154541016 L 726.6519165039063 35.15177154541016 C 729.28466796875 35.15177154541016 731.8383178710938 35.66722869873047 734.2420043945313 36.68395614624023 C 736.5640258789063 37.66604614257813 738.6494750976563 39.07213592529297 740.4404907226563 40.86304473876953 C 742.2313842773438 42.65404510498047 743.6375122070313 44.73949813842773 744.6195678710938 47.06150054931641 C 745.6362915039063 49.46522903442383 746.1517333984375 52.01886367797852 746.1517333984375 54.65159225463867 L 746.1517333984375 154.6515045166016 C 746.1517333984375 157.2842254638672 745.6362915039063 159.8379516601563 744.6195678710938 162.2417755126953 C 743.6375122070313 164.5638580322266 742.2313842773438 166.6494140625 740.4403686523438 168.4405059814453 C 738.6494140625 170.2315979003906 736.5640258789063 171.6377716064453 734.2420043945313 172.6199493408203 C 731.8383178710938 173.6366882324219 729.28466796875 174.1522216796875 726.6519165039063 174.1522216796875 L 279.30419921875 174.1522216796875 L 278.0971374511719 174.1522216796875 L 278.95068359375 175.0057678222656 L 365.9275817871094 261.9826965332031 C 368.7438659667969 264.7989501953125 370.9242248535156 268.0823059082031 372.4081115722656 271.7413940429688 C 373.8414916992188 275.2759399414063 374.5682067871094 279.0109558105469 374.5682983398438 282.8425903320313 C 374.5682067871094 286.6742248535156 373.8414916992188 290.4092407226563 372.4081115722656 293.9437866210938 C 370.9242248535156 297.6028747558594 368.7438659667969 300.88623046875 365.9275817871094 303.7025146484375 L 303.7024841308594 365.9275817871094 C 300.8861083984375 368.7438659667969 297.6028442382813 370.92431640625 293.9437561035156 372.4081420898438 C 290.4092102050781 373.8414916992188 286.6742248535156 374.5683288574219 282.8425903320313 374.5683288574219 Z",stroke:"none"}}),this._v(" "),e("path",{attrs:{d:"M 282.8425903320313 374.0683288574219 C 286.6094970703125 374.0683288574219 290.2812194824219 373.3538513183594 293.755859375 371.9447631835938 C 297.3525695800781 370.4862365722656 300.5802001953125 368.3427734375 303.3489379882813 365.5740356445313 L 365.5740356445313 303.3489685058594 C 368.3427734375 300.5802307128906 370.4862060546875 297.3526000976563 371.9447631835938 293.755859375 C 373.3538513183594 290.2813110351563 374.0682983398438 286.6094970703125 374.0682983398438 282.8425903320313 C 374.0682983398438 279.07568359375 373.3538513183594 275.4038696289063 371.9447631835938 271.9293212890625 C 370.4862060546875 268.3325805664063 368.3427734375 265.1049499511719 365.5740356445313 262.3362121582031 L 278.5971374511719 175.3593139648438 L 276.8900451660156 173.6522216796875 L 279.30419921875 173.6522216796875 L 726.6519165039063 173.6522216796875 C 729.2174072265625 173.6522216796875 731.7055053710938 173.1499481201172 734.0472412109375 172.1594085693359 C 736.3095703125 171.2024993896484 738.3416748046875 169.8323211669922 740.0868530273438 168.0869598388672 C 741.8321533203125 166.3415985107422 743.2022094726563 164.3094940185547 744.1591186523438 162.0469512939453 C 745.1495971679688 159.7051391601563 745.6517333984375 157.2169494628906 745.6517333984375 154.6515045166016 L 745.6517333984375 54.65159225463867 C 745.6517333984375 52.08613586425781 745.1495971679688 49.59804534912109 744.1591186523438 47.2562255859375 C 743.2022094726563 44.99386215209961 741.8321533203125 42.96186447143555 740.0868530273438 41.21668243408203 C 738.3416748046875 39.47140884399414 736.3096923828125 38.101318359375 734.0473022460938 37.1444091796875 C 731.7055053710938 36.15395355224609 729.2174072265625 35.65177154541016 726.6519165039063 35.65177154541016 L 279.3033142089844 35.65177154541016 L 276.8891296386719 35.65177154541016 L 278.5962219238281 33.94468307495117 L 365.5740356445313 -53.03304672241211 C 368.3427734375 -55.80158996582031 370.4862060546875 -59.02904510498047 371.9447631835938 -62.62577438354492 C 373.3538513183594 -66.10031890869141 374.0682983398438 -69.77204895019531 374.0682983398438 -73.53895568847656 C 374.0682983398438 -77.30595397949219 373.3538513183594 -80.97768402099609 371.9447631835938 -84.45213317871094 C 370.4862060546875 -88.04886627197266 368.3427734375 -91.27632141113281 365.5740356445313 -94.04486083984375 L 303.3489379882813 -156.2708587646484 C 300.5802001953125 -159.0393218994141 297.3526611328125 -161.1826782226563 293.755859375 -162.6411437988281 C 290.2813110351563 -164.0501403808594 286.6094970703125 -164.7644958496094 282.8425903320313 -164.7644958496094 C 279.07568359375 -164.7644958496094 275.4039306640625 -164.0501403808594 271.9292907714844 -162.6411437988281 C 268.3324890136719 -161.1825866699219 265.1049499511719 -159.0393218994141 262.3362121582031 -156.2708587646484 L 21.92012405395508 84.14613342285156 C 19.15166854858398 86.91468048095703 17.00839614868164 90.14213562011719 15.54985046386719 93.73876953125 C 14.14085102081299 97.21331787109375 13.42648696899414 100.8850479125977 13.42648696899414 104.6520462036133 C 13.42648696899414 108.4189529418945 14.14085102081299 112.0906829833984 15.54985046386719 115.5652236938477 C 17.00839614868164 119.1619567871094 19.15166854858398 122.3894119262695 21.92012405395508 125.1579513549805 L 262.3362121582031 365.5740356445313 C 265.1049499511719 368.3427734375 268.3325805664063 370.4862365722656 271.9292907714844 371.9447631835938 C 275.4038391113281 373.3538513183594 279.07568359375 374.0683288574219 282.8425903320313 374.0683288574219 M 282.8425903320313 375.0683288574219 C 275.1648559570313 375.0683288574219 267.4872131347656 372.1392211914063 261.6291198730469 366.2811279296875 L 21.21303176879883 125.8650436401367 C 15.35539627075195 120.0073165893555 12.42648696899414 112.3296813964844 12.42648696899414 104.6520462036133 C 12.42648696899414 96.97431945800781 15.35539627075195 89.29668426513672 21.21303176879883 83.43904876708984 L 261.6291198730469 -156.9779510498047 C 267.4872131347656 -162.8356323242188 275.1648864746094 -165.7644805908203 282.8425903320313 -165.7644805908203 C 290.520263671875 -165.7644805908203 298.1979370117188 -162.8356323242188 304.0560302734375 -156.9779510498047 L 366.2811279296875 -94.751953125 C 377.997314453125 -83.03668212890625 377.997314453125 -64.04132080078125 366.2811279296875 -52.32595443725586 L 279.3033142089844 34.65177154541016 L 726.6519165039063 34.65177154541016 C 737.6976928710938 34.65177154541016 746.6517333984375 43.60586547851563 746.6517333984375 54.65159225463867 L 746.6517333984375 154.6515045166016 C 746.6517333984375 165.6972198486328 737.6976928710938 174.6522216796875 726.6519165039063 174.6522216796875 L 279.30419921875 174.6522216796875 L 366.2811279296875 261.629150390625 C 377.997314453125 273.3453063964844 377.997314453125 292.3398742675781 366.2811279296875 304.0560302734375 L 304.0560302734375 366.2811279296875 C 298.1979370117188 372.1392211914063 290.5202026367188 375.0683288574219 282.8425903320313 375.0683288574219 Z",stroke:"none",fill:"#707070"}})])},[],!1,null,null,null);e.a=component.exports},683:function(t,e,n){"use strict";n(601);var o={props:{layoutId:{},id:{},addToSomethingActivated:{required:!0},color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1},width:{type:Number,default:200,required:!1},height:{type:Number,default:300,required:!1}},methods:{setCurrentItem:function(){var t={id:this.id,layoutId:this.layoutId,itemName:"shapes"};"add"===this.addToSomethingActivated.action?this.$store.commit("Layout/ADD_LAYOUT_ITEM_TO_BUTTON",t):"delete"===this.addToSomethingActivated.action?this.$store.commit("Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON",t):this.$store.commit("Layout/SET_CURRENT_ITEM",t)},openContextMenu:function(){var t={name:"ShapesContextMenu",x:event.pageX+"px",y:event.pageY+"px",row:this.row},e={id:this.id,layoutId:this.layoutId,itemName:"shapes"};this.$store.commit("Layout/SET_CURRENT_ITEM",e),this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu",t)}}},r=(n(782),n(5)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"triangle",style:{borderLeftWidth:t.width/2+"px",borerLeftColor:"transparent",borderRightWidth:t.width/2+"px",borderRightColor:"transperant",borderBottomWidth:t.height+"px",borderBottomColor:t.color,borderTopWidth:-t.height/2+"px",borderTopColor:"transperant",borderStyle:"solid"},on:{click:t.setCurrentItem,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}})},[],!1,null,null,null);e.a=component.exports},684:function(t,e,n){"use strict";n(601);var o={props:{layoutId:{},id:{},addToSomethingActivated:{required:!0},color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1},width:{type:Number,default:200,required:!1},height:{type:Number,default:300,required:!1}},methods:{setCurrentItem:function(){var t={id:this.id,layoutId:this.layoutId,itemName:"shapes"};"add"===this.addToSomethingActivated.action?this.$store.commit("Layout/ADD_LAYOUT_ITEM_TO_BUTTON",t):"delete"===this.addToSomethingActivated.action?this.$store.commit("Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON",t):this.$store.commit("Layout/SET_CURRENT_ITEM",t)},openContextMenu:function(){var t={name:"ShapesContextMenu",x:event.pageX+"px",y:event.pageY+"px",row:this.row},e={id:this.id,layoutId:this.layoutId,itemName:"shapes"};this.$store.commit("Layout/SET_CURRENT_ITEM",e),this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu",t)}}},r=(n(780),n(5)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"circle",style:{width:t.width+"px",height:t.height+"px",backgroundColor:t.color},on:{click:t.setCurrentItem,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}})},[],!1,null,null,null);e.a=component.exports},685:function(t,e,n){"use strict";n(601);var o={props:{layoutId:{},id:{},addToSomethingActivated:{required:!0},color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1},width:{type:Number,default:200,required:!1},height:{type:Number,default:300,required:!1}},methods:{setCurrentItem:function(){var t={id:this.id,layoutId:this.layoutId,itemName:"shapes"};"add"===this.addToSomethingActivated.action?this.$store.commit("Layout/ADD_LAYOUT_ITEM_TO_BUTTON",t):"delete"===this.addToSomethingActivated.action?this.$store.commit("Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON",t):this.$store.commit("Layout/SET_CURRENT_ITEM",t)},openContextMenu:function(){var t={name:"ShapesContextMenu",x:event.pageX+"px",y:event.pageY+"px",row:this.row},e={id:this.id,layoutId:this.layoutId,itemName:"shapes"};this.$store.commit("Layout/SET_CURRENT_ITEM",e),this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu",t)}}},r=(n(784),n(5)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"line",style:{width:t.width+"px",height:t.height+"px",backgroundColor:t.color},on:{click:t.setCurrentItem,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}})},[],!1,null,null,null);e.a=component.exports},686:function(t,e,n){"use strict";var o=n(670),r=n.n(o),c={props:["index","url"],data:function(){return{inputActivated:!1,urlInput:"",submitButton:!0}},computed:{},methods:{handleSubmit:function(){"image"===this.url?this.$store.commit("Layout/ADD_WEB_IMAGE",{layoutRow:this.index,imageRow:0,url:this.urlInput}):(this.$emit("test",this.urlInput),this.$store.commit("Layout/ADD_WEB_VIDEO",{layoutRow:this.index,imageRow:0,video_id:r()(this.urlInput)})),this.$store.commit("LayoutHelpers/HIDE_URL_INPUT",this.index)},cancelSubmit:function(){this.$store.commit("LayoutHelpers/SHOW_TOOLBAR",this.index),this.$store.commit("LayoutHelpers/HIDE_URL_INPUT",this.index),this.urlInput=""},closeUrlInput:function(){this.$store.commit("LayoutHelpers/SHOW_TOOLBAR",this.index),this.$store.commit("LayoutHelpers/HIDE_URL_INPUT",this.index)}}},l=(n(790),n(5)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"url-input"},[n("div",{staticClass:"field"},[n("div",{staticClass:"close",on:{click:t.closeUrlInput}}),t._v(" "),"image"===t.url?n("div",{staticClass:"control"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.urlInput,expression:"urlInput"}],staticClass:"input url-input",attrs:{type:"text",placeholder:"Picture URL"},domProps:{value:t.urlInput},on:{input:function(e){e.target.composing||(t.urlInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button is-small is-success"},[t._v("\n          Submit\n        ")]),t._v(" "),n("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:t.cancelSubmit}},[t._v("\n          Cancel\n        ")])])]):n("div",{staticClass:"control"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.urlInput,expression:"urlInput"}],staticClass:"input url-input",attrs:{type:"text",placeholder:"Youtube URL"},domProps:{value:t.urlInput},on:{input:function(e){e.target.composing||(t.urlInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button is-small is-success"},[t._v("\n          Submit\n        ")]),t._v(" "),n("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:t.cancelSubmit}},[t._v("\n          Cancel\n        ")])])])])])},[],!1,null,null,null);e.a=component.exports},687:function(t,e,n){"use strict";var o=n(605),r=n.n(o),c=(n(13),{components:{},props:["id","url","imageData"],data:function(){return{image:r.a}},methods:{showImage:function(){}}}),l=(n(713),n(5)),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:this.imageData}})])},[],!1,null,null,null);e.a=component.exports},688:function(t,e,n){"use strict";n(601);var o={props:{layoutId:{},id:{},addToSomethingActivated:{required:!0},color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1},width:{type:Number,default:200,required:!1},height:{type:Number,default:300,required:!1}},methods:{setCurrentItem:function(){var t={id:this.id,layoutId:this.layoutId,itemName:"shapes"};"add"===this.addToSomethingActivated.action?this.$store.commit("Layout/ADD_LAYOUT_ITEM_TO_BUTTON",t):"delete"===this.addToSomethingActivated.action?this.$store.commit("Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON",t):this.$store.commit("Layout/SET_CURRENT_ITEM",t)},openContextMenu:function(){var t={name:"ShapesContextMenu",x:event.pageX+"px",y:event.pageY+"px",row:this.row},e={id:this.id,layoutId:this.layoutId,itemName:"shapes"};this.$store.commit("Layout/SET_CURRENT_ITEM",e),this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu",t)}}},r=(n(778),n(5)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{width:t.width+"px",height:t.height+"px",backgroundColor:"black"},on:{click:t.setCurrentItem,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}})},[],!1,null,"568caca5",null);e.a=component.exports},713:function(t,e,n){"use strict";var o=n(615);n.n(o).a},714:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".image-content{width:50%;height:30%;pointer-events:auto;resize:none;background:transparent;overflow:hidden}",""])},778:function(t,e,n){"use strict";var o=n(618);n.n(o).a},779:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".cls-1[data-v-568caca5]{fill:violet;stroke:#707070}.cls-2[data-v-568caca5]{stroke:none}.cls-3[data-v-568caca5]{fill:none}",""])},780:function(t,e,n){"use strict";var o=n(619);n.n(o).a},781:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".circle{border-radius:50%}",""])},782:function(t,e,n){"use strict";var o=n(620);n.n(o).a},783:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".triangle{width:0;height:0;border-color:transparent transparent #007bff;border-style:solid;border-width:0 100px 100px}",""])},784:function(t,e,n){"use strict";var o=n(621);n.n(o).a},785:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".line{max-height:30px}",""])},790:function(t,e,n){"use strict";var o=n(624);n.n(o).a},791:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,'section.url-input{border:1px solid;width:30%;margin:0;padding:50px 50px 40px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}input.url-input{margin-bottom:.25rem}.close{position:absolute!important;right:10px;top:10px;width:30px;height:30px;opacity:.3}.close:hover{opacity:1}.close:after,.close:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#333}.close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}',""])},792:function(t,e,n){"use strict";var o=n(625);n.n(o).a},793:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".contextmenu-item{height:30px;line-height:30px}",""])},794:function(t,e,n){"use strict";var o=n(626);n.n(o).a},795:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".context-menu{position:fixed;top:50%;left:50%;margin-top:-100px;margin-left:-150px;border-radius:5px;text-align:center;z-index:11}ul.context-menu-list{border:1px solid #000!important;padding:0!important;background-color:#fff}ul.context-menu-list :last-child{border-bottom:none}li.context-menu-item{border-bottom:1px solid #000;height:2rem}",""])}}]);