//Promise变化过程
let fs = require('fs')
let p1 = new Promise(function(resolve, reject) {
    fs.readFile('./1.txt', 'utf-8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

p1.then(function(data) { // 其实调用的就是resolve 函数，data是他的参数
    console.log(data)
}).catch(function(err){	 // 其实调用的就是reject 函数，err是他的参数
    console.log(err)
})

//变形后，就是这个样子，其实就是上面换了个写法
p1.then(data=> { // 其实调用的就是resolve 函数，data是他的参数
    console.log(data)
}).catch(err=>{	 // 其实调用的就是reject 函数，err是他的参数
    console.log(err)
})