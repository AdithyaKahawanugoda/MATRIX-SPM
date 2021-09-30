import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (books) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  //const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  const tableColumn = ["Index", "ID", "Book Title", "Author", "count"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  books.forEach((book, index) => {
    const ticketData = [
      index + 1,
      book.book,
      book.bookName,
      book.author,
      book.count,
      //   ticket.request,
      //   ticket.status,
      // called to format the date on the ticket
      moment(new Date()).format("DD/MM/YYYY"),
      //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  const formatedDate = moment(new Date()).format("DD/MM/YYYY");
  doc.text("Total Sales ( Generated  " + formatedDate + ")", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
