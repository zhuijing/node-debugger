var num = 1
function log(){
    num ++;
    console.log("num:", num)
}
setInterval(() => {
    console.log('time start')
    log()
    console.log('time end')
}, 1000);

