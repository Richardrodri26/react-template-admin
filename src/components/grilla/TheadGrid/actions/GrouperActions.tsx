import styles from "./../../grid.module.css"
import { IFilter } from "../../context"
import { useHandleGrouperFilter } from "../../hooks/handleGrouper"


/*----------------------------------------- interfaces -----------------------------------------*/
interface IFilterActionsProps { label: string, filter: IFilter }

/*----------------------------------------- components -----------------------------------------*/

/**
 * Field that allows you to filter by a specific column grouping by values.
 * set the filt configuration of the grid
 * @param props 
 * @returns 
 */
export const GrouperActions = (props: IFilterActionsProps) => {
    const { type } = props.filter

    return (
        <div className={styles.actions__wrapper} style={{ gap: "10px" }}>
            {type === "text" ? <FilterGroupTextType {...props} /> : null}
        </div>
    )
}

export const FilterGroupTextType = ({ filter, label }: IFilterActionsProps) => {
    // hooks
    const { data, isError, isLoading, valuesCheckeds, onChange } = useHandleGrouperFilter(filter.param)

    // components
    if (isLoading) return <div className="skeleton__loading" style={{ width: "100%", height: 50 }} />

    if (isError) return <p style={{ color: "crimson" }}>!Hubo un error en la consulta¡</p>

    if (!data || !data.items || data.items.length === 0) return <label style={{ marginBottom: 6}}>No hay datos a mostrar</label>

    return (
        <>
            <label htmlFor={filter.param}>Seleccionar {label}(s/es):</label>
            <div className={styles.grouper__action__wrapper}>
                {data.items?.map((item, index) => {
                    const currentValue = item[filter.param]

                    return (
                        <div key={index}>
                            <input type="checkbox" id={currentValue} name={currentValue} checked={valuesCheckeds?.includes(currentValue) ?? false} onChange={onChange} />
                            <label htmlFor={currentValue} >
                                {currentValue}
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}