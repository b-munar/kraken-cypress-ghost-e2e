const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { options, krakenFolders, krakenPath } = config;

async function executeTest() {
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");
  if (fs.existsSync(krakenPath)) {
    if (!fs.existsSync(`./reports/${datetime}`)) {
      fs.mkdirSync(`./reports/${datetime}`, { recursive: true });
    }
    for (pair of krakenFolders) {
      if (
        fs.existsSync(krakenPath + pair[0]) &&
        fs.existsSync(krakenPath + pair[1])
      ) {
        if (!fs.existsSync(`./reports/${datetime}/${pair[0]}`)) {
          fs.mkdirSync(`./reports/${datetime}/${pair[0]}`, { recursive: true });
        }
        const refFiles = fs.readdirSync(krakenPath + pair[0]);
        const compFiles = fs.readdirSync(krakenPath + pair[1]);
        const steps =
          refFiles.length === compFiles.length
            ? refFiles.length
            : Math.min(refFiles.length, compFiles.length);
        let stepsInfo = {};
        for (i = 0; i < steps; i++) {
          const data = await compareImages(
            fs.readFileSync(krakenPath + pair[0] + "/" + refFiles[i]),
            fs.readFileSync(krakenPath + pair[1] + "/" + compFiles[i]),
            options
          );
          stepsInfo[i] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
          };
          fs.writeFileSync(
            `./reports/${datetime}/${pair[0]}/compare-step${i}.png`,
            data.getBuffer()
          );
        }
        resultInfo[pair[0]] = stepsInfo;
      }
    }
  }
  /* fs.writeFileSync(
    `./results/${datetime}/report.html`,
    createReport(datetime, resultInfo)
  );
  fs.copyFileSync("./index.css", `./results/${datetime}/index.css`);
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report in the reports folder"); */
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function browser(b, info) {
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h2>Browser: ${b}</h2>
      <p>Data: ${JSON.stringify(info)}</p>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="after-${b}.png" id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
    </div>
  </div>
</div>`;
}

function createReport(datetime, resInfo) {
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Reporte de diferencias visuales 
          </h1>
          <p>Executed: ${datetime}</p>
          <div id="visualizer">
              ${config.browsers.map((b) => browser(b, resInfo[b]))}
          </div>
      </body>
  </html>`;
}
