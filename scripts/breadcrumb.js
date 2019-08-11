var selectList = document.getElementById("breadcrumb-select");

var pathArray = window.location.pathname.split('/');
var currentPage = pathArray[2].replace(".html", "");

//Create array of options to be added
var array = ["github", "gitlab",
    "sourcetree",
    "clone",
    "import-intellij",
    "import-eclipse",
    "commit",
    "pull",
    "push",
    "pr",
    "conflict",
    "rebase",
    "amend",
    "buildserver"
];
var arrayText = [
    "Introduction to GitHub",
    "Introduction to GitLab",
    "Introduction to SourceTree",
    "How to clone a repository",
    "Import Project into IntelliJ IDEA",
    "Import Project into Eclipse",
    "How to commit a file",
    "How to update local repo with new code from GitHub (pull)",
    "How to push to GitHub",
    "[IMPORTANT] How to create a feature (Pull Requests)",
    "Resolve Code Conflicts",
    "Rebase Branch against another branch",
    "[Optional] Amend unpushed commits",
    "[Optional] View CI Builds"
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
}

selectList.addEventListener("change", function() {
    var url = selectList.value + ".html";
        if(url != 'none') {
            window.location = url;
        }
});