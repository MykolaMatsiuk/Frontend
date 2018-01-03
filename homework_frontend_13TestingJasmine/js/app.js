var user1 = { name: "Harry", dog: null };
var user2 = { name: "David", dog: { name: "Lucky" } };

function notify() {
    console.log("You have a dog! Use this code for 50% off: UG4H6QE");
}

function checkDogOwner(user, callback) {
    if (user && user.dog) {
        callback();
    }
}
// on registration success
checkDogOwner(user1, notify);

var array = ['hi'];

