btn.addEventListener("click", function () {

    let body = {
        "student_id": "S007",
        "student_name": "ABC"
    }

    fetch("localhost:8080/find_By_Book_Info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // 2console.log(data);
            sourceData = { ...data };
            console.log(data);
        })
        // .catch(function (error) {
        .catch(err => console.log(err))

});


