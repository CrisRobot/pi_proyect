import React from "react";
import styles from "../../css/pagination.css"; // eslint-disable-next-line


const Pagination = ({countriesPerPage, currentPage, setCurrentPage, totalCountries}) => {


    
const pageNumbers = [];
console.log(currentPage)
for(let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++){
    pageNumbers.push(i);
}

const onPreviusPage = () => {
    if(currentPage > 1){setCurrentPage(currentPage - 1)}

}

const onNextPage = () => {
    if(currentPage < pageNumbers.length)
    {setCurrentPage(currentPage + 1)}
}

const onSpecificPage = (n) => {
    setCurrentPage(n);
}




return(
    <nav>
        <button onClick={onPreviusPage}>
            previous
        </button>
        <button onClick={onNextPage}>
            next
        </button>
        <ul>
            {pageNumbers.map(noPage=>(
                <li key = {noPage} >
            <button className={`pagList-link ${noPage === currentPage ? 'pagCurrent' : ''}`}
            onClick={()=> onSpecificPage(noPage) }>
                {noPage}
                </button>
        </li>
            ))}
        
        </ul>
        
    </nav>
)
}

export default Pagination;