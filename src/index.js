import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start();
const context = require.context("./controllers", true, /\.js$/);
window.Stimulus.load(definitionsFromContext(context));
