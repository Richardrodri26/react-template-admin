import GridThead from "./TheadGrid"
import { TopListActions } from "./TheadGrid/actions/TopTheadActions";
import { HandleColumnsVisibility, QuickSearchGrid } from "./TheadGrid/actions";
import { GridFooter } from "./FooterGrid";
import styles from "./grid.module.css";
import { GridContext, IContextState, IGrid, IPagination, useHandleGridContext } from "./context"

/**
 * component that allows paging and returns the component's status through a hook.
 * @param {IGrid} props
 * @returns 
 * @example <Grilla url="" urlRestFetch="url entera" thead={[ ... ]} defaultPagination={{ ... }}> ... <Grilla/>
 */
export const Grilla = ({ url, urlGrouperFetch: urlRestFetch, thead, children, defaultPagination, gridOptions, withoutTopActions, withoutBottomActions, onlyVisivilityColumns }: IGrid) => {

    return (
        <GrillaProvider urlGrouperFetch={urlRestFetch} thead={thead} url={url} pagination={defaultPagination}>
            <>
                {/*--------------------------- main search input --------------------------- */}
                {
                    !withoutTopActions ? (
                        <div className={styles.top__actions__wrapper}>
                            <QuickSearchGrid /> {/* search input*/}
                            <HandleColumnsVisibility />
                            {gridOptions && <TopListActions children={gridOptions} />}
                        </div>
                    ) : null
                }

                {onlyVisivilityColumns && withoutTopActions ? (
                    <div className={styles.top__actions__wrapper}>
                        <HandleColumnsVisibility />
                    </div>
                ) : null}

                {/*--------------------------- tbody children --------------------------- */}
                <div className={styles.grid__wrapper__style} data-table="true">
                    <table className={styles.grid__style}>
                        <GridThead />
                        {children}
                    </table>
                </div>

                {/*--------------------------- footer / pagination --------------------------- */}
                {!withoutBottomActions ? (
                    <div className={styles.top__actions__wrapper}>
                        <GridFooter />
                    </div>
                ) : null}
            </>
        </GrillaProvider>
    )
}

const GrillaProvider = ({ thead, url, urlGrouperFetch: urlRestFetch, children, pagination }: IContextState & { children: JSX.Element, pagination?: IPagination }) => {
    const gridState = useHandleGridContext({ url, urlGrouperFetch: urlRestFetch, thead, pagination })

    return (
        <GridContext.Provider value={gridState}>
            {children}
        </GridContext.Provider>
    )
}