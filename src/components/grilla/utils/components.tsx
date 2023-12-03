import { useEffect, useMemo, useRef } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import styles from './../grid.module.css';
import { useGridContext } from "../context";
import { useSearchInput, useHandleTextInputWithTimer } from "../hooks";
import { LayoutTheadAction } from "../TheadGrid";
import { LoadingIcon, DeleteFilterText } from "./Icon";

export const gridContainerAnimation: Variants = {
    hidden: { opacity: 0, height: 0 },
    show: {
        height: "auto",
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delayChildren: 0.05,
            staggerChildren: 0.1,
            height: { duration: 0.1 },
        },
    },
    exit: { opacity: 0, transition: { duration: 0.1, when: "afterChildren" } }
}


const trAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 }
}

/**
 * util loading component from the Grilla
 */
export const UtilLoadingTbody = () => {
    const thead = useGridContext().thead

    const TdSkeleton = useMemo(() => {
        let tr = thead.map((_, index) => (
            <td key={index} style={{ paddingBlock: 0 }}><div className="skeleton__loading" style={{ width: "100%", height: 25 }} /></td>
        ))
        return ([...tr])
    }, [thead])

    return (
        <motion.tbody variants={gridContainerAnimation} animate="show" initial="hidden" exit="exit">
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
        </motion.tbody>
    )
}

/**
 * util error component from the Grilla
 * @param errMsn {string} msn error to show 
 * @returns 
 */
export const UtilErrorTbody = ({ errMsn }: { errMsn: string }) => {
    return (
        <motion.tbody variants={gridContainerAnimation} animate="show" initial="hidden" exit="exit">
            <motion.tr variants={trAnimation} style={{ position: "relative", height: 250 }}>
                <td>
                    <h4 style={{ color: "red", width: "100%", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                        {errMsn}
                    </h4>
                </td>
            </motion.tr>
        </motion.tbody>
    )
}

/**
 * util layout empty data component from the Grilla
 * @param children {JSX.Element} msn to show
 * @returns 
 */
export const UtilLayoutEmptyDataTbody = ({ children }: { children: JSX.Element }) => {
    return (
        <motion.tbody variants={gridContainerAnimation} animate="show" initial="hidden" exit="exit">
            <motion.tr variants={trAnimation} style={{ position: "relative", height: 250 }}>
                <td style={{ position: "absolute", left: "55%", transform: "translateX(-55%)" }}>
                    {children}
                </td>
            </motion.tr>
        </motion.tbody>
    )
}

export const ThSearchByManyParams = ({ param, label, paramsToFilter }: { param: string, label: string, paramsToFilter: string[] }) => {
    // hooks
    const ref = useRef<HTMLParagraphElement>(null)
    const { currentFilterColumnOpen, showFilterColumn, addThColumn } = useGridContext()
    const { currentValue, handleSearchInput } = useSearchInput(true)
    const { handleInput, loading, removeSearchInput, searchValue } = useHandleTextInputWithTimer(handleSearchInput, currentValue)

    useEffect(() => {
        const newThead = paramsToFilter.map((paramToFilter) => ({
            label: "",
            param: paramToFilter,
            hiddeColumn: true,
            isSearch: true
        }))

        addThColumn(newThead)
    }, [])

    return (
        <>
            <p ref={ref}>{label}</p>

            <svg data-active={`${Boolean(searchValue)}`} className={styles.grid__svg__action__button + " ml-2"} strokeWidth="0" viewBox="0 0 512 512" onClick={(event) => { event.stopPropagation(); showFilterColumn(param) }}>
                <path d="M128 192l128 128 128-128z"></path>
            </svg>

            <AnimatePresence>
            {
                currentFilterColumnOpen === param ? (
                    <LayoutTheadAction isLastChild={false} clientWidth={ref.current?.clientWidth}>
                        <div className={styles.actions__wrapper} style={{ gap: "10px" }}>
                            <label htmlFor={param}>Buscar por:</label>

                            <div className={styles.row__inputs__wrapper} style={{ marginBottom: "10px" }}>
                                <input type="text" id={param} onChange={handleInput} placeholder={label} value={searchValue}/>
                                
                                {loading && <LoadingIcon />}
                                {(Boolean(currentValue) && !loading) && <DeleteFilterText remove={removeSearchInput} />}
                            </div>
                        </div>
                    </LayoutTheadAction>
                ) : (null)
            }
            </AnimatePresence>
        </>
    )
}

// Algun dia seras de utilidad
// export const ThTooltip = ({ paramToFilter, label }: { paramToFilter: string, label: string }) => {
//     const currentFilterColumnOpen = useGridContext().currentFilterColumnOpen

//     const isOpenMenuTh = currentFilterColumnOpen === paramToFilter
//     return (
//         <>
//             <p>{ label }</p>

//             <BasicTooltip aditionalBoolean={isOpenMenuTh} content={<SortActions param={paramToFilter} />} verticalDirection="bottom">
//                 <TheadActionsButton columnParam={paramToFilter} />
//             </BasicTooltip>
            
//         </>
//     )
// }