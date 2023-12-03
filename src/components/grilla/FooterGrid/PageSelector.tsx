// import { PaginationBackArrow, PaginationNextArrow } from "../utils/Icon";
// import styles from "@grilla/grid.module.css"
import { StylePaginate } from "@/components/styled/PaginateStyled";
import { useGridContext } from "../context";

export const GridPageSelector = () => {
    // hooks
    const changePage = useGridContext().changePage
    // const page = useGridContext().pagination?.page ?? 1
    const metaDataPagination = useGridContext().metaDataPagination

    // functions
    const handlePageClick = ({ selected }: { selected: number }) => {
        changePage(selected + 1)
    }
    
    return (
        <div>
            {/* <div className={styles.pagination__legend}>
                Página {page} de {metaDataPagination?.totalPages ?? 1}
            </div> */}

            <StylePaginate
                breakLabel="..."
                nextLabel={"Siguiente"}
                previousLabel={"Anterior"}
                onPageChange={handlePageClick}
                forcePage={(metaDataPagination?.currentPage || 1) - 1}
                pageCount={metaDataPagination?.totalPages || 1}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
            />
        </div>
    )
}