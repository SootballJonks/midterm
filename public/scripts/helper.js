const $errorNoContent = $(`<h2 id="warning-too-long">
<i class="fas fa-exclamation-triangle fa-xs"></i>
Got nothing to say?<i class="fas fa-exclamation-triangle fa-xs"></i>
</h2>`);

const textValidation = (str) => {
  if (str.length === 0) {
    return false;
  }
  return true;
};

const storyIDSlicer = (storyIDAttr) => {
  let storyID = "";
  for (let i = 0; i < storyIDAttr.length; i++) {
    if (storyIDAttr.charCodeAt(i) > 47 && storyIDAttr.charCodeAt(i) < 58) {
      storyID += storyIDAttr[i];
    }
  }
  return storyID;
};
const textUnderLine = () => {
  $(document).on("hover", ".story-read-more", () => {
    $(".story-read-more").css("text-decoration", "underline");
  });
};

const warning = () => {
  Swal.fire({
    title: "?",
    text: "Vows of Silence?",
    confirmButtonColor: "#343a40",
  });
};
const warningLogin = () => {
  Swal.fire({
    text: "Please Enter your email or password",
    confirmButtonColor: "#343a40",
  });
};

$(document).ready(() => {});
