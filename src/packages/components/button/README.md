# Button

Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as stand-alone action
triggers

## Import Component

```jsx
import { Button } from "aiforce-ui"
```

## Usage

**Note🚨**: `text` and `onClick` props are always required.

```jsx
  <Button onClick={} text="Click Me" />
```

### Button Sizes

Use the `size` prop to change the size of the button. You can set the value to `large`, `medium`, `small`.

```jsx
<div>
  <Button size="large" onClick={} text="Click Me" />
  <Button size="medium" onClick={} text="Click Me"/>
  <Button size="small" onClick={} text="Click Me" />
</div>
```

### Button Variant

Use the `type` prop to change the visual style of the Button. Yo can set the value to `primary`, `secondary`,
`outlined`, `link`, `tabs`, `tabs-selected`, `pills` or `pills-selected`.

**Note🚨**: By default, the value of `type` prop is setted to `primary`.

```jsx
<div>
  <Button
    size="large"
    type="primary"
    onClick={}
    ext="Click Me"
  />
  <Button
    size="medium"
    type="secondary"
    onClick={}
    text="Click Me"
  />
  <Button
    size="small"
    type="round"
    onClick={}
    ext="Click Me"
  />
  <Button
    size="large"
    type="outlined"
    onClick={}
    ext="Click Me"
  />
  <Button
    size="medium"
    type="outlined-secondary"
    onClick={}
    text="Click Me"
  />
  <Button
    size="small"
    type="link"
    onClick={}
    ext="Click Me"
  />
  <Button
    size="large"
    type="tabs"
    onClick={}
    ext="Click Me"
  />
  <Button
    size="medium"
    type="tabs-selected"
    onClick={}
    text="Click Me"
  />
  <Button
    size="small"
    type="pills"
    onClick={}
    ext="Click Me"
  />
  <Button
    size="small"
    type="pills-selected"
    onClick={}
    ext="Click Me"
  />
</div>
```

### Button with icon

```jsx
<div>
  <Button
    onClick={}
    text="Primary"
    leftIcon={<Earth />}
  />
  <Button
    onClick={}
    text="Primary"
    leftIcon={<Earth />}
    rightIcon={<AlertRomb />}
  />

   <Button
    onClick={}
    text="Primary"
    rightIcon={<AlertRomb />}
  />
</div>
```

### Button disabled

```jsx

  <Button
    onClick={}
    text="Primary"
    disabled
  />

```

### Button with downloading state

```jsx
<Button onClick={activeDownload} text="Download" downloading={downladingState} finished={downladingState} />
```

### Button with loading state

```jsx

  <Button
    onClick={}
    text="Loading"
    loading={loadingState}
    finished={finished}
  />

```
