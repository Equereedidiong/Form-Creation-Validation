// Initialize the Async Function

async function fetchUserData () {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    dataContainer = document.getElementById('api-data')
   
    try {

      const response = await fetch (apiUrl)
      const users = await response.json();
      dataContainer.innerHTML = ''
      const userList = document.createElement('ul');
      users.array.forEach(users => {
            const listItem = document.createElement('li')
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    
    }

    //Error Handling


    catch (error) {

        dataContainer.innerHTML = ''
        dataContainer.innerHTML.textContent = 'Failed to load user data'
       console.error (error)
    }

}

document.addEventListener ('DOMContentLoaded', function () {

    fetchUserData ();
})

