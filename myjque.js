window.onload = function () {
    name='ssjh'
    var obj = {
        name: 'zhangsan',
        age: 66,
        say() {
            (()=>{
                console.log(this)
            })()
        },
        hh: this.name,
        ch: this
    }
    obj.say()
    function father() {
        this.name = this
    }
    var as = document.querySelector('.as')
    for(var i=1;i<11;i++){
        as.innerHTML+=`<a href="#dbbai${i}">dfgah${i}</a>`
    }
}
function getnum(m,n){
    if(m<=0||n<=0||n>m){
        return null
    }else if(n==1||n==m){
        return 1
    }else if(n==2||n==m-1){
        return m-1
    }else{
        return getnum(m-1,n-1)+getnum(m-1,n)
    }
}
function writenum(num) {
    var str = ''
    for(var i=1;i<=num;i++){
        str+='<div style="text-align:center">'
        for(var j=1;j<=i;j++){
            str+=`<span style="margin:10px">${getnum(i,j)}</span>`
        }
        str+='</div>'
    }
    document.write(str)
}