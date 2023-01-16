.then((data) => {
    if (data.includes('Fill')) alert('Fill all fields')
    else if (data.includes('Error')) alert('Error occured')
    else {
        alert(`Patient ${first_name} ${last_name} added to the database successfully. Redirecting to homepage`)
        location.href = '/'
    }
})