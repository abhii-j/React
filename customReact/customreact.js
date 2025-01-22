function customRander(reactE,container){
    // const docElement= document.createElement(reactE.type)
    // docElement.innerHTML= reactE.children
    // docElement.setAttribute('href',reactE.props.href);
    // docElement.setAttribute('target',reactE.props.target);
    // // docElement.setAttribute('href',reactE.props.href);
    // container.appendChild(docElement)

    const docElement= document.createElement(reactE.type)
    docElement.innerHTML= reactE.children

    for (const p in reactE.props) {
        if (p==='children') continue;
            
        
        docElement.setAttribute(p,reactE.props[p])
    }

    container.appendChild(docElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children:'visit'
}

const main=document.querySelector('#root');

customRander(reactElement,main)


