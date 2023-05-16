import { Fonts } from "../../../constants/fonts"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
textarea,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  word-break: break-word;
  font-family: 'GeneralSans';
}
.navbar-side-container {
  display: flex;
  width: 100%;
}
.header-container {
  width: 100%;
  max-width: 100%;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html * {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}



input:not([type="range"]) {
  -webkit-appearance: none;
  border: none;
  background: none;
}

input,
button {
  &:focus {
    outline: unset;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: none !important;
  color: inherit;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  box-shadow: 0 0 0 30px white inset !important;
}
textarea:focus{
    outline: 0;
}
textarea{
  
}


button {
  margin: 0;
  border: none;
  background: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
    -moz-appearance:textfield;
}

::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 10px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #4D7FFF;
	}
	::-webkit-scrollbar-track {
		background-color: #BDCFFF;
	}

  ${Fonts}
`
