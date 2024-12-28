import uiDesktop from "../../assets/images/webp/ui-desktop.webp";
import uiMobile from "../../assets/images/webp/ui-mobile.webp";
import goldDesktop from "../../assets/images/webp/goldcrown-desktop.webp";
import goldMobile from "../../assets/images/webp/goldcrown-mobile.webp";
import conciergeDesktop from "../../assets/images/webp/concierge-desktop.webp";
export const NAVBAR_DATA_LIST = [
    { title: "Home", url: "#hero" },
    { title: "About us", url: "#About" },
    { title: "Service", url: "#service" },
    { title: "Contact Us", url: "#contact" },
]
export const SOCIAL_MEDIA_DATA_LIST = [
    { icon: "facebook", url: "https://www.facebook.com/" },
    { icon: "linkedin", url: "https://www.linkedin.com/login" },
    { icon: "instagram", url: "https://www.instagram.com/accounts/login/?hl=en" },
]
export const WHAT_WE_DO_DATA_LIST = [
    { icon: "world", course: "Website Design" },
    { icon: "monitor", course: "Web Development" },
    { icon: "mobile", course: "Mobile APP Development" },
    { icon: "rocket", course: "Marketing" },
    { icon: "monitor", course: "Web Development" },
    { icon: "mobile", course: "Mobile APP Development" },
]
export const OUR_RECENT_WORK_DATA_LIST = [
    { desktopImage: uiDesktop, mobileImage: uiMobile, title: "UI Soup" },
    { desktopImage: goldDesktop, mobileImage: goldMobile, title: "Goldcrown Labs" },
    { desktopImage: conciergeDesktop, mobileImage: uiMobile, title: "Close Concierge" },
    { desktopImage: goldDesktop, mobileImage: goldMobile, title: "Goldcrown Labs" },
]