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
    "Commit Files",
    "Update local repo files from GitHub (pull)",
    "How to push to GitHub",
    "[IMPORTANT] How to create a feature (GitHub PR)",
    "[IMPORTANT] How to create a feature (GitLab MR)",
    "Resolve Code Conflicts",
    "Resolve GitLab Code Conflicts online during MR",
    "Rebase Branch against another branch",
    "[Optional] Amend unpushed commits",
    "[Optional] View GitLab Travis CI Builds",
    "[Optional] View GitLab CI Builds",
    "[Optional] Modify code with GitLab Web IDE"
];

// gh - GitHub, gl - GitLab, ghst - GitHub + Source Tree, glst - GitLab + SourceTree, all - GitHub + GitLab + SourceTree
var faText = [
    "gh",
    "gl",
    "st",
    "ghst",
    "glst",
    "",
    "",
    "all",
    "all",
    "all",
    "ghst",
    "glst",
    "all",
    "gl",
    "all",
    "all",
    "gh",
    "gl",
    "gl"
];

var faHTML = [
    "<i class=\"fab fa-github\"></i>/<i class=\"fab fa-gitlab\"></i>/<i class=\"fab fa-sourcetree\"></i> ",
    "<i class=\"fab fa-github\"></i> ",
    "<i class=\"fab fa-gitlab\"></i> ",
    "<i class=\"fab fa-sourcetree\"></i> ",
    "<i class=\"fab fa-gitlab\"></i>/<i class=\"fab fa-sourcetree\"></i> ",
    "<i class=\"fab fa-github\"></i>/<i class=\"fab fa-sourcetree\"></i> ",
    ""
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
        updateBreadcrumbButton(generateTextWithFAIcons(arrayText[index-1], index-1), array[index-1] + ".html", true); // Get Previous Button
    }
    
    if (index !== array.length - 1) {
        updateBreadcrumbButton(generateTextWithFAIcons(arrayText[index+1], index+1), array[index+1] + ".html", false); // Get Next Button
    }
}

selectList.addEventListener("change", function() {
    var url = selectList.value + ".html";
        if(url != 'none') {
            window.location = url;
        }
});

function generateTextWithFAIcons(text, index) {
    var iconType = faText[index];
    if (iconType == null) return text;
    switch (iconType) {
        case "all": return faHTML[0] + text;
        case "gl": return faHTML[2] + text;
        case "gh": return faHTML[1] + text;
        case "st": return faHTML[3] + text;
        case "glst": return faHTML[4] + text;
        case "ghst": return faHTML[5] + text;
        default: return faHTML[6] + text;
    }
}

function updateBreadcrumbButton(newtext, newurl, prev = false) {
    var btn = document.getElementById((prev) ? "prebtn" : "nxtbtn");
    btn.innerHTML = newtext;
    btn.href = newurl;
}