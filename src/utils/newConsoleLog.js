function checkDataType(data, first) {
  if (typeof data === "object")
    return `<span id="console-${typeof data}" class="code">${JSON.stringify(
      data
    )}</span>`;
  return typeof data === "string"
    ? `<span id="console-${typeof data}" class="code">'${data}'</span>`
    : `<span id="console-${typeof data}" class="code">${data}</span>`;
}

export function newConsoleLog(value1, ...restOfValues) {
  const valuesToString = restOfValues.reduce(
    (acc, x) => `${acc}, ${checkDataType(x)}`,
    `${checkDataType(value1, true)}`
  );
  const $console = document.getElementById("console");
  $console.innerHTML += `${valuesToString}<br/><br/>`;
}
