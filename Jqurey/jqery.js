/*
//找兄弟函数
function getSiblings(node){
    var allChildren = node.parentNode.children
    var arrary = { 'length': 0 }
    for (var i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            arrary[arrary.length] = allChildren[i]
            arrary.length++
        }
    }
    return arrary
}
/*遍历添加属性方式 第三种方法：
function addClass(node,classes){
    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove';//f3
        node.classList[methodName](key)
    }
}

window.zzcdom = {}
zzcdom.getSiblings=getSiblings
zzcdom.addClass=addClass

zzcdom.getSiblings(item3)
zzcdom.addClass(item3,{'a':true,'b':false,'c':true,'d':true})


Node.prototype.getSiblings=function(){//这种方式不好，因为这是在改Node的公用属性prototype，改的人多了会混乱
    var allChildren = this.parentNode.children
    var arrary = { 'length': 0 }
    for (var i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            arrary[arrary.length] = allChildren[i]
            arrary.length++
        }
    }
    return arrary
}
console.log(item3.getSiblings())//等价于
console.log(item3.getSiblings.call(item3))
*/

$=function(tag) {
    let tags = document.querySelectorAll(tag)
    return {
        addClass:function (backgroundColor) {
            for(let i=0;i<tags.length;i++){
                tags[i].classList.add(backgroundColor)
            }
        },
        setText:function(txt){
            for(let i=0;i<tags.length;i++) {
                tags[i].textContent=txt
            }
        }
    }
}

//window.$ = Jqurey

//遍历添加属性方式
//第一种方法：
//classes.forEach((value) =>item3.classList.add(value))
/*第二种方法：
item3.classList.add('a')
item3.classList.add('b')
item3.classList.add('c')*/

        /*f2if(value){
            node.classList.add(key)
        }else{
            node.classList.remove(key)
        }*/
        //f1:  value ? node.classList.add(key) : node.classList.remove(key)

//console.log($('li'))
