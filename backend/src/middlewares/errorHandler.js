const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case 404:
            res.status(404).json({ error: "404 Not Found!", message: err.message, stackTrace: err.stack })
            break;
        case 403:
            res.status(403).json({ error: "403 Forbidden!", message: err.message, stackTrace: err.stack })
            break;
        case 401:
            res.status(401).json({ error: "401 Unauthorized!", message: err.message, stackTrace: err.stack })
            break;
        case 400:
            res.status(400).json({ error: "400 Bad request!", message: err.message, stackTrace: err.stack })
            break;
        case 500:
            res.status(500).json({ error: "500 Server error!", message: err.message, stackTrace: err.stack })
            break;
        default:
            console.log("No errors!")
    }
}

export { errorHandler }