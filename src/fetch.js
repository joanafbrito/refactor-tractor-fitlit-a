
let userData, hydrationData, sleepData, activityData

// Data Fetching 
let fetchData = (dataType) => {
    return fetch(`http://localhost:3001/api/v1/${dataType}`)
        .then(response => {
            return response.ok ? response.json() : console.log(`ERROR with ${dataType} path`)
        })
        .then(data => data)
}

Promise.all([fetchData('users'), fetchData('hydration'), fetchData('sleep'), fetchData('activity')]).then((data)=> {
    updateData(data)
})

let userRepository = new UserRepository();

let updateData = (data) => {
    userData = data[0].userData
    hydrationData = data[1].hydrationData
    sleepData = data[2].sleepData
    activityData = data[3].activityData
     // call a function that updates the dom
     updateDom()
}


// export default userFetch;