// Custom description
const descTemplate = "[CUSTOM TEXT]";

$(document).ready(() => {
  let interval = setInterval(() => {
    // Find description content
    let descContent = $("#xDesc");

    if (descContent.length != 0) {
      // Find elements
      let toolbar = descContent.find("div[role='toolbar']");
      let descTextbox = descContent.find("div[aria-label='Description']");
      let descAriaLabel = descContent.find("div[jsname='V67aGc']");

      let buttonHtml =
        "<button id='addTextButton' type='button' class='btn btn-warning'>Add Text</button>";

      toolbar.append($(buttonHtml));

      // Find the button on the DOM
      let buttonObj = descContent.find("#addTextButton");

      // Add button click event
      buttonObj.click(() => {
        descAriaLabel.remove();

        // Append text
        descTextbox.append(descTemplate);
      });

      clearInterval(interval);
    }
  }, 1000);
});
