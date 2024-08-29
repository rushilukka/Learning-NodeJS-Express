//      8-HttpHeader

const express = require('express');
const app = express();

const fun = () => {

    app.get('/head', (req, res) => {
        // Fetching insights from request headers using req.get()
        const userAgent = req.get('User-Agent');
        const host = req.get('Host');
        const acceptLanguage = req.get('Accept-Language');
        
        console.log('User-Agent:', userAgent);
        console.log('Host:', host);
        console.log('Accept-Language:', acceptLanguage);
    
        // Setting custom headers in the response using res.setHeader()
        res.setHeader('X-Custom-Header', 'CustomHeaderValue');
        res.setHeader('X-Powered-By', 'Express');
        
        // Sending a response
        res.send({
            message: 'Headers demonstration',
            requestHeaders: {
                'User-Agent': userAgent,
                'Host': host,
                'Accept-Language': acceptLanguage
            },
            responseHeaders: {
                'X-Custom-Header': 'CustomHeaderValue',
                'X-Powered-By': 'Express'
            }
        });
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

};
module.exports = {
    fun
};
