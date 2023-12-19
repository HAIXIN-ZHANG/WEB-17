export const setMiddleHighlineImg = () =>
    document
        .querySelectorAll(".main-middle-card.popup-trigger > img")
        .forEach(
            (value, index) =>
            (value.src = `//ik.imagekit.io/fangweij/highline/highline_${index + 1
                }.webp`)
        );
export const setMiddleProfileImg = () =>
    document
        .querySelectorAll(".main-middle-card.popup-trigger > .profile-photo > img")
        .forEach(
            (value, index) =>
            (value.src = `//ik.imagekit.io/fangweij/profile/profile_${index + 1
                }.webp`)
        );

export const popupTrigger = document.querySelectorAll(".popup-trigger");
export const popupClose = document.querySelectorAll(".popup-close");
export const popupTriggerLogic = function () {
    this.nextElementSibling.style.display = "flex";
};
export const popupCloseLogic = function () {
    this.closest(".popup").style.display = "none";
};

export function getRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++)
        color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    return color;
}
export function setBoarderColor(element) {
    element.style.borderColor = getRandomColor();
}

const postWrapper = document.querySelector(".main-middle-post-wrapper");

export const generateMiddlePostList = (cards) => {
    postWrapper.innerHTML = "";
    cards.forEach((value) => {
        const newArticle = document.createElement("article");
        newArticle.innerHTML = `
            <div class="info-profile">
                <div class="profile">
                    <div class="profile-photo"><img alt="profile photo" src=${value.profile.src} loading="lazy"/></div>
                    <div class="profile-description">
                        <h2>${value.profile.name}</h2>
                        <p>${value.profile.position}, ${value.profile.time}</p>
                    </div>
                </div>
                <i class="uil uil-ellipsis-h"></i>
            </div>
            <div class="info-picture"><img width="100%" src=${value.picture.img_src} alt="post image"/></div>
            <div class="info-control">
                <div class="main-control"><i class="uil uil-heart control_heart"></i><i class="uil uil-comment-dots"></i><i class="uil uil-share-alt"></i></div>
                <i class="uil uil-bookmark"></i>
            </div>
            <div class="info-comment">
                <div class="profile-photo-list">
                    <img src=${value.comment.img_src_list[0]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                    <img src=${value.comment.img_src_list[1]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                    <img src=${value.comment.img_src_list[2]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                    <span class="like-info">Liked by <strong> ${value.comment.first_people_name} </strong> and <strong> ${value.comment.like_peoples_number}</strong> others</span>
                </div>
                <span class="comment-info">${value.comment.comment_info}</span>
                <span class="view-btn">View all ${value.comment.view_number} comments</span>
            </div>
        `;
        setBoarderColor(newArticle.querySelector(".profile-photo"));
        newArticle
            .querySelectorAll(".profile-photo-list > .profile-photo")
            .forEach((value) => setBoarderColor(value));
        postWrapper.appendChild(newArticle);
    });
};

export const mainMiddleInput = (profile) =>
(document.querySelector(
    ".main-middle-thought-wrapper>input"
).placeholder = `What is on your mind, ${profile.name}?`);

export const setMiddlePostPhoto = profile => {
    document.querySelector(".main-middle-thought-wrapper > .profile-photo > img").src = profile.img_src;
};