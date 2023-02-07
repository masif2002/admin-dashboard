const createCard = (name, role) => {
    const linkWrapper = document.createElement('a')
    linkWrapper.setAttribute('href', 'profile.html')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')

    const largeText = document.createElement('p')
    largeText.textContent = name

    const smallText = document.createElement('p')
    smallText.textContent = role
    smallText.classList.add('role')

    cardContainer.appendChild(largeText)
    cardContainer.appendChild(smallText)
    linkWrapper.appendChild(cardContainer)
    document.querySelector('#record').appendChild(linkWrapper)
}

const initializeCards = (n) => {
    createCardContainer()

    // Fetching Records
    for (let i = 0; i < n; i++) {
        createCard(records[i].name, records[i].designation)
    }

}

const createCardContainer = () => {
    const container = document.createElement('div')
    container.classList.add('flex-column')
    container.id = "record"

    const parent = document.getElementById('results')
    const elem = document.getElementById('right-chevron')
    parent.insertBefore(container, elem)

}

const sendFormData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://10.140.11.221:5000/user/login"); 

    // This fires up when the connection is successful
    xhr.onload = function(event){ 
        // alert("Success, server responded with: " + event.target.response);
        // localStorage.clear() 
        // localStorage.setItem('response', xhr.response)
        // console.log(xhr.status)
        console.log(xhr.response)
    }; 

    // var formData = new FormData(document.getElementById("credentials-form")); 
    // xhr.send(formData);
}

const createPageNumber = (currentPage, totalPages) => {
    const container = document.createElement('div')
    container.classList.add('center')

    const text = document.createElement('p')
    text.classList.add('font-grey')
    text.textContent = `Page ${currentPage} / ${totalPages}`

    container.appendChild(text)
    document.querySelector(".container").appendChild(container)
}



const records = [
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
    {
        'name': 'Mohamed Asif',
        'designation': 'DevOps Engineer'
    },
]

const currentPage = 1;
const totalPages = 11;
initializeCards(10)
createPageNumber(currentPage, totalPages)