import model from '../models/author';
const { Author } = model;

class Authors {
    static create(req, res){
        const author = new Author(req.body)

        author.save((err, doc)=>{
            if(err) return res.json({success: false,err});
            res.status(200).json({
                success:true,
                author:doc
            })
        })
    }

    // static allAuthors(req, res){
    //     return Author
    //     .find()
    //     .then(authors=> res.status(200)
    //     .send(authors));
    // }

    static pageLess(req, res){
        const pageLimit = req.params.pageLimit; 
        Author.find({'pages': {$lte: pageLimit}}).exec((err,docs)=>{
            //console.log(docs);
            if(docs != ""){
            return res.status(200).send(docs);
            }else{
            return res.status(404).json({success:"No record found",});
            }

        })
    }

    static pageGreat(req, res){
        const pageGreat = req.params.pageGreat;
        Author.find({'pages':{$gt: pageGreat}}).exec((err, docs)=>{
            if(docs != ""){
                return res.status(200).send(docs);
                }else{
                return res.status(404).json({success:"No record found",});
            } 
        })
    }

    static searchName(req, res){
        const searchName = req.params.searchName;
        Author.find({$text: {$search: searchName}}).exec((err, docs)=>{
            if(docs != ""){
                return res.status(200).send(docs);
                }else{
                return res.status(404).json({success:"No record found",});
            } 
        })
    }

    static searchBook(req, res){
        const searchBook = req.params.searchBook;
        Author.find({$text:{$search: searchBook}}).exec((err, docs)=>{
            if(docs != ""){
                return res.status(200).send(docs);
                }else{
                return res.status(404).json({success:"No record found",});
            } 
        })
    }

    
}

export default Authors;