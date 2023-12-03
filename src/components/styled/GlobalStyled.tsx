import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

interface IGlobalStyle {
    main: string;
    opacityMain: string;
    contraryMain: string;
    mainColorA2: string;
    scroll: string;
    scrollHover: string;
}

/**
 * App important styles and var css implemented
 */
const GlobalStyle = createGlobalStyle<IGlobalStyle>`
    :root {
      /*--------------------custome--------------------*/
      ${(themes) => `
            --scroll: ${themes.scroll};
            --scroll_hover: ${themes.scrollHover}; 
            --main_color: ${themes.main};
            --opacity_main_color: ${themes.opacityMain};
            --contrary_main_color: ${themes.contraryMain};
            --main_color_a2: ${themes.mainColorA2};      
      `}
    }

    ${(themes) => `
        .cls-1 {
            fill: ${themes.main} !important;
        }
    `}
    
    .section__title {
        position: relative;
        background-color: var(--main_color);
        padding: 16px 32px 16px 32px;
        width: 100%;
        color: var(--reverse_stroke_color);
        text-align: center;

        font-weight: 600;
        font-size: clamp(24px, 2vw, 32px);

        display:flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        outline: none;
        & > p {
            max-width: 900px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        
        & > .title__icon {
            height: 40px;
            display: flex;
            gap: 10px;
            
            & svg {
                height: 40px;
                width: 40px;
            }
            
            &  path {
                fill: var(--reverse_stroke_color) !important;
            }

            ::after {
                content:"";
                display: block;
                height: 40px;
                width: 2px;
                background-color: var(--reverse_stroke_color);
            }
        }

        & > .nav__back__btn {
            cursor:pointer;
            background-color: var(--main__color);
            display: flex;
            align-items: center;
            gap: 10px;
            position: absolute;
            left: var(--padding_app_lg);
            color: var(--reverse_stroke_color);

            & svg {
                height: 21px;
                width: 13px;
            }
            
            &  path {
                fill: var(--reverse_stroke_color) !important;
            }
            
            :hover {
                background-color: var(--contrary_main_color);
                box-shadow: none;
            }

            & > p {
                font-family: 'Work Sans', sans-serif;
                font-size: clamp(18px, 2vw, 20px);
            }

            @media (max-width: 992px) {
                left: var(--padding_app_sm);
            }

            @media (max-width: 480px) {
                left: 10px;
                padding: 0px !important;

                & > p {
                    display: none;
                }
            }
        }
    }

    .section__title__reverse {
        background-color: var(--component_bg);
        padding-block: 30px;
        width: 100%;
        color: var(--main_color);
        text-align: center;

        font-weight: 600;
        font-size: clamp(24px, 2vw, 32px);
    }

    .sub__section__title {
        position: relative;
        background-color: var(--component_light_bg);
        height: 74px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: 20px;
        gap: 15px;
        border-bottom: 4px solid var(--border_light);

        text-align: center;

        font-weight: 600;
        font-size: clamp(24px, 2vw, 24px);
        color: var(--main_color);

        & > h3 {
            padding-left: 35px;
            font-size: clamp(22px, 2vw, 24px);
            font-weight: 600;
            border-left: 1px solid var(--contrary_main_color);
            color: var(--contrary_main_color);
        }

        & > button {
            height: 35px !important;
            background-color: var(--component_light_bg);
            padding-inline: 10px !important;
            position: absolute;
            left: var(--padding_app_lg);
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            gap: 15px;
            color: var(--contrary_main_color);
            font-family: 'Work Sans', sans-serif;

            @media (max-width: 480px) {
                left: 2px;
                top: 25px;
                padding: 0px !important;
                gap: 2px;

                & > p {
                    display: none;
                }
            }
        }

        & > .nav__back__btn {
            & svg {
                height: 21px;
                width: 13px;
            }
            
            &  path {
                fill: var(--main_color) !important;
            }
        }

        & > svg {
                scale: .4;
                & path {
                    fill: var(--contrary_main_color);
            }           
        }

        
        & > .title__icon {
            height: 40px;
            display: flex;
            gap: 10px;
            
            & svg {
                height: 40px;
                width: 40px;
            }
            
            &  path {
                fill: var(--main_color) !important;
            }

        }
        
        @media (max-width: 992px) {
            height: 192px;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & > button {
                left: 10px;

                & > svg {
                    height: 15px;
                    width: 15px;
                }
            }

            & > svg {
                scale: .8;
            }

           
            & > h3 {
                padding-left: 15px;
                border-left: none;
                text-align: center;
            }
        }
    }

    .app__card {
      background-color: var(--component_bg);
      padding-inline: 10px;
      padding-block: 24px;
      border-radius: 10px;
      box-shadow: var(--shadow);

      transition: transform 0.3s ease-in-out;
      :hover {
        transform: scale(1.015)
      }

      @media (max-width: 480px) {
        :hover {
            transform: none;
        }        
      }
    }

    .app__ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;


/**
 * Util class for app
 */
export const UtilGlobalClassStyle = createGlobalStyle`

