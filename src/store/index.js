import { createStore } from "redux";

const initState = {
  titleText: "appgain",
  titleColor: "",
  titleBg: "",
  navLogo: "https://cdn.appgain.io/Appgain-website/img/logocolor-12x.png",
  ctaBtns: [],
};

const titleReducer = (state = initState, action) => {
  switch (action.type) {
    case "titleTextHandler":
      return { ...state, titleText: action.payload };
    case "colorHandler":
      return { ...state, titleColor: action.payload };
    case "bgHandler":
      return { ...state, titleBg: action.payload };
    case "addCtaBtn":
      return { ...state, ctaBtns: [...state.ctaBtns, action.payload] };
    case "Update_Logo_Handler":
      return { ...state, navLogo: action.payload };
    default:
      return state;
  }
};

const store = createStore(titleReducer);

export default store;
