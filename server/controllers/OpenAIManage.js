const { Configuration, OpenAI } = require("openai");
const Chat = require("../models/Chat");
const User = require("../models/User");
 const openai = new OpenAI(
    {apiKey: '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'
}
)
const QuestionType1 = async (req,res) => {
    try {
        const {s,n} = req.body;
        if(!s)
        return res.status(400).json({message:"s not found",'status':'fail'});
        if(!n)
        return res.status(400).json({message:"n not found",'status':'fail'});
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
          return res.status(404).send("Not found");
        }  
        const resp = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
            messages: [
              { role: "user", content:`Cho tổng số hạt 2Z + N = ${s} trong đó N = ${n} vậy Z bằng bao nhiêu , dựa vào Z tìm nguyên tố trong bàng tuần hoàn ` }
            ]  
        })           
        const chat = new Chat();
        chat.question=`Cho tổng số hạt 2Z + N = ${s} trong đó N = ${n} vậy nguyên tố đó là gì ?`;
        chat.answer=resp.choices[0].message.content;
        user.chats.push(chat);
        user.save()

        res.status(200).json(resp.choices[0].message.content )
      } catch(e) {
          res.status(400).json({message: e.message})
      }
}

const QuestionType2 = async (req,res) => {
  try {
      const {element} = req.body;
      if(!element)
      return res.status(400).json({message:"element not found",'status':'fail'});
      const user = await User.findOne({ _id: req.user.id });
      if (!user) {
        return res.status(404).send("Not found");
      }  
      const resp = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content:`Viết cấu hình electron của nguyên tố ${element}` }
          ]  
      })           
      const chat = new Chat();
      chat.question=`Viết cấu hình electron của nguyên tố ${element}`;
      chat.answer=resp.choices[0].message.content;
      user.chats.push(chat);
      user.save()

      res.status(200).json(resp.choices[0].message.content )
    } catch(e) {
        res.status(400).json({message: e.message})
    }
}

const UncategoryQuestion = async (req,res) => {
     try{
      const {text} = req.body;
      const user = await User.findOne({ _id: req.user.id });
      if (!user) {
        return res.status(404).send("Not found");
      }  
      const resp = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content:`Chỉ trả lời nếu như câu hỏi liên quan đến hoá học , ${text}` }
          ]  
      })      
      const chat = new Chat();
      chat.question=`${text}`;
      chat.answer=resp.choices[0].message.content;
      user.chats.push(chat);
      user.save()

      res.status(200).json(resp.choices[0].message.content )
     }catch(err){
     console.log(err);
     return res.status(400).json({message:'error',status:'fail'});
     }
}

const GetChat = async(req,res) => {
  try {
      const user = await User.findOne({_id:req.user.id});
      if(!user){
          return res.status(404).send("Not found");
      }
     
      return res.status(200).json(user.chats);
  } catch(err) {
      console.log(err);
      return res.status(400).json({"message":err,"status":"fail"});
  }
};




module.exports = {QuestionType1,UncategoryQuestion,GetChat,QuestionType2}