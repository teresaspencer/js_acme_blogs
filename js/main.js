// 1.
function createElemWithText(elemType = 'p', text = '', className) {
    const myElem = document.createElement(elemType);
    myElem.textContent = text;
    if (className) {
        myElem.classList.add(className);
    }
    return myElem;
}

// 2.
function createSelectOptions(userData) {
    if (!userData) return;
    const options = [];
    for (const user of userData) {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        options.push(option);
    }
    return options;
}

// 3.
function toggleCommentSection(postId) {

}

// 4.
function toggleCommentButton(postId) {

}

// 5.
function deleteChildElements(parentElement) {

}

// 6.
function addButtonListeners() {

}

// 7.
function removeButtonListeners() {

}

// 8.
function createComments() {

}

// 9.
function populateSelectMenu() {

}

// 10.
function getUsers() {

}

// 11.
function getUserPosts() {

}

// 12.
function getUser() {

}

// 13.
function getPostComments() {

}

// 14.
function displayComments() {

}

// 15.
function createPosts() {

}

// 16.
function displayPosts() {

}

// 17.
function toggleComments() {

}

// 18. 
function refreshPosts() {

}

// 19.
function selectMenuChangeEventHandler() {

}

// 20.
function initPage() {

}

// 21.
function initApp() {
    
}