import { useMemo, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion";
import styles from '../grid.module.css';
import { useIsColumnInAction } from "../hooks";
import { FiltersActions, GrouperActions, SortActions } from "./actions";
import { ITheadGrid, useGridContext } from "../context"
import { gridColumnAnimation } from "./grid.animation";

/**
 * Component that displays the columns of the grid
 * @returns 
 */
const GridThead = () => {
    const thead = useGridContext().thead.filter((th) => !th.hiddeColumn)

    const lastColumn = useMemo(() => {
        return thead.filter((columns) => !columns.hiddeColumn).at(-1)!
    }, [thead])

    return (
        <thead>
            <tr>
                {thead.map((th, index) => (
                    <ThContent currentTh={th} isLastChild={lastColumn.param === th.param} hiddenColumn={Boolean(th.hiddeColumn)} key={index} />
                ))}
            </tr>
        </thead>
    )
}

/**
 * Column header component than receive a configuration and displays the name and the actions on it
 * @param {ITheadGrid, boolean, boolean} props column configuration added into grid
 * @returns 
 */
const ThContent = ({ currentTh, isLastChild, hiddenColumn }: { currentTh: ITheadGrid, isLastChild: boolean, hiddenColumn: boolean }) => {
    // hooks
    const currentFilterColumnOpen = useGridContext().currentFilterColumnOpen

    const thAnimation = useMemo(() => {
        if (hiddenColumn) return "hiddenColumn"

        return "showColumn"
    }, [hiddenColumn])

    const ref = useRef<HTMLDivElement>(null)

    return (
        <motion.th style={currentTh.style} data-action={Boolean(currentTh.isAction)} animate={thAnimation} variants={gridColumnAnimation}>
            <div className={styles.thead__content} ref={ref} style={currentTh.style} data-type={currentTh.gridfieldValue}>

                {currentTh.label || currentTh.thComponent}

                {!(currentTh.isAction) && (Boolean(currentTh.filter) || currentTh.canSort) && (
                    <>
                        <TheadActionsButton columnParam={currentTh.param || (currentTh.filter?.param ?? "")} />

                        <AnimatePresence>
                            {(currentFilterColumnOpen === (currentTh.param || currentTh.filter?.param)) ? (

                                <motion.div className={styles.thead__actions}
                                    initial={{ opacity: 0, y: 0, left: ((ref.current?.children[0].clientWidth ?? 0) / 2), x: (isLastChild ? ref.current?.children[0].clientWidth : 0) }}
                                    animate={{ opacity: 1, y: 22, left: ((ref.current?.children[0].clientWidth ?? 0) / 2), x: (isLastChild ? ref.current?.children[0].clientWidth : 0) }}
                                    exit={{ opacity: 0, y: 15, left: ((ref.current?.children[0].clientWidth ?? 0) / 2), x: (isLastChild ? ref.current?.children[0].clientWidth : 0) }}>
                                    <>
                                        {(currentTh.canSort) ? <SortActions param={currentTh.param} /> : null}
                                        {(currentTh.filter && !currentTh.filter.groupSignal) ? <FiltersActions label={currentTh.label} filter={currentTh.filter} /> : null}
                                        {(currentTh.filter?.groupSignal) ? <GrouperActions label={currentTh.label} filter={currentTh.filter} /> : null}
                                    </>
                                </motion.div>

                            ) : (null)}
                        </AnimatePresence>
                    </>
                )}
            </div>
        </motion.th>
    )
}

/**
 * Render the menu action on the grid
 * @param {string} props column param
 * @returns 
 */
export const TheadActionsButton = ({ columnParam }: { columnParam: string }) => {

    const showFilterColumn = useGridContext().showFilterColumn
    const { isInAction } = useIsColumnInAction(columnParam)

    return (
        <svg data-active={isInAction} className={styles.grid__svg__action__button} strokeWidth="0" viewBox="0 0 512 512" onClick={() => showFilterColumn!(columnParam)}>
            <path d="M128 192l128 128 128-128z"></path>
        </svg>
    )
}

/**
 * Wrapper menu grid actions
 * @param isLastChild 
 * @param children
 * @returns 
 */
export const LayoutTheadAction = ({ isLastChild, children, clientWidth }: { isLastChild: boolean, children: JSX.Element, clientWidth?: number }) => {

    return (
        <motion.div className={styles.thead__actions}
            initial={{ opacity: 0, y: 0, left: ((clientWidth ?? 0) / 2), x: (isLastChild ? clientWidth : 0) }}
            animate={{ opacity: 1, y: 22, left: ((clientWidth ?? 0) / 2), x: (isLastChild ? clientWidth : 0) }}
            exit={{ opacity: 0, y: 15, left: ((clientWidth ?? 0) / 2), x: (isLastChild ? clientWidth : 0) }}>
            {children}
        </motion.div>
    )
}


export default GridThead