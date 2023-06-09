# Multifunction Select


## API

### Multifunction Select
```js
import MultiFuncSelect from 'react-pure-bootstrap/MultiFuncSelect';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"}]` <br /> <blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote>|
| `multiSelect` | JSON Object | `{"valid": true, "selectAll": true, "selectAllLabel": "Select all options"}` | Enable multi-select. <blockquote>**Parameters Description:** <br />`valid` -->  *(Boolean)* *(required)* Set component in which multiple options can be selected at once to be valid.  <br />`selectAll` --> *(Boolean)* *(required)* Enables select all button. <br />`selectAllLabel` -->  *(String)* Sets the select all button label. (Support html tags) <br />`data` -->  *(JSON Object \| null)* *(required)* Sets a default data for control's values. (such as `{values: ['value-1','value-3'], labels: ['Option 1','Option 3'], queryStrings: ['','']}`)</blockquote> |
| `depth` | number  | 100 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `controlArrow` | ReactNode  | `<svg width="10px" height="10px" viewBox="0 -4.5 20 20"><g stroke="none" strokeWidth="1" fill="none"><g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5"><g transform="translate(56.000000, 160.000000)"><path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"></path></g></g></g></svg>` | Set an arrow of control |
| `data` | string  | - | Incoming data, you can set the third parameter of `onFetch`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> |
| `fetchTrigger` | boolean  | false | Use buttons to trigger data queries. |
| `fetchTriggerForDefaultData` | JSON Object \| null  | null | Sets a default data for control's values. (such as `{values: ['value-1','value-3'], labels: ['Option 1','Option 3'], queryStrings: ['','']}`) <br />Only takes effect when `fetchTrigger` is *true* and `value` is not empty. |
| `fetchNoneInfo` | string  | - | The text of the data not fetched. |
| `fetchUpdate` | boolean  | false | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string. <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string.</blockquote> |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns five callback values. <br /> <ol><li>The first is the current control</li><li>The second is the control of the value save</li><li> The third is the current value (a string)</li><li>The fourth is the fetched data (an array)</li><li>The last is a string passed by the `data` attribute</li></ol> |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the current control</li><li>The second is the control of the value save</li><li>The last is the data (Exposes the JSON (Returns an Array Collection when `multiSelect` is enabled) format data about the option as an argument.</li></ol> |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.


---

JSON Object Literals configuration properties of the `options`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags</blockquote> |
| `value` | string | - | Specify the value for each option |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials |



## Examples

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import MultiFuncSelect from 'react-pure-bootstrap/MultiFuncSelect';
import axios from 'axios';

// component styles
import 'react-pure-bootstrap/MultiFuncSelect/index.css';

class DataService {
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'foo', item_code: 'bar', kb_code: 'fb,foobar'},
                {item_name: 'foo2', item_code: 'bar2', kb_code: 'fb2,foobar2'},
                {item_name: 'foo3', item_code: 'bar3', kb_code: 'fb3,foobar3'}
            ]
        };
    }


    async getListUseAxios(searchStr = '', limit = 0) {
        const response = await axios.get(`https://api?s=${searchStr}&limit=${limit}`);
        return response;
    }

    	
}

export default () => {
 
    return (
        <>



            <h3>Normal (Single selection and Multiple selection)</h3>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="value-2"
                placeholder="Select"
                name="name"
                options={`
                [
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"}
                ]  
                `}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />



            <MultiFuncSelect
                value="value-3,value-2"
                multiSelect={{
                    valid: true, 
                    selectAll: true, 
                    selectAllLabel: "Select all options",
                    data: {
                        values: ['value-3','value-2'],
                        labels: ['Option 3','<del style=color:red>deprecate</del>Option 2'],
                        queryStrings: ['option3','option2']
                    }
                }}
                placeholder="Select"
                name="name"
                options={`
                [
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"}
                ]  
                `}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />



            <h3>Single selection (automatically trigger request)</h3>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="bar2"
                placeholder="Select"
                name="name"
                data="mydata"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","queryString": "fb,foobar"},
                        {"label": "foo2","value": "bar2","queryString": "fb2,foobar2"},
                        {"label": "foo3","value": "bar3","queryString": "fb3,foobar3"}
                    ]   
                    */

                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />


            <h3>Single selection (manual trigger request)</h3>
            <p>Using "fetchTrigger" and "fetchTriggerForDefaultData" parameters</p>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="bar2"
                placeholder="Search Options"
                name="name"
                data="mydata"
                fetchUpdate={true}
                fetchTrigger={true}
                fetchTriggerForDefaultData={{
                    values: ['bar2'],
                    labels: ['foo2'],
                    queryStrings: ['fb2,foobar2']
                }}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />



            <h3>Multiple selection (automatically trigger request)</h3>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="bar2"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options"
                    data: {
                        values: ['bar2'],
                        labels: ['foo2'],
                        queryStrings: ['fb2,foobar2']
                    }
                }}
                name="target_user_id"
                placeholder="Select"
                data="mydata"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />
           

            <h3>Multiple selection (manual trigger request)</h3>
            <p>Using "fetchTrigger" and "fetchTriggerForDefaultData" parameters</p>
            {/* ================================================================== */}  
            <MultiFuncSelect
                value="bar2"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options"
                    data: {
                        values: ['bar2'],
                        labels: ['foo2'],
                        queryStrings: ['fb2,foobar2']
                    }
                }}
                name="target_user_id"
                placeholder="Select"
                data="mydata"
                fetchUpdate={true}
                fetchTrigger={true}
                fetchTriggerForDefaultData={{
                    values: ['bar2'],
                    labels: ['foo2'],
                    queryStrings: ['fb2,foobar2']
                }}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />

        </>
    );
}
```


## Multi-Level Cascading Select (Implemented using `useState()`)


```js
import React from "react";
import MultiFuncSelect from 'react-pure-bootstrap/MultiFuncSelect';

