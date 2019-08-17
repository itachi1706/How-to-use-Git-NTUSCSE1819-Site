var selectList = document.getElementById("breadcrumb-select");

var pathArray = window.location.pathname.split('/');
var currentPage = pathArray[2].replace(".html", "");

//Create array of options to be added
var array = ["github", "gitlab",
    "sourcetree",
    "clone", "clone-gitlab",
    "import-intellij",
    "import-eclipse",
    "commit",
    "pull",
    "push",
    "pr", "mr",
    "conflict", "conflict-web",
    "rebase",
    "amend",
    "buildserver",
    "pipeline",
    "webide"
];
var arrayText = [
    "Introduction to GitHub",
    "Introduction to GitLab",
    "Introduction to SourceTree",
    "How to clone a GitHub repository",
    "How to clone a GitLab repository",
    "Import Project into IntelliJ IDEA",
    "Import Project into Eclipse",
    "How to commit a file",
    "How to update local repo with new code from GitHub (pull)",
    "How to push to GitHub",
    "[IMPORTANT] How to create a feature (Pull Requests)",
    "[IMPORTANT] How to create a feature (Merge Requests)",
    "Resolve Code Conflicts",
    "Resolve GitLab Code Conflicts during MR online",
    "Rebase Branch against another branch",
    "[Optional] Amend unpushed commits",
    "[Optional] View GitLab Travis CI Builds",
    "[Optional] View GitLab CI Builds",
    "[Optional] Modify code with GitLab Web IDE"
];

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = arrayText[i];
    selectList.appendChild(option);
}

var pageInArray = (array.indexOf(currentPage) > -1);
if (pageInArray) {
    selectList.value = currentPage;
    // Update the next and previous buttons
    var index = array.indexOf(currentPage);
    if (index !== 0) {
        updateBreadcrumbButton(arrayText[index-1], array[index-1] + ".html", true); // Get Previous Button
    }
    
    if (index !== array.length - 1) {
        updateBreadcrumbButton(arrayText[index+1], array[index+1] + ".html", false); // Get Next Button
    }
}

selectList.addEventListener("change", function() {
    var url = selectList.value + ".html";
        if(url != 'none') {
            window.location = url;
        }
});

function updateBreadcrumbButton(newtext, newurl, prev = false) {
    var btn = document.getElementById((prev) ? "prebtn" : "nxtbtn");
    btn.innerHTML = newtext;
    btn.href = newurl;
}