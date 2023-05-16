export interface IButtonProps{
  onClick: (ev?: unknown) => void
  text?: string
  width?: string
  size?: "large" | "medium" | "small"
  inGroup?: boolean
  className?: string
  disabled?: boolean
  loading?: boolean
  type?:
    | "primary"
    | "secondary"
    | "outlined"
    | "link"
    | "tabs"
    | "tabs-selected"
    | "pills"
    | "pills-selected"
  singleIcon?: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  count?: number
  smallLeftIcon?: string
  finished?: boolean
  styles?: IButtonStyles
  downloading?: number;
  linkColor?: ILinkColor;
}
export interface IButtonStyles {
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