.scroll__modal {
    ::-webkit-scrollbar {
        width: 4px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        /*--- custome ---*/
        background: #D9D9D9;
        border-radius: 9999px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--stroke_disabled);
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--stroke_disabled);
    }
}


    .error__fetch__input {
        border: 1px solid var(--error_color);
        width: 100%;
        height: 43px;
        margin-bottom: 20px;
        font-size: 16px;
        color: var(--error_color);
        padding: 10px;
        border-radius: 5px;
    }

    .app__line__separator {
        height: 2px;
        width: 100%;
        background-color: var(--main_color);
    }

    .swal2-toast {
        z-index: 999;    
    }
    /* .swal2-modal {
        z-index: 999;    
    }

    .swal2-backdrop-show {
        z-index: 999;
    } */

    /* .swal-shown {
        z-index: 999999;
    } */

    .swal2-modal, .swal2-top-end {
        h2 {
            font-family: 'Montserrat', sans-serif;
        }       
        #swal2-html-container {
            font-family: 'Work Sans', sans-serif;
        }
        .sweet__bg__warning {
            background-color: var(--warning_color);
        }
        .sweet__custome__icon {
            border: none !important;
        }
    }

    .swal2-top-end {
        #swal2-title {
            margin-inline: 0;
            margin-block: 5px;
        }
        #swal2-html-container  {
            margin: 0;
        }
    }
    
    .warning {
        color: var(--warning_color);
    }

    .success {
        color: var(--success_color);
    }

    .info {
        color: var(--info_color);
    }
    
    .error {
        color: var(--error_color);
    }

    .cancel__sweet {
        background: var(--reverse_stroke_color) !important;
        border: 2px solid var(--error_color) !important;
        color: var(--error_color) !important;
    }

    .sucess__sweet {
        background: var(--main_color) !important;
        color: var(--reverse_stroke_color) !important;
    }
    .error__sweet {
        background: var(--error_color) !important;
        color: var(--reverse_stroke_color) !important;
    }

    .pin__code__component {
        text-transform: uppercase;
        font-family: 'Work Sans', sans-serif;
        border-radius: 5px;
        border: 1px solid var(--border_color);
        margin: 4px;
        text-align: center;
        width: 40px;
        height: 40px;
        font-size: 16px;
        font-weight: 700;
        box-sizing: border-box;
        color: black;
        background-color: white;
        :focus {
            border-color: var(--gov_co_color);                
        }        
    }

    .xl__input {
        color: var(--main_color);
        font-size: clamp(22px, 2vw, 28px);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        height: 70px;
        width: 70px;

        div:has(>&) {
            margin-inline: auto;
        }
    }

    .reactour__mask {
        z-index: 500 !important;
    }

    .react__tour__card {
        width: fit-content;
        padding-inline: 10px !important;
        padding-block: 10px 35px !important;
        max-width: none !important;        
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .tour__wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;

            p {
                width: 100%;
            }
        }

        .react__tour__skip{
            cursor: pointer;
            position: absolute;
            right: 10px;
            bottom: 10px;
            text-decoration: underline;
            color: var(--stroke_secundary_color);
        }

        @media( max-width: 480px){
            width: 94%;
        }
    }

    .switch__btn__wrapper {
        cursor: pointer;
        width: 36px;
        height: 20px;
        border-width: 1px;
        border-style: solid;
        background-color: var(--stroke_disabled);
        border-color: var(--stroke_disabled);
        border-radius: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        &[data-active="true"] {
            justify-content: flex-end;
            background-color: var(--info_color);
            border-color: var(--info_color);
        }

        & > div {
            width: 16px;
            height: 16px;
            background-color: var(--component_bg);
            border-radius: 50%;
        }
    }

    

    .file__input__container {
        position: relative;
        display: block;
        transition: box-shadow .2s ease-out, background-color .2s ease-in-out;
        z-index: 10 !important;
        /* width: 100% !important; */

        ::before {
            color: white;
            /* width: 200px; */
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            content: 'Seleccionar archivo'; /* testo por defecto */
            /* cursor: pointer !important; */
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            padding-inline: 10px;

        }

        input[type=file] {
            opacity: 0;
            width: 184px !important;
            height: 42px !important;
            display: block;
            /* cursor: pointer; */

            position: absolute;
            z-index: 0;
            left: 0;
            top: 0;
            /* width: 100%;
            height: 100%; */
            /* opacity: 1; */
            /* cursor: pointer !important; */

            /** #file-upload-button */
        }

        /* input #file-upload-button {
            width: 10px !important;
        } */

        @media( max-width: 480px){
            width: 100% !important;
            border-radius: 5px !important;
            ::before {
                color: white;
                /* width: 100%; */
                height: 42px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                content: 'Seleccionar'; /* testo por defecto */
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }

            input[type="file"] {
                width: 100% !important;
            }
        }
    }
