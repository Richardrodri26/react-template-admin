import styles from "./../grid.module.css"

export const DeleteFilterText = ({ remove }: { remove: () => void }) => {
    return (
        <svg className={styles.left__icon__position + " " + styles.delete__icon} stroke="currentColor"
            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg" onClick={remove}>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
            </path>
        </svg>
    )
}

export const LoadingIcon = () => {
    return (
        <svg className={styles.left__icon__position + " " + styles.loading__icon} stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
            <path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="currentColor"></path><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path>
        </svg>
    )
}

export const ColumnsIcon = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.893 3.001H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h15.893c1.103 0 2-.897 2-2V5a2.003 2.003 0 0 0-2-1.999zM8 19.001H4V8h4v11.001zm6 0h-4V8h4v11.001zm2 0V8h3.893l.001 11.001H16z"></path></svg>
    )
}

export const ArrowRightDirection = ({ onClick }: { onClick?: () => void }) => {
    return (
        <svg stroke="currentColor" onClick={onClick} fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z" fill="currentColor"></path></svg>
    )
}

export const OptionsIcon = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="48"></circle><circle cx="416" cy="256" r="48"></circle><circle cx="96" cy="256" r="48"></circle></svg>
    )
}

export const RowActionSvg = () => {
    return (
        <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333379 16.6991C0.333379 17.2266 0.489805 17.7423 0.782903 18.1809C1.076 18.6195 1.4926 18.9614 1.97999 19.1632C2.46737 19.365 3.00369 19.4178 3.52106 19.3148C4.03844 19.2118 4.51365 18.9577 4.8866 18.5846C5.25955 18.2115 5.51348 17.7363 5.61628 17.2189C5.71907 16.7015 5.66607 16.1652 5.46406 15.6779C5.26204 15.1905 4.92005 14.774 4.48133 14.4811C4.04261 14.1881 3.52692 14.0319 2.99939 14.0321C2.64917 14.032 2.30234 14.1009 1.97876 14.2349C1.65519 14.3689 1.36119 14.5654 1.11359 14.8131C0.865991 15.0608 0.669645 15.3548 0.535771 15.6785C0.401898 16.0021 0.333116 16.3489 0.333379 16.6991ZM0.333379 3.66309C0.333379 4.19061 0.489805 4.70629 0.782903 5.1449C1.076 5.58351 1.4926 5.92537 1.97999 6.1272C2.46737 6.32903 3.00369 6.3818 3.52106 6.27881C4.03844 6.17582 4.51365 5.92179 4.8866 5.54871C5.25955 5.17562 5.51348 4.70027 5.61628 4.18286C5.71907 3.66545 5.66607 3.12916 5.46406 2.64185C5.26204 2.15453 4.92005 1.73812 4.48133 1.44519C4.04261 1.15226 3.52692 0.995896 2.99939 0.996094C2.64892 0.995962 2.30187 1.06504 1.97809 1.19922C1.65432 1.3334 1.36013 1.53007 1.11249 1.77808C0.864853 2.02609 0.668614 2.32056 0.534917 2.64453C0.40122 2.96851 0.332721 3.31566 0.333379 3.66614V3.66309ZM2.99939 7.51416C3.52692 7.51396 4.04261 7.6702 4.48133 7.96313C4.92005 8.25607 5.26204 8.67248 5.46406 9.15979C5.66607 9.6471 5.71907 10.1834 5.61628 10.7008C5.51348 11.2182 5.25955 11.6936 4.8866 12.0667C4.51365 12.4397 4.03844 12.6939 3.52106 12.7969C3.00369 12.8999 2.46737 12.8471 1.97999 12.6453C1.4926 12.4434 1.076 12.1016 0.782903 11.663C0.489805 11.2244 0.333379 10.7087 0.333379 10.1812C0.33351 9.83118 0.402576 9.48466 0.536626 9.16138C0.670676 8.83809 0.867068 8.54437 1.11463 8.297C1.36219 8.04962 1.65605 7.85341 1.97944 7.7196C2.30282 7.5858 2.64942 7.51696 2.99939 7.51709V7.51416Z" fill="#737373" />
        </svg>
    )
}
// export const RowActionSvg = () => {
//     return (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
//     )
// }

// export const PaginationNextArrow = () => {
//     return (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
//     )
// }

// export const PaginationBackArrow = () => {
//     return (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
//     )
// }

export const ExpandGridRow = ({ isExpanded, onClick }: { isExpanded: boolean, onClick: () => void }) => {
    return (
        <button type="button" className={styles.expand__icon__button}>
            <svg onClick={onClick} style={{ transform: `rotate(${isExpanded ? "0deg" : "180deg"})` }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
        </button>
    )
}