
const form = document.getElementById("studentForm");
const students = document.getElementById("students");

let data = JSON.parse(localStorage.getItem("students") || "[]");

function display() {
    students.innerHTML = "";
    data.forEach(s => {
        students.innerHTML +=
            `<tr><td>${s.roll}</td><td>${s.name}</td><td>${s.dept}</td></tr>`;
    });
}

form.onsubmit = function(e) {
    e.preventDefault();

    data.push({
        roll: document.getElementById("roll").value,
        name: document.getElementById("name").value,
        dept: document.getElementById("dept").value
    });

    localStorage.setItem("students", JSON.stringify(data));
    display();
    form.reset();
};

display();
