const Mock=require("mockjs");
const fs=require("fs")
let data=Mock.mock({
    "list|7":[{
        "title":"@ctitle(4)",
        "img":"@image(100x100),@color",
        "id|+1":0,
        "massge":"@ctitle(9)"
    }]
})
fs.writeFileSync("list.json",JSON.stringify(data))