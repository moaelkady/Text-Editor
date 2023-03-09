/**
 * Author >> Mohamed ElQadi
 * Visit me at ::
 * www.moqadi.com
 * https://www.linkedin.com/in/moqadi/
 * https://github.com/moaelkady
 */
let options = document.getElementsByClassName("options")[0],
  textArea = document.getElementById("textArea"),
  htmlPage = document.querySelector("html"),
  changeTextAreaMargin = () => {
    textArea.style.marginTop = `${options.clientHeight + 10}px`;
  },
  changeTextAreaHeight = () => {
    textArea.style.height = `${
      window.innerHeight - (options.clientHeight + 15)
    }px`;
  };
window.addEventListener("load", () => {
  changeTextAreaMargin(), changeTextAreaHeight();
}),
  window.addEventListener("resize", () => {
    setTimeout(changeTextAreaMargin(), 0),
      setTimeout(changeTextAreaHeight(), 0);
  });
let saveToLocalStorage = (t, e) => {
    window.localStorage.setItem(t, e);
  },
  fontSize = document.getElementById("fontSize");
window.localStorage.getItem("fontSize") &&
  ((textArea.style.fontSize = window.localStorage.getItem("fontSize") + "px"),
  (fontSize.value = window.localStorage.getItem("fontSize"))),
  fontSize.addEventListener("input", () => {
    fontSize.value
      ? fontSize.value > 1
        ? ((textArea.style.fontSize = `${fontSize.value}px`),
          saveToLocalStorage("fontSize", fontSize.value))
        : ((fontSize.value = 1),
          (textArea.style.fontSize = `${fontSize.value}px`),
          saveToLocalStorage("fontSize", fontSize.value))
      : ((textArea.style.fontSize = "1rem"),
        saveToLocalStorage("fontSize", "16"));
  });
let fontColor = document.getElementById("fontColor");
window.localStorage.getItem("fontColor") &&
  ((textArea.style.color = window.localStorage.getItem("fontColor")),
  (fontColor.value = window.localStorage.getItem("fontColor"))),
  fontColor.addEventListener("input", () => {
    fontColor.value
      ? ((textArea.style.color = fontColor.value),
        saveToLocalStorage("fontColor", fontColor.value))
      : ((textArea.style.color = "#333333"),
        saveToLocalStorage("fontColor", "#333333"));
  });
let fontBold = document.getElementById("fontBold");
"true" === window.localStorage.getItem("fontBold") &&
  (fontBold.classList.add("activeIcon"), textArea.classList.add("bold")),
  fontBold.addEventListener("click", () => {
    fontBold.classList.toggle("activeIcon"),
      textArea.classList.toggle("bold"),
      fontBold.classList.contains("activeIcon") &&
      textArea.classList.contains("bold")
        ? saveToLocalStorage("fontBold", "true")
        : saveToLocalStorage("fontBold", "false");
  });
let fontItalic = document.getElementById("fontItalic");
"true" === window.localStorage.getItem("fontItalic") &&
  (fontItalic.classList.add("activeIcon"), textArea.classList.add("italic")),
  fontItalic.addEventListener("click", () => {
    fontItalic.classList.toggle("activeIcon"),
      textArea.classList.toggle("italic"),
      fontItalic.classList.contains("activeIcon") &&
      textArea.classList.contains("italic")
        ? saveToLocalStorage("fontItalic", "true")
        : saveToLocalStorage("fontItalic", "false");
  });
let textUnderline = document.getElementById("textUnderline");
"true" === window.localStorage.getItem("textUnderline") &&
  (textUnderline.classList.add("activeIcon"),
  textArea.classList.add("underline")),
  textUnderline.addEventListener("click", () => {
    textUnderline.classList.toggle("activeIcon"),
      textArea.classList.toggle("underline"),
      textUnderline.classList.contains("activeIcon") &&
      textArea.classList.contains("underline")
        ? saveToLocalStorage("textUnderline", "true")
        : saveToLocalStorage("textUnderline", "false");
  });
