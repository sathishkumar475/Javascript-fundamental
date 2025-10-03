

async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/users/2");
        if (!response.ok) {
            throw new Error("fetch data is not found");
        }
        const data = await response.json();
        // console.log(data);
        // document.getElementById("output").innerText = `name ${data.name} email ${data.email}`;
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);


    } catch (error) {
        // console.log(error.message);
        document.getElementById('output').innerText = `Error: ${error.message}`;

    }
}
// document.getElementById('fetchData').addEventListener("click", fetchData);
// document.getElementById('fetchData').addEventListener('click', fetchData);
