import parser from '../utils/parser';
export default function(...args){

    let context = Consoleless ||Consoleless.context;

    let info = document.createElement('li');
    info.setAttribute('class','Consoleless-display-info')

    let clean = [];
    args.forEach((arg,i,arrayLength)=>{
        let newSpan = document.createElement('span');

      clean.push(parser(arg,newSpan))
    });
    info.innerHTML = clean;
    clearInterval(context.destroy)
    context.render(info);
}
