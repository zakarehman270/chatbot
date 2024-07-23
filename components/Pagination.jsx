import React from "react";
import { Link } from "react-router-dom";
const Pagination = ({ nPages, currentPage, setCurrentPage, paginationInTable }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    return (
        <div className={`listing-pagination gap-2 ${nPages > 1 ? "d-flex" : "d-flex"}`}>
            {pageNumbers.map((pgNumber, index) => (
                <div key={index} className="d-flex gap-2">
                    <div className="d-flex">
                        {index === 0 &&
                            <Link to={"#"} onClick={() => {
                                if (currentPage === pgNumber) {
                                } else {
                                    prevPage()
                                }
                            }} className={`PaginationButton ${currentPage === pgNumber ? "disabled" : ""} `}>
                                {currentPage === pgNumber ?
                                    <div className="d-flex">
                                        <img src="/assets/icons/PaginationArrowRight.svg" alt="PaginationArrowLeft" />
                                        <span className="mblNone">Prev</span>
                                    </div>
                                    :
                                    <div>
                                        {paginationInTable ?
                                            <img src="/assets/icons/PaginationArrowRightDisabledWhite.svg" alt="PaginationArrowRightDisabled" /> :
                                            <img src="/assets/icons/PaginationArrowRightDisabled.svg" alt="PaginationArrowRightDisabled" />
                                        }
                                        <span className="mblNone">Prev</span>
                                    </div>
                                }
                            </Link>}
                    </div>
                    <Link
                        key={pgNumber}
                        className={`PaginationButtonItem ${currentPage === pgNumber ? "activePaginationItem " : ""} `}
                        onClick={() => {
                            if (currentPage === pgNumber) {
                            } else {
                                setCurrentPage(pgNumber)
                            }
                        }}
                    >
                        {pgNumber}
                    </Link>
                    {index === pageNumbers.length - 1 &&
                        <Link to={"#"} onClick={() => {
                            if (currentPage === pgNumber) {
                            } else {
                                nextPage()
                            }
                        }} className={`text-end PaginationButton ${currentPage === pgNumber ? "disabled" : ""} `}>
                            <span className="mblNone">Next</span>
                            {currentPage === pgNumber ?
                                <img src="/assets/icons/PaginationArrowLeftDisabled.svg" alt="PaginationArrowLeftDisabled" /> :
                                <div>
                                    {paginationInTable ?
                                        <img src="/assets/icons/PaginationArrowLeftWhite.svg" alt="PaginationArrowLeft" /> :
                                        <img src="/assets/icons/PaginationArrowLeft.svg" alt="PaginationArrowLeft" />
                                    }
                                </div>
                            }
                        </Link>}
                </div>
            ))}
        </div >
    );
};

export default Pagination;