import "./index.css";
import { setRightCornerImage } from "@/js/nav/nav.js";
import { getDatabase } from "@/js/database/database.js";
import { setMainLeftProfileImage, setMainLeftProfileText } from "@/js/main/main-left.js";
import {
    setMiddleHighlineImg, setMiddleProfileImg, popupTrigger,
    popupClose,
    popupTriggerLogic,
    popupCloseLogic,
    generateMiddlePostList,
    mainMiddleInput,
    setMiddlePostPhoto,
} from "@/js/main/main-middle.js";
import {
    friendOptionPanelLogic,
    createPrimaryList,
    createRequestList,
    createRequestPanel,
    primaryBtn,
    requestBtn,
    generalBtn,
    createGeneralList,
    mainRightSearchInput_request,
    handle_main_right_search_request,
    mainRightSearchInput_primary,
    handle_main_right_search_primary,
    handle_main_right_search_primary_clear,
    handle_main_right_search_request_clear,
} from "@/js/main/main-right";

const { cards, profile, highline, message, request } = await getDatabase();

console.log('xxxx', cards, profile, highline, message, request);


// nav
setRightCornerImage(profile)

// main-left
setMainLeftProfileImage(profile)
setMainLeftProfileText(profile)

// main-middle
setMiddleHighlineImg()
setMiddleProfileImg()
setMiddlePostPhoto(profile)
// main-middle card logic
popupTrigger.forEach(value => value.addEventListener("click", popupTriggerLogic));
popupClose.forEach(value => value.addEventListener("click", popupCloseLogic));

generateMiddlePostList(cards)
mainMiddleInput(profile)

// main-right
// main-right searchbar functionality
mainRightSearchInput_primary.addEventListener("input", handle_main_right_search_primary);
mainRightSearchInput_primary.addEventListener("keydown", handle_main_right_search_primary_clear);
mainRightSearchInput_request.addEventListener("input", handle_main_right_search_request);
mainRightSearchInput_request.addEventListener("keydown", handle_main_right_search_request_clear);

// main-right friend panel (three options)
friendOptionPanelLogic();

// main-right primary panel generation
createPrimaryList();

// main-right primary panel event listener
primaryBtn.addEventListener("click", createPrimaryList);

// main-right request panel generation
requestBtn.addEventListener("click", createRequestPanel);

// main-right general panel generation
generalBtn.addEventListener("click", createGeneralList);

// main-right request list generation
createRequestList();