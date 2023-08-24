const employeeForm = document.getElementById("employee-form");
const employeeList = document.getElementById("employee-list");
const employees = [];

employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;

    const employee = {
        name,
        email,
        position
    };

    employees.push(employee);
    renderEmployeeList();

    employeeForm.reset();
});

function renderEmployeeList() {
    employeeList.innerHTML = "";
    employees.forEach((employee, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${employee.name}, ${employee.position}</span>
            <span>${employee.email}</span>
            <button onclick="editEmployee(${index})">Edit</button>
            <button onclick="deleteEmployee(${index})">Delete</button>
        `;
        employeeList.appendChild(li);
    });
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("position").value = employee.position;

    employees.splice(index, 1);
    renderEmployeeList();
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeList();
}

renderEmployeeList();
