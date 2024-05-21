import Vue from "vue";
import { Editor } from "baklavajs";
import { NodeInterface, NodeType } from "baklavajs";
import { BaklavaVuePlugin } from "@baklavajs/plugin-renderer-vue";
import "@baklavajs/plugin-renderer-vue/dist/styles.css";

class NumberNode extends NodeType {
    constructor() {
        super("Number");
        this.addOption("Number", "InputOption", 0);
        this.addOutputInterface("Number");
    }

    calculate() {
        const number = this.getOptionValue("Number");
        this.getInterface("Number").value = number;
    }
}

const editor = new Editor();
editor.use(NodeInterface);
editor.use(new BaklavaVuePlugin(Vue));
editor.registerNodeType(new NumberNode());

const app = document.querySelector("#app");
editor.addTo(app);