# ng-explain-js


This library is an Angular onboarding component that allows you to highlight and introduce certain parts of a page when visiting it.  
Its use is not complicated. All you have to do is fill in an object array containing a title, a description and a selector.  

### Installation  
```
$ cd your-angular-project
$ npm install ng-explain-js
```  

### Create your steps Array of Object 
``` 
const steps = [
    {
        title: 'My step title',
        desc: 'My step description',
        selector: '.my_step_selector',
    },
]
```   

### Use the component
```
<app-explainjs [steps]="steps"></app-explainjs>
```

### Input | Output
| INPUT | OUTPUT        |                          TYPE                          |                 USE                 |
|:------|:--------------|:------------------------------------------------------:|:-----------------------------------:|
| steps | -             | steps: {title: string; desc: string; selector: string} | Array of objects used to list steps |
| -     | closeTutorial |         closeTutorial: EventEmitter<boolean\>          | Boolean use to handle modal closure |



