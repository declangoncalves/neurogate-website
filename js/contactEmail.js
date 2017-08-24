$.getScript('http://smtpjs.com/smtp.js', function()
{
    // script is now loaded and executed.
    // put your dependent JS here.
});



Email.send("from@you.como@them.com",
"This is a subject",
"this is the body",
"smtp.yourisp.com",
"username",
"password");