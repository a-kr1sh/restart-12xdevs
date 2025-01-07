// Write a function called canVote that returns true or false if the age of a user is > 18

let voteUsingAge = (minimumAge, userAge) => {

    let msgFromGoverment = "This is 2025 Matdan so please make sure you will vote for your suitable party for this Matdan"
    if(userAge >= minimumAge){
        console.log("your age is " + userAge + ", so you've to vote for this time!")
    }else {
        console.log("your age is " + userAge + ", so you are not able to this time voting system")
    }
    return msgFromGoverment;
}

let ageCheck = voteUsingAge(18, 19)
console.log(ageCheck);