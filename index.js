 import data from './data.json' assert {
    type: 'json'
 };


//  const loopJson = (data) =>{
//          data && data.forEach((item,index) => {
//             console.log(`index : ${index}-Item${item.userId}:${item.id}-${item.title}:${item.body}`)
//          });
//  }
//  loopJson(data);

// const deleteDataViaId = (data,id) =>{
//     data && data.forEach((item,index) => {
//         if(item.id == id){
//             data.splice(index,1);
//         }
//     });
//     console.log(data)
// }
// deleteDataViaId(data, 1);

const addData =(data,userid,id,title,body) =>{
    data.push({userid,id,title,body});
    console.log(data);
}
addData(data,data.length + 1,data.length +1,'maximas','my name');