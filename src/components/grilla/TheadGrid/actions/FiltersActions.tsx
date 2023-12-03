import { useMemo } from "react"
import styles from "./../../grid.module.css"
import { getCurrentDate } from "@/lib/utils"
import { IFilter } from "../../context"
import { useGetTextFilterByParam, useHandleTextInputWithTimer, useHandleIntervalFilter } from "../../hooks"
import { LoadingIcon, DeleteFilterText } from "../../utils/Icon"
/*----------------------------------------- interfaces -----------------------------------------*/
interface IFilterActionsProps { label: string, filter: IFilter }

/*----------------------------------------- components -----------------------------------------*/
/**
 * Controller displaying the corresponding filter
 * @param {IFilterActionsProps} props column filter configuration and name
 * @returns 
 */
export const FiltersActions = (props: IFilterActionsProps) => {
    const { type } = props.filter

    return (
        <div className={styles.actions__wrapper} style={{ gap: "10px" }}>
            <>
                {type === "text" && (<FilterTextType {...props} />)}
                {type === "number" && (<FilterNumberType {...props} />)}
                {type === "date" && (<FilterDateType {...props} />)}
                {type === "boolean" && (<FilterBooleanType {...props} />)}
            </>
        </div>
    )
}

/**
 * Field that allows you to filter by a specific column.
 * set the filt configuration of the grid
 * @returns
 */
const FilterTextType = ({ filter, label }: IFilterActionsProps) => {
    // hooks
    const { currentValue, simpleSetFilter } = useGetTextFilterByParam(filter.param)
    const { handleInput, loading, removeSearchInput, searchValue } = useHandleTextInputWithTimer(changeFiltValue, currentValue)

    // functions
    function changeFiltValue(value?: string | number) {
        simpleSetFilter(filter.param, filter.signal, filter.type, value)
    }

    return (
        <>
            <label htmlFor={filter.param}>Buscar por:</label>
            <div className={styles.row__inputs__wrapper} style={{ marginBottom: "10px" }}>
                <input type="text" id={filter.param} onChange={handleInput} value={searchValue} placeholder={label} />
                {loading && <LoadingIcon />}
                {(Boolean(currentValue) && !loading) && <DeleteFilterText remove={removeSearchInput} />}
            </div>
        </>
    )
}

/**
 * Component that allows you to filter by a range of numbers, less than and greater than.
 * set the filt configuration of the grid
 * @returns 
 */
const FilterNumberType = ({ filter }: IFilterActionsProps) => {
    // hooks
    const { changeFiltValue, sendValue, state } = useHandleIntervalFilter({ ...filter })

    return (
        <form className={styles.form__filter__wrapper} onSubmit={sendValue}>
            <p>Filtrar por un valor</p>

            <div className={styles.actions__wrapper} style={{ gap: "2px" }}>
                <label htmlFor="major">mayor a:</label>
                <input type="number" id="major" onChange={changeFiltValue} value={state.major} />
            </div>

            <div className={styles.actions__wrapper} style={{ gap: "2px" }}>
                <label htmlFor="minor">menor a:</label>
                <input type="number" id="minor" onChange={changeFiltValue} value={state.minor} />
            </div>

            <button type="submit">
                Enviar
            </button>
        </form>
    )
}

/**
 * Component that allows you to filter by a range of date, less than and greater than.
 * set the filt configuration of the grid
 * @returns 
 */
const FilterDateType = ({ filter }: IFilterActionsProps) => {
    // hooks
    const { changeFiltValue, sendValue, state } = useHandleIntervalFilter({ ...filter })
    const currentDate = useMemo(() => getCurrentDate(), [])
    
    return (
        <form className={styles.form__filter__wrapper} onSubmit={sendValue}>
            <p>Filtrar por una fecha</p>

            <div className={styles.actions__wrapper} style={{ gap: "2px" }}>
                <label htmlFor="major">mayor a:</label>
                <input type="date" id="major" onChange={changeFiltValue}
                    value={state.major} max={state.minor === "" ? currentDate : state.minor} />
            </div>

            <div className={styles.actions__wrapper} style={{ gap: "2px" }}>
                <label htmlFor="minor">menor a:</label>
                <input type="date" id="minor" onChange={changeFiltValue}
                    value={state.minor} min={state.major} max={currentDate} />
            </div>

            <button type="submit">
                Enviar
            </button>
        </form>
    )
}


const FilterBooleanType = ({ filter }: IFilterActionsProps) => {
    return <></>
}