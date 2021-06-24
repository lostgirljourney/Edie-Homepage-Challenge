document.getElementsByClassName("col3")[0].onmouseover = function () {
  document.getElementsByClassName("serbtn")[0].style.background = "#2D9CDB";
  document.getElementsByClassName("serbtn")[0].style.color = "#FFFFFF";
};
document.getElementsByClassName("col3")[0].onmouseout = function () {
  document.getElementsByClassName("serbtn")[0].style.background = "#e0e0e0";
  document.getElementsByClassName("serbtn")[0].style.color = "#828282";
};

document.getElementsByClassName("col3")[1].onmouseover = function () {
  document.getElementsByClassName("serbtn")[1].style.background = "#2D9CDB";
  document.getElementsByClassName("serbtn")[1].style.color = "#FFFFFF";
};
document.getElementsByClassName("col3")[1].onmouseout = function () {
  document.getElementsByClassName("serbtn")[1].style.background = "#e0e0e0";
  document.getElementsByClassName("serbtn")[1].style.color = "#828282";
};

document.getElementsByClassName("col3")[2].onmouseover = function () {
  document.getElementsByClassName("serbtn")[2].style.background = "#2D9CDB";
  document.getElementsByClassName("serbtn")[2].style.color = "#FFFFFF";
};
document.getElementsByClassName("col3")[2].onmouseout = function () {
  document.getElementsByClassName("serbtn")[2].style.background = "#e0e0e0";
  document.getElementsByClassName("serbtn")[2].style.color = "#828282";
};

function clicksOpen() {
  if (document.getElementById("check").checked === true) {
    document.getElementById("body-id").classList.add("stop-scrolling");
  } else {
    document.getElementById("body-id").classList.remove("stop-scrolling");
  }
}

function clicksClose() {
  document.getElementById("check").checked = false;
  document.getElementById("body-id").classList.remove("stop-scrolling");
}

function darkLight() {
  if (document.getElementById("check-low").checked === true) {
    document.documentElement.style.setProperty("--bgcolor", "#181719");
    document.documentElement.style.setProperty("--fontcol", "#FFFFFF");
    document.documentElement.style.setProperty("--fontcolmini", "#c0c0c0");
    document.documentElement.style.setProperty("--footcolor", "#550A46");
  } else {
    document.documentElement.style.setProperty("--bgcolor", "#FFFFFF");
    document.documentElement.style.setProperty("--fontcol", "#181719");
    document.documentElement.style.setProperty("--fontcolmini", "#828282");
    document.documentElement.style.setProperty("--footcolor", "#100E1D");
  }
}
