const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"I'm a h1 tag"),//if we want to have another tag under same structure then we have to pass it as array
React.createElement("h2",{},"I'm a h2 tag"),
]
),
React.createElement("div",{id:"chil2"},[
    React.createElement("h1",{},"I'm a h1 tag"),//if we want to have another tag under same structure then we have to pass it as array
    React.createElement("h2",{},"I'm a h2 tag"),
    ]
    )
]
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*
const heading =React.createElement("h1",{id:"heading",xyx:"abc"},"Hello world from React");
//console.log(heading); react element is creating here nothing but java script object is creating over here
const hai=ReactDOM.createRoot(document.getElementById("root"));
hai.render(heading);*/