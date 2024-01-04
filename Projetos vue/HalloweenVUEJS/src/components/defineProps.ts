import { ref } from 'vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
interface NotasDados {
title: string;
description: string;

}
const title = ref<string>('');
const description = ref<string>('');
const notas = <NotasDados[]>([{}]);
function addNotes(title: string, description: string) {
console.log(notas);
const novaNota: NotasDados = {
title,
description
};
notas.push(novaNota);
}
const viewshow = ref<boolean>(false);
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
const __VLS_componentsOption = {};
let __VLS_name!: 'NotesApp';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).header; ({} as __VLS_IntrinsicElements).header;
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).textarea; ({} as __VLS_IntrinsicElements).textarea;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).ul; ({} as __VLS_IntrinsicElements).ul;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, class: ("popup-box"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("popup-box"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.viewshow));
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_elementAsFunctionalComponent(__VLS_4);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{}, class: ("popup"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4, typeof __VLS_6> & Record<string, unknown>) => void)({ ...{}, class: ("popup"), });
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_elementAsFunctionalComponent(__VLS_8);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{}, class: ("content"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_8, typeof __VLS_10> & Record<string, unknown>) => void)({ ...{}, class: ("content"), });
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["header"];
const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
({} as __VLS_IntrinsicElements).header;
({} as __VLS_IntrinsicElements).header;
const __VLS_14 = __VLS_13({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_14> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_18 = __VLS_17({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
(__VLS_19.slots!).default;
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, class: ('bx bx-x'), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ('bx bx-x'), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24 = { 'click': __VLS_pickEvent(__VLS_23.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onClick) };
__VLS_24 = {
click: $event => {
__VLS_ctx.viewshow = !__VLS_ctx.viewshow;
}
};
}
(__VLS_15.slots!).default;
}
{
const __VLS_25 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_27 = __VLS_26({ ...{}, action: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, action: ("#"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
{
const __VLS_29 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_30 = __VLS_elementAsFunctionalComponent(__VLS_29);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_31 = __VLS_30({ ...{}, class: ("row title"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_29, typeof __VLS_31> & Record<string, unknown>) => void)({ ...{}, class: ("row title"), });
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["label"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).label;
const __VLS_35 = __VLS_34({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
(__VLS_36.slots!).default;
}
{
const __VLS_37 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
({} as __VLS_IntrinsicElements).input;
const __VLS_39 = __VLS_38({ ...{}, type: ("text"), value: ((__VLS_ctx.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_37, typeof __VLS_39> & Record<string, unknown>) => void)({ ...{}, type: ("text"), value: ((__VLS_ctx.title)), });
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
}
(__VLS_32.slots!).default;
}
{
const __VLS_41 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_43 = __VLS_42({ ...{}, class: ("row description"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("row description"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["label"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).label;
const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
(__VLS_48.slots!).default;
}
{
const __VLS_49 = ({} as __VLS_IntrinsicElements)["textarea"];
const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
({} as __VLS_IntrinsicElements).textarea;
({} as __VLS_IntrinsicElements).textarea;
const __VLS_51 = __VLS_50({ ...{}, value: ((__VLS_ctx.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_49, typeof __VLS_51> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.description)), });
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
}
(__VLS_44.slots!).default;
}
{
const __VLS_53 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_54 = __VLS_elementAsFunctionalComponent(__VLS_53);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_55 = __VLS_54({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_54));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_53, typeof __VLS_55> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
let __VLS_57 = { 'click': __VLS_pickEvent(__VLS_56.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_54, typeof __VLS_55>).onClick) };
__VLS_57 = {
click: $event => {
__VLS_ctx.addNotes(__VLS_ctx.title, __VLS_ctx.description);
}
};
(__VLS_56.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_11.slots!).default;
}
(__VLS_7.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_58 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_60 = __VLS_59({ ...{}, class: ("wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_58, typeof __VLS_60> & Record<string, unknown>) => void)({ ...{}, class: ("wrapper"), });
const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60)!;
{
const __VLS_62 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_64 = __VLS_63({ ...{ onClick: {} as any, }, class: ("add-box"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add-box"), });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66 = { 'click': __VLS_pickEvent(__VLS_65.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_64>).onClick) };
__VLS_66 = {
click: $event => {
__VLS_ctx.viewshow = !__VLS_ctx.viewshow;
}
};
{
const __VLS_67 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_69 = __VLS_68({ ...{}, class: ("icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_69> & Record<string, unknown>) => void)({ ...{}, class: ("icon"), });
const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69)!;
{
const __VLS_71 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_73 = __VLS_72({ ...{}, class: ('bx bx-plus'), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-plus'), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
}
(__VLS_70.slots!).default;
}
{
const __VLS_75 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
(__VLS_78.slots!).default;
}
(__VLS_65.slots!).default;
}
{
const __VLS_79 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_80 = __VLS_elementAsFunctionalComponent(__VLS_79);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_81 = __VLS_80({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_79, typeof __VLS_81> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81)!;
{
const __VLS_83 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_85 = __VLS_84({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_83, typeof __VLS_85> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85)!;
{
const __VLS_87 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_89 = __VLS_88({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
(__VLS_90.slots!).default;
}
{
const __VLS_91 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
(__VLS_94.slots!).default;
}
(__VLS_86.slots!).default;
}
{
const __VLS_95 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_97 = __VLS_96({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
{
const __VLS_99 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_100 = __VLS_elementAsFunctionalComponent(__VLS_99);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_101 = __VLS_100({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_100));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_99, typeof __VLS_101> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101)!;
(__VLS_102.slots!).default;
}
{
const __VLS_103 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_105 = __VLS_104({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
{
const __VLS_107 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_108 = __VLS_elementAsFunctionalComponent(__VLS_107);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_109 = __VLS_108({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_109> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109)!;
}
(__VLS_106.slots!).default;
}
(__VLS_98.slots!).default;
}
(__VLS_82.slots!).default;
}
{
const __VLS_111 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_113 = __VLS_112({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_111, typeof __VLS_113> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113)!;
{
const __VLS_115 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_117 = __VLS_116({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_115, typeof __VLS_117> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117)!;
{
const __VLS_119 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_120 = __VLS_elementAsFunctionalComponent(__VLS_119);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_121 = __VLS_120({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_120));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_121> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121)!;
(__VLS_122.slots!).default;
}
{
const __VLS_123 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_125 = __VLS_124({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_124));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_125> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125)!;
(__VLS_126.slots!).default;
}
(__VLS_118.slots!).default;
}
{
const __VLS_127 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_128 = __VLS_elementAsFunctionalComponent(__VLS_127);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_129 = __VLS_128({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_127, typeof __VLS_129> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129)!;
{
const __VLS_131 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_133 = __VLS_132({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_132));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_131, typeof __VLS_133> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133)!;
(__VLS_134.slots!).default;
}
{
const __VLS_135 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_137 = __VLS_136({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_137> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
{
const __VLS_139 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_141 = __VLS_140({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_139, typeof __VLS_141> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141)!;
}
(__VLS_138.slots!).default;
}
(__VLS_130.slots!).default;
}
(__VLS_114.slots!).default;
}
{
const __VLS_143 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_144 = __VLS_elementAsFunctionalComponent(__VLS_143);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_145 = __VLS_144({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_144));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_143, typeof __VLS_145> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145)!;
{
const __VLS_147 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_148 = __VLS_elementAsFunctionalComponent(__VLS_147);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_149 = __VLS_148({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_147, typeof __VLS_149> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149)!;
{
const __VLS_151 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_153 = __VLS_152({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_152));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_153> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
(__VLS_154.slots!).default;
}
{
const __VLS_155 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_157 = __VLS_156({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_157> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
(__VLS_158.slots!).default;
}
(__VLS_150.slots!).default;
}
{
const __VLS_159 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_160 = __VLS_elementAsFunctionalComponent(__VLS_159);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_161 = __VLS_160({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_159, typeof __VLS_161> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161)!;
{
const __VLS_163 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_164 = __VLS_elementAsFunctionalComponent(__VLS_163);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_165 = __VLS_164({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_164));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_165> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
(__VLS_166.slots!).default;
}
{
const __VLS_167 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_168 = __VLS_elementAsFunctionalComponent(__VLS_167);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_169 = __VLS_168({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_167, typeof __VLS_169> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169)!;
{
const __VLS_171 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_172 = __VLS_elementAsFunctionalComponent(__VLS_171);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_173 = __VLS_172({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_171, typeof __VLS_173> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173)!;
}
(__VLS_170.slots!).default;
}
(__VLS_162.slots!).default;
}
(__VLS_146.slots!).default;
}
{
const __VLS_175 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_177 = __VLS_176({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_175, typeof __VLS_177> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
{
const __VLS_179 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_180 = __VLS_elementAsFunctionalComponent(__VLS_179);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_181 = __VLS_180({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_179, typeof __VLS_181> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181)!;
{
const __VLS_183 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_185 = __VLS_184({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_184));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_183, typeof __VLS_185> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
(__VLS_186.slots!).default;
}
{
const __VLS_187 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_188 = __VLS_elementAsFunctionalComponent(__VLS_187);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_189 = __VLS_188({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_188));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_187, typeof __VLS_189> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189)!;
(__VLS_190.slots!).default;
}
(__VLS_182.slots!).default;
}
{
const __VLS_191 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_192 = __VLS_elementAsFunctionalComponent(__VLS_191);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_193 = __VLS_192({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_191, typeof __VLS_193> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193)!;
{
const __VLS_195 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_196 = __VLS_elementAsFunctionalComponent(__VLS_195);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_197 = __VLS_196({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_195, typeof __VLS_197> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197)!;
(__VLS_198.slots!).default;
}
{
const __VLS_199 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_200 = __VLS_elementAsFunctionalComponent(__VLS_199);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_201 = __VLS_200({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_199, typeof __VLS_201> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201)!;
{
const __VLS_203 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_204 = __VLS_elementAsFunctionalComponent(__VLS_203);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_205 = __VLS_204({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_203, typeof __VLS_205> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205)!;
}
(__VLS_202.slots!).default;
}
(__VLS_194.slots!).default;
}
(__VLS_178.slots!).default;
}
{
const __VLS_207 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_208 = __VLS_elementAsFunctionalComponent(__VLS_207);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_209 = __VLS_208({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_208));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_207, typeof __VLS_209> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_207, __VLS_209)!;
{
const __VLS_211 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_212 = __VLS_elementAsFunctionalComponent(__VLS_211);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_213 = __VLS_212({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_211, typeof __VLS_213> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213)!;
{
const __VLS_215 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_217 = __VLS_216({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
(__VLS_218.slots!).default;
}
{
const __VLS_219 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_220 = __VLS_elementAsFunctionalComponent(__VLS_219);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_221 = __VLS_220({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_220));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_219, typeof __VLS_221> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_222 = __VLS_pickFunctionalComponentCtx(__VLS_219, __VLS_221)!;
(__VLS_222.slots!).default;
}
(__VLS_214.slots!).default;
}
{
const __VLS_223 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_224 = __VLS_elementAsFunctionalComponent(__VLS_223);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_225 = __VLS_224({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_224));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_223, typeof __VLS_225> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_226 = __VLS_pickFunctionalComponentCtx(__VLS_223, __VLS_225)!;
{
const __VLS_227 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_228 = __VLS_elementAsFunctionalComponent(__VLS_227);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_229 = __VLS_228({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_228));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_227, typeof __VLS_229> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_230 = __VLS_pickFunctionalComponentCtx(__VLS_227, __VLS_229)!;
(__VLS_230.slots!).default;
}
{
const __VLS_231 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_232 = __VLS_elementAsFunctionalComponent(__VLS_231);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_233 = __VLS_232({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_231, typeof __VLS_233> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233)!;
{
const __VLS_235 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_237 = __VLS_236({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_235, typeof __VLS_237> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237)!;
}
(__VLS_234.slots!).default;
}
(__VLS_226.slots!).default;
}
(__VLS_210.slots!).default;
}
{
const __VLS_239 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_240 = __VLS_elementAsFunctionalComponent(__VLS_239);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_241 = __VLS_240({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_240));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_239, typeof __VLS_241> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_242 = __VLS_pickFunctionalComponentCtx(__VLS_239, __VLS_241)!;
{
const __VLS_243 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_244 = __VLS_elementAsFunctionalComponent(__VLS_243);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_245 = __VLS_244({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_244));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_243, typeof __VLS_245> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_246 = __VLS_pickFunctionalComponentCtx(__VLS_243, __VLS_245)!;
{
const __VLS_247 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_248 = __VLS_elementAsFunctionalComponent(__VLS_247);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_249 = __VLS_248({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_248));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_247, typeof __VLS_249> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_250 = __VLS_pickFunctionalComponentCtx(__VLS_247, __VLS_249)!;
(__VLS_250.slots!).default;
}
{
const __VLS_251 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_252 = __VLS_elementAsFunctionalComponent(__VLS_251);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_253 = __VLS_252({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_252));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_251, typeof __VLS_253> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_254 = __VLS_pickFunctionalComponentCtx(__VLS_251, __VLS_253)!;
(__VLS_254.slots!).default;
}
(__VLS_246.slots!).default;
}
{
const __VLS_255 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_256 = __VLS_elementAsFunctionalComponent(__VLS_255);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_257 = __VLS_256({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_255, typeof __VLS_257> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257)!;
{
const __VLS_259 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_260 = __VLS_elementAsFunctionalComponent(__VLS_259);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_261 = __VLS_260({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_260));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_259, typeof __VLS_261> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_262 = __VLS_pickFunctionalComponentCtx(__VLS_259, __VLS_261)!;
(__VLS_262.slots!).default;
}
{
const __VLS_263 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_264 = __VLS_elementAsFunctionalComponent(__VLS_263);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_265 = __VLS_264({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_264));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_263, typeof __VLS_265> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_266 = __VLS_pickFunctionalComponentCtx(__VLS_263, __VLS_265)!;
{
const __VLS_267 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_268 = __VLS_elementAsFunctionalComponent(__VLS_267);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_269 = __VLS_268({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_268));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_267, typeof __VLS_269> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_270 = __VLS_pickFunctionalComponentCtx(__VLS_267, __VLS_269)!;
}
(__VLS_266.slots!).default;
}
(__VLS_258.slots!).default;
}
(__VLS_242.slots!).default;
}
{
const __VLS_271 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_272 = __VLS_elementAsFunctionalComponent(__VLS_271);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_273 = __VLS_272({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_272));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_271, typeof __VLS_273> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_274 = __VLS_pickFunctionalComponentCtx(__VLS_271, __VLS_273)!;
{
const __VLS_275 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_276 = __VLS_elementAsFunctionalComponent(__VLS_275);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_277 = __VLS_276({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_275, typeof __VLS_277> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_278 = __VLS_pickFunctionalComponentCtx(__VLS_275, __VLS_277)!;
{
const __VLS_279 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_280 = __VLS_elementAsFunctionalComponent(__VLS_279);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_281 = __VLS_280({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_280));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_279, typeof __VLS_281> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_282 = __VLS_pickFunctionalComponentCtx(__VLS_279, __VLS_281)!;
(__VLS_282.slots!).default;
}
{
const __VLS_283 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_284 = __VLS_elementAsFunctionalComponent(__VLS_283);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_285 = __VLS_284({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_284));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_283, typeof __VLS_285> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_286 = __VLS_pickFunctionalComponentCtx(__VLS_283, __VLS_285)!;
(__VLS_286.slots!).default;
}
(__VLS_278.slots!).default;
}
{
const __VLS_287 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_288 = __VLS_elementAsFunctionalComponent(__VLS_287);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_289 = __VLS_288({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_288));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_287, typeof __VLS_289> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_290 = __VLS_pickFunctionalComponentCtx(__VLS_287, __VLS_289)!;
{
const __VLS_291 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_292 = __VLS_elementAsFunctionalComponent(__VLS_291);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_293 = __VLS_292({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_292));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_291, typeof __VLS_293> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_294 = __VLS_pickFunctionalComponentCtx(__VLS_291, __VLS_293)!;
(__VLS_294.slots!).default;
}
{
const __VLS_295 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_296 = __VLS_elementAsFunctionalComponent(__VLS_295);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_297 = __VLS_296({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_295, typeof __VLS_297> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_298 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297)!;
{
const __VLS_299 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_300 = __VLS_elementAsFunctionalComponent(__VLS_299);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_301 = __VLS_300({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_300));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_299, typeof __VLS_301> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_302 = __VLS_pickFunctionalComponentCtx(__VLS_299, __VLS_301)!;
}
(__VLS_298.slots!).default;
}
(__VLS_290.slots!).default;
}
(__VLS_274.slots!).default;
}
{
const __VLS_303 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_304 = __VLS_elementAsFunctionalComponent(__VLS_303);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_305 = __VLS_304({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_304));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_303, typeof __VLS_305> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_306 = __VLS_pickFunctionalComponentCtx(__VLS_303, __VLS_305)!;
{
const __VLS_307 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_308 = __VLS_elementAsFunctionalComponent(__VLS_307);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_309 = __VLS_308({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_308));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_307, typeof __VLS_309> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_310 = __VLS_pickFunctionalComponentCtx(__VLS_307, __VLS_309)!;
{
const __VLS_311 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_312 = __VLS_elementAsFunctionalComponent(__VLS_311);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_313 = __VLS_312({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_312));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_311, typeof __VLS_313> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_314 = __VLS_pickFunctionalComponentCtx(__VLS_311, __VLS_313)!;
(__VLS_314.slots!).default;
}
{
const __VLS_315 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_316 = __VLS_elementAsFunctionalComponent(__VLS_315);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_317 = __VLS_316({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_315, typeof __VLS_317> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_318 = __VLS_pickFunctionalComponentCtx(__VLS_315, __VLS_317)!;
(__VLS_318.slots!).default;
}
(__VLS_310.slots!).default;
}
{
const __VLS_319 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_320 = __VLS_elementAsFunctionalComponent(__VLS_319);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_321 = __VLS_320({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_320));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_319, typeof __VLS_321> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_322 = __VLS_pickFunctionalComponentCtx(__VLS_319, __VLS_321)!;
{
const __VLS_323 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_324 = __VLS_elementAsFunctionalComponent(__VLS_323);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_325 = __VLS_324({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_324));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_323, typeof __VLS_325> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_326 = __VLS_pickFunctionalComponentCtx(__VLS_323, __VLS_325)!;
(__VLS_326.slots!).default;
}
{
const __VLS_327 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_328 = __VLS_elementAsFunctionalComponent(__VLS_327);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_329 = __VLS_328({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_328));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_327, typeof __VLS_329> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_330 = __VLS_pickFunctionalComponentCtx(__VLS_327, __VLS_329)!;
{
const __VLS_331 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_332 = __VLS_elementAsFunctionalComponent(__VLS_331);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_333 = __VLS_332({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_332));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_331, typeof __VLS_333> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_334 = __VLS_pickFunctionalComponentCtx(__VLS_331, __VLS_333)!;
}
(__VLS_330.slots!).default;
}
(__VLS_322.slots!).default;
}
(__VLS_306.slots!).default;
}
{
const __VLS_335 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_336 = __VLS_elementAsFunctionalComponent(__VLS_335);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_337 = __VLS_336({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_335, typeof __VLS_337> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_338 = __VLS_pickFunctionalComponentCtx(__VLS_335, __VLS_337)!;
{
const __VLS_339 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_340 = __VLS_elementAsFunctionalComponent(__VLS_339);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_341 = __VLS_340({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_340));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_339, typeof __VLS_341> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_342 = __VLS_pickFunctionalComponentCtx(__VLS_339, __VLS_341)!;
{
const __VLS_343 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_344 = __VLS_elementAsFunctionalComponent(__VLS_343);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_345 = __VLS_344({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_344));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_343, typeof __VLS_345> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_346 = __VLS_pickFunctionalComponentCtx(__VLS_343, __VLS_345)!;
(__VLS_346.slots!).default;
}
{
const __VLS_347 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_348 = __VLS_elementAsFunctionalComponent(__VLS_347);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_349 = __VLS_348({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_348));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_347, typeof __VLS_349> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_350 = __VLS_pickFunctionalComponentCtx(__VLS_347, __VLS_349)!;
(__VLS_350.slots!).default;
}
(__VLS_342.slots!).default;
}
{
const __VLS_351 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_352 = __VLS_elementAsFunctionalComponent(__VLS_351);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_353 = __VLS_352({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_352));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_351, typeof __VLS_353> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_354 = __VLS_pickFunctionalComponentCtx(__VLS_351, __VLS_353)!;
{
const __VLS_355 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_356 = __VLS_elementAsFunctionalComponent(__VLS_355);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_357 = __VLS_356({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_355, typeof __VLS_357> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_358 = __VLS_pickFunctionalComponentCtx(__VLS_355, __VLS_357)!;
(__VLS_358.slots!).default;
}
{
const __VLS_359 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_360 = __VLS_elementAsFunctionalComponent(__VLS_359);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_361 = __VLS_360({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_360));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_359, typeof __VLS_361> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_362 = __VLS_pickFunctionalComponentCtx(__VLS_359, __VLS_361)!;
{
const __VLS_363 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_364 = __VLS_elementAsFunctionalComponent(__VLS_363);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_365 = __VLS_364({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_364));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_363, typeof __VLS_365> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_366 = __VLS_pickFunctionalComponentCtx(__VLS_363, __VLS_365)!;
}
(__VLS_362.slots!).default;
}
(__VLS_354.slots!).default;
}
(__VLS_338.slots!).default;
}
{
const __VLS_367 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_368 = __VLS_elementAsFunctionalComponent(__VLS_367);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_369 = __VLS_368({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_368));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_367, typeof __VLS_369> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_370 = __VLS_pickFunctionalComponentCtx(__VLS_367, __VLS_369)!;
{
const __VLS_371 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_372 = __VLS_elementAsFunctionalComponent(__VLS_371);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_373 = __VLS_372({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_372));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_371, typeof __VLS_373> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_374 = __VLS_pickFunctionalComponentCtx(__VLS_371, __VLS_373)!;
{
const __VLS_375 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_376 = __VLS_elementAsFunctionalComponent(__VLS_375);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_377 = __VLS_376({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_376));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_375, typeof __VLS_377> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_378 = __VLS_pickFunctionalComponentCtx(__VLS_375, __VLS_377)!;
(__VLS_378.slots!).default;
}
{
const __VLS_379 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_380 = __VLS_elementAsFunctionalComponent(__VLS_379);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_381 = __VLS_380({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_380));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_379, typeof __VLS_381> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_382 = __VLS_pickFunctionalComponentCtx(__VLS_379, __VLS_381)!;
(__VLS_382.slots!).default;
}
(__VLS_374.slots!).default;
}
{
const __VLS_383 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_384 = __VLS_elementAsFunctionalComponent(__VLS_383);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_385 = __VLS_384({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_384));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_383, typeof __VLS_385> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_386 = __VLS_pickFunctionalComponentCtx(__VLS_383, __VLS_385)!;
{
const __VLS_387 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_388 = __VLS_elementAsFunctionalComponent(__VLS_387);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_389 = __VLS_388({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_388));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_387, typeof __VLS_389> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_390 = __VLS_pickFunctionalComponentCtx(__VLS_387, __VLS_389)!;
(__VLS_390.slots!).default;
}
{
const __VLS_391 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_392 = __VLS_elementAsFunctionalComponent(__VLS_391);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_393 = __VLS_392({ ...{}, class: ("sttings"), }, ...__VLS_functionalComponentArgsRest(__VLS_392));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_391, typeof __VLS_393> & Record<string, unknown>) => void)({ ...{}, class: ("sttings"), });
const __VLS_394 = __VLS_pickFunctionalComponentCtx(__VLS_391, __VLS_393)!;
{
const __VLS_395 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_396 = __VLS_elementAsFunctionalComponent(__VLS_395);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_397 = __VLS_396({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_396));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_395, typeof __VLS_397> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_398 = __VLS_pickFunctionalComponentCtx(__VLS_395, __VLS_397)!;
}
(__VLS_394.slots!).default;
}
(__VLS_386.slots!).default;
}
(__VLS_370.slots!).default;
}
{
const __VLS_399 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_400 = __VLS_elementAsFunctionalComponent(__VLS_399);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_401 = __VLS_400({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_400));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_399, typeof __VLS_401> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_402 = __VLS_pickFunctionalComponentCtx(__VLS_399, __VLS_401)!;
{
const __VLS_403 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_404 = __VLS_elementAsFunctionalComponent(__VLS_403);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_405 = __VLS_404({ ...{}, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_404));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_403, typeof __VLS_405> & Record<string, unknown>) => void)({ ...{}, class: ("details"), });
const __VLS_406 = __VLS_pickFunctionalComponentCtx(__VLS_403, __VLS_405)!;
{
const __VLS_407 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_408 = __VLS_elementAsFunctionalComponent(__VLS_407);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_409 = __VLS_408({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_408));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_407, typeof __VLS_409> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_410 = __VLS_pickFunctionalComponentCtx(__VLS_407, __VLS_409)!;
(__VLS_410.slots!).default;
}
{
const __VLS_411 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_412 = __VLS_elementAsFunctionalComponent(__VLS_411);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_413 = __VLS_412({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_412));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_411, typeof __VLS_413> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_414 = __VLS_pickFunctionalComponentCtx(__VLS_411, __VLS_413)!;
(__VLS_414.slots!).default;
}
(__VLS_406.slots!).default;
}
{
const __VLS_415 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_416 = __VLS_elementAsFunctionalComponent(__VLS_415);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_417 = __VLS_416({ ...{}, class: ("bottom-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_416));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_415, typeof __VLS_417> & Record<string, unknown>) => void)({ ...{}, class: ("bottom-content"), });
const __VLS_418 = __VLS_pickFunctionalComponentCtx(__VLS_415, __VLS_417)!;
{
const __VLS_419 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_420 = __VLS_elementAsFunctionalComponent(__VLS_419);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_421 = __VLS_420({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_420));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_419, typeof __VLS_421> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_422 = __VLS_pickFunctionalComponentCtx(__VLS_419, __VLS_421)!;
(__VLS_422.slots!).default;
}
{
const __VLS_423 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_424 = __VLS_elementAsFunctionalComponent(__VLS_423);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_425 = __VLS_424({ ...{}, class: ("settings"), }, ...__VLS_functionalComponentArgsRest(__VLS_424));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_423, typeof __VLS_425> & Record<string, unknown>) => void)({ ...{}, class: ("settings"), });
const __VLS_426 = __VLS_pickFunctionalComponentCtx(__VLS_423, __VLS_425)!;
{
const __VLS_427 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_428 = __VLS_elementAsFunctionalComponent(__VLS_427);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_429 = __VLS_428({ ...{}, class: ('bx bx-dots-horizontal-rounded'), }, ...__VLS_functionalComponentArgsRest(__VLS_428));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_427, typeof __VLS_429> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-dots-horizontal-rounded'), });
const __VLS_430 = __VLS_pickFunctionalComponentCtx(__VLS_427, __VLS_429)!;
}
{
const __VLS_431 = ({} as __VLS_IntrinsicElements)["ul"];
const __VLS_432 = __VLS_elementAsFunctionalComponent(__VLS_431);
({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).ul;
const __VLS_433 = __VLS_432({ ...{}, class: ("menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_432));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_431, typeof __VLS_433> & Record<string, unknown>) => void)({ ...{}, class: ("menu"), });
const __VLS_434 = __VLS_pickFunctionalComponentCtx(__VLS_431, __VLS_433)!;
{
const __VLS_435 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_436 = __VLS_elementAsFunctionalComponent(__VLS_435);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_437 = __VLS_436({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_436));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_435, typeof __VLS_437> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_438 = __VLS_pickFunctionalComponentCtx(__VLS_435, __VLS_437)!;
{
const __VLS_439 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_440 = __VLS_elementAsFunctionalComponent(__VLS_439);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_441 = __VLS_440({ ...{}, class: ('bx bx-pencil'), }, ...__VLS_functionalComponentArgsRest(__VLS_440));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_439, typeof __VLS_441> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-pencil'), });
const __VLS_442 = __VLS_pickFunctionalComponentCtx(__VLS_439, __VLS_441)!;
}
(__VLS_438.slots!).default;
}
{
const __VLS_443 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_444 = __VLS_elementAsFunctionalComponent(__VLS_443);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_445 = __VLS_444({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_444));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_443, typeof __VLS_445> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_446 = __VLS_pickFunctionalComponentCtx(__VLS_443, __VLS_445)!;
{
const __VLS_447 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_448 = __VLS_elementAsFunctionalComponent(__VLS_447);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_449 = __VLS_448({ ...{}, class: ('bx bx-trash'), }, ...__VLS_functionalComponentArgsRest(__VLS_448));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_447, typeof __VLS_449> & Record<string, unknown>) => void)({ ...{}, class: ('bx bx-trash'), });
const __VLS_450 = __VLS_pickFunctionalComponentCtx(__VLS_447, __VLS_449)!;
}
(__VLS_446.slots!).default;
}
(__VLS_434.slots!).default;
}
(__VLS_426.slots!).default;
}
(__VLS_418.slots!).default;
}
(__VLS_402.slots!).default;
}
(__VLS_61.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[viewshow, viewshow, viewshow, title, title, description, description, addNotes, title, description, viewshow, viewshow,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
title: title as typeof title,
description: description as typeof description,
addNotes: addNotes as typeof addNotes,
viewshow: viewshow as typeof viewshow,
};
},
});
export default {} as typeof __VLS_publicComponent;
