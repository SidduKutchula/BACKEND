
function getUsersDetails(id, getSubDetails) {
    console.log("This is for getting users details");
    getSubDetails("678");

function getSubDetails(userRoll, getMarks) {
    console.log("This is for getting Subject Details", userRoll);
    getMarks("eng");  
}

function getMarks(userSubId) {
    console.log("This is the User's Subject Marks", userSubId);
}

getUsersDetails("123", function (userRoll) {
    getSubDetails(userRoll, function (userSubId) {
        getMarks(userSubId);
    });
});

}
