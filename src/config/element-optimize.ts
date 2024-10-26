import * as ElementPlusComponents from 'element-plus';

/** 预构建加入 */
type ElementPlusComponentType = typeof ElementPlusComponents;

type ElKeys<T> = {
  [K in keyof T]: K extends `El${string}` ? K : never;
}[keyof T];

export const elStyleKeys: ElKeys<ElementPlusComponentType>[] = [
  /* ======================== 基础组件 ======================== */
  'ElButton',
  'ElButtonGroup',
  'ElLink',
  'ElText',
  'ElSpace',
  'ElContainer',
  'ElFooter',
  'ElHeader',
  'ElAside',
  'ElScrollbar',
  /* ======================== 表单组件 ======================== */
  'ElAutocomplete',
  'ElCascader',
  'ElCascaderPanel',
  'ElCheckbox',
  'ElCheckboxGroup',
  'ElCheckboxButton',
  'ElColorPicker',
  'ElDatePicker',
  'ElForm',
  'ElFormItem',
  'ElInput',
  'ElInputNumber',
  'ElMention',
  'ElRadio',
  'ElRadioGroup',
  'ElRadioButton',
  'ElRate',
  'ElSelect',
  'ElSlider',
  'ElSwitch',
  'ElTimePicker',
  'ElTimeSelect',
  /* ======================== 数据展示 ======================== */
  'ElCard',
  'ElImage',
  'ElSegmented',
  /* ======================== 导航 ======================== */
  'ElDropdown',
  'ElDropdownMenu',
  'ElDropdownItem',
  'ElMenu',
  'ElSubMenu',
  'ElMenuItem',
  /* ======================== 反馈组件 ======================== */
  'ElTooltip',
  'ElAlert',
  /* ======================== 其他 ======================== */
  'ElDivider',
];