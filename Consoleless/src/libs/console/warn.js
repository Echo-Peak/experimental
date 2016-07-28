import parser from '../utils/parser';
export default function(...args){

    let context =Consoleless || Consoleless.context;

    let warn = document.createElement('li');
    warn.setAttribute('class','Consoleless-display-warn')

    let clean = [];
    args.forEach((arg,i,arrayLength)=>{
        let newSpan = document.createElement('span');

      clean.push(parser(arg,newSpan))
    });
    warn.innerHTML = clean;
    clearInterval(context.destroy)
    context.render(warn);
}
