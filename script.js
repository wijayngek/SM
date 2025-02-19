// Show Content on Click
function showContent(section) {
    let sections = document.querySelectorAll('.content > div');
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}
        function showContent(section) {
            let sections = document.querySelectorAll('.content > div');
            sections.forEach(sec => sec.classList.add('hidden'));
            document.getElementById(section).classList.remove('hidden');
        }

        function searchFunction() {
            let input = document.getElementById("searchBar").value.toLowerCase();
            let links = document.querySelectorAll(".sidenav a");

            links.forEach(link => {
                if (link.textContent.toLowerCase().includes(input)) {
                    link.style.display = "";
                } else {
                    link.style.display = "none";
             
// Search Bar Functionality
function searchFunction() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let links = document.querySelectorAll(".sidenav a");

    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(input)) {
            link.style.display = "";
        } else {
            link.style.display = "none";
        }
    });
}
       }
            });
        }
