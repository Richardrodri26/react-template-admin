import ReactPaginate from "react-paginate";
import styled from "styled-components";

const PADDING_SINGAL = "10px"

export const StylePaginate = styled(ReactPaginate).attrs(() => ({
    activeClassName: "page__active",
    pageClassName: "page__number",
    disabledClassName: "page__disabled",
    previousClassName: "previous__button",
    nextClassName: "next__button",
})) <{ $customeCss?: string }>`
display: flex;
align-items: baseline;
& .page__number {
    /* width: 35px; */
    display: flex;
    a {
        cursor: pointer;
        font-family: 'Work Sans',sans-serif;
        color: var(--contrary_main_color);
        /* min-width: 25px; */
        text-align: center;
        padding-block: 4px;
        padding-inline: 10px;
        border-radius: 4px;
        transition: background-color , color .4s ease-in-out;
        :hover {
            background-color: var(--opacity_main_color);
            box-shadow: 2px 3px 6px var(--border_shadow_sm);
        }
    }
}

.previous__button {
    padding-right: ${PADDING_SINGAL};
}

.next__button {
    padding-left: ${PADDING_SINGAL};
}

.previous__button, .next__button{
    cursor: pointer;
    & a {
        font-family: 'Work Sans', sans-serif;
        width: 130px;
        /* background-color: var(--contrary_main_color) !important; */
        color: var(--main_color);
        /* border-radius: 50%; */
        background-color: transparent;
        padding: 5px 5px 2px 5px;
        /* & svg {
            height: 15px;
            width: 15px;
            fill: white;
        } */
        text-decoration: underline;
    }
}

.page__active a{
    cursor: pointer;
    background-color: var(--main_color);
    color: var(--reverse_stroke_color);
    transition: box-shadow .2s linear;
    :hover {
        background-color: var(--contrary_main_color);
    }
}

.page__disabled a{
    cursor: context-menu;
    /* background-color: var(--stroke_disabled) !important; */
    color: var(--stroke_disabled) !important;
    :hover{
        box-shadow: none !important;
    }
}

${({ $customeCss }) => $customeCss ?? ""}
`