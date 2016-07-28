import parser from '../utils/parser';
export default function(...args){

    let context = Consoleless ||Consoleless.context;

    let error = document.createElement('li');
    error.setAttribute('class','Consoleless-display-error')

    let clean = [];
    args.forEach((arg,i,arrayLength)=>{
        let newSpan = document.createElement('span');

      clean.push(parser(arg,newSpan))
    });
    error.innerHTML = clean;
    clearInterval(context.destroy)
    context.render(error);
}
