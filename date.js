// const currentDateTime = new Date();
// const formattedDateTime = currentDateTime.toLocaleString();

// const year = currentDateTime.getFullYear();
// const month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
// const day = String(currentDateTime.getDate()).padStart(2, '0');
// const hours = String(currentDateTime.getHours()).padStart(2, '0');
// const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
// const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');

// const customFormattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
// console.log(formattedDateTime); // e.g., "2025-07-28 11:20:00"



// const bookname = document.getElementById('bookName');
// const form = document.getElementById('bookform');
// const ul = document.getElementById('bookList');
// const btn = document.getElementById('submit');

// btn.addEventListener("click", addbook);
// // const currentDateTime = new Date();
// // const formattedDateTime = currentDateTime.toLocaleString();
// const futuretime = new Date(currentDateTime.getTime() + 10 * 60 * 1000);
// const formattedFutureDateTime = futuretime.toLocaleString();

// const axiosfunc = (title) => {
//     axios.post('http://localhost:5000/book', { name: title })
//         .then((res) => {
//             let book = res.data;
//             console.log(book);
//         })
//         .catch((err) => console.log(err));
// };

// function calculateFine(expectedReturnTime, returnedTime) {
//     const expectedReturnDate = new Date(expectedReturnTime);
//     const returnedDate = new Date(returnedTime);

//     if (returnedDate > expectedReturnDate) {
//         const lateMilliseconds = returnedDate - expectedReturnDate;
//         const lateMinutes = Math.ceil(lateMilliseconds / (1000 * 60)); // Convert to minutes
//         const fine = Math.floor(lateMinutes / 10) * 10; // ₹10 for every 10 minutes
//         return fine;
//     }
//     return 0; // No fine if returned on time
// }

// function addbook(e) {
//     e.preventDefault();
//     let newele = document.createElement('li');
//     newele.className = 'list-group-item';
//     let title = bookname.value.trim();
    
//     if (title === '') {
//         alert('Fill form');
//         return;
//     }

//     axiosfunc(title);

//     // Create a return button
//     let returnbutton = document.createElement('button');
//     returnbutton.innerText = 'Return Book';
//     returnbutton.className = "btn btn-success";

//     // Set up the return button click event
//     returnbutton.addEventListener('click', () => {
//         const returnedTime = new Date(); // Current time when the book is returned
//         const fine = calculateFine(futuretime, returnedTime);
//         alert(`Book returned! Current Fine: ₹${fine}`);
//         newele.innerText = `Book Name: ${title}, Book taken on: ${formattedDateTime}, Book return date: ${formattedFutureDateTime}, Current Fine: ₹${fine}`;
//     });

//     newele.innerText = `Book Name: ${title}, Book taken on: ${formattedDateTime}, Book return date: ${formattedFutureDateTime}, Current Fine: ₹0`;
//     newele.appendChild(returnbutton);
//     ul.appendChild(newele);
//     bookname.value = '';
// }

// window.addEventListener('DOMContentLoaded', backendbooks);
// async function backendbooks() {
//     try {
//         let res = await axios.get('http://localhost:5000/');
//         let bookdata = res.data;
//         console.log(bookdata);
//         bookdata.forEach((book) => {
//             let newele = document.createElement('li');
//             newele.className = 'list-group-item';
//             let returnbutton = document.createElement('button');
//             returnbutton.innerText = 'Return Book';
//             returnbutton.className = "btn btn-success";

//             // Set up the return button click event for backend books
//             returnbutton.addEventListener('click', () => {
//                 const returnedTime = new Date(); // Current time when the book is returned
//                 const fine = calculateFine(book.futuredate, returnedTime);
//                 alert(`Book returned! Current Fine: ₹${fine}`);
//                 newele.innerText = `Book Name: ${book.title}, Book taken on: ${book.date}, Book return date: ${book.futuredate}, Current Fine: ₹${fine}`;
//             });

//             newele.innerText = `Book Name: ${book.title}, Book taken on: ${book.date}, Book return date: ${book.futuredate}, Current Fine: ₹0`;
//             newele.appendChild(returnbutton);
//             ul.appendChild(newele);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
const currentDateTime = new Date();

// Create a future time 100 minutes from now
const futuretime = new Date(currentDateTime.getTime() + 100 * 60 * 1000);

// Format the future time for display
const formattedFutureDateTime = futuretime.toLocaleString();

// Function to calculate fine
function calculateFine(returnedDate) {
    const expectedReturnDate = new Date();

    // Check if the book is returned late
    if (returnedDate > expectedReturnDate) {
        const lateMilliseconds = returnedDate - expectedReturnDate; // Calculate late time in milliseconds
        const lateMinutes = Math.ceil(lateMilliseconds / (1000 * 60)); // Convert late time to minutes
        const fine = Math.floor(lateMinutes / 10) * 10; // ₹10 for every 10 minutes late
        return fine; // Return the calculated fine
    }
    return 0; // No fine if returned on time
}

// Calculate the fine using the simulated returned date
let fine = calculateFine(futuretime);
console.log("Fine for late return:", fine); // This will show the fine based on the simulated date




