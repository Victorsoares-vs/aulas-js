/* FUNÇÃO NORMAL - (SEM PROMISE)

function soma () {
    let result = 1 + 1

    if(result == 2) {
        successCallback()
    } else {
        errCallback()    
    }
}

function successCallback() {
    console.log("Yeah! Number 2!")
}

function errCallback() {
    console.log("Oops... Something Wrong.")
}

soma() */

// MESMA FUNÇÃO - (COM PROMISE)

/*let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success!')
    } else {
        reject('Failed!')
    }
})

p.then((message) => {
    console.log('This is the then ' + message)
}).catch((err) => {
    console.log('This is the catch ' + err)
})*/

// Uma 'promise' sempre vai retornar dois parâmetors: um de acerto e outro de erro (resolve, reject)
//Uma promise sempre vai ser invocada usando-se o atributo '.then', no qual se informa o que se deseja que aconteça com o caso de sucesso
//caso haja uma resposta para erro, ela deve ser invocada com o '.catch', sendo informada logo após o fechamento da '.then'.

//as promises devem ser inseridas usando-se as 'arrow functions' (=> {}), que são meio que abreviações para functions 'normais'.

// EXEMPLO 2: TRANSFORMANDO FUNÇÃO NUMA 'PROMISE'

const betterDeveloper = 'Jean'

function whoIsBetterCallback(callback, errorCallback) {
    if(betterDeveloper != 'Jean' && betterDeveloper != 'Victor') {
        errorCallback({
            name: 'This is Wrong',
            message: betterDeveloper + '? Really'
        })
    } else {
        callback({
            name: betterDeveloper,
            message: ' The friends are the best!'
        })
    }
}

whoIsBetterCallback((result) => {
    console.log(result.name + '? Yeah!' + result.message)    
}, (error) => {     
    console.log(error.name + '' + error.message)
})

// APÓS TRANSFORMAÇÃO: 

function whoIsBetterCallback(callback, errorCallback) {
    return new Promise ((resolve, reject) => {
        if(betterDeveloper != 'Jean' && betterDeveloper != 'Victor') {
            reject({
                name: 'This is Wrong... ',
                message: betterDeveloper + '? Really??'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: ' The friends are the best!'
            })
        }
    })    // colocamos todo o bloco do 'if/else' dentro de nossa promise a ser retornada;
}

whoIsBetterCallback()
    .then((result) => { //chamamos o result com o '.then', por se tratar do 'resolve' da promise.
        console.log(result.name + '? Yeah!' + result.message)    
    }).catch ((error) => { // chamamos do mesmo jeito o error com o '.catch', por se tratar do 'reject' da promise.
        console.log(error.name + '' + error.message)
    })

//Interessante perceber que apenas por estar dentro do escopo da function, o '.then' e o '.catch' não precisam de fechamento externo a eles, pois eles sozinhos já funcionam, aparentemente.


