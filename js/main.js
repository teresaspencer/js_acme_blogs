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
    if (!postId) return undefined;
    const section = document.querySelector(`section[data-post-id="${postId}"]`);
    if (!section) return null;
    section.classList.toggle('hide');
    return section;
}

// 4.
function toggleCommentButton(postId) {
    if (!postId) return undefined;
    const button = document.querySelector(`button[data-post-id="${postId}"]`);
    if (!button) return null;
    button.textContent =
        button.textContent === 'Show Comments' ? 'Hide Comments' : 'Show Comments';
    return button;
}

// 5.
function deleteChildElements(parentElement) {
    if (!(parentElement instanceof Element)) return undefined;
    // look at this more!!
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
    return parentElement;
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
async function getUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const jsonUserData = await response.json();
        return jsonUserData;
    } catch (error) {
        return error;
    }
}

// 11.
async function getUserPosts(userId) {
    if (!userId) return undefined;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const jsonPostData = await response.json();
        return jsonPostData;
    } catch (error) {
        return error;
    }
}

// 12.
async function getUser(userId) {
    if (!userId) return undefined;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const jsonUserData = await response.json();
        return jsonUserData;
    } catch (error) {
        return error;
    }
}

// 13.
async function getPostComments(postId) {
    if (!postId) return undefined;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const jsonPostData = await response.json();
        return jsonPostData;
    } catch (error) {
        return error;
    }
}

// 14.
async function displayComments(postId) {
    if (!postId) return undefined;
    const section = document.createElement();
    section.dataset.postId;
    const comments = await getPostComments(postId);
    const fragment = createComments(comments);
    section.append(fragment);
    return section;
}

// 15.
async function createPosts() {

}

// 16.
async function displayPosts() {

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