import Vue from "vue"
import {
  Container,
  Header,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Aside,
  Main,
  Button,
  Select,
  Row,
  Col,
  Slider,
  Cascader,
  Pagination,
  Checkbox,
  CheckboxGroup,
  RadioButton,
  RadioGroup,
  Tabs,
  TabPane,
  Tooltip,
  Input,
  InputNumber,
  Collapse,
  CollapseItem,
  ColorPicker,
  Option,
  Popover,
  Tree,
  Form,
  FormItem,
  Notification,
  Message,
  Dialog,
  Upload
} from "element-ui"

Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Pagination.name, Pagination)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Tooltip.name, Tooltip)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Input.name, Input)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(ColorPicker.name, ColorPicker)
Vue.component(Option.name, Option)
Vue.component(Slider.name, Slider)
Vue.component(Cascader.name, Cascader)
Vue.component(Popover.name, Popover)
Vue.component(Tree.name, Tree)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Upload.name, Upload)
Vue.component(Dialog.name, Dialog)

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
