## Alternative implementations

* For Loop
```const sequenceSum = (begin, end, step) => {```
```let sum = 0;```
```for (let i=begin;i<=end;i+=step){```
```sum+=i;```
```}```
```return sum```
```}```

* While Loop
```const sequenceSum = (begin, end, step) => {```
```let i=begin;```
```while (i<=end){```
```sum+=i;```
```i+=step;```
```}```
```return sum```
```}```