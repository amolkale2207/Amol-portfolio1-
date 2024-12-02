// Downloading CV 
$(document).ready(()=>{
    $("#resume").click(()=>{
        window.location.href='./Amol-Resume.pdf'
    })
    $("#ssc").click(()=>{
        window.location.href='./sscmarksheet.pdf'
    })
    $("#hsc").click(()=>{
        window.location.href='./hscmarksheet.pdf'
    })
    $("#degree").click(()=>{
        alert("Not uploaded by admin")
    })
    $("#certificate").click(()=>{
        alert("Admin still learning")
    })
    $("#callme").click(()=>{
        const mobileNumber="+91 9322020263";
        window.location.href="tel:" + mobileNumber
    })
})
// ----auto-typing----
var typed= new Typed(".auto-type" ,{
    strings: ["Amol Kale","Software Developer","Web Developer", "Frontend Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,

});

$(document).ready(()=>{
    $("#wa-chat").click(()=>{
        var phoneNumber='+91 9322020263';
        var message='Hello, I need help!';
        var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message;
        window.open(url, '_blank');
    })
})
// downloding cv function ends



// scolling