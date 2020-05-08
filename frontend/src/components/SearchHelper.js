const textbookList = [{name:'5 Steps to a 5: AP Calculus AB 2020'},
{name: 'Campbell Biology 11th Edition', link: "https://amazon.com"},  
{name:'General Chemistry'}, 
{name:'Physics: Principles with Applications'},
{name: 'College Algebra (5th Edition)'},  
{name:'The Art of Public Speaking'}, 
{name:'Principles of Instrumental Analysis'},
{name: 'A Writer’s Reference'},  
{name:'Biological Science with MasteringBiology'}, 
{name:'Atlas of Human Anatomy: with Student Consult Access'},



] 

function getBooks(query) {
  const q = query.toLowerCase();
  return textbookList
    .filter(({ name }) => name.toLowerCase().includes(q))
    .slice(0, 20);
}

export function searchBooks(query = "") {
  return new Promise(resolve => {
    setTimeout(() => resolve(getBooks(query)), 1500);
  });
}