$(document).ready(function () {
    $('#submit').on('click', function (event) {
        // Get the values of the input fields
        let name = $('#name').val();
        let subject = $('#subject').val();
        let opinion = $('#opinion').val();

        // Check if any field is empty
        if (!name || !subject || !opinion) {
            alert("Please fill in all fields");
        } else if (name || subject || opinion ) {
            confirm("feedback submited");
        } 
    });
});