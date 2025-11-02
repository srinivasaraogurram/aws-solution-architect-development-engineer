import React, { useEffect, useRef, useState } from 'react'

export default function PdfViewer() {
  const canvasRef = useRef(null)
  const [pageNum, setPageNum] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [scale, setScale] = useState(1.2)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const file = params.get('file')
    if (!file) return

    const workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
    script.onload = () => {
      // eslint-disable-next-line no-undef
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc
      // eslint-disable-next-line no-undef
      pdfjsLib.getDocument(file).promise.then((doc) => {
        setPageCount(doc.numPages)
        renderPage(doc, pageNum)
        function renderPage(d, n) {
          d.getPage(n).then(page => {
            const viewport = page.getViewport({ scale })
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            canvas.height = viewport.height
            canvas.width = viewport.width
            page.render({ canvasContext: ctx, viewport })
          })
        }
        const onNext = () => {
          setPageNum(p => {
            const next = Math.min(p + 1, doc.numPages)
            renderPage(doc, next)
            return next
          })
        }
        const onPrev = () => {
          setPageNum(p => {
            const prev = Math.max(p - 1, 1)
            renderPage(doc, prev)
            return prev
          })
        }
        const onWheel = (e) => {
          const delta = e.deltaY > 0 ? -0.1 : 0.1
          setScale(s => {
            const ns = Math.min(Math.max(s + delta, 0.5), 3)
            renderPage(doc, pageNum)
            return ns
          })
        }
        document.getElementById('nextPage').onclick = onNext
        document.getElementById('prevPage').onclick = onPrev
        canvasRef.current.addEventListener('wheel', onWheel, { passive: true })
      })
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <div className="pdf-controls">
        <button id="prevPage">Prev</button>
        <span style={{margin: '0 8px'}}>Page {pageNum} / {pageCount}</span>
        <button id="nextPage">Next</button>
      </div>
      <canvas ref={canvasRef} style={{ width: '100%', border: '1px solid #e2e8f0', background: '#fff' }} />
    </div>
  )
}