// component styles
import 'react-pure-bootstrap/MultiFuncSelect/index.css';

class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const demoData = [
            {
                "parent_id": 0,
                "item_code": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "item_code": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 1,
                "item_code": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }

    // `getListThird()` must be a Promise Object
    async getListThird(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 5,
                "item_code": 6,
                "item_name": "Title 6",
                "item_type": "dev"
            },
            {
                "parent_id": 5,
                "item_code": 7,
                "item_name": "Title 7",
                "item_type": "dev"
            },
            {
                "parent_id": 3,
                "item_code": 8,
                "item_name": "Title 8",
                "item_type": "web/ui"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }
}


export default () => {

    const service = new DataService;

    const [secondValue, setSecondValue] = useState<string>('');
    const [thirdValue, setThirdValue] = useState<string>('');

    const [secondOptions, setSecondOptions] = useState<string>('');
    const [thirdOptions, setThirdOptions] = useState<string>('');

    function toSlug(str: string) {

        return str
            .toString()
            .replace(/[^\w\s\-！￥【】\u4e00-\u9eff]/gi, '')
            .replace(/\s/g, '-')
            .replace(/(\-){2,}/g, '-')
            .replace(/\-\s*$/, '')
            .toLowerCase();
    };
    
    

    return (
        <>

            <MultiFuncSelect
                placeholder="Select"
                name="name-1"
                label="Level 1"
                fetchFuncAsync={service}
                fetchFuncMethod="getListFirst"
                fetchFuncMethodParams={['', 0, 1]}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            label: item.item_name,
                            value: toSlug(item.item_name),
                            queryString: '',
                            queryId: item.item_code
                        }
                    }); 
                    return formattedData;
                }}
                onChange={(e: any, e2: any, val: any) => {
                    const queryId = val.queryId;

                    // value of "name-2" and "name-3"
                    setSecondValue('');
                    setThirdValue('');
                    setThirdOptions('');


                    // options of "name-2"
                    service.getListSecond('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setSecondOptions(JSON.stringify(formattedData));

                    });
                  
                }}
            />


            <MultiFuncSelect
                value={secondValue}
                placeholder="Select"
                name="name-2"
                label="Level 2"
                options={secondOptions}
                onChange={(e: any, e2: any, val: any) => {
                    const queryId = val.queryId;
                
                    // value of "name-3"
                    setThirdValue('');

                    // options of "name-3"
                    service.getListThird('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setThirdOptions(JSON.stringify(formattedData));


                    });  
                }}
            />


            <MultiFuncSelect
                value={thirdValue}
                placeholder="Select"
                name="name-3"
                label="Level 3"
                options={thirdOptions}
            />



        </>
    );
}
```



## Multi-Level Cascading Select (Implemented using `data-options` of component)

It is usually used for complex cascading `<MultiFuncSelect />` components


```js
import React from "react";
import MultiFuncSelect from 'react-pure-bootstrap/MultiFuncSelect';

// component styles
import 'react-pure-bootstrap/MultiFuncSelect/index.css';

class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const demoData = [
            {
                "parent_id": 0,
                "item_code": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "item_code": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 1,
                "item_code": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }

}


export default () => {

    const service = new DataService;
    const [dynamicData, setDynamicData] = useState<string>('');

    function toSlug(str: string) {

        return str
            .toString()
            .replace(/[^\w\s\-！￥【】\u4e00-\u9eff]/gi, '')
            .replace(/\s/g, '-')
            .replace(/(\-){2,}/g, '-')
            .replace(/\-\s*$/, '')
            .toLowerCase();
    };
    
    return (
        <>

            <MultiFuncSelect
                placeholder="Select"
                name="name-1"
                label="Level 1"
                fetchFuncAsync={service}
                fetchFuncMethod="getListFirst"
                fetchFuncMethodParams={['', 0, 1]}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            label: item.item_name,
                            value: toSlug(item.item_name),
                            queryString: '',
                            queryId: item.item_code
                        }
                    }); 
                    return formattedData;
                }}
                onChange={(e: any, e2: any, val: any) => {
                    const queryId = val.queryId;


                    // options of "name-2"
                    service.getListSecond('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setDynamicData(queryId);
                        document.querySelector(`#select-level-2`).dataset.options = JSON.stringify(formattedData);

                    });
                  
                }}
            />


            <MultiFuncSelect
                id="select-level-2"
                value={''}
                data={dynamicData}  // `data` attribute will trigger component update
                placeholder="Select"
                name="name-2"
                label="Level 2"
                options={''}
                
            />

        </>
    );

}
```