const Url = require('../model/db.model')
const { nanoid } = require('nanoid')

const homepage = (req , res)=>{
    res.render("index",{error:null})
}
const generateUrl = async (req, res) => {
  const { url } = req.body||{};
  if (!url) { return res.status(400).render('index',{error: "Url is required" }); }

    const ShortId = nanoid(8);
    const entry = await Url.create({
        shortID:ShortId,
        redirectUrl :url,
        visitHistory:[]
    })
    const Shorturl = `${req.protocol}://${req.get('host')}/${entry.shortID}`
   return res.render("index",{Id:Shorturl,error:null})
}

const redirectUrl = async(req,res)=>{
  const sorturl = req.params.shorturl  
  const entry = await Url.findOneAndUpdate({
    shortID:sorturl
  },
  {
    $push:{visitHistory:{timeStamp:Date.now()}}
  })
   if (!entry) {
    return res.status(404).send("Short URL not found");
  }
  res.redirect(entry.redirectUrl)

}
module.exports = {
    homepage,
    redirectUrl,
    generateUrl

}

