import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['button', 'reset'];

  connect() {
    console.log('Hello from your Stimulus controller!');
  }

  disable() {
    console.log('time to disable the button');
    this.buttonTarget.innerText = 'Please wait...';
    this.buttonTarget.setAttribute('disabled', '');

    // Show the reset button!
    this.resetTarget.classList.remove('d-none');
  }

  reset() {
    // hide the reset button!
    this.resetTarget.classList.add('d-none');

    // change the 'click me' button to how it was before
    this.buttonTarget.innerText = 'Click me!';
    this.buttonTarget.removeAttribute('disabled');

  }
}
