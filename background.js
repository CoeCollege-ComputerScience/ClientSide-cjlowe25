const clubs = [
    { id: 1, name: "Chess Club", subject: "Gaming", location: "Stuart Hall", keywords: ["Strategy", "Competitive", "Casual"], section: "chessArea"},
    { id: 2, name: "Choir", subject: "Music", location: "Marquis Hall", keywords: ["Singing", "Community", "Shows"], section: "choirArea"},
    { id: 3, name: "History Club", subject: "History", location: "Hickok Hall", keywords: ["Old", "Ancient", "Myths"], section: "historyArea"},
    { id: 4, name: "Esports", subject: "Gaming", location: "Schlarbaum House", keywords: ["Overwatch", "Valorant", "Competitive"], section: "esportsArea"},
    { id: 5, name: "Student Finances", subject: "Business", location: "Voorhees Hall", keywords: ["Money", "Broke", "Economics"], section: "financesArea"},
    { id: 6, name: "Band", subject: "Music", location: "Marquis Hall", keywords: ["Instruments", "Community", "Shows"], section: "bandArea"},
    { id: 7, name: "Writing Center", subject: "Writing", location: "Library", keywords: ["Learning", "Academics", "Helping"], section: "writingCenterArea"},
    { id: 8, name: "GSA", subject: "Social Justice", location: "Gage Memorial Union", keywords: ["Gay", "Straight", "Alliance", "Community", "LGBTQ"], section: "gsaArea"},
    { id: 9, name: "Competitive CS", subject: "Computer Science", location: "Stuart Hall", keywords: ["Python", "Java", "CSS", "Coding"], section: "competitiveCsArea"},
    { id: 10, name: "Book Club", subject: "Reading", location: "Library Basement", keywords: ["Fantasy", "Nonfiction", "Community"], section: "bookClubArea"}
];

let selectedUserData = null;
const tableBody = document.getElementById("tableBody");
const textInput = document.getElementById("textInput");

function populateTable(dataArray) {
    tableBody.innerHTML = "";
    dataArray.forEach(element => {
        const row = document.createElement("tr");
        if (selectedUserData && selectedUserData.id === element.id) {
            row.classList.add("selected");
        }
        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.subject}</td>
            <td>${element.location}</td>
            `;
        row.addEventListener("click", () => {
            selectedUserData = element;
            console.log(selectedUserData.section);
            document.getElementById(selectedUserData.section).scrollIntoView({
                behavior: "smooth"
            })
        });
        tableBody.appendChild(row);
    })
}

populateTable(clubs);

textInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = clubs.filter(user => {
        return (
            user.subject.toLowerCase().includes(searchTerm) ||
            user.name.toLowerCase().includes(searchTerm) ||
            user.location.toLowerCase().includes(searchTerm) ||
            user.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
        );
    });
    populateTable(filteredUsers);
});

// tableBody.addEventListener("click", () => {
//     const fourthValue = row[3];
//     console.log(fourthValue);
// });

// tableBody.addEventListener("click", (event) => {
//     const row = event.target.closest('tr');
//     if (row && row.closest('tbody')){
//         console.log(row.cells.section);
//         console.log(row.section);
//         document.getElementById(row.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     }
//
// })
