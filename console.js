const bookname = document.getElementById("bookName");
const form = document.getElementById("bookform");
const ul = document.getElementById("bookList");
const btn = document.getElementById("submit");
const ul2 = document.getElementById("returnedbooks");
btn.addEventListener("click", addbook);
const currentDateTime = new Date();
const formattedDateTime = currentDateTime.toLocaleString();
const futuretime = new Date(currentDateTime.getTime() + 10 * 60 * 1000);
const formattedFutureDateTime = futuretime.toLocaleString();
function calculateFine(expectedReturnTime) {
  const expectedReturnDate = new Date(expectedReturnTime);
  const returnedDate = new Date();

  if (returnedDate > expectedReturnDate) {
    const lateMilliseconds = returnedDate - expectedReturnDate;
    const lateMinutes = Math.ceil(lateMilliseconds / (1000 * 60));
    const fine = Math.floor(lateMinutes / 10) * 10;
    return fine;
  }
  return 0;
}
function handlereturnbook(newele, fine, booktitle, bookid) {
  newele.innerText = `Fine: ₹${fine}`;
  let payfine = document.createElement("button");
  payfine.innerText = "Pay Fine";
  payfine.className = "btn btn-danger btn-sm float-right delete";
  payfine.addEventListener("click", () => {
    payfine.parentElement.remove();
    axios.post("http://localhost:5000/postreturnbook", {
      Title: booktitle,
      Fine: fine,
    });
    let ele = document.createElement("li");
      ele.className = "list-group-item";
      ele.innerText = `Book name: ${booktitle},
                        Fine Paid: ${fine}
                        Returned on: ${formattedDateTime}`;
      ul2.appendChild(ele);
    axios.delete(`http://localhost:5000/deletebyid/${bookid}`);
  });
  newele.appendChild(payfine);
}

function addbook(e) {
  e.preventDefault();
  let title = bookname.value.trim();
  axios
    .post("http://localhost:5000/book", { name: title })
    .then((result) => {
      console.log(result.data);
      showbookwithid(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  if (bookname.value == "") {
    alert("fill form");
    return;
  }
  function showbookwithid(book) {
    let newele = document.createElement("li");
    newele.className = "list-group-item";
    let returnbutton = document.createElement("button");
    returnbutton.innerText = "Return Book";
    returnbutton.className = "btn btn-success";
    let fine = calculateFine(book.futuredate);
    newele.innerText = `Book Name: ${book.title},
                        Book taken on: ${book.date},
                        Book return date: ${book.futuredate},
                        Current Fine: ₹${fine}`;
    newele.appendChild(returnbutton);
    returnbutton.addEventListener("click", () => {
      if (fine !== 0) {
        handlereturnbook(newele, fine, book.title, book.id);
      } else {
        returnbutton.parentElement.remove();
        let ele = document.createElement("li");
        ele.className = "list-group-item";
        ele.innerText = `Book name: ${book.title},
                         Fine Paid: ${fine}
                         Returned on: ${formattedDateTime}`;
        ul2.appendChild(ele);
        axios.post("http://localhost:5000/postreturnbook", {
          Title: book.title,
          Fine: fine,
        });
        axios.delete(`http://localhost:5000/deletebyid/${book.id}`);
      }

    });
    ul.appendChild(newele);
  }
  bookname.value = "";
}

window.addEventListener("DOMContentLoaded", backendbooks);
async function backendbooks() {
  try {
    let res = await axios.get("http://localhost:5000/");
    let res2 = await axios.get("http://localhost:5000/getreturnbook");
    let returnbookdata = res2.data;
    console.log(returnbookdata);
    returnbookdata.forEach((data) => {
      let ele = document.createElement("li");
      ele.className = "list-group-item";
      ele.innerText = `Book name: ${data.title},
                        Fine Paid: ${data.fine}
                        Returned on: ${data.date}`;
      ul2.appendChild(ele);
    });
    let bookdata = res.data;
    bookdata.forEach((book) => {
      let newele = document.createElement("li");
      newele.className = "list-group-item";
      let returnbutton = document.createElement("button");
      returnbutton.innerText = "Return Book";
      returnbutton.className = "btn btn-success";
      let fine = calculateFine(book.futuredate);

      newele.innerText = `Book Name: ${book.title},
                                Book taken on: ${book.date},
                                Book return date: ${book.futuredate},
                                Current Fine: ₹${fine}`;
      newele.appendChild(returnbutton);
      returnbutton.addEventListener("click", () => {
        if (fine !== 0) {
          handlereturnbook(newele, fine, book.title, book.id);
        } else {
          returnbutton.parentElement.remove();
          axios.post("http://localhost:5000/postreturnbook", {
            Title: book.title,
            Fine: fine,
          });
          let ele = document.createElement("li");
            ele.className = "list-group-item";
            ele.innerText = `Book name: ${book.title},
                                Fine Paid: ${fine}
                                Returned on: ${formattedDateTime}`;
            ul2.appendChild(ele);
          axios.delete(`http://localhost:5000/deletebyid/${book.id}`);
        }

        // returnbutton.parentElement.innerHTML=`₹${fine} <button class="btn btn-danger btn-sm float-right delete">Pay Fine</button>`
      });
      ul.appendChild(newele);
    });
  } catch (err) {
    console.log(err);
  }
}
