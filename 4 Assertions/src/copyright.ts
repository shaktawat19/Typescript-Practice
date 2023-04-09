let year = document.getElementById('year')! ;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;