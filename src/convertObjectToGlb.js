import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter'

export function convertObjectToGlb(obj) {
  return new Promise((resolve) => {
    const exporter = new GLTFExporter()
    exporter.parse(
      obj,
      function (result) {
        console.log('glb result', result)
        const url = urlForArrayBuffer(result)
        resolve(url)
      },
      function (error) {
        console.error(error)
      },
      {
        binary: true,
        onlyVisible: false,
        forceIndices: true
      }
    )
  })
}

function urlForArrayBuffer(buffer) {
  const blob = new Blob([buffer], { type: 'application/octet-stream' })
  return URL.createObjectURL(blob)
}
