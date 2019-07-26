;

var users = getUsers();
var posts = getPosts();
var comments = getComments();
createUsersSheet(users);

function createUsersSheet(users) {
    var usersSheet = document.querySelector(".users-sheet");
    var count = users.length;
    for (var i = 0; i < count; i++) {
        var row = (function(x) {
            var row = document.createElement("div");
            var user = users[x];
            row.innerHTML = 'Name: ' + user.name + '     UserName: ' + user.username;
            row.addEventListener('click', function() {
                openModal(user);
            });
            row.setAttribute("data-toggle", "modal");
            row.setAttribute("data-target", "#userSheet");
            return row;
        })(i);
        usersSheet.appendChild(row);
    }
};

function openModal(user) {
    var modal = document.querySelector(".modal");
    var title = modal.querySelector(".modal-title");
    var body = modal.querySelector(".modal-body");
    title.innerHTML = "Sheet of " + user.name;
    // add user-info
    for (elem in user) {
        var text = elem + ': ' + user[elem];
        body.appendChild( getRowElem(text) );
    }
    // сюда добавить посты
    // add user posts
    var postSheetTitle = document.createElement("div");
    postSheetTitle.innerHTML = 'Posts by user';
    body.appendChild(postSheetTitle);
    var userPosts = getUserPosts(user.id, posts)
    for(elem in userPosts) {
        var post = document.createElement("div");
        var postTitle = document.createElement("div");
        postTitle.innerHTML = "\n\n Post title:  " + userPosts[elem].title;
        postTitle.style.fontSize = "20px";
        postTitle.style.padding = "20px";
        var postBody = document.createElement("div");
        postBody.innerHTML = getShort(userPosts[elem].body)
        // var func = (function(el) {
        //     postBody.classList.toggle('active');
        //     (postBody.classList.contains("active")) ? postBody.innerHTML = getShort(userPosts[el].body) : postBody.innerHTML = userPosts[el].body
        //     return func;
        //   })(elem);
        // postBody.addEventListener("click", func);
        var func = (function(x, y) {
            y.addEventListener("click", function() {
                (y.classList.contains("active")) ? y.innerHTML = getShort(userPosts[x].body) : y.innerHTML = userPosts[x].body;
                y.classList.toggle('active');
                console.log('TOGGLE');
            });
        })(elem, postBody);
        // postBody.addEventListener("click", func);
        // postBody.addEventListener("click", function() {
        //     postBody.classList.toggle('active');
        //     console.log('TOGGLE');
        //     (postBody.classList.contains("active")) ? postBody.innerHTML = getShort(userPosts[elem].body) : postBody.innerHTML = userPosts[elem].body
        // });

        post.appendChild(postTitle);
        post.appendChild(postBody);
        body.appendChild(post);
    }
};

function getShort(str) {
    return str.replace(/^(.{20}[^\s]*).*/, "$1");

};
function getPosts() {
    var link = 'https://jsonplaceholder.typicode.com/posts';
    var type = 'GET';
    return getRequest(type, link);
};

function getUsers() {
    var link = 'https://jsonplaceholder.typicode.com/users';
    var type = 'GET';
    return getRequest(type, link);
};
function getComments() {
    var link = 'https://jsonplaceholder.typicode.com/comments';
    var type = 'GET';
    return getRequest(type, link);
};
function getUserPosts(id, allPosts) {
    var posts = []
    for (elem in allPosts) {
        var el = allPosts[elem];
        (el.userId == id) ? posts.push(el) : 0;
    }
    return posts;
};
function getRequest(type, link) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, link, false);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
        return;
    }
    return JSON.parse(xhr.responseText);
};
function getRowElem(inner) {
    var block = document.createElement("div");
    block.innerHTML = inner;
    return block;
};


//clear modal while closed
$("#userSheet").on('hidden.bs.modal', function(){
    var modal = document.querySelector(".modal-body");
    console.log("modal", modal);
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
});