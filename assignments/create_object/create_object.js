function CreateObject(arr) {
    // Write your code here
    var obj = {};
    for (var i=0; i<arr.length-1; i=i+2){
        obj[arr[i]]=arr[i+1]
    }
    return obj

}
Yash 

// ["firstName", "Yash", "lastName": "Goyal"]
module.exports = CreateObject;

