'use client'

import React, {useState, useEffect, useRef} from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.mjs'

// Set up the worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFViewerProps {
    pdfUrl: string;
    className?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({pdfUrl, className = ''}) => {
    const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [scale, setScale] = useState(1.0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Load PDF document
    useEffect(() => {
        const loadPDF = async () => {
            try {
                setLoading(true);
                setError(null);

                const loadingTask = pdfjsLib.getDocument(pdfUrl);
                const pdfDocument = await loadingTask.promise;

                setPdf(pdfDocument);
                setTotalPages(pdfDocument.numPages);
                setCurrentPage(1);
            } catch (err) {
                setError('Failed to load PDF');
                console.error('Error loading PDF:', err);
            } finally {
                setLoading(false);
            }
        };

        if (pdfUrl) {
            loadPDF();
        }
    }, [pdfUrl]);

    // Render current page
    useEffect(() => {
        const renderPage = async () => {
            if (!pdf || !canvasRef.current) return;

            try {
                const page = await pdf.getPage(currentPage);
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');

                if (!context) return;

                const viewport = page.getViewport({scale});

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };

                await page.render(renderContext).promise;
            } catch (err) {
                console.error('Error rendering page:', err);
                setError('Failed to render page');
            }
        };

        renderPage();
    }, [pdf, currentPage, scale]);

    const goToPage = (pageNum: number) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    };

    const nextPage = () => goToPage(currentPage + 1);
    const prevPage = () => goToPage(currentPage - 1);
    const firstPage = () => goToPage(1);
    const lastPage = () => goToPage(totalPages);

    const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3.0));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
    const resetZoom = () => setScale(1.0);

    if (loading) {
        return (
            <div className={`pdf-viewer ${className}`}>
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading PDF...</p>
                </div>
                <style jsx>{`
                    .loading-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 400px;
                        gap: 16px;
                    }

                    .spinner {
                        width: 40px;
                        height: 40px;
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #3498db;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`pdf-viewer ${className}`}>
                <div className="error-container">
                    <p>Error: {error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
                <style jsx>{`
                    .error-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 400px;
                        gap: 16px;
                        color: #e74c3c;
                    }

                    button {
                        padding: 8px 16px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }

                    button:hover {
                        background: #2980b9;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className={`pdf-viewer ${className}`}>
            {/* Navigation Controls */}
            <div className="controls-container">
                <div className="navigation-controls">
                    <button
                        onClick={firstPage}
                        disabled={currentPage === 1}
                        title="First Page"
                    >
                        ⏮️
                    </button>
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        title="Previous Page"
                    >
                        ⬅️
                    </button>

                    <div className="page-info">
                        <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
                            min={1}
                            max={totalPages}
                            className="page-input"
                        />
                        <span>of {totalPages}</span>
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        title="Next Page"
                    >
                        ➡️
                    </button>
                    <button
                        onClick={lastPage}
                        disabled={currentPage === totalPages}
                        title="Last Page"
                    >
                        ⏭️
                    </button>
                </div>

                <div className="zoom-controls">
                    <button onClick={zoomOut} title="Zoom Out">🔍-</button>
                    <button onClick={resetZoom} title="Reset Zoom">{Math.round(scale * 100)}%</button>
                    <button onClick={zoomIn} title="Zoom In">🔍+</button>
                </div>
            </div>

            {/* PDF Canvas */}
            <div className="canvas-container">
                <canvas
                    ref={canvasRef}
                    className="pdf-canvas max-w-full h-auto bg-white"
                />
            </div>

            <style jsx>{`
                .pdf-viewer {
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    background: #f5f5f5;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .controls-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px;
                    background: #fff;
                    border-bottom: 1px solid #ddd;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .navigation-controls {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .zoom-controls {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                button {
                    padding: 8px 12px;
                    background: #3498db;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                    transition: background 0.2s;
                }

                button:hover:not(:disabled) {
                    background: #2980b9;
                }

                button:disabled {
                    background: #bdc3c7;
                    cursor: not-allowed;
                }

                .page-info {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: #2c3e50;
                }

                .page-input {
                    width: 60px;
                    padding: 4px 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    text-align: center;
                    font-size: 14px;
                }

                .canvas-container {
                    padding: 20px;
                    text-align: center;
                    background: #ffffff;
                    overflow: auto;
                    max-height: 100vh;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .pdf-canvas {
                    border: 1px solid #ddd;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    max-width: 100%;
                    height: auto;
                }

                @media (max-width: 768px) {
                    .controls-container {
                        flex-direction: column;
                        gap: 12px;
                    }

                    .navigation-controls {
                        order: 2;
                    }

                    .zoom-controls {
                        order: 1;
                    }

                    button {
                        padding: 10px 14px;
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PDFViewer;