const isDataSuccessful = true;

function fetchUsers() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isDataSuccessful) {
                const users = [
                    { id: 1, name: "Sohaima" },
                    { id: 2, name: "Wanya" },
                    { id: 3, name: "Areeba" }
                ];
                resolve(users);
            } else {
                reject("❌ Failed to fetch user data.");
            }

        }, 3000);

    });
}

function loadUsers() {

    document.getElementById("usersOutput").innerHTML =
        `<div class="spinner"></div>`;

    fetchUsers()
        .then(users => {

            let output = "";

            users.forEach(user => {
                output += `
                    <div class="user-card">
                        <strong>ID:</strong> ${user.id} <br>
                        <strong>Name:</strong> ${user.name}
                    </div>
                `;
            });

            document.getElementById("usersOutput").innerHTML = output;

        })
        .catch(error => {
            document.getElementById("usersOutput").innerHTML = error;
        });
}