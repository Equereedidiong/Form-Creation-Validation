// ASYNCHRONOUS JAVASCRIPT and APIs

// We want to do these Chores;

function walkDog (callback) {

    setTimeout (() => {

        console.log ("You walk the dog");
        callback();
    }, 4000);
}

function cleanKitchen (callback) {

    setTimeout (() => {

        console.log ("You clean the kitchen");
        callback();
    }, 2500);
}

function takeoutTrash (callback) {

    setTimeout (() => {

        console.log ("You took out the Trash");
        callback();
    }, 500);
}


walkDog (() => {
    cleanKitchen (() => {
        takeoutTrash (() => console.log ("You tookout the trash"));
    });
});


