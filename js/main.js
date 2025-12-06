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
    const buttons = document.querySelectorAll("main button");
    if (buttons.length > 0) {
        for (const button of buttons) {
            if (button.dataset.postId) {
                button.addEventListener("click", function(event) {
                    toggleComments(event, button.dataset.postId);
                });
            }
        }
    }
    return buttons;
}

// 7.
function removeButtonListeners() {
    const buttons = document.querySelectorAll("main button");
    if (buttons.length > 0) {
        for (const button of buttons) {
            if (button.dataset.postId) {
                button.removeEventListener;
            }
        }
    }
    return buttons;
}

// 8.
function createComments(comments) {
    if (!comments) return undefined;
    const fragment = document.createDocumentFragment();
    for (const comment of comments) {
        const article = document.createElement('article');
        const h3 = createElemWithText('h3', comment.name);
        const p = createElemWithText('p', comment.body);
        const pEmail = createElemWithText('p', `From: ${comment.email}`);
        article.append(h3);
        article.append(p);
        article.append(pEmail);
        fragment.append(article);
    }
    return fragment;
}

// 9.
function populateSelectMenu(users) {
    if (!users) return undefined;
    const selectMenu = document.getElementById("selectMenu");
    const options = createSelectOptions(users);
    for (const option of options) {
        selectMenu.append(option);
    }
    return selectMenu;
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
    const section = document.createElement('section');
    section.dataset.postId = postId;
    section.classList.add('comments', 'hide');
    const comments = await getPostComments(postId);
    const fragment = createComments(comments);
    section.append(fragment);
    return section;
}

// 15.
async function createPosts(posts) {
    if (!posts) return undefined;
    const fragment = document.createDocumentFragment();
    for(const post of posts) {
        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        const idPara = document.createElement('p');
        idPara.textContent =  `Post ID: ${post.id}`;

        const author = await getUser(post.userId);

        const authorPara = document.createElement('p');
        authorPara.textContent = `Author: ${author.name} with ${author.company.name}`;

        const phrase = document.createElement('p');
        phrase.textContent = `${author.company.catchPhrase}`; 

        const button = document.createElement('button');
        button.textContent = 'Show Comments';
        button.dataset.postId = post.id;

        article.appendChild(title);
        article.appendChild(body);
        article.appendChild(idPara);
        article.appendChild(authorPara);
        article.appendChild(phrase);
        article.appendChild(button);

        const section = await displayComments(post.id);
        article.appendChild(section);

        fragment.appendChild(article);
    }
    return fragment;
}

// 16.
async function displayPosts(posts) {
    const main = document.querySelector('main');
    if (posts) {
        const element = await createPosts(posts);
        main.appendChild(element);
        return element;
    }
    const element = main.querySelector('.default-text');
    main.appendChild(element);
    return element;
}

// 17.
function toggleComments(event, postId) {
    if (!event || !postId) return undefined;
    event.target.listener = true;
    const section = toggleCommentSection(postId);
    const button = toggleCommentButton(postId);
    return [section, button];
}

// 18. 
async function refreshPosts(posts) {
    if (!posts) return undefined;
    const removeButtons = removeButtonListeners('button');
    const main = deleteChildElements(document.querySelector('main'));
    const fragment = await displayPosts(posts);
    const addButtons = addButtonListeners('button');
    return [removeButtons, main, fragment, addButtons];
}

// 19.
async function selectMenuChangeEventHandler(event) {
    if (!event) return undefined;
    if (!event.target) return undefined;

    event.target.disabled = true;
    let userId = Number(event.target.value) || 1;
    //if (isNaN(event.target.value) || !event.target.value)
        //userId = 1;
    const posts = await getUserPosts(userId);
    const refreshPostsArray = await refreshPosts(posts);
    event.target.disabled = false;
    return [userId, posts, refreshPostsArray];
}

// 20.
async function initPage() {
    const users = await getUsers();
    const select = populateSelectMenu(users);
    return [users, select];
}

// 21.
function initApp() {
    initPage();    
    const selectMenu = document.getElementById("selectMenu");
    selectMenu.addEventListener("change", (event) => {
        selectMenuChangeEventHandler(event);
    });
}
document.addEventListener('DOMContentLoaded', initApp);