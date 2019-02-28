var selectList = document.getElementById("breadcrumb-select");

var pathArray = window.location.pathname.split('/');
var currentPage = pathArray[2].replace(".html", "");

//Create array of options to be added
var array = ["github",
    "sourcetree",
    "close",
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
    "Introduction to SourceTree",
    "How to clone a repository",
    "IntelliJ IDEA",
    "Eclipse",
    "How to commit a file",
    "How to update local repo with new code from GitHub (pull)",
    "How to push to GitHub",
    "<b>IMPORTANT</b> How to create a feature (Pull Requests)",
    "Resolve Code Conflicts",
    "Rebase Branch against another branch",
    "<i>Optional</i> Amend unpushed commits",
    "<i>Optional</i> View CI Builds"
];

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = arrayText[i];
    selectList.appendChild(option);
}

var pageInArray = (myarr.indexOf(currentPage) > -1);
if (pageInArray) {
    selectList.value = currentPage;
}

selectList.addEventListener("change", function() {
    var url = document.getElementById('list').value + ".html";
        if(url != 'none') {
            window.location = url;
        }
});