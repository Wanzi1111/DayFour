const data=require("./public/data/list.json");
module.exports={
    lintOnSave:false,
    devServer:{
        before:function(app){
            app.get("/getdata",(req,res)=>{
                res.send(data)

            })

        }
    }
}