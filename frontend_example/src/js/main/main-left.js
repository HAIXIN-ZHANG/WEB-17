export const setMainLeftProfileImage = (profile) =>
  (document.querySelector(".main-left .profile-photo > img").src =
    profile.img_src);

export const setMainLeftProfileText = (profile) => {
  const h5 = document.querySelectorAll(".main-left .profile-description > h5");
  h5[0].textContent = profile.name;
  h5[1].textContent = profile.at;
};

export function applyStyles(element) {
    if (element.tagName !== "IMG" && element.tagName !== "BUTTON") {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    }
    if (element.tagName === "I") element.style.backgroundColor = "white";
    for (const childElement of element.children) applyStyles(childElement);
}