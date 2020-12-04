const canvas = d3.select("#canvas");

const URL = getMessages();

function getMessages(){
  const lang = getBrowserLang();
  if(lang==="en"){
      return "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
  }else{
      return "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
  }
}

function getBrowserLang() {
  const lang = navigator.language || navigator.userLanguage;
  console.log(lang);
  return lang;
}

const width = 1000;
const height = 500;

const margin = {top:10 ,left:50, bottom:40, right:10};

const iwidth = width-margin.left-margin.right;
const iheight = height-margin.top-margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

let y = d3.scaleLinear()
    .domain([0, 973306])
    .range([iheight, 0]);

async function getData() {
    let peticion = d3.json(URL).then(data => { return data});
    let datos = await peticion
    console.log(datos)
    let x = d3.scaleBand()
        .domain(datos.map(d => d.name))
        .range([0, iwidth])
        .padding(0.1);
    
    const bars = g.selectAll("rect").data(datos);
    bars.enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => iheight - y(d.value))
        .attr("width", x.bandwidth())	
        .style("fill", "steelblue");
    
    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0,${iheight})`)
    
    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisBottom(x))
        .call(d3.axisLeft(y))
    }
    
    getData()
