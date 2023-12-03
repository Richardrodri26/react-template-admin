import { CSSProperties, Fragment, useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { MenuActionRow } from "./styled.components";
import { ExpandGridRow, RowActionSvg } from "./Icon";
import styles from "../grid.module.css"
import { useGridContext } from "../context";
import { ICustomeMenuSzh, MenuList } from "@/components/styled/MenuStyled";
import { formatDate } from "@/lib/utils";


interface IComponentChildren { children: JSX.Element }
interface IComponentId { rowId: string }

/**
 * Button menu action on row grid
 * @param {JSX.Element, ...config} props pass a fragment component with <MenuItem/> tags, and, optionally the button config
 * @returns 
 */
export const TdActionComponent = ({ children, viewScroll = "auto", position = "auto", direction = "bottom", align = "start", boundingBoxPadding = "" }: IComponentChildren & ICustomeMenuSzh) => {
    // hooks
    const MenuButton = (open: boolean) => useMemo(() => (<MenuActionRow $isOpen={open}><RowActionSvg /></MenuActionRow>), [open])

    return (
        <td style={{ textAlign: "center" }}>
            <MenuList viewScroll={viewScroll} position={position} align={align} direction={direction} overflow="hidden" boundingBoxPadding={boundingBoxPadding}
                gap={(direction === 'top' || direction === 'bottom') ? 8 : 0}
                menuButton={({ open }) => MenuButton(open)}>
                <>
                    {children}
                </>
            </MenuList>
        </td>
    )
}

/**
 * Button expand row action
 * @param {string} rowId ID of the row (is the id param from the list) 
 * @returns 
 */
export const TdExpandGridButton = ({ rowId }: IComponentId) => {
    // hooks
    const rowExpanded = useGridContext().rowExpanded
    const setRowToExpand = useGridContext().setRowToExpand

    return (
        <td style={{ textAlign: "center" }}>
            <ExpandGridRow isExpanded={rowExpanded === rowId} onClick={() => setRowToExpand(rowId)} />
        </td >
    )
}

/**
 * Nested grid on row
 * @param {JSX.Element, string} props  pass a tbody with the {useGridInfo} hook, and, rowId is the identification of the row to be selected
 * @returns 
 */
export const RowNestedGridExpanded = ({ children, rowId }: IComponentChildren & IComponentId) => {
    // hooks
    const rowExpanded = useGridContext().rowExpanded

    return (
        <AnimatePresence>
            {rowExpanded === rowId ? (
                <motion.tr style={{ overflowY: "hidden", position: "relative" }} initial={{ height: 0, opacity: 0 }} exit={{ height: 0, opacity: 0 }} animate={{ height: 370, opacity: 1 }}>
                    <td>
                        <div className={styles.nested__grid__wrapper}>
                            {children}
                        </div>
                    </td>
                </motion.tr>
            ) : null}
        </AnimatePresence>
    )
}

/**
 * Auxiliary component that displays items using the Thead config 
 * @param {any} data info data object - can be used on the rows of the grid
 * @returns 
 */
export const TrGridAuxColumn = ({ data }: { data: any }) => {
    // hooks
    const thead = useGridContext().thead.filter((filt) => filt.param !== "" && !filt.hiddeColumn)

    return (
        <>
            {thead.map(({ param, gridfieldValue, label, cellStyle }, index) => (
                <Fragment key={index}>
                    {gridfieldValue === "longText" ? (
                        <TdLongText cellStyle={cellStyle} label={data[param] || `Sin ${label}`} />
                    ) : (
                        <td style={cellStyle} data-type={gridfieldValue}>
                            {{
                                "": data[param] ?? "-",
                                "amount": <TdAmount value={data[param]} />,
                                "date": <TdDate value={data[param]} />,
                                "text": <>{data[param] || `Sin ${label}`}</>,
                                // "unixDate": <>{unixToDate(data[param])}</>,
                                "unixDate": <TdUnixDate value={data[param]} />,
                            }[gridfieldValue ?? ""]}
                        </td>
                    )}
                </Fragment >
            ))}
        </>
    )
}

/**
 * amount component
 * @param param0 
 * @returns 
 */
export const TdAmount = ({ value }: { value: any }) => {
    const [amount, _] = useState(formatAmountCo(value))

    return (
        <div className={styles.grid__util__mount__text}>
            {amount}
        </div>
    )
}

export const TdDate = ({ value }: { value: number | string }) => {
    const [formattedDate, _] = useState(dayjs(value).format('DD/MM/YYYY'));
    // const [formattedDate, _] = useState(formatDate(`${value}`));

    if (!value || value === null) return <>----</>

    // return <>{formattedDate}</>
    return <>{formatDate(`${value}`)}</>
}

const TdUnixDate = ({ value }: { value: number | string }) => {
    const [formattedDate, _] = useState(dayjs(+value).format('DD/MM/YYYY HH:mm'));

    if (!value || value === null) return <>----</>

    return <>{formattedDate}</>
}

/**
 * longtext component
 * @param param0 
 * @returns 
 */
export const TdLongText = ({ cellStyle, label }: { label: string, cellStyle?: CSSProperties }) => {
    // hooks
    const textRef = useRef<HTMLDivElement>(null);
    const [hasOverflow, setHasOverFlow] = useState(false)

    useEffect(() => {
        const current = textRef.current
        if (current) {
            const hasOverflowingChildren = current.offsetHeight < current.scrollHeight || current.offsetWidth < current.scrollWidth
            setHasOverFlow(hasOverflowingChildren)
            return
        }
    }, [textRef.current])

    return (
        <motion.td whileHover={hasOverflow ? {
            backgroundColor: "var(--text_disabled)", transition: { backgroundColor: { duration: 0.2, type: "tween" } }
        } : {}}>
            <motion.div style={cellStyle} className={styles.grid__util__cell__long__text} ref={textRef}>
                {label}
            </motion.div>
        </motion.td>
    )
}

/**
 * Transform a value into COL format money
 * @param {string} value amount value
 * @returns 
 */
export function formatAmountCo(value: string) {
    if (!value) return "$ -"
    return "$ " + Intl.NumberFormat("es-CO").format(+value)
}

export const roundNumber = (number: number, decimals = 2) => {
    return number.toFixed(decimals)
}

/**
 * Transform a cop format value to number
 * @param value 
 * @returns 
 */
export function parseAmountCo(currencyValue: string): number {
    // Elimina todos los caracteres no numéricos, excepto los puntos
    const numericValue = parseFloat(currencyValue.replace(/[^\d.,]/g, '').replace(/,/g, '.'));
    // const numericValue = currencyValue.replace(/[^\d.,]/g, '').replace(/,/g, '.');

    return isNaN(numericValue) ? 0 : numericValue;
}
/**
 * Transform a value into input date format
 * @param value 
 * @returns 
 */
function formatToDate(value: string) {
    if (!value) return "----"
    return dayjs(value).format("DD/MM/YYYY")
}

/**
 * Transform a value into format date
 * @param unixTime 
 * @returns 
 */
export function unixToDate(unixTime: string) {
    if (!unixTime || unixTime === null) return "----"
    const formattedDate = dayjs(+unixTime).format('DD/MM/YYYY');

    return formattedDate;
}

/**
 * Format a day
 * @returns 
 */
export const formatDayjsDate = (date: string, format = 'YYYY-MM-DD') => {
    let formattedDate = dayjs(date).format(format)
    return formattedDate
}