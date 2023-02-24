# ng-explain  

This library is an Angular onboarding component that allows you to highlight and introduce certain parts of a page when 
visiting it. Its use is not complicated. All you have to do is fill in an object array containing a title, a description
and a selector.  

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
        photoUrl?: 'https://my-photo-url.com'
    },
]
```

### Use the component
```
<ng-explain
          [steps]="steps"
          [color]="'#hexaColor'"
          [colorSecondary]="'#hexaColor'"
          [colorText]="'#hexaColor'"
          (closeTutorial)="closeEventEmit">
</ng-explain>
```

### Input | Output
|     INPUTS     |    OUTPUT     |                          TYPE                          |                 USE                 |
|:--------------:|:-------------:|:------------------------------------------------------:|:-----------------------------------:|
|     steps      |       -       | steps: {title: string; desc: string; selector: string} | Array of objects used to list steps |
|     color      |       -       |                         string                         |       Primary color for style       |
| colorSecondary |       -       |                         string                         |       Second color for style        |
|   colorText    |       -       |                         string                         |             Text color              |
|       -        | closeTutorial |          closeTutorial: EventEmitter<boolean>          | Boolean use to handle modal closure |
