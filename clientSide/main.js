
async function getUser() {
    const res = await fetch("http://localhost:8000/api/users/Ashen")

    const data = await res.json()

    console.log(data)
}

getUser()