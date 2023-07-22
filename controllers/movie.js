const { movie } = require('../models')
const logger =  require('../middlewares/logger')

const logDatas = (api, data, status) => {
    let logData = {
        API: api,
        response: data
    }
    if(status == "info"){
        logger.info(JSON.stringify(logData))   
    }else{
        logger.error(JSON.stringify(logData))   
    }
}

exports.index = (req, res) => {
    movie.findAll()
    .then(function (result) {
        logDatas("Get Data Movie", result, "info")
        res.json({
            code : true,
            data : result,
            message : "success"
        });
    })
    .catch(function (error) {
        logDatas("Get Data Movie", error.message, "error")
        res.json({
            code : false,
            data : error.message,
            message : error.message 
        });
    });
}

exports.show = (req, res) => {
    let id = req.params.id
    movie.findOne({ where: {id} })
    .then(function (result) {
        logDatas("Get One Data Movie", result, "info")
        res.json({
            code : true,
            data : result,
            message : "success"
        });
    })
    .catch(function (error) {
        logDatas("Get One Data Movie", error.message, "error")
        res.json({
            code : false,
            data : error.message,
            message : error.message 
        });
    });
}

exports.create = (req, res) => {
    movie.create(req.body)
    .then(function (result) {
        logDatas("Post Data Movie", result, "info")
        res.json({
            code : true,
            data : result,
            message : "success"
        });
    })
    .catch(function (error) {
        logDatas("Post Data Movie", error.message, "error")
        res.json({
            code : false,
            data : error.message,
            message : error.message 
        });
    });
}

exports.update = (req, res) => {
    let id = req.params.id
    movie.update(req.body, { where: {id} })
    .then(function (result) {
        let resp = { id: id}
        logDatas("Update Data Movie", resp, "info")
        res.json({
            code : true,
            data : result,
            message : "id : " + id
        });
    })
    .catch(function (error) {
        logDatas("Update Data Movie", error.message, "error")
        res.json({
            code : false,
            data : error.message,
            message : error.message 
        });
    });
}

exports.delete = (req, res) => {
    let id = req.params.id
    movie.destroy({ where: {id} })
    .then(function (result) {
        let message;
        if(result == 0){
            message = "Data Not Found";
        }else{
            message = "Deleted Data Success";
        }
        let resData = {
            status: "success",
            message: message
        }
        logDatas("Delete Data Movie", resData, "info")
        res.json({
            code : true,
            data : resData,
            message : "success"
        });
    })
    .catch(function (error) {
        logDatas("Delete Data Movie", error.message, "error")
        res.json({
            code : false,
            data : error.message,
            message : error.message 
        });
    });
}
