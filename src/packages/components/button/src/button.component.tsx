import { SButton, SButtonIcon } from "./button.style"

import { IButtonProps } from "../interfaces/button.interface"
import React from "react"
import classnames from "classnames"
import useGetTheme from "../../../../hooks/useGetTheme"

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const {
    text,
    type,
    leftIcon,
    rightIcon,
    onClick,
    disabled,
    className,
    singleIcon,
    singleIconColor,
    size,
    inGroup,
    rightIconColor,
    leftIconColor,
    rightIconStroke,
    leftIconStroke,
    sizeIcon,
    count,
    smallLeftIcon,
    loading,
    loadingLeft,
    loadingRight,
    finished,
    finishedLeft,
    finishedRight,
    styles,
    downloading,
    linkColor,
  } = props
  const {theme} = useGetTheme()
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!singleIcon ? (
        <SButton
          {...styles}
          colorTheme={theme}
          data-test-id="custom-button"
          className={`${classnames(className || "", type || "", size || "", {
            "in-group": inGroup,
          })} ${disabled ? `${type}-disabled disabled` : ""} button-component`}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={(ev: any) => {
            if (!disabled && !downloading && onClick) onClick(ev)
          }}
          linkColor={linkColor}
        >
          {downloading !== undefined && <div className="loading-bar" style={{ width: `${downloading}%` }}></div>}
          {count && (
            <div className="button-left-count">
              <p>{count}</p>
            </div>
          )}

          {!loading && text ? (
            <div className={`button-text ${smallLeftIcon ? "button-text-indication" : ""}`}>
              {leftIcon && !loading && !finished && <div className="button-left-icon">{leftIcon}</div>}
              {finished ? (
                <div className="main-finished">
                  {/* <SCheckmark className="check-component" />{" "} */}
                </div>
              ) : (
                <p>{text}</p>
              )}
              {smallLeftIcon && <img src={smallLeftIcon} alt="" />}
              {rightIcon && !loading && !finished && <div className="button-right-icon">{rightIcon}</div>}
            </div>
          ) : (
            <div className={`button-text ${smallLeftIcon ? "button-text-indication" : ""}`}>
              <div className="loading-main">
                {/* <Spinner isLoading={loading} finished={finished} type={type} /> */}
              </div>
            </div>
          )}
        </SButton>
      ) : (
        <SButtonIcon
        colorTheme={theme}
          className={`${classnames(className || "", type || "", {
            disabled: !!disabled,
          })} singleIcon`}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            !disabled && onClick ? onClick() : ""
          }}
        >
          <div className={`button-icon`}>
            {/* <SVGIcon size={sizeIcon || "32px"} icon={singleIcon} color={singleIconColor} /> */}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 5.5L8.5 11.5L14.5 5.5"
                stroke="#353E50"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </SButtonIcon>
      )}
    </>
  )
}
