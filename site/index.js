const js = import("./node_modules/@z0ff/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly🕸");
});
