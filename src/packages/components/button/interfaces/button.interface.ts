import { IGlobalUi } from "../../../../interfaces/global.interface"

export interface IButtonProps extends IGlobalUi{
  onClick: (ev?: unknown) => void
  text?: string
  width?: string
  size?: "large" | "medium" | "small"
  inGroup?: boolean
  className?: string
  disabled?: boolean
  loading?: boolean
  loadingLeft?: boolean
  loadingRight?: boolean
  type?:
    | "primary"
    | "secondary"
    | "round"
    | "outlined"
    | "outlined-secondary"
    | "link"
    | "tabs"
    | "tabs-selected"
    | "pills"
    | "pills-selected"
  singleIcon?: string
  singleIconColor?: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  rightIconColor?: string
  leftIconColor?: string
  rightIconStroke?: string
  leftIconStroke?: string
  sizeIcon?: string
  count?: number
  smallLeftIcon?: string
  finished?: boolean
  finishedLeft?: boolean
  finishedRight?: boolean
  styles?: IButtonStyles
  downloading?: number;
  linkColor?: ILinkColor;
}
export interface IButtonStyles extends IGlobalUi {
  default?: IStylesOptoins
  hover?: IStylesOptoins
  pressed?: IStylesOptoins
  disabled?: IStylesOptoins
  linkColor?: ILinkColor;
}

export interface ILinkColor {
  default: string,
  hover: string, 
  active: string,
}

export interface IStylesOptoins {
  border?: string
  background?: string
  color?: string
  iconsColor?: string
  width?: string
}
