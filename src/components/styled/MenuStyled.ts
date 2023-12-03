import { Menu as MenuInner, ControlledMenu, MenuViewScroll, MenuPosition, MenuDirection, MenuAlign } from "@szhsin/react-menu";
import { menuItemSelector, menuSelector } from "@szhsin/react-menu/style-utils";
import styled from "styled-components";

export interface ICustomeMenuSzh {
    viewScroll?: MenuViewScroll
    position?: MenuPosition
    direction?: MenuDirection
    align?: MenuAlign
    boundingBoxPadding?: string
}

export const MenuList = styled(MenuInner).attrs(() => ({
    transition: true,
}))`
    ${menuSelector.name} {
        padding-block: 0px;
        box-shadow: var(--shadow);
    }
    
    ${menuItemSelector.name} {
        display: flex;
        align-items: center;
        justify-content: start;
        padding-inline: 10px;
        gap: 8px;
        
        font-family: 'Work Sans', sans-serif;
        font-size: clamp(12px, 2vw, 14px);
        font-weight: 400;
    }
`;

export const MenuActionList = styled(MenuInner).attrs(() => ({
    transition: true,
}))`
    ${menuSelector.name} {
        background-color: var(--component_bg);
        padding-block: 0px;
        box-shadow: var(--shadow);
        z-index: 2;
    }

    ${menuItemSelector.name} {
        padding-block: 8px;
        padding-inline: 15px;
        display: flex;
        gap: 8px;
        font-family: 'Work Sans', sans-serif;
        font-size: clamp(14px, 2vw, 16px);

        & svg {
            width: 18px;
            height: 18px;
        }
    }

    ${menuItemSelector.disabled} {
        background-color: var(--text_disabled);
        & svg, path {
            fill: var(--stroke_disabled) !important;
        }
    }
`;

export const MenuControlled = styled(ControlledMenu).attrs(() => ({
    transition: true
}))`
    ${menuSelector.name} {
        padding-block: 0px;
        box-shadow: var(--shadow);
    }

    ${menuItemSelector.name} {
        padding-block: 8px;
    }
`;


export const IconInputInfoMenu = styled(ControlledMenu).attrs(() => (
    {
        arrow: true,
        role: 'tooltip',
        align: "end",
        position: "initial",
        offsetY: -2,
        offsetX: -2
    }
))`
    ${menuSelector.name}{
        padding-inline: 8px;
        width: 340px;
        font-size: 14px;
        box-shadow: var(--shadow);
        border-radius: 10px;

        /* background-color: var(--stroke_color);
        color: white; */

        @media (max-width: 992px) {
            width: 265px;
        }

        /* @media (max-width: 480px) {
            width: 265px;
        } */
    }

    ${menuItemSelector.name} {
        /* background-color: var(--stroke_color); */
        padding: 0;
        cursor: default;
    }

    & .szh-menu__arrow {
        box-sizing: border-box;
        width: 0.75rem;
        height: 0.75rem;
        background-color: #fff;
        /* background-color: var(--stroke_color); */
        border: 1px solid transparent;
        border-left-color: rgba(0, 0, 0, 0.1);
        border-top-color: rgba(0, 0, 0, 0.1);
        z-index: -1;
    }

    ${menuItemSelector.hover}{
        background-color: var(--component_bg) !important;
    }
`