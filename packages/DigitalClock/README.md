# Digital Clock


## API

### Digital Clock
```js
import DigitalClock from 'react-pure-bootstrap/DigitalClock';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `militaryTime` | boolean  | false | A 24-hour clock, sometimes referred to as military time, states the time according to the number of hours that have passed since midnight. |
| `tmpl` | function  | - | Call a function. It returns only one callback value which is the current date. You can use this as a template for displaying. |


## Examples

```js
import React from "react";
import DigitalClock from 'react-pure-bootstrap/DigitalClock';


export default () => {

    return (
        <>
            
            <DigitalClock tmpl={ (res) => {
                return <time>{res.hours}:{res.minutes}:{res.seconds} <span className="text-uppercase">{res.amPm}</span></time>
            }} />

            <DigitalClock militaryTime={true} tmpl={ (res) => {
                return <time>{res.hours}:{res.minutes}:{res.seconds} <span className="text-uppercase">{res.amPm}</span></time>
            }} />

                  
        </>
    );
}
```