let alignLeft = document.getElementById("alignLeft");
alignLeft.addEventListener("click", () => {
  alignLeft.classList.toggle("activeIcon"),
    alignRight.classList.remove("activeIcon"),
    alignCenter.classList.remove("activeIcon"),
    textJustify.classList.remove("activeIcon"),
    textArea.classList.remove("alignRight"),
    textArea.classList.toggle("alignLeft"),
    textArea.classList.remove("alignCenter"),
    textArea.classList.remove("justifyText"),
    textArea.classList.contains("alignLeft")
      ? saveToLocalStorage("textAlign", "alignLeft")
      : window.localStorage.removeItem("textAlign");
});
let alignCenter = document.getElementById("alignCenter");
alignCenter.addEventListener("click", () => {
  alignLeft.classList.remove("activeIcon"),
    alignRight.classList.remove("activeIcon"),
    alignCenter.classList.toggle("activeIcon"),
    textJustify.classList.remove("activeIcon"),
    textArea.classList.remove("alignRight"),
    textArea.classList.remove("alignLeft"),
    textArea.classList.toggle("alignCenter"),
    textArea.classList.remove("justifyText"),
    textArea.classList.contains("alignCenter")
      ? saveToLocalStorage("textAlign", "alignCenter")
      : window.localStorage.removeItem("textAlign");
});
let alignRight = document.getElementById("alignRight");
alignRight.addEventListener("click", () => {
  alignLeft.classList.remove("activeIcon"),
    alignRight.classList.toggle("activeIcon"),
    alignCenter.classList.remove("activeIcon"),
    textJustify.classList.remove("activeIcon"),
    textArea.classList.toggle("alignRight"),
    textArea.classList.remove("alignLeft"),
    textArea.classList.remove("alignCenter"),
    textArea.classList.remove("justifyText"),
    textArea.classList.contains("alignRight")
      ? saveToLocalStorage("textAlign", "alignRight")
      : window.localStorage.removeItem("textAlign");
});
let textJustify = document.getElementById("textJustify");
if (
  (textJustify.addEventListener("click", () => {
    alignLeft.classList.remove("activeIcon"),
      alignRight.classList.remove("activeIcon"),
      alignCenter.classList.remove("activeIcon"),
      textJustify.classList.toggle("activeIcon"),
      textArea.classList.remove("alignRight"),
      textArea.classList.remove("alignLeft"),
      textArea.classList.remove("alignCenter"),
      textArea.classList.toggle("justifyText"),
      textArea.classList.contains("justifyText")
        ? saveToLocalStorage("textAlign", "justifyText")
        : window.localStorage.removeItem("textAlign");
  }),
  window.localStorage.getItem("textAlign"))
) {
  let t = window.localStorage.getItem("textAlign");
  switch (t) {
    case "alignLeft":
      textArea.classList.toggle("alignLeft"),
        alignLeft.classList.toggle("activeIcon");
      break;
    case "alignCenter":
      alignCenter.classList.toggle("activeIcon"),
        textArea.classList.toggle("alignCenter");
      break;
    case "alignRight":
      alignRight.classList.toggle("activeIcon"),
        textArea.classList.toggle("alignRight");
      break;
    case "justifyText":
      textJustify.classList.toggle("activeIcon"),
        textArea.classList.toggle("justifyText");
      break;
    default:
      alignLeft.classList.toggle("activeIcon"),
        textArea.classList.toggle("alignLeft");
  }
}
(document.getElementById("saveBtn").onclick = function (t) {
  this.href =
    "data:text/plain;charset=UTF-8," + encodeURIComponent(textArea.value);
}),
  window.localStorage.getItem("textData") &&
    (textArea.value = window.localStorage.getItem("textData"));
let addTextToLocalStorage = (t) => {
    window.localStorage.setItem("textData", t);
  },
  getTextData = () => {
    setTimeout(addTextToLocalStorage(textArea.value), 0);
  };
textArea.addEventListener("keyup", () => {
  setTimeout(getTextData(), 0);
});
let themeDiv = document.getElementById("theme"),
  lighIcon = document.getElementById("lightTheme"),
  darkIcon = document.getElementById("darkTheme");
if (window.localStorage.getItem("theme")) {
  let e = window.localStorage.getItem("theme");
  "lightTheme" == e
    ? (darkIcon.classList.remove("hideIcon"),
      lighIcon.classList.add("hideIcon"))
    : "darkTheme" == e &&
      (lighIcon.classList.remove("hideIcon"),
      darkIcon.classList.add("hideIcon"),
      htmlPage.classList.add("dark"));
}
lighIcon.addEventListener("click", () => {
  lighIcon.classList.add("hideIcon"),
    darkIcon.classList.remove("hideIcon"),
    window.localStorage.setItem("theme", "lightTheme"),
    htmlPage.classList.remove("dark");
}),
  darkIcon.addEventListener("click", () => {
    darkIcon.classList.add("hideIcon"),
      lighIcon.classList.remove("hideIcon"),
      window.localStorage.setItem("theme", "darkTheme"),
      htmlPage.classList.add("dark");
  });
let ArEnBtn = document.getElementById("ArEn"),
  authorBtn = document.getElementById("visitAuthor");
window.localStorage.getItem("lang") &&
  (htmlPage.setAttribute("lang", window.localStorage.getItem("lang")),
  "en" == window.localStorage.getItem("lang")
    ? (textArea.setAttribute("placeholder", "Start Typing..."),
      (authorBtn.innerText = "Visit Author"))
    : "ar" == window.localStorage.getItem("lang") &&
      (textArea.setAttribute("placeholder", "ابدأ الكتابة..."),
      (authorBtn.innerText = "موقع المبرمج"))),
  ArEnBtn.addEventListener("click", () => {
    "en" == htmlPage.getAttribute("lang")
      ? (htmlPage.setAttribute("lang", "ar"),
        textArea.setAttribute("placeholder", "ابدأ الكتابة..."),
        (authorBtn.innerText = "زيارة المبرمج"),
        window.localStorage.setItem("lang", "ar"))
      : "ar" == htmlPage.getAttribute("lang") &&
        (htmlPage.setAttribute("lang", "en"),
        textArea.setAttribute("placeholder", "Start Typing..."),
        (authorBtn.innerText = "Visit Author"),
        window.localStorage.setItem("lang", "en"));
  });
let defaultbtn = document.getElementById("defaultBtn");
defaultbtn.addEventListener("click", () => {
  let t;
  "en" == htmlPage.getAttribute("lang")
    ? (t = confirm(
        "This will restore application default setting for font size and font color, Are you sure you want to proceed?"
      ))
    : "ar" == htmlPage.getAttribute("lang") &&
      (t = confirm(
        "سيؤدي هذا الي استعادة الاعدادت الافتراضية للتطبيق لحجم ولون الخط, هل تريد المتابعة؟"
      )),
    !0 == t &&
      (window.localStorage.removeItem("fontSize"),
      window.localStorage.removeItem("fontColor"));
});
