import { createElement as h } from "react";

export default function App() {
    return h(
        "div",
        null,
        h("h1", null, "Hello Frontend Masters"),
        h("p", null, "This is SSG")
    );
}