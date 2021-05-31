const http = require('http');
function htmlTemplate(title,head,body){
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset = 'utf-8'>
      <title>${title}</title>
      ${head}
    </head>
    <body>${body}</body>
  </html>
  `
}


let app = http.createServer((req,res)=>{
  res.writeHead(200);
  res.end(htmlTemplate("MobileWebTest","",""));
})

app.listen(3000);