import styled, { css } from "styled-components"
import { IButtonStyles } from "../interfaces/button.interface"



export const SButton = styled.div<IButtonStyles>`
  cursor: pointer;
  width: ${(props) => (props?.default?.width ? props?.default?.width : "100%")};
  min-width: ${(props) => (props?.default?.width ? props?.default?.width : "238px")};
  max-width: ${(props) => (props?.default?.width ? props?.default?.width : "238px")};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out all;
  user-select: none;
  border-radius: 4px;
  font-weight: 400;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  position: relative;
  svg * {
    transition: 0.3s ease-in-out all;
  }
  .loading-bar {
    transition: width 0.3s ease;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.blue.blue400};
  }
  .button-text {
    position: relative;
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "GeneralSans";
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
  }

  .button-right-icon,
  .button-left-icon {
    width: 21px;
    height: 21px;
    min-width: 21px;
    min-height: 21px;
    transition: 0.3s ease-in-out all;
  }

  .button-left-icon {
    margin-left: -8px;
    margin-right: 8px;
    width: 21px;
    height: 21px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .check-component {
    transition: border-color 0.3s ease-in-out;
  }
  .button-right-icon {
    margin-right: -8px;
    margin-left: 8px;
    width: 21px;
    height: 21px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &.small {
    height: 35px;
    min-height: 35px;
    max-height: 35px;
  }
  &.medium {
    height: 55px;
    min-height: 55px;
    max-height: 55px;
    & .loading-main {
      height: 32px;
      width: 32px;
    }
  }
  &.large {
    height: 65px;
    min-height: 65px;
    max-height: 65px;
  }

  /* LOADING AND CHECK SIZES */
  & .loading-main {
    height: 32px;
    width: 32px;
  }

  & .main-finished {
    margin-bottom: 10px;
    width: 32px;
  }
  &.button-component,
  &.primary {
    background-color: ${({ theme }) => theme.blue.blue700};
    color: ${(props) => props?.theme?.primary?.white};
    text-transform: uppercase;
    &:hover {
      background-color: ${(props) => props?.theme?.blue?.blue500};
    }
    &:active,
    &:focus {
      background-color: ${(props) => props?.theme?.blue?.blue800};
      /* box-shadow: 0px 0px 10px rgba(0, 47, 167, 0.5); */
    }
    svg {
      path {
        stroke: ${(props) => props?.theme?.primary?.white};
      }
    }
    &.primary-disabled,
    &.disabled {
      background-color: ${(props) => props?.theme?.grey?.grey200};
      cursor: default;
      color: ${(props) => props?.theme?.grey?.grey400};
      svg {
        path {
          stroke: ${(props) => props?.theme?.grey?.grey400};
        }
      }
      &:active,
      &:focus {
        box-shadow: none;
      }
    }
  }

  &.round {
    min-width: ${(props) => (props?.default?.width ? props?.default?.width : "74px")};
    min-height: 74px;
    border-radius: 50%;
    background-color: ${(props) => props?.theme?.blue?.blue50};

    .button-icon {
      background-color: ${(props) => props?.theme?.blue?.blue100};
      width: 60px;
      height: 60px;
      border-radius: 50%;
      transition: 0.2s ease-in-out background-color;
    }
    svg {
      path {
        stroke: ${(props) => props?.theme?.blue?.blue500};
      }
    }
    &:hover {
      background-color: ${(props) => props?.theme?.blue?.blue100};
      .button-icon {
        background-color: ${(props) => props?.theme?.blue?.blue200};
      }
    }
    &:active,
    &:focus {
      background-color: ${(props) => props?.theme?.blue?.blue200};
      box-shadow: 0px 0px 10px rgba(77, 127, 255, 0.3);
      .button-icon {
        background-color: ${(props) => props?.theme?.blue?.blue300};
      }
    }
    &.disabled {
      box-shadow: none;
      cursor: default;
      background-color: ${(props) => props?.theme?.grey?.grey200};
      .button-icon {
        background-color: ${(props) => props?.theme?.grey?.grey300};
      }
      svg {
        path {
          stroke: ${(props) => props?.theme?.grey?.grey500};
        }
      }
    }
  }

  &.outlined {
    background-color: unset;
    border: 1px solid ${(props) => props?.theme?.blue?.blue700};
    color: ${(props) => props?.theme?.blue?.blue700};
    text-transform: uppercase;
    .check-component {
      border-color: ${(props) => props?.theme?.blue?.blue700};
    }
    svg {
      path {
        stroke: ${(props) => props?.theme?.blue?.blue700};
      }
    }
    &:hover {
      color: ${(props) => props?.theme?.blue?.blue400};
      border-color: ${(props) => props?.theme?.blue?.blue400};
      background-color: unset;
      .check-component {
        border-color: ${(props) => props?.theme?.blue?.blue400};
      }
      svg {
        path {
          stroke: ${(props) => props?.theme?.blue?.blue400};
        }
      }
    }
    &:active,
    &:focus {
      border: 1px solid ${(props) => props?.theme?.blue?.blue700};
      color: ${(props) => props?.theme?.blue?.blue700};
    }
    &.outlined-disabled {
      cursor: default;
      background-color: transparent;
      border-color: ${(props) => props?.theme?.grey?.grey400};
      /* background-color: ${(props) => props?.theme?.primary?.baseWhite}; */
      color: ${(props) => props?.theme?.grey?.grey400};
      svg {
        path {
          stroke: ${(props) => props?.theme?.grey?.grey400};
        }
      }
      &:active,
      &:focus {
        box-shadow: none;
      }
    }
  }

  &.secondary {
    background-color: ${(props) => props?.theme?.primary?.baseWhite};
    color: ${(props) => props?.theme?.blue?.blue700};

    &:hover {
      background-color: ${(props) => props?.theme?.grey?.grey300};
      color: ${(props) => props?.theme?.blue?.blue700};
    }
  }

  &.outlined-secondary {
    background-color: unset;
    border: 1px solid ${(props) => props?.theme?.primary?.baseWhite};
    color: ${(props) => props?.theme?.primary?.baseWhite};
    text-transform: uppercase;
    .check-component {
      border-color: ${(props) => props?.theme?.primary?.baseWhite};
    }
    svg {
      path {
        stroke: ${(props) => props?.theme?.primary?.baseWhite};
      }
    }
    &:hover {
      color: ${(props) => props?.theme?.blue?.blue700};
      background-color: ${(props) => props?.theme?.primary?.baseWhite};
      .check-component {
        border-color: ${(props) => props?.theme?.blue?.blue700};
      }
      svg {
        path {
          stroke: ${(props) => props?.theme?.blue?.blue700};
        }
      }
    }
    /* &:active,
    &:focus {
      border: 1px solid ${(props) => props?.theme?.blue?.blue700};
      color: ${(props) => props?.theme?.blue?.blue700};
    } */
    &.outlined-secondary-disabled {
      opacity: 0.5;
      cursor: default;
      background-color: ${(props) => props?.theme?.primary?.baseWhite};
      border: 1px solid ${(props) => props?.theme?.primary?.baseWhite};
      color: ${(props) => props?.theme?.blue?.blue700};
      svg {
        path {
          stroke: ${(props) => props?.theme?.blue?.blue700};
        }
      }
      &:active,
      &:focus {
        box-shadow: none;
      }
    }
  }

  &.secondary {
    background-color: ${(props) => props?.theme?.primary?.baseWhite};
    color: ${(props) => props?.theme?.blue?.blue700};

    &:hover {
      background-color: ${(props) => props?.theme?.grey?.grey300};
      color: ${(props) => props?.theme?.blue?.blue700};
    }
  }

  &.link {
    margin: 0;
    padding: 0;
    background-color: unset;
    width: fit-content;
    color: ${({ linkColor }) => (linkColor ? linkColor.default : (props) => props?.theme?.blue?.blue400)};
    text-transform: uppercase;
    transition: none;
    p {
      transition: 0.3s ease-in-out color;
    }
    svg {
      path {
        stroke: ${({ linkColor }) => (linkColor ? linkColor.default : (props) => props?.theme?.blue?.blue400)};
      }
    }
    &:hover {
      background-color: unset;
      color: ${({ linkColor }) => (linkColor ? linkColor.hover : (props) => props?.theme?.blue?.blue400)};
      /* font-style: italic; */
      text-decoration: underline;
      svg {
        path {
          stroke: ${({ linkColor }) => (linkColor ? linkColor.hover : (props) => props?.theme?.blue?.blue400)};
        }
      }
    }
    &:active,
    &:focus {
      color: ${({ linkColor }) => (linkColor ? linkColor.active : (props) => props?.theme?.blue?.blue400)};
      font-style: normal;
      text-decoration: none;
      svg {
        path {
          stroke: ${({ linkColor }) => (linkColor ? linkColor.active : (props) => props?.theme?.blue?.blue400)};
        }
      }
    }
    &.link-disabled {
      background-color: inherit;
      color: ${(props) => props?.theme?.grey?.grey400};
      font-style: normal;
      cursor: default;
      text-decoration: none;
      svg {
        path {
          stroke: ${(props) => props?.theme?.grey?.grey400};
        }
      }
    }
  }

  &.pills {
    height: 35px;
    background-color: unset;
    border: 1px solid ${(props) => props?.theme?.grey?.grey300};
    color: ${(props) => props?.theme?.grey?.grey400};
    border-radius: 50px;
    padding: 10px 22px;
    text-transform: capitalize;
    text-align: start;
    &:hover {
      cursor: pointer;
      border: 1px solid ${(props) => props?.theme?.blue?.blue400};
      background-color: ${(props) => props?.theme?.blue?.blue50};
    }

    &-selected {
      height: 35px;
      background-color: ${(props) => props?.theme?.blue?.blue50};
      border: 1px solid ${(props) => props?.theme?.blue?.blue500};
      color: ${(props) => props?.theme?.blue?.blue500};
      border-radius: 50px;
      padding: 10px 22px;
      text-transform: capitalize;
      &:hover {
        cursor: pointer;
        background-color: unset;
      }
    }

    &.pills-disabled {
      cursor: default;
      border: 1px solid ${(props) => props?.theme?.grey?.grey300};
      color: ${(props) => props?.theme?.grey?.grey400};
      &:hover {
        background-color: ${(props) => props?.theme?.grey?.grey200};
        border: 1px solid ${(props) => props?.theme?.grey?.grey300};
        color: ${(props) => props?.theme?.grey?.grey400};
      }
    }
  }

  &.tabs {
    background-color: unset;
    width: fit-content;
    padding: 15px;
    border-radius: 0;
    color: ${(props) => props?.theme?.grey?.grey400};
    border-bottom: 1px solid ${(props) => props?.theme?.grey?.grey300};
    &:hover {
      background-color: unset;
    }
    svg {
      path {
        stroke: ${(props) => props?.theme?.grey?.grey400};
      }
    }

    &-selected {
      background-color: unset;
      padding: 15px;
      border-radius: 0;
      color: ${(props) => props?.theme?.blue?.blue400};
      border-bottom: 2px solid ${(props) => props?.theme?.blue?.blue400};
      &:hover {
        background-color: unset;
      }
      svg {
        path {
          stroke: ${(props) => props?.theme?.blue?.blue400};
        }
      }
    }
  }

  .button-text-indication {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 16px;
      width: 16px;
      margin-top: 2px;
    }
  }

  /* DYNAMIC STYLES */
  ${(props) =>
    props.default &&
    css`
      &.button-component {
        background: ${props.default.background ? props.default.background : ""};
        border: ${props.default.border ? props.default.border : ""};
        color: ${props.default.color ? props.default.color : ""};
        svg {
          path {
            stroke: ${props.default.iconsColor ? props.default.iconsColor : ""};
          }
        }
      }
      &.pills {
        background: ${props.default.background ? props.default.background : ""};
        border: ${props.default.border ? props.default.border : ""};
        color: ${props.default.color ? props.default.color : ""};
        &-selected {
          background: ${props.default.background ? props.default.background : ""};
          border: ${props.default.border ? props.default.border : ""};
          color: ${props.default.color ? props.default.color : ""};
        }
      }
    `}
  ${(props) =>
    props.hover &&
    css`
      &.button-component:hover {
        background: ${props.hover.background ? props.hover.background : ""};
        border: ${props.hover.border ? props.hover.border : ""};
        color: ${props.hover.color ? props.hover.color : ""};
        svg {
          path {
            stroke: ${props.hover.iconsColor ? props.hover.iconsColor : ""};
          }
        }
      }
    `}
  ${(props) =>
    props.pressed &&
    css`
      &.button-component:active,
      &.button-component:focus {
        background: ${props.pressed.background ? props.pressed.background : ""};
        border: ${props.pressed.border ? props.pressed.border : ""};
        color: ${props.pressed.color ? props.pressed.color : ""};
        svg {
          path {
            stroke: ${props.pressed.iconsColor ? props.pressed.iconsColor : ""};
          }
        }
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      &.button-component {
        &.disabled {
          background: ${props.disabled.background ? props.disabled.background : ""};
          border: ${props.disabled.border ? props.disabled.border : ""};
          color: ${props.disabled.color ? props.disabled.color : ""};
          svg {
            path {
              stroke: ${props.disabled.iconsColor ? props.disabled.iconsColor : ""};
            }
          }
        }
      }
    `}

  @media (max-width: 1024px) {
    &.tabs {
      padding: 16px;
      width: 100%;
    }
  }
`

export const SButtonIcon = styled(SButton)`
  width: 56px;
  height: 56px;
  padding: 0;
  .button-icon {
    svg {
      width: 36px;
      height: 36px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
