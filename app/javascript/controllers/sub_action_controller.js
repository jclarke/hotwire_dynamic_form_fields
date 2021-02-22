import { Controller } from "stimulus";
export default class extends Controller {
  static values = {
    frameName: String,
    newTarget: String,
    subAction: String,
    subActionId: String,
  };

  update() {
    this.updateFrameTargetAndSubActionValues();
  }

  updateAndSubmit() {
    this.updateFrameTargetAndSubActionValues();
    Rails.fire(this.element.closest("form"), "submit");
  }

  updateFrameTargetAndSubActionValues() {
    this.addHiddenSubActionInputs();

    document
      .getElementById(this.frameNameValue)
      .setAttribute("target", this.newTargetValue);

    if (this.subActionValue) {
      document.getElementById("subaction").value = this.subActionValue;
      document.getElementById("subaction_id").value = this.subActionIdValue;
    } else {
      document.getElementById("subaction").value = "";
      document.getElementById("subaction_id").value = "";
    }
  }

  addHiddenSubActionInputs() {
    if (document.getElementById("subaction") == null) {
      var elInput = document.createElement("input");
      elInput.setAttribute("type", "hidden");
      elInput.id = "subaction";
      elInput.setAttribute("name", "subaction");
      this.element.closest("form").appendChild(elInput);
    }

    if (document.getElementById("subaction_id") == null) {
      var elInput = document.createElement("input");
      elInput.setAttribute("type", "hidden");
      elInput.id = "subaction_id";
      elInput.setAttribute("name", "subaction_id");
      this.element.closest("form").appendChild(elInput);
    }
  }
}
