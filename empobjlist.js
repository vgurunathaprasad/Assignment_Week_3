var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];

 for(i=0;i<arr.length;i++){
    obj = {};
    for(let k of arr[i]){
        obj[k[0]] = k[1];
    }
    tranformEmployeeList.push(obj);
 }

 return tranformEmployeeList;
}