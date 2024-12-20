import { defineComponent as d, computed as m, openBlock as t, createElementBlock as a, normalizeClass as g, normalizeStyle as z, toDisplayString as k, createElementVNode as s, createStaticVNode as f, createTextVNode as p, createCommentVNode as r, createBlock as n } from "vue";
const i = /* @__PURE__ */ d({
  __name: "Button",
  props: {
    label: {},
    primary: { type: Boolean, default: !1 },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(u, { emit: o }) {
    const e = u, l = o, y = m(() => ({
      "storybook-button": !0,
      "storybook-button--primary": e.primary,
      "storybook-button--secondary": !e.primary,
      [`storybook-button--${e.size || "medium"}`]: !0
    })), b = m(() => ({
      backgroundColor: e.backgroundColor
    })), c = () => {
      l("click", 1);
    };
    return (v, $) => (t(), a("button", {
      type: "button",
      class: g(y.value),
      onClick: c,
      style: z(b.value)
    }, k(v.label), 7));
  }
}), C = { class: "storybook-header" }, B = {
  key: 0,
  class: "welcome"
}, w = /* @__PURE__ */ d({
  __name: "Header",
  props: {
    user: {}
  },
  emits: ["createAccount", "login", "logout"],
  setup(u) {
    return (o, e) => (t(), a("header", null, [
      s("div", C, [
        e[5] || (e[5] = f('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>', 1)),
        s("div", null, [
          o.user ? (t(), a("span", B, [
            e[3] || (e[3] = p("Welcome, ")),
            s("b", null, k(o.user.name), 1),
            e[4] || (e[4] = p("!"))
          ])) : r("", !0),
          o.user ? (t(), n(i, {
            key: 1,
            size: "small",
            onClick: e[0] || (e[0] = (l) => o.$emit("logout")),
            label: "Log out"
          })) : r("", !0),
          o.user ? r("", !0) : (t(), n(i, {
            key: 2,
            size: "small",
            onClick: e[1] || (e[1] = (l) => o.$emit("login")),
            label: "Log in"
          })),
          o.user ? r("", !0) : (t(), n(i, {
            key: 3,
            primary: "",
            size: "small",
            onClick: e[2] || (e[2] = (l) => o.$emit("createAccount")),
            label: "Sign up"
          }))
        ])
      ])
    ]));
  }
});
export {
  i as Button,
  w as Header
};
