import Sortable from 'sortablejs';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['list'];

  connect() {
    const sortable = Sortable.create(this.listTarget, {
      ghostClass: "ghost",
      animation: 150,
      onEnd: (event) => {
        alert(`${event.oldIndex} moved to ${event.newIndex}`);
      }
    });
  }
};