`

/**
 * App colors
 */
const appColors: { [key: string]: IGlobalStyle } = {
    "BlueThemeResponsive": {
        main: "rgb(0, 72, 132)",
        contraryMain: "rgb(0, 43, 80)",
        opacityMain: "rgb(230, 239, 253)",
        mainColorA2: "rgba(0, 136, 255, 0.145)",
        scroll: "rgb(2, 77, 139)",
        scrollHover: "rgb(1, 37, 69)"
    },
    "GreenThemeResponsive": {
        main: "#069169",
        contraryMain: "#0d684b",
        opacityMain: "#cde6df",
        mainColorA2: "#094834",
        scroll: "#07a075",
        scrollHover: "#10805c"
    },
    "RedThemeResponsive": {
        main: "rgb(168, 5, 33)",
        contraryMain: "rgb(132, 0, 22)",
        opacityMain: "rgb(238, 205, 210)",
        mainColorA2: "rgb(116, 1, 20)",
        scroll: "rgb(179, 6, 35)",
        scrollHover: "rgb(157, 4, 30)"
    },
    "PurpleThemeResponsive": {
        main: "rgb(83, 54, 201)",
        contraryMain: "rgb(63, 46, 135)",
        opacityMain: "rgb(221, 215, 244)",
        mainColorA2: "rgb(54, 40, 116)",
        scroll: "rgb(91, 60, 216)",
        scrollHover: "rgb(76, 49, 185)"
    },
    "OrangeThemeResponsive": {
        main: "rgb(243, 86, 31)",
        contraryMain: "rgb(172, 45, 0)",
        opacityMain: "rgb(255, 219, 205)",
        mainColorA2: "rgb(150, 41, 1)",
        scroll: "rgb(253, 92, 34)",
        scrollHover: "rgb(226, 81, 28)"
    },
    "DarkturquoiseThemeResponsive": {
        main: "rgb(0, 191, 168)",
        contraryMain: "rgb(0, 145, 130)",
        opacityMain: "rgb(204, 242, 238)",
        mainColorA2: "rgb(0, 122, 110)",
        scroll: "rgb(0, 210, 186)",
        scrollHover: "rgb(0, 168, 148)"
    },
    "BrownThemeResponsive": {
        main: "rgb(137, 63, 51)",
        contraryMain: "rgb(94, 51, 38)",
        opacityMain: "rgb(231, 217, 214)",
        mainColorA2: "rgb(78, 42, 31)",
        scroll: "rgb(159, 74, 60)",
        scrollHover: "rgb(116, 53, 44)"
    },
    "PinkThemeResponsive": {
        main: "rgb(217, 58, 142)",
        contraryMain: "rgb(170, 32, 105)",
        opacityMain: "rgb(255, 218, 237)",
        mainColorA2: "rgb(158, 30, 98)",
        scroll: "rgb(203, 54, 133)",
        scrollHover: "rgb(172, 46, 113)",
    },
    "RadicalRedThemeResponsive": {
        main: "rgb(244, 47, 99)",
        contraryMain: "rgb(179, 9, 55)",
        opacityMain: "rgb(238, 205, 210)",
        mainColorA2: "rgb(161, 8, 49)",
        scroll: "rgb(226, 43, 92)",
        scrollHover: "rgb(207, 39, 84)",
    }
}

/**
 * Set css colors var to the aplication
 * @returns {GlobalStyle}
 */
const DynamicGlobalStyle = () => {
    // const tema = useGeneral(state => state.information?.Tema) ?? "BlueThemeResponsive"

    const [colors, _] = useState<IGlobalStyle>(appColors["GreenThemeResponsive"])

    return (<GlobalStyle {...colors} />)
}

export default DynamicGlobalStyle;

